// src/components/about/AboutInternational.tsx
"use client";

import Image from "next/image";

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

export default function AboutInternational() {
  const globeIconSrc = "/images/icons/about/globe.svg"; // Update path

  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-24 border-b border-surface-border select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-5 space-y-3 sm:space-y-5">
          <div className="inline-flex items-center gap-2 text-brand-accent font-mono text-[10px] uppercase tracking-widest">
            <div className="relative w-3.5 h-3.5 shrink-0">
              <Image
                src={globeIconSrc}
                alt="Globe Icon"
                fill
                className="object-contain"
              />
            </div>
            <span>Cross-Border Deployments</span>
          </div>
          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-tight">
            Local Heritage. <br className="hidden sm:inline" /> Global Perspective.
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
            ZU Production brings proven experience working across international requirements, including official music video direction for UAE artist Ahmed Bukhatir, commercial productions in Singapore and Malaysia, and documentary media for UK NGOs.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          {INTERNATIONAL_PROJECTS.map((proj) => (
            <div
              key={proj.title}
              className="p-5 sm:p-6 rounded-2xl bg-surface/60 border border-surface-border hover:border-neutral-700 transition-colors"
            >
              <span className="text-brand-accent font-mono text-[10px] uppercase tracking-widest block mb-1.5 sm:mb-2 font-semibold">
                {proj.region}
              </span>
              <h4 className="font-display text-base sm:text-lg font-bold text-white mb-1">
                {proj.title}
              </h4>
              <span className="text-[10px] sm:text-[11px] font-mono text-neutral-500 block mb-2 truncate">
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
  );
}