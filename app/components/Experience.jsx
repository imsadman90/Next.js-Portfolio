"use client";

import { useState, useEffect, useRef } from "react";
import { Globe, Database, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Self-Directed Projects",
    years: "2025 — Present",
    icon: Globe,
    summary:
      "Built responsive and interactive frontend applications using React, Tailwind CSS, and modern component-based architecture — focusing on clean UI and usability.",
    highlights: [
      "Developed reusable React components and responsive layouts",
      "Implemented client-side routing and state management",
      "Improved UI performance and accessibility through best practices",
    ],
    tags: ["React", "Tailwind CSS", "Next.js"],
  },
  {
    role: "MERN Stack Developer",
    company: "Personal & Academic Projects",
    years: "2025 — Present",
    icon: Database,
    summary:
      "Practiced full-stack fundamentals by building complete MERN applications, wiring frontend interfaces to backend APIs and databases.",
    highlights: [
      "Worked with REST APIs using Express and MongoDB",
      "Integrated frontend with backend data flows",
      "Used Git and GitHub for version control and project tracking",
    ],
    tags: ["Node.js", "Express", "MongoDB"],
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
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

const Experience = () => {
  const [sectionRef, inView] = useInView();
  // A set of open panels — any number can be open, and each toggles.
  const [openSet, setOpenSet] = useState(() => new Set([0]));

  const toggle = (i) =>
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative overflow-hidden py-20 lg:py-28"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute -right-16 top-32 h-80 w-80 rounded-full bg-sky-200/20 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-3xl px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mb-12 text-center transition-all duration-700 ease-out ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-300" />
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-blue-600">
              Experience
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-blue-300" />
          </div>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-5xl">
            Practical{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-light text-slate-500 lg:text-lg">
            Hands-on experience building applications through real-world
            projects, continuous learning, and practical experimentation.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {experiences.map((exp, i) => {
            const isOpen = openSet.has(i);
            const Icon = exp.icon;
            return (
              <div
                key={exp.role}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-500 ease-out ${
                  isOpen
                    ? "border-blue-200 shadow-[0_18px_44px_-20px_rgba(37,99,235,0.3)]"
                    : "border-slate-200 shadow-sm hover:border-blue-200"
                } ${inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                style={{ transitionDelay: `${150 + i * 120}ms` }}
              >
                {/* Header */}
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      isOpen
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                      <h3 className="text-lg font-bold text-slate-900">
                        {exp.role}
                      </h3>
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                        {exp.years}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm font-medium text-blue-600">
                      {exp.company}
                    </p>
                  </div>

                  <ChevronRight
                    className={`h-[22px] w-[22px] shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-90 text-blue-600" : ""
                    }`}
                  />
                </button>

                {/* Expandable body */}
                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pl-[4.75rem]">
                      <p className="text-sm font-light leading-relaxed text-slate-500">
                        {exp.summary}
                      </p>

                      <ul className="mt-4 space-y-2.5">
                        {exp.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] text-blue-600" />
                            <span className="text-sm font-light text-slate-600">
                              {h}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-light text-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing CTA */}
        <div
          className={`mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 p-6 text-center shadow-lg shadow-blue-600/20 transition-all duration-700 ease-out sm:flex sm:items-center sm:justify-between sm:text-left ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "450ms" }}
        >
          <div>
            <h3 className="flex items-center justify-center gap-2 text-lg font-bold text-white sm:justify-start">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300" />
              </span>
              Open to new opportunities
            </h3>
            <p className="mt-1 text-sm font-light text-blue-50">
              Looking for freelance work or a full-time role.
            </p>
          </div>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-blue-600 transition-transform hover:scale-105 active:scale-95 sm:mt-0"
          >
            Get in touch
            <ArrowRight className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
