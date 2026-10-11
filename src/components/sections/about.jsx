import { ArrowUpRight, Sparkles, Terminal, Code2, Brain, Rocket } from "lucide-react";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { PROFILE } from "@/lib/constants";

/* ═══════════════════════════════════════════════════════════
   About Section — Editorial / Terminal aesthetic
   ═══════════════════════════════════════════════════════════ */

const CHAPTERS = [
  {
    number: "01",
    icon: Terminal,
    title: "The Beginning",
    body: "My journey in tech began in Skardu, where access to technology was limited but curiosity wasn't. I taught myself to code from whatever resources I could find — and that self-taught foundation still shapes how I approach every problem today.",
    accent: "primary",
  },
  {
    number: "02",
    icon: Code2,
    title: "Building Systems",
    body: "Through my internship at NetBots and independent projects, I've learned to ship real software — from database schema to deployed UI. I've worked on web applications involving debugging, testing, and the kind of deployment details that only show up in production.",
    accent: "emerald-accent",
  },
  {
    number: "03",
    icon: Brain,
    title: "The AI Turn",
    body: "My focus shifted toward Generative AI — not as a trend, but as a fundamental shift in how software will be built. I've worked with LLM APIs, prompt engineering, RAG architectures, and Hugging Face models. Hackathons like SignPulseAI and HeatShield AI gave me the space to build fast and learn faster.",
    accent: "primary",
  },
  {
    number: "04",
    icon: Rocket,
    title: "What's Next",
    body: "I'm pursuing postgraduate studies and research in AI engineering, LLM evaluation, and intelligent systems. My goal is to contribute to research that matters — and to keep building things that bridge academic rigor with real-world usefulness.",
    accent: "emerald-accent",
  },
];

