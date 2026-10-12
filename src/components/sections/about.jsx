import { ArrowUpRight, Sparkles, Terminal, Code2, Brain, Rocket } from "lucide-react";
import { Container } from "@/components/ui/container";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════════
   About Section — Editorial / Terminal aesthetic
   ═══════════════════════════════════════════════════════════ */

const CHAPTERS = [
{
  number: "01",
  icon: Terminal,
  title: "The Beginning",
  body: "My journey into technology began in Skardu, where access to computers was limited but curiosity wasn't. During Intermediate (ICS), I was first introduced to programming fundamentals — mathematics, computer science, and statistics — and that early spark stayed with me. I taught myself to code using whatever resources I could find, and this self-taught foundation still shapes how I approach every problem today.",
  accent: "primary",
},
  {
    number: "02",
    icon: Code2,
    title: "Building Systems",
    body: "I was selected for a competitive AKRSP-sponsored paid Web Development internship at NetBots (SMC-Private) Limited — a program designed to train and place students in real industry work. During the internship, I contributed to web application development, debugging, testing, and deployment. After completing the program, I was offered a Web Developer role at NetBots, where I continued contributing to production-grade software projects. This experience taught me how real teams ship software — from database schema to deployment details that only surface in production.",
    accent: "emerald-accent",
  },
  {
    number: "03",
    icon: Brain,
    title: "The AI Turn",
    body: "My interest shifted toward AI when I encountered the subject at the University of Baltistan — and realized that AI's backend is deeply rooted in mathematics and statistics. Mathematics has been my strongest subject since Matriculation, and my Intermediate (ICS) covered math, computer science, and statistics — the exact backbone of AI. Courses like Calculus and Multivariable Calculus further deepened my interest, since derivatives and optimization are central to how AI models learn. From there, I explored LLM APIs, prompt engineering, RAG architectures, and Hugging Face models — and international hackathons like AI Factory and FortyGuard gave me the space to build fast and learn faster with teams across time zones.",
    accent: "primary",
  },
  {
    number: "04",
    icon: Rocket,
    title: "What's Next",
    body: "My next goal is postgraduate studies and research in AI and related fields — including Machine Learning, Deep Learning, Computer Vision, NLP, LLMs, and Foundation Models. These areas are, at their core, applied mathematics and statistics — which is exactly where my strengths and interests converge. My goal is to contribute to research that matters, and to keep building systems that bridge academic rigor with real-world usefulness.",
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
              &apos;m an AI Engineer and Full-Stack Developer, currently in my
              final year of BS Computer Science at the University of Baltistan,
              Skardu — with a CGPA of 3.7.
            </p>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              My work sits at the intersection of AI engineering and full-stack
              development. I build intelligent applications using{" "}
              <span className="font-medium text-foreground">Python</span>,{" "}
              <span className="font-medium text-foreground">JavaScript</span>,{" "}
              <span className="font-medium text-foreground">TypeScript</span>,{" "}
              <span className="font-medium text-foreground">Next.js</span>,{" "}
              <span className="font-medium text-foreground">FastAPI</span>, and{" "}
              <span className="font-medium text-foreground">Node.js</span>{" "}
              — along with modern AI APIs like OpenAI, Gemini, and Groq. I&apos;ve
              also deployed production-grade projects on Hugging Face,
              Streamlit, Vercel, Railway, and Nginx.
            </p>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Beyond development, I serve as an{" "}
              <span className="font-medium text-foreground">AI Instructor</span>{" "}
              at my university — teaching Generative AI, LLMs, prompt
              engineering, and practical AI application development to
              Computer Science students. I&apos;m also a published{" "}
              <span className="font-medium text-foreground">IEEE co-author</span>{" "}
              in software engineering and testing research, and an active
              participant in international hackathons and technical
              competitions.
            </p>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Currently, I&apos;m deepening my expertise in AI systems, LLMs,
              and reliable intelligent software while preparing for graduate
              research in AI and related fields.
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
                      <span>AI Engineer &amp; Full-Stack Developer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">-</span>
                      <span>AI Instructor @ UoBS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">-</span>
                      <span>Preparing for grad research</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-emerald-accent/30 pl-3">
                  <p className="text-foreground">
                    <span className="text-emerald-accent">## </span>
                    Focus Areas
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {["AI", "ML", "DL", "NLP", "CV", "GenAI", "LLM"].map(
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

  {/* Cards grid — 2x2 */}
  <div className="mt-10 grid gap-5 sm:grid-cols-2">
    {CHAPTERS.map((chapter) => {
      const Icon = chapter.icon;
      const isPrimary = chapter.accent === "primary";
      return (
        <div
          key={chapter.number}
          className="group relative flex min-h-[320px] flex-col overflow-hidden rounded-xl border border-border bg-surface p-6 transition-all hover:border-primary/40 hover:shadow-lg sm:p-7"
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
              Chapter {chapter.number}
            </span>
            <span
              className={
                isPrimary
                  ? "inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/5"
                  : "inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-emerald-accent transition-colors group-hover:border-emerald-accent/40 group-hover:bg-emerald-accent/5"
              }
            >
              <Icon className="h-5 w-5" />
            </span>
          </div>

          {/* Title */}
          <h4 className="mt-5 font-serif text-xl font-medium leading-tight text-foreground sm:text-2xl">
            {chapter.title}
          </h4>

          {/* Body */}
          <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {chapter.body}
          </p>

          {/* Bottom accent line */}
          <div
            className={
              isPrimary
                ? "mt-6 h-px w-10 bg-primary transition-all group-hover:w-full"
                : "mt-6 h-px w-10 bg-emerald-accent transition-all group-hover:w-full"
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