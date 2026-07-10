"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { X, AlertTriangle, Rocket, Globe, Code2 } from "lucide-react";

const GITHUB_PATH =
  "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z";

const ProjectDetail = ({ project, isOpen, onClose }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsVisible(true));
      });
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.classList.add("overflow-hidden");
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => setShouldRender(false), 300);
      document.body.classList.remove("overflow-hidden");
      document.body.style.paddingRight = "";
      return () => clearTimeout(timer);
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, handleClose]);

  if (!project || !shouldRender) return null;

  const modalMarkup = (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 sm:p-6 ${
        isVisible ? "bg-slate-900/60 opacity-100 backdrop-blur-sm" : "opacity-0"
      }`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl transition-all duration-300 ${
          isVisible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-5 scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close project modal"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md backdrop-blur transition-colors hover:bg-white hover:text-blue-600"
        >
          <X className="h-[22px] w-[22px]" />
        </button>

        {/* Scroll area */}
        <div
          className="overflow-y-auto overscroll-contain"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          {/* Hero image with title overlay */}
          <div className="relative h-56 w-full sm:h-72">
            <Image
              src={project.image}
              alt={`Preview of ${project.title}`}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-slate-900/10" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <span className="mb-3 inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white shadow-sm">
                {project.category || "Project"}
              </span>
              <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                {project.title}
              </h1>
            </div>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-3">
            {/* Main column */}
            <div className="space-y-8 lg:col-span-2">
              <section>
                <h2 className="mb-2 flex items-center gap-2 text-base font-bold uppercase tracking-wide text-slate-900">
                  <span className="h-4 w-1 rounded-full bg-blue-600" />
                  Overview
                </h2>
                <p className="text-sm font-light leading-relaxed text-slate-600 sm:text-base">
                  {project.description}
                </p>
              </section>

              <section>
                <h2 className="mb-3 flex items-center gap-2 text-base font-bold uppercase tracking-wide text-slate-900">
                  <AlertTriangle className="h-5 w-5 text-blue-600" />
                  Challenges Faced
                </h2>
                <p className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-light leading-relaxed text-slate-600">
                  {project.challenges}
                </p>
              </section>

              <section>
                <h2 className="mb-3 flex items-center gap-2 text-base font-bold uppercase tracking-wide text-slate-900">
                  <Rocket className="h-5 w-5 text-blue-600" />
                  Future Improvements
                </h2>
                <p className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-light leading-relaxed text-slate-600">
                  {project.improvements}
                </p>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-0 space-y-6">
                {/* Actions */}
                <div className="flex flex-col gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl btn-gradient px-5 py-3 text-sm font-medium text-white shadow-md shadow-blue-600/25 transition-all hover:shadow-lg active:scale-[0.98]"
                  >
                    <Globe className="h-5 w-5" />
                    View Live Project
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition-all hover:border-slate-900 hover:bg-slate-50 active:scale-[0.98]"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                      <path d={GITHUB_PATH} />
                    </svg>
                    Source Code
                  </a>
                </div>

                {/* Tech stack */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
                  <h2 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-900">
                    <Code2 className="h-[18px] w-[18px] text-blue-600" />
                    Tech Stack
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-medium text-blue-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );

  return typeof window !== "undefined"
    ? createPortal(modalMarkup, document.body)
    : null;
};

export default ProjectDetail;
