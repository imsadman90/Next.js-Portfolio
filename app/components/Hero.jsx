"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <main
      id="home"
      className="flex-grow flex items-center justify-center py-12 lg:py-20"
    >
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-20">
          {/* Left Content: Typography */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8 order-2 lg:order-1 text-center lg:text-left"
          >
            <div className="space-y-4">
              {/* Eyebrow Tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit mx-auto lg:mx-0"
              >
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-xs font-medium text-slate-300">
                  MERN Stack Developer • Frontend Developer
                </span>
              </motion.div>

              {/* Massive Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9] text-glow"
              >
                SADMAN <br />
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  SAMI
                </span>
              </motion.h1>

              {/* Intro Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-slate-400 max-w-xl leading-relaxed mx-auto lg:mx-0 font-light"
              >
                Frontend-first developer crafting responsive, accessible, and
                performant experiences. I bridge product goals with polished UI
                engineering, balancing design systems, animation, and robust
                MERN-stack architecture.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <motion.a
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-bold text-white shadow-[0_0_20px_-5px_#3713ec] transition-all hover:shadow-[0_0_30px_-5px_#3713ec] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark"
                href="#work"
              >
                <span className="material-symbols-outlined text-[20px]">
                  visibility
                </span>
                View Projects
                <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-primary to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </motion.a>

              <motion.a
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent px-8 py-4 text-base font-bold text-white transition-all hover:border-white/40 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
                href="https://drive.google.com/file/d/1AsKUvO0driyxsX8fWhJnR4d-njFHM8YU/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                download
              >
                <span className="material-symbols-outlined text-[20px]">
                  download
                </span>
                Download Resume
              </motion.a>
            </motion.div>

            {/* Tech Stack Mini Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-6 items-center justify-center lg:justify-start pt-8 border-t border-white/5 mt-4"
            >
              <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
                Tech Stack
              </span>
              <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="material-symbols-outlined text-2xl text-slate-400 hover:text-green-400">
                  code_blocks
                </span>
                <span className="material-symbols-outlined text-2xl text-slate-400 hover:text-blue-400">
                  dns
                </span>
                <span className="material-symbols-outlined text-2xl text-slate-400 hover:text-yellow-400">
                  javascript
                </span>
                <span className="material-symbols-outlined text-2xl text-slate-400 hover:text-blue-400">
                  css
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2 flex justify-center items-center h-[400px] lg:h-[600px]"
          >
            {/* Portrait Image Container */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-3xl overflow-hidden ring-4 ring-white/10 shadow-[0_20px_60px_rgba(55,19,236,0.35)] object-glow">
              <Image
                alt="Professional headshot of Sadman Sami"
                className="w-full h-full object-cover"
                src="https://i.ibb.co/pjSM4L2R/sami.png"
                fill
                priority
                sizes="(max-width: 768px) 320px, 384px"
              />
            </div>
          </motion.div>
        </div>
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-10"
        >
          {[
            {
              label: "GitHub",
              href: "https://github.com/imsadman90",
              icon: "code",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/sadman-sami-dev/",
              icon: "work",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/iamsadmansami",
              icon: "alternate_email",
            },
          ].map((social) => (
            <a
              key={social.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-100 hover:border-primary/60 hover:bg-primary/10 transition-all"
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined text-[18px]">
                {social.icon}
              </span>
              <span className="text-sm font-medium">{social.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
