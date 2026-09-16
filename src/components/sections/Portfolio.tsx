"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, Eye } from "lucide-react";
import { PROJECTS, ProjectItem } from "@/data/content";

const CATEGORIES = ["All", "Music Video", "Commercial", "Event", "Documentary", "Sports"];

interface ProjectCardProps {
  project: ProjectItem;
  idx: number;
}

function ProjectCard({ project, idx }: ProjectCardProps) {
  // Directly use the slug and video from the project data
  const destination = project.slug ? `/work/${project.slug}` : "/contact";
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Smooth hover play/pause handlers
  const handleMouseEnter = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Autoplay policy prevented playback, ignore safely
          });
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset preview to first frame
      setIsPlaying(false);
    }
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: idx * 0.04 }}
      className="group relative rounded-2xl bg-surface/80 border border-surface-border hover:border-brand-red/60 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={destination} className="block flex-1 flex flex-col justify-between">
        <div>
          {/* 16:9 Cinema Viewfinder Frame */}
          <div className="relative aspect-[16/9] w-full bg-neutral-950 border-b border-neutral-900 overflow-hidden flex items-center justify-center">
            {/* Film Letterboxing Top & Bottom */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-black/90 z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-black/90 z-20 pointer-events-none" />

            {/* Framing Reticles in Corners */}
            <div className="absolute top-5 left-5 w-2 h-2 border-t border-l border-neutral-600 z-20 pointer-events-none" />
            <div className="absolute top-5 right-5 w-2 h-2 border-t border-r border-neutral-600 z-20 pointer-events-none" />
            <div className="absolute bottom-5 left-5 w-2 h-2 border-b border-l border-neutral-600 z-20 pointer-events-none" />
            <div className="absolute bottom-5 right-5 w-2 h-2 border-b border-r border-neutral-600 z-20 pointer-events-none" />

            {/* Top HUD Metadata */}
            <div className="absolute top-4 left-8 z-20 font-mono text-[9px] text-neutral-400 uppercase tracking-widest pointer-events-none">
              {project.aspectRatio || "2.39:1 // SCOPE"}
            </div>
            <div className="absolute top-4 right-8 z-20 font-mono text-[9px] text-brand-accent uppercase tracking-widest flex items-center gap-1 pointer-events-none">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isPlaying ? "bg-brand-red animate-ping" : "bg-neutral-600"
                }`}
              />
              <span className={isPlaying ? "text-white" : "text-neutral-500"}>
                {isPlaying ? "PREVIEWING" : (project.resolution || "4K RAW")}
              </span>
            </div>

            {/* Hover Video Element - Directly using project.video */}
            {project.video ? (
              <video
                ref={videoRef}
                src={project.video}
                muted
                loop
                playsInline
                preload="metadata"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  isPlaying ? "opacity-90 scale-105" : "opacity-35 scale-100"
                }`}
              />
            ) : null}

            {/* Ambient Dark Gradient Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/30 via-black/60 to-black pointer-events-none" />

            {/* Center Play Icon Overlay */}
            <div
              className={`relative z-10 w-12 h-12 rounded-full bg-neutral-900/90 border border-neutral-800 flex items-center justify-center transition-all duration-300 ${
                isPlaying
                  ? "opacity-0 scale-75 pointer-events-none"
                  : "opacity-100 scale-100 text-neutral-400 group-hover:text-white group-hover:bg-brand-red group-hover:border-brand-red group-hover:scale-110 crimson-glow"
              }`}
            >
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </div>
          </div>

          {/* Content Information */}
          <div className="p-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-accent block mb-2 font-semibold">
              {project.category}
            </span>
            <h3 className="font-display text-xl font-bold text-white group-hover:text-neutral-200 transition-colors">
              {project.title}
            </h3>
            <p className="text-neutral-400 text-xs mt-2 leading-relaxed font-light">
              {project.scope}
            </p>
          </div>
        </div>

        {/* Bottom Metadata Trigger */}
        <div className="px-6 pb-6 pt-3 border-t border-neutral-900/80 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-neutral-500 group-hover:text-white transition-colors">
          <span className="flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-neutral-600 group-hover:text-brand-accent transition-colors" />
            <span>{project.slug ? "Case Study" : "Inquire Commission"}</span>
          </span>
          <div className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red group-hover:text-white transition-all">
            <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function Portfolio({ isPage = false }: { isPage?: boolean }) {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeTab === "All") return true;
    return proj.category.toLowerCase().includes(activeTab.toLowerCase());
  });

  return (
    <section
      id="work"
      className={`relative border-y border-surface-border bg-black select-none ${
        isPage ? "py-12" : "py-28"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-surface mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                09 — Production Archive
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
              Selected Works
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md leading-relaxed font-light">
            International music videos, commercial broadcast TVCs, and multi-camera live environments delivered across global standards.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-neutral-900">
          {CATEGORIES.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 py-2 rounded-full text-xs font-mono tracking-widest uppercase transition-colors cursor-pointer ${
                  isActive ? "text-white font-semibold" : "text-neutral-500 hover:text-neutral-300"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeFilterPill"
                    className="absolute inset-0 rounded-full bg-surface border border-neutral-700 shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {tab}
              </button>
            );
          })}
        </div>

        {/* Dynamic Showcase Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.slug || project.title} project={project} idx={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}