"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to send. Please try again.");
      }
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 1500);
    } catch (err) {
      setStatus("error");
      setError(err.message || "Failed to send. Please try again.");
      setTimeout(() => setStatus("idle"), 2000);
      console.error(err);
    }
  };

  return (
    <section
      id="contact"
      className="grow flex items-center justify-center px-6 lg:px-10 py-12 relative z-10"
    >
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Column: Info & Social */}
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-light  text-white/50">
              Contact with <br />
              <span className="text-sky-500">Sadman</span>
            </h2>
            <p className="text-gray-400 text-lg lg:text-xl font-light leading-relaxed max-w-lg">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your visions. Let&apos;s build
              something amazing together.
            </p>
          </div>

          <div className="flex flex-col gap-6 pt-4">
            <p className="text-md font-light uppercase tracking-widest text-sky-500/80">
              Connect with me
            </p>
            <div className="flex gap-6">
              {/* GitHub */}
              <a
                className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10/10 hover:scale-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 hover:shadow-[0_0_20px_rgba(55,19,236,0.4)]"
                href="https://github.com/imsadman90"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-white/70 group-hover:text-sky-500 transition-colors">
                  code
                </span>
              </a>

              {/* LinkedIn */}
              <a
                className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10/10 hover:scale-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 hover:shadow-[0_0_20px_rgba(55,19,236,0.4)]"
                href="https://www.linkedin.com/in/sadman-sami-dev/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-white/70 group-hover:text-sky-500 transition-colors">
                  work
                </span>
              </a>

              {/* Twitter/X */}
              <a
                className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10/10 hover:scale-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 hover:shadow-[0_0_20px_rgba(55,19,236,0.4)]"
                href="https://twitter.com/iamsadmansami"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-white/70 group-hover:text-sky-500 transition-colors">
                  alternate_email
                </span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 text-gray-300">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sky-500">
                  mail
                </span>
                <a
                  className="text-base hover:text-sky-500 dark:hover:text-white/70"
                  href="mailto:sadmansami473@gmail.com"
                >
                  sadmansami473@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sky-500">
                  call
                </span>
                <a
                  className="text-base hover:text-sky-500 dark:hover:text-white/70"
                  href="tel:0175741648"
                >
                  01757411648
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Glass Form */}
        <div className="order-1 lg:order-2">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 lg:p-10 w-full backdrop-blur-sm">
            <h3 className="text-xl font-light text-white/70 mb-6">
              Send a Message
            </h3>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-sm font-light text-white/70 ml-0.5 tracking-wide"
                  htmlFor="name"
                >
                  Name
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-white/70 text-[18px]">
                    person
                  </span>
                  <input
                    className="w-full pl-11 pr-4 py-3 bg-white/[0.08] border border-white/10 rounded-xl text-white/70 placeholder-white/50 focus:outline-none  focus:bg-white/[0.06] transition-all duration-200"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-sm font-light text-white/70 ml-0.5 tracking-wide"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-white/70 text-[18px]">
                    mail
                  </span>
                  <input
                    className="w-full pl-11 pr-4 py-3 bg-white/[0.08] border border-white/10 rounded-xl text-white/70 placeholder-white/50 focus:outline-none  focus:bg-white/[0.06] transition-all duration-200"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-sm font-light text-white/70 ml-0.5 tracking-wide"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 bg-white/[0.08] border border-white/10 rounded-xl text-white/70 placeholder-white/50 focus:outline-none  focus:bg-white/[0.06] transition-all duration-200 resize-none"
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                className="mt-2 w-full bg-sky-500/15 hover:bg-sky-500/25 text-sky-400 font-light py-3.5 rounded-full border border-sky-500/20 hover:border-sky-500/40 transition-all duration-300 flex items-center justify-center gap-2 group/btn disabled:opacity-50 disabled:cursor-not-allowed"
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
                <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">
                  {status === "sent" ? "check_circle" : "send"}
                </span>
              </button>

              {error && <p className="text-md text-red-400">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
