"use client";

import { useState, useEffect, useRef } from "react";
import { GraduationCap, Code2, Eye, ChevronLeft } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    degree: "B.Ed. (Honours) in Language Education",
    school: "University of Dhaka — Institute of Education and Research (IER)",
    years: "2024 — Present",
    status: "Ongoing",
    details:
      "Studying in the Language Education stream while actively building frontend web development skills — focusing on React, MERN stack fundamentals, and modern UI practices alongside my coursework.",
    focus: ["Language Education", "Research & Pedagogy", "Communication"],
  },
  {
    icon: Code2,
    degree: "Self-Directed Web Development",
    school: "Continuous Learning — Project-Based & Online",
    years: "2023 — Present",
    status: "Ongoing",
    details:
      "Learning by building real-world MERN applications through hands-on projects, documentation, and open-source tooling — bridging product goals with polished UI engineering.",
    focus: ["React & Next.js", "MERN Stack", "UI Engineering"],
  },
];

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

const FlipCard = ({ item, inView, delay }) => {
  const [flipped, setFlipped] = useState(false);
  const Icon = item.icon;

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="group h-[23rem] cursor-pointer [perspective:1400px]"
        onClick={() => setFlipped((f) => !f)}
      >
        <div
          className={`relative h-full w-full transition-transform duration-[700ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* ---- Front ---- */}
          <div className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
            <span className="block h-1.5 w-full bg-gradient-to-r from-blue-600 to-sky-500" />
            <div className="flex flex-1 flex-col p-6 lg:p-7">
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-600/25">
                  <Icon className="h-7 w-7" />
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-600">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  {item.status}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold leading-tight text-slate-900">
                {item.degree}
              </h3>
              <p className="mt-2 text-sm font-medium text-blue-600">
                {item.school}
              </p>

              <span className="mt-4 w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                {item.years}
              </span>

              <div className="mt-auto flex items-center gap-1.5 text-xs font-medium text-slate-400">
                <Eye className="h-4 w-4" />
                Hover or tap for details
              </div>
            </div>
          </div>

          {/* ---- Back ---- */}
          <div className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 p-6 text-white shadow-lg shadow-blue-600/20 [transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] lg:p-7">
            <h4 className="text-base font-bold leading-tight">{item.degree}</h4>
            <div className="my-3 h-px w-10 bg-white/40" />
            <p className="text-sm font-light leading-relaxed text-blue-50">
              {item.details}
            </p>

            <div className="mt-auto flex flex-wrap gap-2">
              {item.focus.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-light text-white"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-blue-100">
              <ChevronLeft className="h-4 w-4" />
              Flip back
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const [sectionRef, inView] = useInView();

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative overflow-hidden py-20 lg:py-28"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute -left-16 top-24 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="animate-blob absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-sky-200/20 blur-3xl [animation-delay:-6s]" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mb-14 text-center transition-all duration-700 ease-out ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-300" />
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-blue-600">
              Academic Journey
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-blue-300" />
          </div>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-5xl">
            Education &amp;{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Learning
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base font-light text-slate-500 lg:text-lg">
            A formal background in language education, paired with self-driven
            learning and hands-on development.{" "}
            <span className="text-slate-400">Flip each card to explore.</span>
          </p>
        </div>

        {/* Flip cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {education.map((item, i) => (
            <FlipCard
              key={item.degree}
              item={item}
              inView={inView}
              delay={150 + i * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
