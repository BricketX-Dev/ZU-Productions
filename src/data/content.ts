// src/data/content.ts
import { Film, Video, Tv, Smartphone, Sparkles, Palette } from "lucide-react";

export const BRAND = {
  name: "ZU Production",
  tagline: "Creative Production. Powerful Visuals. Meaningful Stories.",
  location: "Pakistan-based Creative Production Company",
  description:
    "Delivering integrated solutions across film, television, advertising, corporate communication, events, digital media, broadcast production, and post-production.",
};

export const SERVICES = [
  {
    id: "01",
    title: "Film & Video Production",
    desc: "Corporate profile films, institutional videos, CEO & leadership features, commercials (TVCs/DVCs), and interview-led or corporate documentaries.",
    icon: Film,
    items: ["Corporate Films", "TVCs & DVCs", "Documentaries", "Brand Stories"],
  },
  {
    id: "02",
    title: "Event Management & Production",
    desc: "End-to-end event execution: stage architecture, professional audio, intelligent lighting, LED walls, multi-camera capture, and post-event highlight reels.",
    icon: Video,
    items: ["Conferences", "Award Ceremonies", "Stage Design", "AV & Lighting"],
  },
  {
    id: "03",
    title: "Digital Content Production",
    desc: "Content tailored for social media behavior: high-impact Reels, Shorts, YouTube long-form, digital commercials, podcasts, and digital campaigns.",
    icon: Smartphone,
    items: ["Reels & Shorts", "Podcasts", "Branded Series", "Campaign Creatives"],
  },
  {
    id: "04",
    title: "Multi-Camera & Broadcast",
    desc: "Large-scale multi-camera direction, live switching, broadcast-grade camera packages, communication systems, and professional live-crew coordination.",
    icon: Tv,
    items: ["Live Switching", "Multi-Cam Direction", "Broadcast Crew", "Convocations"],
  },
  {
    id: "05",
    title: "Post-Production & AI Workflows",
    desc: "High-end editing, master color grading, motion graphics, sound design, visual effects, and selective AI-assisted conceptual visualization.",
    icon: Sparkles,
    items: ["Color Grading", "VFX & Motion", "Sound Mastering", "AI Visual R&D"],
  },
  {
    id: "06",
    title: "Production Design & Art Direction",
    desc: "Visual world-building: custom set design, prop curation, atmospheric lighting palettes, composition, and visual aesthetics aligned to narrative.",
    icon: Palette,
    items: ["Set Design", "Art Direction", "Styling & Props", "Visual Identity"],
  },
];

export const WORKFLOW_STEPS = [
  { step: "01", name: "Discover", desc: "Aligning on goals, audience, and creative intent." },
  { step: "02", name: "Develop", desc: "Treatment scripting, storyboards, and aesthetic direction." },
  { step: "03", name: "Plan", desc: "Pre-production, logistics, casting, and tech crew scouting." },
  { step: "04", name: "Produce", desc: "Cinematography, direction, lighting, and stage execution." },
  { step: "05", name: "Finish", desc: "Editing, color grading, sound design, and VFX polish." },
  { step: "06", name: "Deliver", desc: "Platform-specific rendering and final master delivery." },
];

export const PROJECTS = [
  {
    title: "Ahmed Bukhatir",
    scope: "Official Music Video | UAE",
    category: "International Music Video",
  },
  {
    title: "Universal Brothers",
    scope: "Hajj & Umrah Campaign",
    category: "Commercial & Documentary",
  },
  {
    title: "Pakistan Tape Ball Premier League",
    scope: "PTPL Anthem & Promotional Campaign",
    category: "Sports & Entertainment",
  },
  {
    title: "Jamia Binoria",
    scope: "Annual Convocation Execution",
    category: "Full Event Production",
  },
  {
    title: "TVCs & DVCs Portfolio",
    scope: "Commercial Assignments (Singapore & Malaysia)",
    category: "International Commercials",
  },
  {
    title: "Naeem Foundation",
    scope: "UK-Based NGO Awareness Campaign",
    category: "Social Awareness / Digital",
  },
];

export const TEAM = [
  { name: "M. Zaeem Siddiqui", title: "Founding Partner | Producer | Director" },
  { name: "Umair Farooqui", title: "Founding Partner | Producer | Production" },
  { name: "Mallik Matti", title: "Art Director | Production Designer" },
  { name: "Asif Nicky", title: "Affiliated Partner | Event Management" },
  { name: "Umair Khan", title: "Production Manager" },
  { name: "Faraz", title: "Head of Digital & Marketing" },
  { name: "Shahzaib", title: "Post-Production Specialist" },
  { name: "Sajjad Hussain", title: "Post-Production Specialist" },
];

export const CLIENT_BADGES = [
  "BOL TV",
  "News One",
  "TV One",
  "Universal Brothers",
  "Ahmed Bukhatir",
  "PTPL",
  "Naeem Foundation",
  "Jamia Binoria",
];