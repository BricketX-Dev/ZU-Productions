// src/components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ChevronUp } from "lucide-react";

const FOOTER_SERVICES = [
  { name: "Film & Commercials", href: "/services/film-video-production" },
  { name: "Event Production", href: "/services/event-production" },
  { name: "Live Broadcast", href: "/services/broadcast-production" },
  { name: "Social & Digital Media", href: "/services/digital-content" },
  { name: "Editing & Post-Production", href: "/services/post-production" },
  { name: "Set & Art Design", href: "/services/production-design" },
];

const FOOTER_LINKS = [
  { name: "Our Work", href: "/work" },
  { name: "How We Work", href: "/#workflow" },
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/about#team" },
  { name: "Contact Us", href: "/contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-surface-border text-neutral-400 font-sans text-xs relative overflow-hidden select-none">
      {/* Subtle Top Red Accent Line */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-brand-red/40 to-transparent" />

      {/* Main Directory */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 pt-12 sm:pt-20 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-8">
          
          {/* Col 1: Studio Identity */}
          <div className="lg:col-span-4 space-y-5 sm:space-y-6">
            <Link href="/" className="inline-block group">
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

            {/* Tagline */}
            <p className="text-white text-sm sm:text-base font-display font-bold uppercase tracking-tight">
              Creative Production. Powerful Visuals. Meaningful Stories.
            </p>

            {/* Clean Service Categories */}
            <div className="space-y-1.5 font-mono text-[11px] text-neutral-400 leading-relaxed pt-1">
              <p className="text-neutral-300">
                Corporate Films <span className="text-neutral-700">|</span> Commercials <span className="text-neutral-700">|</span> Documentaries
              </p>
              <p className="text-neutral-300">
                Events <span className="text-neutral-700">|</span> Live Streaming <span className="text-neutral-700">|</span> Digital Content
              </p>
              <p className="text-neutral-300">
                Multi-Camera Setup <span className="text-neutral-700">|</span> Post-Production
              </p>
            </div>

            {/* Operational Location Badge */}
            <div className="pt-1 sm:pt-2">
              <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 rounded-lg bg-surface border border-surface-border font-mono text-[9px] sm:text-[10px] text-neutral-400 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping shrink-0" />
                <span className="truncate">Working Globally | PK, UAE, UK, SG</span>
              </div>
            </div>
          </div>

          {/* Mobile 2-Column Section: Services & Navigation */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:contents">
            {/* Services List */}
            <div className="lg:col-span-3 space-y-3 sm:space-y-4">
              <h4 className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-white font-bold">
                Services
              </h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs">
                {FOOTER_SERVICES.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-neutral-400 hover:text-white transition-colors duration-200 block py-0.5 leading-snug"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 space-y-3 sm:space-y-4">
              <h4 className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-white font-bold">
                Quick Links
              </h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs">
                {FOOTER_LINKS.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-neutral-400 hover:text-white transition-colors duration-200 block py-0.5 leading-snug"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-white font-bold">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@zuproduction.pk"
                className="group p-3 rounded-xl bg-surface/70 border border-surface-border hover:border-brand-red/50 transition-colors flex items-center gap-3 block"
              >
                <div className="p-2 rounded-lg bg-neutral-900 text-brand-accent group-hover:bg-brand-red group-hover:text-white transition-colors shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden min-w-0">
                  <span className="text-[9px] sm:text-[10px] font-mono uppercase text-neutral-500 block tracking-wider">
                    General Inquiries
                  </span>
                  <span className="text-xs text-white font-medium truncate block group-hover:text-brand-accent transition-colors">
                    contact@zuproduction.pk
                  </span>
                </div>
              </a>

              <div className="p-3 rounded-xl bg-surface/70 border border-surface-border flex items-start gap-3">
                <div className="p-2 rounded-lg bg-neutral-900 text-brand-accent shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] sm:text-[10px] font-mono uppercase text-neutral-500 block tracking-wider">
                    Studio Location
                  </span>
                  <span className="text-xs text-neutral-300 block leading-snug">
                    Karachi, Pakistan (Available Worldwide)
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-900 bg-neutral-950/80 py-5 sm:py-6 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] sm:text-[11px] font-mono text-neutral-500">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} ZU PRODUCTION. ALL RIGHTS RESERVED.</span>
            <span className="hidden md:inline text-neutral-700">|</span>
            <span className="hidden md:inline">FILM & BROADCAST PRODUCTION</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/privacy" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-neutral-700">•</span>
            <Link href="/terms" className="hover:text-neutral-300 transition-colors">
              Terms of Service
            </Link>
            <span className="text-neutral-700">•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}