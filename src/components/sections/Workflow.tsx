"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  ChevronRight, 
  Layers
} from "lucide-react";

const WORKFLOW_DATA = [
  {
    step: "01",
    name: "Discover",
    tagline: "Vision & Creative Alignment",
    desc: "We dissect project intent, target demographics, brand aesthetics, and key conversion metrics before writing a single line.",
    deliverables: ["Creative Brief", "Aesthetic Moodboards", "Scope Definition", "Target ROI Analysis"],
    crew: ["Lead Director", "Executive Producer", "Strategy Lead"],
    timecode: "00:01:00:00",
  },
  {
    step: "02",
    name: "Develop",
    tagline: "Scripting & Visual Treatment",
    desc: "Drafting treatments, visual scripts, shot breakdowns, and technical styling cues that define the mood and pacing.",
    deliverables: ["Director's Treatment", "Shooting Script", "Storyboards", "Lighting Palettes"],
    crew: ["Screenwriter", "Art Director", "Director"],
    timecode: "00:02:15:00",
  },
  {
    step: "03",
    name: "Plan",
    tagline: "Pre-Production & Logistics",
    desc: "Precision coordination: technical crew selection, casting calls, location scouting, set builds, and shooting permits.",
    deliverables: ["Call Sheets", "Casting Approvals", "Location Permits", "Technical Package (ARRI/RED)"],
    crew: ["Production Manager", "1st AD", "Location Scout"],
    timecode: "00:03:40:00",
  },
  {
    step: "04",
    name: "Produce",
    tagline: "Principal Photography & Staging",
    desc: "On-ground execution. Master cinematography, multi-camera switching, live lighting rigs, and professional crew direction.",
    deliverables: ["Master 4K/8K RAW Rushes", "Sound Logs", "Live Switching Feeds", "Multi-cam Takes"],
    crew: ["Director of Photography", "Gaffer", "Sound Recordist", "Live Switcher"],
    timecode: "00:04:30:00",
  },
  {
    step: "05",
    name: "Finish",
    tagline: "Post-Production & Mastering",
    desc: "Assembly edits, master color grading (DaVinci Resolve), custom Foley & sound design, motion graphics, and visual effects.",
    deliverables: ["Offline & Online Cuts", "Color Grade Pass", "Sound Design & Mix (5.1/Stereo)", "VFX Polish"],
    crew: ["Lead Editor", "Colorist", "Sound Designer", "Motion Designer"],
    timecode: "00:05:10:00",
  },
  {
    step: "06",
    name: "Deliver",
    tagline: "Multi-Format Distribution",
    desc: "High-resolution rendering prepared across exact theatrical, commercial broadcast, and responsive digital compression formats.",
    deliverables: ["DCI 4K Masters", "ProRes 4444 XQ", "Broadcast Clean Feeds", "Vertical Social Cuts (9:16)"],
    crew: ["Post Supervisor", "QA Technical Engineer"],
    timecode: "00:06:00:00",
  },
];

