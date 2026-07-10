"use client";

import { useState } from "react";
import { Mail, Phone, User, Send, CheckCircle2, AlertTriangle } from "lucide-react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX = { name: 100, email: 254, message: 5000 };

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/imsadman90",
    path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sadman-sami-dev/",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/iamsadmansami",
    path: "M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z",
  },
];

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "sadmansami473@gmail.com",
    href: "mailto:sadmansami473@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "01757411648",
    href: "tel:01757411648",
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "", // honeypot — must stay empty
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (name.length < 2) e.name = "Please enter your name.";
    else if (name.length > MAX.name) e.name = "Name is too long.";

    if (!EMAIL_RE.test(email)) e.email = "Enter a valid email address.";
    else if (email.length > MAX.email) e.email = "Email is too long.";

    if (message.length < 10) e.message = "Message must be at least 10 characters.";
    else if (message.length > MAX.message) e.message = "Message is too long.";

    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          company: form.company, // honeypot
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to send. Please try again.");
      }
      setStatus("sent");
      setForm({ name: "", email: "", message: "", company: "" });
      setTimeout(() => setStatus("idle"), 2500);
    } catch (err) {
      setStatus("error");
      setServerError(err.message || "Failed to send. Please try again.");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const fieldClass = (name) =>
    `w-full rounded-xl border bg-slate-50 py-3 text-slate-900 placeholder-slate-400 transition-all duration-200 focus:bg-white focus:outline-none focus:ring-2 ${
      errors[name]
        ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
        : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
    }`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 lg:py-28"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute -left-16 bottom-10 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="animate-blob absolute -right-16 top-10 h-72 w-72 rounded-full bg-sky-200/20 blur-3xl [animation-delay:-6s]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-300" />
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-blue-600">
              Get in touch
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-blue-300" />
          </div>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-5xl">
            Let&apos;s work{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              together
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base font-light text-slate-500 lg:text-lg">
            Have a project, idea, or opportunity in mind? Send a message and
            I&apos;ll get back to you soon.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Left: Info */}
          <div className="flex flex-col gap-5 lg:col-span-2">
            {/* Availability */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-emerald-700">
                Available for new projects
              </span>
            </div>

            {/* Contact methods */}
            {contactMethods.map((m) => {
              const Icon = m.icon;
              return (
              <a
                key={m.label}
                href={m.href}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-[22px] w-[22px]" />
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-light uppercase tracking-wider text-slate-400">
                    {m.label}
                  </span>
                  <span className="text-sm font-medium text-slate-800 break-all">
                    {m.value}
                  </span>
                </div>
              </a>
              );
            })}

            {/* Socials */}
            <div className="mt-1">
              <p className="mb-3 text-xs font-light uppercase tracking-wider text-slate-400">
                Follow me
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-600 hover:text-blue-600 hover:shadow-md"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">
              <h3 className="mb-6 text-xl font-bold text-slate-900">
                Send a Message
              </h3>

              <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
                {/* Honeypot — hidden from humans, tempting to bots */}
                <div className="absolute left-[-9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="ml-0.5 text-sm font-medium text-slate-700"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400" />
                    <input
                      className={`${fieldClass("name")} pl-11 pr-4`}
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      maxLength={MAX.name}
                      autoComplete="name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      required
                    />
                  </div>
                  {errors.name && (
                    <p id="name-error" className="ml-0.5 text-xs text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="ml-0.5 text-sm font-medium text-slate-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400" />
                    <input
                      className={`${fieldClass("email")} pl-11 pr-4`}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={form.email}
                      onChange={handleChange}
                      maxLength={MAX.email}
                      autoComplete="email"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      required
                    />
                  </div>
                  {errors.email && (
                    <p id="email-error" className="ml-0.5 text-xs text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label
                      className="ml-0.5 text-sm font-medium text-slate-700"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <span className="text-xs text-slate-400">
                      {form.message.length}/{MAX.message}
                    </span>
                  </div>
                  <textarea
                    className={`${fieldClass("message")} resize-none px-4`}
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    maxLength={MAX.message}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    required
                  />
                  {errors.message && (
                    <p id="message-error" className="ml-0.5 text-xs text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  className="btn-gradient mt-1 flex w-full items-center justify-center gap-2 rounded-full py-3.5 font-medium text-white shadow-md shadow-blue-600/25 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60"
                  type="submit"
                  disabled={status === "sending"}
                >
                  <span>
                    {status === "sending"
                      ? "Sending..."
                      : status === "sent"
                        ? "Message Sent!"
                        : "Send Message"}
                  </span>
                  {status === "sent" ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </button>

                {/* Feedback */}
                {status === "sent" && (
                  <p className="flex items-center gap-2 text-sm text-emerald-600" role="status">
                    <CheckCircle2 className="h-[18px] w-[18px]" />
                    Thanks! Your message has been sent.
                  </p>
                )}
                {status === "error" && serverError && (
                  <p className="flex items-center gap-2 text-sm text-red-600" role="alert">
                    <AlertTriangle className="h-[18px] w-[18px]" />
                    {serverError}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
