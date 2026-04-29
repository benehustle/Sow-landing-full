"use client";

import { useState } from "react";

type Testimonial = {
  name: string;
  slug: string;
  quote: string;
  /** Fallback colour for the placeholder circle when the logo PNG is missing */
  placeholderBg: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Salt Design Co",
    slug: "salt",
    quote: "\u201CThis was so easy.\u201D",
    placeholderBg: "bg-ink/80",
  },
  {
    name: "The Finance Guys",
    slug: "finance-guys",
    quote: "\u201CBeats the $5k website we had built.\u201D",
    placeholderBg: "bg-green-deep",
  },
  {
    name: "Eastern Electrical",
    slug: "eastern-electrical",
    quote: "\u201COurs doesn't look like every other sparkie site.\u201D",
    placeholderBg: "bg-red-accent",
  },
];

function BrandLogo({
  name,
  slug,
  placeholderBg,
}: Pick<Testimonial, "name" | "slug" | "placeholderBg">) {
  // Start with errored = true so the placeholder renders immediately (no broken
  // image flash). Once a real PNG loads successfully, swap to the image.
  const [errored, setErrored] = useState(true);

  return (
    <>
      {errored ? (
        <div
          className={`w-[60px] h-[60px] rounded-full ${placeholderBg} flex items-center justify-center shrink-0`}
          aria-label={`${name} logo`}
        >
          <span className="text-white font-bold text-xl">{name.charAt(0)}</span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/logos/${slug}.png`}
          alt={`${name} logo`}
          width={60}
          height={60}
          className="w-[60px] h-[60px] rounded-full object-contain shrink-0"
        />
      )}
      {/* Hidden probe — if the real logo loads, swap to it */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/logos/${slug}.png`}
        alt=""
        aria-hidden="true"
        className="hidden"
        onLoad={() => setErrored(false)}
        onError={() => setErrored(true)}
      />
    </>
  );
}

function TestimonialCard({ name, slug, quote, placeholderBg }: Testimonial) {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-ink/8 p-6 flex flex-col gap-4 text-left">
      {/* Top row: logo + 5-star pill */}
      <div className="flex items-center justify-between gap-4">
        <BrandLogo name={name} slug={slug} placeholderBg={placeholderBg} />
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
    <section className="relative pt-7 pb-7 md:pt-8 md:pb-8">
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
