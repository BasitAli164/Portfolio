import {
  Briefcase,
  Code2,
  Users,
  Calendar,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Building2,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { EXPERIENCES, EXPERIENCE_STATS } from "@/lib/experience-data";

/* ═══════════════════════════════════════════════════════════
   Experience Section — Editorial Timeline
   ═══════════════════════════════════════════════════════════ */

// Icon per type
function TypeIcon({ type, className }) {
  switch (type) {
    case "Internship":
      return <Briefcase className={className} />;
    case "Independent":
      return <Code2 className={className} />;
    case "Collaborative":
      return <Users className={className} />;
    default:
      return <Briefcase className={className} />;
  }
}

export function Experience() {
  return (
    <section
      id="experience"
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
            HEADING
            ═══════════════════════════════════════════════ */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              Professional Path
            </span>
          </div>

          <h2 className="mt-4 max-w-4xl font-serif text-[2.75rem] font-normal leading-[0.95] tracking-[-0.02em] text-foreground sm:text-[3.5rem] lg:text-[4.5rem]">
            Where I&apos;ve{" "}
            <span className="italic text-primary">worked</span>,
            <br />
            what I&apos;ve{" "}
            <span className="italic text-emerald-accent">shipped</span>.
          </h2>
        </div>

        {/* ═══════════════════════════════════════════════
            INTRO + STATS + TERMINAL
            ═══════════════════════════════════════════════ */}
        <div className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-12">
          {/* Left: Bio + stats */}
          <div className="lg:col-span-7">
            <p className="font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
              <span className="float-left mr-3 font-serif text-7xl leading-[0.75] text-primary">
                W
              </span>
              hile my formal experience is early-career, every role I&apos;ve
              taken has taught me something I couldn&apos;t learn from a book
              — how real teams ship software, how to debug under pressure, and
              how to be useful without a title.
            </p>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              My experience spans a formal internship, self-directed
              independent projects, and collaborative hackathon teams. Below,
              each entry is labeled honestly by type — nothing is overstated.
            </p>

            {/* Stats grid */}
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-6 sm:grid-cols-4">
              {EXPERIENCE_STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    {stat.verified ? (
                      <CheckCircle2 className="h-3 w-3 text-emerald-accent" />
                    ) : (
                      <AlertCircle className="h-3 w-3 text-yellow-500" />
                    )}
                    {stat.label}
                  </dt>
                  <dd
                    className={
                      stat.value.includes("[ADD") || String(stat.value).length > 6
                        ? "mt-1.5 text-sm font-bold text-foreground"
                        : stat.accent === "primary"
                          ? "mt-1.5 text-xl font-bold text-primary"
                          : "mt-1.5 text-xl font-bold text-emerald-accent"
                    }
                  >
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: Terminal git log */}
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
                  career.log
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase text-emerald-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent animate-pulse" />
                  Tracking
                </span>
              </div>

              {/* Git log */}
              <div className="p-4 font-mono text-[11px] leading-relaxed sm:p-5">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary">$</span>
                  <span>git log --oneline --career</span>
                </div>

                <div className="mt-3 space-y-2 border-l-2 border-primary/30 pl-4">
                  {EXPERIENCES.map((exp) => (
                    <div key={exp.id} className="flex items-start gap-2">
                      <span className="shrink-0 text-emerald-accent">
                        {exp.number}
                      </span>
                      <div className="min-w-0">
                        <p
                          className={
                            exp.accent === "emerald-accent"
                              ? "text-foreground"
                              : "text-primary"
                          }
                        >
                          {exp.role}
                        </p>
                        <p className="text-muted-foreground">
                          @ {exp.company} · {exp.startDate} →{" "}
                          {exp.current ? "present" : exp.endDate}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-1.5 border-t border-border pt-3 text-muted-foreground">
                  <span className="text-primary">$</span>
                  <span className="inline-block h-3 w-1.5 animate-pulse bg-primary" />
                  <span className="ml-2 opacity-60">// ongoing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            EXPERIENCE TIMELINE
            ═══════════════════════════════════════════════ */}
        <div className="mt-20 lg:mt-24">
          {/* Section label */}
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              Timeline · {String(EXPERIENCES.length).padStart(2, "0")} Entries
            </span>
          </div>

          <h3 className="mt-4 max-w-3xl font-serif text-3xl font-normal leading-tight tracking-tight text-foreground sm:text-4xl">
            Every role,{" "}
            <span className="italic text-primary">honestly</span> labeled.
          </h3>

          <div className="relative mt-10">
            {/* Vertical line */}
            <div className="absolute left-4 top-2 bottom-2 w-px bg-border sm:left-6" />

            <div className="space-y-8 sm:space-y-10">
              {EXPERIENCES.map((exp) => {
                const isPrimary = exp.accent === "primary";
                const hasPlaceholder =
                  exp.location?.includes("[ADD") ||
                  exp.startDate?.includes("[ADD") ||
                  exp.endDate?.includes("[ADD") ||
                  exp.responsibilities?.some((r) => r.includes("[ADD")) ||
                  exp.technologies?.some((t) => t.includes("[ADD")) ||
                  !exp.verified;

                return (
                  <div key={exp.id} className="relative pl-12 sm:pl-16">
                    {/* Dot on line */}
                    <div
                      className={
                        exp.current
                          ? "absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-emerald-accent bg-background shadow-sm sm:left-2"
                          : "absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-border bg-background shadow-sm sm:left-2"
                      }
                    >
                      {exp.current && (
                        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-accent/30" />
                      )}
                      <TypeIcon
                        type={exp.type}
                        className={
                          exp.current
                            ? "h-4 w-4 text-emerald-accent"
                            : "h-4 w-4 text-muted-foreground"
                        }
                      />
                    </div>

                    {/* Card */}
                    <article
                      className={
                        exp.current
                          ? "rounded-lg border-2 border-emerald-accent/40 bg-surface p-5 shadow-lg transition-all hover:border-emerald-accent/60 sm:p-6"
                          : "rounded-lg border border-border bg-surface p-5 shadow-sm transition-all hover:border-primary/40 sm:p-6"
                      }
                    >
                      {/* Top row: number + type + status */}
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-3">
                          <span
                            className={
                              isPrimary
                                ? "font-mono text-[10px] uppercase tracking-[0.25em] text-primary"
                                : "font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-accent"
                            }
                          >
                            {exp.number}
                          </span>
                          <span className="h-3 w-px bg-border" />
                          <span
                            className={
                              isPrimary
                                ? "flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/5 px-2.5 py-0.5"
                                : "flex items-center gap-1.5 rounded-full border border-emerald-accent/40 bg-emerald-accent/5 px-2.5 py-0.5"
                            }
                          >
                            <TypeIcon
                              type={exp.type}
                              className={
                                isPrimary
                                  ? "h-3 w-3 text-primary"
                                  : "h-3 w-3 text-emerald-accent"
                              }
                            />
                            <span
                              className={
                                isPrimary
                                  ? "font-mono text-[9px] uppercase tracking-[0.15em] text-primary"
                                  : "font-mono text-[9px] uppercase tracking-[0.15em] text-emerald-accent"
                              }
                            >
                              {exp.type}
                            </span>
                          </span>
                        </div>

                        {exp.current && (
                          <span className="flex items-center gap-1.5 rounded-full border border-emerald-accent/40 bg-emerald-accent/10 px-2.5 py-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent animate-pulse" />
                            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-emerald-accent">
                              Current
                            </span>
                          </span>
                        )}

                        {hasPlaceholder && !exp.current && (
                          <span className="flex items-center gap-1.5 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-2.5 py-1">
                            <AlertCircle className="h-3 w-3 text-yellow-600 dark:text-yellow-400" />
                            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-yellow-600 dark:text-yellow-400">
                              Details Pending
                            </span>
                          </span>
                        )}
                      </div>

                      {/* Role + company */}
                      <h4 className="mt-4 font-serif text-2xl font-medium leading-tight text-foreground">
                        {exp.role}
                      </h4>
                      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                          <Building2 className="h-3 w-3 text-primary" />
                          {exp.company}
                        </span>
                        {exp.companyNote && (
                          <>
                            <span className="h-3 w-px bg-border" />
                            <span className="text-xs italic text-muted-foreground">
                              {exp.companyNote}
                            </span>
                          </>
                        )}
                      </div>

                      {/* Meta grid */}
                      <dl className="mt-5 grid gap-4 border-t border-border pt-5 sm:grid-cols-2">
                        <div className="flex items-start gap-2">
                          <Calendar className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                          <div>
                            <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                              Period
                            </dt>
                            <dd
                              className={
                                exp.startDate?.includes("[ADD")
                                  ? "mt-1 font-mono text-xs text-yellow-600 dark:text-yellow-400"
                                  : "mt-1 text-sm font-medium text-foreground"
                              }
                            >
                              {exp.startDate} → {exp.current ? "Present" : exp.endDate}
                            </dd>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-accent" />
                          <div>
                            <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                              Location
                            </dt>
                            <dd
                              className={
                                exp.location?.includes("[ADD")
                                  ? "mt-1 font-mono text-xs text-yellow-600 dark:text-yellow-400"
                                  : "mt-1 text-sm font-medium text-foreground"
                              }
                            >
                              {exp.location}
                            </dd>
                          </div>
                        </div>
                      </dl>

                      {/* Summary */}
                      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                        {exp.summary}
                      </p>

                      {/* Responsibilities */}
                      {exp.responsibilities && exp.responsibilities.length > 0 && (
                        <div className="mt-5 rounded-md border-l-2 border-primary/40 bg-background/50 px-3 py-3">
                          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary">
                            Responsibilities
                          </p>
                          <ul className="mt-2 space-y-1.5">
                            {exp.responsibilities.map((resp) => (
                              <li
                                key={resp}
                                className={
                                  resp.includes("[ADD")
                                    ? "flex items-start gap-2 text-xs text-yellow-600 dark:text-yellow-400"
                                    : "flex items-start gap-2 text-xs text-foreground"
                                }
                              >
                                <span className="mt-0.5 shrink-0 text-primary">
                                  {resp.includes("[ADD") ? "⚠" : "▸"}
                                </span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="mt-5">
                          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-accent">
                            Technologies
                          </p>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className={
                                  tech.includes("[ADD")
                                    ? "rounded border border-dashed border-yellow-500/40 bg-yellow-500/5 px-2 py-0.5 font-mono text-[10px] text-yellow-600 dark:text-yellow-400"
                                    : "rounded border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                                }
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}