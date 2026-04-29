import { testimonials } from "@/data/testimonials";

function TestimonialCard({
  name,
  initials,
  quote,
}: {
  name: string;
  initials: string;
  quote: string;
}) {
  return (
    <div
      className="shrink-0 rounded-2xl bg-cream border border-ink/8 shadow-sm px-5 py-4 flex flex-col gap-3"
      style={{ width: 280 }}
    >
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
      <p className="text-ink/70 text-sm leading-relaxed line-clamp-3">{quote}</p>
    </div>
  );
}

export default function ProofStrip() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-12 bg-cream border-t border-ink/8 overflow-hidden">
      <p className="text-center text-xs font-bold tracking-widest uppercase text-ink/30 mb-6">
        Trusted by Aussie businesses
      </p>

      {/* Desktop marquee */}
      <div className="hidden md:block marquee-track overflow-hidden">
        <div className="flex gap-5 animate-marquee w-max">
          {doubled.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>

      {/* Mobile stack */}
      <div className="md:hidden flex flex-col gap-4 px-4">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
}
