"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/brand/Logo";
import { cities } from "@/data/cities";

const topCities = [...cities]
  .sort((a, b) => b.population - a.population)
  .slice(0, 12);

export default function Header() {
  const [locOpen, setLocOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileLocOpen, setMobileLocOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-ink/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" aria-label="SPOT ON WEBSITES home">
          <Logo size={36} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Locations dropdown */}
          <div className="relative" onMouseLeave={() => setLocOpen(false)}>
            <button
              onMouseEnter={() => setLocOpen(true)}
              onClick={() => setLocOpen((v) => !v)}
              className="flex items-center gap-1 text-sm font-medium text-ink/70 hover:text-ink transition-colors"
            >
              Locations
              <svg
                className={`w-3.5 h-3.5 transition-transform ${locOpen ? "rotate-180" : ""}`}
                viewBox="0 0 12 12"
                fill="none"
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

          <Link href="/start" className="px-5 py-2 bg-green-brand text-cream font-bold rounded-full text-sm hover:bg-green-deep transition-colors">
            Start My Free Build
          </Link>
        </nav>

        {/* Mobile: hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <Link href="/start" className="px-4 py-2 bg-green-brand text-cream font-bold rounded-full text-sm hover:bg-green-deep transition-colors">
            Get started
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`block h-0.5 w-5 bg-ink transition-transform origin-center ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink transition-transform origin-center ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-ink/8 px-4 py-4 flex flex-col gap-2">
          {/* Locations accordion */}
          <button
            onClick={() => setMobileLocOpen((v) => !v)}
            className="flex items-center justify-between w-full py-2 text-sm font-medium text-ink"
          >
            Locations
            <svg
              className={`w-4 h-4 transition-transform ${mobileLocOpen ? "rotate-180" : ""}`}
              viewBox="0 0 12 12"
              fill="none"
            >
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {mobileLocOpen && (
            <div className="pl-3 pb-2">
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

          <Link
            href="/start"
            onClick={() => setMobileOpen(false)}
            className="block text-center py-2.5 bg-green-brand text-white font-bold rounded-full text-sm mt-2"
          >
            Start My Free Build
          </Link>
        </div>
      )}
    </header>
  );
}
