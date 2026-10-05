"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
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

const AUTOPLAY_INTERVAL = 6000;

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(0); 
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Dedicated container ref to scroll ONLY the track horizontally, NEVER the screen
  const trackContainerRef = useRef<HTMLDivElement>(null);
  const stepButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.25 });

  // Auto-play logic
  useEffect(() => {
    if (!isInView || isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % WORKFLOW_DATA.length);
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isInView, isPaused, activeStep]);

  // Keep active step centered ONLY inside the track without moving the page/card
  useEffect(() => {
    const container = trackContainerRef.current;
    const button = stepButtonRefs.current[activeStep];

    if (container && button && window.innerWidth < 768) {
      const containerWidth = container.offsetWidth;
      const buttonLeft = button.offsetLeft;
      const buttonWidth = button.offsetWidth;

      // Scroll strictly within the internal container
      container.scrollTo({
        left: buttonLeft - containerWidth / 2 + buttonWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeStep]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setIsPaused(true);
    setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  const current = WORKFLOW_DATA[activeStep];

  return (
    <section 
      ref={sectionRef} 
      id="workflow" 
      className="py-20 sm:py-28 bg-black relative border-b border-surface-border overflow-hidden select-none w-full"
    >
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[350px] bg-brand-dark-red/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10 w-full overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-surface-border bg-surface/80 backdrop-blur-md mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                04 — Production Pipeline
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight">
              From Concept to Master Frame
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-light leading-relaxed">
            Our systematic 6-stage pipeline built to eliminate production bottlenecks, maintain visual discipline, and deliver on airtime.
          </p>
        </div>

        {/* Mobile Live Status Pill */}
        <div className="md:hidden flex items-center justify-between pb-3 mb-4 border-b border-neutral-900 font-mono text-[10px] uppercase">
          <span className="text-brand-accent font-bold">
            STAGE {current.step}/06 // {current.name}
          </span>
          <span className="text-neutral-500">TC {current.timecode}</span>
        </div>

        {/* Track Container Wrapper */}
        <div className="relative mb-8 sm:mb-12 w-full">
          {/* Desktop connecting track line */}
          <div className="hidden md:block h-[2px] w-full bg-neutral-800 absolute top-[23px] left-0 z-0" />
          <motion.div
            className="hidden md:block h-[2px] bg-gradient-to-r from-brand-dark-red via-brand-red to-brand-accent absolute top-[23px] left-0 z-0"
            initial={false}
            animate={{ width: `${(activeStep / (WORKFLOW_DATA.length - 1)) * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

          {/* Internal Scroller Rail */}
          <div
            ref={trackContainerRef}
            className="flex md:grid md:grid-cols-6 gap-3 sm:gap-4 md:gap-0 overflow-x-auto md:overflow-visible scrollbar-none pb-2 md:pb-0 relative z-10 w-full"
          >
            {WORKFLOW_DATA.map((wf, idx) => {
              const isSelected = activeStep === idx;
              const isPassed = activeStep > idx;

              return (
                <button
                  key={wf.step}
                  ref={(el) => {
                    stepButtonRefs.current[idx] = el;
                  }}
                  type="button"
                  onClick={() => handleStepClick(idx)}
                  className="flex flex-col items-center group cursor-pointer focus:outline-none shrink-0 min-w-[65px] sm:min-w-[85px] md:min-w-0"
                >
                  {/* Pin Node */}
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                      isSelected
                        ? "bg-brand-red text-white crimson-glow scale-105 sm:scale-110 ring-2 ring-white/20"
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

                  {/* Step Name */}
                  <div className="mt-2.5 text-center hidden sm:block">
                    <span
                      className={`block text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-colors truncate max-w-[80px] sm:max-w-none ${
                        isSelected ? "text-white" : "text-neutral-500 group-hover:text-neutral-300"
                      }`}
                    >
                      {wf.name}
                    </span>
                    <span className="font-mono text-[9px] text-neutral-600 hidden md:block mt-0.5">
                      {wf.timecode}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Phase Inspector Card - Constrained width and always centered */}
        <div 
          className="w-full max-w-full rounded-2xl bg-surface/90 border border-surface-border p-5 sm:p-8 md:p-10 relative overflow-hidden shadow-2xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Autoplay Linear Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-neutral-900">
            {isInView && !isPaused && (
              <motion.div
                key={activeStep}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: "linear" }}
                className="h-full bg-brand-red opacity-60"
              />
            )}
          </div>

          {/* Card Top Metadata Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1 mb-3 sm:mb-2 font-mono text-[9px] tracking-widest uppercase select-none">
            <span className="text-neutral-500">
              [ PIPELINE STAGE // {current.step} OF 06 ]
            </span>
            <span className="text-brand-accent flex items-center gap-1.5 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping" />
              TC {current.timecode}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.step}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-2 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-start w-full"
            >
              {/* Left Column: Scope & Overview */}
              <div className="lg:col-span-6 space-y-3 sm:space-y-4">
                <div className="inline-block px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                  {current.tagline}
                </div>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                  {current.step}. {current.name}
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm md:text-base leading-relaxed font-light">
                  {current.desc}
                </p>

                {/* Key Roles Assigned */}
                <div className="pt-3 sm:pt-4 border-t border-neutral-800">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-2">
                    Key Leads Assigned:
                  </span>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {current.crew.map((person, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800/80 text-[11px] sm:text-xs font-mono text-neutral-400"
                      >
                        {person}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Phase Deliverables */}
              <div className="lg:col-span-6 bg-neutral-950/70 border border-neutral-800/80 rounded-xl p-4 sm:p-6 w-full">
                <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 border-b border-neutral-800">
                  <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-brand-red shrink-0" />
                    Deliverables & Milestones
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono text-neutral-600">VERIFIED</span>
                </div>

                <ul className="space-y-2 sm:space-y-3">
                  {current.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Direct Action */}
                <div className="mt-5 sm:mt-8 pt-3 sm:pt-4 border-t border-neutral-900 flex justify-between items-center">
                  <span className="text-[10px] sm:text-[11px] font-mono text-neutral-500">
                    Ready to discuss this phase?
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-brand-accent hover:text-white transition-colors cursor-pointer"
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