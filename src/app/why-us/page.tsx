// src/app/why-us/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { 
  Check, 
  ArrowUpRight, 
  Layers, 
  ShieldCheck, 
  Globe2, 
  Sparkles, 
  Sliders, 
  Cpu, 
  Award,
  Zap,
  Film
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Work With Us | Creative Philosophy & Production Rigor | ZU PRODUCTION",
  description:
    "An idea is only as strong as its execution. Discover how ZU Production unifies storytelling, technical discipline, multi-camera broadcasting, and end-to-end delivery.",
};

const PHILOSOPHY_PILLARS = [
  {
    tag: "01 // CONCEPTION",
    title: "Idea",
    desc: "A clear, distinct, and meaningful concept rooted in strategic intent before a single frame is planned.",
  },
  {
    tag: "02 // CONNECTION",
    title: "Story",
    desc: "A narrative structure calibrated to evoke genuine emotional and commercial resonance with target audiences.",
  },
  {
    tag: "03 // AESTHETIC",
    title: "Visuals",
    desc: "Uncompromising cinematography, controlled lighting ratios, and deliberate production design that elevate perceived brand value.",
  },
  {
    tag: "04 // DISCIPLINE",
    title: "Execution",
    desc: "Broadcast-grade camera management, zero-failure live logistics, and rigorous DaVinci color and sound mastering.",
  },
  {
    tag: "05 // OUTCOME",
    title: "Impact",
    desc: "Master media assets engineered to fulfill measurable communication goals, convert viewers, and stand the test of time.",
  },
];

const ADVANTAGES = [
  {
    id: "01",
    title: "Integrated Production Pipeline",
    desc: "Creative writing, physical production, live staging, digital content suites, and post-production housed under one synchronized operational roof.",
    icon: Layers,
  },
  {
    id: "02",
    title: "Turnkey End-to-End Execution",
    desc: "From initial discovery treatments and location logistics to multi-camera production and finalized platform deliverables, we eliminate third-party handover gaps.",
    icon: Check,
  },
  {
    id: "03",
    title: "Creative Vision + Technical Discipline",
    desc: "Bold artistic storytelling backed by rigorous technical engineering — multi-camera feeds, studio pedestals, fiber-optic transmission, and color mastery.",
    icon: Cpu,
  },
  {
    id: "04",
    title: "Multi-Disciplinary Specialist Crew",
    desc: "Experienced directors, gaffers, live switchers, art directors, and post engineers assigned dynamically based on each assignment's specific technical scope.",
    icon: Award,
  },
  {
    id: "05",
    title: "Elastic Scalability",
    desc: "Equally agile deploying a 2-person guerrilla documentary crew across rough terrain or orchestrating a 6-camera live convocation broadcast for 10,000 attendees.",
    icon: Sliders,
  },
  {
    id: "06",
    title: "Proven International Standards",
    desc: "Field-tested experience delivering for high-profile accounts across the UAE, Singapore, Malaysia, and the UK with multi-lingual, cross-border compliance.",
    icon: Globe2,
  },
  {
    id: "07",
    title: "Quality-Driven Obsession",
    desc: "Relentless attention to color gamut control, set world-building, acoustic dynamic range, and pixel-level finish across all exhibition formats.",
    icon: Sparkles,
  },
];

const COMPARISON_POINTS = [
  {
    metric: "Creative & Narrative Ownership",
    freelancers: "Fragmented (Task-only)",
    agencies: "High-level (Subcontracts shoot)",
    zuProduction: "End-to-End Direct Production Team",
  },
  {
    metric: "Physical Execution & Camera Gear",
    freelancers: "Rented / Limited packages",
    agencies: "Heavy marked-up outsourced crew",
    zuProduction: "In-House Camera, Lighting & Sound Rigor",
  },
  {
    metric: "Multi-Camera & Live Capabilities",
    freelancers: "Rarely equipped for switching",
    agencies: "Requires separate broadcast vendor",
    zuProduction: "Native Multi-Cam, IMAG & Live Switchers",
  },
  {
    metric: "Post-Production & Grading Quality",
    freelancers: "Template edits / basic LUTs",
    agencies: "Slow iterative review cycles",
    zuProduction: "DaVinci Color Studio & Mastering Suites",
  },
  {
    metric: "International Delivery Compliance",
    freelancers: "Variable",
    agencies: "High Cost Overheads",
    zuProduction: "Standardized EBU R128 / DCI Deliverables",
  },
];