const STATS = [
  { label: "CGPA", value: "3.7", accent: "primary" },
  { label: "Projects", value: "6+", accent: "emerald-accent" },
  { label: "Hackathons", value: "5+", accent: "primary" },
  { label: "Years Coding", value: "4+", accent: "emerald-accent" },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-background">
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
              Who I Am
            </span>
          </div>

          <h2 className="mt-4 max-w-4xl font-serif text-[2.75rem] font-normal leading-[0.95] tracking-[-0.02em] text-foreground sm:text-[3.5rem] lg:text-[4.5rem]">
            From <span className="italic text-primary">curiosity</span> to
            <br />
            craft — a{" "}
            <span className="italic text-emerald-accent">developer&apos;s</span>
            <br />
            journey through AI.
          </h2>
        </div>

        {/* ═══════════════════════════════════════════════
            MAIN LAYOUT — 12-col asymmetric grid
            ═══════════════════════════════════════════════ */}
        <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          {/* ───── LEFT: Bio with drop cap (7 cols) ───── */}
          <div className="lg:col-span-7">
            <p className="font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
              <span className="float-left mr-3 font-serif text-7xl leading-[0.75] text-primary">
                I
              </span>
              &apos;m a final-year Computer Science student at the University of
              Baltistan, Skardu — with experience in student leadership,
              coordination, training, and teamwork that shaped how I approach
              software engineering.
            </p>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Through my internship at NetBots, I contributed to web application
              development, debugging, testing, and deployment. I&apos;ve also
              collaborated with international teams in AI and software
              development hackathons, building projects like{" "}
              <span className="font-medium text-foreground">SignPulseAI</span>{" "}
              and{" "}
              <span className="font-medium text-foreground">HeatShield AI</span>.
            </p>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              My current direction is clear: pursue postgraduate studies in AI
              engineering, deepen my expertise in Generative AI and Large
              Language Models, and participate in international research and
              technology competitions.
            </p>

            {/* ─── Stats — inline pills ─── */}
            <div className="mt-10 flex flex-wrap gap-3">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-baseline gap-2 rounded-full border border-border bg-surface px-4 py-2 transition-colors hover:border-primary/40"
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

            {/* ─── CTAs ─── */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 border-b-2 border-foreground pb-1 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Explore Projects
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/experience"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Experience →
              </Link>
              <Link
                href="/teaching"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Teaching →
              </Link>
            </div>
          </div>

          {/* ───── RIGHT: Terminal — quick info (5 cols) ───── */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-lg border border-border bg-surface/90 shadow-lg backdrop-blur-sm">
              {/* Terminal title bar */}
              <div className="flex items-center justify-between border-b border-border px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-destructive/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
                  <span className="h-2 w-2 rounded-full bg-emerald-accent/70" />
                </div>
                <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
                  about.md
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase text-emerald-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent animate-pulse" />
                  Live
                </span>
              </div>

              {/* Markdown content */}
              <div className="space-y-3 p-4 font-mono text-xs leading-relaxed">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary">$</span>
                  <span>cat about.md</span>
                </div>

                <div className="border-l-2 border-primary/30 pl-3">
                  <p className="text-foreground">
                    <span className="text-emerald-accent">## </span>
                    Currently
                  </p>
                  <ul className="mt-2 space-y-1.5 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">-</span>
                      <span>Final-year CS @ UoBS, Skardu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">-</span>
                      <span>Building AI + Full-Stack systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">-</span>
                      <span>Preparing for grad studies</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-emerald-accent/30 pl-3">
                  <p className="text-foreground">
                    <span className="text-emerald-accent">## </span>
                    Focus Areas
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {["GenAI", "LLMs", "RAG", "Next.js", "MongoDB"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded border border-border bg-background px-2 py-0.5 text-[10px] text-muted-foreground"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="border-l-2 border-primary/30 pl-3">
                  <p className="text-foreground">
                    <span className="text-emerald-accent">## </span>
                    Looking For
                  </p>
                  <ul className="mt-2 space-y-1.5 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-accent">→</span>
                      <span>Research collaborations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-accent">→</span>
                      <span>AI engineering internships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-accent">→</span>
                      <span>Graduate opportunities (Fall 2027)</span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center gap-1.5 border-t border-border pt-3 text-muted-foreground">
                  <span className="text-primary">$</span>
                  <span className="inline-block h-3 w-1.5 animate-pulse bg-primary" />
                  <span className="ml-2 opacity-60">// open to conversation</span>
                </div>
              </div>
            </div>

            {/* Quote block */}
            <div className="mt-6 rounded-lg border border-border bg-surface/60 p-5 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <p className="mt-3 font-serif text-base italic leading-relaxed text-foreground">
                &ldquo;Build things that matter. Learn in public. Move with
                intention.&rdquo;
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                — Personal philosophy
              </p>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            JOURNEY — 4 Chapter cards
            ═══════════════════════════════════════════════ */}
        <div className="mt-20 lg:mt-24">
          {/* Section label */}
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              The Journey · 04 Chapters
            </span>
          </div>

          <h3 className="mt-4 max-w-3xl font-serif text-3xl font-normal leading-tight tracking-tight text-foreground sm:text-4xl">
            Four chapters that{" "}
            <span className="italic text-primary">shaped</span> how I build.
          </h3>

          {/* Cards grid */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CHAPTERS.map((chapter) => {
              const Icon = chapter.icon;
              const isPrimary = chapter.accent === "primary";
              return (
                <div
                  key={chapter.number}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-surface p-5 transition-all hover:border-primary/40 hover:shadow-md"
                >
                  {/* Top row: number + icon */}
                  <div className="flex items-start justify-between">
                    <span
                      className={
                        isPrimary
                          ? "font-mono text-[10px] uppercase tracking-[0.25em] text-primary"
                          : "font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-accent"
                      }
                    >
                      {chapter.number}
                    </span>
                    <span
                      className={
                        isPrimary
                          ? "inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-primary transition-colors group-hover:border-primary/40"
                          : "inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-emerald-accent transition-colors group-hover:border-emerald-accent/40"
                      }
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="mt-4 font-serif text-lg font-medium leading-tight text-foreground">
                    {chapter.title}
                  </h4>

                  {/* Body */}
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {chapter.body}
                  </p>

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
      </Container>
    </section>
  );
}