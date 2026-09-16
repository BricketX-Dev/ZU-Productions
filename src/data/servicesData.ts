// src/data/servicesData.ts
export interface ServiceDetail {
  slug: string;
  id: string;
  title: string;
  tagline: string;
  overview: string;
  deliverables: string[];
  subCapabilities: { title: string; items: string[] }[];
  technicalSpecs: { label: string; value: string }[];
}

export const SERVICES_DETAILED: Record<string, ServiceDetail> = {
  "film-video-production": {
    slug: "film-video-production",
    id: "01",
    title: "Film & Video Production",
    tagline: "High-End Corporate, Commercial, and Documentary Storytelling",
    overview:
      "We develop and produce professionally crafted visual content for brands, institutions, and high-profile campaigns. From scripting through final digital mastering, our teams operate cinema-grade setups tailored to commercial impact.",
    deliverables: [
      "Corporate Profile Films",
      "TV & Digital Commercials (TVCs/DVCs)",
      "Leadership & Executive Features",
      "Institutional Documentaries",
      "Product & Launch Films",
    ],
    subCapabilities: [
      {
        title: "Corporate Films",
        items: [
          "Company Profile Films",
          "Institutional Videos",
          "Brand Stories",
          "Leadership / CEO Profiles",
          "Achievement & Anniversary Films",
        ],
      },
      {
        title: "Commercials & TVCs",
        items: [
          "Television Commercials (TVCs)",
          "Digital Commercials (DVCs)",
          "Product Commercials",
          "Campaign Content",
          "Branded Video Series",
        ],
      },
      {
        title: "Documentaries",
        items: [
          "Corporate Documentaries",
          "Social & NGO Awareness Films",
          "Interview-led Narratives",
          "Short Documentary Profiles",
        ],
      },
    ],
    technicalSpecs: [
      { label: "Capture Resolutions", value: "4K DCI / 6K / 8K RAW" },
      { label: "Color Science", value: "Log Workflows (ARRI LogC, RED IPP2)" },
      { label: "Audio Standards", value: "Stereo, 5.1 Surround Mastering" },
      { label: "Delivery", value: "ProRes 4444 XQ, DCI SMPTE DCP" },
    ],
  },
  "event-production": {
    slug: "event-production",
    id: "02",
    title: "Event Management & Production",
    tagline: "Turnkey Production Architecture & Technical Live Execution",
    overview:
      "Integrated Event Management and Technical Production solutions combining creative stage architecture, visual display installations, broadcast lighting, and live multi-camera capture for large-scale institutional gatherings.",
    deliverables: [
      "Turnkey Stage & Set Architecture",
      "Intelligent Lighting & Sound Engineering",
      "Large-Format LED Visual Displays",
      "Live Multi-Camera Direction & Recording",
      "Same-Day Post-Event Highlight Cuts",
    ],
    subCapabilities: [
      {
        title: "Technical Production",
        items: [
          "Stage Design & Structural Rigging",
          "Intelligent Concert Lighting",
          "Line-Array Audio Systems",
          "LED Displays & Multimedia Playback",
        ],
      },
      {
        title: "Event Formats",
        items: [
          "Corporate Conferences & Summits",
          "Annual Convocations",
          "Award Ceremonies & Galas",
          "Product & Brand Launches",
          "Live Entertainment Events",
        ],
      },
    ],
    technicalSpecs: [
      { label: "Switching Hardware", value: "Seamless 4K Live Switchers" },
      { label: "Display Systems", value: "P2.6 / P3.9 High-Refresh LED" },
      { label: "Intercom", value: "Full-Duplex Digital Wireless Comms" },
      { label: "Capture", value: "Multi-Angle Fiber Optic Feeds" },
    ],
  },
  "digital-content": {
    slug: "digital-content",
    id: "03",
    title: "Digital Content & Social Production",
    tagline: "Algorithm-Aware, High-Impact Media for Modern Channels",
    overview:
      "We design short- and long-form video specifically calibrated for current audience consumption trends-combining agile filming units with rapid turnaround editing workflows.",
    deliverables: [
      "9:16 Cinematic Reels & Shorts",
      "Long-Form YouTube Productions",
      "Studio Multi-Camera Podcasts",
      "Digital Campaign Creative Suites",
    ],
    subCapabilities: [
      {
        title: "Content Streams",
        items: [
          "Branded TikTok / Reels / Shorts",
          "Episodic Digital Content",
          "Podcast Audio & Multi-Cam Video",
          "Campaign Social Cutdowns",
        ],
      },
    ],
    technicalSpecs: [
      { label: "Turnaround", value: "Rapid 24–48h Deliveries" },
      { label: "Aspect Ratios", value: "9:16 Vertical, 1:1 Square, 16:9 Standard" },
      { label: "Mastering", value: "Social Platform Loudness Compliant (-14 LUFS)" },
      { label: "Graphics", value: "Dynamic Motion Typographic Overlays" },
    ],
  },
  "broadcast-production": {
    slug: "broadcast-production",
    id: "04",
    title: "Multi-Camera & Broadcast Production",
    tagline: "Broadcast-Grade Switching, Engineering, and Live Crew Direction",
    overview:
      "Engineered multi-camera production packages for conferences, live ceremonies, sports tournaments, and real-time transmissions with zero latency tolerance.",
    deliverables: [
      "Live Production Control Room Setup",
      "Multi-Angle Synchronized Records",
      "Broadcast Transmission Clean Feeds",
      "Real-Time Lower Thirds & Graphics Injection",
    ],
    subCapabilities: [
      {
        title: "Capabilities",
        items: [
          "Multi-Camera Direction",
          "Live Vision Mixing",
          "Tally & Comms Infrastructure",
          "Live Streaming to Satellite & CDN",
        ],
      },
    ],
    technicalSpecs: [
      { label: "Cameras", value: "4 to 12 Multi-Camera Package" },
      { label: "Transmission", value: "SRT, RTMP, SDI Direct Links" },
      { label: "Recording", value: "ISO Records per Camera + PGM Master" },
      { label: "Monitoring", value: "Color-Calibrated Multiview Systems" },
    ],
  },
  "post-production": {
    slug: "post-production",
    id: "05",
    title: "Post-Production & AI Visual Workflows",
    tagline: "Precision Editing, DaVinci Color Grading, VFX, and Finishing",
    overview:
      "Raw footage transformed into finished master deliverables. Our finishing pipeline pairs established post-production practices with AI-assisted visual pre-visualization techniques.",
    deliverables: [
      "Master DaVinci Resolve Color Grade",
      "Sound Design, Foley, and 5.1 Mix",
      "Motion Graphics & Title Sequences",
      "AI-Assisted Pre-visualization & Visual R&D",
    ],
    subCapabilities: [
      {
        title: "Finishing Suite",
        items: [
          "Offline & Online Editorial",
          "Advanced Color Correction & Grading",
          "VFX Cleanups & Wire Removal",
          "Mastering for TV & Theatrical Distribution",
        ],
      },
    ],
    technicalSpecs: [
      { label: "Grading Suite", value: "DaVinci Resolve Studio (HDR Calibrated)" },
      { label: "Audio Mastering", value: "EBU R128 / ITU-R BS.1770 Compliant" },
      { label: "VFX Pipeline", value: "After Effects & Fusion" },
      { label: "Archival", value: "LTO Tape & Redundant Cold Storage" },
    ],
  },
  "production-design": {
    slug: "production-design",
    id: "06",
    title: "Production Design & Art Direction",
    tagline: "Spatial World-Building, Set Construction, and Visual Aesthetic",
    overview:
      "Crafting the visual world that frames the narrative. We oversee environments, color coordination, props, and architectural framing to ensure each frame serves the story.",
    deliverables: [
      "Set Concept Sketches & CAD Plans",
      "Custom Studio & Set Fabrication",
      "Prop Sourcing & Spatial Curation",
      "Visual Color Mood Directives",
    ],
    subCapabilities: [
      {
        title: "Art Department",
        items: [
          "Set Construction & Rigging",
          "Atmospheric Visual Styling",
          "Wardrobe & Prop Management",
          "Location Dressing & Transformation",
        ],
      },
    ],
    technicalSpecs: [
      { label: "Set Fabrication", value: "In-House Wood & Metal Workshop" },
      { label: "Drafting", value: "3D Spatial Pre-vis & Architectural CAD" },
      { label: "Palette Control", value: "Pantone-Matched Visual Schemas" },
      { label: "Lighting Tie-In", value: "Gaffer & DP Aesthetic Integration" },
    ],
  },
};