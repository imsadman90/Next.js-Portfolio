"use client";

import { useState, memo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Lazy-load the modal to reduce initial bundle size
const ProjectDetail = dynamic(() => import("./ProjectDetail"), {
  ssr: false,
});

const projects = [
  {
    id: "carexyz",
    title: "Care.xyz — Caregiving Marketplace Platform",
    description:
      "A modern caregiving marketplace web application built with Next.js, React, and Tailwind CSS. Care.xyz allows users to browse caregiving services, create accounts, book services, and communicate through a secure contact form. The platform includes user authentication, a booking flow, service listings, and an admin dashboard — all within a smooth, responsive UI enhanced with animations and scroll smoothing.",
    image: "https://i.postimg.cc/yxHyMwMJ/Screenshot-2026-03-11-230502.png",
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Lenis Scroll",
      "MongoDB",
      "Next.js API Routes",
      "Nodemailer",
    ],
    liveUrl: "https://care-xyz-new.vercel.app/",
    repoUrl: "https://github.com/imsadman90/care-xyz.git",
    challenges:
      "Implementing a complete booking workflow with authentication, designing scalable API routes in Next.js, managing MongoDB data persistence, integrating a secure SMTP email system with Nodemailer, and maintaining smooth UX with animations and scroll smoothing.",
    improvements:
      "Add real-time notifications for bookings, implement advanced search and filtering for services, integrate payment gateways, and expand the admin dashboard with analytics and user management tools.",
  },
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

// Memoized Project Card for better performance
const ProjectCard = memo(({ project, index, onSelectProject }) => {
  return (
    <article className="group relative flex flex-col h-full bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500">
      {/* Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={index < 3}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b1e] via-transparent to-transparent opacity-60" />
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 px-5 py-4 gap-3">
        <h3 className="text-lg font-medium text-white/70">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-[11px] font-medium tracking-wide uppercase rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="px-2.5 py-0.5 text-[11px] font-medium tracking-wide rounded-full bg-white/5 text-slate-400 border border-white/10">
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <button
            onClick={() => onSelectProject(project)}
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 rounded-full text-sm font-medium border border-sky-500/20 transition-colors"
          >
            <span className="material-symbols-outlined text-[15px]">
              visibility
            </span>
            Details
          </button>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white/5 hover:bg-white/10 text-white/70 rounded-full text-sm font-medium border border-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-[15px]">
              open_in_new
            </span>
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
});

ProjectCard.displayName = "ProjectCard";

const ITEMS_PER_PAGE = 3;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const paginatedProjects = projects.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

  return (
    <section
      id="work"
      className="relative z-10 pt-28 pb-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-white/70 tracking-tight">
            Projects by <span className="text-sky-500">Sadman</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            A selection of my latest work in full-stack development. Exploring
            scalable architectures and intuitive user experiences with the MERN
            stack.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          key={currentPage}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          style={{ animation: "fadeInUp 0.4s ease-out" }}
        >
          {paginatedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelectProject={setSelectedProject}
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white/70 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-[18px]">
                chevron_left
              </span>
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-10 h-10 rounded-full text-sm font-medium transition-all ${
                  currentPage === i
                    ? "bg-sky-500/20 text-sky-400 border border-sky-500/40 shadow-[0_0_12px_rgba(56,189,248,0.2)]"
                    : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white/70"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((p) => Math.min(totalPages - 1, p + 1))
              }
              disabled={currentPage === totalPages - 1}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white/70 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-[18px]">
                chevron_right
              </span>
            </button>
          </div>
        )}
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
