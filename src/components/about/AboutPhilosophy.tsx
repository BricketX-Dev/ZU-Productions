// src/components/about/AboutPhilosophy.tsx
"use client";

import Image from "next/image";

interface Pillar {
  title: string;
  tagline: string;
  desc: string;
  iconSrc?: string;
}

const PHILOSOPHY_PILLARS: Pillar[] = [
  {
    title: "Idea",
    tagline: "Concept & Intent",
    desc: "A clear, focused, and meaningful concept established before equipment is unpacked.",
    iconSrc: "/images/icons/about/idea.png",
  },
  {
    title: "Story",
    tagline: "Narrative Core",
    desc: "A disciplined narrative that anchors genuine human connection and long-term brand recall.",
    iconSrc: "/images/icons/about/story.png",
  },
  {
    title: "Visuals",
    tagline: "Cinematic Aesthetic",
    desc: "Intentional framing, curated lighting palettes, and deliberate production design.",
    iconSrc: "/images/icons/about/visuals.png",
  },
  {
    title: "Execution",
    tagline: "Technical Rigor",
    desc: "Broadcast-grade standards, scheduling discipline, and uncompromising on-set management.",
    iconSrc: "/images/icons/about/execution.png",
  },
  {
    title: "Impact",
    tagline: "Strategic Result",
    desc: "Tangible communication outcomes that perform across cinema screens, broadcast, and digital stages.",
    iconSrc: "/images/icons/about/impact.png",
  },
];

export default function AboutPhilosophy() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-24 border-b border-surface-border select-none">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-16 gap-3 sm:gap-6">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-brand-accent block mb-1.5 sm:mb-2 font-semibold">
            Creative Philosophy
          </span>
          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
            Beyond The Equipment
          </h2>
        </div>
        <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-light leading-relaxed">
          Cameras and lighting rigs are merely instruments. Narrative discipline and technical coordination create lasting cinematic power.
        </p>
      </div>

      {/* Swipeable snap reel with peek preview on mobile, 5-col grid on lg+ */}
      <div className="flex lg:grid lg:grid-cols-5 gap-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scroll-pl-5 -mx-5 px-5 lg:mx-0 lg:px-0 pb-4 lg:pb-0 scrollbar-none">
        {PHILOSOPHY_PILLARS.map((pillar) => (
          <div
            key={pillar.title}
            className="w-[82vw] xs:w-[76vw] sm:w-[50vw] lg:w-auto shrink-0 lg:shrink snap-start p-5 sm:p-6 rounded-2xl bg-surface/80 border border-surface-border flex flex-col justify-between hover:border-brand-red/60 transition-all duration-300 hover:shadow-xl hover:shadow-black"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[9px] font-mono uppercase tracking-widest text-brand-accent font-semibold">
                  {pillar.tagline}
                </span>
                {pillar.iconSrc && (
                  <div className="relative w-6 h-6 shrink-0 p-0.5">
                    <Image
                      src={pillar.iconSrc}
                      alt={`${pillar.title} icon`}
                      fill
                      sizes="24px"
                      className="object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                )}
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed font-light">
                {pillar.desc}
              </p>
            </div>

            <div className="mt-6 sm:mt-8 pt-3 border-t border-neutral-900 flex items-center justify-between font-mono text-[9px] text-neutral-600">
              <span>PILLAR FOCUS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}