"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "B.ed. (Honours) in Language Education",
    school: "University of Dhaka — Institute of Education and Research (IER)",
    years: "2023 - Present",
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
      <div className="max-w-6xl w-full flex flex-col gap-10 z-10">
        <div className="text-center space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.2em] text-primary/80 font-semibold"
          >
            Academic Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            An academic background in language education combined with
            self-driven learning and hands-on frontend development.
          </motion.p>
        </div>

        <div className="">
          {education.map((item, idx) => (
            <motion.article
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="glass-card rounded-2xl p-6 border border-white/10 bg-white/5"
            >
              <div className="flex items-center justify-between gap-4 mb-3">
                <h3 className="text-xl font-semibold text-white leading-tight">
                  {item.degree}
                </h3>
                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                  {item.years}
                </span>
              </div>
              <p className="text-slate-300 font-medium">{item.school}</p>
              <p className="text-slate-400 mt-3 text-sm leading-relaxed">
                {item.details}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
