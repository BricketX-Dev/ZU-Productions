import { Metadata } from "next";
import dynamic from "next/dynamic";
import AboutHero from "@/components/about/AboutHero";

// Dynamic imports for lower sections
const AboutPhilosophy = dynamic(
  () => import("@/components/about/AboutPhilosophy"),
  { ssr: true }
);
const AboutAdvantages = dynamic(
  () => import("@/components/about/AboutAdvantages"),
  { ssr: true }
);
const AboutInternational = dynamic(
  () => import("@/components/about/AboutInternational"),
  { ssr: true }
);
const AboutTeam = dynamic(
  () => import("@/components/about/AboutTeam"),
  { ssr: true }
);

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