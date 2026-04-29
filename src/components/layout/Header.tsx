"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useMemo } from "react";
import { ArrowRight } from "lucide-react";
import Logo from "@/components/brand/Logo";
import { cities } from "@/data/cities";
import { useActiveSection } from "@/lib/useActiveSection";

const topCities = [...cities]
  .sort((a, b) => b.population - a.population)
  .slice(0, 12);

const SECTION_IDS = ["what-you-get", "how", "pricing", "faq"];

type NavLink = {
  label: string;
  href: string;
  sectionId?: string; // id to watch with intersection observer
};

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/#how", sectionId: "how" },
  { label: "What You Get", href: "/#what-you-get", sectionId: "what-you-get" },
  { label: "Pricing", href: "/#pricing", sectionId: "pricing" },
  { label: "FAQ", href: "/#faq", sectionId: "faq" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Only run the intersection observer when we are on the homepage
  const activeSection = useActiveSection(isHome ? SECTION_IDS : []);

  const [locOpen, setLocOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileLocOpen, setMobileLocOpen] = useState(false);

  // Determine which nav link is active
  const activeLinkHref = useMemo(() => {
    if (!isHome) return pathname;
    if (activeSection) {
      const match = NAV_LINKS.find((l) => l.sectionId === activeSection);
      if (match) return match.href;
    }
    return "/";
  }, [isHome, activeSection, pathname]);

  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors ${
      activeLinkHref === href
        ? "text-green-brand"
        : "text-ink/60 hover:text-ink"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-ink/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-6">

        {/* Left: Logo */}
        <Link href="/" aria-label="Spot On Websites home" className="shrink-0">
          <Logo size={34} />
        </Link>

        {/* Centre: Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 flex-1 justify-center" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}

          {/* Locations dropdown — sits after the main links */}
          <div className="relative" onMouseLeave={() => setLocOpen(false)}>
            <button
              onMouseEnter={() => setLocOpen(true)}
              onClick={() => setLocOpen((v) => !v)}
              className="flex items-center gap-1 text-sm font-medium text-ink/60 hover:text-ink transition-colors"
              aria-expanded={locOpen}
              aria-haspopup="true"
            >
              Locations
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${locOpen ? "rotate-180" : ""}`}
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {locOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-ink/8 p-4 z-50">
                <p className="text-xs font-bold text-ink/30 uppercase tracking-widest mb-3">Top cities</p>
                <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                  {topCities.map((city) => (
                    <li key={city.slug}>
                      <Link
                        href={`/${city.slug}`}
                        onClick={() => setLocOpen(false)}
                        className="text-sm text-ink/70 hover:text-green-deep transition-colors"
                      >
                        {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 pt-3 border-t border-ink/8">
                  <Link
                    href="/locations"
                    onClick={() => setLocOpen(false)}
                    className="text-xs font-semibold text-green-brand hover:text-green-deep transition-colors"
                  >
                    View all locations &rarr;
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right: CTA + hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/start"
            className="hidden md:inline-flex items-center gap-1.5 px-5 py-2 bg-green-deep text-white font-bold rounded-full text-sm hover:bg-green-brand transition-colors"
          >
            Get My Free Homepage
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>

          {/* Mobile get-started pill */}
          <Link
            href="/start"
            className="md:hidden inline-flex items-center gap-1 px-4 py-2 bg-green-deep text-white font-bold rounded-full text-sm hover:bg-green-brand transition-colors"
          >
            Get started
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`block h-0.5 w-5 bg-ink transition-transform origin-center ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink transition-transform origin-center ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden bg-cream border-t border-ink/8 px-4 py-4 flex flex-col gap-1"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`py-2.5 text-sm font-medium border-b border-ink/8 last:border-0 ${
                activeLinkHref === link.href ? "text-green-brand" : "text-ink/70"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Locations accordion */}
          <div className="border-b border-ink/8">
            <button
              onClick={() => setMobileLocOpen((v) => !v)}
              className="flex items-center justify-between w-full py-2.5 text-sm font-medium text-ink/70"
              aria-expanded={mobileLocOpen}
            >
              Locations
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileLocOpen ? "rotate-180" : ""}`}
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {mobileLocOpen && (
              <div className="pb-3">
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-3">
                  {topCities.map((city) => (
                    <li key={city.slug}>
                      <Link
                        href={`/${city.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="text-sm text-ink/70 hover:text-green-deep transition-colors"
                      >
                        {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/locations"
                  onClick={() => setMobileOpen(false)}
                  className="text-xs font-semibold text-green-brand"
                >
                  View all locations &rarr;
                </Link>
              </div>
            )}
          </div>

          {/* CTA */}
          <Link
            href="/start"
            onClick={() => setMobileOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 py-3 bg-green-deep text-white font-bold rounded-full text-sm hover:bg-green-brand transition-colors"
          >
            Get My Free Homepage
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </nav>
      )}
    </header>
  );
}
