// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, MapPin, Film, ShieldCheck } from "lucide-react";

const FOOTER_CAPABILITIES = [
  { name: "Film & Commercials (TVCs/DVCs)", href: "/services/film-video-production" },
  { name: "Event Staging & Live Production", href: "/services/event-production" },
  { name: "Broadcast & Multi-Camera Setup", href: "/services/broadcast-production" },
  { name: "Digital Media & High-Impact Content", href: "/services/digital-content" },
  { name: "Post-Production & DaVinci Grading", href: "/services/post-production" },
  { name: "Art Direction & Production Design", href: "/services/production-design" },
];

const FOOTER_NAVIGATION = [
  { name: "Selected Works", href: "/work" },
  { name: "Our Methodology", href: "/#workflow" },
  { name: "Studio Philosophy", href: "/about" },
  { name: "Production Collective", href: "/about#team" },
  { name: "Initiate Production RFP", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-surface-border text-neutral-400 font-sans text-xs relative overflow-hidden">
      {/* Subtle Top Linear Light Sheen */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Col 1: Studio Identity & Overview (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
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

            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm font-light">
              Pakistan-based creative production house delivering end-to-end visual execution across film, commercial television, large-scale events, and live broadcast pipelines.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-surface border border-surface-border font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping" />
                <span>Operating Globally // PK, UAE, UK, SG</span>
              </div>
            </div>
          </div>

          {/* Col 2: Capabilities Directory (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-white font-bold">
              Production Capabilities
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_CAPABILITIES.map((cap) => (
                <li key={cap.name}>
                  <Link
                    href={cap.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-200 block"
                  >
                    {cap.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Studio Index (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-white font-bold">
              Studio Index
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_NAVIGATION.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-200 block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Dispatch Lines & Booking Hub (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-white font-bold">
              Direct Production Wire
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@zuproduction.com"
                className="group p-3 rounded-xl bg-surface/70 border border-surface-border hover:border-brand-red/50 transition-colors flex items-center gap-3 block"
              >
                <div className="p-2 rounded-lg bg-neutral-900 text-brand-accent">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block tracking-wider">
                    Executive RFP Inquiries
                  </span>
                  <span className="text-xs text-white font-medium truncate block group-hover:text-brand-accent transition-colors">
                    contact@zuproduction.com
                  </span>
                </div>
              </a>

              <div className="p-3 rounded-xl bg-surface/70 border border-surface-border flex items-start gap-3">
                <div className="p-2 rounded-lg bg-neutral-900 text-brand-accent shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block tracking-wider">
                    Main Production Base
                  </span>
                  <span className="text-xs text-neutral-300">
                    Karachi, Pakistan (Deploying Worldwide)
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Sub-Footer Legal & Timecode Rail */}
      <div className="border-t border-neutral-900 bg-neutral-950/70 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono text-neutral-500">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} ZU PRODUCTION. ALL RIGHTS RESERVED.</span>
            <span className="hidden md:inline text-neutral-700">|</span>
            <span className="hidden md:inline">CINEMATIC RIGOR & BROADCAST INTEGRITY</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-neutral-300 transition-colors">
              Standard Terms of Production
            </Link>
            <span>•</span>
            <a href="#top" className="text-neutral-400 hover:text-white transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}