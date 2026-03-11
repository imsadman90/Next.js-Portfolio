"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "EDUCATION", href: "#education" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

function smoothScrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu when screen becomes large enough
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (href) => {
    smoothScrollTo(href);
    setMobileOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background-dark/80 backdrop-blur-md animate-[slideDown_0.5s_ease-out]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-lg font-light text-slate-300">
              SADMAN SAMI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-md font-light text-slate-300 transition-colors duration-200 hover:text-sky-500"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white/70 transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => smoothScrollTo("#contact")}
              className="rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-md font-light text-white/70 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden border-t border-white/5 bg-background-dark/95 backdrop-blur-lg overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="block rounded-lg px-4 py-3 text-base font-light text-slate-100 hover:bg-white/5 active:bg-white/10 transition-colors"
            >
              {item.label}
            </a>
          ))}

          <button
            onClick={() => {
              smoothScrollTo("#contact");
              setMobileOpen(false);
            }}
            className="mt-3 w-full rounded-full bg-white/10 py-3.5 text-base font-light text-white/70 transition-all active:scale-[0.98]"
          >
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </header>
  );
}
