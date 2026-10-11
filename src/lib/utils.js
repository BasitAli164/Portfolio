import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn — className merge utility
 * 
 * Combines clsx (conditional class joining) with tailwind-merge
 * (deduplicates conflicting Tailwind classes).
 * 
 * Example:
 *   cn("px-2 py-1", "px-4") → "py-1 px-4"  (px-4 wins)
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}