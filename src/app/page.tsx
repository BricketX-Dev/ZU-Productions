// src/app/page.tsx
import Hero from "@/components/sections/Hero";
import ClientsMarquee from "@/components/sections/ClientsMarquee";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Workflow from "@/components/sections/Workflow";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <ClientsMarquee />
      <Services />
      <Portfolio />
      <Workflow />
      <Team />
      <Contact />
    </div>
  );
}