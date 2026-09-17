// src/app/work/page.tsx
"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  ArrowUpRight, 
  Film, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Cpu, 
  Layers, 
  Video 
} from "lucide-react";

interface ArchiveProject {
  slug: string;
  title: string;
  client: string;
  scope: string;
  category: "Music Video" | "Commercial" | "Event" | "Documentary" | "Sports" | "Digital Content";
  summary: string;
  deliverables: string;
  aspectRatio: string;
  resolution: string;
  video: string;
}

const ARCHIVE_PROJECTS: ArchiveProject[] = [
  {
    slug: "ahmed-bukhatir",
    title: "Ahmed Bukhatir",
    client: "Ahmed Bukhatir (UAE)",
    scope: "Official Music Video Production",
    category: "Music Video",
    summary: "Directed and mounted the official music video production for internationally renowned artist Ahmed Bukhatir.",
    deliverables: "Official 4K Music Video Master • BTS Featurette • Theatrical Cut",
    aspectRatio: "2.39:1 Anamorphic",
    resolution: "4K DCI RAW",
    video: "/videos/projects/ab.mp4",
  },
  {
    slug: "universal-brothers",
    title: "Universal Brothers",
    client: "Universal Brothers",
    scope: "Hajj & Umrah Campaign",
    category: "Commercial",
    summary: "Creative and production execution across commercial, documentary, and social media content suites for the Hajj & Umrah campaign.",
    deliverables: "Commercial TVC • Documentary Short • Social Reel Campaign",
    aspectRatio: "16:9 Cinema",
    resolution: "4K ProRes 422 HQ",
    video: "/videos/projects/universal-brothers.mp4",
  },
  {
    slug: "ptpl-anthem",
    title: "Pakistan Tape Ball Premier League",
    client: "PTPL",
    scope: "PTPL Anthem & Promotional Campaign",
    category: "Sports",
    summary: "Production of the official tournament anthem, high-speed stadium visual loops, and multi-channel promotional campaign assets.",
    deliverables: "Master Sports Anthem • Stadium Screen Visuals • Television Promos",
    aspectRatio: "2.35:1 Anamorphic",
    resolution: "4K RAW 120 FPS",
    video: "/videos/projects/ptpl.mp4",
  },
  {
    slug: "studio-podcast-series",
    title: "The Studio Sessions // Digital Show",
    client: "Original Studio Production (in collab with BOL Media)",
    scope: "Multi-Camera Episodic Podcast & Digital Broadcast",
    category: "Digital Content",
    summary: "Episodic studio talk format engineered for high-engagement social streaming alongside multi-camera televised syndication.",
    deliverables: "Full 4K Multi-Cam Master • Vertical Reel Suites (9:16) • Multi-Track Audio",
    aspectRatio: "16:9 / 9:16 Suite",
    resolution: "4K Multi-Cam ISO",
    video: "/videos/projects/podcast.mp4",
  },
  {
    slug: "international-tvcs",
    title: "TVCs & DVCs Commercial Suite",
    client: "Singapore & Malaysia Commercial Accounts",
    scope: "Cross-Border Commercial Assignments",
    category: "Commercial",
    summary: "Turnkey commercial productions adhering to strict international broadcast delivery standards and aesthetic execution.",
    deliverables: "30s Commercial Masters • 15s Cutdowns • EBU R128 Compliant Audio",
    aspectRatio: "16:9 Broadcast",
    resolution: "4K ProRes 4444",
    video: "/videos/projects/tvc.mp4",
  },
  {
    slug: "naeem-foundation",
    title: "Naeem Foundation",
    client: "Naeem Foundation (UK)",
    scope: "UK-Based NGO Awareness Campaign",
    category: "Documentary",
    summary: "Educational, awareness, and digital media content production capturing humanitarian welfare initiatives.",
    deliverables: "Humanitarian Documentary Film • Social Media Campaign • Donor Appeals",
    aspectRatio: "16:9 Documentary",
    resolution: "4K Cinema",
    video: "/videos/projects/naeem-foundation.mp4",
  },
];

const CATEGORIES = [
  "All",
  "Music Video",
  "Commercial",
  "Event",
  "Documentary",
  "Sports",
  "Digital Content",
] as const;

type CategoryFilter = (typeof CATEGORIES)[number];