export default function WhyWorkWithUsPage() {
  return (
    <div className="pt-24 pb-28 bg-black text-white min-h-screen select-none">
      {/* 1. HERO SECTION */}
      <section className="relative border-b border-surface-border py-20 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-brand-dark-red/15 blur-[160px] pointer-events-none rounded-full" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-neutral-800 bg-surface/90 backdrop-blur-md">
            <Film className="w-3 h-3 text-brand-accent" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
              Editorial Benchmark // 01
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.05]">
            Why Work <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-brand-accent">
              With ZU Production?
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
            Equipment alone does not make a film memorable, nor does a stage make an experience powerful. We combine deliberate storytelling, cinematic aesthetics, and military-grade technical execution.
          </p>
        </div>
      </section>

      {/* 2. CREATIVE PHILOSOPHY FIVE-PILLAR MATRIX */}
      <section className="py-24 px-6 border-b border-surface-border bg-neutral-950/60 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-brand-accent block mb-2 font-semibold">
                OUR CORE CREATIVE FOUNDATION
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
                An Idea Is Only As Strong As Its Execution.
              </h2>
            </div>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-light leading-relaxed">
              Every production at ZU Production is filtered through five non-negotiable milestones to ensure zero compromise from concept to master delivery.
            </p>
          </div>

          {/* 5-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {PHILOSOPHY_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="group relative rounded-2xl bg-surface/80 border border-surface-border p-6 flex flex-col justify-between hover:border-brand-red/60 transition-all duration-300 hover:shadow-xl hover:shadow-brand-dark-red/10 overflow-hidden"
              >
                {/* Film Viewfinder Reticle Accent */}
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-neutral-700 group-hover:border-brand-accent transition-colors" />

                <div>
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider block mb-6">
                    {pillar.tag}
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase text-white group-hover:text-brand-accent transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-neutral-400 text-xs leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-8 pt-3 border-t border-neutral-900 flex items-center justify-between font-mono text-[9px] text-neutral-600">
                  <span>STAGE 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-brand-red transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE 7 CORE ADVANTAGES */}
      <section className="py-24 px-6 border-b border-surface-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-brand-accent block font-semibold">
              VALUE PROPOSITIONS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
              Engineered For Reliability & Visual Depth
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed font-light">
              Why leading broadcasters, multinational corporations, sports leagues, and global charities trust our set and stage management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVANTAGES.map((adv) => {
              const Icon = adv.icon;
              return (
                <div
                  key={adv.id}
                  className="group relative rounded-2xl bg-surface/60 border border-surface-border p-8 hover:border-brand-red/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-900">
                      <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-brand-accent group-hover:border-brand-red/40 group-hover:bg-brand-dark-red/20 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs text-neutral-600 group-hover:text-neutral-400 transition-colors">
                        // {adv.id}
                      </span>
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
                    <span>PRODUCTION GUARANTEE</span>
                  </div>
                </div>
              );
            })}

            {/* Final CTA Feature Tile */}
            <div className="rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-brand-dark-red/30 border border-brand-red/30 p-8 flex flex-col justify-between crimson-glow">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-accent block mb-2">
                  NEXT STEP
                </span>
                <h3 className="font-display text-2xl font-black uppercase text-white">
                  Have An Upcoming Brief?
                </h3>
                <p className="mt-3 text-neutral-300 text-xs sm:text-sm leading-relaxed font-light">
                  Let’s evaluate your timeline, technical specifications, and visual goals. Estimates & initial production schedules issued within 24–48 hours.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="w-full inline-flex justify-center items-center gap-2 py-3.5 rounded-xl bg-brand-red hover:bg-brand-dark-red text-white text-xs font-mono uppercase tracking-widest font-bold transition-all"
                >
                  <span>Initiate Production Brief</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPARISON MATRIX: WHY NOT A REGULAR AGENCY OR FREELANCER? */}
      <section className="py-24 px-6 border-b border-surface-border bg-neutral-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-brand-accent block font-semibold">
              ORGANIZATIONAL ADVANTAGE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
              The Studio Difference
            </h2>
            <p className="text-neutral-400 text-sm font-light">
              Why direct collaboration with an integrated production company protects your budget and final picture quality.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-neutral-800 text-xs font-mono uppercase tracking-wider text-neutral-400">
                  <th className="py-4 px-6">Capability Matrix</th>
                  <th className="py-4 px-6 text-neutral-500">Freelance Networks</th>
                  <th className="py-4 px-6 text-neutral-500">Traditional Ad Agencies</th>
                  <th className="py-4 px-6 text-brand-accent bg-surface/60 rounded-t-xl">ZU Production</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-900 text-xs font-sans">
                {COMPARISON_POINTS.map((row, i) => (
                  <tr key={i} className="hover:bg-neutral-900/30 transition-colors">
                    <td className="py-4 px-6 font-semibold text-neutral-200">
                      {row.metric}
                    </td>
                    <td className="py-4 px-6 text-neutral-500">
                      {row.freelancers}
                    </td>
                    <td className="py-4 px-6 text-neutral-500">
                      {row.agencies}
                    </td>
                    <td className="py-4 px-6 text-white font-medium bg-surface/60 border-l border-r border-brand-red/20">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-brand-accent shrink-0" />
                        <span>{row.zuProduction}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. CINEMA & BROADCAST TECHNICAL COMPLIANCE RAIL */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl border border-surface-border bg-surface/70 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 text-brand-accent font-mono text-[10px] tracking-widest uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>TECHNICAL SPECIFICATION ACCREDITATION</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white">
                Deliverables Tuned For The Cinema Screen & Global Broadcast
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                Whether deploying 4K DCI RAW masters, EBU R128 loudness broadcast compliance, or vertical 9:16 social cutdowns, your masters are delivered error-free.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/work"
                className="px-6 py-3 rounded-full bg-neutral-900 border border-neutral-700 hover:border-white text-xs font-mono uppercase tracking-wider text-neutral-200 transition-colors"
              >
                Inspect Portfolio
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-brand-red hover:bg-brand-dark-red text-xs font-mono uppercase tracking-wider text-white font-bold crimson-glow transition-all"
              >
                Initiate Project RFP
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}