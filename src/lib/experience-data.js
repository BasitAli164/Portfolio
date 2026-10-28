/**
 * Experience Data
 * 
 * Fields marked [ADD IN ADMIN] MUST be confirmed before publishing.
 * 
 * IMPORTANT: clearly distinguish internship, employment, 
 * volunteer work, and independent projects.
 * 
 * Type values: "Internship", "Employment", "Freelance", "Volunteer", "Independent"
 */

export const EXPERIENCES = [
  {
    id: "akrsp-internship",
    number: "01",
    type: "Internship",
    typeColor: "primary",
    role: "Web Development Intern",
    company: "AKRSP",
    companyNote: "AKRSP-sponsored competitive opportunity",
    location: "[ADD IN ADMIN — city/remote]",
    startDate: "[ADD IN ADMIN — month/year]",
    endDate: "[ADD IN ADMIN — month/year]",
    status: "Completed",
    statusColor: "emerald-accent",
    current: false,
    summary:
      "Selected for a competitive internship program at NetBots through an AKRSP-sponsored opportunity. Contributed to web application development, debugging, testing, and deployment.",
    responsibilities: [
      "Contributed to full-stack web application development",
      "Debugged and tested production features",
      "Assisted with deployment workflows",
      "[ADD IN ADMIN — additional responsibilities]",
    ],
    technologies: ["JavaScript", "React", "Node.js", "[ADD IN ADMIN]"],
    verified: false,
    accent: "primary",
  },
  {
    id: "independent-projects",
    number: "02",
    type: "Independent",
    typeColor: "emerald-accent",
    role: "Full-Stack & AI Developer",
    company: "Independent Projects",
    companyNote: "Self-directed work",
    location: "Skardu, Pakistan (Remote)",
    startDate: "2023",
    endDate: "Present",
    status: "Ongoing",
    statusColor: "emerald-accent",
    current: true,
    summary:
      "Building production-grade projects across full-stack and AI domains — including the FYP (Smindruk), hackathon entries, and independent experiments with LLMs, RAG systems, and modern web technologies.",
    responsibilities: [
      "Designed and shipped full-stack applications with Next.js, Node.js, and MongoDB",
      "Integrated LLM APIs and built RAG pipelines",
      "Participated in hackathons with international teams",
      "Focused on production-grade patterns (auth, deployment, testing)",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "Python", "LLM APIs"],
    verified: true,
    accent: "emerald-accent",
  },
  {
    id: "hackathon-teams",
    number: "03",
    type: "Collaborative",
    typeColor: "primary",
    role: "Team Developer",
    company: "Hackathon & Team Projects",
    companyNote: "International and local teams",
    location: "Remote / Hybrid",
    startDate: "2024",
    endDate: "Present",
    status: "Ongoing",
    statusColor: "emerald-accent",
    current: true,
    summary:
      "Collaborated with distributed teams to ship AI-focused projects under tight deadlines. See Hackathons section for individual event details.",
    responsibilities: [
      "Contributed to backend and AI integration",
      "Collaborated across time zones with async workflows",
      "Delivered working demos within hackathon timelines",
    ],
    technologies: ["Python", "FastAPI", "Streamlit", "AI APIs"],
    verified: true,
    accent: "primary",
  },
];

export const EXPERIENCE_STATS = [
  { label: "Internships", value: "1+", accent: "primary", verified: true },
  { label: "Years Coding", value: "4+", accent: "emerald-accent", verified: true },
  { label: "Team Projects", value: "5+", accent: "primary", verified: true },
  { label: "Domains", value: "AI · Web · Research", accent: "emerald-accent", verified: true },
];