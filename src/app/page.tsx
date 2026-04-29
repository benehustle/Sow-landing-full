import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Lock, Users } from "lucide-react";
import TrustedBy from "@/components/sections/TrustedBy";
import PricingBreakdown from "@/components/sections/PricingBreakdown";
import HowItWorks from "@/components/sections/HowItWorks";
import WhatYouGet from "@/components/sections/WhatYouGet";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FaqSection from "@/components/home/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";
import { SITE_URL, SITE_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: `${SITE_NAME} | Custom Websites for $997 - Zero Deposit, Free Hosting`,
  description: "We build custom websites for Australian businesses. Zero deposit - we build your homepage free. $997 total. Free lifetime hosting.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${SITE_NAME} | Custom Websites for $997 - Zero Deposit, Free Hosting`,
    description: "We build custom websites for Australian businesses. Zero deposit - we build your homepage free. $997 total. Free lifetime hosting.",
    url: SITE_URL,
  },
};

export default function Home() {
  return (
    <>
      {/* ================================================================== */}
      {/* HERO + TRUSTED BY - share one continuous green arc                 */}
      {/* ================================================================== */}
      <div className="relative bg-cream overflow-hidden">

        {/* SHARED ARC - one big oval anchored top-right, spans both sections */}
        <div
          aria-hidden="true"
          className="absolute right-[-14%] -top-32 w-[60%] h-[1200px] rounded-[50%] bg-green-brand/[0.09] pointer-events-none z-0"
        />

      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden lg:min-h-[680px]">
        {/* Dot grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(12,42,27,0.06) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-0 items-start">

            {/* ---- LEFT: text ---- */}
            <div className="pt-16 pb-8 lg:pt-16 lg:pb-12">
              <h1 className="h-display text-4xl sm:text-5xl lg:text-[4.25rem] xl:text-[5rem] text-green-deep leading-[1.02] font-extrabold">
                Custom Coded Websites That Work as Hard as You Do.
              </h1>

              <p className="mt-6 text-lg text-ink/70 max-w-[420px] leading-relaxed">
                Affordable, fast and built for Australian businesses. Get your free homepage first. Pay only if you love it.
              </p>

              <div className="mt-8">
                <Link
                  href="/start"
                  className="inline-flex items-center gap-3 bg-green-deep text-white font-bold px-7 py-4 rounded-full hover:bg-green-brand transition-colors text-base"
                >
                  <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                    <ArrowRight className="w-4 h-4 text-green-deep" aria-hidden="true" />
                  </span>
                  Get My Free Homepage
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <span className="inline-flex items-center gap-2 text-sm text-ink/60">
                  <Lock className="w-4 h-4 text-ink/40 shrink-0" aria-hidden="true" />
                  100% Aussie support
                </span>
                <span className="hidden sm:block w-px h-4 bg-ink/20" aria-hidden="true" />
                <span className="inline-flex items-center gap-2 text-sm text-ink/60">
                  <Shield className="w-4 h-4 text-ink/40 shrink-0" aria-hidden="true" />
                  No lock-in contracts
                </span>
                <span className="hidden sm:block w-px h-4 bg-ink/20" aria-hidden="true" />
                <span className="inline-flex items-center gap-2 text-sm text-ink/60">
                  <Users className="w-4 h-4 text-ink/40 shrink-0" aria-hidden="true" />
                  Trusted by local businesses
                </span>
              </div>
            </div>

            {/* ---- RIGHT: hero image - top-aligned, fills right column, base clips at section bottom ---- */}
            <div className="hidden lg:flex items-start justify-center pt-6">
              <Image
                src="/robots/hero-mockup.png"
                alt="Spot On Websites mascot showcasing custom website examples on laptop and phone"
                width={860}
                height={740}
                priority
                className="w-full h-auto"
              />
            </div>

            {/* Mobile image */}
            <div className="lg:hidden flex justify-center pb-10">
              <Image
                src="/robots/hero-mockup.png"
                alt="Spot On Websites mascot showcasing custom website examples on laptop and phone"
                width={860}
                height={740}
                priority
                className="w-full max-w-[420px] h-auto"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* TRUSTED BY - same shared-arc wrapper                               */}
      {/* ------------------------------------------------------------------ */}
      <TrustedBy />

      </div>{/* end shared hero+trusted-by wrapper */}

      {/* ------------------------------------------------------------------ */}
      {/* PRICING BREAKDOWN                                                   */}
      {/* ------------------------------------------------------------------ */}
      <div id="pricing">
        <PricingBreakdown />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* HOW IT WORKS                                                        */}
      {/* ------------------------------------------------------------------ */}
      <HowItWorks />

      {/* ------------------------------------------------------------------ */}
      {/* WHAT YOU GET                                                        */}
      {/* ------------------------------------------------------------------ */}
      <WhatYouGet />

      {/* ------------------------------------------------------------------ */}
      {/* WHY CHOOSE US                                                       */}
      {/* ------------------------------------------------------------------ */}
      <WhyChooseUs />

      {/* ------------------------------------------------------------------ */}
      {/* FAQ                                                                 */}
      {/* ------------------------------------------------------------------ */}
      <FaqSection />

      {/* ------------------------------------------------------------------ */}
      {/* FINAL CTA                                                           */}
      {/* ------------------------------------------------------------------ */}
      <FinalCTA />
    </>
  );
}
