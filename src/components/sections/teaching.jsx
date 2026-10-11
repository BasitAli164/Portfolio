import {
  Users,
  Calendar,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Terminal,
  BookOpen,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import {
  TEACHING_EXPERIENCES,
  TEACHING_TOPICS,
  TEACHING_PHILOSOPHY,
} from "@/lib/teaching-data";

/* ═══════════════════════════════════════════════════════════
   Teaching Section — Editorial / Terminal aesthetic
   ═══════════════════════════════════════════════════════════ */

export function Teaching() {
  return (
    <section
      id="teaching"
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
              Teaching &amp; Mentoring
            </span>
          </div>

          <h2 className="mt-4 max-w-4xl font-serif text-[2.75rem] font-normal leading-[0.95] tracking-[-0.02em] text-foreground sm:text-[3.5rem] lg:text-[4.5rem]">
            Sharing what I{" "}
            <span className="italic text-primary">learn</span>
            <br />
            to sharpen what I{" "}
            <span className="italic text-emerald-accent">know</span>.
          </h2>
        </div>

        {/* ═══════════════════════════════════════════════
            INTRO + PHILOSOPHY
            ═══════════════════════════════════════════════ */}
        <div className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-12">
          {/* Left: Bio */}
          <div className="lg:col-span-7">
            <p className="font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
              <span className="float-left mr-3 font-serif text-7xl leading-[0.75] text-primary">
                T
              </span>
              eaching, for me, is not a side activity — it&apos;s a core part
              of how I learn. When I explain an idea, I discover the gaps in my
              own understanding.
            </p>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              At the University of Baltistan, Skardu, I&apos;ve conducted
              hands-on Generative AI training sessions for students and peers.
              The focus has been practical — from writing Python for AI to
              building real applications with LLM APIs and RAG pipelines.
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Beyond structured training, I&apos;ve mentored junior students in
              programming fundamentals, helped with project work, and
              contributed to the computing community on campus.
            </p>

            {/* Topics pills */}
            <div className="mt-8 border-t border-border pt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Topics Covered
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {TEACHING_TOPICS.map((topic) => {
                  const isPrimary = topic.accent === "primary";
                  return (
                    <div
                      key={topic.label}
                      className="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 transition-colors hover:border-primary/40"
                    >
                      <Sparkles
                        className={
                          isPrimary
                            ? "h-3.5 w-3.5 text-primary"
                            : "h-3.5 w-3.5 text-emerald-accent"
                        }
                      />
                      <span className="font-mono text-xs text-foreground">
                        {topic.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Terminal syllabus + Philosophy */}
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
                  syllabus.md
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase text-emerald-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent animate-pulse" />
                  Live
                </span>
              </div>

              {/* Content */}
              <div className="p-4 font-mono text-xs leading-relaxed sm:p-5">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary">$</span>
                  <span>cat syllabus.md</span>
                </div>

                <div className="mt-3 space-y-3 border-l-2 border-primary/30 pl-4">
                  <div>
                    <p className="text-foreground">
                      <span className="text-emerald-accent">## </span>
                      Module 01 — Foundations
                    </p>
                    <ul className="mt-1.5 space-y-1 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">-</span>
                        <span>Python for AI</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">-</span>
                        <span>Intro to LLMs</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-foreground">
                      <span className="text-emerald-accent">## </span>
                      Module 02 — Practice
                    </p>
                    <ul className="mt-1.5 space-y-1 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">-</span>
                        <span>Prompt Engineering</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">-</span>
                        <span>AI APIs (OpenAI, HF)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-foreground">
                      <span className="text-emerald-accent">## </span>
                      Module 03 — Projects
                    </p>
                    <ul className="mt-1.5 space-y-1 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">-</span>
                        <span>RAG pipelines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">-</span>
                        <span>End-to-end AI apps</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1.5 border-t border-border pt-3 text-muted-foreground">
                  <span className="text-primary">$</span>
                  <span className="inline-block h-3 w-1.5 animate-pulse bg-primary" />
                  <span className="ml-2 opacity-60">// 3 modules, hands-on</span>
                </div>
              </div>
            </div>

            {/* Philosophy quote */}
            <div className="mt-6 rounded-lg border border-border bg-surface/60 p-5 backdrop-blur-sm">
              <BookOpen className="h-4 w-4 text-primary" />
              <p className="mt-3 font-serif text-base italic leading-relaxed text-foreground">
                &ldquo;{TEACHING_PHILOSOPHY.quote}&rdquo;
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                — {TEACHING_PHILOSOPHY.attribution}
              </p>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            EXPERIENCE CARDS
            ═══════════════════════════════════════════════ */}
        <div className="mt-20 lg:mt-24">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              Programs · {String(TEACHING_EXPERIENCES.length).padStart(2, "0")}
            </span>
          </div>

          <h3 className="mt-4 max-w-3xl font-serif text-3xl font-normal leading-tight tracking-tight text-foreground sm:text-4xl">
            Programs I&apos;ve{" "}
            <span className="italic text-primary">delivered</span>.
          </h3>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {TEACHING_EXPERIENCES.map((exp) => {
              const isEmerald = exp.accent === "emerald-accent";

              return (
                <article
                  key={exp.id}
                  className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface p-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-md sm:p-6"
                >
                  {/* Top row: number + status */}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <span
                      className={
                        isEmerald
                          ? "font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-accent"
                          : "font-mono text-[10px] uppercase tracking-[0.25em] text-primary"
                      }
                    >
                      {exp.number} / {exp.role}
                    </span>
                    <span
                      className={
                        exp.verified
                          ? "flex items-center gap-1.5 rounded-full border border-emerald-accent/40 bg-emerald-accent/10 px-2.5 py-1"
                          : "flex items-center gap-1.5 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-2.5 py-1"
                      }
                    >
                      {exp.verified ? (
                        <CheckCircle2 className="h-3 w-3 text-emerald-accent" />
                      ) : (
                        <AlertCircle className="h-3 w-3 text-yellow-600 dark:text-yellow-400" />
                      )}
                      <span
                        className={
                          exp.verified
                            ? "font-mono text-[9px] uppercase tracking-[0.15em] text-emerald-accent"
                            : "font-mono text-[9px] uppercase tracking-[0.15em] text-yellow-600 dark:text-yellow-400"
                        }
                      >
                        {exp.verified ? "Verified" : "Details Pending"}
                      </span>
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="mt-4 font-serif text-2xl font-medium leading-tight text-foreground">
                    {exp.title}
                  </h4>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {exp.subtitle}
                  </p>

                  {/* Meta grid */}
                  <dl className="mt-5 grid gap-4 border-t border-border pt-5 sm:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <Calendar className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      <div>
                        <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                          Date
                        </dt>
                        <dd
                          className={
                            exp.date?.includes("[ADD")
                              ? "mt-1 font-mono text-xs text-yellow-600 dark:text-yellow-400"
                              : "mt-1 text-sm font-medium text-foreground"
                          }
                        >
                          {exp.date}
                        </dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Users className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-accent" />
                      <div>
                        <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                          Audience
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-foreground">
                          {exp.audience}
                        </dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 sm:col-span-2">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      <div>
                        <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                          Location
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-foreground">
                          {exp.location}
                        </dd>
                      </div>
                    </div>
                  </dl>

                  {/* Description */}
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>

                  {/* Topics */}
                  {exp.topics && exp.topics.length > 0 && (
                    <div className="mt-5">
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary">
                        Topics Covered
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {exp.topics.map((topic) => (
                          <span
                            key={topic}
                            className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[11px] text-muted-foreground"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Outcomes */}
                  {exp.outcomes && exp.outcomes.length > 0 && (
                    <div className="mt-5 rounded-md border-l-2 border-emerald-accent/40 bg-background/50 px-3 py-2">
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-accent">
                        Outcomes
                      </p>
                      <ul className="mt-1.5 space-y-1">
                        {exp.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className={
                              outcome.includes("[ADD")
                                ? "text-xs text-yellow-600 dark:text-yellow-400"
                                : "text-xs text-foreground"
                            }
                          >
                            {outcome.includes("[ADD") ? "⚠ " : "✓ "}
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Bottom accent */}
                  <div
                    className={
                      isEmerald
                        ? "mt-5 h-px w-8 bg-emerald-accent transition-all group-hover:w-full"
                        : "mt-5 h-px w-8 bg-primary transition-all group-hover:w-full"
                    }
                  />
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}