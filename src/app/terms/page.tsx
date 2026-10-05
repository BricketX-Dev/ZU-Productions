// src/app/terms/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | ZU PRODUCTION",
  description: "Standard production terms and website conditions for ZU Production.",
};

export default function TermsPage() {
  return (
    <div className="pt-20 sm:pt-24 pb-20 sm:pb-28 bg-black text-white min-h-screen select-none">
      {/* Breadcrumb Bar */}
      <div className="max-w-4xl mx-auto px-5 sm:px-6 py-4 sm:py-6 border-b border-surface-border">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-6 py-10 sm:py-16">
        {/* Header */}
        <div className="space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-surface">
            <FileText className="w-3.5 h-3.5 text-brand-red shrink-0" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
              Studio Agreement
            </span>
          </div>
          <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Terms of Service
          </h1>
          <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
            Last Updated: October 2026
          </p>
        </div>

        {/* Terms Copy */}
        <div className="space-y-8 sm:space-y-10 text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
          <section className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl font-bold uppercase text-white tracking-wide">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing this website or engaging ZU Production for commercial video, event production, broadcast, or post-production services, you agree to comply with and be bound by these Terms of Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl font-bold uppercase text-white tracking-wide">
              2. Production Estimates & Commissioning
            </h2>
            <p>
              All initial estimates, timelines, and proposals provided via our website or email are preliminary until formalized through an official production agreement, statement of work (SOW), or written confirmation.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-400 text-xs sm:text-sm">
              <li>Dates and equipment crew packages are reserved only upon contract execution and deposit receipt.</li>
              <li>Changes to shooting schedules, locations, or scope after sign-off may incur additional crew, logistics, or rental adjustments.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl font-bold uppercase text-white tracking-wide">
              3. Intellectual Property & Usage Rights
            </h2>
            <p>
              Ownership and licensing rights to finalized masters (commercial films, music videos, broadcast feeds) are governed by the specific project contract:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-400 text-xs sm:text-sm">
              <li>Full delivery of agreed commercial usage rights transfers upon receipt of final project payment.</li>
              <li>Unless explicitly agreed otherwise in a Non-Disclosure Agreement (NDA), ZU Production retains the non-exclusive right to display completed works and behind-the-scenes material within its portfolio and promotional reels.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl font-bold uppercase text-white tracking-wide">
              4. Client Deliverables & Approvals
            </h2>
            <p>
              Projects proceed through defined milestones (Pre-Production, Principal Photography, Offline Edit, Color Grade, Master Delivery). Client feedback must be provided within agreed revision windows to prevent delivery delays. Additional revisions outside the contracted rounds are billed at standard studio hourly rates.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl font-bold uppercase text-white tracking-wide">
              5. Website Intellectual Property
            </h2>
            <p>
              All content on this website—including video showreels, photography, brand marks, layouts, and typography—is the property of ZU Production and protected by intellectual property laws. Reproduction without prior written consent is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl font-bold uppercase text-white tracking-wide">
              6. Governing Law
            </h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the Islamic Republic of Pakistan, without regard to conflict of law principles.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl font-bold uppercase text-white tracking-wide">
              7. Inquiries
            </h2>
            <p>
              For legal inquiries or production contracts, contact us at:
            </p>
            <div className="p-4 sm:p-5 rounded-xl bg-surface border border-surface-border font-mono text-xs text-neutral-300 space-y-1">
              <p>Email: contact@zuproduction.pk</p>
              <p>ZU Production — Karachi, Pakistan</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}