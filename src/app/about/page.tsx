// src/app/about/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TEAM, TeamMember } from "@/data/content";
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
  ShieldCheck
} from "lucide-react";

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

function AboutTeamCard({ member }: { member: TeamMember }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group relative h-[360px] sm:h-[400px] rounded-2xl bg-neutral-950 border border-surface-border overflow-hidden flex flex-col justify-between p-6 hover:border-brand-red/60 transition-all duration-500 hover:shadow-2xl hover:shadow-black">
      {/* Background Member Portrait */}
      <div className="absolute inset-0 z-0">
        {member.image && !imgError ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-top grayscale contrast-125 opacity-35 group-hover:opacity-85 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center opacity-10">
            <User className="w-32 h-32 text-neutral-600" />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette opacity-90 pointer-events-none" />
      </div>

      {/* Reticles */}
      <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-neutral-700 pointer-events-none z-10 opacity-40 group-hover:opacity-100 group-hover:border-brand-accent transition-all" />
      <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-neutral-700 pointer-events-none z-10 opacity-40 group-hover:opacity-100 group-hover:border-brand-accent transition-all" />
      <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-neutral-700 pointer-events-none z-10 opacity-40 group-hover:opacity-100 group-hover:border-brand-accent transition-all" />
      <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-neutral-700 pointer-events-none z-10 opacity-40 group-hover:opacity-100 group-hover:border-brand-accent transition-all" />

      {/* Top Department Tag */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-neutral-800 font-mono text-[9px] uppercase tracking-widest text-neutral-300 group-hover:text-brand-accent group-hover:border-brand-red/40 transition-colors">
          {member.roleTag}
        </span>
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-brand-red group-hover:animate-ping transition-colors" />
      </div>

      {/* Bottom Bio */}
      <div className="relative z-10 transform transition-transform duration-300 group-hover:-translate-y-1">
        <h3 className="font-display text-xl font-black text-white tracking-tight leading-snug">
          {member.name}
        </h3>
        <p className="mt-1.5 text-neutral-300 text-xs font-mono leading-relaxed line-clamp-2">
          {member.title}
        </p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="pt-24 pb-28 bg-black text-white select-none">
      {/* 1. HERO / MANIFESTO */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-surface-border relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-dark-red/15 blur-[160px] pointer-events-none rounded-full" />

        <div className="max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-surface mb-6">
            <Film className="w-3 h-3 text-brand-accent" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
              Studio Manifesto
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[1.08]">
            An Idea Is Only As Strong As Its Execution.
          </h1>

          <p className="mt-8 text-neutral-300 text-lg sm:text-xl font-light leading-relaxed">
            ZU Production is a Pakistan-based creative production company delivering complete, end-to-end visual execution across film, commercial television, large-scale events, digital campaigns, and live broadcast pipelines.
          </p>

          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
            We unite creative vision with engineering discipline to convert raw concepts into polished visual experiences. From concept development and logistics planning to physical production and master color grading, our capabilities adapt across diverse formats, scales, and environments.
          </p>
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

      {/* 3. WHY WORK WITH US (INTEGRATED ADVANTAGES) */}
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

          {/* Quick RFP Link Tile */}
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
                className="w-full inline-flex justify-center items-center gap-2 py-3 rounded-xl bg-brand-red hover:bg-brand-dark-red text-white text-xs font-mono uppercase tracking-widest font-bold transition-all"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member) => (
            <AboutTeamCard key={member.name} member={member} />
          ))}
        </div>

        {/* Bottom CTA */}
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-red hover:bg-brand-dark-red text-white text-xs font-mono uppercase tracking-widest font-bold crimson-glow transition-all shrink-0"
          >
            <span>Initiate Project Brief</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}