import type { Metadata } from "next";
import Link from "next/link";
import { cities } from "@/data/cities";
import { SITE_URL, SITE_NAME } from "@/lib/config";
import Breadcrumb from "@/components/local/Breadcrumb";

export const metadata: Metadata = {
  title: `All Locations | ${SITE_NAME}`,
  description: "We build custom websites for businesses across Australia. Browse all locations we serve.",
  alternates: { canonical: `${SITE_URL}/locations` },
};

const stateOrder = ["NSW", "VIC", "QLD", "WA", "SA", "ACT", "TAS", "NT"];

export default function LocationsPage() {
  const byState = stateOrder.reduce<Record<string, typeof cities>>((acc, state) => {
    acc[state] = cities.filter((c) => c.state === state).sort((a, b) => b.population - a.population);
    return acc;
  }, {});

  const stateNames: Record<string, string> = {
    NSW: "New South Wales",
    VIC: "Victoria",
    QLD: "Queensland",
    WA: "Western Australia",
    SA: "South Australia",
    ACT: "Australian Capital Territory",
    TAS: "Tasmania",
    NT: "Northern Territory",
  };

  return (
    <>
      <div className="bg-cream border-b border-ink/8">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Locations" }]} />
        </div>
      </div>

      <section className="bg-ink text-cream py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="h-display text-4xl md:text-5xl text-cream mb-3">All Locations</h1>
          <p className="text-cream/60 text-lg">Custom websites for businesses across every state and territory.</p>
        </div>
      </section>

      <section className="py-14 bg-cream">
        <div className="max-w-5xl mx-auto px-4 flex flex-col gap-12">
          {stateOrder.filter((s) => byState[s]?.length > 0).map((state) => (
            <div key={state}>
              <h2 className="h-display text-2xl text-ink mb-5">{stateNames[state]}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {byState[state].map((city) => (
                  <Link
                    key={city.slug}
                    href={`/${city.slug}`}
                    className="block bg-white border border-ink/8 rounded-xl p-4 shadow-sm hover:border-green-brand hover:shadow-md transition-all group"
                  >
                    <p className="font-bold text-ink group-hover:text-green-deep transition-colors">{city.name}</p>
                    <p className="text-ink/40 text-xs mt-0.5">{city.population.toLocaleString()} pop.</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
