/**
 * Projects Data
 * 
 * Central place for project information.
 * In later phases, this will move to MongoDB.
 * 
 * Fields marked [ADD IN ADMIN] are placeholders.
 */

export const PROJECTS = [
  {
    id: "smindruk",
    number: "01",
    title: "Smindruk",
    subtitle: "AI-Based Dataset-Driven Digital Marketing Server",
    category: "AI & Marketing",
    categoryColor: "primary",
    featured: true,
    status: "In Progress",
    year: "2025–2026",
    isFYP: true,
    problem:
      "Small businesses struggle to run data-driven marketing campaigns without expensive tools or analytics expertise.",
    contribution:
      "Building the full backend architecture — API design, database schema, and AI-powered trend analysis pipeline.",
    description:
      "Centralized social media management platform with trend analysis, campaign suggestions, and AI-assisted content generation.",
    technologies: ["Next.js", "Express js","Node.js", "MongoDB", "LLM APIs"],
    github: "[ADD IN ADMIN]",
    demo: "[ADD IN ADMIN]",
    accent: "primary",
  },
  {
    id: "heatshield",
    number: "02",
    title: "HeatShield AI",
    subtitle: "Hyperlocal Temperature Risk API",
    category: "Hackathon",
    categoryColor: "emerald-accent",
    featured: true,
    status: "Hackathon Project",
    year: "2025",
    isFYP: false,
    problem:
      "Communities lack accessible, hyperlocal heat-risk forecasts to prepare for extreme temperatures.",
    contribution:
      "Worked on the AI agent that converts raw temperature data into actionable risk levels and 6–12 hour forecasts.",
    description:
      "AI-powered system that predicts local heat risks and generates actionable guidance for vulnerable populations.",
    technologies: ["Python", "FastAPI", "Streamlit", "AI Agents"],
    github: "[ADD IN ADMIN]",
    demo: "[ADD IN ADMIN]",
    accent: "emerald-accent",
  },
  {
    id: "signpulse",
    number: "03",
    title: "SignPulseAI",
    subtitle: "Sign Language Recognition System",
    category: "Computer Vision",
    categoryColor: "primary",
    featured: true,
    status: "Hackathon Project",
    year: "2025",
    isFYP: false,
    problem:
      "Communication barriers between sign language users and non-signers in everyday contexts.",
    contribution:
      "Contributed to model pipeline and real-time inference interface.",
    description:
      "AI system that recognizes sign language gestures in real-time and translates them into text.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Streamlit"],
    github: "[ADD IN ADMIN]",
    demo: "[ADD IN ADMIN]",
    accent: "primary",
  },
  {
    id: "socialpost",
    number: "04",
    title: "SocialPost AI",
    subtitle: "AI-Powered Social Media Content Generator",
    category: "Generative AI",
    categoryColor: "emerald-accent",
    featured: false,
    status: "Completed",
    year: "2024",
    isFYP: false,
    problem:
      "Creating consistent, on-brand social media content takes time most creators don't have.",
    contribution:
      "Designed the UI and integrated LLM APIs for content generation.",
    description:
      "Web app that generates platform-specific social media posts from a short prompt.",
    technologies: ["Next.js", "OpenAI API", "Tailwind"],
    github: "[ADD IN ADMIN]",
    demo: "[ADD IN ADMIN]",
    accent: "emerald-accent",
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  "AI & Marketing",
  "Hackathon",
  "Computer Vision",
  "Generative AI",
];