const AUTOPLAY_INTERVAL = 6000; // 6 seconds per step

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(0); 
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play logic
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % WORKFLOW_DATA.length);
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, activeStep]);

  // Handle manual clicks
  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setIsPaused(true); // Pause if user actively clicks a step
    
    // Optional: Resume auto-play after 10 seconds of inactivity if they clicked manually
    setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  const current = WORKFLOW_DATA[activeStep];

  return (
    <section id="workflow" className="py-28 bg-black relative border-b border-surface-border overflow-hidden">
      {/* Background Studio Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-brand-darkRed/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 1. Header (Balanced Scale) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-surface-border bg-surface/80 backdrop-blur-md mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                04 - Production Pipeline
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight">
              From Concept to Master Frame
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-light leading-relaxed">
            Our systematic 6-stage pipeline built to eliminate production bottlenecks, maintain visual discipline, and deliver on airtime.
          </p>
        </div>

        {/* 2. Film Strip Progress Track (Scrubber) */}
        <div className="relative mb-12">
          {/* Base Track */}
          <div className="h-[2px] w-full bg-neutral-800 absolute top-[23px] left-0 z-0" />

          {/* Active Colored Fill Bar */}
          <motion.div
            className="h-[2px] bg-gradient-to-r from-brand-darkRed via-brand-red to-brand-accent absolute top-[23px] left-0 z-0"
            initial={false}
            animate={{ width: `${(activeStep / (WORKFLOW_DATA.length - 1)) * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

          {/* Scrubber Nodes */}
          <div className="grid grid-cols-6 relative z-10">
            {WORKFLOW_DATA.map((wf, idx) => {
              const isSelected = activeStep === idx;
              const isPassed = activeStep > idx;

              return (
                <button
                  key={wf.step}
                  type="button"
                  onClick={() => handleStepClick(idx)}
                  className="flex flex-col items-center group cursor-pointer text-left focus:outline-none"
                >
                  {/* Pin Node */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                      isSelected
                        ? "bg-brand-red text-white crimson-glow scale-110 ring-2 ring-white/20"
                        : isPassed
                        ? "bg-neutral-900 border border-brand-red/50 text-neutral-200"
                        : "bg-surface border border-surface-border text-neutral-500 group-hover:border-neutral-600 group-hover:text-neutral-300"
                    }`}
                  >
                    {isPassed ? (
                      <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                    ) : (
                      wf.step
                    )}
                  </div>

                  {/* Step Label */}
                  <div className="mt-3 text-center">
                    <span
                      className={`block text-xs font-bold uppercase tracking-wider transition-colors ${
                        isSelected ? "text-white" : "text-neutral-500 group-hover:text-neutral-300"
                      }`}
                    >
                      {wf.name}
                    </span>
                    <span className="font-mono text-[9px] text-neutral-600 hidden sm:block mt-0.5">
                      {wf.timecode}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Deep Dive Phase Inspector Console */}
        <div 
          className="rounded-2xl bg-surface/90 border border-surface-border p-6 sm:p-10 relative overflow-hidden shadow-2xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Timer Progress Indicator (Visual cue for auto-play) */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-neutral-900">
            {!isPaused && (
              <motion.div
                key={activeStep} // Reset animation on step change
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: "linear" }}
                className="h-full bg-brand-red opacity-50"
              />
            )}
          </div>

          {/* Subtle Corner Film Gate Marks */}
          <div className="absolute top-4 left-4 font-mono text-[9px] text-neutral-600 tracking-widest uppercase select-none">
            [ PIPELINE STAGE // {current.step} OF 06 ]
          </div>
          <div className="absolute top-4 right-4 font-mono text-[9px] text-brand-accent tracking-widest uppercase select-none flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping" />
            TC {current.timecode}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.step}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: Scope & Overview */}
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-block px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                  {current.tagline}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  {current.step}. {current.name}
                </h3>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
                  {current.desc}
                </p>

                {/* Key Roles Assigned */}
                <div className="pt-4 border-t border-neutral-800">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-2">
                    Key Leads Assigned:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {current.crew.map((person, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800/80 text-xs font-mono text-neutral-400"
                      >
                        {person}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Phase Deliverables */}
              <div className="lg:col-span-6 bg-neutral-950/70 border border-neutral-800/80 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-800">
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-brand-red" />
                    Phase Deliverables & Milestones
                  </span>
                  <span className="text-[10px] font-mono text-neutral-600">VERIFIED</span>
                </div>

                <ul className="space-y-3">
                  {current.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-neutral-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Direct Action */}
                <div className="mt-8 pt-4 border-t border-neutral-900 flex justify-between items-center">
                  <span className="text-[11px] font-mono text-neutral-500">
                    Ready to discuss this phase?
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-accent hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Inquire Phase</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}