import { Trophy, Users, Calendar, MapPin, Award, Flag } from "lucide-react";
import { Container } from "@/components/ui/container";
import { HACKATHONS, HACKATHON_STATS } from "@/lib/hackathons-data";

/* ═══════════════════════════════════════════════════════════
   Hackathons Section — Editorial aesthetic
   ═══════════════════════════════════════════════════════════ */

// Helper: icon based on status
function StatusIcon({ status, className }) {
  const s = status?.toLowerCase() || "";
  if (s.includes("winner")) return <Trophy className={className} />;
  if (s.includes("finalist")) return <Award className={className} />;
  if (s.includes("ranked")) return <Award className={className} />;
  if (s.includes("qualified")) return <Flag className={className} />;
  if (s.includes("selected")) return <Flag className={className} />;
  return <Users className={className} />;
}

export function Hackathons() {
  return (
    <section
      id="hackathons"
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
              Competitions
            </span>
          </div>

          <h2 className="mt-4 max-w-4xl font-serif text-[2.75rem] font-normal leading-[0.95] tracking-[-0.02em] text-foreground sm:text-[3.5rem] lg:text-[4.5rem]">
            Building under{" "}
            <span className="italic text-primary">pressure</span>,
            <br />
            learning in{" "}
            <span className="italic text-emerald-accent">public</span>.
          </h2>
        </div>

        {/* ═══════════════════════════════════════════════
            INTRO + STATS
            ═══════════════════════════════════════════════ */}
        <div className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-12">
          {/* Left: Bio */}
          <div className="lg:col-span-7">
            <p className="font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
              <span className="float-left mr-3 font-serif text-7xl leading-[0.75] text-primary">
                H
              </span>
              ackathons, for me, are where theory meets the clock. They force
              fast decisions, clean architecture, and real teamwork — the exact
              skills that matter when shipping production code.
            </p>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              I&apos;ve participated in AI-focused hackathons and international
              software development competitions, often collaborating with
              distributed teams across time zones. These events have shaped how
              I approach scope, collaboration, and delivery.
            </p>

            <p className="mt-4 text-sm italic leading-relaxed text-muted-foreground">
              Note: All event statuses below are recorded honestly —
              participation is labeled as participation, and results are
              disclosed exactly as recorded.
            </p>

            {/* Stats inline pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {HACKATHON_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-baseline gap-2 rounded-full border border-border bg-surface px-4 py-2"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    {stat.label}
                  </span>
                  <span
                    className={
                      stat.accent === "primary"
                        ? "text-sm font-bold text-primary"
                        : "text-sm font-bold text-emerald-accent"
                    }
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Terminal-style event log */}
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
                  hackathon_history.log
                </span>
                <span className="font-mono text-[9px] uppercase text-muted-foreground">
                  {HACKATHONS.length} events
                </span>
              </div>

              {/* Content */}
              <div className="p-4 font-mono text-xs leading-relaxed sm:p-5">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary">$</span>
                  <span>grep --status *.log</span>
                </div>

                <ul className="mt-3 space-y-2.5 border-l-2 border-primary/30 pl-4">
                  {HACKATHONS.map((event) => (
                    <li
                      key={event.id}
                      className="flex items-start justify-between gap-2"
                    >
                      <div className="flex items-start gap-2 min-w-0">
                        <span className="shrink-0 text-emerald-accent">
                          [{event.number}]
                        </span>
                        <span className="truncate text-foreground">
                          {event.name}
                        </span>
                      </div>
                      <span
                        className={
                          event.accent === "emerald-accent"
                            ? "shrink-0 rounded border border-emerald-accent/30 px-1.5 py-0.5 text-[9px] uppercase text-emerald-accent"
                            : "shrink-0 rounded border border-primary/30 px-1.5 py-0.5 text-[9px] uppercase text-primary"
                        }
                      >
                        {event.status}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center gap-1.5 border-t border-border pt-3 text-muted-foreground">
                  <span className="text-primary">$</span>
                  <span className="inline-block h-3 w-1.5 animate-pulse bg-primary" />
                  <span className="ml-2 opacity-60">// statuses verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            EVENT CARDS — Grid
            ═══════════════════════════════════════════════ */}
        <div className="mt-20 lg:mt-24">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              Events · {String(HACKATHONS.length).padStart(2, "0")}
            </span>
          </div>

          <h3 className="mt-4 max-w-3xl font-serif text-3xl font-normal leading-tight tracking-tight text-foreground sm:text-4xl">
            Every event,{" "}
            <span className="italic text-primary">honestly</span> documented.
          </h3>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HACKATHONS.map((event) => {
              const isEmerald = event.accent === "emerald-accent";
              const hasPlaceholder =
                event.name.includes("[ADD") ||
                event.project.includes("[ADD") ||
                event.role?.includes("[ADD") ||
                event.result?.includes("[ADD");
              return (
                <article
                  key={event.id}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-surface p-5 transition-all hover:border-primary/40 hover:shadow-md"
                >
                  {/* Top: number + status */}
                  <div className="flex items-start justify-between">
                    <span
                      className={
                        isEmerald
                          ? "font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-accent"
                          : "font-mono text-[10px] uppercase tracking-[0.25em] text-primary"
                      }
                    >
                      {event.number}
                    </span>
                    <span
                      className={
                        isEmerald
                          ? "flex items-center gap-1.5 rounded-full border border-emerald-accent/30 bg-emerald-accent/5 px-2 py-0.5"
                          : "flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-2 py-0.5"
                      }
                    >
                      <StatusIcon
                        status={event.status}
                        className={
                          isEmerald
                            ? "h-2.5 w-2.5 text-emerald-accent"
                            : "h-2.5 w-2.5 text-primary"
                        }
                      />
                      <span
                        className={
                          isEmerald
                            ? "font-mono text-[9px] uppercase tracking-[0.15em] text-emerald-accent"
                            : "font-mono text-[9px] uppercase tracking-[0.15em] text-primary"
                        }
                      >
                        {event.status}
                      </span>
                    </span>
                  </div>

                  {/* Event name */}
                  <h4 className="mt-3 font-serif text-lg font-medium leading-tight text-foreground">
                    {event.name}
                  </h4>

                  {/* Organizer */}
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    by {event.organizer}
                  </p>

                  {/* Meta row */}
                  <dl className="mt-4 space-y-2 border-t border-border pt-4 text-xs">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3 shrink-0 text-primary" />
                      <dt className="sr-only">Date</dt>
                      <dd className="text-muted-foreground">{event.date}</dd>
                    </div>
                    {event.location && event.location !== "[ADD IN ADMIN]" && (
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3 w-3 shrink-0 text-emerald-accent" />
                        <dt className="sr-only">Location</dt>
                        <dd className="text-muted-foreground">
                          {event.location}
                        </dd>
                      </div>
                    )}
                    {event.role && (
                      <div className="flex items-center gap-2">
                        <Users className="h-3 w-3 shrink-0 text-primary" />
                        <dt className="sr-only">Role</dt>
                        <dd className="text-muted-foreground">{event.role}</dd>
                      </div>
                    )}
                  </dl>

                  {/* Project */}
                  {event.project && event.project !== "[ADD IN ADMIN]" && (
                    <div className="mt-4 flex-1">
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary">
                        Project
                      </p>
                      <p className="mt-1 font-serif text-sm font-medium text-foreground">
                        {event.project}
                      </p>
                      {event.projectDescription &&
                        event.projectDescription !== "[ADD IN ADMIN]" && (
                          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                            {event.projectDescription}
                          </p>
                        )}
                    </div>
                  )}

                  {/* Result */}
                  {event.result &&
                    event.result !== "[ADD IN ADMIN]" &&
                    event.result !== "[See Problem Solving section]" && (
                      <div className="mt-4 rounded-md border-l-2 border-emerald-accent/40 bg-background/50 px-3 py-2">
                        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-accent">
                          Result
                        </p>
                        <p className="mt-1 text-xs text-foreground">
                          {event.result}
                        </p>
                      </div>
                    )}

                  {/* Pending badge */}
                  {hasPlaceholder && (
                    <div className="mt-3 flex items-center gap-1.5 rounded border border-dashed border-yellow-500/40 bg-yellow-500/5 px-2 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-yellow-600 dark:text-yellow-400">
                        Details pending
                      </span>
                    </div>
                  )}

                  {/* Bottom accent line */}
                  <div
                    className={
                      isEmerald
                        ? "mt-4 h-px w-8 bg-emerald-accent transition-all group-hover:w-full"
                        : "mt-4 h-px w-8 bg-primary transition-all group-hover:w-full"
                    }
                  />
                </article>
              );
            })}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            CLOSING NOTE — Honesty
            ═══════════════════════════════════════════════ */}
        <div className="mt-16 rounded-lg border border-border bg-surface/60 p-6 backdrop-blur-sm sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-accent/40 bg-emerald-accent/10">
              <Award className="h-5 w-5 text-emerald-accent" />
            </div>
            <div>
              <p className="font-serif text-lg italic leading-relaxed text-foreground">
                &ldquo;The value of a hackathon isn&apos;t always the trophy.
                It&apos;s the people you build with, the ideas you iterate on,
                and the code you ship under constraint.&rdquo;
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                — Personal note on competition
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}