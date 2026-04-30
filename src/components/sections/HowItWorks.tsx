import { Fragment } from "react";
import {
  ArrowRight,
  ClipboardCheck,
  Monitor,
  CircleDollarSign,
  Rocket,
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
    title: "Get Started",
    sub: "Tell us about your business",
  },
  {
    number: 2,
    Icon: Monitor,
    title: "Free Homepage",
    sub: "See a real working homepage",
  },
  {
    number: 3,
    Icon: CircleDollarSign,
    title: "Approve & Pay $600",
    sub: "Quick call, only if you love it",
  },
  {
    number: 4,
    Icon: Rocket,
    title: "Live in 7 Days",
    sub: "$397 balance, then go live",
  },
];

function StepCard({ number, Icon, title, sub }: Step) {
  return (
    <div className="relative bg-white rounded-2xl shadow-sm border border-ink/8 px-5 pt-10 pb-6 w-full min-w-0 h-full flex flex-col items-center text-center">
      {/* Floating number badge - square rounded */}
      <span className="absolute -top-3 left-4 w-9 h-9 rounded-lg bg-green-deep text-white text-base font-extrabold flex items-center justify-center shadow-sm">
        {number}.
      </span>

      {/* Icon (no tinted box) */}
      <Icon
        className="w-12 h-12 text-ink mb-4"
        aria-hidden="true"
        strokeWidth={1.75}
      />

      <p className="font-bold text-base text-ink">{title}</p>
      <p className="text-sm text-ink/60 leading-snug mt-1">{sub}</p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how" className="bg-cream pt-3 pb-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="h-display text-4xl md:text-5xl font-bold text-green-deep text-center mb-10">
          How It Works
        </h2>

        {/* Desktop: CSS Grid forces equal column widths + identical row height for all cards */}
        <div className="hidden lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-x-3 lg:items-stretch lg:justify-items-stretch">
          {STEPS.map((step, i) => (
            <Fragment key={step.number}>
              <StepCard {...step} />
              {i < STEPS.length - 1 && (
                <div className="flex items-center justify-center px-0.5" aria-hidden="true">
                  <ArrowRight className="w-6 h-6 text-green-brand shrink-0" strokeWidth={2.5} />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Tablet: 2x2 grid, equal height within each row */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 items-stretch">
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

        {/* Tagline */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <span className="w-5 h-5 rounded-full bg-green-brand flex items-center justify-center shrink-0">
            <Check className="w-3 h-3 text-white" aria-hidden="true" strokeWidth={3} />
          </span>
          <p className="text-green-deep font-bold text-sm md:text-base">
            No deposit. No risk. You&apos;re in control.
          </p>
        </div>
      </div>
    </section>
  );
}
