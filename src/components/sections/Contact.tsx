// src/components/sections/Contact.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Share2, 
  CheckCircle2, 
  Film 
} from "lucide-react";

const PROJECT_TYPES = [
  "Film & Video Production",
  "Commercial / TVC / DVC",
  "Event Management & Staging",
  "Multi-Camera Live Broadcast",
  "Post-Production & Grading",
  "Digital Content & Social",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "Film & Video Production",
    projectDate: "",
    location: "",
    projectDetails: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 bg-black relative border-t border-surface-border overflow-hidden select-none">
      {/* Background Studio Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-dark-red/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* 1. LEFT COLUMN: STUDIO CONTACT DIRECTORY */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-surface mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                  06 — Contact Us
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-[1.05]">
                Let's Create Something <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-brand-accent">
                  Worth Watching.
                </span>
              </h2>
              <p className="mt-4 text-neutral-300 text-sm sm:text-base font-normal leading-relaxed">
                Have a production, event or creative project in mind?
              </p>
              <p className="mt-2 text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                Tell us about your requirement and let's discuss how we can bring it to life.
              </p>
            </div>

            {/* ZU PRODUCTION Studio Directory Lines */}
            <div className="space-y-3 pt-6 border-t border-neutral-900">
              <span className="font-display text-sm font-bold uppercase tracking-wider text-white block mb-4">
                ZU PRODUCTION
              </span>

              {/* Location */}
              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-surface/50 border border-surface-border">
                <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-brand-accent shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-200 font-medium">
                    Karachi, Pakistan (Deploying Worldwide)
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-surface/50 border border-surface-border">
                <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-brand-accent shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                    Phone
                  </span>
                  <a
                    href="tel:+923001234567"
                    className="text-xs sm:text-sm text-neutral-200 hover:text-white font-medium transition-colors"
                  >
                    +92 300 1234567
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-surface/50 border border-surface-border">
                <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-brand-accent shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                    Email
                  </span>
                  <a
                    href="mailto:contact@zuproduction.com"
                    className="text-xs sm:text-sm text-neutral-200 hover:text-white font-medium transition-colors"
                  >
                    contact@zuproduction.com
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-surface/50 border border-surface-border">
                <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-brand-accent shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                    Website
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-200 font-medium">
                    www.zuproduction.com
                  </span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-surface/50 border border-surface-border">
                <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-brand-accent shrink-0">
                  <Share2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                    Social Media
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-200 font-medium">
                    @zuproduction.official
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. RIGHT COLUMN: PROJECT ENQUIRY CONSOLE */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-surface/90 border border-surface-border p-8 sm:p-10 relative overflow-hidden shadow-2xl">
              {/* Slate Header */}
              <div className="flex justify-between items-center pb-6 mb-6 border-b border-neutral-800/80">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-semibold">
                  <Film className="w-3.5 h-3.5 text-brand-accent" />
                  <span>PROJECT ENQUIRY</span>
                </div>
                <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">
                  DISPATCH CONSOLE
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-red/20 border border-brand-red/40 flex items-center justify-center mx-auto text-brand-accent">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white uppercase">
                    Enquiry Received
                  </h3>
                  <p className="text-neutral-400 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for detailing your production requirements. Our executive desk will review your submission and reach out promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-surface border border-neutral-700 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white cursor-pointer"
                  >
                    Send Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-mono text-neutral-400 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-red transition-colors"
                        placeholder="Your Full Name"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-mono text-neutral-400 mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-red transition-colors"
                        placeholder="Organization or Brand"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-mono text-neutral-400 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-red transition-colors"
                        placeholder="name@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-mono text-neutral-400 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-red transition-colors"
                        placeholder="+92 300 1234567"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-mono text-neutral-400 mb-2">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-neutral-300 focus:outline-none focus:border-brand-red transition-colors cursor-pointer"
                    >
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Date & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-mono text-neutral-400 mb-2">
                        Project Date
                      </label>
                      <input
                        type="text"
                        value={formData.projectDate}
                        onChange={(e) => setFormData({ ...formData, projectDate: e.target.value })}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-red transition-colors"
                        placeholder="e.g. Q4 2026 / Immediate"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-mono text-neutral-400 mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-red transition-colors"
                        placeholder="City, Territory, or Virtual"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-mono text-neutral-400 mb-2">
                      Project Details
                    </label>
                    <textarea
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-red transition-colors"
                      placeholder="Share your requirements, scale, camera/format preferences, or creative intent..."
                    />
                  </div>

                  {/* Send Enquiry Button */}
                  <button
                    type="submit"
                    className="w-full group inline-flex justify-center items-center gap-3 py-4 rounded-xl bg-brand-red hover:bg-brand-dark-red text-white text-xs uppercase tracking-widest font-bold font-mono transition-all duration-300 crimson-glow cursor-pointer"
                  >
                    <span>Send Enquiry</span>
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}