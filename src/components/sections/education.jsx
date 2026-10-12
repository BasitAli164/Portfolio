import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { Container } from "@/components/ui/container";
import { EDUCATION } from "@/lib/constants";

/* ═══════════════════════════════════════════════════════════
   Education Section — Editorial Timeline
   ═══════════════════════════════════════════════════════════ */

// Sort by most recent first (BS on top)
const SORTED_EDUCATION = [...EDUCATION].sort((a, b) => {
  const order = { bs: 0, intermediate: 1, matriculation: 2 };
  return order[a.id] - order[b.id];
});

export function Education() {
  return (
    <section
      id="education"
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
              Academic Path
            </span>
          </div>

          <h2 className="mt-4 max-w-4xl font-serif text-[2.75rem] font-normal leading-[0.95] tracking-[-0.02em] text-foreground sm:text-[3.5rem] lg:text-[4.5rem]">
            A formal record of{" "}
            <span className="italic text-primary">learning</span>,
            <br />
            from foundations to{" "}
            <span className="italic text-emerald-accent">frontier</span>.
          </h2>
        </div>

        {/* ═══════════════════════════════════════════════
            TIMELINE
            ═══════════════════════════════════════════════ */}
        <div className="mt-16 sm:mt-20">
          {/* Section label */}
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              The Timeline
            </span>
          </div>

          <div className="relative mt-10">
            {/* Vertical line */}
            <div className="absolute left-4 top-2 bottom-2 w-px bg-border sm:left-6" />

            <div className="space-y-10 sm:space-y-12">
              {SORTED_EDUCATION.map((entry, index) => {
                const isCurrent = entry.status?.toLowerCase().includes("progress");
                const isPlaceholder = entry.institution?.includes("Add in Admin");
                const number = String(index + 1).padStart(2, "0");

                return (
                  <div
                    key={entry.id}
                    className="relative pl-12 sm:pl-16"
                  >
                    {/* Dot on line */}
                    <div
                      className={
                        isCurrent
                          ? "absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-emerald-accent bg-background shadow-sm sm:left-2"
                          : "absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-border bg-background shadow-sm sm:left-2"
                      }
                    >
                      {isCurrent && (
                        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-accent/30" />
                      )}
                      <GraduationCap
                        className={
                          isCurrent
                            ? "h-4 w-4 text-emerald-accent"
                            : "h-4 w-4 text-muted-foreground"
                        }
                      />
                    </div>

                    {/* Card */}
                    <div
                      className={
                        isCurrent
                          ? "rounded-lg border-2 border-emerald-accent/40 bg-surface p-5 shadow-lg transition-all hover:border-emerald-accent/60 sm:p-6"
                          : "rounded-lg border border-border bg-surface p-5 shadow-sm transition-all hover:border-primary/40 sm:p-6"
                      }
                    >
                      {/* Top row: number + status */}
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <span
                          className={
                            isCurrent
                              ? "font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-accent"
                              : "font-mono text-[10px] uppercase tracking-[0.25em] text-primary"
                          }
                        >
                          {number} / {entry.qualification}
                        </span>

                        {isCurrent && (
                          <span className="flex items-center gap-1.5 rounded-full border border-emerald-accent/40 bg-emerald-accent/10 px-2.5 py-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent animate-pulse" />
                            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-emerald-accent">
                              In Progress
                            </span>
                          </span>
                        )}

                        {isPlaceholder && (
                          <span className="flex items-center gap-1.5 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-2.5 py-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-yellow-600 dark:text-yellow-400">
                              Pending Admin
                            </span>
                          </span>
                        )}
                      </div>

                      {/* Institution (big) */}
                      <h3 className="mt-4 font-serif text-2xl font-medium leading-tight text-foreground sm:text-3xl">
                        {entry.institution}
                      </h3>

                      {/* Field / degree subtitle */}
                      <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                        {entry.field}
                      </p>

                      {/* Meta grid */}
                      <dl className="mt-5 grid gap-4 border-t border-border pt-5 sm:grid-cols-3">
                        <div className="flex items-start gap-2">
                          <Calendar className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                          <div>
                            <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                              Period
                            </dt>
                            <dd className="mt-1 text-sm font-medium text-foreground">
                              {entry.startDate} — {entry.endDate}
                            </dd>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <Award className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-accent" />
                          <div>
                            <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                              Grade
                            </dt>
                            <dd className="mt-1 text-sm font-medium text-foreground">
                              {entry.grade}
                            </dd>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <BookOpen className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                          <div>
                            <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                              Status
                            </dt>
                            <dd className="mt-1 text-sm font-medium text-foreground">
                              {entry.status}
                            </dd>
                          </div>
                        </div>
                      </dl>

                      {/* Description */}
                      {entry.description && !isPlaceholder && (
                        <p className="mt-5 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">
                          {entry.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            KEY COURSEWORK / FOCUS AREAS — Terminal block
            ═══════════════════════════════════════════════ */}
        <div className="mt-20 lg:mt-24">
          {/* Section label */}
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              Relevant Coursework
            </span>
          </div>

          <h3 className="mt-4 max-w-3xl font-serif text-3xl font-normal leading-tight tracking-tight text-foreground sm:text-4xl">
            Core areas from my{" "}
            <span className="italic text-primary">Computer Science</span> degree.
          </h3>

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            {/* Left: Terminal-style coursework list */}
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-sm">
                {/* Terminal title bar */}
                <div className="flex items-center justify-between border-b border-border px-3 py-2">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-destructive/70" />
                    <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
                    <span className="h-2 w-2 rounded-full bg-emerald-accent/70" />
                  </div>
                  <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
                    coursework.txt
                  </span>
                  <span className="font-mono text-[9px] uppercase text-muted-foreground">
                    BS CS
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 font-mono text-xs leading-relaxed sm:p-5">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-primary">$</span>
                    <span>ls coursework/</span>
                  </div>

                  <ul className="mt-3 space-y-2 border-l-2 border-primary/30 pl-4">
                    {[
                      "Programming Fundamental",
                      "Object Oriented Programming",
                      "Digital Logic & Design",
                      "Computer Organization & Assembly Language",
                      "Data Structures & Algorithms",
                      "Introduction to Database Systems",
                      "Operating Systems",
                      "Computer Networks",
                      "Artificial Intelligence",
                      "Digital Image Processing",
                      "Computer Vision"
                      
                    ].map((course) => (
                      <li key={course} className="flex items-start gap-2">
                        <span className="text-emerald-accent">▸</span>
                        <span className="text-foreground">{course}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex items-center gap-1.5 border-t border-border pt-3 text-muted-foreground">
                    <span className="text-primary">$</span>
                    <span className="inline-block h-3 w-1.5 animate-pulse bg-primary" />
                    <span className="ml-2 opacity-60">// 8 semesters completed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Focus areas — inline pills */}
            <div className="lg:col-span-5">
              <div className="rounded-lg border border-border bg-surface p-5 shadow-sm sm:p-6">
                <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Concentration
                </h4>
                <p className="mt-3 font-serif text-lg italic text-foreground">
                  Where my coursework converges
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Artificial Intelligence",
                    "Machine Learning",
                    "Deeplearning",
                    "Natural Language Processing",
                    "Computer Vision",
                    "Artificail Neural Netwok",
                    "Digital Image Processing",
                    "Software Engineering",
                    "Web Development",
                    "Data structure Algorithms",
                    "Calculaus & Multivariable Calculus",
                    "Linear Algebra",
                    "Statistics & Probability",

                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats grid */}
                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-5">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Current Semester
                    </p>
                    <p className="mt-1 text-lg font-bold text-foreground">
                      8th
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      CGPA
                    </p>
                    <p className="mt-1 text-lg font-bold text-primary">3.7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}