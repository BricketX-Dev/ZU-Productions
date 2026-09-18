// src/app/about/page.tsx
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { TEAM, type TeamMember } from "@/data/content";
import { 
  Film, 
  Globe2, 
  ArrowUpRight, 
  User, 
  Layers, 
  Check, 
  Cpu, 
  Award, 
  Sliders, 
  Sparkles,
  ShieldCheck,
  Disc3
} from "lucide-react";

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

const PHILOSOPHY_PILLARS = [
  {
    title: "Idea",
    tagline: "Concept & Intent",
    desc: "A clear, focused, and meaningful concept established before equipment is unpacked.",
  },
  {
    title: "Story",
    tagline: "Narrative Core",
    desc: "A disciplined narrative that anchors genuine human connection and long-term brand recall.",
  },
  {
    title: "Visuals",
    tagline: "Cinematic Aesthetic",
    desc: "Intentional framing, curated lighting palettes, and deliberate production design.",
  },
  {
    title: "Execution",
    tagline: "Technical Rigor",
    desc: "Broadcast-grade standards, scheduling discipline, and uncompromising on-set management.",
  },
  {
    title: "Impact",
    tagline: "Strategic Result",
    desc: "Tangible communication outcomes that perform across cinema screens, broadcast, and digital stages.",
  },
];

const ADVANTAGES = [
  {
    title: "Integrated Production",
    desc: "Creative, production, event, digital, and post-production capabilities working in continuous synchronization.",
    icon: Layers,
  },
  {
    title: "End-to-End Execution",
    desc: "From concept and pre-production through physical filming, event staging, and master multi-format delivery.",
    icon: Check,
  },
  {
    title: "Creative + Technical",
    desc: "A combination of creative storytelling and hands-on technical discipline with zero operational handover gaps.",
    icon: Cpu,
  },
  {
    title: "Experienced Specialist Team",
    desc: "Directors, technical crew, event architects, and post-production specialists structured specifically per project.",
    icon: Award,
  },
  {
    title: "Scalable Solutions",
    desc: "Equally agile managing high-impact social video content, episodic series, or large-scale multi-camera arena events.",
    icon: Sliders,
  },
  {
    title: "International Experience",
    desc: "Proven track record delivering for international artists, regional networks, and global commercial accounts.",
    icon: Globe2,
  },
  {
    title: "Quality-Driven Obsession",
    desc: "Rigorous attention to framing, production design, acoustic clarity, DaVinci grading, and broadcast compliance.",
    icon: Sparkles,
  },
];

const INTERNATIONAL_PROJECTS = [
  {
    region: "United Arab Emirates",
    title: "Ahmed Bukhatir",
    scope: "Official Music Video Production",
    desc: "Directed and mounted official music video content for world-renowned international artist.",
  },
  {
    region: "Singapore & Malaysia",
    title: "Commercial TVCs & DVCs",
    scope: "Regional Broadcast Accounts",
    desc: "Executed commercial advertising campaigns adhering to strict international broadcast standards.",
  },
  {
    region: "United Kingdom",
    title: "Naeem Foundation",
    scope: "Humanitarian Documentary",
    desc: "Produced humanitarian awareness documentaries and multi-channel digital campaign suites.",
  },
  {
    region: "Pakistan // Regional",
    title: "Major Broadcasters & PTPL",
    scope: "Sports Anthems & Live Feeds",
    desc: "Multi-camera sports anthems and broadcast productions for BOL TV, News One, TV One, and PTPL.",
  },
];

