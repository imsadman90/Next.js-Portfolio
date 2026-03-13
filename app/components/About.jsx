const skills = [
  "React.js",
  "Next.js",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "Express.js",
  "Tailwind CSS",
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
          <div className="flex flex-col gap-8">
            {/* Header Section */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
                <span className="text-md uppercase tracking-widest text-sky-500/80 font-light">
                  About Me
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
              </div>

              <h2 className="text-4xl lg:text-6xl text-white/70">
                About Sadman Sami
              </h2>

              <h3 className="text-xl text-gray-400 font-light mt-2">
                Frontend Developer | MERN Stack Developer | UI-Focused Developer
              </h3>
            </div>

            {/* Description */}
            <div className="font-light text-gray-400 leading-relaxed">
              <p className="">
                Sadman Sami is a frontend developer with hands-on experience
                building responsive and interactive web interfaces using React,
                Next.js, and modern UI systems. I enjoy staying busy with
                meaningful work and continuously improving my skills through
                real projects. As a MERN stack developer, Sadman Sami focuses on
                building scalable, production-ready applications with Node.js,
                Express, and MongoDB. I believe in learning by building and
                improving every iteration.Beyond coding, I&apos;m a vocalist and
                guitarist. Music helps me think creatively, while coding
                satisfies my love for structure and logic. Both keep me focused,
                disciplined, and motivated.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-[#1e1933] border border-[#3b3267] text-gray-300 text-md font-light flex items-center hover:scale-110 transition-transform gap-2"
                >
                  <span className="material-symbols-outlined text-[16px] text-sky-500">
                    check_circle
                  </span>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
