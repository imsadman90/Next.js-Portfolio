"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronRight, Globe, X, Menu } from "lucide-react";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "EDUCATION", href: "#education" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

const sectionIds = navItems.map((item) => item.href.slice(1));

const techChips = ["React", "Next.js", "Node.js", "MongoDB"];

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

function smoothScrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  const linkRefs = useRef([]);
  const currentIdx = hoveredIdx !== null ? hoveredIdx : activeIdx;

  // Slide the highlight pill under the active / hovered nav item bro
  const updateIndicator = useCallback(() => {
    const idx = hoveredIdx !== null ? hoveredIdx : activeIdx;
    const el = linkRefs.current[idx];
    if (el) {
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
    }
  }, [hoveredIdx, activeIdx]);

  useEffect(() => {
    updateIndicator();
  }, [updateIndicator, scrolled]);

  useEffect(() => {
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  // Shrink + solidify the bar once the user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight whichever section is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionIds.indexOf(entry.target.id);
            if (idx !== -1) setActiveIdx(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close mobile menu when screen becomes large enough
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (href) => {
    smoothScrollTo(href);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 animate-[slideDown_0.5s_ease-out] ${
        scrolled
          ? "border-b border-slate-200 bg-white/80 shadow-[0_4px_20px_-8px_rgba(15,23,42,0.15)] backdrop-blur-md"
          : "border-b border-transparent bg-white/50 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Brand + hover-reveal About card */}
          <div className="group relative">
            <button
              onClick={() => smoothScrollTo("#home")}
              className="flex items-center gap-2.5 rounded-full py-1.5 pl-1.5 pr-3 transition-colors hover:bg-slate-100/70"
              aria-label="Sadman Sami — about"
            >
              <span className="relative block h-9 w-9 overflow-hidden rounded-full ring-2 ring-blue-100">
                <Image
                  src="https://i.ibb.co/XZLRCfpr/sami.jpg"
                  alt="Sadman Sami"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
              </span>
              <span className="flex flex-col items-start leading-none">
                <span className="text-sm font-semibold tracking-tight text-slate-900">
                  SADMAN SAMI
                </span>
                <span className="mt-0.5 text-[10px] font-light uppercase tracking-[0.18em] text-blue-600">
                  Frontend Dev
                </span>
              </span>
              <ChevronRight className="hidden h-[18px] w-[18px] text-slate-400 transition-transform duration-300 group-hover:rotate-180 md:block" />
            </button>

            {/* About card — appears on hover (desktop) */}
            <div className="pointer-events-none absolute left-0 top-full hidden w-80 translate-y-2 pt-3 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 md:block">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_-15px_rgba(15,23,42,0.25)]">
                {/* Header strip */}
                <div className="relative h-16 bg-gradient-to-r from-blue-600 to-sky-500">
                  <div className="absolute -bottom-8 left-5 h-16 w-16 overflow-hidden rounded-xl ring-4 ring-white">
                    <Image
                      src="https://i.ibb.co/XZLRCfpr/sami.jpg"
                      alt="Sadman Sami"
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-medium text-emerald-600">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </span>
                    Available
                  </span>
                </div>

                <div className="px-5 pb-5 pt-10">
                  <h3 className="text-base font-semibold text-slate-900">
                    Sadman Sami
                  </h3>
                  <p className="text-xs font-light text-blue-600">
                    Frontend Developer &amp; MERN Stack Engineer
                  </p>

                  <p className="mt-3 text-xs font-light leading-relaxed text-slate-500">
                    I craft responsive, accessible, and performant web
                    experiences with React, Next.js, and the MERN stack.
                  </p>

                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-light text-slate-500">
                    <Globe className="h-4 w-4 text-slate-400" />
                    Dhaka, Bangladesh
                  </div>

                  {/* Tech chips */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {techChips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-blue-100 bg-blue-50 px-2 py-0.5 text-[10px] font-light text-blue-700"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  {/* Socials + CTA */}
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                    <div className="flex items-center gap-1">
                      {socials.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={social.label}
                          className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-blue-50 hover:text-blue-600"
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
                    <button
                      onClick={() => smoothScrollTo("#contact")}
                      className="btn-gradient rounded-full px-4 py-1.5 text-xs font-light text-white transition-colors"
                    >
                      Let&apos;s Talk
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation with sliding pill */}
          <nav
            className="relative hidden items-center md:flex"
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {/* Moving highlight pill */}
            <span
              aria-hidden
              className="absolute top-1/2 h-9 -translate-y-1/2 rounded-full bg-blue-600 shadow-md shadow-blue-600/25 transition-all duration-300 ease-out"
              style={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.opacity,
              }}
            />
            {navItems.map((item, idx) => (
              <a
                key={item.href}
                ref={(el) => (linkRefs.current[idx] = el)}
                href={item.href}
                onMouseEnter={() => setHoveredIdx(idx)}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`relative z-10 rounded-full px-3.5 py-2 text-xs font-light tracking-wide transition-colors duration-200 lg:px-4 lg:text-sm ${
                  currentIdx === idx
                    ? "text-white"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => smoothScrollTo("#contact")}
              className="btn-gradient rounded-lg px-5 py-2.5 text-md font-light text-white shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Let&apos;s Talk
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="p-2 text-slate-600 transition-colors hover:text-blue-600 md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-slate-200 bg-white/95 backdrop-blur-lg transition-all duration-300 ease-out md:hidden ${
          mobileOpen
            ? "max-h-[640px] border-t opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5">
          {/* Mini profile header */}
          <div className="mb-2 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
            <span className="relative block h-11 w-11 overflow-hidden rounded-full ring-2 ring-blue-100">
              <Image
                src="https://i.ibb.co/XZLRCfpr/sami.jpg"
                alt="Sadman Sami"
                fill
                sizes="44px"
                className="object-cover"
              />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-slate-900">
                Sadman Sami
              </span>
              <span className="text-xs font-light text-blue-600">
                Frontend &amp; MERN Stack Dev
              </span>
              <span className="mt-1 inline-flex items-center gap-1.5 text-[11px] font-light text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Available for work
              </span>
            </div>
          </div>

          {navItems.map((item, idx) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={`block rounded-lg px-4 py-3 text-base font-light transition-colors ${
                activeIdx === idx
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-700 hover:bg-slate-100 active:bg-slate-200"
              }`}
            >
              {item.label}
            </a>
          ))}

          <button
            onClick={() => {
              smoothScrollTo("#contact");
              setMobileOpen(false);
            }}
            className="btn-gradient mt-3 w-full rounded-full py-3.5 text-base font-light text-white transition-all active:scale-[0.98]"
          >
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </header>
  );
}
