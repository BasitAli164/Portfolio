import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";

/**
 * PageHeader — Reusable page header
 * 
 * Used at the top of every section page (About, Education, etc.).
 * Renders:
 * - Chapter strip (Chapter II — About · № 02)
 * - Eyebrow label
 * - Big serif heading
 * - Optional right-aligned metadata
 * - Back-to-home link
 */
export function PageHeader({
  chapter,        // e.g. "Chapter II"
  chapterLabel,   // e.g. "About"
  pageNumber,     // e.g. "02"
  eyebrow,        // e.g. "Who I Am"
  title,          // ReactNode — big serif heading
  metadata,       // array of strings — right-aligned metadata
}) {
  return (
    <>
      {/* Chapter strip */}
      <div className="flex items-center justify-between border-b border-border pb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:text-[11px]">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {chapter} — {chapterLabel}
        </span>
        <span className="hidden sm:inline">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to Home
          </Link>
        </span>
        <span>№ {pageNumber}</span>
      </div>

      {/* Heading block */}
      <div className="mt-12 sm:mt-16">
        {eyebrow && (
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              {eyebrow}
            </span>
          </div>
        )}

        <h1 className="mt-4 max-w-4xl font-serif text-[2.75rem] font-normal leading-[0.95] tracking-[-0.02em] text-foreground sm:text-[3.5rem] lg:text-[4.5rem]">
          {title}
        </h1>

        {metadata && metadata.length > 0 && (
          <div className="mt-4 flex justify-end">
            <p className="max-w-[240px] text-right font-mono text-[10px] uppercase leading-relaxed tracking-[0.2em] text-muted-foreground">
              {metadata.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        )}
      </div>
    </>
  );
}