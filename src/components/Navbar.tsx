"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Film,
  Video,
  Tv,
  Smartphone,
  Sparkles,
  Palette,
  Play,
  Award,
  Mail,
  MapPin,
} from "lucide-react";

const CAPABILITY_LINKS = [
  {
    title: "Film & Video Production",
    href: "/services/film-video-production",
    desc: "Corporate profiles, TVCs/DVCs, and documentaries.",
    icon: Film,
    tag: "CINEMA",
  },
  {
    title: "Event Management & Production",
    href: "/services/event-production",
    desc: "Stage architecture, AV, and live technical staging.",
    icon: Video,
    tag: "LIVE STAGE",
  },
  {
    title: "Multi-Camera Broadcast",
    href: "/services/broadcast-production",
    desc: "Live vision mixing, multi-cam directing, and feeds.",
    icon: Tv,
    tag: "BROADCAST",
  },
  {
    title: "Digital Content & Social",
    href: "/services/digital-content",
    desc: "Short-form reels, podcasts, and digital campaigns.",
    icon: Smartphone,
    tag: "SOCIAL",
  },
  {
    title: "Post-Production & AI",
    href: "/services/post-production",
    desc: "DaVinci color grading, VFX, sound, and mastering.",
    icon: Sparkles,
    tag: "FINISHING",
  },
  {
    title: "Production Design",
    href: "/services/production-design",
    desc: "Set styling, art direction, and spatial curation.",
    icon: Palette,
    tag: "ART DEPT",
  },
];

const FEATURED_PROJECTS = [
  {
    title: "Ahmed Bukhatir",
    scope: "Official Music Video | UAE",
    category: "International Music Video",
    href: "/work/ahmed-bukhatir",
    tag: "INTERNATIONAL",
  },
  {
    title: "Universal Brothers",
    scope: "Hajj & Umrah Campaign",
    category: "Commercial & Documentary",
    href: "/work/universal-brothers",
    tag: "COMMERCIAL",
  },
  {
    title: "Jamia Binoria",
    scope: "Annual Convocation Execution",
    category: "Full Event Production",
    href: "/work/jamia-binoria",
    tag: "LIVE EVENT",
  },
];

