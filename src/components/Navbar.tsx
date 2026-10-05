// src/components/Navbar.tsx
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
  Briefcase,
  Mail,
  MapPin,
} from "lucide-react";

const SERVICE_LINKS = [
  {
    title: "Film & Video Production",
    href: "/services/film-video-production",
    desc: "Corporate videos, TV commercials, and brand films.",
    icon: Film,
    tag: "VIDEO",
  },
  {
    title: "Events & Staging",
    href: "/services/event-production",
    desc: "Stage setup, audio-visual, and live event coverage.",
    icon: Video,
    tag: "EVENTS",
  },
  {
    title: "Live Broadcast",
    href: "/services/broadcast-production",
    desc: "Multi-camera live streaming and transmission.",
    icon: Tv,
    tag: "LIVE",
  },
  {
    title: "Social & Digital Content",
    href: "/services/digital-content",
    desc: "Short videos, reels, podcasts, and social media campaigns.",
    icon: Smartphone,
    tag: "SOCIAL",
  },
  {
    title: "Editing & Post-Production",
    href: "/services/post-production",
    desc: "Video editing, color grading, visual effects, and sound design.",
    icon: Sparkles,
    tag: "POST",
  },
  {
    title: "Set & Art Design",
    href: "/services/production-design",
    desc: "Set construction, background styling, and creative direction.",
    icon: Palette,
    tag: "ART",
  },
];

const FEATURED_PROJECTS = [
  {
    title: "Ahmed Bukhatir",
    scope: "Official Music Video | UAE",
    category: "Music Video",
    href: "/work/ahmed-bukhatir",
    tag: "FEATURED",
  },
  {
    title: "Universal Brothers",
    scope: "Hajj & Umrah Campaign",
    category: "Commercial & Documentary",
    href: "/work/universal-brothers",
    tag: "COMMERCIAL",
  },
  {
    title: "The Studio Sessions",
    scope: "Studio Podcast & Video Series",
    category: "Podcast Series",
    href: "/work/studio-podcast-series",
    tag: "PODCAST",
  },
];

