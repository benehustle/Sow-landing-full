"use client";

import { useState } from "react";

type Testimonial = {
  name: string;
  slug: string;
  quote: string;
  /** Fallback colour for the placeholder circle when the logo PNG is missing */
  placeholderBg: string;
  /** Optional circular profile image (overrides /logos/[slug].png) */
  imageSrc?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "The Dog Door Guy",
    slug: "dog-door-guy",
    quote: "\u201CSuper easy process and the site looks sharp.\u201D",
    placeholderBg: "bg-ink/80",
    imageSrc: "/logos/dog-door-guy.png",
  },
  {
    name: "Melbourne Mint Coins",
    slug: "melbourne-mint-coins",
    quote: "\u201CBeats the $5k website we had built.\u201D",
    placeholderBg: "bg-green-deep",
    imageSrc: "/logos/melbourne-mint.png",
  },
  {
    name: "Inspire Energy",
    slug: "inspire-energy",
    quote: "\u201CFinally a site that matches how professional we are in the field.\u201D",
    placeholderBg: "bg-red-accent",
    imageSrc: "/logos/inspire-energy.png",
  },
];

function BrandLogo({
  name,
  slug,
  placeholderBg,
  imageSrc,
}: Pick<Testimonial, "name" | "slug" | "placeholderBg" | "imageSrc">) {
  const src = imageSrc ?? `/logos/${slug}.png`;
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <div
        className={`w-[60px] h-[60px] rounded-full ${placeholderBg} flex items-center justify-center shrink-0`}
        aria-label={`${name} logo`}
      >
        <span className="text-white font-bold text-xl">{name.charAt(0)}</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`${name} logo`}
      width={60}
      height={60}
      className="w-[60px] h-[60px] rounded-full object-cover shrink-0 bg-white border border-ink/10"
      onError={() => setBroken(true)}
    />
  );
}

function TestimonialCard({ name, slug, quote, placeholderBg, imageSrc }: Testimonial) {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-ink/8 p-6 flex flex-col gap-4 text-left">
      {/* Top row: logo + 5-star pill */}
      <div className="flex items-center justify-between gap-4">
        <BrandLogo name={name} slug={slug} placeholderBg={placeholderBg} imageSrc={imageSrc} />
        <span className="inline-flex items-center bg-green-brand text-white px-3 py-1 rounded-full text-sm font-bold tracking-wider">
          &#9733;&#9733;&#9733;&#9733;&#9733;
        </span>
      </div>

      {/* Pull quote */}
      <p className="h-display text-2xl font-bold text-ink leading-tight">
        {quote}
      </p>

      {/* Client name */}
      <p className="text-sm text-ink/60 mt-auto">{name}</p>
    </article>
  );
}

export default function TrustedBy() {
  return (
    <section className="relative pt-0 pb-7 md:pt-0 md:pb-8">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="h-display text-3xl md:text-4xl text-green-deep font-bold mb-8">
          Trusted by Aussie Businesses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.slug} {...t} />
          ))}
        </div>

        {/* Carousel dots (decorative for now) */}
        <div className="flex items-center justify-center gap-2 mt-6" aria-hidden="true">
          <span className="w-2 h-2 rounded-full bg-ink/80" />
          <span className="w-2 h-2 rounded-full bg-ink/20" />
          <span className="w-2 h-2 rounded-full bg-ink/20" />
        </div>
      </div>
    </section>
  );
}
