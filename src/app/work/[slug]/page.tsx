// src/app/work/[slug]/page.tsx
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Play, Calendar, Film, MapPin, CheckCircle2 } from "lucide-react";

interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  category: string;
  location: string;
  deliverables: string[];
  synopsis: string;
  execution: string;
  techSpecs: { label: string; value: string }[];
}

const CASE_STUDIES: Record<string, CaseStudy> = {
  "ahmed-bukhatir": {
    slug: "ahmed-bukhatir",
    title: "Official Music Video Production",
    client: "Ahmed Bukhatir (UAE)",
    category: "Music Video / International",
    location: "Sharjah, UAE / Karachi, PK",
    deliverables: ["Official Music Video (4K)", "Behind the Scenes Reel", "Teaser Cuts"],
    synopsis:
      "Directed and mounted the official music video production for internationally celebrated artist Ahmed Bukhatir, harmonizing cultural resonance with high-contrast cinematic visual depth.",
    execution:
      "Engineered multi-location lighting packages, anamorphic lens pairings, and comprehensive post-production grading to deliver an internationally compliant master output.",
    techSpecs: [
      { label: "Format", value: "DCI 4K RAW" },
      { label: "Aspect Ratio", value: "2.39:1 Anamorphic Scope" },
      { label: "Mastering", value: "Rec.709 & DCI-P3 Color Space" },
    ],
  },
  "universal-brothers": {
    slug: "universal-brothers",
    title: "Hajj & Umrah Documentary & Commercial Campaign",
    client: "Universal Brothers",
    category: "Commercial / Documentary",
    location: "KSA / Pakistan",
    deliverables: ["Main Commercial Film", "Documentary Feature", "Social Campaign Suite"],
    synopsis:
      "A complete commercial and documentary campaign capturing the spiritual journey of pilgrimage with authentic narrative sensitivity and production scale.",
    execution:
      "Agile cinematic camera deployment capturing real-time documentary environments paired with controlled, scripted commercial sequences.",
    techSpecs: [
      { label: "Format", value: "4K ProRes" },
      { label: "Audio", value: "Stereo Broadcast Mastered" },
      { label: "Delivery", value: "Television & Digital Channels" },
    ],
  },
  "jamia-binoria": {
    slug: "jamia-binoria",
    title: "Annual Convocation Live Event Staging",
    client: "Jamia Binoria",
    category: "Event Production",
    location: "Karachi, Pakistan",
    deliverables: ["Turnkey Stage Design", "LED Wall Systems", "Live Multi-Cam Switching Feed"],
    synopsis:
      "Comprehensive on-ground technical event management, stage architecture, and multi-camera live broadcast coordination for an annual convocation gathering thousands of attendees.",
    execution:
      "Installed high-refresh rate LED walls, balanced line-array audio reinforcement for high-reverberation spaces, and coordinated a synchronized 6-camera live switching team.",
    techSpecs: [
      { label: "Cameras", value: "6-Camera Fiber Optic Setup" },
      { label: "Display", value: "P2.9 Ultra-HD LED Surface" },
      { label: "Feed", value: "Zero-Latency Live IMAG" },
    ],
  },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = CASE_STUDIES[slug];
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | ZU PRODUCTION`,
    description: project.synopsis,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = CASE_STUDIES[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-24 pb-28 bg-black text-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-6 border-b border-surface-border">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Selected Works</span>
        </Link>
      </div>

      {/* Hero Meta */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-b border-surface-border">
        <div className="max-w-4xl space-y-4">
          <span className="text-brand-accent font-mono text-xs uppercase tracking-widest block">
            {project.category}
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight">
            {project.title}
          </h1>
          <p className="text-neutral-400 text-lg font-mono">Client // {project.client}</p>
        </div>
      </section>

      {/* Cinematic Preview Stage */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="relative aspect-[21/9] w-full bg-neutral-950 rounded-2xl border border-surface-border overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-neutral-950 to-neutral-900" />
          <div className="relative z-10 w-16 h-16 rounded-full bg-brand-red flex items-center justify-center text-white crimson-glow cursor-pointer hover:scale-110 transition-transform">
            <Play className="w-6 h-6 fill-white ml-0.5" />
          </div>
          <div className="absolute bottom-6 left-6 font-mono text-[10px] uppercase text-neutral-400">
            [ 4K MASTER PREVIEW // REEL AVAILABLE ]
          </div>
        </div>
      </section>

      {/* Detailed Overview */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-8">
            <div>
              <h3 className="font-display text-xl font-bold uppercase mb-3">Project Narrative</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">{project.synopsis}</p>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold uppercase mb-3">Production Execution</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">{project.execution}</p>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold uppercase mb-4">Key Deliverables</h3>
              <ul className="space-y-2.5">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="p-6 rounded-xl bg-surface border border-surface-border space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400 pb-2 border-b border-neutral-800">
                Technical Specifications
              </h4>
              {project.techSpecs.map((spec, i) => (
                <div key={i} className="pb-2">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block">
                    {spec.label}
                  </span>
                  <span className="text-xs text-neutral-200 font-semibold">{spec.value}</span>
                </div>
              ))}
              <div className="pt-4 border-t border-neutral-800">
                <Link
                  href="/contact"
                  className="w-full inline-flex justify-center items-center py-3 rounded-lg bg-brand-red text-white text-xs font-mono uppercase tracking-widest font-bold"
                >
                  Commission Similar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}