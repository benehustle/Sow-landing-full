import { X, Check } from "lucide-react";

const OLD_WAY = [
  "Pay $3-5k upfront and hope it works out",
  "Wait 6-8 weeks for a site that looks like everyone else's",
  "Get a pretty brochure that doesn't bring leads",
  "Locked into hosting fees forever",
  "Chase your designer for changes that take weeks",
  "No idea if it'll actually grow your business",
];

const NEW_WAY = [
  "$0 upfront. See your homepage before you pay a cent",
  "Live in 7 days. Custom built, not template-recycled",
  "90 days of optimisation until your phone's actually ringing",
  "Free hosting for life. No monthly bill. Ever.",
  "Real Aussie team. One call, one team, sorted",
  "We don't get paid properly until your site works",
];

export default function OldWayVsNewWay() {
  return (
    <section className="bg-cream py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="h-display text-4xl md:text-5xl font-extrabold text-green-deep leading-tight">
            The Old Way vs The Spot On Way
          </h2>
          <p className="mt-4 text-ink/65 text-lg">
            Why Aussie tradies are ditching the $5k website rort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* OLD WAY */}
          <div className="bg-white rounded-3xl border border-ink/10 p-8 lg:p-10 shadow-sm">
            <div className="inline-flex items-center gap-2 bg-red-accent/10 text-red-accent text-xs font-bold px-3 py-1 rounded-full mb-5 uppercase tracking-widest">
              The Old Way
            </div>
            <h3 className="h-display text-2xl font-extrabold text-ink mb-6">
              Pay big. Hope big. Stress big.
            </h3>
            <ul className="flex flex-col gap-4">
              {OLD_WAY.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-red-accent/15 flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5 text-red-accent" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="text-ink/75 leading-relaxed text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* NEW WAY */}
          <div className="bg-green-deep rounded-3xl p-8 lg:p-10 shadow-sm">
            <div className="inline-flex items-center gap-2 bg-white text-green-deep text-xs font-bold px-3.5 py-1.5 rounded-full mb-5 uppercase tracking-widest shadow-md ring-1 ring-white/60">
              The Spot On Way
            </div>
            <h3 className="h-display text-2xl font-extrabold text-cream mb-6">
              Pay nothing. See it first. Phone rings.
            </h3>
            <ul className="flex flex-col gap-4">
              {NEW_WAY.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-green-brand flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="text-cream/85 leading-relaxed text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
