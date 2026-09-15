// src/app/services/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { SERVICES_DETAILED } from "@/data/servicesData";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Capabilities | ZU PRODUCTION",
  description:
    "Explore our complete production suite: Film & Commercials, Event Production, Broadcast, Post-Production, and Digital Content.",
};

export default function ServicesPage() {
  const serviceList = Object.values(SERVICES_DETAILED);

  return (
    <div className="pt-24 pb-28 bg-black text-white">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-b border-surface-border">
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-bold">
            Capabilities Catalog
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight mt-3">
            What We Produce
          </h1>
          <p className="mt-6 text-neutral-400 text-base sm:text-lg leading-relaxed">
            Full-spectrum production architecture designed for commercial agility, technical reliability, and broadcast-level presentation.
          </p>
        </div>
      </section>

      {/* Services Breakdown List */}
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {serviceList.map((srv) => (
          <div
            key={srv.slug}
            id={srv.slug}
            className="p-8 sm:p-12 rounded-2xl bg-surface/70 border border-surface-border hover:border-neutral-700 transition-colors"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Title & Overview */}
              <div className="lg:col-span-6 space-y-4">
                <span className="font-mono text-sm font-bold text-brand-red">
                  PHASE // {srv.id}
                </span>
                <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase text-white">
                  {srv.title}
                </h2>
                <p className="text-neutral-400 text-xs uppercase font-mono tracking-wider">
                  {srv.tagline}
                </p>
                <p className="text-neutral-300 text-sm leading-relaxed pt-2">
                  {srv.overview}
                </p>

                <div className="pt-4">
                  <Link
                    href={`/services/${srv.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 border border-neutral-700 hover:border-brand-red text-xs uppercase tracking-wider font-semibold text-white transition-colors"
                  >
                    <span>Full Technical Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-accent" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Sub-Capabilities & Deliverables */}
              <div className="lg:col-span-6 bg-neutral-950/80 border border-neutral-800/80 p-6 rounded-xl space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4 pb-2 border-b border-neutral-800">
                    Core Deliverables
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {srv.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-neutral-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-neutral-800">
                  <h4 className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-3">
                    Engineering Specs
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {srv.technicalSpecs.slice(0, 2).map((spec, idx) => (
                      <div key={idx}>
                        <span className="text-[10px] font-mono text-neutral-500 block">
                          {spec.label}
                        </span>
                        <span className="text-xs text-neutral-300 font-medium">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}