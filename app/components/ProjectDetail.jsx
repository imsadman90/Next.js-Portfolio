"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";

const ProjectDetail = ({ project, isOpen, onClose }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  if (!project || !shouldRender) return null;

  const modalMarkup = (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md transition-all duration-300 ${
        isVisible ? "bg-black/50 opacity-100" : "bg-black/0 opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#1e1933]/95 backdrop-blur-md border border-white/10 rounded-2xl p-8 overscroll-contain touch-pan-y transition-all duration-300 ${
          isVisible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-5"
        }`}
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close project modal"
          className="absolute top-6 right-6 z-10 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
        >
          <span className="material-symbols-outlined text-white/70 text-3xl">
            close
          </span>
        </button>

        <div>
          {/* Project Image */}
          <div className="relative w-full h-64 rounded-xl overflow-hidden mb-8 border border-white/10">
            <Image
              src={project.image}
              alt={`Preview of ${project.title}`}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl font-light text-white/70 mb-4">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-slate-300 font-light text-lg mb-8">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-8">
            <h2 className="text-xl font-light text-white/70 mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-sky-500">
                code
              </span>
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-slate-200 text-md font-light hover:bg-white/15 hover:scale-105 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="mb-8">
            <h2 className="text-xl font-light text-white/70 mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-sky-500">
                report
              </span>
              Challenges Faced
            </h2>
            <p className="text-slate-300 font-light bg-white/5 border border-white/10 rounded-lg p-4">
              {project.challenges}
            </p>
          </div>

          {/* Improvements */}
          <div className="mb-8">
            <h2 className="text-xl font-light text-white/70 mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-sky-500">
                upgrade
              </span>
              Future Improvements
            </h2>
            <p className="text-slate-300 font-light bg-white/5 border border-white/10 rounded-lg p-4">
              {project.improvements}
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/10/90 hover:scale-105 active:scale-95 text-white/70 rounded-lg font-light transition-all shadow-lg shadow-primary/25"
            >
              <span className="material-symbols-outlined">language</span>
              View Live Project
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 hover:scale-105 active:scale-95 text-white/70 rounded-lg font-light border border-white/20 transition-all"
            >
              <span className="material-symbols-outlined">folder</span>
              GitHub Repository
            </a>
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
