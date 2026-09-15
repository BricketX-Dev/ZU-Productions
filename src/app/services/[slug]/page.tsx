// src/app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { SERVICES_DETAILED } from "@/data/servicesData";
import { CheckCircle2, ArrowLeft, ArrowRight, Shield } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(SERVICES_DETAILED).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DETAILED[slug];
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | ZU PRODUCTION`,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES_DETAILED[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-24 pb-28 bg-black text-white">
      {/* Navigation Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-6 border-b border-surface-border">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Capabilities</span>
        </Link>
      </div>

      {/* Main Header */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-b border-surface-border">
        <div className="max-w-4xl">
          <span className="font-mono text-xs text-brand-red font-bold uppercase tracking-widest">
            Specialized Capability // {service.id}
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight mt-3">
            {service.title}
          </h1>
          <p className="mt-4 text-brand-accent font-mono text-sm tracking-wider uppercase">
            {service.tagline}
          </p>
          <p className="mt-6 text-neutral-300 text-base sm:text-lg leading-relaxed">
            {service.overview}
          </p>
        </div>
      </section>

      {/* Breakdown Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Detailed Lists */}
          <div className="lg:col-span-7 space-y-10">
            {service.subCapabilities.map((sub, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-surface/60 border border-surface-border"
              >
                <h3 className="font-display text-xl font-bold uppercase text-white mb-6">
                  {sub.title}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {sub.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Sidebar Technical Package */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-xl bg-surface border border-surface-border">
              <div className="flex items-center gap-2 pb-4 mb-6 border-b border-neutral-800">
                <Shield className="w-4 h-4 text-brand-red" />
                <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                  Technical Specifications
                </h3>
              </div>

              <div className="space-y-4">
                {service.technicalSpecs.map((spec, idx) => (
                  <div key={idx} className="pb-3 border-b border-neutral-900 last:border-0">
                    <span className="text-[10px] font-mono uppercase text-neutral-500 block">
                      {spec.label}
                    </span>
                    <span className="text-sm font-semibold text-neutral-200">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-lg bg-brand-red hover:bg-brand-darkRed text-white text-xs uppercase tracking-widest font-semibold transition-all crimson-glow"
                >
                  <span>Book This Capability</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}