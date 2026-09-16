// src/data/content.ts
import { LucideIcon, Film, Video, Tv, Smartphone, Sparkles, Palette } from "lucide-react";

export interface BrandConfig {
  name: string;
  tagline: string;
  location: string;
  description: string;
  contactEmail: string;
  headquarters: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  href: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  items: string[];
}

export interface WorkflowStep {
  step: string;
  name: string;
  desc: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  client: string;
  scope: string;
  category: "Music Video" | "Commercial" | "Event" | "Documentary" | "Sports" | "Digital Content";
  video: string;
  aspectRatio: string;
  resolution: string;
  featured?: boolean;
}

export interface TeamMember {
  name: string;
  title: string;
  roleTag: "DIRECTION" | "PRODUCTION" | "ART DEPT" | "EVENT" | "POST-PROD" | "DIGITAL";
}

export interface ClientBrand {
  name: string;
  src: string;
  category: string;
}

export const BRAND: BrandConfig = {
  name: "ZU Production",
  tagline: "Creative Production. Powerful Visuals. Meaningful Stories.",
  location: "Pakistan-based Creative Production Company",
  description:
    "Delivering integrated visual solutions across film, television commercials, corporate communication, high-profile events, digital media, live broadcast pipelines, and master post-production.",
  contactEmail: "contact@zuproduction.com",
  headquarters: "Karachi, Pakistan (Deploying Worldwide)",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "01",
    slug: "film-video-production",
    href: "/services/film-video-production",
    title: "Film & Video Production",
    desc: "Corporate profile films, institutional videos, CEO & leadership features, commercials (TVCs/DVCs), and interview-led or corporate documentaries.",
    icon: Film,
    items: ["Corporate Films", "TVCs & DVCs", "Documentaries", "Brand Stories"],
  },
  {
    id: "02",
    slug: "event-production",
    href: "/services/event-production",
    title: "Event Management & Production",
    desc: "End-to-end event execution: stage architecture, professional audio, intelligent lighting, LED walls, multi-camera capture, and post-event highlight reels.",
    icon: Video,
    items: ["Conferences", "Award Ceremonies", "Stage Design", "AV & Lighting"],
  },
  {
    id: "03",
    slug: "digital-content",
    href: "/services/digital-content",
    title: "Digital Content Production",
    desc: "Content tailored for social media behavior: high-impact Reels, Shorts, YouTube long-form, digital commercials, podcasts, and digital campaigns.",
    icon: Smartphone,
    items: ["Reels & Shorts", "Podcasts", "Branded Series", "Campaign Creatives"],
  },
  {
    id: "04",
    slug: "broadcast-production",
    href: "/services/broadcast-production",
    title: "Multi-Camera & Broadcast",
    desc: "Large-scale multi-camera direction, live switching, broadcast-grade camera packages, communication systems, and professional live-crew coordination.",
    icon: Tv,
    items: ["Live Switching", "Multi-Cam Direction", "Broadcast Crew", "Convocations"],
  },
  {
    id: "05",
    slug: "post-production",
    href: "/services/post-production",
    title: "Post-Production & AI Workflows",
    desc: "High-end editing, master color grading, motion graphics, sound design, visual effects, and selective AI-assisted conceptual visualization.",
    icon: Sparkles,
    items: ["Color Grading", "VFX & Motion", "Sound Mastering", "AI Visual R&D"],
  },
  {
    id: "06",
    slug: "production-design",
    href: "/services/production-design",
    title: "Production Design & Art Direction",
    desc: "Visual world-building: custom set design, prop curation, atmospheric lighting palettes, composition, and visual aesthetics aligned to narrative.",
    icon: Palette,
    items: ["Set Design", "Art Direction", "Styling & Props", "Visual Identity"],
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  { step: "01", name: "Discover", desc: "Aligning on goals, audience, and creative intent." },
  { step: "02", name: "Develop", desc: "Treatment scripting, storyboards, and aesthetic direction." },
  { step: "03", name: "Plan", desc: "Pre-production, logistics, casting, and tech crew scouting." },
  { step: "04", name: "Produce", desc: "Cinematography, direction, lighting, and stage execution." },
  { step: "05", name: "Finish", desc: "Editing, color grading, sound design, and VFX polish." },
  { step: "06", name: "Deliver", desc: "Platform-specific rendering and final master delivery." },
];

