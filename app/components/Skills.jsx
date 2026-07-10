"use client";

import Image from "next/image";

const skillCategories = [
  {
    title: "Frontend",
    icon: "web",
    skills: [
      {
        name: "HTML",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React JS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next JS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Tailwind CSS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },
  {
    title: "Backend & Database",
    icon: "dns",
    skills: [
      {
        name: "Node JS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express JS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Python",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MySQL",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Firebase",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
    ],
  },

  {
    title: "Tools",
    icon: "construction",
    skills: [
      {
        name: "Git",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        image: "https://www.svgrepo.com/show/394174/github.svg",
      },
      {
        name: "VS Code",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Figma",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "npm",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
      },
      {
        name: "Framer",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy62shgDvjBlawNx7cxFpVVyP8sudl4oDhBw&s",
      },
    ],
  },
];

// Individual skill icon card — pure CSS hover, no framer-motion
const SkillIconCard = ({ skill }) => {
  return (
    <div className="group flex flex-col items-center justify-center p-5 rounded-xl bg-[#1a162e]/70 backdrop-blur-xl border border-white/5 shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_25px_-5px_rgba(55,19,236,0.35)] hover:-translate-y-1 hover:scale-[1.04] w-28 h-28 md:w-40 md:h-40">
      <div className="flex items-center justify-center flex-1">
        <Image
          src={skill.image}
          alt={skill.name}
          width={64}
          height={64}
          className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300 w-14 h-14 md:w-16 md:h-16"
        />
      </div>
      <span className="text-white/70 text-sm md:text-base font-light tracking-wide uppercase mt-2">
        {skill.name}
      </span>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex-grow flex flex-col items-center justify-center py-12 px-4 md:px-10 relative"
    >
      <div className="flex flex-col max-w-[1200px] w-full z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-white/70 text-4xl md:text-5xl font-light mb-4">
            My <span className="text-sky-500">Skills</span>
          </h2>
          <p className="text-[#9b92c9] text-base md:text-lg font-light max-w-2xl mx-auto">
            Technologies and tools I work with as a MERN Stack Developer.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="flex flex-col gap-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              {/* Category Title */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="size-10 rounded-lg bg-white/10 flex items-center justify-center text-sky-500">
                  <span className="material-symbols-outlined text-[22px]">
                    {category.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-light text-white/70">
                  {category.title}
                </h3>
              </div>

              {/* Skills Icon Grid */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-5">
                {category.skills.map((skill) => (
                  <SkillIconCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