export default function WorkArchivePage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [isPlayingShowreel, setIsPlayingShowreel] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const showreelRef = useRef<HTMLVideoElement>(null);

  const filteredProjects = activeCategory === "All"
    ? ARCHIVE_PROJECTS
    : ARCHIVE_PROJECTS.filter((p) => p.category === activeCategory);

  const toggleShowreelPlay = () => {
    if (!showreelRef.current) return;
    if (isPlayingShowreel) {
      showreelRef.current.pause();
      setIsPlayingShowreel(false);
    } else {
      showreelRef.current.play();
      setIsPlayingShowreel(true);
    }
  };

  const toggleMute = () => {
    if (!showreelRef.current) return;
    showreelRef.current.muted = !showreelRef.current.muted;
    setIsMuted(showreelRef.current.muted);
  };

  return (
    <div className="pt-24 pb-28 bg-black text-white min-h-screen select-none">
      {/* 1. CURATED SHOWREEL THEATER */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-b border-surface-border">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-surface">
              <Film className="w-3 h-3 text-brand-accent" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                Production Showreel
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight">
              A Frame-by-Frame Look <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-brand-accent">
                At What We Create.
              </span>
            </h1>
          </div>

          <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-light leading-relaxed">
            A curated showreel presenting selected work across Corporate Films, Commercials, TVCs, Documentaries, Events, Digital Content, Multi-Camera Production, Production Design, and Post-Production.
          </p>
        </div>

        {/* Master Reel Cinema Player */}
        <div className="relative aspect-video w-full rounded-2xl bg-neutral-950 border border-surface-border overflow-hidden shadow-2xl group">
          <video
            ref={showreelRef}
            src="/videos/projects/ab.mp4"
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-radial-vignette opacity-85 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none" />

          {/* Viewfinder Reticle Corners */}
          <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-neutral-600 pointer-events-none" />
          <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-neutral-600 pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-neutral-600 pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-neutral-600 pointer-events-none" />

          {/* Center Play Button */}
          <button
            type="button"
            onClick={toggleShowreelPlay}
            className="absolute inset-0 flex items-center justify-center cursor-pointer focus:outline-none"
            aria-label={isPlayingShowreel ? "Pause Showreel" : "Play Showreel"}
          >
            <div className={`w-20 h-20 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 ${
              isPlayingShowreel ? "opacity-0 group-hover:opacity-100 scale-90" : "opacity-100 scale-100 crimson-glow"
            }`}>
              <Play className={`w-8 h-8 text-white ${isPlayingShowreel ? "fill-white" : "fill-white translate-x-0.5"}`} />
            </div>
          </button>

          {/* Bottom HUD Bar */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none z-10">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-brand-accent block font-semibold">
                MASTER SHOWREEL
              </span>
              <span className="font-display text-sm sm:text-base font-bold text-white uppercase tracking-tight">
                ZU PRODUCTION // COMPILATION REEL
              </span>
            </div>

            <div className="flex items-center gap-3 pointer-events-auto">
              <button
                type="button"
                onClick={toggleMute}
                className="p-2.5 rounded-lg bg-black/60 border border-white/10 text-neutral-300 hover:text-white backdrop-blur-md transition-colors cursor-pointer"
                aria-label="Toggle Audio"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER RAIL */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-surface-border pb-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-brand-accent block font-semibold">
              INDEXED ARCHIVE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight">
              Selected Works
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-brand-red text-white border border-brand-red crimson-glow-sm"
                      : "bg-surface/60 border border-surface-border text-neutral-400 hover:border-neutral-700 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. PROJECT DIRECTORY GRID */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectArchiveCard key={project.slug} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 4. DIGITAL CONTENT PRODUCTION & AI PRODUCTION PANELS */}
      <section className="max-w-7xl mx-auto px-6 pt-24 border-t border-surface-border mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Digital Content Production */}
          <div className="p-8 sm:p-10 rounded-2xl bg-surface/50 border border-surface-border flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-brand-accent font-mono text-[10px] uppercase tracking-widest font-semibold">
                <Video className="w-3.5 h-3.5" />
                <span>Digital Content Production</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white">
                Content for the Digital World
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed font-light">
                Our digital production experience extends across social media, short-form video, YouTube long-form, branded content, promotional campaigns, podcasts, and interview-based productions.
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                We develop content specifically for the way audiences consume media today — combining strong visual storytelling with concise communication and platform-focused delivery.
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-900 flex flex-wrap gap-2">
              {["Reels & Shorts", "YouTube Master", "Podcasts", "Digital Commercials", "Branded Series"].map((item) => (
                <span key={item} className="px-2.5 py-1 rounded bg-neutral-950 border border-neutral-800 text-[10px] font-mono text-neutral-400">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* AI-Assisted Creative Production */}
          <div className="p-8 sm:p-10 rounded-2xl bg-surface/50 border border-surface-border flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-brand-accent font-mono text-[10px] uppercase tracking-widest font-semibold">
                <Cpu className="w-3.5 h-3.5" />
                <span>AI-Assisted Creative Workflows</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white">
                Creativity Meets Emerging Technology
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed font-light">
                ZU Production integrates AI-assisted creative production into selected projects where it adds tangible value to the creative development process.
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                AI supports concept development, visual exploration, pre-visualization, creative experimentation, and digital visual polish. We combine emerging tech with established cinematographic direction while maintaining professional broadcast standards.
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-900 flex flex-wrap gap-2">
              {["Visual Pre-Viz", "Concept Art", "Generative R&D", "VFX Assist", "Rapid Treatment"].map((item) => (
                <span key={item} className="px-2.5 py-1 rounded bg-neutral-950 border border-neutral-800 text-[10px] font-mono text-neutral-400">
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. MULTI-DISCIPLINARY DELIVERABLE TILES */}
      <section className="max-w-7xl mx-auto px-6 pt-20">
        <div className="rounded-3xl border border-surface-border bg-neutral-950 p-8 sm:p-12">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-brand-accent block font-semibold">
              SCOPE DIRECTORY
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              Selected Work Classifications
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm font-light">
              Full cross-category production services engineered for enterprise, broadcast, and institutional clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
            <div className="p-5 rounded-xl bg-surface/70 border border-neutral-800/80 space-y-2">
              <span className="text-white font-bold block border-b border-neutral-800 pb-2 uppercase text-[11px]">
                Corporate
              </span>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                Corporate Films | Company Profiles | Institutional Content | Leadership Series
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface/70 border border-neutral-800/80 space-y-2">
              <span className="text-white font-bold block border-b border-neutral-800 pb-2 uppercase text-[11px]">
                Commercial
              </span>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                TVCs | DVCs | Brand Films | Product Videos | Promotional Content
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface/70 border border-neutral-800/80 space-y-2">
              <span className="text-white font-bold block border-b border-neutral-800 pb-2 uppercase text-[11px]">
                Events
              </span>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                Conferences | Convocations | Award Ceremonies | Launches | Corporate Events
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface/70 border border-neutral-800/80 space-y-2">
              <span className="text-white font-bold block border-b border-neutral-800 pb-2 uppercase text-[11px]">
                Documentaries
              </span>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                Documentary Films | In-Depth Interviews | Institutional Stories | Social Awareness
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface/70 border border-neutral-800/80 space-y-2">
              <span className="text-white font-bold block border-b border-neutral-800 pb-2 uppercase text-[11px]">
                Music & Entertainment
              </span>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                Official Music Videos | Sports Anthems | Nasheeds | Entertainment Productions
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface/70 border border-neutral-800/80 space-y-2">
              <span className="text-white font-bold block border-b border-neutral-800 pb-2 uppercase text-[11px]">
                Broadcast & Post-Production
              </span>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                Multi-Camera Live Production | Color Grading | Motion Graphics | VFX Finishing
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-neutral-500 font-mono text-xs">
              Deploying complete crew and technical equipment packages worldwide.
            </span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-red hover:bg-brand-dark-red text-white text-xs font-mono uppercase tracking-widest font-bold crimson-glow transition-all"
            >
              <span>Initiate Project Brief</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectArchiveCard({ project }: { project: ArchiveProject }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardVideoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (cardVideoRef.current && project.video) {
      cardVideoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardVideoRef.current && project.video) {
      cardVideoRef.current.pause();
      cardVideoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group rounded-2xl bg-neutral-950 border border-surface-border overflow-hidden hover:border-brand-red/60 transition-all duration-500 flex flex-col justify-between"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video Viewport Stage */}
      <div className="relative aspect-video w-full bg-neutral-900 overflow-hidden">
        {project.video ? (
          <video
            ref={cardVideoRef}
            src={project.video}
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-600 font-mono text-xs">
            Studio Archival Reel
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-neutral-800 font-mono text-[9px] uppercase tracking-widest text-neutral-300">
            {project.category}
          </span>
        </div>

        {/* Format Spec */}
        <div className="absolute top-3 right-3 z-10 font-mono text-[9px] text-neutral-400 bg-black/60 px-2 py-0.5 rounded border border-neutral-800">
          {project.resolution}
        </div>
      </div>

      {/* Metadata & Case Study Link */}
      <div className="p-6 space-y-4">
        <div>
          <span className="text-[10px] font-mono text-brand-accent uppercase tracking-wider block mb-1">
            {project.client}
          </span>
          <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white group-hover:text-neutral-100 transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-neutral-400 text-xs font-light leading-relaxed line-clamp-2">
            {project.summary}
          </p>
        </div>

        <div className="pt-3 border-t border-neutral-900 font-mono text-[10px] text-neutral-500">
          <span>Deliverables: {project.deliverables}</span>
        </div>

        <div className="pt-3 border-t border-neutral-900/60 flex items-center justify-between">
          <span className="font-mono text-[10px] text-neutral-500">
            {project.aspectRatio}
          </span>
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-neutral-300 group-hover:text-brand-accent transition-colors cursor-pointer"
          >
            <span>Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}