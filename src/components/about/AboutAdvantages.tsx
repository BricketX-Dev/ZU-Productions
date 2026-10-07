// src/components/about/AboutAdvantages.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Advantage {
  title: string;
  desc: string;
  iconSrc: string;
}

const ADVANTAGES: Advantage[] = [
  {
    title: "Integrated Production",
    desc: "Creative, production, event, digital, and post-production capabilities working in continuous synchronization.",
    iconSrc: "/images/icons/about/integrated.png",
  },
  {
    title: "End-to-End Execution",
    desc: "From concept and pre-production through physical filming, event staging, and master multi-format delivery.",
    iconSrc: "/images/icons/about/execution-flow.png",
  },
  {
    title: "Creative + Technical",
    desc: "A combination of creative storytelling and hands-on technical discipline with zero operational handover gaps.",
    iconSrc: "/images/icons/about/technical.png",
  },
  {
    title: "Experienced Specialist Team",
    desc: "Directors, technical crew, event architects, and post-production specialists structured specifically per project.",
    iconSrc: "/images/icons/about/team-specialists.png",
  },
  {
    title: "Scalable Solutions",
    desc: "Equally agile managing high-impact social video content, episodic series, or large-scale multi-camera arena events.",
    iconSrc: "/images/icons/about/scalable.png",
  },
  {
    title: "International Experience",
    desc: "Proven track record delivering for international artists, regional networks, and global commercial accounts.",
    iconSrc: "/images/icons/about/international.png",
  },
  {
    title: "Quality-Driven Obsession",
    desc: "Rigorous attention to framing, production design, acoustic clarity, DaVinci grading, and broadcast compliance.",
    iconSrc: "/images/icons/about/quality.png",
  },
];

export default function AboutAdvantages() {
  const guaranteeIconSrc = "/images/icons/about/guarantee.png";

  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-24 border-b border-surface-border select-none">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-16 gap-3 sm:gap-6">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-brand-accent block mb-1.5 sm:mb-2 font-semibold">
            Why ZU Production
          </span>
          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
            Built For Reliability & Scale
          </h2>
        </div>
        <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-light leading-relaxed">
          Why leading broadcasters, corporate organizations, and international brands partner with our studio desk.
        </p>
      </div>

      {/* Swipeable snap reel with peek preview on mobile, multi-column grid on md+ */}
      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-pl-5 -mx-5 px-5 md:mx-0 md:px-0 pb-4 md:pb-0 scrollbar-none">
        {ADVANTAGES.map((adv) => (
          <div
            key={adv.title}
            className="w-[82vw] xs:w-[76vw] sm:w-[60vw] md:w-auto shrink-0 md:shrink snap-start group p-6 sm:p-8 rounded-2xl bg-surface/60 border border-surface-border hover:border-brand-red/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative w-11 h-11 p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 mb-4 sm:mb-6 group-hover:border-brand-red/40 group-hover:bg-brand-dark-red/20 transition-all">
                <Image
                  src={adv.iconSrc}
                  alt={adv.title}
                  fill
                  sizes="44px"
                  className="object-contain p-2"
                />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-white group-hover:text-neutral-100 transition-colors">
                {adv.title}
              </h3>
              <p className="mt-2.5 sm:mt-3 text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                {adv.desc}
              </p>
            </div>

            <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-neutral-900/80 flex items-center gap-2 font-mono text-[10px] text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
              <span>PRODUCTION STANDARD</span>
            </div>
          </div>
        ))}

        {/* Turnkey Guarantee Tile */}
        <div className="w-[82vw] xs:w-[76vw] sm:w-[60vw] md:w-auto shrink-0 md:shrink snap-start p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-brand-dark-red/30 border border-brand-red/30 flex flex-col justify-between crimson-glow">
          <div>
            <div className="relative w-11 h-11 p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 mb-4 sm:mb-6">
              <Image
                src={guaranteeIconSrc}
                alt="Guarantee Icon"
                fill
                sizes="44px"
                className="object-contain p-2"
              />
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-black uppercase text-white">
              Turnkey Technical Guarantee
            </h3>
            <p className="mt-2.5 sm:mt-3 text-neutral-300 text-xs sm:text-sm leading-relaxed font-light">
              From raw rushes to master delivery, every stage is executed to cinema DCI and EBU R128 broadcast standards.
            </p>
          </div>

          <div className="mt-6 sm:mt-8">
            <Link
              href="/contact"
              className="w-full inline-flex justify-center items-center gap-2 py-3 sm:py-3.5 rounded-xl bg-brand-red hover:bg-brand-dark-red text-white text-xs font-mono uppercase tracking-widest font-bold transition-all"
            >
              <span>Commission Studio</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}