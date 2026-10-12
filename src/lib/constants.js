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

  github: "https://github.com/BasitAli164",
  linkedin: "https://www.linkedin.com/in/basit-ali-abdupa/",
  huggingface: "https://huggingface.co/BasitAliii",
  googleScholar: "https://scholar.google.com/citations?user=yn1wHesAAAAJ&hl=en",  
  streamlit: "https://share.streamlit.io/user/basitali164-0488",   
  kaggle: "https://www.kaggle.com/basitaliresearcher",         
  youtube: "https://www.youtube.com/channel/UCyvd_qiqJ1vKvLNhmXrQEiA",       
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
  "Final-year BS Computer Science student at the University of Baltistan, Skardu, with a CGPA of 3.7. My work sits at the intersection of AI engineering and full-stack development — building intelligent applications, AI-powered systems, and modern web platforms. I work across Python, JavaScript, TypeScript, and modern frameworks like Next.js, FastAPI, and Express, along with AI APIs (OpenAI, Gemini, Groq) and deployment platforms (Hugging Face, Streamlit, Vercel, Railway). Beyond development, I serve as an AI Instructor, teaching Generative AI, LLMs, prompt engineering, and practical AI application development. I'm also a published IEEE co-author and active participant in international hackathons and research competitions — currently deepening my expertise in AI systems, LLMs, and reliable intelligent software while preparing for graduate research.",
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
    description:"Completed Intermediate in ICS (Intermediate in Computer Science) from Boys Degree College, Skardu. This two-year program provided my first formal introduction to computer science — covering computer fundamental, programming fundamentals, mathematics, and Statistics. It was here that I discovered my interest in software and computational thinking, which eventually led me to pursue a BS in Computer Science.",
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
    description: "Completed Matriculation in Science from Boys High School Kushmarah, Skardu. Built early foundations in mathematics, physics, chemistry, and biology. My strongest interests emerged in mathematics — while chemistry, physics, and biology felt less aligned with my long-term direction. This stage planted the seed of curiosity that eventually led me toward computer science.",
  },
];

export const SKILLS = [
  {
    category: "Programming Languages",
    items: ["JavaScript", "Python","C++"],
  },
  {
    category: "Frontend",
    items: ["React Js", "Next.js", "Tailwind CSS","Bootstrap","Material UI","Shadcn", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs","Flask","Fast API",],
  },
  {
    category: "Databases",
    items: ["MongoDB","SQL", "SQLite"],
  },
  {
    category: "Artificial Intelligent",
    items: ["Numpy", "Pandas", "Matplotelib","Seaborn","SckitLearn","Gradio","Streamlite"],
  },
  {
    category: "Generative AI & LLMs",
    items: [
      "LLM Integration",
      "Prompt Engineering",
      "RAG",
      "Fine Tune",
      "Hugging Face",
      "API Key",
      "AI APIs",
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Git",
      "NPM",
      "Pip",
      "GitHub",
      "Postman",
      "Compas",
      "Vercel",
      "Railway",
      "Cloudinary",
      "Google Colab",
      "Hugging Face",
      "Kaggle",
      "Streamlite Cloud",
      
    
      
    ],
  },
  {
    category: "AI Tools & Platforms",
    items: [
      "ChatGPT","Claud","DeepSeek","Cursor","V0","Copolite","Grok"     
    
      
    ],
  },
];

/**
 * Projects Data
 * 
 * All projects are real and deployed. URLs confirmed by owner.
 */



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
  { label: "Education", href: "/education", primary: true },
  { label: "Skills", href: "/skills", primary: true },
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