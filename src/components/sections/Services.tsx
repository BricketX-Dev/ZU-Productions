"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SERVICES } from "@/data/content";

function ServiceCard({ item }: { item: (typeof SERVICES)[number] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse coordinate values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for realistic fluid tilt
  const springConfig = { damping: 20, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  // Dynamic light sheen following the cursor
  const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), springConfig);
  const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    // Normalize cursor position between -0.5 and 0.5
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const Icon = item.icon;

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative group h-full rounded-2xl bg-surface/90 border border-surface-border p-8 flex flex-col justify-between overflow-hidden transition-colors duration-300 hover:border-brand-red/50 hover:shadow-2xl hover:shadow-brand-dark-red/20"
      >
        {/* Dynamic Interactive Spotlight Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([x, y]) =>
                `radial-gradient(400px circle at ${x}% ${y}%, rgba(196, 12, 12, 0.18), transparent 80%)`
            ),
          }}
        />

        {/* Ambient Top Rim Reflection */}
        <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-brand-red/40 transition-colors duration-500" />

        {/* Card Content with 3D Depth */}
        <div style={{ transform: "translateZ(30px)" }}>
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-brand-accent group-hover:bg-brand-red group-hover:text-white transition-all duration-300 group-hover:scale-105 shadow-inner">
              <Icon className="w-5 h-5" />
            </div>
            <span className="font-mono text-xs font-semibold text-neutral-600 group-hover:text-neutral-400 transition-colors">
              {item.id}
            </span>
          </div>

          <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-neutral-100 transition-colors">
            {item.title}
          </h3>
          <p className="text-neutral-400 text-sm leading-relaxed mb-6">
            {item.desc}
          </p>
        </div>

        {/* Pill Tags with Depth */}
        <div
          style={{ transform: "translateZ(20px)" }}
          className="border-t border-neutral-800/80 pt-4 mt-auto"
        >
          <ul className="flex flex-wrap gap-2">
            {item.items.map((sub, i) => (
              <li
                key={i}
                className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 bg-neutral-900/90 border border-neutral-800/60 px-2.5 py-1 rounded group-hover:border-neutral-700 transition-colors"
              >
                {sub}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-6 relative">
      {/* Background Section Accent */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-brand-dark-red/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-bold">
            02 — Capabilities
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2 text-white">
            What We Do
          </h2>
        </div>
        <p className="text-neutral-400 text-sm max-w-md leading-relaxed">
          End-to-end creative and physical execution covering commercial production, live broadcasts, and brand storytelling.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((item) => (
          <ServiceCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}