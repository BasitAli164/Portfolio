/**
 * Problem Solving Data
 * 
 * Fields marked [ADD IN ADMIN] or with verified: false 
 * MUST be confirmed before publishing.
 * 
 * IMPORTANT: only publish VERIFIED statistics.
 */

export const PROBLEM_STATS = [
  {
    label: "Problems Solved",
    value: "[ADD]",  // [ADD IN ADMIN — exact HackerRank count]
    verified: false,
    accent: "primary",
  },
  {
    label: "HackerRank Rank",
    value: "[ADD]",  // [ADD IN ADMIN — verified rank]
    verified: false,
    accent: "emerald-accent",
  },
  {
    label: "Competitions",
    value: "1+",  // [ADD IN ADMIN — verified count]
    verified: true,
    accent: "primary",
  },
  {
    label: "Contests Entered",
    value: "[ADD]",  // [ADD IN ADMIN]
    verified: false,
    accent: "emerald-accent",
  },
];

export const PROBLEM_ACTIVITIES = [
  {
    id: "hackerrank",
    number: "01",
    platform: "HackerRank",
    type: "Competitive Programming",
    title: "HackerRank Competitions",
    description:
      "Active participation in HackerRank coding challenges and competitions, focused on algorithms, data structures, and problem-solving.",
    stats: [
      { label: "Problems", value: "[ADD IN ADMIN]" },
      { label: "Badges", value: "[ADD IN ADMIN]" },
      { label: "Rank", value: "[ADD IN ADMIN]" },
    ],
    profileUrl: null, // [ADD IN ADMIN]
    verified: false,
    accent: "primary",
  },
  {
    id: "cs50-puzzle",
    number: "02",
    platform: "CS50 (Harvard)",
    type: "Puzzle Day",
    title: "CS50x Puzzle Day 2026",
    description:
      "Participated in CS50x Puzzle Day — a global event featuring logic puzzles and computational thinking challenges.",
    stats: [
      { label: "Event", value: "Puzzle Day 2026" },
      { label: "Type", value: "Global" },
      { label: "Status", value: "[ADD IN ADMIN]" },
    ],
    profileUrl: null,
    verified: false,
    accent: "emerald-accent",
  },
  {
    id: "campus-coding",
    number: "03",
    platform: "[ADD IN ADMIN]",
    type: "Campus / Regional",
    title: "Campus Coding Challenges",
    description:
      "Participation in campus-level coding challenges and technical contests organized by the University of Baltistan Computing Society.",
    stats: [
      { label: "Events", value: "[ADD IN ADMIN]" },
      { label: "Type", value: "University" },
      { label: "Status", value: "[ADD IN ADMIN]" },
    ],
    profileUrl: null,
    verified: false,
    accent: "primary",
  },
];

export const PROBLEM_LANGUAGES = [
  { name: "Python", level: "Primary", accent: "primary" },
  { name: "JavaScript", level: "Primary", accent: "primary" },
  { name: "C++", level: "Familiar", accent: "emerald-accent" },
  { name: "SQL", level: "Working", accent: "emerald-accent" },
];