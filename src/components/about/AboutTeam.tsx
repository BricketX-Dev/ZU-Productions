// src/components/about/AboutTeam.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, User } from "lucide-react";
import { TEAM, type TeamMember } from "@/data/content";

function AboutTeamCard({ member, idx }: { member: TeamMember; idx: number }) {
  const [imgError, setImgError] = useState(false);
  const indexFormatted = String(idx + 1).padStart(2, "0");

  return (
    <div className="group relative h-[420px] xs:h-[450px] sm:h-[480px] rounded-2xl bg-neutral-950 border border-neutral-850 overflow-hidden flex flex-col justify-between p-5 sm:p-6 transition-all duration-500 hover:border-brand-red/60 hover:shadow-2xl hover:shadow-brand-dark-red/15">
      {/* 1. CINEMA TALENT PORTRAIT */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {member.image && !imgError ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 25vw"
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
          <h3 className="font-display text-lg xs:text-xl sm:text-2xl font-black text-white tracking-tight leading-snug drop-shadow-md">
            {member.name}
          </h3>
          <p className="mt-1 text-neutral-300 text-[11px] sm:text-xs font-mono leading-relaxed line-clamp-2 drop-shadow-sm font-light">
            {member.title}
          </p>
        </div>

        <div className="mt-3.5 sm:mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-[10px] font-mono text-neutral-400">
          <span>ZU PRODUCTION</span>
          <span className="text-white group-hover:text-brand-accent uppercase tracking-wider transition-colors font-semibold">
            ROSTER
          </span>
        </div>
      </div>
    </div>
  );
}

export default function AboutTeam() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-24 select-none">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-16 gap-3 sm:gap-6">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-brand-accent block mb-1.5 sm:mb-2 font-semibold">
            The Collective
          </span>
          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
            Executive Leadership & Team
          </h2>
        </div>
        <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-light leading-relaxed">
          Multi-disciplinary directors, producers, camera operators, art directors, and post-production specialists powering every production run.
        </p>
      </div>

      {/* Swipeable snap reel with peek preview on mobile, responsive multi-column grid on sm+ */}
      <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scroll-pl-5 -mx-5 px-5 sm:mx-0 sm:px-0 pb-4 sm:pb-0 scrollbar-none">
        {TEAM.map((member, idx) => (
          <div
            key={member.name}
            className="w-[82vw] xs:w-[76vw] sm:w-auto shrink-0 sm:shrink snap-start h-auto"
          >
            <AboutTeamCard member={member} idx={idx} />
          </div>
        ))}
      </div>

      {/* Bottom Slate CTA */}
      <div className="mt-12 sm:mt-20 p-6 sm:p-12 rounded-2xl sm:rounded-3xl bg-neutral-950 border border-surface-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white leading-tight">
            Ready to mount your next production?
          </h3>
          <p className="text-neutral-400 text-xs sm:text-sm font-light mt-1.5 sm:mt-1">
            Connect with our production desk to review crew availability and scheduling.
          </p>
        </div>
        <Link
          href="/contact"
          className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl sm:rounded-full bg-brand-red hover:bg-brand-dark-red text-white text-xs font-mono uppercase tracking-widest font-bold crimson-glow transition-all shrink-0"
        >
          <span>Initiate Project Brief</span>
          <ArrowUpRight className="w-4 h-4 shrink-0" />
        </Link>
      </div>
    </section>
  );
}