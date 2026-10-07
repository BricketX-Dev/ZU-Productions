// src/app/about/page.tsx
import { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import AboutAdvantages from "@/components/about/AboutAdvantages";
import AboutInternational from "@/components/about/AboutInternational";
import AboutTeam from "@/components/about/AboutTeam";

export const metadata: Metadata = {
  title: "About Studio | ZU PRODUCTION",
  description:
    "Integrated creative production company delivering commercial films, multi-camera broadcasts, event staging, and master post-production.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 sm:pt-24 pb-20 sm:pb-28 bg-black text-white select-none">
      <AboutHero />
      <AboutPhilosophy />
      <AboutAdvantages />
      <AboutInternational />
      <AboutTeam />
    </div>
  );
}