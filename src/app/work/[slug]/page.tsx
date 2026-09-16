// src/app/work/[slug]/page.tsx
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Play, Film, CheckCircle2, Clock, VideoOff } from "lucide-react";

interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  category: string;
  location: string;
  video: string;
  deliverables: string[];
  synopsis: string;
  execution: string;
  techSpecs: { label: string; value: string }[];
}

export const CASE_STUDIES: Record<string, CaseStudy> = {
  "ahmed-bukhatir": {
    slug: "ahmed-bukhatir",
    title: "Official Music Video Production",
    client: "Ahmed Bukhatir (UAE)",
    category: "Music Video / International",
    location: "Sharjah, UAE / Karachi, PK",
    video: "/videos/projects/ab.mp4",
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
    title: "Hajj & Umrah Documentary & Campaign",
    client: "Universal Brothers",
    category: "Commercial / Documentary",
    location: "KSA / Pakistan",
    video: "/videos/projects/universal-brothers.mp4",
    deliverables: ["Main Commercial Film", "Documentary Feature", "Social Campaign Suite"],
    synopsis:
      "A complete commercial and documentary campaign capturing the spiritual journey of pilgrimage with authentic narrative sensitivity and production scale.",
    execution:
      "Agile cinematic camera deployment capturing real-time documentary environments paired with controlled, scripted commercial sequences.",
    techSpecs: [
      { label: "Format", value: "4K ProRes 422 HQ" },
      { label: "Audio", value: "Stereo Broadcast Mastered (-14 LUFS)" },
      { label: "Delivery", value: "Television & Digital Channels" },
    ],
  },
"studio-podcast-series": {
  slug: "studio-podcast-series",
  title: "The Studio Sessions: Episodic Show & Podcast",
  client: "Studio Series // Featured on BOL Media Network",
  category: "Episodic Show / Studio Podcast",
  location: "Karachi, Pakistan",
  video: "/videos/projects/podcast.mp4",
  deliverables: [
    "Full-Length 4K Multi-Cam Video Master",
    "Dynamic Short-Form Reel & TikTok Cuts (9:16)",
    "Clean Broadcast Audio & Multi-Track Stems",
    "On-Set Lighting Design & Atmospheric Visual Styling",
  ],
  synopsis:
    "An intimate, multi-camera studio series created to bridge deep-form conversations with broadcast television polish. Built for digital streaming audiences and televised segment syndication across BOL Network.",
  execution:
    "Deployed a 4-camera setup with continuous tracking, directional soft key lighting, dedicated microphone channels, and real-time vision mixing for rapid turnaround post-production.",
  techSpecs: [
    { label: "Camera Package", value: "4-Camera Cinema Rig (4K ISO Capture)" },
    { label: "Audio Setup", value: "Multi-Track Shure Studio Microphones" },
    { label: "Mastering Standards", value: "Optimized for YouTube & Broadcast Streams" },
  ],
},
  "ptpl-anthem": {
    slug: "ptpl-anthem",
    title: "PTPL Anthem & Promotional Campaign",
    client: "Pakistan Tape Ball Premier League",
    category: "Sports & Entertainment",
    location: "Pakistan",
    video: "/videos/projects/ptpl.mp4",
    deliverables: ["Official League Anthem Film", "Stadium Visual Loops", "Broadcast Promos"],
    synopsis:
      "A high-energy sports anthem capturing the passion, speed, and grassroots culture of street and tournament tape-ball cricket.",
    execution:
      "High-speed 120fps camera rigs, night floodlight lighting packages, dynamic gimbal tracking shots, and rhythmic sound design.",
    techSpecs: [
      { label: "Format", value: "4K DCI 120 FPS High-Speed" },
      { label: "Color Science", value: "Log-C High Dynamic Range" },
      { label: "Mix", value: "Stadium Stereo & Surround Mix" },
    ],
  },
  "international-tvcs": {
    slug: "international-tvcs",
    title: "International Commercial TVC Suite",
    client: "Singapore & Malaysia Commercial Accounts",
    category: "Commercial TVCs / DVCs",
    location: "Singapore / Malaysia / Pakistan",
    video: "/videos/projects/tvc.mp4",
    deliverables: ["30s Master Commercial Cuts", "15s Digital Cutdowns", "Social 9:16 Re-frames"],
    synopsis:
      "Turnkey commercial advertising execution adhering to the strict technical broadcast standards and aesthetic demands of Southeast Asian regional markets.",
    execution:
      "Strict storyboard adherence, studio product staging, tabletop motion control, and high-frequency color grading passes.",
    techSpecs: [
      { label: "Format", value: "4K ProRes 4444" },
      { label: "Broadcast Deliverable", value: "EBU R128 Compliant" },
      { label: "Finishing", value: "DaVinci Resolve Studio" },
    ],
  },
  "naeem-foundation": {
    slug: "naeem-foundation",
    title: "Humanitarian Documentary Campaign",
    client: "Naeem Foundation (UK)",
    category: "Social Impact / Documentary",
    location: "United Kingdom / Pakistan",
    video: "/videos/projects/naeem-foundation.mp4",
    deliverables: ["Documentary Short Film", "Social Campaign Reels", "Donor Appeal Visuals"],
    synopsis:
      "Impact-focused documentary storytelling capturing humanitarian aid distribution, community welfare initiatives, and beneficiary voices.",
    execution:
      "Natural-light on-location documentary techniques, intimate interview setups, and sensitive observational cinematography.",
    techSpecs: [
      { label: "Format", value: "4K RAW Cinema" },
      { label: "Audio", value: "Dual-System 32-bit Float Recording" },
      { label: "Deliverables", value: "YouTube Long-form + Instagram Suites" },
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
    <div className="pt-24 pb-28 bg-black text-white min-h-screen">
      {/* Navigation Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-6 border-b border-surface-border">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Selected Works</span>
        </Link>
      </div>

      {/* Header Info */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-b border-surface-border">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-surface">
            <Film className="w-3 h-3 text-brand-red" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
              {project.category}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 pt-2 font-mono text-xs text-neutral-400">
            <div>
              <span className="text-neutral-600 block text-[10px] uppercase">Client</span>
              <span className="text-neutral-200 font-semibold">{project.client}</span>
            </div>
            <div className="h-6 w-px bg-neutral-800 hidden sm:block" />
            <div>
              <span className="text-neutral-600 block text-[10px] uppercase">Territory</span>
              <span className="text-neutral-200 font-semibold">{project.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Video Master Stage */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="relative aspect-video w-full rounded-2xl border border-surface-border bg-neutral-950 overflow-hidden shadow-2xl flex items-center justify-center">
          {project.video ? (
            <video
              src={project.video}
              controls
              playsInline
              className="w-full h-full object-contain bg-black"
            />
          ) : (
            /* Standby UI for projects where video is being archived or edited */
            <div className="text-center space-y-4 p-8">
              <div className="w-14 h-14 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto text-neutral-500">
                <VideoOff className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                  Master Reel In Studio Archive
                </h3>
                <p className="text-neutral-400 text-xs max-w-sm mx-auto font-mono">
                  Full broadcast rushes and archival cut available upon private stakeholder inquiry.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-surface border border-neutral-700 hover:border-brand-red text-neutral-300 hover:text-white text-xs font-mono uppercase tracking-wider transition-colors"
                >
                  Request Private Screening Link
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Narrative & Specifications Grid */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Narrative Breakdown */}
          <div className="lg:col-span-8 space-y-10">
            <div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white mb-3">
                Project Synopsis
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
                {project.synopsis}
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white mb-3">
                Technical Execution
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
                {project.execution}
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white mb-4">
                Delivered Assets
              </h3>
              <ul className="space-y-3">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Studio Metadata Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-xl bg-surface border border-surface-border space-y-5">
              <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400 pb-3 border-b border-neutral-800 font-bold">
                Camera & Master Standards
              </h4>

              <div className="space-y-3">
                {project.techSpecs.map((spec, i) => (
                  <div key={i} className="pb-2">
                    <span className="text-[10px] font-mono uppercase text-neutral-500 block">
                      {spec.label}
                    </span>
                    <span className="text-xs text-neutral-200 font-semibold">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <Link
                  href="/contact"
                  className="w-full inline-flex justify-center items-center py-3 rounded-lg bg-brand-red hover:bg-brand-darkRed text-white text-xs font-mono uppercase tracking-widest font-bold transition-colors crimson-glow"
                >
                  Commission Similar Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}