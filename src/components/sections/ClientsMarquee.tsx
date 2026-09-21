// src/components/sections/ClientsMarquee.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export const CLIENT_LOGOS = [
  { name: "BOL TV", src: "/images/clients/bol.jpeg" },
  { name: "News One", src: "/images/clients/newsone.png" },
  { name: "TV One", src: "/images/clients/tvone.png" },
  { name: "Universal Brothers", src: "/images/clients/universal-brothers.png" },
  { name: "Ahmed Bukhatir", src: "/images/clients/ahmed-bukhatir.jpeg" },
  { name: "PTPL", src: "/images/clients/ptpl.png" },
  { name: "Naeem Foundation", src: "/images/clients/naeem-foundation.png" },
  { name: "Jamia Binoria", src: "/images/clients/jamia-binoria.png" },
  { name: "Jetour", src: "/images/clients/jetour.jpeg" },
  { name: "Amax Travel", src: "/images/clients/amax-travel.jpeg" },
  { name: "Muller & Phipps", src: "/images/clients/muller-phipps.jpeg" },

];

export default function ClientsMarquee() {
  return (
    <section className="border-y border-neutral-900 bg-neutral-950/80 py-10 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Award className="w-3.5 h-3.5 text-brand-accent" />
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400 font-semibold">
            Broadcasters, Institutions & Global Brands
          </span>
        </div>
        <span className="hidden sm:block font-mono text-[9px] text-neutral-600 uppercase tracking-widest">
          PRODUCTION AFFILIATIONS // VERIFIED
        </span>
      </div>

      {/* Infinite Marquee Track */}
      <div className="relative flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex shrink-0 items-center gap-10 sm:gap-14 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear",
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center min-w-[130px] sm:min-w-[160px] px-2 cursor-pointer"
            >
              {/* Logo Container */}
              <div className="relative h-14 w-28 sm:h-16 sm:w-36 flex items-center justify-center opacity-85 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105">
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  sizes="144px"
                  className="object-contain"
                />
              </div>

              {/* Company Name Label */}
              <span className="mt-2 text-[11px] font-mono uppercase tracking-wider text-neutral-400 group-hover:text-white transition-colors duration-200 text-center block">
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
