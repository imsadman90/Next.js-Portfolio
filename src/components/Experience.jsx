import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Self-Directed Projects",
    years: "2025 - Present",
    summary:
      "Built responsive and interactive frontend applications using React, Tailwind CSS, and modern component-based architecture, focusing on clean UI and usability.",
    highlights: [
      "Developed reusable React components and responsive layouts",
      "Implemented client-side routing and state management",
      "Improved UI performance and accessibility through best practices",
    ],
  },
  {
    role: "MERN Stack Learner",
    company: "Personal & Academic Projects",
    years: "2025 - 2026",
    summary:
      "Practiced full-stack fundamentals by building small MERN applications, connecting frontend interfaces with backend APIs.",
    highlights: [
      "Worked with REST APIs using Express and MongoDB",
      "Integrated frontend with backend data flows",
      "Used Git and GitHub for version control and project tracking",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
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
            Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Practical Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Hands-on experience building frontend applications through
            real-world projects, continuous learning, and practical
            experimentation.
          </motion.p>
        </div>

        <div className="flex flex-col gap-6">
          {experiences.map((exp, idx) => (
            <motion.article
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="glass-card rounded-2xl p-6 border border-white/10 bg-white/5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-semibold text-white leading-tight">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-semibold mt-1">
                    {exp.company}
                  </p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold self-start sm:self-auto">
                  {exp.years}
                </span>
              </div>
              <p className="text-slate-300 mt-3 leading-relaxed">
                {exp.summary}
              </p>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-slate-300">
                {exp.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] mt-[2px]">
                      check_circle
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
