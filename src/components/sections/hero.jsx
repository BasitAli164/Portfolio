"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FileText, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PROFILE, EDUCATION, SKILLS } from "@/lib/constants";
import { PROJECTS } from "@/lib/projects-data";
import { RESEARCH_INTERESTS } from "@/lib/research-data";
import { HACKATHONS } from "@/lib/hackathons-data";
import { PROBLEM_ACTIVITIES } from "@/lib/problem-solving-data";
import { TEACHING_EXPERIENCES } from "@/lib/teaching-data";
import { EXPERIENCES } from "@/lib/experience-data";
import { ACHIEVEMENTS, LEADERSHIP } from "@/lib/achievements-data";

/* ═══════════════════════════════════════════════════════════
   Custom Brand Icons
   ═══════════════════════════════════════════════════════════ */
function GithubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   Neural Network Canvas
   ═══════════════════════════════════════════════════════════ */
function NeuralCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    let nodes = [];
    const mouse = { x: -1000, y: -1000 };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      nodes = [];
      const count = Math.floor((canvas.width * canvas.height) / 24000);
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
        });
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    canvas.addEventListener("mousemove", handleMouse);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });
      nodes.forEach((n, i) => {
        nodes.slice(i + 1).forEach((o) => {
          const dx = n.x - o.x;
          const dy = n.y - o.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.strokeStyle = `rgba(37, 99, 235, ${(1 - d / 120) * 0.22})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(o.x, o.y);
            ctx.stroke();
          }
        });
      });
      nodes.forEach((n) => {
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        ctx.fillStyle =
          d < 100 ? "rgba(16, 185, 129, 0.9)" : "rgba(37, 99, 235, 0.5)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, d < 100 ? 3.2 : 1.4, 0, Math.PI * 2);
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-40"
      aria-hidden="true"
    />
  );
}

/* ═══════════════════════════════════════════════════════════
   Typing Text
   ═══════════════════════════════════════════════════════════ */
function TypingText({ text, delay = 0 }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const int = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
      } else clearInterval(int);
    }, 20);
    return () => clearInterval(int);
  }, [text, started]);

  if (!started) return <span className="opacity-0">{text}</span>;
  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="ml-0.5 inline-block h-3 w-1.5 animate-pulse bg-primary align-middle" />
      )}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════
   ChapterPreview — Magazine-style TOC entry
   ═══════════════════════════════════════════════════════════ */
function ChapterPreview({ chapter, number, label, title, href, accent = "primary", children }) {
  const isEmerald = accent === "emerald-accent";

  return (
    <article className="group relative">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        {/* ─── LEFT: Chapter number + label (3 cols) ─── */}
        <div className="lg:col-span-3">
          <div className="sticky top-24">
            {/* Big number watermark */}
            <div
              className={
                isEmerald
                  ? "font-serif text-[5rem] font-normal leading-none tracking-tight text-emerald-accent/20 sm:text-[7rem]"
                  : "font-serif text-[5rem] font-normal leading-none tracking-tight text-primary/20 sm:text-[7rem]"
              }
              aria-hidden="true"
            >
              {number}
            </div>

            {/* Chapter label */}
            <div className="mt-4 flex items-center gap-3">
              <span
                className={
                  isEmerald
                    ? "h-px w-8 bg-emerald-accent"
                    : "h-px w-8 bg-primary"
                }
              />
              <span
                className={
                  isEmerald
                    ? "font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-accent"
                    : "font-mono text-[10px] uppercase tracking-[0.25em] text-primary"
                }
              >
                {chapter}
              </span>
            </div>

            {/* Chapter name */}
            <h3 className="mt-3 font-serif text-3xl font-normal leading-tight tracking-tight text-foreground sm:text-4xl">
              {label}
            </h3>

            {/* Read chapter link */}
            <Link
              href={href}
              className={
                isEmerald
                  ? "group/link mt-6 inline-flex items-center gap-2 border-b-2 border-emerald-accent/60 pb-1 text-sm font-medium text-foreground transition-colors hover:border-emerald-accent hover:text-emerald-accent"
                  : "group/link mt-6 inline-flex items-center gap-2 border-b-2 border-primary/60 pb-1 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              }
            >
              Read chapter
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* ─── RIGHT: Content preview (9 cols) ─── */}
        <div className="lg:col-span-9">
          {/* Top: Big serif title */}
          <div className="border-t-2 border-border pt-8">
            <h4 className="max-w-2xl font-serif text-2xl font-normal leading-snug tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              {title}
            </h4>
          </div>

          {/* Preview content */}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </article>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN HERO — MERGED MASTERPIECE + SECTION PREVIEWS
   ═══════════════════════════════════════════════════════════ */
export function Hero() {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);
  const topSkills = SKILLS.slice(0, 4);
  const topInterests = RESEARCH_INTERESTS.slice(0, 4);
  const topHackathons = HACKATHONS.slice(0, 3);
  const topAchievements = ACHIEVEMENTS.slice(0, 3);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          HERO — Original content preserved
          ═══════════════════════════════════════════════════════════ */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-background"
      >
        {/* Neural network canvas */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <NeuralCanvas />
        </div>

        {/* Gradient blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-emerald-accent/5 blur-3xl" />
        </div>

        <Container className="relative py-8 sm:py-10 lg:py-12">
          {/* TOP STRIP */}
          <div className="flex items-center justify-between border-b border-border pb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:text-[11px]">
            <span className="hidden sm:inline">Chapter I — Introduction</span>
            <span>№ 01</span>
          </div>

          {/* MASSIVE SERIF NAME — CENTERED */}
          <div className="relative mt-10 text-center sm:mt-14 lg:mt-16">
            <div className="flex items-center justify-start gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                Portfolio
              </span>
            </div>

            <h1 className="mt-4 font-serif text-[3.5rem] font-normal leading-[0.82] tracking-[-0.03em] text-foreground sm:text-[5.5rem] lg:text-[8rem] xl:text-[9.5rem]">
              <span className="block">Basit</span>
              <span className="block mt-3">
                <span className="text-primary italic">Ali</span>
                <span className="text-emerald-accent">.</span>
              </span>
            </h1>

            <div className="mt-4 flex justify-end sm:mt-6">
              <p className="max-w-[240px] text-center font-mono text-[10px] uppercase leading-relaxed tracking-[0.2em] text-muted-foreground">
                Full-Stack Developer
                <br />
                Generative AI Engineer
                <br />
                <span className="text-primary">Aspiring AI Researcher</span>
              </p>
            </div>
          </div>

          {/* MIDDLE ROW — Photo + Terminal */}
          <div className="mt-16 grid gap-8 sm:mt-20 lg:grid-cols-12 lg:gap-6">
            {/* Photo (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-xs lg:mx-0">
                <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/30 via-transparent to-emerald-accent/30 blur-2xl" />

                <div className="relative aspect-square overflow-hidden rounded-full border-2 border-border bg-surface shadow-2xl">
                  <Image
                    src="/profile.JPG"
                    alt={PROFILE.name}
                    fill
                    sizes="320px"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="absolute -right-2 -top-2 flex flex-col items-center rounded-xl border border-border bg-surface/95 px-3 py-2 shadow-lg backdrop-blur-sm">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-primary">
                    CGPA
                  </p>
                  <p className="text-base font-bold leading-none text-foreground">
                    3.7
                  </p>
                </div>

                <div className="absolute -bottom-2 -left-2 flex flex-col items-center rounded-xl border border-border bg-surface/95 px-3 py-2 shadow-lg backdrop-blur-sm">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-emerald-accent">
                    Projects
                  </p>
                  <p className="text-base font-bold leading-none text-foreground">
                    6+
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center lg:text-left">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Fig. 01
                </p>
                <p className="mt-1 font-serif text-sm italic text-foreground">
                  Portrait of the author — Skardu, 2026
                </p>
              </div>
            </div>

            {/* Terminal JSON (7 cols) */}
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-lg border border-border bg-surface/90 shadow-lg backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-border px-3 py-2">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-destructive/70" />
                    <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
                    <span className="h-2 w-2 rounded-full bg-emerald-accent/70" />
                  </div>
                  <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
                    basit@portfolio: ~/profile.json
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase text-emerald-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent animate-pulse" />
                    Live
                  </span>
                </div>

                <pre className="overflow-x-auto p-4 font-mono text-[11px] leading-relaxed sm:text-xs">
                  <code>
                    <span className="text-muted-foreground">{"{"}</span>
                    {"\n  "}
                    <span className="text-primary">&quot;name&quot;</span>
                    <span className="text-muted-foreground">: </span>
                    <span className="text-emerald-accent">&quot;Basit Ali&quot;</span>
                    <span className="text-muted-foreground">,</span>
                    {"\n  "}
                    <span className="text-primary">&quot;role&quot;</span>
                    <span className="text-muted-foreground">: </span>
                    <span className="text-emerald-accent">
                      &quot;AI Engineer&quot;
                    </span>
                    <span className="text-muted-foreground">,</span>
                    {"\n  "}
                    <span className="text-primary">&quot;focus&quot;</span>
                    <span className="text-muted-foreground">: [</span>
                    <span className="text-emerald-accent">&quot;GenAI&quot;</span>
                    <span className="text-muted-foreground">, </span>
                    <span className="text-emerald-accent">&quot;LLMs&quot;</span>
                    <span className="text-muted-foreground">, </span>
                    <span className="text-emerald-accent">&quot;RAG&quot;</span>
                    <span className="text-muted-foreground">],</span>
                    {"\n  "}
                    <span className="text-primary">&quot;stack&quot;</span>
                    <span className="text-muted-foreground">: [</span>
                    <span className="text-emerald-accent">&quot;Next.js&quot;</span>
                    <span className="text-muted-foreground">, </span>
                    <span className="text-emerald-accent">&quot;Node&quot;</span>
                    <span className="text-muted-foreground">, </span>
                    <span className="text-emerald-accent">&quot;MongoDB&quot;</span>
                    <span className="text-muted-foreground">],</span>
                    {"\n  "}
                    <span className="text-primary">&quot;graduating&quot;</span>
                    <span className="text-muted-foreground">: </span>
                    <span className="text-emerald-accent">
                      &quot;Jan 2027&quot;
                    </span>
                    <span className="text-muted-foreground">,</span>
                    {"\n  "}
                    <span className="text-primary">&quot;open&quot;</span>
                    <span className="text-muted-foreground">: </span>
                    <span className="text-emerald-accent">true</span>
                    {"\n"}
                    <span className="text-muted-foreground">{"}"}</span>
                  </code>
                </pre>

                <div className="flex items-center gap-1.5 border-t border-border px-4 py-2 font-mono text-[10px] text-muted-foreground">
                  <span className="text-primary">$</span>
                  <span className="inline-block h-3 w-1.5 animate-pulse bg-primary" />
                  <span className="ml-2 opacity-60">// available for opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* BIO + STATS + CTAs */}
          <div className="mt-16 sm:mt-20">
            <p className="max-w-3xl font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
              <span className="float-left mr-3 font-serif text-7xl leading-[0.75] text-primary">
                I
              </span>
              &apos;m a final-year Computer Science student at the University of
              Baltistan, Skardu — building systems where modern web engineering
              meets the frontier of Generative AI.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
              Currently exploring LLM architectures, retrieval-augmented
              generation, and the craft of AI engineering. I work across the
              full stack — from Next.js frontends to MongoDB & Node js/Express js backends — with a
              focus on research-grade reliability.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-baseline gap-2 rounded-full border border-border bg-surface px-4 py-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  CGPA
                </span>
                <span className="text-sm font-bold text-foreground">3.7</span>
              </div>
              <div className="flex items-baseline gap-2 rounded-full border border-border bg-surface px-4 py-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Projects
                </span>
                <span className="text-sm font-bold text-foreground">6+</span>
              </div>
              <div className="flex items-baseline gap-2 rounded-full border border-border bg-surface px-4 py-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Hackathons
                </span>
                <span className="text-sm font-bold text-foreground">5+</span>
              </div>
              <div className="flex items-baseline gap-2 rounded-full border border-emerald-accent/40 bg-emerald-accent/5 px-4 py-2">
                <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-emerald-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent animate-pulse" />
                  Available
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
              >
                View Selected Work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/research"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-surface px-6 text-sm font-medium text-foreground transition-colors hover:bg-elevated"
              >
                <FileText className="h-4 w-4" />
                Research &amp; Publications
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact →
              </Link>
            </div>
          </div>

          {/* AI CHAT SNIPPET */}
          <div className="mt-16 sm:mt-20">
            <div className="overflow-hidden rounded-lg border border-border bg-surface/60 backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Ask my AI
                  </span>
                </div>
                <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-emerald-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent animate-pulse" />
                  Live
                </span>
              </div>

              <div className="space-y-3 p-4 font-mono text-xs sm:p-5 sm:text-sm">
                <div className="flex gap-3">
                  <span className="shrink-0 font-semibold text-primary">you:</span>
                  <span className="text-muted-foreground">
                    What does Basit work on?
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="shrink-0 font-semibold text-emerald-accent">
                    ai:
                  </span>
                  <span className="text-foreground">
                    <TypingText
                      text="Generative AI, LLMs, RAG systems — plus full-stack apps with Next.js, Node.js, and MongoDB. Currently open to research collaborations, internships, and graduate opportunities."
                      delay={600}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TABLE OF CONTENTS — Section previews (Magazine style)
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-border bg-surface/30">
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
          {/* Section heading */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                Table of Contents
              </span>
            </div>

            <h2 className="mt-4 max-w-4xl font-serif text-[2.75rem] font-normal leading-[0.95] tracking-[-0.02em] text-foreground sm:text-[3.5rem] lg:text-[4.5rem]">
              Explore the{" "}
              <span className="italic text-primary">full</span> portfolio
              <br />
              — chapter by{" "}
              <span className="italic text-emerald-accent">chapter</span>.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Each chapter lives on its own page — deeper content, richer
              context, no endless scrolling. Pick where you want to start.
            </p>
          </div>

          {/* ═══ Magazine-style chapter previews ═══ */}
          <div className="mt-20 space-y-20 sm:space-y-24 lg:space-y-28">
            {/* CHAPTER II — About */}
            <ChapterPreview
              chapter="Chapter II"
              number="02"
              label="About"
              href="/about"
              accent="primary"
              title="From curiosity to craft — a developer's journey through AI."
            >
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Four chapters of my story: the beginning, building systems, the AI turn,
                and what&apos;s next. An honest account of how curiosity became craft.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["The Beginning", "Building Systems", "The AI Turn", "What's Next"].map((chapter, i) => (
                  <span
                    key={chapter}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-xs text-foreground">
                      {chapter}
                    </span>
                  </span>
                ))}
              </div>
            </ChapterPreview>

            {/* CHAPTER III — Education */}
            <ChapterPreview
              chapter="Chapter III"
              number="03"
              label="Education"
              href="/education"
              accent="emerald-accent"
              title="A formal record of learning, from foundations to frontier."
            >
              <div className="grid gap-4 sm:grid-cols-3">
                {EDUCATION.slice(0, 3).map((edu, i) => (
                  <div
                    key={edu.id}
                    className="group/card relative rounded-lg border border-border bg-surface p-5 transition-all hover:border-emerald-accent/40 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent" />
                    </div>
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                      {edu.qualification}
                    </p>
                    <p className="mt-2 font-serif text-base font-medium leading-tight text-foreground">
                      {edu.institution.includes("[") ? "Add in Admin" : edu.institution}
                    </p>
                    <p className="mt-2 font-mono text-[10px] text-muted-foreground">
                      {edu.startDate} — {edu.endDate}
                    </p>
                  </div>
                ))}
              </div>
            </ChapterPreview>

            {/* CHAPTER IV — Skills */}
            <ChapterPreview
              chapter="Chapter IV"
              number="04"
              label="Skills"
              href="/skills"
              accent="primary"
              title="Tools I use to build, ship, and research."
            >
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {topSkills.map((group, i) => (
                  <div
                    key={group.category}
                    className="group/card rounded-lg border border-border bg-surface p-4 transition-all hover:border-primary/40 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {group.items.length}
                      </span>
                    </div>
                    <p className="mt-3 font-serif text-sm font-medium leading-tight text-foreground">
                      {group.category}
                    </p>
                    <div className="mt-2 h-px w-8 bg-primary transition-all group-hover/card:w-full" />
                  </div>
                ))}
              </div>
            </ChapterPreview>

            {/* CHAPTER V — Projects */}
            <ChapterPreview
              chapter="Chapter V"
              number="05"
              label="Projects"
              href="/projects"
              accent="emerald-accent"
              title="Things I've built, problems I've solved."
            >
              <div className="grid gap-4 sm:grid-cols-3">
                {featuredProjects.map((project) => (
                  <div                    key={project.id}
                    className="group/card relative flex flex-col overflow-hidden rounded-lg border border-border bg-surface p-5 transition-all hover:border-emerald-accent/40 hover:shadow-md"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-accent">
                      {project.category}
                    </p>
                    <p className="mt-3 font-serif text-lg font-medium leading-tight text-foreground">
                      {project.title}
                    </p>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {project.subtitle}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 h-px w-8 bg-emerald-accent transition-all group-hover/card:w-full" />
                  </div>
                ))}
              </div>
            </ChapterPreview>

            {/* CHAPTER VI — Research */}
            <ChapterPreview
              chapter="Chapter VI"
              number="06"
              label="Research"
              href="/research"
              accent="primary"
              title="Asking questions worth answering — with rigor."
            >
              <div className="flex flex-wrap gap-2">
                {topInterests.map((interest, i) => (
                  <span
                    key={interest.number}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 transition-colors hover:border-primary/40"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-xs text-foreground">
                      {interest.title}
                    </span>
                  </span>
                ))}
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-2">
                  <span className="font-mono text-xs text-primary">
                    +{RESEARCH_INTERESTS.length - 4} more
                  </span>
                </span>
              </div>
            </ChapterPreview>

            {/* CHAPTER VII — Hackathons */}
            <ChapterPreview
              chapter="Chapter VII"
              number="07"
              label="Hackathons"
              href="/hackathons"
              accent="emerald-accent"
              title="Building under pressure, learning in public."
            >
              <div className="grid gap-4 sm:grid-cols-3">
                {topHackathons.map((event) => (
                  <div
                    key={event.id}
                    className="group/card rounded-lg border border-border bg-surface p-5 transition-all hover:border-emerald-accent/40 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-accent/40 bg-emerald-accent/10 px-2 py-0.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent" />
                        <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-accent">
                          {event.status}
                        </span>
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {event.date}
                      </span>
                    </div>
                    <p className="mt-4 font-serif text-base font-medium leading-tight text-foreground">
                      {event.name}
                    </p>
                    <p className="mt-1 font-mono text-[10px] text-muted-foreground">
                      by {event.organizer}
                    </p>
                    <div className="mt-4 h-px w-8 bg-emerald-accent transition-all group-hover/card:w-full" />
                  </div>
                ))}
              </div>
            </ChapterPreview>

            {/* CHAPTER VIII — Problem Solving */}
            <ChapterPreview
              chapter="Chapter VIII"
              number="08"
              label="Problem Solving"
              href="/problem-solving"
              accent="primary"
              title="Algorithms, logic, and the joy of solving hard problems."
            >
              <div className="grid gap-4 sm:grid-cols-3">
                {PROBLEM_ACTIVITIES.map((activity) => (
                  <div
                    key={activity.id}
                    className="group/card rounded-lg border border-border bg-surface p-5 transition-all hover:border-primary/40 hover:shadow-md"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                      {activity.platform}
                    </p>
                    <p className="mt-3 font-serif text-base font-medium leading-tight text-foreground">
                      {activity.title}
                    </p>
                    <div className="mt-4 h-px w-8 bg-primary transition-all group-hover/card:w-full" />
                  </div>
                ))}
              </div>
            </ChapterPreview>

            {/* CHAPTER IX — Teaching */}
            <ChapterPreview
              chapter="Chapter IX"
              number="09"
              label="Teaching"
              href="/teaching"
              accent="emerald-accent"
              title="Sharing what I learn to sharpen what I know."
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {TEACHING_EXPERIENCES.map((exp) => (
                  <div
                    key={exp.id}
                    className="group/card rounded-lg border border-border bg-surface p-5 transition-all hover:border-emerald-accent/40 hover:shadow-md"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-accent">
                      {exp.role}
                    </p>
                    <p className="mt-3 font-serif text-lg font-medium leading-tight text-foreground">
                      {exp.title}
                    </p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {exp.subtitle}
                    </p>
                    <div className="mt-4 h-px w-8 bg-emerald-accent transition-all group-hover/card:w-full" />
                  </div>
                ))}
              </div>
            </ChapterPreview>

            {/* CHAPTER X — Experience */}
            <ChapterPreview
              chapter="Chapter X"
              number="10"
              label="Experience"
              href="/experience"
              accent="primary"
              title="Where I've worked, what I've shipped."
            >
              <div className="grid gap-4 sm:grid-cols-3">
                {EXPERIENCES.map((exp) => (
                  <div
                    key={exp.id}
                    className="group/card rounded-lg border border-border bg-surface p-5 transition-all hover:border-primary/40 hover:shadow-md"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                      {exp.type}
                    </p>
                    <p className="mt-3 font-serif text-base font-medium leading-tight text-foreground">
                      {exp.role}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {exp.company}
                    </p>
                    <div className="mt-4 h-px w-8 bg-primary transition-all group-hover/card:w-full" />
                  </div>
                ))}
              </div>
            </ChapterPreview>

            {/* CHAPTER XI — Achievements */}
            <ChapterPreview
              chapter="Chapter XI"
              number="11"
              label="Achievements"
              href="/achievements"
              accent="emerald-accent"
              title="Milestones and responsibilities that shaped the journey."
            >
              <div className="grid gap-4 sm:grid-cols-3">
                {topAchievements.map((ach) => (
                  <div
                    key={ach.id}
                    className="group/card rounded-lg border border-border bg-surface p-5 transition-all hover:border-emerald-accent/40 hover:shadow-md"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-accent">
                      {ach.type}
                    </p>
                    <p className="mt-3 font-serif text-base font-medium leading-tight text-foreground">
                      {ach.title}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {ach.issuer}
                    </p>
                    <div className="mt-4 h-px w-8 bg-emerald-accent transition-all group-hover/card:w-full" />
                  </div>
                ))}
              </div>
            </ChapterPreview>

            {/* CHAPTER XII — Contact */}
            <ChapterPreview
              chapter="Chapter XII"
              number="12"
              label="Contact"
              href="/contact"
              accent="primary"
              title="Let's build something meaningful — or just talk shop."
            >
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full border border-emerald-accent/40 bg-emerald-accent/5 px-4 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent animate-pulse" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-accent">
                    Open to opportunities
                  </span>
                </div>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 font-mono text-[11px] text-foreground transition-colors hover:border-primary"
                >
                  {PROFILE.email}
                </a>
              </div>
            </ChapterPreview>
          </div>

          {/* Bottom strip */}
          <div className="mt-20 flex items-center justify-between border-t border-border pt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:mt-24">
            <span>End of Home</span>
            <span className="hidden sm:inline">12 chapters · full portfolio</span>
            <a
              href="/"
              className="flex items-center gap-2 transition-colors hover:text-foreground"
            >
              Back to top
              <span className="inline-block animate-bounce">↑</span>
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}