const PRIMARY_LINKS = [
  { name: "About Studio", href: "/about" },
  { name: "Workflow", href: "/#workflow" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [mobileCapabilitiesOpen, setMobileCapabilitiesOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const capabilitiesRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);

  // Scroll detection for backdrop glass morph
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close all menus on route change
  useEffect(() => {
    setIsOpen(false);
    setCapabilitiesOpen(false);
    setWorkOpen(false);
    setMobileCapabilitiesOpen(false);
    setMobileWorkOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close desktop dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        capabilitiesRef.current &&
        !capabilitiesRef.current.contains(event.target as Node) &&
        workRef.current &&
        !workRef.current.contains(event.target as Node)
      ) {
        setCapabilitiesOpen(false);
        setWorkOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-black/90 backdrop-blur-2xl border-b border-surface-border py-3.5"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* 1. Brand Logo & Live Signal */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-8 w-28 sm:h-9 sm:w-36 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo/logo1.png"
                  alt="ZU PRODUCTION"
                  fill
                  sizes="(max-width: 640px) 112px, 144px"
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Live Studio Status Indicator */}
            <div className="hidden xl:flex items-center gap-2 pl-6 border-l border-neutral-800 font-mono text-[10px] uppercase tracking-widest text-neutral-400 select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red" />
              </span>
              <span className="text-neutral-500">LIVE FEED</span>
              <span className="text-neutral-700">//</span>
              <span className="text-neutral-300 font-semibold">24 FPS DCI</span>
            </div>
          </div>

          {/* 2. Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-mono">
            {/* CAPABILITIES DROPDOWN */}
            <div
              ref={capabilitiesRef}
              className="relative"
              onMouseEnter={() => {
                setCapabilitiesOpen(true);
                setWorkOpen(false);
              }}
              onMouseLeave={() => setCapabilitiesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setCapabilitiesOpen(!capabilitiesOpen)}
                className={`flex items-center gap-1.5 py-2 transition-colors duration-200 cursor-pointer ${
                  pathname.startsWith("/services") ? "text-white font-bold" : "text-neutral-400 hover:text-white"
                }`}
              >
                <span>Capabilities</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    capabilitiesOpen ? "rotate-180 text-brand-red" : "text-neutral-500"
                  }`}
                />
              </button>

              <AnimatePresence>
                {capabilitiesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute top-full -left-20 w-[640px] mt-2 rounded-2xl bg-neutral-950/95 border border-surface-border p-6 shadow-2xl backdrop-blur-3xl grid grid-cols-2 gap-3 z-50"
                  >
                    <div className="col-span-2 pb-3 mb-2 border-b border-neutral-800/80 flex justify-between items-center text-[10px] text-neutral-400 font-mono tracking-widest uppercase">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                        PRODUCTION CAPABILITY MATRIX
                      </span>
                      <Link
                        href="/services"
                        onClick={() => setCapabilitiesOpen(false)}
                        className="text-brand-accent hover:text-white transition-colors lowercase font-sans font-medium text-xs"
                      >
                        view all categories →
                      </Link>
                    </div>

                    {CAPABILITY_LINKS.map((cap) => {
                      const Icon = cap.icon;
                      const isActive = pathname === cap.href;

                      return (
                        <Link
                          key={cap.href}
                          href={cap.href}
                          onClick={() => setCapabilitiesOpen(false)}
                          className={`group/item p-3 rounded-xl border transition-all flex items-start gap-3.5 ${
                            isActive
                              ? "bg-neutral-900 border-brand-red/50 shadow-md"
                              : "bg-surface/50 hover:bg-neutral-900/90 border-surface-border hover:border-neutral-700"
                          }`}
                        >
                          <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-brand-accent group-hover/item:border-brand-red/50 group-hover/item:bg-brand-darkRed/20 transition-all">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-0.5">
                              <span className="font-sans text-xs font-bold text-neutral-200 group-hover/item:text-white transition-colors normal-case truncate">
                                {cap.title}
                              </span>
                              <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider">
                                {cap.tag}
                              </span>
                            </div>
                            <p className="font-sans text-[11px] text-neutral-400 normal-case leading-snug line-clamp-1">
                              {cap.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* SELECTED WORK DROPDOWN */}
            <div
              ref={workRef}
              className="relative"
              onMouseEnter={() => {
                setWorkOpen(true);
                setCapabilitiesOpen(false);
              }}
              onMouseLeave={() => setWorkOpen(false)}
            >
              <button
                type="button"
                onClick={() => setWorkOpen(!workOpen)}
                className={`flex items-center gap-1.5 py-2 transition-colors duration-200 cursor-pointer ${
                  pathname.startsWith("/work") ? "text-white font-bold" : "text-neutral-400 hover:text-white"
                }`}
              >
                <span>Selected Work</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    workOpen ? "rotate-180 text-brand-red" : "text-neutral-500"
                  }`}
                />
              </button>

              <AnimatePresence>
                {workOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute top-full -left-28 w-[580px] mt-2 rounded-2xl bg-neutral-950/95 border border-surface-border p-6 shadow-2xl backdrop-blur-3xl z-50 space-y-4"
                  >
                    <div className="pb-3 border-b border-neutral-800/80 flex justify-between items-center text-[10px] text-neutral-400 font-mono tracking-widest uppercase">
                      <span className="flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-brand-red" />
                        FEATURED CASE STUDIES
                      </span>
                      <Link
                        href="/work"
                        onClick={() => setWorkOpen(false)}
                        className="text-brand-accent hover:text-white transition-colors lowercase font-sans font-medium text-xs"
                      >
                        view full archive →
                      </Link>
                    </div>

                    {/* Featured Case Studies */}
                    <div className="grid grid-cols-1 gap-2.5">
                      {FEATURED_PROJECTS.map((proj) => (
                        <Link
                          key={proj.href}
                          href={proj.href}
                          onClick={() => setWorkOpen(false)}
                          className="group/item p-3.5 rounded-xl bg-surface/50 hover:bg-neutral-900/90 border border-surface-border hover:border-brand-red/50 transition-all flex items-center justify-between"
                        >
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-sans text-xs font-bold text-neutral-200 group-hover/item:text-white transition-colors normal-case">
                                {proj.title}
                              </span>
                              <span className="text-[9px] font-mono text-brand-accent uppercase tracking-wider bg-brand-darkRed/20 border border-brand-red/30 px-2 py-0.5 rounded">
                                {proj.tag}
                              </span>
                            </div>
                            <span className="font-sans text-[11px] text-neutral-400 normal-case block">
                              {proj.scope} • {proj.category}
                            </span>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover/item:text-white transition-colors" />
                        </Link>
                      ))}
                    </div>

                    {/* Footer Row */}
                    <div className="pt-3 border-t border-neutral-900 flex justify-between items-center text-[11px] font-mono text-neutral-400">
                      <Link
                        href="/work"
                        onClick={() => setWorkOpen(false)}
                        className="flex items-center gap-1.5 text-white hover:text-brand-accent transition-colors"
                      >
                        <Play className="w-3 h-3 fill-current text-brand-red" />
                        <span>Filter by Category & Watch Reel</span>
                      </Link>
                      <span className="text-[10px] text-neutral-600 uppercase tracking-widest">
                        4K DCI / MASTERED
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Standard Navigation Links */}
            {PRIMARY_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-2 transition-colors duration-200 ${
                    isActive ? "text-white font-bold" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-red shadow-sm"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Primary Action Button */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-red hover:bg-brand-darkRed text-white text-xs uppercase tracking-widest font-bold font-mono transition-all duration-300 crimson-glow hover:scale-[1.03]"
            >
              <span>Initiate RFP</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </nav>

          {/* 3. Mobile Hamburger Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="/contact"
              className="px-3.5 py-1.5 rounded-full bg-brand-red text-white text-[10px] font-mono font-bold uppercase tracking-wider crimson-glow"
            >
              RFP Wire
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl border border-neutral-800 bg-surface text-neutral-300 hover:text-white focus:outline-none transition-colors"
              aria-label="Toggle Navigation Drawer"
            >
              {isOpen ? <X className="w-5 h-5 text-brand-red" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* 4. Fullscreen Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[65px] z-40 lg:hidden bg-black/98 backdrop-blur-3xl flex flex-col justify-between overflow-y-auto px-6 py-6 border-t border-surface-border"
          >
            <div className="space-y-4">
              {/* Telemetry Status Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-neutral-900 font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                  STUDIO WIRE // READY
                </span>
                <span>PAKISTAN // GLOBAL</span>
              </div>

              {/* Mobile Accordion: Capabilities */}
              <div className="border-b border-neutral-900 pb-3">
                <button
                  type="button"
                  onClick={() => setMobileCapabilitiesOpen(!mobileCapabilitiesOpen)}
                  className="w-full flex items-center justify-between py-2 text-sm font-mono uppercase tracking-widest text-neutral-300 font-bold"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-brand-red">01.</span> Capabilities
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileCapabilitiesOpen ? "rotate-180 text-brand-red" : "text-neutral-500"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {mobileCapabilitiesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-3 pt-2 space-y-2.5"
                    >
                      <Link
                        href="/services"
                        onClick={() => setIsOpen(false)}
                        className="block py-1 font-mono text-xs text-brand-accent tracking-wider"
                      >
                        → View Master Capabilities Overview
                      </Link>

                      {CAPABILITY_LINKS.map((cap) => {
                        const Icon = cap.icon;
                        return (
                          <Link
                            key={cap.href}
                            href={cap.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 py-2 text-neutral-400 hover:text-white text-xs font-sans border-b border-neutral-950"
                          >
                            <Icon className="w-3.5 h-3.5 text-neutral-500" />
                            <span>{cap.title}</span>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Accordion: Selected Work */}
              <div className="border-b border-neutral-900 pb-3">
                <button
                  type="button"
                  onClick={() => setMobileWorkOpen(!mobileWorkOpen)}
                  className="w-full flex items-center justify-between py-2 text-sm font-mono uppercase tracking-widest text-neutral-300 font-bold"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-brand-red">02.</span> Selected Work
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileWorkOpen ? "rotate-180 text-brand-red" : "text-neutral-500"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {mobileWorkOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-3 pt-2 space-y-2.5"
                    >
                      <Link
                        href="/work"
                        onClick={() => setIsOpen(false)}
                        className="block py-1 font-mono text-xs text-brand-accent tracking-wider"
                      >
                        → View All Featured Productions
                      </Link>

                      {FEATURED_PROJECTS.map((proj) => (
                        <Link
                          key={proj.href}
                          href={proj.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between py-2 text-neutral-400 hover:text-white text-xs font-sans border-b border-neutral-950"
                        >
                          <span>{proj.title}</span>
                          <span className="text-[9px] font-mono text-neutral-600">{proj.tag}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Standard Links */}
              {PRIMARY_LINKS.map((link, idx) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-2.5 border-b border-neutral-900 text-sm font-mono uppercase tracking-widest text-neutral-300 hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-neutral-600">0{idx + 3}.</span>
                    <span>{link.name}</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600" />
                </Link>
              ))}

              {/* Contact Link */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-2.5 border-b border-neutral-900 text-sm font-mono uppercase tracking-widest text-neutral-300 hover:text-white"
              >
                <span className="flex items-center gap-2">
                  <span className="text-neutral-600">05.</span>
                  <span>Contact Desk</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600" />
              </Link>
            </div>

            {/* Mobile Footer Quick RFP Trigger */}
            <div className="pt-6 space-y-4">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex justify-center items-center gap-2 py-3.5 rounded-xl bg-brand-red text-white text-xs font-mono uppercase tracking-widest font-bold crimson-glow"
              >
                <span>Initiate Project RFP</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="grid grid-cols-2 gap-3 pt-2 text-[10px] font-mono text-neutral-500">
                <div className="flex items-center gap-1.5 truncate">
                  <Mail className="w-3 h-3 text-brand-red shrink-0" />
                  <span className="truncate">contact@zuproduction.com</span>
                </div>
                <div className="flex items-center gap-1.5 justify-end">
                  <MapPin className="w-3 h-3 text-brand-red shrink-0" />
                  <span>Karachi, Pakistan</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}