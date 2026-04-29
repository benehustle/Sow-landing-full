import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services, getServiceBySlug } from "@/data/services";
import { cities } from "@/data/cities";
import { SITE_URL, SITE_NAME } from "@/lib/config";
import Breadcrumb from "@/components/local/Breadcrumb";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

type Props = { params: Promise<{ service: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  if (!service) return {};
  const title = `${service.name} | ${SITE_NAME} - Australia`;
  const description = `${service.name} for Australian businesses. Zero deposit - we build your homepage free. $997 total. Free lifetime hosting.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/services/${serviceSlug}` },
    openGraph: { title, description, url: `${SITE_URL}/services/${serviceSlug}` },
  };
}

export default async function ServiceHubPage({ params }: Props) {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  if (!service) notFound();

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-cream border-b border-ink/8">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.name },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-ink text-cream py-16 md:py-20 relative overflow-hidden">
        <Image
          src="/robots/robot-pointing.png"
          alt=""
          width={180}
          height={216}
          aria-hidden="true"
          className="hidden md:block absolute top-10 right-8 lg:right-16 w-[180px] h-auto -scale-x-100 pointer-events-none"
        />
        <div className="max-w-5xl mx-auto px-4 relative">
          <h1 className="h-display text-4xl md:text-5xl text-cream mb-4">
            {service.name} - Australia-Wide
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl mb-8 leading-relaxed">
            We provide {service.name.toLowerCase()} for businesses across Australia. Zero deposit - we build your homepage free and you only pay $997 total if you love what you see. Free lifetime hosting included.
          </p>
          <Link
            href="/start"
            className="inline-block bg-green-brand text-white font-bold px-8 py-4 rounded-full hover:bg-green-deep transition-colors"
          >
            Get your free site
          </Link>
        </div>
      </section>

      {/* Cities grid */}
      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="h-display text-3xl text-ink mb-8">
            {service.name} by city
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}/${serviceSlug}`}
                className="block bg-white border border-ink/8 rounded-xl p-4 shadow-sm hover:border-green-brand hover:shadow-md transition-all group"
              >
                <p className="font-bold text-ink group-hover:text-green-deep transition-colors">
                  {city.name}
                </p>
                <p className="text-ink/50 text-xs mt-0.5">{city.state}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-ink text-cream text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="h-display text-3xl text-cream mb-4">
            Get your {service.name.toLowerCase()} started today
          </h2>
          <p className="text-cream/60 mb-8">
            $997 total. Zero deposit. Free homepage preview. Free lifetime hosting.
          </p>
          <Link
            href="/start"
            className="inline-block bg-green-brand text-white font-bold px-8 py-4 rounded-full hover:bg-green-deep transition-colors"
          >
            Start for free - zero risk
          </Link>
        </div>
      </section>
    </>
  );
}
