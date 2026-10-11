import {
  Award,
  GraduationCap,
  BadgeCheck,
  Star,
  Users,
  Heart,
  AlertCircle,
  Trophy,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { ACHIEVEMENTS, LEADERSHIP } from "@/lib/achievements-data";

/* ═══════════════════════════════════════════════════════════
   Achievements Section — Editorial aesthetic
   ═══════════════════════════════════════════════════════════ */

// Icon per category
function AchievementIcon({ category, className }) {
  switch (category) {
    case "academic":
      return <GraduationCap className={className} />;
    case "scholarship":
      return <Award className={className} />;
    case "certification":
      return <BadgeCheck className={className} />;
    case "recognition":
      return <Star className={className} />;
    case "leadership":
      return <Trophy className={className} />;
    case "community":
      return <Heart className={className} />;
    default:
      return <Award className={className} />;
  }
}

export function Achievements() {
  return (
    <section
      id="achievements"
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
              Achievements &amp; Leadership
            </span>
          </div>

          <h2 className="mt-4 max-w-4xl font-serif text-[2.75rem] font-normal leading-[0.95] tracking-[-0.02em] text-foreground sm:text-[3.5rem] lg:text-[4.5rem]">
            Milestones and{" "}
            <span className="italic text-primary">responsibilities</span>
            <br />
            that shaped the{" "}
            <span className="italic text-emerald-accent">journey</span>.
          </h2>
        </div>

        {/* ═══════════════════════════════════════════════
            INTRO + TERMINAL
            ═══════════════════════════════════════════════ */}
        <div className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-12">
          {/* Left: Bio */}
          <div className="lg:col-span-7">
            <p className="font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
              <span className="float-left mr-3 font-serif text-7xl leading-[0.75] text-primary">
                M
              </span>
              ilestones are markers, not endpoints. Each award, scholarship,
              or role listed here taught me something — discipline, service,
              or the value of showing up consistently.
            </p>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              I try to be precise: a <em>selection</em> is labeled as
              selection, a <em>nomination</em> is labeled as nomination, and
              attendance is never framed as a certification. What follows is
              an honest record.
            </p>

            {/* Highlight stats */}
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-6 sm:grid-cols-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  Scholarships
                </p>
                <p className="mt-1.5 text-xl font-bold text-primary">1+</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  Recognitions
                </p>
                <p className="mt-1.5 text-xl font-bold text-emerald-accent">
                  2+
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  Certifications
                </p>
                <p className="mt-1.5 text-xl font-bold text-primary">1+</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  Leadership
                </p>
                <p className="mt-1.5 text-xl font-bold text-emerald-accent">
                  2+
                </p>
              </div>
            </div>
          </div>

          {/* Right: Terminal achievements log */}
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
                  achievements.log
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase text-emerald-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent animate-pulse" />
                  Logged
                </span>
              </div>

              {/* Content */}
              <div className="p-4 font-mono text-xs leading-relaxed sm:p-5">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary">$</span>
                  <span>cat achievements.log | grep --important</span>
                </div>

                <div className="mt-3 space-y-2 border-l-2 border-primary/30 pl-4">
                  {ACHIEVEMENTS.map((ach) => (
                    <div key={ach.id} className="flex items-start gap-2">
                      <span className="shrink-0 text-emerald-accent">
                        [{ach.number}]
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-foreground">{ach.title}</p>
                        <p className="text-[10px] text-muted-foreground">
                          {ach.issuer} · {ach.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-1.5 border-t border-border pt-3 text-muted-foreground">
                  <span className="text-primary">$</span>
                  <span className="inline-block h-3 w-1.5 animate-pulse bg-primary" />
                  <span className="ml-2 opacity-60">// verified records only</span>
                </div>
              </div>
            </div>

            {/* Quote block */}
            <div className="mt-6 rounded-lg border border-border bg-surface/60 p-5 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <p className="mt-3 font-serif text-base italic leading-relaxed text-foreground">
                &ldquo;Achievements are proof of the past. They&apos;re not a
                promise about the future.&rdquo;
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                — Personal reflection
              </p>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            ACHIEVEMENTS GRID
            ═══════════════════════════════════════════════ */}
        <div className="mt-20 lg:mt-24">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              Achievements · {String(ACHIEVEMENTS.length).padStart(2, "0")}
            </span>
          </div>

          <h3 className="mt-4 max-w-3xl font-serif text-3xl font-normal leading-tight tracking-tight text-foreground sm:text-4xl">
            Scholarships, awards &amp;{" "}
            <span className="italic text-primary">recognitions</span>.
          </h3>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ACHIEVEMENTS.map((ach) => {
              const isEmerald = ach.accent === "emerald-accent";
              const hasPlaceholder =
                ach.year?.includes("[ADD") || !ach.verified;

              return (
                <article
                  key={ach.id}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-surface p-5 transition-all hover:border-primary/40 hover:shadow-md"
                >
                  {/* Top: number + icon */}
                  <div className="flex items-start justify-between">
                    <span
                      className={
                        isEmerald
                          ? "font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-accent"
                          : "font-mono text-[10px] uppercase tracking-[0.25em] text-primary"
                      }
                    >
                      {ach.number}
                    </span>
                    <span
                      className={
                        isEmerald
                          ? "inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-emerald-accent"
                          : "inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-primary"
                      }
                    >
                      <AchievementIcon
                        category={ach.category}
                        className="h-4 w-4"
                      />
                    </span>
                  </div>

                  {/* Type badge */}
                  <p
                    className={
                      isEmerald
                        ? "mt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-accent"
                        : "mt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-primary"
                    }
                  >
                    {ach.type}
                  </p>

                  {/* Title */}
                  <h4 className="mt-2 font-serif text-base font-medium leading-tight text-foreground">
                    {ach.title}
                  </h4>

                  {/* Issuer + year */}
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    {ach.issuer}
                  </p>
                  <p
                    className={
                      ach.year?.includes("[ADD")
                        ? "mt-1 font-mono text-[10px] text-yellow-600 dark:text-yellow-400"
                        : "mt-1 font-mono text-[10px] text-muted-foreground"
                    }
                  >
                    {ach.year}
                  </p>

                  {/* Description */}
                  <p className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground">
                    {ach.description}
                  </p>

                  {/* Pending badge */}
                  {hasPlaceholder && (
                    <div className="mt-3 flex items-center gap-1.5 rounded border border-dashed border-yellow-500/40 bg-yellow-500/5 px-2 py-1">
                      <AlertCircle className="h-2.5 w-2.5 text-yellow-600 dark:text-yellow-400" />
                      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-yellow-600 dark:text-yellow-400">
                        Verify details
                      </span>
                    </div>
                  )}

                  {/* Bottom accent */}
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
            LEADERSHIP & COMMUNITY
            ═══════════════════════════════════════════════ */}
        <div className="mt-20 lg:mt-24">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              Leadership &amp; Community · {String(LEADERSHIP.length).padStart(2, "0")}
            </span>
          </div>

          <h3 className="mt-4 max-w-3xl font-serif text-3xl font-normal leading-tight tracking-tight text-foreground sm:text-4xl">
            Roles beyond{" "}
            <span className="italic text-primary">academics</span>.
          </h3>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {LEADERSHIP.map((role) => {
              const isEmerald = role.accent === "emerald-accent";
              const hasPlaceholder =
                role.period?.includes("[ADD") || !role.verified;

              return (
                <article
                  key={role.id}
                  className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface p-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-md sm:p-6"
                >
                  {/* Top row: number + type */}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <span
                      className={
                        isEmerald
                          ? "font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-accent"
                          : "font-mono text-[10px] uppercase tracking-[0.25em] text-primary"
                      }
                    >
                      {role.number} / {role.type}
                    </span>
                    <span
                      className={
                        isEmerald
                          ? "inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-emerald-accent"
                          : "inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-primary"
                      }
                    >
                      <Users className="h-4 w-4" />
                    </span>
                  </div>

                  {/* Role */}
                  <h4 className="mt-4 font-serif text-2xl font-medium leading-tight text-foreground">
                    {role.role}
                  </h4>

                  {/* Organization */}
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {role.organization}
                  </p>

                  {/* Period */}
                  <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                      Period:
                    </span>
                    <span
                      className={
                        role.period?.includes("[ADD")
                          ? "font-mono text-xs text-yellow-600 dark:text-yellow-400"
                          : "font-mono text-xs text-foreground"
                      }
                    >
                      {role.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {role.description}
                  </p>

                  {/* Pending badge */}
                  {hasPlaceholder && (
                    <div className="mt-4 flex items-center gap-1.5 rounded border border-dashed border-yellow-500/40 bg-yellow-500/5 px-2 py-1">
                      <AlertCircle className="h-3 w-3 text-yellow-600 dark:text-yellow-400" />
                      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-yellow-600 dark:text-yellow-400">
                        Details pending
                      </span>
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