const PRIMARY_LINKS = [
  { name: "About Us", href: "/about" },
  { name: "How We Work", href: "/#workflow" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const servicesRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);

  // Active route helpers
  const isServicesActive = pathname.startsWith("/services");
  const isWorkActive = pathname.startsWith("/work");
  const isContactActive = pathname === "/contact";

  // Scroll detection for dynamic background treatment
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page navigation
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setWorkOpen(false);
    setMobileServicesOpen(false);
    setMobileWorkOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
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
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node) &&
        workRef.current &&
        !workRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
        setWorkOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 select-none ${
          scrolled || isOpen
            ? "bg-black/90 backdrop-blur-2xl border-b border-surface-border py-3.5"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
        <div className="relative h-10 w-36 sm:h-12 sm:w-48 transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/images/logo/logo.png"
            alt="ZU PRODUCTION"
            fill
            sizes="(max-width: 640px) 144px, 192px"
            priority
            className="object-contain object-left"
          />
        </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-mono">
            {/* Services Dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => {
                setServicesOpen(true);
                setWorkOpen(false);
              }}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className={`relative flex items-center gap-1.5 py-2 transition-colors duration-200 ${
                  isServicesActive
                    ? "text-white font-bold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesOpen
                      ? "rotate-180 text-brand-red"
                      : isServicesActive
                      ? "text-brand-red"
                      : "text-neutral-500"
                  }`}
                />
                {isServicesActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-red shadow-sm"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute top-full -left-20 w-[640px] mt-2 rounded-2xl bg-neutral-950/95 border border-surface-border p-6 shadow-2xl backdrop-blur-3xl grid grid-cols-2 gap-3 z-50"
                  >
                    <div className="col-span-2 pb-3 mb-2 border-b border-neutral-800/80 flex justify-between items-center text-[10px] text-neutral-400 font-mono tracking-widest uppercase">
                      <span className="flex items-center gap-1.5 font-semibold text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                        Our Services
                      </span>
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="text-brand-accent hover:text-white transition-colors lowercase font-sans font-medium text-xs"
                      >
                        view all services →
                      </Link>
                    </div>

                    {SERVICE_LINKS.map((service) => {
                      const Icon = service.icon;
                      const isActive = pathname === service.href;

                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setServicesOpen(false)}
                          className={`group/item p-3 rounded-xl border transition-all flex items-start gap-3.5 ${
                            isActive
                              ? "bg-neutral-900 border-brand-red/50 shadow-md ring-1 ring-brand-red/20"
                              : "bg-surface/50 hover:bg-neutral-900/90 border-surface-border hover:border-neutral-700"
                          }`}
                        >
                          <div
                            className={`p-2.5 rounded-lg border transition-all ${
                              isActive
                                ? "bg-brand-dark-red/30 border-brand-red/60 text-white"
                                : "bg-neutral-900 border-neutral-800 text-brand-accent group-hover/item:border-brand-red/50 group-hover/item:bg-brand-dark-red/20"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-0.5">
                              <span
                                className={`font-sans text-xs font-bold transition-colors normal-case truncate ${
                                  isActive
                                    ? "text-white"
                                    : "text-neutral-200 group-hover/item:text-white"
                                }`}
                              >
                                {service.title}
                              </span>
                              <span
                                className={`text-[9px] font-mono uppercase tracking-wider ${
                                  isActive ? "text-brand-accent" : "text-neutral-500"
                                }`}
                              >
                                {service.tag}
                              </span>
                            </div>
                            <p className="font-sans text-[11px] text-neutral-400 normal-case leading-snug line-clamp-1">
                              {service.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Work Dropdown */}
            <div
              ref={workRef}
              className="relative"
              onMouseEnter={() => {
                setWorkOpen(true);
                setServicesOpen(false);
              }}
              onMouseLeave={() => setWorkOpen(false)}
            >
              <Link
                href="/work"
                className={`relative flex items-center gap-1.5 py-2 transition-colors duration-200 ${
                  isWorkActive
                    ? "text-white font-bold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <span>Our Work</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    workOpen
                      ? "rotate-180 text-brand-red"
                      : isWorkActive
                      ? "text-brand-red"
                      : "text-neutral-500"
                  }`}
                />
                {isWorkActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-red shadow-sm"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>

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
                      <span className="flex items-center gap-1.5 font-semibold text-neutral-300">
                        <Briefcase className="w-3.5 h-3.5 text-brand-red" />
                        Recent Projects
                      </span>
                      <Link
                        href="/work"
                        onClick={() => setWorkOpen(false)}
                        className="text-brand-accent hover:text-white transition-colors lowercase font-sans font-medium text-xs"
                      >
                        view all work →
                      </Link>
                    </div>

                    {/* Featured Work Items */}
                    <div className="grid grid-cols-1 gap-2.5">
                      {FEATURED_PROJECTS.map((proj) => {
                        const isProjActive = pathname === proj.href;

                        return (
                          <Link
                            key={proj.href}
                            href={proj.href}
                            onClick={() => setWorkOpen(false)}
                            className={`group/item p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                              isProjActive
                                ? "bg-neutral-900 border-brand-red/50 shadow-md ring-1 ring-brand-red/20"
                                : "bg-surface/50 hover:bg-neutral-900/90 border-surface-border hover:border-brand-red/50"
                            }`}
                          >
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span
                                  className={`font-sans text-xs font-bold transition-colors normal-case ${
                                    isProjActive
                                      ? "text-white"
                                      : "text-neutral-200 group-hover/item:text-white"
                                  }`}
                                >
                                  {proj.title}
                                </span>
                                <span className="text-[9px] font-mono text-brand-accent uppercase tracking-wider bg-brand-dark-red/20 border border-brand-red/30 px-2 py-0.5 rounded">
                                  {proj.tag}
                                </span>
                              </div>
                              <span className="font-sans text-[11px] text-neutral-400 normal-case block">
                                {proj.scope} • {proj.category}
                              </span>
                            </div>
                            <ArrowUpRight
                              className={`w-4 h-4 transition-colors ${
                                isProjActive
                                  ? "text-brand-accent"
                                  : "text-neutral-600 group-hover/item:text-white"
                              }`}
                            />
                          </Link>
                        );
                      })}
                    </div>

                    {/* Dropdown Footer Link */}
                    <div className="pt-3 border-t border-neutral-900 flex items-center text-[11px] font-mono text-neutral-400">
                      <Link
                        href="/work"
                        onClick={() => setWorkOpen(false)}
                        className="flex items-center gap-1.5 text-white hover:text-brand-accent transition-colors"
                      >
                        <Play className="w-3 h-3 fill-current text-brand-red" />
                        <span>Watch Portfolio Reel</span>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Standard Primary Navigation Links */}
            {PRIMARY_LINKS.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-2 transition-colors duration-200 ${
                    isActive
                      ? "text-white font-bold"
                      : "text-neutral-400 hover:text-white"
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

            {/* Contact Button */}
            <Link
              href="/contact"
              className={`group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold font-mono transition-all duration-300 hover:scale-[1.03] ${
                isContactActive
                  ? "bg-brand-red text-white ring-2 ring-white/30 crimson-glow"
                  : "bg-brand-red hover:bg-brand-dark-red text-white crimson-glow"
              }`}
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </nav>

          {/* Mobile Right Bar */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="/contact"
              className={`px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider crimson-glow ${
                isContactActive
                  ? "bg-brand-red text-white ring-2 ring-white/40"
                  : "bg-brand-red text-white"
              }`}
            >
              Contact Us
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl border border-neutral-800 bg-surface text-neutral-300 hover:text-white focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5 text-brand-red" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[65px] z-40 lg:hidden bg-black/98 backdrop-blur-3xl flex flex-col justify-between overflow-y-auto px-6 py-6 border-t border-surface-border select-none"
          >
            <div className="space-y-4">
              {/* Mobile Services Accordion */}
              <div
                className={`border-b pb-3 transition-colors ${
                  isServicesActive
                    ? "border-brand-red/40 bg-neutral-900/30 -mx-3 px-3 rounded-xl pt-2"
                    : "border-neutral-900"
                }`}
              >
                <div className="w-full flex items-center justify-between py-2 text-sm font-mono uppercase tracking-widest font-bold">
                  <Link
                    href="/services"
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2 transition-colors ${
                      isServicesActive
                        ? "text-brand-accent font-extrabold"
                        : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    {isServicesActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                    )}
                    <span>Services</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="p-1 -mr-1 text-neutral-400 hover:text-white cursor-pointer"
                    aria-label="Toggle Services submenu"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileServicesOpen
                          ? "rotate-180 text-brand-red"
                          : isServicesActive
                          ? "text-brand-red"
                          : "text-neutral-500"
                      }`}
                    />
                  </button>
                </div>

                <AnimatePresence>
                  {mobileServicesOpen && (
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
                        className={`block py-1 font-mono text-xs tracking-wider ${
                          pathname === "/services"
                            ? "text-brand-red font-bold"
                            : "text-brand-accent hover:text-white"
                        }`}
                      >
                        → View All Services
                      </Link>

                      {SERVICE_LINKS.map((service) => {
                        const Icon = service.icon;
                        const isSubActive = pathname === service.href;

                        return (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center justify-between py-2 text-xs font-sans border-b border-neutral-950 transition-colors ${
                              isSubActive
                                ? "text-brand-accent font-semibold"
                                : "text-neutral-400 hover:text-white"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <Icon
                                className={`w-3.5 h-3.5 ${
                                  isSubActive ? "text-brand-red" : "text-neutral-500"
                                }`}
                              />
                              <span>{service.title}</span>
                            </div>
                            {isSubActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                            )}
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Work Accordion */}
              <div
                className={`border-b pb-3 transition-colors ${
                  isWorkActive
                    ? "border-brand-red/40 bg-neutral-900/30 -mx-3 px-3 rounded-xl pt-2"
                    : "border-neutral-900"
                }`}
              >
                <div className="w-full flex items-center justify-between py-2 text-sm font-mono uppercase tracking-widest font-bold">
                  <Link
                    href="/work"
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2 transition-colors ${
                      isWorkActive
                        ? "text-brand-accent font-extrabold"
                        : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    {isWorkActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                    )}
                    <span>Our Work</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileWorkOpen(!mobileWorkOpen)}
                    className="p-1 -mr-1 text-neutral-400 hover:text-white cursor-pointer"
                    aria-label="Toggle Work submenu"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileWorkOpen
                          ? "rotate-180 text-brand-red"
                          : isWorkActive
                          ? "text-brand-red"
                          : "text-neutral-500"
                      }`}
                    />
                  </button>
                </div>

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
                        className={`block py-1 font-mono text-xs tracking-wider ${
                          pathname === "/work"
                            ? "text-brand-red font-bold"
                            : "text-brand-accent hover:text-white"
                        }`}
                      >
                        → View All Projects
                      </Link>

                      {FEATURED_PROJECTS.map((proj) => {
                        const isProjActive = pathname === proj.href;

                        return (
                          <Link
                            key={proj.href}
                            href={proj.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center justify-between py-2 text-xs font-sans border-b border-neutral-950 transition-colors ${
                              isProjActive
                                ? "text-brand-accent font-semibold"
                                : "text-neutral-400 hover:text-white"
                            }`}
                          >
                            <span>{proj.title}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-[9px] font-mono text-neutral-600">
                                {proj.tag}
                              </span>
                              {isProjActive && (
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                              )}
                            </div>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Standard Primary Navigation Links */}
              {PRIMARY_LINKS.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between py-2.5 border-b text-sm font-mono uppercase tracking-widest transition-colors ${
                      isActive
                        ? "text-brand-accent font-bold border-brand-red/30 bg-neutral-900/40 -mx-3 px-3 rounded-lg"
                        : "border-neutral-900 text-neutral-300 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                      )}
                      <span>{link.name}</span>
                    </div>
                    <ArrowUpRight
                      className={`w-3.5 h-3.5 ${
                        isActive ? "text-brand-accent" : "text-neutral-600"
                      }`}
                    />
                  </Link>
                );
              })}

              {/* Contact Link */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between py-2.5 border-b text-sm font-mono uppercase tracking-widest transition-colors ${
                  isContactActive
                    ? "text-brand-accent font-bold border-brand-red/30 bg-neutral-900/40 -mx-3 px-3 rounded-lg"
                    : "border-neutral-900 text-neutral-300 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  {isContactActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                  )}
                  <span>Contact</span>
                </div>
                <ArrowUpRight
                  className={`w-3.5 h-3.5 ${
                    isContactActive ? "text-brand-accent" : "text-neutral-600"
                  }`}
                />
              </Link>
            </div>

            {/* Mobile Footer Area */}
            <div className="pt-6 space-y-4">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex justify-center items-center gap-2 py-3.5 rounded-xl bg-brand-red text-white text-xs font-mono uppercase tracking-widest font-bold crimson-glow"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="grid grid-cols-2 gap-3 pt-2 text-[10px] font-mono text-neutral-500">
                <div className="flex items-center gap-1.5 truncate">
                  <Mail className="w-3 h-3 text-brand-red shrink-0" />
                  <span className="truncate">contact@zuproduction.pk</span>
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