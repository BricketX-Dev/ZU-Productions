// src/components/sections/Team.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TEAM, TeamMember } from "@/data/content";
import { Film, User } from "lucide-react";

interface TeamCardProps {
  member: TeamMember;
  idx: number;
}

function TeamCard({ member, idx }: TeamCardProps) {
  const [imgError, setImgError] = useState(false);
  const dept = member.roleTag;
  const indexFormatted = String(idx + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: idx * 0.05 }}
      className="group relative h-[440px] sm:h-[480px] rounded-2xl bg-neutral-950 border border-neutral-800/80 overflow-hidden flex flex-col justify-between p-6 transition-all duration-500 hover:border-brand-red/60 hover:shadow-2xl hover:shadow-brand-dark-red/10"
    >
      {/* 1. TALENT PORTRAIT */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {member.image && !imgError ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-top brightness-[0.9] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-100"
            onError={() => setImgError(true)}
            priority={idx < 4}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center opacity-10">
            <User className="w-32 h-32 text-neutral-600" />
          </div>
        )}

        {/* Ambient Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />
      </div>

      {/* 2. CAMERA VIEWFINDER RETICLES */}
      <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/30 pointer-events-none z-10 group-hover:border-brand-accent transition-colors duration-300" />
      <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-white/30 pointer-events-none z-10 group-hover:border-brand-accent transition-colors duration-300" />
      <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-white/30 pointer-events-none z-10 group-hover:border-brand-accent transition-colors duration-300" />
      <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/30 pointer-events-none z-10 group-hover:border-brand-accent transition-colors duration-300" />

      {/* 3. CARD TOP BAR: CALL INDEX & DEPARTMENT */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 font-mono text-[9px] uppercase tracking-widest text-neutral-200 group-hover:text-brand-accent group-hover:border-brand-red/40 transition-colors">
          {dept}
        </span>
        <div className="flex items-center gap-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping" />
          <span className="font-mono text-[10px] text-neutral-300">
            #{indexFormatted}
          </span>
        </div>
      </div>

      {/* 4. CARD BOTTOM: EXACT CREDITS */}
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

        {/* Slate Bottom Border */}
        <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-[10px] font-mono text-neutral-400">
          <span>ZU PRODUCTION</span>
          <span className="text-white group-hover:text-brand-accent uppercase tracking-wider transition-colors font-semibold">
            ROSTER
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-28 border-t border-surface-border bg-black relative overflow-hidden select-none">
      {/* Background Studio Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-brand-dark-red/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-surface mb-3">
              <Film className="w-3 h-3 text-brand-accent" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                Production Roster
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              The People Behind The Frame
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-light leading-relaxed">
            Multi-disciplinary directors, camera operators, art directors, and post-production specialists powering every production run.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member, idx) => (
            <TeamCard key={member.name} member={member} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}