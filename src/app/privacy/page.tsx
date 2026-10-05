// src/app/privacy/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | ZU PRODUCTION",
  description: "Privacy policy and client data handling practices at ZU Production.",
};

export default function PrivacyPage() {
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
            <Shield className="w-3.5 h-3.5 text-brand-red shrink-0" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
              Legal & Data Policy
            </span>
          </div>
          <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
            Last Updated: October 2026
          </p>
        </div>

        {/* Legal Copy */}
        <div className="space-y-8 sm:space-y-10 text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
          <section className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl font-bold uppercase text-white tracking-wide">
              1. Overview
            </h2>
            <p>
              ZU Production (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates as a creative production and broadcast studio based in Karachi, Pakistan, providing commercial filmmaking, live event coverage, and post-production services. This Privacy Policy details how we collect, store, and process information when you interact with our website or submit project briefs.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl font-bold uppercase text-white tracking-wide">
              2. Information We Collect
            </h2>
            <p>
              When you submit a project enquiry or get in touch with our production desk, we collect details necessary to evaluate and schedule your production, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-400 text-xs sm:text-sm">
              <li>Contact details such as your name, corporate email address, and phone number.</li>
              <li>Company or organization name and territorial location.</li>
              <li>Production brief parameters, including project timelines, scale, and technical requirements.</li>
              <li>Basic web telemetry and traffic metrics collected automatically via standard browser cookies.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl font-bold uppercase text-white tracking-wide">
              3. How Your Information Is Used
            </h2>
            <p>
              We use collected information solely for genuine business and operational purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-400 text-xs sm:text-sm">
              <li>To evaluate project scopes, prepare crew schedules, and deliver production proposals.</li>
              <li>To communicate with you regarding shoot logistics, deliverables, and billing.</li>
              <li>To maintain website reliability, security, and interface responsiveness.</li>
            </ul>
            <p className="text-neutral-400 text-xs sm:text-sm">
              We never sell, lease, or monetize client details or project information to third-party data brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl font-bold uppercase text-white tracking-wide">
              4. Media & Footage Confidentiality
            </h2>
            <p>
              All proprietary project scripts, raw video rushes, unreleased cuts, and production assets shared with our studio are treated as strictly confidential. Client rushes are stored on secured on-premise local arrays and encrypted cloud storage for production handling only.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl font-bold uppercase text-white tracking-wide">
              5. Third-Party Services
            </h2>
            <p>
              Our website may utilize trusted service providers (such as hosting infrastructure, video CDNs, and email delivery platforms) to facilitate operations. These providers process data strictly on our behalf under standardized security protocols.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl font-bold uppercase text-white tracking-wide">
              6. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or wish to request data updates, please contact our desk:
            </p>
            <div className="p-4 sm:p-5 rounded-xl bg-surface border border-surface-border font-mono text-xs text-neutral-300 space-y-1">
              <p>Email: contact@zuproduction.pk</p>
              <p>Studio: Karachi, Pakistan</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}