import { Metadata } from "next";
import Portfolio from "@/components/sections/Portfolio";
import { Film, Clapperboard, Globe2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Production Portfolio & Showreel | ZU PRODUCTION",
  description:
    "Explore our complete production archive across music videos, commercial TVCs, convocations, documentaries, and sports campaigns.",
};

export default function WorkPage() {
  return (
    <div className="pt-24 pb-20 bg-black min-h-screen text-white">
      {/* Editorial Header Hub */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-b border-surface-border">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-surface">
            <Film className="w-3 h-3 text-brand-accent" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
              Master Archive // 2026 Index
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[1.05]">
            Stories Engineered For The Screen.
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
            Browse our curated index of international commercial work, live convocations, and brand films. Every production adheres to strict technical broadcast delivery specs and high-contrast cinematic direction.
          </p>
        </div>

        {/* Global Distribution Metadata Badges */}
        <div className="mt-8 pt-6 border-t border-neutral-900 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
          <div className="p-3 rounded-lg bg-surface/50 border border-neutral-900">
            <span className="text-[10px] text-neutral-500 uppercase block">Broadcast Spec</span>
            <span className="text-neutral-200 font-semibold">DCI 4K RAW / ProRes</span>
          </div>
          <div className="p-3 rounded-lg bg-surface/50 border border-neutral-900">
            <span className="text-[10px] text-neutral-500 uppercase block">Global Deliveries</span>
            <span className="text-neutral-200 font-semibold">PK, UAE, UK, MY, SG</span>
          </div>
          <div className="p-3 rounded-lg bg-surface/50 border border-neutral-900">
            <span className="text-[10px] text-neutral-500 uppercase block">Multi-Cam Packages</span>
            <span className="text-neutral-200 font-semibold">Up to 12 Cameras</span>
          </div>
          <div className="p-3 rounded-lg bg-surface/50 border border-neutral-900">
            <span className="text-[10px] text-neutral-500 uppercase block">Finishing Suite</span>
            <span className="text-neutral-200 font-semibold">DaVinci Resolve Studio</span>
          </div>
        </div>
      </section>

      {/* Main Dynamic Portfolio Feed */}
      <Portfolio isPage={true} />
    </div>
  );
}