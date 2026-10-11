import Link from "next/link";
import { ArrowUpRight, FolderGit2, ExternalLink, Sparkles, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PROJECTS } from "@/lib/projects-data";

/* ═══════════════════════════════════════════════════════════
   Projects Section — Editorial / Terminal aesthetic
   ═══════════════════════════════════════════════════════════ */

function GithubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
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
              Selected Work
            </span>
          </div>

          <h2 className="mt-4 max-w-4xl font-serif text-[2.75rem] font-normal leading-[0.95] tracking-[-0.02em] text-foreground sm:text-[3.5rem] lg:text-[4.5rem]">
            Things I&apos;ve{" "}
            <span className="italic text-primary">built</span>,
            <br />
            problems I&apos;ve{" "}
            <span className="italic text-emerald-accent">solved</span>.
          </h2>
        </div>

        {/* ═══════════════════════════════════════════════
            FILTER BAR — Terminal style
            ═══════════════════════════════════════════════ */}
        <div className="mt-12 flex flex-wrap items-center gap-2 rounded-lg border border-border bg-surface p-3 sm:p-4">
          <div className="flex items-center gap-2 pr-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="text-primary">$</span>
            <span>filter --by</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["All", "AI & Marketing", "Hackathon", "Computer Vision", "Generative AI"].map(
              (cat, i) => (
                <span
                  key={cat}
                  className={
                    i === 0
                      ? "rounded-full border border-primary bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-primary"
                      : "rounded-full border border-border bg-background px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  }
                >
                  {cat}
                </span>
              )
            )}
          </div>
          <div className="ml-auto font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {PROJECTS.length} results
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            FEATURED PROJECTS — Large cards
            ═══════════════════════════════════════════════ */}
        <div className="mt-10">
          {/* Section label */}
          <div className="flex items-center gap-3">
            <Star className="h-3 w-3 text-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              Featured · {String(featured.length).padStart(2, "0")}
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} large />
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            OTHER PROJECTS — Compact cards
            ═══════════════════════════════════════════════ */}
        {others.length > 0 && (
          <div className="mt-16">
            {/* Section label */}
            <div className="flex items-center gap-3">
              <FolderGit2 className="h-3 w-3 text-emerald-accent" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-accent">
                Also Built · {String(others.length).padStart(2, "0")}
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════
            VIEW ALL — Call to action
            ═══════════════════════════════════════════════ */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full border border-border bg-surface px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-all hover:border-primary hover:bg-elevated"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Discuss a project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   Project Card — reusable
   ═══════════════════════════════════════════════════════════ */
function ProjectCard({ project, large = false }) {
  const isPrimary = project.accent === "primary";

  return (
    <article
      className={
        large
          ? "group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all hover:border-primary/40 hover:shadow-lg"
          : "group relative flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-all hover:border-primary/40 hover:shadow-md"
      }
    >
      {/* ─── Header: number + category + status ─── */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div className="flex items-center gap-3">
          <span
            className={
              isPrimary
                ? "font-mono text-[10px] uppercase tracking-[0.25em] text-primary"
                : "font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-accent"
            }
          >
            {project.number}
          </span>
          <span className="h-3 w-px bg-border" />
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            {project.category}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {project.isFYP && (
            <span className="flex items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5">
              <Star className="h-2.5 w-2.5 text-primary" />
              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-primary">
                FYP
              </span>
            </span>
          )}
          <span
            className={
              project.status.toLowerCase().includes("progress")
                ? "flex items-center gap-1.5 rounded-full border border-emerald-accent/40 bg-emerald-accent/10 px-2 py-0.5"
                : "font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground"
            }
          >
            {project.status.toLowerCase().includes("progress") && (
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent animate-pulse" />
            )}
            <span
              className={
                project.status.toLowerCase().includes("progress")
                  ? "font-mono text-[9px] uppercase tracking-[0.15em] text-emerald-accent"
                  : ""
              }
            >
              {project.status}
            </span>
          </span>
        </div>
      </div>

      {/* ─── Body ─── */}
      <div className={large ? "flex-1 p-5 sm:p-6" : "flex-1 p-4 sm:p-5"}>
        {/* Title */}
        <h3
          className={
            large
              ? "font-serif text-2xl font-medium leading-tight text-foreground sm:text-3xl"
              : "font-serif text-xl font-medium leading-tight text-foreground"
          }
        >
          {project.title}
        </h3>

        {/* Subtitle */}
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          {project.subtitle}
        </p>

        {/* Description */}
        <p
          className={
            large
              ? "mt-4 text-sm leading-relaxed text-muted-foreground"
              : "mt-3 text-sm leading-relaxed text-muted-foreground"
          }
        >
          {project.description}
        </p>

        {/* Contribution (only large) */}
        {large && project.contribution && (
          <div className="mt-4 rounded-md border-l-2 border-primary/40 bg-background/50 pl-3 py-2">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary">
              My Contribution
            </p>
            <p className="mt-1 text-xs leading-relaxed text-foreground">
              {project.contribution}
            </p>
          </div>
        )}

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* ─── Footer: Actions ─── */}
      <div className="flex items-center justify-between border-t border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-primary"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-primary"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Demo
            </a>
          )}
        </div>
        <a
          href="#"
          className="group/link inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground transition-colors hover:text-primary"
        >
          Case Study
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </div>
    </article>
  );
}