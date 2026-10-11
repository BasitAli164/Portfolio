/**
 * Achievements, Certifications & Leadership Data
 * 
 * Fields marked [ADD IN ADMIN] MUST be confirmed.
 * 
 * IMPORTANT: 
 * - Do NOT mark nomination as award
 * - Do NOT mark attendance as certification
 * - Distinguish achievement vs recognition vs participation
 */

export const ACHIEVEMENT_CATEGORIES = {
  academic: {
    label: "Academic",
    accent: "primary",
  },
  scholarship: {
    label: "Scholarships",
    accent: "emerald-accent",
  },
  certification: {
    label: "Certifications",
    accent: "primary",
  },
  recognition: {
    label: "Recognition",
    accent: "emerald-accent",
  },
  leadership: {
    label: "Leadership",
    accent: "primary",
  },
  community: {
    label: "Community",
    accent: "emerald-accent",
  },
};

export const ACHIEVEMENTS = [
  {
    id: "pef-scholarship",
    number: "01",
    category: "scholarship",
    title: "PEF Merit-Based Scholarship",
    issuer: "Punjab Education Foundation",
    year: "[ADD IN ADMIN — year]",
    type: "Scholarship",
    description:
      "Awarded a merit-based scholarship in recognition of academic performance.",
    evidence: null,
    verified: false,
    accent: "emerald-accent",
  },
  {
    id: "pm-laptop",
    number: "02",
    category: "recognition",
    title: "PM Youth Laptop Scheme 2025",
    issuer: "Government of Pakistan",
    year: "2025",
    type: "Recognition",
    description:
      "Selected for the Prime Minister's Youth Laptop Scheme in recognition of academic merit.",
    evidence: null,
    verified: false,
    accent: "primary",
  },
  {
    id: "hec-nceac",
    number: "03",
    category: "certification",
    title: "HEC–NCEAC National Skill Competency Test",
    issuer: "Higher Education Commission",
    year: "[ADD IN ADMIN]",
    type: "Competency Test",
    description:
      "Participated in the national skill competency test organized by HEC and NCEAC. Result: [ADD IN ADMIN].",
    evidence: null,
    verified: false,
    accent: "primary",
  },
  {
    id: "aieys-summer",
    number: "04",
    category: "recognition",
    title: "AIEYS IDS Summer School 2026",
    issuer: "AIEYS",
    year: "2026",
    type: "Selection / Attendance",
    description:
      "Selected to attend the AIEYS IDS Summer School — a specialized program for AI-focused students.",
    evidence: null,
    verified: false,
    accent: "emerald-accent",
  },
];

export const LEADERSHIP = [
  {
    id: "basirat-vp",
    number: "01",
    role: "Vice President",
    organization: "Basirat Welfare Organization",
    period: "[ADD IN ADMIN — dates]",
    type: "Leadership",
    description:
      "Served as Vice President of Basirat Welfare Organization, contributing to community service initiatives and organizational leadership.",
    achievements: [],
    verified: false,
    accent: "emerald-accent",
  },
  {
    id: "uobs-computing",
    number: "02",
    role: "Active Member",
    organization: "University of Baltistan Computing Society",
    period: "[ADD IN ADMIN — dates]",
    type: "Membership",
    description:
      "Active participation in the University of Baltistan Computing Society — supporting events, peer learning, and technical community initiatives.",
    achievements: [],
    verified: false,
    accent: "primary",
  },
];