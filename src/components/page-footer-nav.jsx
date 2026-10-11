import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

/**
 * PageFooterNav — Prev / Next navigation at the bottom of every section page.
 * 
 * Pass `prev` and `next` objects: { label, href }
 * Either can be null if there's no adjacent page.
 */
export function PageFooterNav({ current, prev, next }) {
  return (
    <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
      {/* Prev */}
      <div className="flex-1">
        {prev ? (
          <Link
            href={prev.href}
            className="group inline-flex items-center gap-3 text-left transition-colors"
          >
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
              <ArrowLeft className="h-4 w-4" />
            </span>
            <span className="flex flex-col">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Previous
              </span>
              <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                {prev.label}
              </span>
            </span>
          </Link>
        ) : (
          <span />
        )}
      </div>

      {/* Current */}
      <div className="hidden flex-1 text-center sm:block">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          {current}
        </p>
      </div>

      {/* Next */}
      <div className="flex-1 text-right">
        {next ? (
          <Link
            href={next.href}
            className="group inline-flex items-center gap-3 transition-colors sm:flex-row-reverse"
          >
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
              <ArrowRight className="h-4 w-4" />
            </span>
            <span className="flex flex-col text-right">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Next
              </span>
              <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                {next.label}
              </span>
            </span>
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}