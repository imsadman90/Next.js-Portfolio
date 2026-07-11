"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  MapPin,
  Code2,
  GraduationCap,
  Music,
  Globe,
  Database,
  Palette,
  Wrench,
  CheckCircle2,
  User,
  Mic,
  Headphones,
  BookOpen,
  Sparkles,
} from "lucide-react";

const quickFacts = [
  { icon: MapPin, label: "Based in", value: "Dhaka, Bangladesh" },
  { icon: Code2, label: "Focus", value: "Frontend & MERN Stack" },
  { icon: GraduationCap, label: "Studying at", value: "University of Dhaka (IER)" },
  { icon: Music, label: "Off the clock", value: "Vocalist & Guitarist" },
];

const services = [
  {
    icon: Globe,
    title: "Frontend Development",
    desc: "Responsive, accessible interfaces with React & Next.js — built from clean, reusable components.",
  },
  {
    icon: Database,
    title: "MERN Stack & APIs",
    desc: "Production-ready full-stack apps with Node.js, Express, and MongoDB wired to REST APIs.",
  },
  {
    icon: Palette,
    title: "UI/UX & Performance",
    desc: "Pixel-aware UI with attention to motion, detail, and fast, optimized experiences.",
  },
  {
    icon: Wrench,
    title: "Tooling & Workflow",
    desc: "A Git-driven workflow with testing and clean, reviewable commits.",
  },
];

const strengths = [
  {
    icon: Code2,
    title: "Clean Components",
    desc: "Reusable, readable, well-structured code.",
  },
  {
    icon: Palette,
    title: "Polished UI",
    desc: "Pixel-aware, motion-rich interfaces.",
  },
  {
    icon: CheckCircle2,
    title: "Accessible",
    desc: "Semantic, keyboard-friendly by default.",
  },
  {
    icon: GraduationCap,
    title: "Always Learning",
    desc: "Improving with every iteration.",
  },
];

const currently = [
  { icon: Music, text: "Practicing guitar & vocals" },
  { icon: GraduationCap, text: "Going deeper on TypeScript" },
  { icon: Code2, text: "Building side projects" },
  { icon: Globe, text: "Studying UI/UX patterns" },
];

const interests = [
  { icon: Music, label: "Guitar" },
  { icon: Mic, label: "Vocals" },
  { icon: Headphones, label: "Music" },
  { icon: BookOpen, label: "Learning" },
  { icon: Sparkles, label: "Clean UI" },
];

