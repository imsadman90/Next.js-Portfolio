"use client";

import { motion } from "framer-motion";

// Animation variants for education items (cleaner, reusable, automatic staggering)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const education = [
  {
    degree: "B.ed. (Honours) in Language Education",
    school: "University of Dhaka — Institute of Education and Research (IER)",
    years: "2024 - Present",
    details:
      "Currently studying in the Language Education stream while actively building skills in frontend web development, focusing on React, MERN stack fundamentals, and modern UI practices.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="flex-grow flex flex-col items-center justify-center py-12 px-6 lg:px-12 relative"
    >
      <div className="max-w-4xl w-full flex flex-col gap-10 z-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-md uppercase tracking-[0.2em] text-primary/80 font-semibold"
          >
            Academic Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            An academic background in language education combined with
            self-driven learning and hands-on frontend development.
          </motion.p>
        </div>

        {/* Education Items - now with proper gap and optimized animations */}
        <motion.div
          className="flex flex-col gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((item) => (
            <motion.article
              key={item.degree}
              variants={itemVariants}
              className="glass-card rounded-2xl p-6 border border-white/10 bg-white/5"
            >
              <div className="flex items-center justify-between gap-4 mb-3">
                <h3 className="text-xl font-semibold text-white leading-tight">
                  {item.degree}
                </h3>
                <span className="text-md px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                  {item.years}
                </span>
              </div>
              <p className="text-slate-300 font-medium">{item.school}</p>
              <p className="text-slate-400 mt-3 text-md leading-relaxed">
                {item.details}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
