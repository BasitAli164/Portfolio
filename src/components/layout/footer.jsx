import { ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PROFILE, NAV_LINKS } from "@/lib/constants";

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

export function Footer() {
  const currentYear = new Date().getFullYear();
  const featuredLinks = NAV_LINKS.filter((link) =>
    ["/education", "/skills", "/hackathons", "/teaching","/experience","/achievements","/problem-solving"].includes(link.href)
  );

  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface">
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

      <Container className="py-12 sm:py-16">
        {/* ─── Top: Colophon header ─── */}
       

        {/* ─── Main grid: 3 columns ─── */}
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Col 1: Brand — 5 cols */}
          <div className="lg:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl font-bold leading-none tracking-tight text-primary">
                BA
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                / Basit Ali
              </span>
            </div>
            <p className="mt-4 max-w-sm font-serif text-base italic leading-relaxed text-foreground">
              &ldquo;Building intelligent systems with purpose and
              precision.&rdquo;
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Full-Stack Developer &amp; Generative AI Engineer — final year
              of Computer Science at the University of Baltistan, Skardu.
            </p>

            {/* Status pill */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-accent/30 bg-emerald-accent/5 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-emerald-accent">
                Available for opportunities
              </span>
            </div>
          </div>

          {/* Col 2: Navigate — 3 cols */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2.5">
              {featuredLinks.map((link, index) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-baseline gap-2 text-sm text-foreground transition-colors hover:text-primary"
                  >
                    <span className="font-mono text-[10px] tabular-nums text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="transition-transform group-hover:translate-x-0.5">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Connect — 4 cols */}
          <div className="lg:col-span-4">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Connect
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={PROFILE.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border bg-background transition-colors group-hover:border-primary">
                    <GithubIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-mono text-xs">/basitali</span>
                  <span className="ml-auto text-muted-foreground transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border bg-background transition-colors group-hover:border-primary">
                    <LinkedinIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-mono text-xs">/in/basitali</span>
                  <span className="ml-auto text-muted-foreground transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="group flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border bg-background font-mono text-xs transition-colors group-hover:border-primary">
                    @
                  </span>
                  <span className="truncate font-mono text-xs">
                    basitdeveloper911
                  </span>
                  <span className="ml-auto text-muted-foreground transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ─── Bottom strip ─── */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>
              © {currentYear} {PROFILE.name}
            </span>
            <span className="hidden h-3 w-px bg-border sm:inline-block" />
            <span>All rights reserved</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="hidden sm:inline">
              Built with Next.js · Tailwind · MongoDB
            </span>
            <span className="hidden h-3 w-px bg-border md:inline-block" />
            <span className="hidden md:inline">35.2971°N, 75.6333°E</span>
            
          </div>
        </div>
      </Container>
    </footer>
  );
}