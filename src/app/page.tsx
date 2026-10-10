import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import ClientsMarquee from "@/components/sections/ClientsMarquee";

// Below-the-fold code-splitting to eliminate main-thread JS bloat
const Services = dynamic(() => import("@/components/sections/Services"), {
  ssr: true,
});
const Portfolio = dynamic(() => import("@/components/sections/Portfolio"), {
  ssr: true,
});
const Workflow = dynamic(() => import("@/components/sections/Workflow"), {
  ssr: true,
});
const Team = dynamic(() => import("@/components/sections/Team"), {
  ssr: true,
});
const Contact = dynamic(() => import("@/components/sections/Contact"), {
  ssr: true,
});

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