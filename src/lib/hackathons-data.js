/**
 * Hackathons & Competitions Data
 * 
 * Fields marked [ADD IN ADMIN] are placeholders.
 * 
 * IMPORTANT: statuses must be accurate.
 * Valid status values: "Participated", "Selected", "Qualified", "Finalist", "Winner", "Ranked"
 * NEVER convert participation into a victory.
 */

export const HACKATHONS = [
  {
    id: "fortyguard-2026",
    number: "01",
    name: "FortyGuard Hackathon 2026",
    organizer: "FortyGuard",
    date: "2026",
    location: "Remote / Hybrid",
    team: "[ADD IN ADMIN]",
    role: "Participant & Developer",
    project: "HeatShield AI",
    projectDescription:
      "Hyperlocal temperature risk API with an AI agent that converts raw data into actionable heat-risk guidance for vulnerable communities.",
    status: "Participated",
    statusColor: "primary",
    result: "[ADD IN ADMIN — placement/outcome if any]",
    certificate: null,
    accent: "primary",
  },
  {
    id: "ibm-bob",
    number: "02",
    name: "IBM BOB Hackathon",
    organizer: "IBM",
    date: "[ADD IN ADMIN]",
    location: "[ADD IN ADMIN]",
    team: "[ADD IN ADMIN]",
    role: "[ADD IN ADMIN]",
    project: "[ADD IN ADMIN]",
    projectDescription: "[ADD IN ADMIN — describe the project or challenge]",
    status: "Participated",
    statusColor: "primary",
    result: "[ADD IN ADMIN]",
    certificate: null,
    accent: "emerald-accent",
  },
  {
    id: "ai-factory",
    number: "03",
    name: "AI Factory Hackathon",
    organizer: "[ADD IN ADMIN]",
    date: "[ADD IN ADMIN]",
    location: "[ADD IN ADMIN]",
    team: "[ADD IN ADMIN]",
    role: "[ADD IN ADMIN]",
    project: "[ADD IN ADMIN]",
    projectDescription: "[ADD IN ADMIN]",
    status: "Participated",
    statusColor: "primary",
    result: "[ADD IN ADMIN]",
    certificate: null,
    accent: "primary",
  },
  {
    id: "hackerrank",
    number: "04",
    name: "HackerRank Competitions",
    organizer: "HackerRank",
    date: "Ongoing",
    location: "Online",
    team: null,
    role: "Competitor",
    project: "Problem-solving challenges",
    projectDescription:
      "Competitive programming and algorithmic challenges on HackerRank. See Problem Solving section for verified statistics.",
    status: "Ongoing",
    statusColor: "emerald-accent",
    result: "[See Problem Solving section]",
    certificate: null,
    accent: "emerald-accent",
  },
  {
    id: "signpulse-hack",
    number: "05",
    name: "Sign Language AI Hackathon",
    organizer: "[ADD IN ADMIN]",
    date: "2025",
    location: "[ADD IN ADMIN]",
    team: "[ADD IN ADMIN]",
    role: "Developer",
    project: "SignPulseAI",
    projectDescription:
      "Real-time sign language recognition system built during a collaborative hackathon with an international team.",
    status: "Participated",
    statusColor: "primary",
    result: "[ADD IN ADMIN]",
    certificate: null,
    accent: "primary",
  },
];

export const HACKATHON_STATS = [
  { label: "Events", value: "5+", accent: "primary" },
  { label: "International", value: "2+", accent: "emerald-accent" },
  { label: "Projects Built", value: "4+", accent: "primary" },
  { label: "Team Members", value: "15+", accent: "emerald-accent" },
];