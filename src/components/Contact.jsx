import { motion } from "framer-motion";
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
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS env vars missing");
      }

      await emailjs.send(serviceId, templateId, formData, publicKey);

      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 1500);
    } catch (err) {
      setStatus("error");
      setError("Failed to send. Please try again.");
      setTimeout(() => setStatus("idle"), 2000);
      console.error(err);
    }
  };

  return (
    <section
      id="contact"
      className="flex-grow flex items-center justify-center px-6 lg:px-40 py-12 relative z-10"
    >
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Column: Info & Social */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8 order-2 lg:order-1"
        >
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 text-lg lg:text-xl font-light leading-relaxed max-w-lg"
            >
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Let's build something
              amazing together.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-6 pt-4"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-primary/80">
              Connect with me
            </p>
            <div className="flex gap-6">
              {/* GitHub */}
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(55,19,236,0.4)]"
                href="https://github.com/imsadman90"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">
                  code
                </span>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(55,19,236,0.4)]"
                href="https://www.linkedin.com/in/sadman-sami-dev/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">
                  work
                </span>
              </motion.a>

              {/* Twitter/X */}
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(55,19,236,0.4)]"
                href="https://twitter.com/iamsadmansami"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">
                  alternate_email
                </span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 text-gray-300"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  mail
                </span>
                <a
                  className="text-base hover:text-primary dark:hover:text-white"
                  href="mailto:sadmansami473@gmail.com"
                >
                  sadmansami473@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  call
                </span>
                <a
                  className="text-base hover:text-primary dark:hover:text-white"
                  href="tel:0175741648"
                >
                  0175741648
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Glass Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <div className="glass-card rounded-2xl p-8 lg:p-10 w-full relative group">
            {/* Decorative glow behind the card */}
            <motion.div
              animate={{
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur -z-10"
            ></motion.div>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-2"
              >
                <label
                  className="text-sm font-medium text-gray-300 ml-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-[20px]">
                    person
                  </span>
                  <input
                    className="w-full pl-11 pr-4 py-3 input-glass rounded-xl text-white placeholder-gray-500 focus:outline-none"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-2"
              >
                <label
                  className="text-sm font-medium text-gray-300 ml-1"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-[20px]">
                    mail
                  </span>
                  <input
                    className="w-full pl-11 pr-4 py-3 input-glass rounded-xl text-white placeholder-gray-500 focus:outline-none"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-2"
              >
                <label
                  className="text-sm font-medium text-gray-300 ml-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 input-glass rounded-xl text-white placeholder-gray-500 focus:outline-none resize-none"
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
                className="mt-4 w-full bg-primary hover:bg-[#2a0eb5] text-white font-bold py-4 rounded-xl shadow-[0_4px_20px_rgba(55,19,236,0.4)] hover:shadow-[0_6px_25px_rgba(55,19,236,0.6)] transition-all duration-300 flex items-center justify-center gap-2 group/btn disabled:opacity-70 disabled:cursor-not-allowed"
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
              </motion.button>

              {error && <p className="text-sm text-red-400">{error}</p>}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
