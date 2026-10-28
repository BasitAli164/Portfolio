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
    organizer: "IBM & Lablab.ai",
    date: "May 15-17, 2026",
    teamName: "Ultimate",
    project: "http://bugfinderfixer.vercel.app/",
    projectDescription: "Collaborated on an AI-powered Bug Finder & Fixer project during the IBM Bob Hackathon, developing a tool that detects Python bugs, security vulnerabilities, and bad coding practices, explains issues in plain language, and provides one-click fixes. Served as a Demo Specialist, creating demo videos, presenting key features, and conducting live walkthroughs for judges and audiences.",
    status: "Participated",
    statusColor: "primary",
    result: "Acheived Certificated",
    certificate: "https://drive.google.com/drive/u/0/folders/1kyGfg5E1puW75lBNYRszuhRdwskfY63O",
    accent: "emerald-accent",
  },
  {
    id: "ai-factory",
    number: "03",
    name: "AI Factory Hackathon",
    organizer: "Natively AI & Lablab.ai",
    date: "Aug 03-10, 2026",
    project: "",
    projectDescription: "Developed SignPulseAI, a real-time AI-powered sign language and gesture translator for the Lablab AI Hackathon. As Frontend & Documentation Lead, I built the user interface for live video, text translations, and audio output, and prepared the project documentation and pitch presentation. The system integrates Gemini multimodal AI, computer vision, and text-to-speech to make communication more accessible.",
    status: "Participated",
    statusColor: "primary",
    certificate: "https://drive.google.com/drive/u/0/folders/1kyGfg5E1puW75lBNYRszuhRdwskfY63O",
    accent: "primary",
  },
  {
    id: "hackerrank",
    number: "04",
    name: "HackerRank Competitions",
    organizer: "HackerRank",
    date: "May 2026",
    project: "Problem-solving challenges",
    projectDescription:
      "Competitive programming and algorithmic challenges on HackerRank. See Problem Solving section for verified statistics.",
    status: "Participated",
    statusColor: "emerald-accent",
    certificate: "https://drive.google.com/drive/u/0/folders/1kyGfg5E1puW75lBNYRszuhRdwskfY63O",
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