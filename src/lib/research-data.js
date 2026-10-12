/**
 * Research Data
 * 
 * Research interests + publications + research projects.
 * All data verified from IEEE Xplore and published journals.
 */

export const AREAS_OF_INTEREST = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Natural Language Processing",
  "Generative AI",
  "Large Language Models (LLMs)",
  "Explainable AI (XAI)",
  "Full-Stack Development",
  "Software Engineering",
  "Mathematics",
  "Statistics and Probability",
];

export const PUBLICATIONS = [
  
  {
    id: "metamorphic-lms",
    number: "01",
    title:
      "User-Centric Metamorphic Relations: Enhancing Learning Management Systems Across Development Phases",
    authors:
      "M. Iqbal, G. Hussain, J. U. Arshed, B. Ali, D. Hussain, Y. Hussain",
    venue:
      "2025 4th International Conference on Communication, Computing and Digital Systems (C-CODE)",
    venueShort: "IEEE C-CODE 2025",
    year: "2025",
    type: "Conference Paper",
    status: "Published",
    statusColor: "emerald-accent",
    researchArea:
      "Software Testing · Metamorphic Testing · LMS Quality Assurance",
    abstract:
      "The Software Development Life Cycle (SDLC) is a systematic process followed by software engineers and project teams to ensure the successful delivery of high-quality software systems. Despite this advancement, ensuring the quality and effectiveness of Learning Management Systems (LMS) is challenging, especially when user feedback is subjective and inconsistent. This study introduces a user-centric approach that applies metamorphic relations (MRs) to enhance the accuracy and reliability of LMS evaluation responses across the SDLC phases. By formulating MRs aligned with SDLC stages, we demonstrate new dimensions of metamorphic testing (MT) usefulness. The results show that this method improves the accuracy of the evaluation and supports better informed decisions in LMS development and refinement.",
    contribution:
      "Co-author (4th position). Led the primary data collection and empirical evaluation. Designed 45–50 SDLC-aligned survey questions and collected qualitative responses from 8 class groups (organized as IT teams, administrators, and HODs) to verify whether the university's LMS followed SDLC phases and which approach was adopted. Additionally, designed and distributed a Google Form survey covering both LMS and SIS satisfaction — collecting responses from 100 participants (students and faculty combined). Evaluated the survey data to produce satisfaction results (yes/no format). Applied an NLP-based comparison on the responses from the Google Form, IT team, admin, and HOD to build a comparison chart highlighting divergences versus consensus. Also provided a screenshot of the SIS home page for inclusion in the paper.",
    doi: "10.1109/C-CODE67372.2025.11204149",
    doiDisplay: "10.1109/C-CODE67372.2025.11204149",
    paperUrl: "https://doi.org/10.1109/C-CODE67372.2025.11204149",
    pdfUrl: null,
    conference: {
      date: "01-02 October 2025",
      location: "Islamabad, Pakistan",
      publishedDate: "29 October 2025",
    },
    accent: "emerald-accent",
  },
  {
    id: "robotized-olive-farming",
    number: "02",
    title:
      "Data Collection and Analysis Empowered with AI for Robotized Olive Oil Precision Farming",
    authors:
      "H. Akhtar, I. M. Khan, B. Ali, M. Hassnain, I. Shaikh, K. Fatima",
    venue:
      "Journal of Engineering and Computational Intelligence Review (JECIR)",
    venueShort: "JECIR · Vol. 4, Issue 2",
    year: "2026",
    pages: "139–155",
    type: "Journal Article",
    status: "Published",
    statusColor: "emerald-accent",
    researchArea:
      "Precision Agriculture · Spatial Analytics · Random Forest",
    abstract:
      "This study examines robotized precision farming in olive oil production by integrating spatial data analytics and artificial intelligence (AI). The approach combines soil organic matter (OM), Normalized Difference Vegetation Index (NDVI), yield measurements, and geographic coordinates using spatial clustering, variogram analysis, Random Forest regression, and multivariate spatial analysis. Key findings: (1) spatial clustering defined three management zones despite poor OM prediction from sensor variables (R² ≈ 0), with zone-based management ~90% effective; (2) linear regression revealed an unexpectedly weak correlation between OM and olive yield (r = 0.072), redirecting optimization toward other controllable variables; and (3) robotized agricultural solutions with AI-enhanced spatial analytics provide a powerful closed-loop model for precision olive orchard management. The work advances Agriculture 5.0 by enabling smart, autonomous, and sustainable Mediterranean olive oil production.",
    contribution:
      "Co-author (3rd position). Led the data analysis and visualization — using Python libraries (Pandas, NumPy, Matplotlib, Seaborn) in Google Colab to produce the statistical and graphical results for the paper. Also contributed to the literature review and overall research writing. Delivered analytical outputs and visualizations to the research team for integration into the final manuscript.",
    doi: null,
    doiDisplay: null,
    paperUrl: null,
    pdfUrl: null,
    license: "CC BY-NC-SA",
    accent: "primary",
  },
];

