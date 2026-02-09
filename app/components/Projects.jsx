"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ProjectDetail from "./ProjectDetail";

const projects = [
  {
    id: "autoverse",
    title: "AutoVerse — Car Explorer & Comparison Platform",
    description:
      "A modern, responsive car browsing and comparison web application built with React 19 and Tailwind CSS v4. AutoVerse allows users to explore car models, apply advanced filters, compare vehicles side-by-side, browse brands, and manage favorites — all within a sleek dark-themed UI enhanced with smooth animations.",
    image: "https://i.ibb.co/DHZ5jzJC/Screenshot-2026-02-08-213459.png",
    stack: [
      "React 19",
      "Tailwind CSS v4",
      "Framer Motion",
      "React Responsive Carousel",
      "Fetch API",
      "LocalStorage",
    ],
    liveUrl: "https://latest-car-details.netlify.app",
    repoUrl: "https://github.com/imsadman90/latest-cars-update.git",
    challenges:
      "Building a direction-aware hero carousel with keyboard navigation, managing complex client-side filtering/sorting/pagination for car data, implementing accurate side-by-side comparison logic with winner highlighting, and maintaining smooth animations and performance across all screen sizes.",
    improvements:
      "Introduce backend-powered authentication and user profiles, migrate data from static JSON to a database with API endpoints and enhance comparison features.",
  },

  {
    id: "scholarstream",
    title: "ScholarStream",
    description:
      "A full-featured scholarship management platform that helps students discover, apply for, and track scholarships through role-based dashboards for students, moderators, and admins.",
    image: "https://i.ibb.co.com/fdm8pdRK/Screenshot-2026-01-25-171404.png",
    stack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "JWT",
    ],
    liveUrl: "https://scholar-stream-client.web.app",
    repoUrl: "https://github.com/imsadman90/scholar-stream-client.git",
    challenges:
      "Implementing secure role-based access control, managing application state across dashboards, and handling payment flow with Stripe securely.",
    improvements:
      "Enhance personalized scholarship recommendations and optimize dashboard analytics performance.",
  },

  {
    id: "habit-tracker",
    title: "Habit Tracker Web App",
    description:
      "A productivity-focused web application that allows users to create, manage, and track daily habits with streak visualization and authentication.",
    image: "https://i.ibb.co.com/5hgrYSyb/Screenshot-2026-01-25-171519.png",
    stack: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase Auth",
    ],
    liveUrl: "https://habit-tracker-app-1e862.web.app/",
    repoUrl: "https://github.com/imsadman90/habit-tracker-assignment.git",
    challenges:
      "Designing a smooth habit tracking flow, managing user-specific data securely, and maintaining responsive UI across devices.",
    improvements:
      "Add habit analytics, reminders via notifications, and weekly performance insights.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="work"
      className="relative z-10 pt-28 pb-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Projects by Sadman Sami
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            A selection of my latest work in full-stack development. Exploring
            scalable architectures and intuitive user experiences with the MERN
            stack.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className="group relative flex flex-col h-full bg-[#1e1933]/60 border border-white/10 rounded-xl overflow-hidden hover:shadow-[0_10px_30px_-10px_rgba(55,19,236,0.4)] transition-all duration-300 ease-out"
            >
              {/* Image */}
              <div className="w-full aspect-video bg-slate-800 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${project.image}')` }}
                  loading="lazy"
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1933] to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6 gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-200 border border-white/10"
                      >
                        <span className="material-symbols-outlined text-[14px]">
                          code
                        </span>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <button
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-semibold transition-colors"
                      onClick={() => setSelectedProject(project)}
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        visibility
                      </span>
                      View Details
                    </button>
                    <a
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/15 text-white rounded-lg text-sm font-semibold border border-white/10 transition-colors"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        open_in_new
                      </span>
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetail
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
