"use client";

import { useState, memo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ExternalLink, ArrowRight } from "lucide-react";

// Lazy-load the modal to reduce initial bundle size
const ProjectDetail = dynamic(() => import("./ProjectDetail"), {
  ssr: false,
});

const GITHUB_PATH =
  "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z";

const projects = [
  {
    id: "carexyz",
    title: "Care.xyz — Caregiving Marketplace Platform",
    category: "Full-Stack",
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
    category: "Frontend",
    description:
      "A modern, responsive car browsing and comparison web application built with React 19 and Tailwind CSS v4. AutoVerse allows users to explore car models, apply advanced filters, compare vehicles side-by-side, browse brands, and manage favorites — all within a sleek UI enhanced with smooth animations.",
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
    category: "Full-Stack",
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
    category: "Full-Stack",
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

const ProjectCard = memo(({ project, onSelectProject }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_24px_50px_-20px_rgba(37,99,235,0.3)]">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-transparent to-transparent" />

        {/* Category chip */}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
          {project.category}
        </span>

        {/* Hover quick links */}
        <div className="absolute right-3 top-3 flex gap-1.5 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Live demo"
            onClick={(e) => e.stopPropagation()}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-700 shadow-md transition-colors hover:bg-blue-600 hover:text-white"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub repository"
            onClick={(e) => e.stopPropagation()}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-700 shadow-md transition-colors hover:bg-slate-900 hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
              <path d={GITHUB_PATH} />
            </svg>
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="line-clamp-1 text-base font-bold text-slate-900">
          {project.title}
        </h3>
        <p className="line-clamp-2 text-xs font-light leading-relaxed text-slate-500">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="mt-1 flex flex-wrap gap-1">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-blue-100 bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-700"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500">
              +{project.stack.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3">
          <button
            onClick={() => onSelectProject(project)}
            className="group/btn inline-flex items-center gap-1 text-xs font-medium text-blue-600 transition-colors hover:text-blue-700"
          >
            View details
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </button>
          <div className="flex items-center gap-0.5">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Live demo"
              className="flex h-7 w-7 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub repository"
              className="flex h-7 w-7 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d={GITHUB_PATH} />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
});

ProjectCard.displayName = "ProjectCard";

// Duplicated so the marquee can translate -50% and loop seamlessly.
const marqueeProjects = [...projects, ...projects];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="relative overflow-hidden py-20 lg:py-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute right-1/4 top-16 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl" />
      </div>

      <div className="mx-auto mb-10 w-full max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-300" />
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-blue-600">
              Portfolio
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-blue-300" />
          </div>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-light text-slate-500 lg:text-lg">
            A selection of my work in full-stack development — exploring scalable
            architectures and intuitive user experiences with the MERN stack.
          </p>
        </div>
      </div>

      {/* Infinite marquee — continuous side-by-side scroll, pauses on hover */}
      <div className="marquee-mask relative overflow-hidden py-2">
        <div
          className="animate-marquee flex"
          style={{ animationDuration: "45s" }}
        >
          {marqueeProjects.map((project, idx) => (
            <div
              key={idx}
              className="w-[300px] shrink-0 px-3 sm:w-[340px]"
            >
              <ProjectCard
                project={project}
                onSelectProject={setSelectedProject}
              />
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 text-center text-xs font-light text-slate-400">
        Hover to pause · click a card for details
      </p>

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
