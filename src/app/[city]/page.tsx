import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cities, getCityBySlug } from "@/data/cities";
import { services } from "@/data/services";
import { SITE_URL, SITE_NAME, SITE_PHONE } from "@/lib/config";
import JsonLd from "@/components/local/JsonLd";
import Breadcrumb from "@/components/local/Breadcrumb";

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

type Props = { params: Promise<{ city: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};
  const title = `Web Design in ${city.name} | ${SITE_NAME}`;
  const description = `Custom website design for ${city.name} businesses. Zero deposit: we build your homepage free. $997 total. Free lifetime hosting.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/${citySlug}` },
    openGraph: { title, description, url: `${SITE_URL}/${citySlug}` },
  };
}

export default async function CityHubPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    telephone: SITE_PHONE,
    areaServed: { "@type": "City", name: city.name, addressRegion: city.state },
    priceRange: "$997",
    description: `Custom website design for ${city.name} businesses.`,
  };

  return (
    <>
      <JsonLd data={localBusinessSchema} />

      {/* Breadcrumb */}
      <div className="bg-cream border-b border-ink/8">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: city.name }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-ink text-cream py-16 md:py-20 relative overflow-hidden">
        <Image
          src="/robots/robot-laptop.png"
          alt=""
          width={200}
          height={200}
          aria-hidden="true"
          className="hidden md:block absolute bottom-0 right-6 lg:right-12 w-[200px] h-auto pointer-events-none"
        />
        <div className="max-w-5xl mx-auto px-4 relative">
          <div className="inline-flex items-center gap-2 bg-green-brand/20 text-green-brand text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            {city.state}
          </div>
          <h1 className="h-display text-4xl md:text-5xl text-cream mb-4">
            Web Design in {city.name}
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl mb-8 leading-relaxed">
            {city.blurb} We build your homepage free, show you a live preview, and you only pay $997 total if you love what you see. Free lifetime hosting included.
          </p>
          <Link
            href="/start"
            className="inline-block bg-green-brand text-white font-bold px-8 py-4 rounded-full hover:bg-green-deep transition-colors"
          >
            Build My Free Homepage Now
          </Link>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="h-display text-3xl text-ink mb-8">
            Services we offer in {city.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${citySlug}/${service.slug}`}
                className="block bg-white border border-ink/8 rounded-2xl p-5 shadow-sm hover:border-green-brand hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-ink mb-2 group-hover:text-green-deep transition-colors">
                  {service.name}
                </h3>
                <p className="text-ink/60 text-sm leading-relaxed line-clamp-3">
                  {service.blurb.replace(/\{city\}/g, city.name).replace(/\{state\}/g, city.state).replace(/\{stateLong\}/g, city.stateLong).replace(/\{slug\}/g, service.slug)}
                </p>
                <span className="inline-block mt-3 text-green-brand text-sm font-bold">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Suburbs */}
      {city.suburbs.length > 0 && (
        <section className="py-12 bg-white border-t border-ink/8">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="font-bold text-ink text-xl mb-5">
              Serving all of {city.name}, including
            </h2>
            <div className="flex flex-wrap gap-2">
              {city.suburbs.map((suburb) => (
                <span
                  key={suburb}
                  className="text-sm px-3 py-1.5 rounded-full bg-cream border border-ink/10 text-ink/70"
                >
                  {suburb}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-ink text-cream text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="h-display text-3xl text-cream mb-4">
            No deposit. No risk. Just results.
          </h2>
          <p className="text-cream/60 mb-8">
            $997 total. Zero deposit. Free homepage preview. Free lifetime hosting.
          </p>
          <Link
            href="/start"
            className="inline-block bg-green-brand text-white font-bold px-8 py-4 rounded-full hover:bg-green-deep transition-colors"
          >
            Build My Free Homepage Now
          </Link>
        </div>
      </section>
    </>
  );
}
