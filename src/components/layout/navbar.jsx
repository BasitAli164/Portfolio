"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Download } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import {
  NAV_LINKS,
  PRIMARY_NAV_LINKS,
  SECONDARY_NAV_LINKS,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const isMoreActive = SECONDARY_NAV_LINKS.some((l) => isActive(l.href));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMoreOpen) return;
    const handleClick = () => setIsMoreOpen(false);
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isMoreOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md transition-all duration-300",
        isScrolled && "bg-background/95 shadow-sm"
      )}
    >
      <Container>
        <nav className="flex h-14 items-center justify-between gap-4">
          <Link
            href="/"
            className="group flex shrink-0 items-baseline gap-2 whitespace-nowrap"
            aria-label="Basit Ali — Home"
          >
            <span className="font-serif text-2xl font-bold leading-none tracking-tight text-primary">
              BA
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground transition-colors group-hover:text-foreground sm:inline">
              / Basit Ali
            </span>
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {PRIMARY_NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative inline-flex items-center rounded-md px-3 py-2 font-mono text-[11px] uppercase tracking-[0.15em] whitespace-nowrap transition-colors",
                      active
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute -bottom-px left-1/2 h-px w-6 -translate-x-1/2 bg-primary" />
                    )}
                  </Link>
                </li>
              );
            })}

            {SECONDARY_NAV_LINKS.length > 0 && (
              <li className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMoreOpen((v) => !v);
                  }}
                  aria-haspopup="true"
                  aria-expanded={isMoreOpen}
                  className={cn(
                    "relative inline-flex items-center gap-1.5 rounded-md px-3 py-2 font-mono text-[11px] uppercase tracking-[0.15em] whitespace-nowrap transition-colors",
                    isMoreActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  More
                  <ChevronDown
                    className={cn(
                      "h-3 w-3 transition-transform duration-200",
                      isMoreOpen && "rotate-180"
                    )}
                  />
                  {isMoreActive && (
                    <span className="absolute -bottom-px left-1/2 h-px w-6 -translate-x-1/2 bg-primary" />
                  )}
                </button>

                {isMoreOpen && (
                  <div className="absolute right-0 top-full mt-2 w-56 overflow-hidden rounded-lg border border-border bg-surface shadow-xl">
                    <ul className="py-1.5">
                      {SECONDARY_NAV_LINKS.map((link) => {
                        const active = isActive(link.href);
                        return (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              onClick={() => setIsMoreOpen(false)}
                              className={cn(
                                "flex items-center justify-between px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] transition-colors",
                                active
                                  ? "bg-elevated text-primary"
                                  : "text-foreground hover:bg-elevated"
                              )}
                            >
                              <span>{link.label}</span>
                              {active && (
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </li>
            )}
          </ul>

          <div className="flex shrink-0 items-center gap-2">
            <div className="hidden items-center gap-2 rounded-full border border-emerald-accent/30 bg-emerald-accent/5 px-2.5 py-1 2xl:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-emerald-accent">
                Open
              </span>
            </div>

            <ThemeToggle />

            {/* CV Download Button */}
            <a
              href="/cv.pdf"
              download="Basit-Ali-CV.pdf"
              className="hidden items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground whitespace-nowrap transition-all hover:border-primary hover:bg-elevated sm:inline-flex"
            >
              <Download className="h-3.5 w-3.5 text-primary" />
              <span>CV</span>
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-colors hover:bg-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </nav>
      </Container>

      {isMobileMenuOpen && (
        <div className="max-h-[calc(100vh-3.5rem)] overflow-y-auto border-t border-border bg-background lg:hidden">
          <Container>
            <ul className="flex flex-col py-4">
              {NAV_LINKS.map((link, index) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-3 font-mono text-sm uppercase tracking-[0.15em] transition-colors",
                        active
                          ? "bg-elevated text-primary"
                          : "text-foreground hover:bg-elevated"
                      )}
                    >
                      <span className="text-[10px] tabular-nums text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="mt-2 border-t border-border pt-4">
                <a
                  href="/cv.pdf"
                  download="Basit-Ali-CV.pdf"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-foreground"
                >
                  <Download className="h-3.5 w-3.5 text-primary" />
                  Download CV
                </a>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}