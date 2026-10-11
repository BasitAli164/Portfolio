/**
 * Page Order & Metadata
 * 
 * Defines the sequence of section pages.
 * Used for Prev/Next navigation and header metadata.
 */

export const PAGE_ORDER = [
  { href: "/", label: "Home", chapter: "Chapter I", number: "01" },
  { href: "/about", label: "About", chapter: "Chapter II", number: "02" },
  { href: "/education", label: "Education", chapter: "Chapter III", number: "03" },
  { href: "/skills", label: "Skills", chapter: "Chapter IV", number: "04" },
  { href: "/projects", label: "Projects", chapter: "Chapter V", number: "05" },
  { href: "/research", label: "Research", chapter: "Chapter VI", number: "06" },
  { href: "/hackathons", label: "Hackathons", chapter: "Chapter VII", number: "07" },
  { href: "/problem-solving", label: "Problem Solving", chapter: "Chapter VIII", number: "08" },
  { href: "/teaching", label: "Teaching", chapter: "Chapter IX", number: "09" },
  { href: "/experience", label: "Experience", chapter: "Chapter X", number: "10" },
  { href: "/achievements", label: "Achievements", chapter: "Chapter XI", number: "11" },
  { href: "/contact", label: "Contact", chapter: "Chapter XII", number: "12" },
];

/**
 * Get prev/next by href. Returns null if at an edge.
 */
export function getPrevNext(href) {
  const index = PAGE_ORDER.findIndex((p) => p.href === href);
  if (index === -1) return { prev: null, next: null, current: null };
  return {
    prev: index > 0 ? PAGE_ORDER[index - 1] : null,
    next: index < PAGE_ORDER.length - 1 ? PAGE_ORDER[index + 1] : null,
    current: PAGE_ORDER[index],
  };
}