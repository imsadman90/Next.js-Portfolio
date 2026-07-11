"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Download, CheckCircle2, Code2 } from "lucide-react";

const roles = [
  "Frontend Developer",
  "MERN Stack Engineer",
  "React Specialist",
  "Next.js Developer",
  "UI Engineer",
];

const stats = [
  { value: 10, suffix: "+", label: "Projects Built", icon: "folder" },
  { value: 15, suffix: "+", label: "Technologies", icon: "code_blocks" },
  { value: 100, suffix: "%", label: "Dedication", icon: "check_circle" },
];

const socialLinks = [
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

// Typewriter that cycles through the roles list
function useTypewriter(words, { typeSpeed = 85, deleteSpeed = 40, pause = 1500 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () =>
          setText((prev) =>
            deleting
              ? current.slice(0, prev.length - 1)
              : current.slice(0, prev.length + 1),
          ),
        deleting ? deleteSpeed : typeSpeed,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

// Ease-out count-up animation
function useCountUp(target, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let raf;
    let startTime;
    const step = (t) => {
      if (startTime === undefined) startTime = t;
      const progress = Math.min((t - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value;
}

const StatItem = ({ stat }) => {
  const value = useCountUp(stat.value);
  return (
    <div className="flex flex-col items-center lg:items-start">
      <div className="flex items-baseline gap-0.5">
        <span className="text-3xl font-black tracking-tight text-slate-900">
          {value}
        </span>
        <span className="text-xl font-bold text-blue-600">{stat.suffix}</span>
      </div>
      <span className="mt-0.5 text-xs font-light uppercase tracking-wider text-slate-400">
        {stat.label}
      </span>
    </div>
  );
};

const Hero = () => {
  const typed = useTypewriter(roles);

  return (
    <main
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden py-24 lg:py-20"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 hero-grid" />
        <div className="animate-blob absolute -left-24 top-10 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="animate-blob absolute -right-16 bottom-0 h-[28rem] w-[28rem] rounded-full bg-sky-300/20 blur-3xl [animation-delay:-8s]" />
        <div className="animate-blob absolute left-1/3 top-1/2 h-72 w-72 rounded-full bg-indigo-300/10 blur-3xl [animation-delay:-4s]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 pt-16 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <div className="order-2 flex flex-col gap-7 text-center lg:order-1 lg:text-left animate-[fadeInLeft_0.7s_ease-out_0.1s_both]">
            {/* Availability pill */}
            <div className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 lg:mx-0 animate-[fadeInUp_0.5s_ease-out_0.15s_both]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium tracking-wide text-emerald-700">
                Available for freelance &amp; full-time
              </span>
            </div>

            {/* Name */}
            <div className="space-y-3">
              <p className="text-sm font-light uppercase tracking-[0.35em] text-slate-400 animate-[fadeInUp_0.5s_ease-out_0.2s_both]">
                Hi, I&apos;m
              </p>
              <h1 className="text-5xl font-black leading-[0.92] tracking-tighter text-slate-900 sm:text-7xl lg:text-8xl animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
                SADMAN{" "}
                <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-500 bg-clip-text text-transparent">
                  SAMI
                </span>
              </h1>

              {/* Typewriter role */}
              <h2 className="flex min-h-[2.25rem] items-center justify-center gap-1 text-xl font-light text-slate-600 sm:text-2xl lg:justify-start">
                <span className="text-slate-400">I&apos;m a</span>
                <span className="font-medium text-blue-600">{typed}</span>
                <span className="caret-blink ml-0.5 inline-block h-6 w-0.5 bg-blue-600 align-middle" />
              </h2>
            </div>

            {/* Description */}
            <p className="mx-auto max-w-xl text-base font-light leading-relaxed text-slate-500 lg:mx-0 lg:text-lg animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
              A frontend-first developer crafting responsive, accessible, and
              performant web experiences. I specialize in{" "}
              <strong className="font-medium text-slate-700">React</strong>,{" "}
              <strong className="font-medium text-slate-700">Next.js</strong>,
              and the{" "}
              <strong className="font-medium text-slate-700">MERN stack</strong>
              , bridging product goals with polished UI engineering.
            </p>

            {/* CTAs */}
            <div className="flex flex-col justify-center gap-4 pt-1 sm:flex-row lg:justify-start animate-[fadeInUp_0.6s_ease-out_0.5s_both]">
              <a
                href="#work"
                className="btn-gradient group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-light text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:scale-[1.05] hover:shadow-xl hover:shadow-blue-600/30 active:scale-[0.98]"
              >
                View Projects
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="https://drive.google.com/file/d/1AsKUvO0driyxsX8fWhJnR4d-njFHM8YU/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-7 py-3.5 text-base font-light text-slate-700 transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:scale-[1.05] active:scale-[0.98]"
              >
                <Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                Download Resume
              </a>
            </div>

            {/* Stats */}
            <div className="mt-2 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6 animate-[fadeIn_0.6s_ease-out_0.7s_both]">
              {stats.map((stat) => (
                <StatItem key={stat.label} stat={stat} />
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center justify-center gap-3 lg:justify-start animate-[fadeInUp_0.5s_ease-out_0.8s_both]">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-600 hover:text-blue-600 hover:shadow-md"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="relative order-1 flex items-center justify-center lg:order-2 animate-[fadeInUp_0.7s_ease-out_0.2s_both]">
            <div className="relative">
              {/* Glow blob */}
              <div className="animate-blob absolute -inset-8 -z-10 rounded-full bg-gradient-to-tr from-blue-400/30 to-sky-300/30 blur-2xl" />

              {/* Rotating dashed ring */}
              <div className="animate-spin-slow absolute -inset-5 rounded-[2.5rem] border-2 border-dashed border-blue-200/70" />

              {/* Gradient-framed portrait */}
              <div className="relative rounded-[2rem] bg-gradient-to-tr from-blue-600 via-sky-400 to-blue-500 p-1.5 shadow-2xl shadow-blue-600/20">
                <div className="relative h-80 w-72 overflow-hidden rounded-[1.65rem] bg-white sm:h-96 sm:w-80">
                  <Image
                    alt="Professional headshot of Sadman Sami"
                    className="h-full w-full object-cover"
                    src="/images/profile.webp"
                    width={1000}
                    height={1250}
                    priority
                    sizes="(max-width: 768px) 288px, 320px"
                    quality={90}
                  />
                </div>
              </div>

              {/* Floating badge — top left */}
              <div className="animate-float absolute -left-5 top-10 flex items-center gap-2 rounded-2xl border border-slate-100 bg-white/90 px-3.5 py-2.5 shadow-xl backdrop-blur sm:-left-10">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-[18px] w-[18px]" />
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs font-semibold text-slate-900">
                    Open to work
                  </span>
                  <span className="text-[10px] font-light text-slate-400">
                    Remote / On-site
                  </span>
                </div>
              </div>

              {/* Floating badge — bottom right */}
              <div className="animate-float-slow absolute -right-4 bottom-12 flex items-center gap-2 rounded-2xl border border-slate-100 bg-white/90 px-3.5 py-2.5 shadow-xl backdrop-blur sm:-right-8">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Code2 className="h-[18px] w-[18px]" />
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs font-semibold text-slate-900">
                    MERN Stack
                  </span>
                  <span className="text-[10px] font-light text-slate-400">
                    React • Next • Node
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
