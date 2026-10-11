import { cn } from "@/lib/utils";

/**
 * Container — centers content with a max-width and horizontal padding.
 * Used by every section for consistent alignment.
 */
export function Container({ className, children, ...props }) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-6 sm:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}