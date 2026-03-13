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
        <div className="text-center space-y-4 animate-[fadeInUp_0.6s_ease-out_both]">
          <p className="text-md uppercase tracking-[0.2em] text-sky-500/80 font-light">
            Academic Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white/70">
            Education
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-light">
            An academic background in language education combined with
            self-driven learning and hands-on frontend development.
          </p>
        </div>

        {/* Education Items */}
        <div className="flex flex-col gap-10 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300">
          {education.map((item) => (
            <article
              key={item.degree}
              className="rounded-2xl p-6 border bg-white/2 border-white/30 font-light"
            >
              <div className="flex items-center justify-between gap-4 mb-3">
                <h3 className="text-xl font-light text-white/70 leading-tight ">
                  {item.degree}
                </h3>
                <span className="text-md px-3 py-1 rounded-full bg-white/10/10 text-sky-500 font-light">
                  {item.years}
                </span>
              </div>
              <p className="text-slate-300 font-light">{item.school}</p>
              <p className="text-slate-400 mt-3 text-md font-light leading-relaxed">
                {item.details}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
