/**
 * Teaching & Mentoring Data
 * 
 * Fields marked [ADD IN ADMIN] MUST be confirmed before publishing.
 * 
 * IMPORTANT: dates, audience, and outcomes must be accurate.
 */

export const TEACHING_EXPERIENCES = [
  {
    id: "genai-training-uobs",
    number: "01",
    title: "Generative AI Training",
    subtitle: "University of Baltistan, Skardu",
    role: "Instructor / Trainer",
    audience: "University students & peers",
    date: "[ADD IN ADMIN — actual dates]",
    duration: "[ADD IN ADMIN]",
    location: "Skardu, Pakistan",
    status: "Conducted",
    statusColor: "emerald-accent",
    description:
      "Delivered hands-on training sessions on Generative AI fundamentals, covering practical applications and real-world project building.",
    topics: [
      "Python for AI",
      "Large Language Models (LLMs)",
      "Prompt Engineering",
      "AI APIs (OpenAI, Hugging Face)",
      "AI Application Development",
      "Retrieval-Augmented Generation (RAG)",
      "Hands-on Projects",
    ],
    outcomes: [
      "[ADD IN ADMIN — number of participants]",
      "[ADD IN ADMIN — projects built by students]",
      "[ADD IN ADMIN — other measurable outcomes]",
    ],
    verified: false,
    accent: "primary",
  },
  {
    id: "computing-society",
    number: "02",
    title: "Peer Learning & Study Support",
    subtitle: "University of Baltistan Computing Society",
    role: "Peer Mentor",
    audience: "Junior CS students",
    date: "[ADD IN ADMIN]",
    duration: "[ADD IN ADMIN]",
    location: "Skardu, Pakistan",
    status: "Ongoing",
    statusColor: "emerald-accent",
    description:
      "Informal mentoring of junior students in core Computer Science topics, programming fundamentals, and project work.",
    topics: [
      "Programming Fundamentals",
      "Data Structures",
      "Project Guidance",
      "Career Advice",
    ],
    outcomes: [],
    verified: false,
    accent: "emerald-accent",
  },
];

export const TEACHING_TOPICS = [
  { icon: "python", label: "Python for AI", accent: "primary" },
  { icon: "brain", label: "LLMs", accent: "emerald-accent" },
  { icon: "sparkles", label: "Prompt Engineering", accent: "primary" },
  { icon: "api", label: "AI APIs", accent: "emerald-accent" },
  { icon: "rocket", label: "AI App Dev", accent: "primary" },
  { icon: "database", label: "RAG", accent: "emerald-accent" },
];

export const TEACHING_PHILOSOPHY = {
  quote:
    "Teaching is the fastest way to learn. Every explanation I give forces me to sharpen my own understanding — that's the real reward.",
  attribution: "Personal philosophy on teaching",
};