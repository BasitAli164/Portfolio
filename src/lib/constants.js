/**
 * Portfolio Constants
 * 
 * Central place for Basit Ali's profile data.
 * 
 * Fields marked [ADD IN ADMIN] are placeholders.
 */

export const PROFILE = {
  name: "Basit Ali",
  headline: "Full-Stack Developer & Generative AI Engineer",
  tagline: "Aspiring AI Researcher",
  intro:
    "Final-year BS Computer Science student at the University of Baltistan, Skardu, with experience in student leadership, coordination, training, and teamwork. Through my experience at NetBots, I have contributed to web application development, debugging, testing, and deployment. I have also collaborated with international teams in AI and software development hackathons, building projects such as SignPulseAI and HeatShield AI. I aspire to pursue postgraduate studies, deepen my expertise in Generative AI and Large Language Models, and participate in international research and technology competitions.",
  location: "Skardu, Pakistan",
  email: "basitdeveloper911@gmail.com",
  social: {
    github: "https://github.com/BasitAli164", // [ADD IN ADMIN]
    linkedin: "https://www.linkedin.com/in/basit-ali-abdupa/", // [ADD IN ADMIN]
    huggingface: "https://huggingface.co/BasitAliii", // [ADD IN ADMIN]
    streamlite: "",
    googleScholar:"",
    vercel:"",
    kaggle:"",
    youtube:""
  },
  
};

export const EDUCATION = [
  {
    id: "bs",
    institution: "University of Baltistan, Skardu",
    qualification: "BS Computer Science",
    field: "Computer Science",
    startDate: "2023",
    endDate: "January 2027",
    status: "In Progress — 8th Semester",
    grade: "CGPA: 3.7",
    description:
      "Currently in final year. Focus areas include software engineering, Artificial Intelligent, and full-stack development.",
  },
  {
    id: "intermediate",
    institution: "Boys Degree College, Skardu",
    qualification: "Intermediate (FSc)",
    field: "ICS",
    startDate: "01 Aug 2020",
    endDate: "01 Aug 2022",
    status: "Complete",
    grade: "A",
    description: "[Add in Admin]",
  },
  {
    id: "matriculation",
    institution: "Boys High School Kushmarah, Skardu",
    qualification: "Matriculation",
    field: "Science",
    startDate: "01 March 2008",
    endDate: "30th July 2020",
    status: "Completed",
    grade: "B",
    description: "[Add in Admin]",
  },
];

export const SKILLS = [
  {
    category: "Programming Languages",
    items: ["JavaScript", "Python", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "SQLite"],
  },
  {
    category: "Generative AI & LLMs",
    items: [
      "LLM Integration",
      "Prompt Engineering",
      "RAG",
      "Hugging Face",
      "AI APIs",
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "Railway",
      "Cloudinary",
      "Google Colab",
      "Gradio",
    ],
  },
];

/**
 * NAV_LINKS — Multi-page navigation
 * 
 * `href` — actual routes (/about, /projects, etc.)
 * `primary: true` — shown directly in desktop navbar
 * `primary: false` — appears in "More" dropdown
 * 
 * Mobile menu shows ALL links.
 */
export const NAV_LINKS = [
  { label: "Home", href: "/", primary: true },
  { label: "About", href: "/about", primary: true },
  { label: "Education", href: "/education", primary: false },
  { label: "Skills", href: "/skills", primary: false },
  { label: "Projects", href: "/projects", primary: true },
  { label: "Research", href: "/research", primary: true },
  { label: "Hackathons", href: "/hackathons", primary: false },
  { label: "Problem Solving", href: "/problem-solving", primary: false },
  { label: "Teaching", href: "/teaching", primary: false },
  { label: "Experience", href: "/experience", primary: false },
  { label: "Achievements", href: "/achievements", primary: false },
  { label: "Contact", href: "/contact", primary: true },
];

// Derived lists for navbar
export const PRIMARY_NAV_LINKS = NAV_LINKS.filter((l) => l.primary);
export const SECONDARY_NAV_LINKS = NAV_LINKS.filter((l) => !l.primary);