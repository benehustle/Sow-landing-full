import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cities, getCityBySlug } from "@/data/cities";
import { services, getServiceBySlug } from "@/data/services";
import { buildLocalCopy } from "@/lib/seo";
import { testimonials } from "@/data/testimonials";
import { SITE_URL, SITE_NAME, SITE_PHONE } from "@/lib/config";
import JsonLd from "@/components/local/JsonLd";
import Breadcrumb from "@/components/local/Breadcrumb";
import LocalFAQ from "@/components/local/LocalFAQ";

export const dynamicParams = false;

export function generateStaticParams() {
  const params: { city: string; service: string }[] = [];
  for (const city of cities) {
    for (const service of services) {
      params.push({ city: city.slug, service: service.slug });
    }
  }
  return params;
}

type Props = { params: Promise<{ city: string; service: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  if (!city || !service) return {};
  const copy = buildLocalCopy(city, service);
  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical: `${SITE_URL}/${citySlug}/${serviceSlug}` },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: `${SITE_URL}/${citySlug}/${serviceSlug}`,
    },
  };
}

function TestimonialCard({ name, initials, quote }: { name: string; initials: string; quote: string }) {
  return (
    <div className="rounded-2xl bg-white border border-ink/8 shadow-sm px-5 py-4 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-green-brand/15 flex items-center justify-center shrink-0">
          <span className="text-green-deep font-bold text-xs">{initials}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-ink text-sm truncate">{name}</p>
          <span className="inline-flex items-center gap-1 bg-green-brand/15 text-green-deep text-[10px] font-bold px-2 py-0.5 rounded-full">
            &#9733; 5/5
          </span>
        </div>
      </div>
      <p className="text-ink/70 text-sm leading-relaxed">{quote}</p>
    </div>
  );
}

export default async function CityServicePage({ params }: Props) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  if (!city || !service) notFound();

  const copy = buildLocalCopy(city, service);

  // 3 testimonials - deterministic slice
  const proofTestimonials = testimonials.slice(0, 3);

  // Nearby cities - up to 6 excluding current
  const nearbyCities = cities.filter((c) => c.slug !== citySlug).slice(0, 6);

  // Other services excluding current
  const otherServices = services.filter((s) => s.slug !== serviceSlug);

  // JSON-LD schemas
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    telephone: SITE_PHONE,
    areaServed: { "@type": "City", name: city.name, addressRegion: city.state },
    priceRange: "$997",
    description: copy.description,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.localFAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: city.name, item: `${SITE_URL}/${citySlug}` },
      { "@type": "ListItem", position: 3, name: service.name, item: `${SITE_URL}/${citySlug}/${serviceSlug}` },
    ],
  };

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <div className="bg-cream border-b border-ink/8">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: city.name, href: `/${citySlug}` },
              { label: service.name },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-ink text-cream py-16 md:py-24 relative overflow-hidden">
        <Image
          src="/robots/robot-pointing.png"
          alt=""
          width={180}
          height={216}
          aria-hidden="true"
          className="hidden md:block absolute top-8 right-8 lg:right-16 w-[180px] h-auto -scale-x-100 pointer-events-none"
        />
        <div className="max-w-5xl mx-auto px-4 relative">
          <div className="inline-flex items-center gap-2 bg-green-brand/20 text-green-brand text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            {city.name}, {city.state}
          </div>
          <h1 className="h-display text-4xl md:text-5xl lg:text-6xl text-cream mb-6 max-w-3xl">
            {copy.h1}
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed max-w-2xl mb-8">
            {copy.intro}
          </p>

          {/* Pricing treatment */}
          <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-5 mb-8">
            <div>
              <p className="text-cream/50 text-sm line-through">$997 deposit upfront</p>
              <p className="text-cream font-bold text-2xl">
                $0 deposit.{" "}
                <span className="text-green-brand">$997 total. Free hosting for life.</span>
              </p>
            </div>
            <div className="h-px sm:h-10 w-full sm:w-px bg-white/10" />
            <p className="text-cream/60 text-sm max-w-xs">
              We build your homepage free. You approve it first. $600 starts the full build. $397 on go-live.
            </p>
          </div>

          <Link
            href="/start"
            className="inline-block bg-green-brand text-white font-bold px-8 py-4 rounded-full hover:bg-green-deep transition-colors text-lg"
          >
            Get my free homepage preview
          </Link>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="h-display text-3xl md:text-4xl text-ink mb-10">
            Why {city.name} businesses choose us
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {copy.whyUs.map((point, i) => (
              <li key={i} className="flex items-start gap-3 bg-white rounded-2xl border border-ink/8 p-5 shadow-sm">
                <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-green-brand flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="text-ink/80 leading-relaxed text-sm">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mini proof strip */}
      <section className="py-12 bg-white border-t border-b border-ink/8">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-xs font-bold tracking-widest uppercase text-ink/30 mb-8">
            What our clients say
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {proofTestimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Local FAQ */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-10">
            <Image
              src="/robots/robot-pointing.png"
              alt=""
              width={80}
              height={96}
              aria-hidden="true"
              className="w-20 h-auto shrink-0"
            />
            <h2 className="h-display text-3xl md:text-4xl text-ink">
              Local Questions
            </h2>
          </div>
          <LocalFAQ items={copy.localFAQ} />
        </div>
      </section>

      {/* Internal links */}
      <section className="py-12 bg-white border-t border-ink/8">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          {/* Nearby cities */}
          <div>
            <h3 className="font-bold text-ink text-lg mb-4">We also serve</h3>
            <ul className="flex flex-wrap gap-2">
              {nearbyCities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/${c.slug}/${serviceSlug}`}
                    className="inline-block text-sm px-3 py-1.5 rounded-full border border-ink/15 text-ink/70 hover:border-green-brand hover:text-green-deep transition-colors"
                  >
                    {service.name} in {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Other services */}
          <div>
            <h3 className="font-bold text-ink text-lg mb-4">Other services in {city.name}</h3>
            <ul className="flex flex-wrap gap-2">
              {otherServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${citySlug}/${s.slug}`}
                    className="inline-block text-sm px-3 py-1.5 rounded-full border border-ink/15 text-ink/70 hover:border-green-brand hover:text-green-deep transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-ink text-cream text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="h-display text-3xl md:text-4xl text-cream mb-4">
            Ready to get your {city.name} site built?
          </h2>
          <p className="text-cream/60 mb-8">
            Zero deposit. Free homepage preview. $997 total. Free lifetime hosting.
          </p>
          <Link
            href="/start"
            className="inline-block bg-green-brand text-white font-bold px-8 py-4 rounded-full hover:bg-green-deep transition-colors text-lg"
          >
            Get my free homepage preview
          </Link>
        </div>
      </section>
    </>
  );
}
