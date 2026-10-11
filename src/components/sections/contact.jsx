"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  Download,
  CheckCircle2,
  AlertCircle,
  Clock,
  Briefcase,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { PROFILE } from "@/lib/constants";

/* ═══════════════════════════════════════════════════════════
   Contact Section — Editorial / Terminal aesthetic
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

const CONTACT_CHANNELS = [
  {
    id: "email",
    label: "Email",
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
    icon: Mail,
    accent: "primary",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Connect professionally",
    href: PROFILE.social.linkedin,
    icon: LinkedinIcon,
    accent: "emerald-accent",
  },
  {
    id: "github",
    label: "GitHub",
    value: "View code & projects",
    href: PROFILE.social.github,
    icon: GithubIcon,
    accent: "primary",
  },
  {
    id: "huggingface",
    label: "Hugging Face",
    value: "AI models & demos",
    href: PROFILE.social.huggingface,
    icon: HuggingFaceIcon,
    accent: "emerald-accent",
  },
];

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // UI-only demo — server submission comes in Phase 3
    await new Promise((r) => setTimeout(r, 1200));

    setIsSubmitting(false);
    setSubmitStatus({
      type: "info",
      title: "Form not yet connected",
      message:
        "Server-side submission is coming in the next phase. For now, please reach out via email or LinkedIn.",
    });
  };

  return (
    <section
      id="contact"
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
              Get in Touch
            </span>
          </div>

          <h2 className="mt-4 max-w-4xl font-serif text-[2.75rem] font-normal leading-[0.95] tracking-[-0.02em] text-foreground sm:text-[3.5rem] lg:text-[4.5rem]">
            Let&apos;s build something{" "}
            <span className="italic text-primary">meaningful</span>
            <br />
            — or just{" "}
            <span className="italic text-emerald-accent">talk shop</span>.
          </h2>
        </div>

        {/* ═══════════════════════════════════════════════
            MAIN GRID — Contact form + Channels
            ═══════════════════════════════════════════════ */}
        <div className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-10">
          {/* ───── LEFT: Terminal contact form (7 cols) ───── */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-lg">
              {/* Terminal title bar */}
              <div className="flex items-center justify-between border-b border-border px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-destructive/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
                  <span className="h-2 w-2 rounded-full bg-emerald-accent/70" />
                </div>
                <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
                  send_message.sh
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase text-emerald-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent animate-pulse" />
                  Ready
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-5 sm:p-6">
                {/* Terminal prompt */}
                <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <span className="text-primary">$</span>
                  <span>./send_message.sh</span>
                </div>

                {/* Name + Email */}
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
                    >
                      <span className="text-primary">→</span> Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
                    >
                      <span className="text-primary">→</span> Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="mt-4">
                  <label
                    htmlFor="subject"
                    className="block font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
                  >
                    <span className="text-primary">→</span> Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Research collaboration, internship, etc."
                  />
                </div>

                {/* Message */}
                <div className="mt-4">
                  <label
                    htmlFor="message"
                    className="block font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
                  >
                    <span className="text-primary">→</span> Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-2 w-full resize-none rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Tell me about your project, question, or idea..."
                  />
                </div>

                {/* Status feedback */}
                {submitStatus && (
                  <div
                    className={
                      submitStatus.type === "info"
                        ? "mt-4 flex items-start gap-3 rounded-md border border-yellow-500/40 bg-yellow-500/5 px-4 py-3"
                        : submitStatus.type === "success"
                          ? "mt-4 flex items-start gap-3 rounded-md border border-emerald-accent/40 bg-emerald-accent/5 px-4 py-3"
                          : "mt-4 flex items-start gap-3 rounded-md border border-destructive/40 bg-destructive/5 px-4 py-3"
                    }
                  >
                    {submitStatus.type === "info" && (
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-yellow-600 dark:text-yellow-400" />
                    )}
                    {submitStatus.type === "success" && (
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-accent" />
                    )}
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground">
                        {submitStatus.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {submitStatus.message}
                      </p>
                    </div>
                  </div>
                )}

                {/* Submit */}
                <div className="mt-5 flex items-center justify-between gap-4 border-t border-border pt-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    <Clock className="mr-1 inline h-3 w-3" />
                    Avg response: 24h
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex h-10 items-center gap-2 rounded-md bg-primary px-5 font-mono text-xs uppercase tracking-[0.15em] text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* CV Download */}
            <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-lg border border-border bg-surface p-5 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-primary/40 bg-primary/5">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary">
                    Curriculum Vitae
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-foreground">
                    Download the latest CV
                  </p>
                </div>
              </div>
              <a
                href="/cv.pdf"
                download
                className="group inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-foreground transition-all hover:border-primary hover:bg-elevated"
              >
                <Download className="h-3.5 w-3.5" />
                Download
                <span className="text-primary">→</span>
              </a>
            </div>
          </div>

          {/* ───── RIGHT: Contact channels + info (5 cols) ───── */}
          <div className="lg:col-span-5">
            {/* Channels list */}
            <div className="rounded-lg border border-border bg-surface p-5 sm:p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Direct Channels
              </p>
              <p className="mt-2 font-serif text-lg italic text-foreground">
                Ways to reach me
              </p>

              <ul className="mt-5 space-y-3">
                {CONTACT_CHANNELS.map((channel) => {
                  const Icon = channel.icon;
                  const isPrimary = channel.accent === "primary";
                  return (
                    <li key={channel.id}>
                      <a
                        href={channel.href}
                        target={channel.id === "email" ? undefined : "_blank"}
                        rel={
                          channel.id === "email"
                            ? undefined
                            : "noopener noreferrer"
                        }
                        className="group flex items-center gap-3 rounded-md border border-border bg-background p-3 transition-all hover:border-primary/40 hover:bg-surface"
                      >
                        <span
                          className={
                            isPrimary
                              ? "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-primary transition-colors group-hover:border-primary/40"
                              : "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-emerald-accent transition-colors group-hover:border-emerald-accent/40"
                          }
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                            {channel.label}
                          </p>
                          <p className="mt-0.5 truncate text-sm font-medium text-foreground">
                            {channel.value}
                          </p>
                        </div>
                        <span className="text-muted-foreground transition-transform group-hover:translate-x-0.5">
                          →
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Info block */}
            <div className="mt-6 rounded-lg border border-border bg-surface p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-background text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    Based in
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {PROFILE.location}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    Remote-friendly · Timezone: PKT (UTC+5)
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-border pt-5">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent animate-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-emerald-accent">
                    Available for opportunities
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Open to research collaborations, AI engineering internships,
                  freelance projects, and graduate opportunities (Fall 2027).
                </p>
              </div>
            </div>

            {/* Terminal info panel */}
            <div className="mt-6 overflow-hidden rounded-lg border border-border bg-surface shadow-lg">
              <div className="flex items-center justify-between border-b border-border px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-destructive/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
                  <span className="h-2 w-2 rounded-full bg-emerald-accent/70" />
                </div>
                <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
                  contact_info.json
                </span>
                <span className="font-mono text-[9px] uppercase text-muted-foreground">
                  read-only
                </span>
              </div>
              <div className="p-4 font-mono text-[11px] leading-relaxed">
                <pre>
                  <code>
                    <span className="text-muted-foreground">{"{"}</span>
                    {"\n  "}
                    <span className="text-primary">&quot;preferred&quot;</span>
                    <span className="text-muted-foreground">: </span>
                    <span className="text-emerald-accent">
                      &quot;email&quot;
                    </span>
                    <span className="text-muted-foreground">,</span>
                    {"\n  "}
                    <span className="text-primary">&quot;response&quot;</span>
                    <span className="text-muted-foreground">: </span>
                    <span className="text-emerald-accent">
                      &quot;&lt;24h&quot;
                    </span>
                    <span className="text-muted-foreground">,</span>
                    {"\n  "}
                    <span className="text-primary">&quot;openTo&quot;</span>
                    <span className="text-muted-foreground">: [</span>
                    {"\n    "}
                    <span className="text-emerald-accent">
                      &quot;research&quot;
                    </span>
                    <span className="text-muted-foreground">,</span>
                    {"\n    "}
                    <span className="text-emerald-accent">
                      &quot;internships&quot;
                    </span>
                    <span className="text-muted-foreground">,</span>
                    {"\n    "}
                    <span className="text-emerald-accent">
                      &quot;freelance&quot;
                    </span>
                    {"\n  "}
                    <span className="text-muted-foreground">]</span>
                    {"\n"}
                    <span className="text-muted-foreground">{"}"}</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}