import { Code2, CheckCircle2, AlertCircle, Terminal } from "lucide-react";
import { Container } from "@/components/ui/container";
import {
  PROBLEM_STATS,
  PROBLEM_ACTIVITIES,
  PROBLEM_LANGUAGES,
} from "@/lib/problem-solving-data";

/* ═══════════════════════════════════════════════════════════
   Problem Solving Section — Editorial / Terminal aesthetic
   ═══════════════════════════════════════════════════════════ */

export function ProblemSolving() {
  return (
    <section
      id="problem-solving"
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
              Problem Solving
            </span>
          </div>

          <h2 className="mt-4 max-w-4xl font-serif text-[2.75rem] font-normal leading-[0.95] tracking-[-0.02em] text-foreground sm:text-[3.5rem] lg:text-[4.5rem]">
            Algorithms, logic, and{" "}
            <span className="italic text-primary">the joy</span>
            <br />
            of solving hard{" "}
            <span className="italic text-emerald-accent">problems</span>.
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
                S
              </span>
              olving problems is the purest form of engineering practice. It
              trains the mind to see patterns, break assumptions, and stay
              methodical when the answer isn&apos;t obvious.
            </p>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              I actively engage with competitive programming platforms and
              logic-based challenges. The statistics below reflect only what I
              can verify — no inflated numbers, no unverified claims.
            </p>

            {/* Stats grid */}
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-6 sm:grid-cols-4">
              {PROBLEM_STATS.map((stat) => (
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
                      stat.value.includes("[ADD")
                        ? "mt-1.5 font-mono text-xs text-yellow-600 dark:text-yellow-400"
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

            {/* Languages */}
            <div className="mt-8 border-t border-border pt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Primary Languages
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {PROBLEM_LANGUAGES.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5"
                  >
                    <Code2
                      className={
                        lang.accent === "primary"
                          ? "h-3.5 w-3.5 text-primary"
                          : "h-3.5 w-3.5 text-emerald-accent"
                      }
                    />
                    <span className="font-mono text-xs text-foreground">
                      {lang.name}
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Terminal problem log */}
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
                  problems.log
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase text-emerald-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent animate-pulse" />
                  Active
                </span>
              </div>

              {/* Content */}
              <div className="p-4 font-mono text-xs leading-relaxed sm:p-5">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary">$</span>
                  <span>cat problems.log</span>
                </div>

                <div className="mt-3 space-y-2 border-l-2 border-primary/30 pl-4">
                  <p className="text-muted-foreground">
                    <span className="text-emerald-accent">[INFO]</span>{" "}
                    Initializing problem-solving tracker...
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-emerald-accent">[INFO]</span>{" "}
                    Platform: HackerRank
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-emerald-accent">[INFO]</span>{" "}
                    Topics: algorithms, data structures, logic
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-yellow-500">[WARN]</span>{" "}
                    Some statistics pending verification
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-primary">[TODO]</span>{" "}
                    Update via admin dashboard
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1.5 border-t border-border pt-3 text-muted-foreground">
                  <span className="text-primary">$</span>
                  <span className="inline-block h-3 w-1.5 animate-pulse bg-primary" />
                  <span className="ml-2 opacity-60">// awaiting data</span>
                </div>
              </div>
            </div>

            {/* Philosophy quote */}
            <div className="mt-6 rounded-lg border border-border bg-surface/60 p-5 backdrop-blur-sm">
              <Terminal className="h-4 w-4 text-primary" />
              <p className="mt-3 font-serif text-base italic leading-relaxed text-foreground">
                &ldquo;The best programmers aren&apos;t the ones who know the
                most algorithms — they&apos;re the ones who stay curious when
                stuck.&rdquo;
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                — Personal practice
              </p>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            ACTIVITIES — Cards
            ═══════════════════════════════════════════════ */}
        <div className="mt-20 lg:mt-24">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              Activities · {String(PROBLEM_ACTIVITIES.length).padStart(2, "0")}
            </span>
          </div>

          <h3 className="mt-4 max-w-3xl font-serif text-3xl font-normal leading-tight tracking-tight text-foreground sm:text-4xl">
            Where I train{" "}
            <span className="italic text-primary">problem-solving</span>.
          </h3>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {PROBLEM_ACTIVITIES.map((activity) => {
              const isEmerald = activity.accent === "emerald-accent";
              const hasPlaceholder =
                activity.stats.some((s) => s.value.includes("[ADD")) ||
                activity.platform.includes("[ADD") ||
                !activity.verified;

              return (
                <article
                  key={activity.id}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-surface p-5 transition-all hover:border-primary/40 hover:shadow-md"
                >
                  {/* Top: number + verification */}
                  <div className="flex items-start justify-between">
                    <span
                      className={
                        isEmerald
                          ? "font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-accent"
                          : "font-mono text-[10px] uppercase tracking-[0.25em] text-primary"
                      }
                    >
                      {activity.number}
                    </span>
                    <span
                      className={
                        activity.verified
                          ? "flex items-center gap-1.5 rounded-full border border-emerald-accent/30 bg-emerald-accent/5 px-2 py-0.5"
                          : "flex items-center gap-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/5 px-2 py-0.5"
                      }
                    >
                      {activity.verified ? (
                        <CheckCircle2 className="h-2.5 w-2.5 text-emerald-accent" />
                      ) : (
                        <AlertCircle className="h-2.5 w-2.5 text-yellow-500" />
                      )}
                      <span
                        className={
                          activity.verified
                            ? "font-mono text-[9px] uppercase tracking-[0.15em] text-emerald-accent"
                            : "font-mono text-[9px] uppercase tracking-[0.15em] text-yellow-600 dark:text-yellow-400"
                        }
                      >
                        {activity.verified ? "Verified" : "Pending"}
                      </span>
                    </span>
                  </div>

                  {/* Platform label */}
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    {activity.platform} · {activity.type}
                  </p>

                  {/* Title */}
                  <h4 className="mt-2 font-serif text-lg font-medium leading-tight text-foreground">
                    {activity.title}
                  </h4>

                  {/* Description */}
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {activity.description}
                  </p>

                  {/* Stats mini-grid */}
                  <dl className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4">
                    {activity.stats.map((stat) => (
                      <div key={stat.label}>
                        <dt className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                          {stat.label}
                        </dt>
                        <dd
                          className={
                            stat.value.includes("[ADD")
                              ? "mt-1 text-xs font-medium text-yellow-600 dark:text-yellow-400"
                              : "mt-1 text-xs font-medium text-foreground"
                          }
                        >
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  {/* Pending badge */}
                  {hasPlaceholder && (
                    <div className="mt-3 flex items-center gap-1.5 rounded border border-dashed border-yellow-500/40 bg-yellow-500/5 px-2 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-yellow-600 dark:text-yellow-400">
                        Awaiting verification
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
      </Container>
    </section>
  );
}