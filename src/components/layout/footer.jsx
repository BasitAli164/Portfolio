import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PROFILE, NAV_LINKS } from "@/lib/constants";

/* ═══════════════════════════════════════════════════════════
   Social & Platform Icons — Custom SVGs
   (Lucide-react removed brand icons)
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

function HuggingFaceIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-3.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-3.5 6.5c-1.5 0-2.8.7-3.5 1.8-.2.3 0 .7.4.7h6.2c.4 0 .6-.4.4-.7-.7-1.1-2-1.8-3.5-1.8Z" />
    </svg>
  );
}

function GoogleScholarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
    </svg>
  );
}

function StreamlitIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2 4 6v12l8 4 8-4V6l-8-4zm-4.5 13.5v-3l4.5-2.25 4.5 2.25v3l-4.5 2.25-4.5-2.25z" />
    </svg>
  );
}

function KaggleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.275.179.039.122.02.234-.06.336l-6.555 6.645 6.947 8.535c.078.1.097.213.062.336z" />
    </svg>
  );
}

function VercelIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2 22 20H2L12 2z" />
    </svg>
  );
}

function YoutubeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const featuredLinks = NAV_LINKS.filter((link) =>
    [
      
      "/hackathons",
      "/teaching",
      "/experience",
      "/achievements",
      "/problem-solving",
    ].includes(link.href)
  );

  // Social links — only rendered if URL exists
  const socialLinks = [
    { id: "github", label: "GitHub", href: PROFILE.social.github, icon: GithubIcon, handle: "/BasitAli164" },
    { id: "linkedin", label: "LinkedIn", href: PROFILE.social.linkedin, icon: LinkedinIcon, handle: "/in/basit-ali-abdupa" },
    { id: "huggingface", label: "Hugging Face", href: PROFILE.social.huggingface, icon: HuggingFaceIcon, handle: "/BasitAliii" },
    { id: "googleScholar", label: "Google Scholar", href: PROFILE.social.googleScholar, icon: GoogleScholarIcon, handle: "Publications" },
    { id: "streamlit", label: "Streamlit", href: PROFILE.social.streamlit, icon: StreamlitIcon, handle: "Live AI demos" },
    { id: "kaggle", label: "Kaggle", href: PROFILE.social.kaggle, icon: KaggleIcon, handle: "ML notebooks" },
    { id: "vercel", label: "Vercel", href: PROFILE.social.vercel, icon: VercelIcon, handle: "Deployed apps" },
    { id: "youtube", label: "YouTube", href: PROFILE.social.youtube, icon: YoutubeIcon, handle: "GenAI lectures" },
  ].filter((s) => s.href && s.href.length > 0); // only show links with URLs

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
        

        {/* ─── Main grid ─── */}
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Col 1: Brand — 4 cols */}
          <div className="lg:col-span-4">
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
                  <Link
                    href={link.href}
                    className="group inline-flex items-baseline gap-2 text-sm text-foreground transition-colors hover:text-primary"
                  >
                    <span className="font-mono text-[10px] tabular-nums text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="transition-transform group-hover:translate-x-0.5">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Connect — 5 cols */}
          <div className="lg:col-span-5">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Digital Profiles
            </h3>

            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2.5 rounded-md px-2 py-1.5 text-sm text-foreground transition-colors hover:bg-elevated hover:text-primary"
                    >
                      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-border bg-background transition-colors group-hover:border-primary">
                        <Icon className="h-3 w-3" />
                      </span>
                      <span className="min-w-0 flex-1 truncate font-mono text-[11px]">
                        {link.label}
                      </span>
                      <span className="text-muted-foreground transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </a>
                  </li>
                );
              })}

              {/* Email — always shown */}
              <li>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="group flex items-center gap-2.5 rounded-md px-2 py-1.5 text-sm text-foreground transition-colors hover:bg-elevated hover:text-primary"
                >
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-border bg-background font-mono text-[11px] transition-colors group-hover:border-primary">
                    @
                  </span>
                  <span className="min-w-0 flex-1 truncate font-mono text-[11px]">
                    Email
                  </span>
                  <span className="text-muted-foreground transition-transform group-hover:translate-x-0.5">
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
            
          </div>
          <div>
            <span className="hidden h-3 w-px bg-border sm:inline-block" />
            <span>All rights reserved</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="hidden sm:inline">Built with Next.js</span>
            
           
          </div>
        </div>
      </Container>
    </footer>
  );
}