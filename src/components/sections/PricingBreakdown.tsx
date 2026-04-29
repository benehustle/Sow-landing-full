"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DollarSign, Zap, Shield, Headset } from "lucide-react";

type Feature = {
  Icon: typeof DollarSign;
  heading: string;
  sub: string;
};

const FEATURES: Feature[] = [
  {
    Icon: DollarSign,
    heading: "$997 total.",
    sub: "Zero deposit. Free homepage first.",
  },
  {
    Icon: Zap,
    heading: "Built fast.",
    sub: "Ready in 7 days.",
  },
  {
    Icon: Shield,
    heading: "Built for your business.",
    sub: "Secure, scalable, and SEO ready.",
  },
  {
    Icon: Headset,
    heading: "100% Aussie support.",
    sub: "Real people. Real help.",
  },
];

function FeatureRow({ Icon, heading, sub }: Feature) {
  return (
    <div className="flex items-start gap-4 py-4">
      <span className="w-11 h-11 rounded-full border border-ink/20 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-ink" aria-hidden="true" strokeWidth={1.75} />
      </span>
      <div>
        <p className="text-lg font-bold text-ink leading-snug">{heading}</p>
        <p className="text-sm text-ink/60 mt-0.5">{sub}</p>
      </div>
    </div>
  );
}

export default function PricingBreakdown() {
  return (
    <section className="relative pt-3 pb-5 bg-cream overflow-hidden">
      {/* Subtle green blob behind robot, mid-left */}
      <div
        aria-hidden="true"
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-green-brand/[0.10] pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT */}
          <div>
            <p className="h-display text-2xl md:text-3xl font-extrabold text-ink leading-tight">
              Custom Coded Websites
            </p>
            <h2 className="h-display text-6xl md:text-7xl font-extrabold mb-6 leading-[1.05]">
              <span className="text-ink">Only </span>
              <span className="text-green-brand">$997</span>
            </h2>
            <span
              aria-hidden="true"
              className="block w-12 h-[3px] bg-green-brand rounded-full mb-4"
            />

            <div className="flex flex-col divide-y divide-ink/10">
              {FEATURES.map((f) => (
                <FeatureRow key={f.heading} {...f} />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <motion.div
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <Image
              src="/robots/pricing-robot.png"
              alt=""
              width={520}
              height={640}
              className="w-full h-auto max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
