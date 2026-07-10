import nodemailer from "nodemailer";

// nodemailer needs the Node.js runtime (not Edge); never cache this route.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const LIMITS = {
  name: { min: 2, max: 100 },
  email: { max: 254 },
  message: { min: 10, max: 5000 },
};

// Reasonable, deliberately simple email shape check.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Escape every HTML-significant character so user input can never become
// markup in the email we receive (prevents stored/email XSS & injection).
const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// Collapse line breaks — defends header fields (subject/replyTo) against
// CRLF header-injection.
const oneLine = (s) => String(s).replace(/[\r\n]+/g, " ").trim();

const json = (body, status) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });

// --- Best-effort in-memory rate limiter (per IP, per warm instance) ---
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_HITS = 5;
const hits = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Opportunistic cleanup so the map can't grow unbounded.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (!times.some((t) => now - t < WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > MAX_HITS;
}

export async function POST(req) {
  // 1) Same-origin guard — browsers always send Origin on cross-site POSTs.
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (origin) {
    try {
      if (new URL(origin).host !== host) {
        return json({ success: false, error: "Forbidden." }, 403);
      }
    } catch {
      return json({ success: false, error: "Forbidden." }, 403);
    }
  }

  // 2) Only accept JSON.
  const contentType = req.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return json({ success: false, error: "Invalid request." }, 415);
  }

  // 3) Rate limit per IP.
  const ip =
    (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  if (isRateLimited(ip)) {
    return json(
      { success: false, error: "Too many requests. Please try again later." },
      429,
    );
  }

  // 4) Parse body safely.
  let body;
  try {
    body = await req.json();
  } catch {
    return json({ success: false, error: "Invalid request." }, 400);
  }
  if (!body || typeof body !== "object") {
    return json({ success: false, error: "Invalid request." }, 400);
  }

  // 5) Honeypot — bots fill hidden fields. Pretend success, send nothing.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return json({ success: true }, 200);
  }

  // 6) Coerce to strings and trim (never trust types from the client).
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  // 7) Validate with strict length + format bounds.
  if (name.length < LIMITS.name.min || name.length > LIMITS.name.max) {
    return json({ success: false, error: "Please enter a valid name." }, 400);
  }
  if (email.length > LIMITS.email.max || !EMAIL_RE.test(email)) {
    return json(
      { success: false, error: "Please enter a valid email address." },
      400,
    );
  }
  if (
    message.length < LIMITS.message.min ||
    message.length > LIMITS.message.max
  ) {
    return json(
      {
        success: false,
        error: "Message must be between 10 and 5000 characters.",
      },
      400,
    );
  }

  // 8) Ensure the server is actually configured (never leak which var).
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  if (!user || !pass) {
    console.error("Contact: EMAIL_USER / EMAIL_PASS not configured");
    return json(
      { success: false, error: "Unable to send message right now." },
      500,
    );
  }

  // 9) Build a fully-escaped email. Header fields are single-lined.
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
  const subjectName = oneLine(name).slice(0, 100);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const mailOptions = {
    from: user,
    to: user,
    replyTo: oneLine(email),
    subject: `Portfolio Contact from ${subjectName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px;">
        <h2 style="color: #2563eb; margin-bottom: 20px;">New Portfolio Contact</h2>
        <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <p style="margin: 8px 0;"><strong>Name:</strong> ${safeName}</p>
          <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${safeEmail}" style="color: #2563eb;">${safeEmail}</a></p>
        </div>
        <div style="background: #ffffff; padding: 20px; border-left: 4px solid #2563eb;">
          <h3 style="margin-top: 0;">Message:</h3>
          <p style="line-height: 1.6; color: #333; white-space: pre-wrap;">${safeMessage}</p>
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          Click "Reply" to respond directly to ${safeEmail}
        </p>
      </div>
    `,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nReply to: ${email}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return json({ success: true }, 200);
  } catch (err) {
    console.error("Contact: sendMail failed", err);
    return json(
      { success: false, error: "Failed to send message. Please try again later." },
      500,
    );
  }
}
