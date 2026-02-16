"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  "React.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "Tailwind CSS",
  "UI/UX Systems",
];

const About = () => {
  return (
    <section
      id="about"
      className="flex-grow flex flex-col items-center justify-center relative overflow-hidden py-12 lg:py-24"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-background-dark bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#2a2442] via-background-dark to-background-dark opacity-80" />

      <div className="relative z-10 w-full px-6 lg:px-20 max-w-[1280px] text-center">
        <div className="flex flex-col items-center">
          {/* Text Content Only, image removed */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            {/* Header Section */}
            <div className="flex flex-col gap-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex items-center gap-2 mb-2"
              >
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
                <span className="text-md uppercase tracking-widest text-primary/80 font-semibold">
                  About Me
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white"
              >
                About Sadman Sami
              </motion.h2>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-400 font-medium mt-2"
              >
                Frontend Developer | MERN Stack Developer | UI-Focused Developer
              </motion.h3>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="prose prose-lg text-gray-400 leading-relaxed"
            >
              <p className="">
                Sadman Sami is a frontend developer with hands-on experience
                building responsive and interactive web interfaces using React,
                Next.js, and modern UI systems. I enjoy staying busy with
                meaningful work and continuously improving my skills through
                real projects.As a MERN stack developer, Sadman Sami focuses on
                building scalable, production-ready applications with Node.js,
                Express, and MongoDB. I believe in learning by building and
                improving every iteration.Beyond coding, I&apos;m a vocalist and
                guitarist. Music helps me think creatively, while coding
                satisfies my love for structure and logic. Both keep me focused,
                disciplined, and motivated.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 rounded-full bg-[#1e1933] border border-[#3b3267] text-gray-300 text-md font-medium flex items-center"
                >
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    check_circle
                  </span>
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