const tabs = [
  { id: "journey", label: "My Journey", icon: User },
  { id: "work", label: "What I Do", icon: Code2 },
  { id: "beyond", label: "Beyond Code", icon: Music },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/imsadman90",
    path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sadman-sami-dev/",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/iamsadmansami",
    path: "M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z",
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

const Reveal = ({ inView, delay = 0, className = "", children }) => (
  <div
    className={`transition-all duration-700 ease-out ${
      inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
    } ${className}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {children}
  </div>
);

const About = () => {
  const [sectionRef, inView] = useInView();
  const [activeTab, setActiveTab] = useState("journey");

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden py-20 lg:py-28"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute -right-24 top-20 h-96 w-96 rounded-full bg-blue-300/15 blur-3xl" />
        <div className="animate-blob absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-sky-200/20 blur-3xl [animation-delay:-6s]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <Reveal inView={inView} className="mx-auto max-w-2xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-300" />
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-blue-600">
              About Me
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-blue-300" />
          </div>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-5xl">
            Get to know{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Sadman
            </span>
          </h2>
          <p className="mt-4 text-lg font-light text-slate-500">
            Frontend Developer · MERN Stack Engineer · UI-Focused Builder
          </p>
        </Reveal>

        {/* Content grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left: Profile card */}
          <Reveal inView={inView} delay={120} className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
                {/* Header strip */}
                <div className="relative h-24 bg-gradient-to-r from-blue-600 to-sky-500">
                  <div className="absolute -bottom-10 left-6 h-24 w-24 overflow-hidden rounded-2xl ring-4 ring-white">
                    <Image
                      src="/images/profile.webp"
                      alt="Sadman Sami"
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-emerald-600">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    Available
                  </span>
                </div>

                <div className="px-6 pb-6 pt-14">
                  <h3 className="text-xl font-bold text-slate-900">
                    Sadman Sami
                  </h3>
                  <p className="text-sm font-light text-blue-600">
                    Frontend &amp; MERN Stack Engineer
                  </p>

                  <p className="mt-4 text-sm font-light leading-relaxed text-slate-500">
                    I turn ideas into fast, accessible web products — pairing
                    clean UI engineering with solid full-stack fundamentals.
                  </p>

                  {/* Quick facts */}
                  <div className="mt-5 space-y-1 border-t border-slate-100 pt-5">
                    {quickFacts.map((fact) => {
                      const Icon = fact.icon;
                      return (
                        <div
                          key={fact.label}
                          className="flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-slate-50"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                            <Icon className="h-[18px] w-[18px]" />
                          </span>
                          <div className="flex flex-col leading-tight">
                            <span className="text-[11px] font-light uppercase tracking-wider text-slate-400">
                              {fact.label}
                            </span>
                            <span className="text-sm font-medium text-slate-700">
                              {fact.value}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Socials + CTA */}
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
                    <div className="flex items-center gap-2">
                      {socials.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all hover:-translate-y-0.5 hover:border-blue-600 hover:text-blue-600"
                        >
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            className="h-4 w-4 fill-current"
                          >
                            <path d={social.path} />
                          </svg>
                        </a>
                      ))}
                    </div>
                    <a
                      href="#contact"
                      onClick={scrollToContact}
                      className="btn-gradient rounded-full px-5 py-2 text-sm font-light text-white"
                    >
                      Let&apos;s Talk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Tabs */}
          <Reveal inView={inView} delay={220} className="lg:col-span-7">
            <div className="flex h-full flex-col">
              {/* Tab nav */}
              <div className="flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                        activeTab === tab.id
                          ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                          : "text-slate-500 hover:bg-slate-50 hover:text-blue-600"
                      }`}
                    >
                      <Icon className="h-[18px] w-[18px]" />
                      <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab panel */}
              <div className="mt-4 flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
                <div
                  key={activeTab}
                  className="flex h-full animate-[fadeInUp_0.4s_ease-out] flex-col"
                >
                  {activeTab === "journey" && (
                    <div className="flex h-full flex-col">
                      <div className="space-y-4 text-base font-light leading-relaxed text-slate-600">
                        <p>
                          I&apos;m a frontend developer with hands-on experience
                          building responsive, interactive web interfaces using{" "}
                          <strong className="font-medium text-slate-800">
                            React
                          </strong>
                          ,{" "}
                          <strong className="font-medium text-slate-800">
                            Next.js
                          </strong>
                          , and modern UI systems — while shipping scalable MERN
                          apps with Node.js, Express, and MongoDB.
                        </p>
                      </div>

                      <div className="mt-6 flex flex-1 flex-col border-t border-slate-100 pt-6">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                          What I bring
                        </p>
                        <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
                          {strengths.map((s) => {
                            const Icon = s.icon;
                            return (
                              <div
                                key={s.title}
                                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-3.5 transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-sm"
                              >
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                  <Icon className="h-[18px] w-[18px]" />
                                </span>
                                <div>
                                  <h4 className="text-sm font-semibold text-slate-900">
                                    {s.title}
                                  </h4>
                                  <p className="mt-0.5 text-xs font-light leading-relaxed text-slate-500">
                                    {s.desc}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "work" && (
                    <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <div
                            key={service.title}
                            className="group flex flex-col rounded-xl border border-slate-200 bg-slate-50/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-blue-600/5"
                          >
                            <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/25 transition-transform duration-300 group-hover:scale-110">
                              <Icon className="h-[22px] w-[22px]" />
                            </span>
                            <h4 className="text-base font-semibold text-slate-900">
                              {service.title}
                            </h4>
                            <p className="mt-1.5 text-sm font-light leading-relaxed text-slate-500">
                              {service.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {activeTab === "beyond" && (
                    <div className="flex h-full flex-col">
                      <p className="text-base font-light leading-relaxed text-slate-600">
                        Beyond coding, I&apos;m a{" "}
                        <strong className="font-medium text-slate-800">
                          vocalist and guitarist
                        </strong>
                        . Music helps me think creatively, while coding satisfies
                        my love for structure and logic. Together they keep me
                        focused, disciplined, and motivated.
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2.5">
                        {interests.map(({ icon: Icon, label }) => (
                          <span
                            key={label}
                            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-sm font-light text-slate-600 transition-colors hover:border-blue-300 hover:text-blue-600"
                          >
                            <Icon className="h-4 w-4" />
                            {label}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-1 flex-col border-t border-slate-100 pt-6">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Currently
                        </p>
                        <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
                          {currently.map((c) => {
                            const Icon = c.icon;
                            return (
                              <div
                                key={c.text}
                                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-3.5"
                              >
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                  <Icon className="h-[18px] w-[18px]" />
                                </span>
                                <span className="text-sm font-medium text-slate-700">
                                  {c.text}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
