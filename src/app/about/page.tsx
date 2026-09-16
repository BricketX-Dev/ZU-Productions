// src/app/about/page.tsx
import { Metadata } from "next";
import { TEAM } from "@/data/content";
import { Film, Award, Globe2, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | ZU PRODUCTION",
  description:
    "Learn about ZU Production's creative philosophy, workflow discipline, executive team, and production infrastructure.",
};

const PHILOSOPHY_PILLARS = [
  {
    title: "Idea",
    desc: "A clear, focused, and meaningful concept before equipment is unpacked.",
  },
  {
    title: "Story",
    desc: "A disciplined narrative that anchors human connection and brand recall.",
  },
  {
    title: "Visuals",
    desc: "Intentional framing, lighting palettes, and production design.",
  },
  {
    title: "Execution",
    desc: "Technical rigor, scheduling discipline, and uncompromising on-set management.",
  },
  {
    title: "Impact",
    desc: "Tangible communication results that perform across screens and stages.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-28 bg-black text-white">
      {/* 1. HERO / MANIFESTO */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-b border-surface-border">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-surface mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
              01 - Who We Are
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[1.08]">
            An Idea Is Only As Strong As Its Execution.
          </h1>

          <p className="mt-8 text-neutral-300 text-lg sm:text-xl font-light leading-relaxed">
            ZU Production is a Pakistan-based creative production house delivering complete, end-to-end solutions across film, commercials, television, events, digital campaigns, and broadcast installations.
          </p>

          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            We unite creative vision with engineering discipline to convert raw concepts into polished visual experiences. From concept development and logistics planning to physical production and master color grading, our capabilities adapt to varied scales, formats, and environments.
          </p>
        </div>
      </section>

      {/* 2. CREATIVE PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-b border-surface-border">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-bold">
              13 - Creative Philosophy
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase mt-2">
              Beyond The Equipment
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md">
            Cameras and lighting are merely tools. Narrative discipline and technical coordination create lasting cinematic power.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-6 rounded-xl bg-surface/80 border border-surface-border flex flex-col justify-between hover:border-brand-red/60 transition-colors"
            >
              <div>
                <span className="font-mono text-2xl font-bold text-brand-red block mb-3">
                  0{idx + 1}
                </span>
                <h3 className="font-display text-xl font-bold mb-2">{pillar.title}</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTERNATIONAL FOOTPRINT */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-b border-surface-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-bold">
              08 - International Experience
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase leading-tight">
              Local Heritage. <br /> Global Perspective.
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              ZU Production brings proven experience working across cross-border requirements, including official music video direction for UAE artist Ahmed Bukhatir, commercial productions in Singapore and Malaysia, and documentary media for UK NGOs.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-surface/60 border border-surface-border">
              <span className="text-brand-accent font-mono text-xs uppercase tracking-widest block mb-1">
                United Arab Emirates
              </span>
              <h4 className="font-display text-lg font-bold text-white mb-2">Ahmed Bukhatir</h4>
              <p className="text-neutral-400 text-xs">
                Directed and produced official music video content for world-renowned international artist.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface/60 border border-surface-border">
              <span className="text-brand-accent font-mono text-xs uppercase tracking-widest block mb-1">
                Singapore & Malaysia
              </span>
              <h4 className="font-display text-lg font-bold text-white mb-2">Commercial TVCs & DVCs</h4>
              <p className="text-neutral-400 text-xs">
                Executed commercial productions adhering to strict international broadcast standards.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface/60 border border-surface-border">
              <span className="text-brand-accent font-mono text-xs uppercase tracking-widest block mb-1">
                United Kingdom
              </span>
              <h4 className="font-display text-lg font-bold text-white mb-2">Naeem Foundation</h4>
              <p className="text-neutral-400 text-xs">
                Produced humanitarian awareness documentaries and cross-channel digital media suites.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface/60 border border-surface-border">
              <span className="text-brand-accent font-mono text-xs uppercase tracking-widest block mb-1">
                Pakistan
              </span>
              <h4 className="font-display text-lg font-bold text-white mb-2">Major Broadcasters & PTPL</h4>
              <p className="text-neutral-400 text-xs">
                Multi-camera sports anthems and broadcast productions for BOL, News One, and TV One.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP ROSTER */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-bold">
            15 - The Collective
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase mt-2">
            Executive Leadership & Team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-surface/80 border border-surface-border flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-3">
                  LEAD 0{idx + 1}
                </span>
                <h3 className="font-display text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-neutral-400 text-xs font-mono">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}