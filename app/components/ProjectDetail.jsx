"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const ProjectDetail = ({ project, isOpen, onClose }) => {
  const modalContentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.classList.add("overflow-hidden");
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.classList.remove("overflow-hidden");
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);

  if (!project) return null;

  const modalMarkup = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md overflow-hidden"
          onClick={onClose}
        >
          <motion.div
            ref={modalContentRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#1e1933]/95 backdrop-blur-md border border-white/10 rounded-2xl p-8 overscroll-contain"
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => {
              e.stopPropagation();
            }}
            onTouchMove={(e) => {
              e.stopPropagation();
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="sticky top-0 left-full ml-auto mb-4 p-1 hover:bg-white/10 rounded-lg transition-colors z-10 bg-[#1e1933]/80 backdrop-blur-sm"
            >
              <span className="material-symbols-outlined text-white/70 text-[28px]">
                close
              </span>
            </button>

            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="w-full h-64 rounded-xl overflow-hidden mb-8 border border-white/10"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${project.image}')` }}
              ></div>
            </motion.div>

            {/* Project Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-4xl font-bold text-white mb-4"
            >
              {project.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-slate-300 text-lg leading-relaxed mb-8"
            >
              {project.description}
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="mb-8"
            >
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  code
                </span>
                Technology Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.stack.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-slate-200 text-sm font-medium hover:bg-white/15 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  report
                </span>
                Challenges Faced
              </h2>
              <p className="text-slate-300 leading-relaxed bg-white/5 border border-white/10 rounded-lg p-4">
                {project.challenges}
              </p>
            </motion.div>

            {/* Improvements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="mb-8"
            >
              <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  upgrade
                </span>
                Future Improvements
              </h2>
              <p className="text-slate-300 leading-relaxed bg-white/5 border border-white/10 rounded-lg p-4">
                {project.improvements}
              </p>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-primary/25"
              >
                <span className="material-symbols-outlined">language</span>
                View Live Project
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 text-white rounded-lg font-semibold border border-white/20 transition-colors"
              >
                <span className="material-symbols-outlined">folder</span>
                GitHub Repository
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return typeof window !== "undefined"
    ? createPortal(modalMarkup, document.body)
    : null;
};

export default ProjectDetail;