function AboutTeamCard({ member, idx }: { member: TeamMember; idx: number }) {
  const [imgError, setImgError] = useState(false);
  const indexFormatted = String(idx + 1).padStart(2, "0");

  return (
    <div className="group relative h-[440px] sm:h-[480px] rounded-2xl bg-neutral-950 border border-neutral-850 overflow-hidden flex flex-col justify-between p-6 transition-all duration-500 hover:border-brand-red/60 hover:shadow-2xl hover:shadow-brand-dark-red/15">
      {/* 1. CINEMA TALENT PORTRAIT */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {member.image && !imgError ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-top brightness-[0.92] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-100"
            onError={() => setImgError(true)}
            priority={idx < 4}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center opacity-10">
            <User className="w-32 h-32 text-neutral-600" />
          </div>
        )}

        {/* Ambient Film Vignette & Contrast Control */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />
      </div>

      {/* 2. CAMERA VIEWFINDER RETICLES */}
      <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/30 pointer-events-none z-10 group-hover:border-brand-accent transition-colors duration-300" />
      <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-white/30 pointer-events-none z-10 group-hover:border-brand-accent transition-colors duration-300" />
      <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-white/30 pointer-events-none z-10 group-hover:border-brand-accent transition-colors duration-300" />
      <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/30 pointer-events-none z-10 group-hover:border-brand-accent transition-colors duration-300" />

      {/* 3. CARD TOP BAR */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 font-mono text-[9px] uppercase tracking-widest text-neutral-200 group-hover:text-brand-accent group-hover:border-brand-red/40 transition-colors">
          {member.roleTag}
        </span>
        <div className="flex items-center gap-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping" />
          <span className="font-mono text-[10px] text-neutral-300">
            #{indexFormatted}
          </span>
        </div>
      </div>

      {/* 4. CARD BOTTOM: SLATE CREDITS */}
      <div className="relative z-10 pt-6">
        <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
          <span className="text-[9px] font-mono text-brand-accent uppercase tracking-widest block mb-1 font-semibold">
            KEY PERSONNEL
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-black text-white tracking-tight leading-snug drop-shadow-md">
            {member.name}
          </h3>
          <p className="mt-1.5 text-neutral-300 text-xs font-mono leading-relaxed line-clamp-2 drop-shadow-sm font-light">
            {member.title}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-[10px] font-mono text-neutral-400">
          <span>ZU PRODUCTION</span>
          <span className="text-white group-hover:text-brand-accent uppercase tracking-wider transition-colors font-semibold">
            ROSTER
          </span>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="pt-24 pb-28 bg-black text-white select-none">
      
      {/* 1. EDITORIAL PRODUCTION SCREEN HERO */}
      <section className="relative border-b border-surface-border overflow-hidden">
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

        <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-20 pb-24 relative z-10">
          {/* Top Telemetry Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-neutral-800/80 font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span className="text-neutral-300 font-semibold">STUDIO DIRECTORY</span>
              <span className="text-neutral-700">|</span>
              <span>CINEMATIC ARCHITECTURE & TECHNICAL RIGOR</span>
            </div>
            <div className="flex items-center gap-4 text-neutral-400">
              <span>EST. KARACHI, PK</span>
              <span className="text-neutral-700">•</span>
              <span>INTERNATIONAL PIPELINES</span>
            </div>
          </div>

          {/* Split Two-Column Editorial Layout */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroContainerVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          >
            {/* Left Column: Primary Manifesto Headline */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div variants={heroItemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-surface/90 backdrop-blur-md">
                <Film className="w-3 h-3 text-brand-accent" />
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-300">
                  Studio Manifesto
                </span>
              </motion.div>

              <motion.h1
                variants={heroItemVariants}
                className="font-display text-4xl sm:text-6xl lg:text-6xl font-black uppercase tracking-tight leading-[1.05] text-white"
              >
                An Idea Is Only As Strong{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-brand-accent">
                  As Its Execution.
                </span>
              </motion.h1>

              <motion.p variants={heroItemVariants} className="text-neutral-200 text-base sm:text-lg font-light leading-relaxed max-w-2xl pt-2">
                ZU Production is a Pakistan-based creative production company delivering complete, end-to-end visual execution across film, commercial television, large-scale events, digital campaigns, and live broadcast pipelines.
              </motion.p>

              <motion.p variants={heroItemVariants} className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light max-w-2xl">
                We unite creative vision with engineering discipline to convert raw concepts into polished visual experiences. From concept development and logistics planning to physical production and master color grading, our capabilities adapt across diverse formats, scales, and environments.
              </motion.p>
            </div>

            {/* Right Column: Architectural Telemetry Slate */}
            <motion.div variants={heroItemVariants} className="lg:col-span-5 space-y-4 lg:pt-8">
              <div className="rounded-2xl bg-neutral-950/80 border border-neutral-800/80 p-6 backdrop-blur-xl relative overflow-hidden space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-900 font-mono text-[10px] uppercase text-neutral-400">
                  <span className="flex items-center gap-1.5 font-bold text-white">
                    <Disc3 className="w-3.5 h-3.5 text-brand-red animate-spin" />
                    CORE DISCIPLINES
                  </span>
                  <span>SYNCED PIPELINE</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between py-1.5 border-b border-neutral-900/60">
                    <span className="text-neutral-400">Cinematography & Lighting</span>
                    <span className="text-white font-medium">4K DCI RAW</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-neutral-900/60">
                    <span className="text-neutral-400">Multi-Camera Live Setup</span>
                    <span className="text-white font-medium">Up to 12 Feeds</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-neutral-900/60">
                    <span className="text-neutral-400">Color Grading Suite</span>
                    <span className="text-white font-medium">DaVinci Resolve</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-neutral-400">Broadcast Compliance</span>
                    <span className="text-white font-medium">EBU R128 Loudness</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-900 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                  <span>DEPLOYABLE TERRITORIES</span>
                  <span className="text-brand-accent font-semibold">PK • UAE • UK • SG • MY</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. CREATIVE PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-b border-surface-border">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-brand-accent block mb-2 font-semibold">
              Creative Philosophy
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
              Beyond The Equipment
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-light leading-relaxed">
            Cameras and lighting rigs are merely instruments. Narrative discipline and technical coordination create lasting cinematic power.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {PHILOSOPHY_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 rounded-2xl bg-surface/80 border border-surface-border flex flex-col justify-between hover:border-brand-red/60 transition-all duration-300 hover:shadow-xl hover:shadow-black"
            >
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-brand-accent block mb-3 font-semibold">
                  {pillar.tagline}
                </span>
                <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-neutral-400 text-xs leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-8 pt-3 border-t border-neutral-900 flex items-center justify-between font-mono text-[9px] text-neutral-600">
                <span>PILLAR FOCUS</span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY WORK WITH US */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-b border-surface-border">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-brand-accent block mb-2 font-semibold">
              Why ZU Production
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
              Built For Reliability & Scale
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-light leading-relaxed">
            Why leading broadcasters, corporate organizations, and international brands partner with our studio desk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className="group p-8 rounded-2xl bg-surface/60 border border-surface-border hover:border-brand-red/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-brand-accent w-fit mb-6 group-hover:border-brand-red/40 group-hover:bg-brand-dark-red/20 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white group-hover:text-neutral-100 transition-colors">
                    {adv.title}
                  </h3>
                  <p className="mt-3 text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                    {adv.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-900/80 flex items-center gap-2 font-mono text-[10px] text-neutral-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                  <span>PRODUCTION STANDARD</span>
                </div>
              </div>
            );
          })}

          {/* Turnkey Guarantee Tile */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-brand-dark-red/30 border border-brand-red/30 flex flex-col justify-between crimson-glow">
            <div>
              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-brand-accent w-fit mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl font-black uppercase text-white">
                Turnkey Technical Guarantee
              </h3>
              <p className="mt-3 text-neutral-300 text-xs sm:text-sm leading-relaxed font-light">
                From raw rushes to master delivery, every stage is executed to cinema DCI and EBU R128 broadcast standards.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="w-full inline-flex justify-center items-center gap-2 py-3.5 rounded-xl bg-brand-red hover:bg-brand-dark-red text-white text-xs font-mono uppercase tracking-widest font-bold transition-all"
              >
                <span>Commission Studio</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERNATIONAL EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-b border-surface-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 text-brand-accent font-mono text-[10px] uppercase tracking-widest">
              <Globe2 className="w-3.5 h-3.5" />
              <span>Cross-Border Deployments</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-tight">
              Local Heritage. <br /> Global Perspective.
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed font-light">
              ZU Production brings proven experience working across international requirements, including official music video direction for UAE artist Ahmed Bukhatir, commercial productions in Singapore and Malaysia, and documentary media for UK NGOs.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INTERNATIONAL_PROJECTS.map((proj) => (
              <div
                key={proj.title}
                className="p-6 rounded-2xl bg-surface/60 border border-surface-border hover:border-neutral-700 transition-colors"
              >
                <span className="text-brand-accent font-mono text-[10px] uppercase tracking-widest block mb-2 font-semibold">
                  {proj.region}
                </span>
                <h4 className="font-display text-lg font-bold text-white mb-1">
                  {proj.title}
                </h4>
                <span className="text-[11px] font-mono text-neutral-500 block mb-2">
                  {proj.scope}
                </span>
                <p className="text-neutral-400 text-xs leading-relaxed font-light">
                  {proj.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EXECUTIVE LEADERSHIP & TEAM ROSTER */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-brand-accent block mb-2 font-semibold">
              The Collective
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
              Executive Leadership & Team
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-light leading-relaxed">
            Multi-disciplinary directors, producers, camera operators, art directors, and post-production specialists powering every production run.
          </p>
        </div>

        {/* Talent Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member, idx) => (
            <AboutTeamCard key={member.name} member={member} idx={idx} />
          ))}
        </div>

        {/* Bottom Slate CTA */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-neutral-950 border border-surface-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold uppercase text-white">
              Ready to mount your next production?
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm font-light mt-1">
              Connect with our production desk to review crew availability and scheduling.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-red hover:bg-brand-dark-red text-white text-xs font-mono uppercase tracking-widest font-bold crimson-glow transition-all shrink-0"
          >
            <span>Initiate Project Brief</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}