export const PROJECTS: ProjectItem[] = [
  {
    slug: "ahmed-bukhatir",
    title: "Ahmed Bukhatir",
    client: "Ahmed Bukhatir (UAE)",
    scope: "Official Music Video Production",
    category: "Music Video",
    video: "/videos/projects/ab.mp4",
    aspectRatio: "2.39:1 Scope",
    resolution: "4K DCI RAW",
    featured: true,
  },
  {
    slug: "universal-brothers",
    title: "Universal Brothers",
    client: "Universal Brothers",
    scope: "Hajj & Umrah Documentary & Campaign",
    category: "Commercial",
    video: "/videos/projects/universal-brothers.mp4",
    aspectRatio: "16:9 Cinema",
    resolution: "4K ProRes",
    featured: true,
  },
{
  slug: "studio-podcast-series",
  title: "The Studio Sessions // Digital Show",
  client: "Original Studio Production (in collab with BOL Media)",
  scope: "Multi-Camera Episodic Podcast & Live Broadcast",
  category: "Digital Content", // or "Commercial" / "Event"
  video: "/videos/projects/podcast.mp4",
  aspectRatio: "16:9 Master / 9:16 Vertical",
  resolution: "4K Multi-Cam / ISO Feeds",
  featured: true,
},
  {
    slug: "ptpl-anthem",
    title: "Pakistan Tape Ball Premier League",
    client: "PTPL",
    scope: "Official Sports Anthem & Campaign",
    category: "Sports",
    video: "/videos/projects/ptpl.mp4",
    aspectRatio: "2.35:1 Anamorphic",
    resolution: "4K RAW",
  },
  {
    slug: "international-tvcs",
    title: "TVCs & DVCs Commercial Suite",
    client: "Singapore & Malaysia Commercial Accounts",
    scope: "Commercial Assignments (Cross-Border)",
    category: "Commercial",
    video: "/videos/projects/tvc.mp4",
    aspectRatio: "16:9 / 9:16 Suite",
    resolution: "4K Mastered",
  },
  {
    slug: "naeem-foundation",
    title: "Naeem Foundation",
    client: "Naeem Foundation (UK)",
    scope: "UK-Based NGO Awareness Campaign",
    category: "Documentary",
    video: "/videos/projects/naeem-foundation.mp4",
    aspectRatio: "16:9 Documentary",
    resolution: "4K DCI",
  },
];

export const TEAM: TeamMember[] = [
  { name: "M. Zaeem Siddiqui", title: "Founding Partner | Producer | Director", roleTag: "DIRECTION" },
  { name: "Umair Farooqui", title: "Founding Partner | Producer | Production", roleTag: "PRODUCTION" },
  { name: "Mallik Matti", title: "Art Director | Production Designer", roleTag: "ART DEPT" },
  { name: "Asif Nicky", title: "Affiliated Partner | Event Management", roleTag: "EVENT" },
  { name: "Umair Khan", title: "Production Manager", roleTag: "PRODUCTION" },
  { name: "Faraz", title: "Head of Digital & Marketing", roleTag: "DIGITAL" },
  { name: "Shahzaib", title: "Post-Production Specialist", roleTag: "POST-PROD" },
  { name: "Sajjad Hussain", title: "Post-Production Specialist", roleTag: "POST-PROD" },
];

export const CLIENT_BADGES: ClientBrand[] = [
  { name: "BOL TV", src: "/images/clients/bol.jpeg", category: "Broadcast Network" },
  { name: "News One", src: "/images/clients/newsone.png", category: "News Broadcaster" },
  { name: "TV One", src: "/images/clients/tvone.png", category: "Entertainment Network" },
  { name: "Universal Brothers", src: "/images/clients/universal-brothers.png", category: "Corporate / Travel" },
  { name: "Ahmed Bukhatir", src: "/images/clients/ahmed-bukhatir.png", category: "International Artist" },
  { name: "PTPL", src: "/images/clients/ptpl.png", category: "Sports League" },
  { name: "Naeem Foundation", src: "/images/clients/naeem-foundation.png", category: "International NGO" },
  { name: "Jamia Binoria", src: "/images/clients/jamia-binoria.png", category: "Academic Institution" },
];