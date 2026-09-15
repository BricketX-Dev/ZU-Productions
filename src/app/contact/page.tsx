// src/app/contact/page.tsx
import { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Initiate Project RFP | ZU PRODUCTION",
  description:
    "Reach out to ZU Production executive desks for project bookings, commercial TVCs, live broadcast engineering, and documentary commissions.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 bg-black">
      <Contact />
    </div>
  );
}