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
  MessageSquare,
  Loader2,
  AlertCircle
} from "lucide-react";

const PROJECT_TYPES = [
  "Film & Video Production",
  "Commercial / TVC / DVC",
  "Event Management & Staging",
  "Multi-Camera Live Broadcast",
  "Post-Production & Editing",
  "Social Media & Digital Content",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Simple Name Check
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }

    // Simple Email Check (just requires text, an @, and a dot)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // Simple Phone Check (requires at least 7 digits)
    const digitsOnly = formData.phone.replace(/\D/g, "");
    if (digitsOnly.length < 7) {
      setErrorMessage("Please enter a valid phone number (at least 7 digits).");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Could not send message. Please try again.");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        projectType: "Film & Video Production",
        projectDate: "",
        location: "",
        projectDetails: "",
      });
    } catch (err: any) {
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-black relative border-t border-surface-border overflow-hidden select-none">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-dark-red/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        {/* Header */}
        <div className="mb-10 sm:mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-surface mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
              06 — Get in Touch
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-[1.08]">
            Let&apos;s Work <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-brand-accent">
              Together.
            </span>
          </h2>
          <p className="mt-3 text-neutral-300 text-xs sm:text-base leading-relaxed font-light">
            Have a project or event in mind? Fill out the form below or contact us directly.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Form Card */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="rounded-2xl bg-surface/90 border border-surface-border p-5 sm:p-8 md:p-10 relative overflow-hidden shadow-2xl">
              {/* Card Header */}
              <div className="flex justify-between items-center pb-4 sm:pb-6 mb-5 sm:mb-6 border-b border-neutral-800/80">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-semibold">
                  <MessageSquare className="w-3.5 h-3.5 text-brand-accent" />
                  <span>Send a Message</span>
                </div>
                <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">
                  Quick Reply
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 sm:py-16 text-center space-y-4"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand-red/20 border border-brand-red/40 flex items-center justify-center mx-auto text-brand-accent">
                    <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase">
                    Message Sent!
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-light">
                    Thank you for reaching out. We have received your message and sent a confirmation to your email. Our team will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-surface border border-neutral-700 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white cursor-pointer transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {errorMessage && (
                    <div className="p-3.5 rounded-lg bg-red-950/40 border border-red-800/60 flex items-center gap-2.5 text-xs text-red-200">
                      <AlertCircle className="w-4 h-4 text-brand-red shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider font-mono text-neutral-400 mb-1.5 sm:mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        disabled={loading}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-red transition-colors disabled:opacity-50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider font-mono text-neutral-400 mb-1.5 sm:mb-2">
                        Company or Brand
                      </label>
                      <input
                        type="text"
                        disabled={loading}
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-red transition-colors disabled:opacity-50"
                        placeholder="Company name (optional)"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider font-mono text-neutral-400 mb-1.5 sm:mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        disabled={loading}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-red transition-colors disabled:opacity-50"
                        placeholder="name@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider font-mono text-neutral-400 mb-1.5 sm:mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        disabled={loading}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-red transition-colors disabled:opacity-50"
                        placeholder="+92 300 1234567"
                      />
                    </div>
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider font-mono text-neutral-400 mb-1.5 sm:mb-2">
                      Service Needed
                    </label>
                    <select
                      disabled={loading}
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-neutral-300 focus:outline-none focus:border-brand-red transition-colors cursor-pointer disabled:opacity-50"
                    >
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider font-mono text-neutral-400 mb-1.5 sm:mb-2">
                        Expected Date / Timeline
                      </label>
                      <input
                        type="text"
                        disabled={loading}
                        value={formData.projectDate}
                        onChange={(e) => setFormData({ ...formData, projectDate: e.target.value })}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-red transition-colors disabled:opacity-50"
                        placeholder="e.g. Next month / Urgent"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider font-mono text-neutral-400 mb-1.5 sm:mb-2">
                        City / Location
                      </label>
                      <input
                        type="text"
                        disabled={loading}
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-red transition-colors disabled:opacity-50"
                        placeholder="Karachi, Lahore, or Remote"
                      />
                    </div>
                  </div>

                  {/* Message / Details */}
                  <div>
                    <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider font-mono text-neutral-400 mb-1.5 sm:mb-2">
                      Project Details
                    </label>
                    <textarea
                      rows={3}
                      disabled={loading}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-brand-red transition-colors resize-none disabled:opacity-50"
                      placeholder="Tell us about your project, idea, or what you need..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full group inline-flex justify-center items-center gap-2.5 sm:gap-3 py-3.5 sm:py-4 rounded-xl bg-brand-red hover:bg-brand-dark-red disabled:bg-neutral-800 text-white text-xs uppercase tracking-widest font-bold font-mono transition-all duration-300 crimson-glow cursor-pointer disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="order-2 lg:order-1 lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="pt-2">
              <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white block mb-1">
                Direct Contact
              </span>
              <p className="text-neutral-500 font-mono text-[10px] tracking-wider uppercase">
                Reach us directly through phone or email
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {/* Location */}
              <div className="flex items-start gap-3.5 p-3 sm:p-3.5 rounded-xl bg-surface/50 border border-surface-border">
                <div className="p-2 sm:p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-brand-accent shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-200 font-medium block truncate">
                    Karachi, Pakistan (Worldwide Delivery)
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5 p-3 sm:p-3.5 rounded-xl bg-surface/50 border border-surface-border">
                <div className="p-2 sm:p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-brand-accent shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                    Phone
                  </span>
                  <a
                    href="tel:+923001234567"
                    className="text-xs sm:text-sm text-neutral-200 hover:text-white font-medium transition-colors block truncate"
                  >
                    +92 300 1234567
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 p-3 sm:p-3.5 rounded-xl bg-surface/50 border border-surface-border">
                <div className="p-2 sm:p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-brand-accent shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                    Email
                  </span>
                  <a
                    href="mailto:contact@zuproduction.pk"
                    className="text-xs sm:text-sm text-neutral-200 hover:text-white font-medium transition-colors block truncate"
                  >
                    contact@zuproduction.pk
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-3.5 p-3 sm:p-3.5 rounded-xl bg-surface/50 border border-surface-border">
                <div className="p-2 sm:p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-brand-accent shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                    Website
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-200 font-medium block truncate">
                    www.zuproduction.pk
                  </span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start gap-3.5 p-3 sm:p-3.5 rounded-xl bg-surface/50 border border-surface-border sm:col-span-2 lg:col-span-1">
                <div className="p-2 sm:p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-brand-accent shrink-0">
                  <Share2 className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                    Social Media
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-200 font-medium block truncate">
                    @zuproduction.official
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}