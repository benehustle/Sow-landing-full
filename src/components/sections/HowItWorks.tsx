import { Fragment } from "react";
import {
  ArrowRight,
  ClipboardCheck,
  Monitor,
  CircleDollarSign,
  Rocket,
  TrendingUp,
  PhoneCall,
  Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = {
  number: number;
  Icon: LucideIcon;
  title: string;
  sub: string;
};

const STEPS: Step[] = [
  {
    number: 1,
    Icon: ClipboardCheck,
    title: "Tell Us About You",
    sub: "2-min form. Your trade, your area, your goal.",
  },
  {
    number: 2,
    Icon: Monitor,
    title: "Free Homepage",
    sub: "We build your real homepage. You see it live.",
  },
  {
    number: 3,
    Icon: CircleDollarSign,
    title: "Approve & Pay $997",
    sub: "Love it? Lock it in. One-off. No deposit hassles.",
  },
  {
    number: 4,
    Icon: Rocket,
    title: "Live in 7 Days",
    sub: "Inner pages, hosting, domain. We push it live.",
  },
  {
    number: 5,
    Icon: TrendingUp,
    title: "90-Day Optimisation",
    sub: "Copy, conversion, local SEO. We keep tuning.",
  },
  {
    number: 6,
    Icon: PhoneCall,
    title: "Day 90: Phone Rings",
    sub: "Real leads. Real calls. We talk scale next.",
  },
];

function StepCard({ number, Icon, title, sub }: Step) {
  return (
    <div className="relative bg-white rounded-2xl shadow-sm border border-ink/8 px-5 pt-10 pb-6 w-full min-w-0 h-full flex flex-col items-center text-center">
      <span className="absolute -top-3 left-4 w-9 h-9 rounded-lg bg-green-deep text-white text-base font-extrabold flex items-center justify-center shadow-sm">
        {number}.
      </span>

      <Icon
        className="w-11 h-11 text-ink mb-4"
        aria-hidden="true"
        strokeWidth={1.75}
      />

      <p className="font-bold text-base text-ink leading-tight">{title}</p>
      <p className="text-sm text-ink/60 leading-snug mt-1">{sub}</p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how" className="bg-cream pt-12 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="h-display text-4xl md:text-5xl font-bold text-green-deep text-center mb-4 leading-[1.05]">
          How It Works
        </h2>
        <p className="text-center text-ink/65 text-lg mb-10 max-w-2xl mx-auto">
          Six steps. One price. Phone ringing in 90 days.
        </p>

        {/* Desktop: 6-col grid with arrows between */}
        <div className="hidden xl:grid xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] xl:gap-x-2 xl:items-stretch xl:justify-items-stretch">
          {STEPS.map((step, i) => (
            <Fragment key={step.number}>
              <StepCard {...step} />
              {i < STEPS.length - 1 && (
                <div className="flex items-center justify-center px-0.5" aria-hidden="true">
                  <ArrowRight className="w-5 h-5 text-green-brand shrink-0" strokeWidth={2.5} />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Tablet/medium-desktop: 3-col grid, 2 rows */}
        <div className="hidden md:grid xl:hidden grid-cols-3 gap-5 items-stretch">
          {STEPS.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>

        {/* Mobile: stacked */}
        <div className="md:hidden flex flex-col gap-6">
          {STEPS.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-10">
          <span className="w-5 h-5 rounded-full bg-green-brand flex items-center justify-center shrink-0">
            <Check className="w-3 h-3 text-white" aria-hidden="true" strokeWidth={3} />
          </span>
          <p className="text-green-deep font-bold text-sm md:text-base">
            No deposit. No risk. 90-day lead promise.
          </p>
        </div>
      </div>
    </section>
  );
}
