import Link from "next/link";
import Logo from "@/components/brand/Logo";
import { cities } from "@/data/cities";
import { services } from "@/data/services";

const topCities = [...cities]
  .sort((a, b) => b.population - a.population)
  .slice(0, 12);

const serviceLinks = services.map((s) => ({ label: s.name, href: `/services/${s.slug}` }));

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Col 1: Logo + tagline */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <Logo size={32} variant="white" />
            <p className="text-sm leading-relaxed text-cream/60">
              Custom coded websites for Aussie businesses. $997 total. Free lifetime hosting.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-cream font-bold text-xs tracking-widest uppercase mb-4">Services</h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-cream transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Locations */}
          <div className="md:col-span-2">
            <h3 className="text-cream font-bold text-xs tracking-widest uppercase mb-4">Locations</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {topCities.map((city) => (
                <li key={city.slug}>
                  <Link href={`/${city.slug}`} className="text-sm hover:text-cream transition-colors">
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/locations"
              className="inline-block mt-4 text-xs text-green-brand hover:text-green-brand/80 font-semibold transition-colors"
            >
              View all locations &rarr;
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-cream/10 text-xs text-cream/40">
          &copy; 2026 EHUSTLE PTY LTD. ABN 21 679 259 440. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