export const RESEARCH_PROJECTS = [
  {
    id: "dreambank-body-in-dreams",
    number: "01",
    title: "The Body in Dreams",
    subtitle:
      "The Body in Dreams: A Quantitative Case Study of Health-Related and Bodily Imagery in the Barb Sanders Dream Series",
    description:
      "A corpus-based computational research project exploring how health-related and bodily imagery appears in the DreamBank collection — specifically the Barb Sanders dream-report series (~3,116 reports spanning 1960–1997). The study aims to characterize types of health-related content, associated emotions, and contextual situations using NLP-assisted annotation and descriptive statistics.",
    contribution:
      "Leading the computational and NLP side of the research — including dataset preparation, keyword screening, codebook-based annotation workflow, emotion/context analysis, and quantitative evaluation. Collaborating with a health researcher for medical context and interpretation.",
    technologies: [
      "Python",
      "pandas",
      "regex",
      "Jupyter",
      "Descriptive Statistics",
      "NLP",
    ],
    workflow: [
      "Dataset inspection and structured preparation with stable report IDs",
      "Keyword screening for candidate health-related reports",
      "Codebook-based multi-label annotation with contextual review",
      "Emotion and context co-occurrence analysis",
      "Descriptive statistics with transparent denominators",
      "Optional NLP/ML classifier if sufficient labelled data is available",
    ],
    status: "Proposal Stage",
    statusColor: "yellow",
    area: "Computational Dream Research · NLP · Health Text Analysis",
    collaborators: "In collaboration with a health researcher (MBBS)",
    target: "Dream Science Foundation Research Grant",
    accent: "primary",
  },
  {
    id: "smindruk-research",
    number: "02",
    title: "Dataset-Driven Trend Analysis for Digital Marketing",
    subtitle:
      "AI-based trend extraction from social media datasets",
    description:
      "Research-oriented exploration of how AI can identify emerging trends from social media datasets and translate them into actionable marketing insights.",
    contribution:
      "Designing the dataset structure and AI-driven trend extraction pipeline as part of the FYP (Smindruk).",
    technologies: ["Python", "pandas", "LLM APIs", "MongoDB"],
    workflow: [],
    status: "In Progress",
    statusColor: "emerald-accent",
    area: "Applied AI · Marketing Analytics",
    accent: "emerald-accent",
  },
  {
    id: "llm-optimization",
    number: "03",
    title: "LLM Optimization Techniques",
    subtitle:
      "Exploring faster LLM inference for real-time user interactions",
    description:
      "Exploring optimization methods for faster LLM inference — including Adam optimizer, gradient descent variants, and heuristic approaches for real-time user interactions.",
    contribution:
      "Independent exploration — reading literature and experimenting with optimization techniques for LLM inference.",
    technologies: ["Python", "PyTorch", "Optimization", "LLM Systems"],
    workflow: [],
    status: "Exploration",
    statusColor: "primary",
    area: "LLM Systems · Optimization",
    accent: "primary",
  },
];