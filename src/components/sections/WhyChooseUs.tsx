import { Shield, Eye, Headset, PhoneCall } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type Card = {
  Icon: LucideIcon;
  title: ReactNode;
  sub: ReactNode;
};

const CARDS: Card[] = [
  {
    Icon: Eye,
    title: <>See Before You Pay</>,
    sub: <>Free homepage first. Pay only when you love it.</>,
  },
  {
    Icon: PhoneCall,
    title: (
      <>
        90-Day <span className="text-green-brand">Lead Promise</span>
      </>
    ),
    sub: <>We optimise until your phone&apos;s actually ringing.</>,
  },
  {
    Icon: Headset,
    title: (
      <>
        100% Aussie <span className="text-green-brand">Support</span>
      </>
    ),
    sub: <>Real people. Same time zone. No offshore runaround.</>,
  },
  {
    Icon: Shield,
    title: <>No Lock-In, No BS</>,
    sub: <>You own everything. Free hosting for life.</>,
  },
];

function ChooseCard({ Icon, title, sub }: Card) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-ink/8 p-8 text-center">
      <Icon
        className="w-12 h-12 mx-auto mb-5 text-green-deep"
        aria-hidden="true"
        strokeWidth={1.75}
      />
      <p className="font-bold text-lg text-ink mb-3 leading-tight">{title}</p>
      <p className="text-sm text-ink/60 leading-relaxed">{sub}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="bg-cream pt-2 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="h-display text-3xl md:text-4xl font-bold text-green-deep mb-10 mx-auto leading-tight lg:whitespace-nowrap">
          Why{" "}
          <span className="relative inline-block">
            Aussie Tradies
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 -bottom-1 h-[3px] bg-green-brand rounded-full"
            />
          </span>{" "}
          Choose Spot On Websites
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((c, i) => (
            <ChooseCard key={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
