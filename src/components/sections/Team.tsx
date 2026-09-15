"use client";

import { motion } from "framer-motion";
import { TEAM, CLIENT_BADGES } from "@/data/content";
import { Users, Film, Award } from "lucide-react";

// Categorize roles for crew tags
const getDepartmentTag = (title: string) => {
  const lower = title.toLowerCase();
  if (lower.includes("director") && !lower.includes("art")) return "DIRECTION";
  if (lower.includes("producer") || lower.includes("production manager")) return "PRODUCTION";
  if (lower.includes("art") || lower.includes("designer")) return "ART DEPT";
  if (lower.includes("post")) return "POST-PROD";
  if (lower.includes("digital") || lower.includes("marketing")) return "DIGITAL";
  return "OPERATIONS";
};

export default function Team() {
  return (
    <section id="team" className="py-28 border-t border-surface-border bg-black relative overflow-hidden">
      {/* 1. INFINITE CLIENT & BROADCAST TICKER */}
      <div className="mb-24 overflow-hidden border-y border-neutral-900 bg-neutral-950/60 py-6">
        <div className="max-w-7xl mx-auto px-6 mb-4 flex items-center gap-2">
          <Award className="w-3.5 h-3.5 text-brand-accent" />
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500">
            Trusted By Broadcasters & Global Institutions
          </span>
        </div>

        {/* Continuous Animated Marquee */}
        <div className="relative flex overflow-x-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <motion.div
            className="flex shrink-0 items-center gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...CLIENT_BADGES, ...CLIENT_BADGES, ...CLIENT_BADGES, ...CLIENT_BADGES].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-12">
                <span className="font-display text-sm sm:text-base font-extrabold uppercase tracking-wider text-neutral-500 hover:text-white transition-colors">
                  {badge}
                </span>
                <span className="h-1 w-1 rounded-full bg-brand-red/60" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 2. MAIN CREW / TEAM LOCKUP */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-surface mb-3">
              <Film className="w-3 h-3 text-brand-accent" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                15 — Production Roster
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight">
              The People Behind The Frame
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-light leading-relaxed">
            Multi-disciplinary directors, camera operators, art directors, and post-production specialists powering every production run.
          </p>
        </div>

        {/* 3. Team Credit Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TEAM.map((member, idx) => {
            const dept = getDepartmentTag(member.title);
            const indexFormatted = String(idx + 1).padStart(2, "0");

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative rounded-xl bg-surface/80 border border-surface-border p-6 flex flex-col justify-between hover:border-brand-red/60 transition-all duration-300 hover:shadow-xl hover:shadow-brand-darkRed/10 overflow-hidden"
              >
                {/* Film Viewfinder Corner Accent on Hover */}
                <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-brand-accent" />
                </div>

                <div>
                  {/* Top Bar: Dept Tag & Call Index */}
                  <div className="flex items-center justify-between mb-8 pb-3 border-b border-neutral-900">
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 font-mono text-[9px] uppercase tracking-widest text-neutral-400 group-hover:text-brand-accent group-hover:border-brand-red/30 transition-colors">
                      {dept}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-600 group-hover:text-neutral-400 transition-colors">
                      #{indexFormatted}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-neutral-100 transition-colors">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="mt-2 text-neutral-400 text-xs font-mono leading-relaxed">
                    {member.title}
                  </p>
                </div>

                {/* Bottom Callout Status */}
                <div className="mt-6 pt-3 border-t border-neutral-900/80 flex items-center justify-between text-[10px] font-mono text-neutral-600 group-hover:text-neutral-400 transition-colors">
                  <span>ZU STUDIO CREW</span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-brand-red transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}