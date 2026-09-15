// src/components/sections/Hero.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, X, Volume2, VolumeX } from "lucide-react";
import { BRAND } from "@/data/content";

export default function Hero() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const showreelVideoRef = useRef<HTMLVideoElement>(null);
  const [timecode, setTimecode] = useState("00:00:00:00");

  // Realtime Running SMPTE Timecode
  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      const fps = 24;
      const totalSeconds = Math.floor(frame / fps);
      const frames = frame % fps;
      const seconds = totalSeconds % 60;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const hours = Math.floor(totalSeconds / 3600);

      const pad = (n: number) => n.toString().padStart(2, "0");
      setTimecode(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`);
    }, 1000 / 24);

    return () => clearInterval(interval);
  }, []);

  // Ambient sound toggle for background reel
  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Synchronize playback when opening/closing modal
  const handleOpenShowreel = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setShowreelOpen(true);
  };

  const handleCloseShowreel = () => {
    if (showreelVideoRef.current) {
      showreelVideoRef.current.pause();
      showreelVideoRef.current.currentTime = 0;
    }
    if (videoRef.current) {
      videoRef.current.play();
    }
    setShowreelOpen(false);
  };

  return (
    <>
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 overflow-hidden border-b border-surface-border bg-black select-none">
        {/* 1. CINEMATIC BACKGROUND VIDEO */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover scale-[1.02] opacity-40 filter brightness-90 contrast-125"
          >
            <source src="/videos/bg.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-background/90 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,12,12,0.12)_0%,transparent_75%)] pointer-events-none" />
        </div>

        {/* 2. CINEMA MONITOR HUD / CORNER ACCENTS */}
        <div className="absolute inset-6 sm:inset-10 pointer-events-none z-20 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-3.5 h-3.5 border-t border-l border-neutral-600" />
              <div className="font-mono text-[9px] tracking-widest uppercase text-neutral-400 flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                <span className="text-white font-bold">REC</span>
                <span className="text-neutral-700">|</span>
                <span>RAW 4K</span>
                <span className="text-neutral-700">|</span>
                <span>24 FPS</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="font-mono text-[10px] tracking-widest text-neutral-400 bg-neutral-950/80 px-2.5 py-0.5 rounded border border-neutral-800 backdrop-blur-md">
                <span className="text-neutral-600 mr-1.5">TC</span>
                <span className="text-brand-accent font-medium">{timecode}</span>
              </div>
              <div className="w-3.5 h-3.5 border-t border-r border-neutral-600" />
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div className="flex items-center gap-3">
              <div className="w-3.5 h-3.5 border-b border-l border-neutral-600" />
              <div className="font-mono text-[9px] tracking-widest uppercase text-neutral-500 hidden sm:flex items-center gap-2">
                <span>SHUTTER: 180°</span>
                <span>•</span>
                <span>ISO 800</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pointer-events-auto">
              <button
                type="button"
                onClick={toggleSound}
                aria-label="Toggle audio"
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface/80 border border-surface-border hover:border-neutral-500 text-neutral-400 hover:text-white transition-all backdrop-blur-md text-[10px] font-mono tracking-wider uppercase cursor-pointer"
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-3 h-3 text-neutral-500" />
                    <span className="hidden sm:inline">Sound Off</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3 h-3 text-brand-accent animate-pulse" />
                    <span className="text-brand-accent hidden sm:inline">Sound On</span>
                  </>
                )}
              </button>
              <div className="w-3.5 h-3.5 border-b border-r border-neutral-600" />
            </div>
          </div>
        </div>

        {/* 3. CENTER CONTENT */}
        <div className="relative max-w-4xl mx-auto text-center z-10 py-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-neutral-800/80 bg-neutral-950/60 backdrop-blur-md mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red animate-ping" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-mono">
              {BRAND.location}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-[1.1] text-white"
          >
            Creative Production. <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-brand-accent">
              Powerful Visuals.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-neutral-400 max-w-xl mx-auto text-sm sm:text-base font-normal leading-relaxed"
          >
            From the first concept to the final frame — engineering commercial films, documentaries, and large-scale multi-camera live experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center items-center gap-3.5"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-red hover:bg-brand-dark-red text-white text-[11px] uppercase tracking-widest font-semibold transition-all crimson-glow"
            >
              <span>Initiate Project</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <button
              type="button"
              onClick={handleOpenShowreel}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-surface/80 border border-surface-border hover:border-neutral-600 text-neutral-300 hover:text-white text-[11px] uppercase tracking-widest font-semibold transition-all backdrop-blur-md cursor-pointer"
            >
              <Play className="w-3 h-3 fill-brand-red text-brand-red" />
              <span>Watch Reel</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* 4. LOCAL SHOWREEL MODAL */}
      <AnimatePresence>
        {showreelOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={handleCloseShowreel}
              className="absolute top-6 right-6 p-3 rounded-full bg-neutral-900/80 border border-neutral-700 text-neutral-300 hover:text-white hover:border-brand-red transition-colors cursor-pointer z-50"
              aria-label="Close Showreel"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Player Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden border border-surface-border bg-black shadow-2xl relative"
            >
              <video
                ref={showreelVideoRef}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain bg-black"
              >
                {/* Place your local video file in public/videos/showreel.mp4 */}
                <source src="/videos/reel.mp4" type="video/mp4" />
                Your browser does not support HTML5 video playback.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}