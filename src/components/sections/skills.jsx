import { Code2, Server, Database, Brain, Wrench, Rocket, Terminal } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SKILLS } from "@/lib/constants";

/* ═══════════════════════════════════════════════════════════
   Skills Section — Editorial / Terminal aesthetic
   ═══════════════════════════════════════════════════════════ */

// Icon + accent mapping per category
const CATEGORY_META = {
  "Programming Languages": { icon: Code2, accent: "primary" },
  "Frontend": { icon: Code2, accent: "primary" },
  "Backend": { icon: Server, accent: "emerald-accent" },
  "Databases": { icon: Database, accent: "emerald-accent" },
  "Generative AI & LLMs": { icon: Brain, accent: "primary" },
  "Tools & Platforms": { icon: Wrench, accent: "emerald-accent" },
};

export function Skills() {
  return (
    <section
      id="skills"
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
              Technical Stack
            </span>
          </div>

          <h2 className="mt-4 max-w-4xl font-serif text-[2.75rem] font-normal leading-[0.95] tracking-[-0.02em] text-foreground sm:text-[3.5rem] lg:text-[4.5rem]">
            Tools I use to{" "}
            <span className="italic text-primary">build</span>,
            <br />
            ship, and{" "}
            <span className="italic text-emerald-accent">research</span>.
          </h2>
        </div>

        {/* ═══════════════════════════════════════════════
            MAIN LAYOUT — Skills terminal + categories
            ═══════════════════════════════════════════════ */}
        <div className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          {/* ───── LEFT: Terminal `ls skills/` (5 cols) ───── */}
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
                  basit@portfolio: ~/skills
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase text-emerald-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent animate-pulse" />
                  Live
                </span>
              </div>

              {/* Terminal content */}
              <div className="p-4 font-mono text-xs leading-relaxed sm:p-5">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary">$</span>
                  <span>tree skills/</span>
                </div>

                <div className="mt-3 space-y-3 border-l-2 border-primary/30 pl-4">
                  {SKILLS.map((group) => {
                    const meta = CATEGORY_META[group.category] || {};
                    const isPrimary = meta.accent === "primary";
                    return (
                      <div key={group.category}>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-accent">
                            {isPrimary ? "├──" : "└──"}
                          </span>
                          <span
                            className={
                              isPrimary
                                ? "font-medium text-primary"
                                : "font-medium text-emerald-accent"
                            }
                          >
                            {group.category.toLowerCase().replace(/\s/g, "_")}
                          </span>
                          <span className="text-muted-foreground/60">
                            ({group.items.length})
                          </span>
                        </div>
                        <div className="ml-6 mt-1.5 flex flex-wrap gap-1.5">
                          {group.items.map((item) => (
                            <span
                              key={item}
                              className="rounded border border-border bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 flex items-center gap-1.5 border-t border-border pt-3 text-muted-foreground">
                  <span className="text-primary">$</span>
                  <span className="inline-block h-3 w-1.5 animate-pulse bg-primary" />
                  <span className="ml-2 opacity-60">// 6 categories, 30+ tools</span>
                </div>
              </div>
            </div>

            {/* Philosophy block */}
            <div className="mt-6 rounded-lg border border-border bg-surface/60 p-5 backdrop-blur-sm">
              <Terminal className="h-4 w-4 text-primary" />
              <p className="mt-3 font-serif text-base italic leading-relaxed text-foreground">
                &ldquo;A tool is only as good as the problem it solves. I learn
                what I need, then go deep.&rdquo;
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                — Approach to technology
              </p>
            </div>
          </div>

          {/* ───── RIGHT: Category cards grid (7 cols) ───── */}
          <div className="lg:col-span-7">
            {/* Section label */}
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                By Category
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {SKILLS.map((group) => {
                const meta = CATEGORY_META[group.category] || {};
                const Icon = meta.icon || Code2;
                const isPrimary = meta.accent === "primary";

                return (
                  <div
                    key={group.category}
                    className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-surface p-5 transition-all hover:border-primary/40 hover:shadow-md"
                  >
                    {/* Top row: icon + count */}
                    <div className="flex items-start justify-between">
                      <span
                        className={
                          isPrimary
                            ? "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-primary transition-colors group-hover:border-primary/40"
                            : "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-emerald-accent transition-colors group-hover:border-emerald-accent/40"
                        }
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {String(group.items.length).padStart(2, "0")} skills
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 font-serif text-lg font-medium leading-tight text-foreground">
                      {group.category}
                    </h3>

                    {/* Skill tags */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[11px] text-muted-foreground transition-colors group-hover:border-primary/20 group-hover:text-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Bottom accent line */}
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
        </div>

        {/* ═══════════════════════════════════════════════
            HIGHLIGHTED CAPABILITIES — Editorial sub-block
            ═══════════════════════════════════════════════ */}
        <div className="mt-20 lg:mt-24">
          {/* Section label */}
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              Core Capabilities
            </span>
          </div>

          <h3 className="mt-4 max-w-3xl font-serif text-3xl font-normal leading-tight tracking-tight text-foreground sm:text-4xl">
            Where I{" "}
            <span className="italic text-primary">actually build</span> things.
          </h3>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Rocket,
                title: "Full-Stack Web",
                desc: "End-to-end apps with Next.js, Node.js, and MongoDB — from schema design to deployed UI.",
                accent: "primary",
              },
              {
                icon: Brain,
                title: "Generative AI",
                desc: "LLM integration, prompt engineering, and AI-powered feature development.",
                accent: "emerald-accent",
              },
              {
                icon: Terminal,
                title: "RAG Systems",
                desc: "Retrieval-augmented generation pipelines with embeddings and vector search.",
                accent: "primary",
              },
              {
                icon: Server,
                title: "APIs & Backend",
                desc: "RESTful APIs, authentication, and database architecture for production apps.",
                accent: "emerald-accent",
              },
            ].map((cap) => {
              const Icon = cap.icon;
              const isPrimary = cap.accent === "primary";
              return (
                <div
                  key={cap.title}
                  className="group relative flex flex-col rounded-lg border border-border bg-surface p-5 transition-all hover:border-primary/40 hover:shadow-md"
                >
                  <span
                    className={
                      isPrimary
                        ? "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-primary"
                        : "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-emerald-accent"
                    }
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <h4 className="mt-4 font-serif text-base font-medium leading-tight text-foreground">
                    {cap.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {cap.desc}
                  </p>
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
      </Container>
    </section>
  );
}