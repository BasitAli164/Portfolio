import Link from "next/link";
import { BookOpen, ExternalLink, FileText, Sparkles, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { RESEARCH_INTERESTS, PUBLICATIONS, RESEARCH_PROJECTS } from "@/lib/research-data";

/* ═══════════════════════════════════════════════════════════
   Research Section — Academic / Editorial aesthetic
   ═══════════════════════════════════════════════════════════ */

export function Research() {
  const hasPublications = PUBLICATIONS.length > 0;

  return (
    <section
      id="research"
      className="relative overflow-hidden bg-background"
    >
      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <Container className="relative py-16 sm:py-20 lg:py-24">
        {/* ═══════════════════════════════════════════════
            HEADING — Editorial
            ═══════════════════════════════════════════════ */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              Research Direction
            </span>
          </div>

          <h2 className="mt-4 max-w-4xl font-serif text-[2.75rem] font-normal leading-[0.95] tracking-[-0.02em] text-foreground sm:text-[3.5rem] lg:text-[4.5rem]">
            Asking questions{" "}
            <span className="italic text-primary">worth</span>
            <br />
            answering — with{" "}
            <span className="italic text-emerald-accent">rigor</span>.
          </h2>
        </div>

        {/* ═══════════════════════════════════════════════
            STATEMENT — What research means to me
            ═══════════════════════════════════════════════ */}
        <div className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
              <span className="float-left mr-3 font-serif text-7xl leading-[0.75] text-primary">
                R
              </span>
              esearch, for me, is the bridge between building things and
              understanding why they work. I&apos;m drawn to problems where
              engineering meets theory — where a working system also raises a
              meaningful question about how AI should behave.
            </p>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              My current focus is on the reliability of large language models —
              evaluation, hallucination detection, and the practical engineering
              of RAG systems. I&apos;m also interested in AI safety, adversarial
              robustness, and the way agentic systems plan and reason.
            </p>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              I&apos;m actively looking for research collaborations and
              opportunities that allow me to contribute to open problems while
              pursuing graduate study.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 border-b-2 border-foreground pb-1 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Collaborate on Research
                <Sparkles className="h-4 w-4 transition-transform group-hover:scale-110" />
              </Link>
              <Link
                href="/research#publications"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                View Publications →
              </Link>
            </div>
          </div>

          {/* Right: Research interests — terminal style */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-lg">
              {/* Terminal title bar */}
              <div className="flex items-center justify-between border-b border-border px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-destructive/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
                  <span className="h-2 w-2 rounded-full bg-emerald-accent/70" />
                </div>
                <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
                  research_interests.yml
                </span>
                <span className="font-mono text-[9px] uppercase text-primary">
                  v2026
                </span>
              </div>

              {/* Content */}
              <div className="p-4 font-mono text-xs leading-relaxed sm:p-5">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary">$</span>
                  <span>cat research_interests.yml</span>
                </div>

                <ul className="mt-3 space-y-2 border-l-2 border-primary/30 pl-4">
                  {RESEARCH_INTERESTS.slice(0, 6).map((interest) => (
                    <li key={interest.number} className="flex items-start gap-2">
                      <span className="shrink-0 text-emerald-accent">
                        {interest.number}
                      </span>
                      <span className="text-foreground">{interest.title}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-2 opacity-60">
                    <span className="shrink-0 text-emerald-accent">+2</span>
                    <span className="text-muted-foreground">
                      more interests...
                    </span>
                  </li>
                </ul>

                <div className="mt-4 flex items-center gap-1.5 border-t border-border pt-3 text-muted-foreground">
                  <span className="text-primary">$</span>
                  <span className="inline-block h-3 w-1.5 animate-pulse bg-primary" />
                  <span className="ml-2 opacity-60">// open to collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            RESEARCH INTERESTS — Numbered grid
            ═══════════════════════════════════════════════ */}
        <div className="mt-20 lg:mt-24">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              Research Interests · {String(RESEARCH_INTERESTS.length).padStart(2, "0")}
            </span>
          </div>

          <h3 className="mt-4 max-w-3xl font-serif text-3xl font-normal leading-tight tracking-tight text-foreground sm:text-4xl">
            Fields where my{" "}
            <span className="italic text-primary">curiosity</span> lives.
          </h3>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RESEARCH_INTERESTS.map((interest, index) => {
              const isPrimary = index % 2 === 0;
              return (
                <div
                  key={interest.number}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-surface p-5 transition-all hover:border-primary/40 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={
                        isPrimary
                          ? "font-mono text-[10px] uppercase tracking-[0.25em] text-primary"
                          : "font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-accent"
                      }
                    >
                      {interest.number}
                    </span>
                  </div>

                  <h4 className="mt-3 font-serif text-base font-medium leading-tight text-foreground">
                    {interest.title}
                  </h4>

                  <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                    {interest.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1">
                    {interest.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div
                    className={
                      isPrimary
                        ? "mt-4 h-px w-8 bg-primary transition-all group-hover:w-full"
                        : "mt-4 h-px w-8 bg-emerald-accent transition-all group-hover:w-full"
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            PUBLICATIONS
            ═══════════════════════════════════════════════ */}
        <div id="publications" className="mt-20 lg:mt-24">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              Publications · {String(PUBLICATIONS.length).padStart(2, "0")}
            </span>
          </div>

          <h3 className="mt-4 max-w-3xl font-serif text-3xl font-normal leading-tight tracking-tight text-foreground sm:text-4xl">
            Papers and{" "}
            <span className="italic text-primary">peer-reviewed</span> work.
          </h3>

          {hasPublications ? (
            <div className="mt-10 space-y-6">
              {PUBLICATIONS.map((pub) => (
                <article
                  key={pub.id}
                  className="group relative overflow-hidden rounded-xl border border-border bg-surface p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md sm:p-8"
                >
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                      {pub.number} / {pub.type}
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-2.5 py-1">
                      <AlertCircle className="h-3 w-3 text-yellow-600 dark:text-yellow-400" />
                      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-yellow-600 dark:text-yellow-400">
                        {pub.status}
                      </span>
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="mt-4 max-w-3xl font-serif text-xl font-medium leading-snug text-foreground sm:text-2xl">
                    {pub.title}
                  </h4>

                  {/* Authors */}
                  <p className="mt-3 font-mono text-xs text-muted-foreground">
                    <span className="text-primary">Authors:</span> {pub.authors}
                  </p>

                  {/* Meta row */}
                  <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-4 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="h-3 w-3 text-primary" />
                      {pub.venue}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FileText className="h-3 w-3 text-emerald-accent" />
                      {pub.year}
                    </span>
                    <span className="text-emerald-accent">{pub.researchArea}</span>
                  </div>

                  {/* Abstract */}
                  <div className="mt-5 rounded-md border-l-2 border-primary/40 bg-background/50 px-4 py-3">
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary">
                      Abstract
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {pub.abstract}
                    </p>
                  </div>

                  {/* Contribution */}
                  {pub.contribution && (
                    <div className="mt-4 rounded-md border-l-2 border-emerald-accent/40 bg-background/50 px-4 py-3">
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-accent">
                        My Contribution
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {pub.contribution}
                      </p>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-4">
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground transition-colors hover:text-primary"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        DOI
                      </a>
                    )}
                    {pub.paperUrl && (
                      <a
                        href={pub.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground transition-colors hover:text-primary"
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        Paper
                      </a>
                    )}
                    {pub.pdfUrl && (
                      <a
                        href={pub.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground transition-colors hover:text-primary"
                      >
                        <FileText className="h-3.5 w-3.5" />
                        PDF
                      </a>
                    )}
                    {!pub.doi && !pub.paperUrl && !pub.pdfUrl && (
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                        Links — pending verification
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-lg border border-dashed border-border bg-surface/50 p-12 text-center">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Publications — coming soon
              </p>
            </div>
          )}
        </div>

        {/* ═══════════════════════════════════════════════
            RESEARCH PROJECTS
            ═══════════════════════════════════════════════ */}
        {RESEARCH_PROJECTS.length > 0 && (
          <div className="mt-20 lg:mt-24">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                Research Projects · {String(RESEARCH_PROJECTS.length).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mt-4 max-w-3xl font-serif text-3xl font-normal leading-tight tracking-tight text-foreground sm:text-4xl">
              Ongoing{" "}
              <span className="italic text-primary">explorations</span>.
            </h3>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {RESEARCH_PROJECTS.map((proj) => (
                <div
                  key={proj.id}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-surface p-5 transition-all hover:border-primary/40 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                      {proj.number}
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full border border-emerald-accent/40 bg-emerald-accent/10 px-2 py-0.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent animate-pulse" />
                      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-emerald-accent">
                        {proj.status}
                      </span>
                    </span>
                  </div>

                  <h4 className="mt-3 font-serif text-lg font-medium leading-tight text-foreground">
                    {proj.title}
                  </h4>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {proj.description}
                  </p>

                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-emerald-accent">
                    {proj.area}
                  </p>

                  <div className="mt-4 h-px w-8 bg-primary transition-all group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}