"use client";

import { motion } from "framer-motion";
import { useState, memo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Lazy-load the modal to reduce initial bundle size
const ProjectDetail = dynamic(() => import("./ProjectDetail"), {
  ssr: false,
});

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
    image: "https://i.ibb.co/YT2N6cwL/Screenshot-2026-02-10-211034.png",
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
    image: "https://i.ibb.co/xSPCgKBS/Screenshot-2026-02-10-224634.png",
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

// Animation variants (defined outside component for clarity)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Memoized Project Card for better performance
const ProjectCard = memo(({ project, index, onSelectProject }) => {
  return (
    <motion.article
      variants={itemVariants}
      className="group relative flex flex-col h-full bg-[#1e1933]/60 border border-white/10 rounded-xl overflow-hidden hover:shadow-[0_10px_30px_-10px_rgba(55,19,236,0.4)] transition-all duration-300"
    >
      {/* Image with optimized Next/Image */}
      <div className="relative w-full aspect-video overflow-hidden bg-slate-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={index < 3} // Preload all (only 3 images total)
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1933]/80 to-transparent" />
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 text-md leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex gap-3">
          <button
            onClick={() => onSelectProject(project)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-md font-semibold transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">
              visibility
            </span>
            View Details
          </button>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/15 text-white rounded-lg text-md font-semibold border border-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">
              open_in_new
            </span>
            Live
          </a>
        </div>
      </div>
    </motion.article>
  );
});

ProjectCard.displayName = "ProjectCard";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
            Projects by{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Sadman
            </span>
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
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelectProject={setSelectedProject}
            />
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
