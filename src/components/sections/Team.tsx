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
      transition={{ duration: 0.45, delay: idx * 0.06 }}
      className="group relative h-[380px] sm:h-[420px] rounded-2xl bg-neutral-950 border border-surface-border overflow-hidden flex flex-col justify-between p-6 hover:border-brand-red/60 transition-all duration-500 hover:shadow-2xl hover:shadow-black"
    >
      {/* 1. BACKGROUND PORTRAIT IMAGE WITH FILM OVERLAYS */}
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
          /* Fallback Silhouette Pattern */
          <div className="w-full h-full flex items-center justify-center opacity-10">
            <User className="w-32 h-32 text-neutral-600" />
          </div>
        )}

        {/* Ambient Dark Gradient Vignette for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette opacity-90 pointer-events-none" />
      </div>

      {/* 2. CAMERA VIEWFINDER RETICLES (CORNERS) */}
      <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-neutral-700 pointer-events-none z-10 opacity-40 group-hover:opacity-100 group-hover:border-brand-accent transition-all" />
      <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-neutral-700 pointer-events-none z-10 opacity-40 group-hover:opacity-100 group-hover:border-brand-accent transition-all" />
      <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-neutral-700 pointer-events-none z-10 opacity-40 group-hover:opacity-100 group-hover:border-brand-accent transition-all" />
      <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-neutral-700 pointer-events-none z-10 opacity-40 group-hover:opacity-100 group-hover:border-brand-accent transition-all" />

      {/* 3. CARD TOP BAR: CALL INDEX & DEPARTMENT */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-neutral-800 font-mono text-[9px] uppercase tracking-widest text-neutral-300 group-hover:text-brand-accent group-hover:border-brand-red/40 transition-colors">
          {dept}
        </span>
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-brand-red group-hover:animate-ping transition-colors" />
          <span className="font-mono text-[10px] text-neutral-500 group-hover:text-neutral-300 transition-colors">
            #{indexFormatted}
          </span>
        </div>
      </div>

      {/* 4. CARD BOTTOM: CREDITS & METADATA */}
      <div className="relative z-10">
        <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
          <span className="text-[9px] font-mono text-brand-accent uppercase tracking-widest block mb-1 font-semibold">
            CREW CREDITED
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
            {member.name}
          </h3>
          <p className="mt-1.5 text-neutral-300 text-xs font-mono leading-relaxed line-clamp-2">
            {member.title}
          </p>
        </div>

        {/* Studio Strip Divider */}
        <div className="mt-5 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[10px] font-mono text-neutral-500">
          <span>ZU PRODUCTION ROSTER</span>
          <span className="text-neutral-400 group-hover:text-white uppercase tracking-wider transition-colors">
            ACTIVE
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-28 border-t border-surface-border bg-black relative overflow-hidden select-none">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-brand-dark-red/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-surface mb-3">
              <Film className="w-3 h-3 text-brand-accent" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                05 — Production Roster
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