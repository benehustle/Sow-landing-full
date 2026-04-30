import Link from "next/link";
import { ArrowRight, Gift, DollarSign, Phone } from "lucide-react";

const BLOCKS = [
  {
    Icon: Gift,
    label: "Block 1",
    title: "Free Homepage",
    pop: "$0 to start",
    body: "We build your real homepage first. Custom coded for your business. You see it live before you pay a cent. Hate it? Walk. We absorb the time.",
  },
  {
    Icon: DollarSign,
    label: "Block 2",
    title: "$997 Site",
    pop: "Total. No add-ons.",
    body: "Approve the homepage and we finish the rest. Inner pages, mobile responsive, SEO foundations, domain wired up. Free lifetime hosting included. $997 total.",
  },
  {
    Icon: Phone,
    label: "Block 3",
    title: "90-Day Lead Promise",
    pop: "Until your phone rings",
    body: "We don't disappear after launch. For 90 days we keep tuning copy, conversion, and local SEO until your phone's actually ringing. That's the promise.",
  },
];

export default function TheOffer() {
  return (
    <section className="bg-white border-y border-ink/8 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-green-brand/15 text-green-deep text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
            The Offer
          </span>
          <h2 className="h-display text-4xl md:text-5xl font-extrabold text-green-deep leading-[1.05]">
            <span className="block">Free Homepage. $997 Site.</span>
            <span className="block text-green-brand mt-2 md:mt-3">90 Days of Lead Work.</span>
          </h2>
          <p className="mt-4 text-ink/65 text-lg max-w-2xl mx-auto">
            Three things you get. One price. Zero risk on day one.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {BLOCKS.map(({ Icon, label, title, pop, body }) => (
            <div
              key={title}
              className="relative bg-cream rounded-2xl border border-ink/10 p-7 shadow-sm flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-bold tracking-widest uppercase text-ink/40">
                  {label}
                </span>
                <Icon className="w-7 h-7 text-green-brand" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <h3 className="h-display text-2xl font-extrabold text-ink leading-tight mb-1">
                {title}
              </h3>
              <p className="text-green-deep font-bold text-sm mb-4">{pop}</p>
              <p className="text-ink/70 leading-relaxed text-[15px]">{body}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/start"
            className="inline-flex items-center gap-3 bg-green-deep text-white font-bold px-7 py-4 rounded-full hover:bg-green-brand transition-colors"
          >
            <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
              <ArrowRight className="w-4 h-4 text-green-deep" aria-hidden="true" />
            </span>
            Build My Free Homepage Now
          </Link>
          <p className="mt-3 text-sm text-ink/50">No deposit. No card. No risk.</p>
        </div>
      </div>
    </section>
  );
}
