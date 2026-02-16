"use client";

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
    role: "MERN Stack Developer",
    company: "Personal & Academic Projects",
    years: "2025 - Present",
    summary:
      "Practiced full-stack fundamentals by building large MERN applications, connecting frontend interfaces with backend APIs.",
    highlights: [
      "Worked with REST APIs using Express and MongoDB",
      "Integrated frontend with backend data flows",
      "Used Git and GitHub for version control and project tracking",
    ],
  },
];

const ExperienceCard = ({ experience, index }) => {
  const { role, company, years, summary, highlights } = experience;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="glass-card rounded-2xl p-6 border border-white/10 bg-white/5 h-full min-h-[380px] flex-1"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-white leading-tight">
            {role}
          </h3>
          <p className="text-primary font-semibold mt-1">{company}</p>
        </div>
        <span className="text-md px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold whitespace-nowrap">
          {years}
        </span>
      </div>

      <p className="mt-4 text-slate-300 leading-relaxed">{summary}</p>

      <ul className="mt-6 space-y-3 text-md text-slate-300">
        {highlights.map((highlight, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary text-lg mt-0.5">
              check_circle
            </span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex-grow flex flex-col items-center justify-center py-20 px-6 lg:px-12"
    >
      <div className="max-w-6xl w-full flex flex-col gap-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <p className="text-md uppercase tracking-[0.2em] text-primary/80 font-semibold">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Practical Experience
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Hands-on experience building frontend applications through
            real-world projects, continuous learning, and practical
            experimentation.
          </p>
        </motion.div>

        {/* Experience cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
