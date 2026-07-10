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

const ExperienceCard = ({ experience }) => {
  const { role, company, years, summary, highlights } = experience;

  return (
    <article className="glass-card rounded-2xl p-6 border border-white/20 bg-white/3 h-full min-h-[380px] flex-1 hover:scale-[1.05] active:scale-[0.98] transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="text-2xl font-light text-white/70">{role}</h3>
          <p className="text-sky-500 font-light mt-1">{company}</p>
        </div>
        <span className="text-md px-3 py-1 rounded-full bg-white/10 text-sky-500 font-light whitespace-nowrap">
          {years}
        </span>
      </div>

      <p className="mt-4 text-slate-300 font-light leading-relaxed">
        {summary}
      </p>

      <ul className="mt-6 space-y-3 text-md text-slate-300">
        {highlights.map((highlight, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="material-symbols-outlined text-sky-500 text-lg mt-0.5">
              check_circle
            </span>
            <span className="font-light">{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
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
        <div className="text-center space-y-6 animate-[fadeInUp_0.6s_ease-out_both]">
          <p className="text-md uppercase tracking-[0.2em] text-sky-500/80 font-light">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-light text-white/70">
            Practical Experience
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto font-light">
            Hands-on experience building frontend applications through
            real-world projects, continuous learning, and practical
            experimentation.
          </p>
        </div>

        {/* Timeline cards */}
        <div className="relative flex flex-col gap-8 md:gap-12">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-sky-500/80 to-transparent animate-pulse" />
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-sky-400 shadow-[0_0_20px_6px_rgba(56,189,248,0.45)]" />

          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`w-full flex ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
            >
              <div className="w-full md:w-[calc(50%-1.5rem)]">
                <ExperienceCard experience={experience} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
