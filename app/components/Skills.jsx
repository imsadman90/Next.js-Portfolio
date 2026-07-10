"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Globe, Database, Wrench, ChevronLeft, ChevronRight } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    desc: "Building responsive, accessible interfaces and design systems that feel fast and effortless.",
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
    icon: Database,
    desc: "APIs, servers, and data modelling — the reliable engine that powers the interface.",
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
    icon: Wrench,
    desc: "The daily toolkit that keeps my workflow fast, collaborative, and clean.",
    skills: [
      {
        name: "Git",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
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

const allSkills = skillCategories.flatMap((c) => c.skills);

const SkillCard = ({ skill }) => (
  <div className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-[0_12px_30px_-12px_rgba(37,99,235,0.35)]">
    <div className="flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14">
      <Image
        src={skill.image}
        alt={skill.name}
        width={56}
        height={56}
        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <span className="text-center text-xs font-medium uppercase tracking-wide text-slate-600 sm:text-sm">
      {skill.name}
    </span>
  </div>
);

const n = skillCategories.length;
// Clone last at the front and first at the end for a seamless infinite loop.
// Positions: 0 = clone(last), 1..n = real slides, n+1 = clone(first).
const loopSlides = [
  skillCategories[n - 1],
  ...skillCategories,
  skillCategories[0],
];

const Skills = () => {
  const [pos, setPos] = useState(1); // start on the first real slide
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useRef(false);
  const lockRef = useRef(false);

  const activeReal = (((pos - 1) % n) + n) % n;

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  // Autoplay — always advances forward
  useEffect(() => {
    if (paused || reduceMotion.current) return;
    const id = setInterval(() => {
      if (lockRef.current) return;
      lockRef.current = true;
      setAnimate(true);
      setPos((p) => p + 1);
    }, 2000);
    return () => clearInterval(id);
  }, [paused]);

  // Re-enable the transition on the frame after a silent jump
  useEffect(() => {
    if (animate) return;
    const raf = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(raf);
  }, [animate]);

  // lockRef blocks new moves until the current slide transition settles,
  // so rapid clicks can't overshoot past the clone slides.
  const step = (dir) => {
    if (lockRef.current) return;
    lockRef.current = true;
    setAnimate(true);
    setPos((p) => p + dir);
  };
  const go = (real) => {
    if (lockRef.current || real === activeReal) return;
    lockRef.current = true;
    setAnimate(true);
    setPos(real + 1);
  };

  // When we land on a clone, snap (without animation) to the real twin
  const handleTransitionEnd = (e) => {
    if (e.target !== e.currentTarget) return; // ignore bubbling child transitions
    if (pos === n + 1) {
      setAnimate(false);
      setPos(1);
    } else if (pos === 0) {
      setAnimate(false);
      setPos(n);
    }
    lockRef.current = false;
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-20 lg:py-28"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute left-1/4 top-10 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-300" />
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-blue-600">
              Tech Stack
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-blue-300" />
          </div>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-light text-slate-500 lg:text-lg">
            The technologies and tools I use to build modern, full-stack web
            applications.
          </p>
        </div>

        {/* Category tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.title}
                onClick={() => go(i)}
                className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                  activeReal === i
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                    : "border border-slate-200 bg-white text-slate-500 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                <Icon className="h-[18px] w-[18px]" />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Carousel */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className={`flex ${
              animate
                ? "transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
                : ""
            }`}
            style={{ transform: `translateX(-${pos * 100}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {loopSlides.map((cat, idx) => {
              const Icon = cat.icon;
              return (
              <div key={idx} className="w-full shrink-0 px-0.5">
                <div className="grid grid-cols-1 gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 lg:grid-cols-12 lg:gap-8 lg:p-8">
                  {/* Info — left */}
                  <div className="flex flex-col justify-center lg:col-span-4">
                    <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-600/25">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-slate-500">
                      {cat.desc}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-sm text-slate-400">
                      <span className="text-lg font-bold text-blue-600">
                        {cat.skills.length}
                      </span>
                      technologies
                    </div>
                  </div>

                  {/* Skills — right (side by side) */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:col-span-8">
                    {cat.skills.map((skill) => (
                      <SkillCard key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => step(-1)}
            aria-label="Previous category"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:border-blue-300 hover:text-blue-600"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {skillCategories.map((cat, i) => (
              <button
                key={cat.title}
                onClick={() => go(i)}
                aria-label={`Go to ${cat.title}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeReal === i
                    ? "w-7 bg-blue-600"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => step(1)}
            aria-label="Next category"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:border-blue-300 hover:text-blue-600"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Infinite logo marquee */}
        <div className="group marquee-mask relative mt-16 overflow-hidden">
          <div className="animate-marquee flex gap-4 group-hover:[animation-play-state:paused]">
            {[...allSkills, ...allSkills].map((skill, i) => (
              <div
                key={`${skill.name}-${i}`}
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm sm:h-20 sm:w-20"
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  loading="lazy"
                  className="h-9 w-9 object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-10 sm:w-10"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
