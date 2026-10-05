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
    <div className="pt-20 sm:pt-24 pb-20 sm:pb-28 bg-black text-white select-none">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16 border-b border-surface-border">
        <div className="max-w-3xl">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-brand-red font-bold">
            Capabilities Catalog
          </span>
          <h1 className="font-display text-3xl xs:text-4xl sm:text-6xl font-black uppercase tracking-tight mt-2 sm:mt-3">
            What We Produce
          </h1>
          <p className="mt-4 sm:mt-6 text-neutral-400 text-sm sm:text-lg leading-relaxed font-light">
            Full-spectrum production architecture designed for commercial agility, technical reliability, and broadcast-level presentation.
          </p>
        </div>
      </section>

      {/* Services Breakdown List */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-10 sm:py-16 space-y-8 sm:space-y-16">
        {serviceList.map((srv) => (
          <div
            key={srv.slug}
            id={srv.slug}
            className="p-5 xs:p-6 sm:p-12 rounded-2xl bg-surface/70 border border-surface-border hover:border-neutral-700 transition-colors"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
              {/* Left Column: Title & Overview */}
              <div className="lg:col-span-6 space-y-3 sm:space-y-4">
                <span className="font-mono text-xs sm:text-sm font-bold text-brand-red">
                  PHASE // {srv.id}
                </span>
                <h2 className="font-display text-xl xs:text-2xl sm:text-4xl font-extrabold uppercase text-white leading-tight">
                  {srv.title}
                </h2>
                <p className="text-neutral-400 text-[10px] sm:text-xs uppercase font-mono tracking-wider">
                  {srv.tagline}
                </p>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed pt-1 sm:pt-2 font-light">
                  {srv.overview}
                </p>

                <div className="pt-2 sm:pt-4">
                  <Link
                    href={`/services/${srv.slug}`}
                    className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-5 py-3 sm:py-2.5 rounded-xl sm:rounded-full bg-neutral-900 border border-neutral-700 hover:border-brand-red text-xs uppercase tracking-wider font-semibold text-white transition-colors"
                  >
                    <span>Full Technical Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Sub-Capabilities & Deliverables */}
              <div className="lg:col-span-6 bg-neutral-950/80 border border-neutral-800/80 p-4 xs:p-5 sm:p-6 rounded-xl space-y-5 sm:space-y-6">
                <div>
                  <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3 sm:mb-4 pb-2 border-b border-neutral-800">
                    Core Deliverables
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    {srv.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-neutral-800">
                  <h4 className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-3">
                    Engineering Specs
                  </h4>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                    {srv.technicalSpecs.slice(0, 2).map((spec, idx) => (
                      <div key={idx} className="bg-neutral-900/60 sm:bg-transparent p-2.5 sm:p-0 rounded-lg sm:rounded-none border border-neutral-800/60 sm:border-0">
                        <span className="text-[10px] font-mono text-neutral-500 block uppercase">
                          {spec.label}
                        </span>
                        <span className="text-xs text-neutral-300 font-medium block mt-0.5 truncate">
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