"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Film,
  Sparkles
} from "lucide-react";

const SERVICE_OPTIONS = [
  "Film & Video",
  "TVC / DVC Commercial",
  "Event Production",
  "Multi-Cam Broadcast",
  "Post & Color Grading",
  "Digital Content",
];

const BUDGET_TIERS = [
  "Standard ($2k - $5k)",
  "Commercial ($5k - $15k)",
  "Broadcast / Large Scale ($15k+)",
  "Undisclosed",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    service: "Film & Video",
    budget: "Commercial ($5k - $15k)",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 bg-black relative border-t border-surface-border overflow-hidden">
      {/* Background Studio Flare */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-darkRed/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* 1. LEFT COLUMN: PRODUCTION DISPATCH & STUDIO INFO */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-surface mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                  Direct Dispatch // Phase 01
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-[1.05]">
                Let's Create <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-brand-accent">
                  Worth Watching.
                </span>
              </h2>
              <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
                Have an upcoming commercial, broadcast event, or documentary series? Brief us on your timeline and visual scope.
              </p>
            </div>

            {/* Studio Contact Metadata Cards */}
            <div className="space-y-4 pt-4 border-t border-neutral-900">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-surface/50 border border-surface-border">
                <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-brand-accent">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                    Headquarters & Studio
                  </span>
                  <span className="text-sm text-neutral-200 font-medium">
                    Karachi, Pakistan (Serving International Deliverables)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-surface/50 border border-surface-border">
                <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-brand-accent">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                    Direct Inquiry Wire
                  </span>
                  <a
                    href="mailto:contact@zuproduction.com"
                    className="text-sm text-neutral-200 hover:text-white font-medium transition-colors"
                  >
                    contact@zuproduction.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-surface/50 border border-surface-border">
                <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-brand-accent">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                    Response Benchmark
                  </span>
                  <span className="text-sm text-neutral-200 font-medium">
                    Proposals & Estimates issued within 24–48 hours
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. RIGHT COLUMN: PRODUCTION RFP CONSOLE */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-surface/90 border border-surface-border p-8 sm:p-10 relative overflow-hidden shadow-2xl">
              {/* Corner Metadata Marks */}
              <div className="flex justify-between items-center pb-6 mb-6 border-b border-neutral-800/80">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                  <Film className="w-3.5 h-3.5 text-brand-accent" />
                  <span>ZU Slate // Project Intake Form</span>
                </div>
                <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">
                  SECURE WIRE
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
                  <h3 className="font-display text-2xl font-bold text-white">
                    Brief Transmission Received
                  </h3>
                  <p className="text-neutral-400 text-sm max-w-md mx-auto leading-relaxed">
                    Our executive production desk is reviewing your requirements. A director or producer will reach out shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-surface border border-neutral-700 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white"
                  >
                    Submit Another Brief
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Selection Chips */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-mono text-neutral-400 mb-3">
                      Select Primary Capability *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {SERVICE_OPTIONS.map((srv) => {
                        const isSelected = formData.service === srv;
                        return (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => setFormData({ ...formData, service: srv })}
                            className={`px-3.5 py-2 rounded-lg text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "bg-brand-red text-white border border-brand-red shadow-sm"
                                : "bg-neutral-950 border border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-white"
                            }`}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name & Brand */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-mono text-neutral-400 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-red transition-colors"
                        placeholder="e.g. M. Ali"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-mono text-neutral-400 mb-2">
                        Organization / Brand
                      </label>
                      <input
                        type="text"
                        value={formData.org}
                        onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-red transition-colors"
                        placeholder="e.g. Universal Brothers"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-mono text-neutral-400 mb-2">
                        Email Address *
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
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-red transition-colors"
                        placeholder="+92 300 1234567"
                      />
                    </div>
                  </div>

                  {/* Estimated Production Scale */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-mono text-neutral-400 mb-2">
                      Target Production Scale / Tier
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-neutral-300 focus:outline-none focus:border-brand-red transition-colors cursor-pointer"
                    >
                      {BUDGET_TIERS.map((tier) => (
                        <option key={tier} value={tier}>
                          {tier}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Scope Details */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-mono text-neutral-400 mb-2">
                      Brief Narrative & Deliverables Scope
                    </label>
                    <textarea
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-red transition-colors"
                      placeholder="Outline shoot dates, key locations, staging size, required cameras, or final output formats..."
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full group inline-flex justify-center items-center gap-3 py-4 rounded-xl bg-brand-red hover:bg-brand-darkRed text-white text-xs uppercase tracking-widest font-bold transition-all duration-300 crimson-glow cursor-pointer"
                  >
                    <span>Transmit Project Brief</span>
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