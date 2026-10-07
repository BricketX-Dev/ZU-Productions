// src/components/about/AboutHero.tsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AboutHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Update this path to your custom icon
  const manifestoIconSrc = "/images/icons/about/manifesto.png";
  const discIconSrc = "/images/icons/about/disc.png";

  return (
    <section className="relative border-b border-surface-border overflow-hidden select-none">
      {/* Background Ambient Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src="/videos/about-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter contrast-125 brightness-90 scale-105"
        />
        {/* Dual Multi-Stop Linear Masks */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-radial-vignette opacity-80" />
      </div>

      {/* Ambient Dark-Red Optical Flare */}
      <div className="absolute top-1/4 left-1/3 w-[650px] h-[350px] bg-brand-dark-red/15 blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-5 sm:px-10 pt-12 sm:pt-20 pb-16 sm:pb-24 relative z-10">
        {/* Top Telemetry Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 pb-4 sm:pb-6 mb-8 sm:mb-12 border-b border-neutral-800/80 font-mono text-[9px] sm:text-[10px] text-neutral-500 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse shrink-0" />
            <span className="text-neutral-300 font-semibold truncate">STUDIO DIRECTORY</span>
            <span className="text-neutral-700 hidden xs:inline">|</span>
            <span className="hidden xs:inline truncate">CINEMATIC ARCHITECTURE</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 text-neutral-400">
            <span>EST. KARACHI, PK</span>
            <span className="text-neutral-700">•</span>
            <span>GLOBAL PIPELINES</span>
          </div>
        </div>

        {/* Split Two-Column Editorial Layout */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroContainerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
        >
          {/* Left Column: Primary Manifesto Headline */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <motion.div variants={heroItemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-surface/90 backdrop-blur-md">
              <div className="relative w-3.5 h-3.5 shrink-0">
                <Image
                  src={manifestoIconSrc}
                  alt="Manifesto Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-300">
                Studio Manifesto
              </span>
            </motion.div>

            <motion.h1
              variants={heroItemVariants}
              className="font-display text-3xl xs:text-4xl sm:text-6xl lg:text-6xl font-black uppercase tracking-tight leading-[1.08] text-white"
            >
              An Idea Is Only As Strong{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-brand-accent">
                As Its Execution.
              </span>
            </motion.h1>

            <motion.p variants={heroItemVariants} className="text-neutral-200 text-sm sm:text-lg font-light leading-relaxed max-w-2xl pt-1 sm:pt-2">
              ZU Production is a Pakistan-based creative production company delivering complete, end-to-end visual execution across film, commercial television, large-scale events, digital campaigns, and live broadcast pipelines.
            </motion.p>

            <motion.p variants={heroItemVariants} className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light max-w-2xl">
              We unite creative vision with engineering discipline to convert raw concepts into polished visual experiences. From concept development and logistics planning to physical production and master color grading, our capabilities adapt across diverse formats, scales, and environments.
            </motion.p>
          </div>

          {/* Right Column: Architectural Telemetry Slate */}
          <motion.div variants={heroItemVariants} className="lg:col-span-5 space-y-4 lg:pt-8 w-full">
            <div className="rounded-2xl bg-neutral-950/80 border border-neutral-800/80 p-5 sm:p-6 backdrop-blur-xl relative overflow-hidden space-y-4 sm:space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-900 font-mono text-[10px] uppercase text-neutral-400">
                <span className="flex items-center gap-2 font-bold text-white">
                  <div className="relative w-3.5 h-3.5 shrink-0 animate-spin">
                    <Image
                      src={discIconSrc}
                      alt="Core Disciplines Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                  CORE DISCIPLINES
                </span>
                <span>SYNCED PIPELINE</span>
              </div>

              <div className="space-y-2.5 sm:space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-neutral-900/60">
                  <span className="text-neutral-400 text-[11px] sm:text-xs">Cinematography & Lighting</span>
                  <span className="text-white font-medium text-[11px] sm:text-xs">4K DCI RAW</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-neutral-900/60">
                  <span className="text-neutral-400 text-[11px] sm:text-xs">Multi-Camera Live Setup</span>
                  <span className="text-white font-medium text-[11px] sm:text-xs">Up to 12 Feeds</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-neutral-900/60">
                  <span className="text-neutral-400 text-[11px] sm:text-xs">Color Grading Suite</span>
                  <span className="text-white font-medium text-[11px] sm:text-xs">DaVinci Resolve</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-neutral-400 text-[11px] sm:text-xs">Broadcast Compliance</span>
                  <span className="text-white font-medium text-[11px] sm:text-xs">EBU R128</span>
                </div>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-neutral-900 flex flex-wrap items-center justify-between gap-1 text-[9px] sm:text-[10px] font-mono text-neutral-500">
                <span>DEPLOYABLE TERRITORIES</span>
                <span className="text-brand-accent font-semibold">PK • UAE • UK • SG • MY</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}