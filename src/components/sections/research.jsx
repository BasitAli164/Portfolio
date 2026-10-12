import Link from "next/link";
import {
  BookOpen,
  FileText,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  ArrowUpRight,
  Calendar,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import {
  AREAS_OF_INTEREST,
  PUBLICATIONS,
  RESEARCH_PROJECTS,
} from "@/lib/research-data";

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
            STATEMENT — AI-Focused
            ═══════════════════════════════════════════════ */}
        <div className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
              <span className="float-left mr-3 font-serif text-7xl leading-[0.75] text-primary">
                I
              </span>
              &apos;m a published IEEE co-author and aspiring AI researcher
              working at the intersection of engineering and theory — where a
              working system also raises a meaningful question about how AI
              should behave. My research interest sits at the frontier of{" "}
              <span className="font-medium text-foreground">
                Generative AI, LLMs, and intelligent systems
              </span>
              .
            </p>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              My current focus is on the reliability of large language models
              — evaluation, hallucination detection, and the practical
              engineering of RAG systems. I&apos;m also drawn to AI agents,
              foundation models, and the mathematical foundations of machine
              learning — areas where my background in{" "}
              <span className="font-medium text-foreground">
                mathematics, statistics, and probability
              </span>{" "}
              provides a strong foundation.
            </p>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              I&apos;m actively looking for research collaborations and
              graduate opportunities in AI, ML, Deep Learning, Computer
              Vision, NLP, LLMs, and Foundation Models — with the goal of
              contributing to open problems at the intersection of AI,
              mathematics, and reliable intelligent systems.
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

          {/* Right: Areas of Interest — terminal style */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-lg lg:sticky lg:top-24">
              {/* Terminal title bar */}
              <div className="flex items-center justify-between border-b border-border px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-destructive/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
                  <span className="h-2 w-2 rounded-full bg-emerald-accent/70" />
                </div>
                <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
                  areas_of_interest.txt
                </span>
                <span className="font-mono text-[9px] uppercase text-primary">
                  v2026
                </span>
              </div>

              {/* Content */}
              <div className="p-4 font-mono text-xs leading-relaxed sm:p-5">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary">$</span>
                  <span>cat areas_of_interest.txt</span>
                </div>

                <ul className="mt-3 space-y-2 border-l-2 border-primary/30 pl-4">
                  {AREAS_OF_INTEREST.map((area, index) => {
                    const isPrimary = index % 2 === 0;
                    return (
                      <li
                        key={area}
                        className="flex items-start gap-2"
                      >
                        <span
                          className={
                            isPrimary
                              ? "shrink-0 text-primary"
                              : "shrink-0 text-emerald-accent"
                          }
                        >
                          ▸
                        </span>
                        <span className="text-foreground">{area}</span>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-4 flex items-center gap-1.5 border-t border-border pt-3 text-muted-foreground">
                  <span className="text-primary">$</span>
                  <span className="inline-block h-3 w-1.5 animate-pulse bg-primary" />
                  <span className="ml-2 opacity-60">
                    // {AREAS_OF_INTEREST.length} areas · open to collaboration
                  </span>
                </div>
              </div>
            </div>
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
              {PUBLICATIONS.map((pub) => {
                const isEmerald = pub.accent === "emerald-accent";
                return (
                  <article
                    key={pub.id}
                    className="group relative overflow-hidden rounded-xl border border-border bg-surface p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md sm:p-8"
                  >
                    {/* Top row: number + type + status */}
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <span
                        className={
                          isEmerald
                            ? "font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-accent"
                            : "font-mono text-[10px] uppercase tracking-[0.25em] text-primary"
                        }
                      >
                        {pub.number} / {pub.type}
                      </span>
                      <span
                        className={
                          pub.status === "Published"
                            ? "flex items-center gap-1.5 rounded-full border border-emerald-accent/40 bg-emerald-accent/10 px-2.5 py-1"
                            : "flex items-center gap-1.5 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-2.5 py-1"
                        }
                      >
                        {pub.status === "Published" ? (
                          <CheckCircle2 className="h-3 w-3 text-emerald-accent" />
                        ) : (
                          <AlertCircle className="h-3 w-3 text-yellow-600 dark:text-yellow-400" />
                        )}
                        <span
                          className={
                            pub.status === "Published"
                              ? "font-mono text-[9px] uppercase tracking-[0.15em] text-emerald-accent"
                              : "font-mono text-[9px] uppercase tracking-[0.15em] text-yellow-600 dark:text-yellow-400"
                          }
                        >
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
                      <span className="text-primary">Authors:</span>{" "}
                      {pub.authors}
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
                        {pub.pages && ` · pp. ${pub.pages}`}
                      </span>
                      <span className="text-emerald-accent">
                        {pub.researchArea}
                      </span>
                    </div>

                    {/* Conference details */}
                    {pub.conference && (
                      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                        {pub.conference.date && (
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-3 w-3 text-primary" />
                            {pub.conference.date}
                          </span>
                        )}
                        {pub.conference.location && (
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-3 w-3 text-emerald-accent" />
                            {pub.conference.location}
                          </span>
                        )}
                      </div>
                    )}

                    {/* DOI */}
                    {pub.doi && (
                      <p className="mt-3 font-mono text-[10px] tracking-[0.1em] text-muted-foreground">
                        <span className="text-primary">DOI:</span>{" "}
                        <span className="text-foreground">{pub.doi}</span>
                      </p>
                    )}

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
                      {pub.paperUrl && (
                        <a
                          href={pub.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground transition-colors hover:text-primary"
                        >
                          <BookOpen className="h-3.5 w-3.5" />
                          {pub.doi ? "View on IEEE Xplore" : "View Paper"}
                          <ArrowUpRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
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
                );
              })}
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
                Research Projects ·{" "}
                {String(RESEARCH_PROJECTS.length).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mt-4 max-w-3xl font-serif text-3xl font-normal leading-tight tracking-tight text-foreground sm:text-4xl">
              Ongoing{" "}
              <span className="italic text-primary">explorations</span>.
            </h3>

            {/* ═══ Research Projects — Enhanced cards ═══ */}
            <div className="mt-10 space-y-6">
              {RESEARCH_PROJECTS.map((proj) => {
                const isPrimary = proj.accent === "primary";
                const isYellow = proj.statusColor === "yellow";

                return (
                  <article
                    key={proj.id}
                    className="group relative overflow-hidden rounded-xl border border-border bg-surface p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md sm:p-8"
                  >
                    {/* Top row: number + status */}
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <span
                        className={
                          isPrimary
                            ? "font-mono text-[10px] uppercase tracking-[0.25em] text-primary"
                            : "font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-accent"
                        }
                      >
                        {proj.number}
                      </span>
                      <span
                        className={
                          isYellow
                            ? "flex items-center gap-1.5 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-2.5 py-1"
                            : "flex items-center gap-1.5 rounded-full border border-emerald-accent/40 bg-emerald-accent/10 px-2.5 py-1"
                        }
                      >
                        <span
                          className={
                            isYellow
                              ? "h-1.5 w-1.5 rounded-full bg-yellow-500 animate-pulse"
                              : "h-1.5 w-1.5 rounded-full bg-emerald-accent animate-pulse"
                          }
                        />
                        <span
                          className={
                            isYellow
                              ? "font-mono text-[9px] uppercase tracking-[0.15em] text-yellow-600 dark:text-yellow-400"
                              : "font-mono text-[9px] uppercase tracking-[0.15em] text-emerald-accent"
                          }
                        >
                          {proj.status}
                        </span>
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="mt-4 max-w-3xl font-serif text-xl font-medium leading-snug text-foreground sm:text-2xl">
                      {proj.title}
                    </h4>

                    {/* Subtitle */}
                    {proj.subtitle && (
                      <p className="mt-2 max-w-3xl font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                        {proj.subtitle}
                      </p>
                    )}

                    {/* Meta row */}
                    <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-4 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                      <span
                        className={
                          isPrimary ? "text-primary" : "text-emerald-accent"
                        }
                      >
                        {proj.area}
                      </span>
                      {proj.collaborators && (
                        <span>{proj.collaborators}</span>
                      )}
                      {proj.target && (
                        <span className="flex items-center gap-1.5">
                          <Sparkles className="h-3 w-3 text-primary" />
                          {proj.target}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <div className="mt-5 rounded-md border-l-2 border-primary/40 bg-background/50 px-4 py-3">
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary">
                        Overview
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {proj.description}
                      </p>
                    </div>

                    {/* Contribution */}
                    {proj.contribution && (
                      <div className="mt-4 rounded-md border-l-2 border-emerald-accent/40 bg-background/50 px-4 py-3">
                        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-accent">
                          My Contribution
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {proj.contribution}
                        </p>
                      </div>
                    )}

                    {/* Workflow */}
                    {proj.workflow && proj.workflow.length > 0 && (
                      <div className="mt-4 rounded-md border border-border bg-background/50 px-4 py-3">
                        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary">
                          Proposed Workflow
                        </p>
                        <ul className="mt-3 space-y-1.5">
                          {proj.workflow.map((step, i) => (
                            <li
                              key={step}
                              className="flex items-start gap-3 text-xs leading-relaxed text-muted-foreground"
                            >
                              <span className="shrink-0 font-mono text-[10px] text-emerald-accent">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    {proj.technologies && proj.technologies.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {proj.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Bottom accent */}
                    <div
                      className={
                        isPrimary
                          ? "mt-5 h-px w-8 bg-primary transition-all group-hover:w-full"
                          : "mt-5 h-px w-8 bg-emerald-accent transition-all group-hover:w-full"
                      }
                    />
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}