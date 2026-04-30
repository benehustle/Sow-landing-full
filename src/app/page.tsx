import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Check, Star } from "lucide-react";
import TrustedBy from "@/components/sections/TrustedBy";
import OldWayVsNewWay from "@/components/sections/OldWayVsNewWay";
import TheOffer from "@/components/sections/TheOffer";
import ThePromise from "@/components/sections/ThePromise";
import HowItWorks from "@/components/sections/HowItWorks";
import PortfolioSection from "@/components/sections/PortfolioSection";
import WhatYouGet from "@/components/sections/WhatYouGet";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FaqSection from "@/components/home/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";
import { SITE_URL, SITE_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: `${SITE_NAME} | Free Homepage, $997 Site, 90-Day Lead Promise for Aussie Tradies`,
  description:
    "Free homepage. $997 site. 90 days of optimisation until your phone's ringing. Custom built for Australian tradies. No deposit. Free hosting for life.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${SITE_NAME} | Free Homepage, $997 Site, 90-Day Lead Promise for Aussie Tradies`,
    description:
      "Free homepage. $997 site. 90 days of optimisation until your phone's ringing. Custom built for Australian tradies. No deposit. Free hosting for life.",
    url: SITE_URL,
  },
};

export default function Home() {
  return (
    <>
      {/* HERO + TRUSTED BY shared green arc */}
      <div className="relative bg-cream overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute right-[-14%] -top-32 w-[60%] h-[1200px] rounded-[50%] bg-green-brand/[0.09] pointer-events-none z-0"
        />

        {/* HERO */}
        <section className="relative overflow-hidden lg:min-h-[680px]">
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
              {/* LEFT */}
              <div className="pt-14 pb-4 lg:pt-16 lg:pb-2">
                <span className="inline-flex items-center gap-2 bg-green-brand/15 text-green-deep text-xs font-bold px-3 py-1 rounded-full mb-5 uppercase tracking-widest">
                  <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                  90-Day Lead Guarantee
                </span>

                <h1 className="h-display text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] xl:text-[3.25rem] text-green-deep leading-[1.05] font-extrabold tracking-tight">
                  Get More Leads
                  <br />
                  From Your Website
                  <br />
                  <span className="text-green-brand">Or We Work For FREE</span>
                  <br />
                  Until It Does
                </h1>

                <p className="mt-6 text-lg text-ink/75 max-w-[480px] leading-relaxed">
                  We build your homepage first. Then spend 90 days helping it actually generate leads for your business.
                </p>

                {/* 3 bullet points */}
                <ul className="mt-6 flex flex-col gap-2.5 max-w-[480px]">
                  {[
                    "Built for conversions (not just design)",
                    "No deposit, pay only if you love it",
                    "90-day lead activation included",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-green-brand flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span className="text-ink/80 text-base font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href="/start"
                    className="inline-flex items-center gap-3 bg-green-deep text-white font-bold px-7 py-4 rounded-full hover:bg-green-brand transition-colors text-base shadow-lg shadow-green-deep/20"
                  >
                    <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                      <ArrowRight className="w-4 h-4 text-green-deep" aria-hidden="true" />
                    </span>
                    See My Free Homepage
                  </Link>
                  <p className="mt-2 text-sm text-ink/50">No call required.</p>
                </div>

                {/* Trust strip */}
                <div className="mt-7 flex items-center gap-3">
                  <div className="flex items-center gap-0.5" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-green-brand text-green-brand" />
                    ))}
                  </div>
                  <p className="text-sm text-ink/65 font-medium">
                    Trusted by <span className="font-bold text-ink">100+ Aussie businesses</span>
                  </p>
                </div>
              </div>

              {/* RIGHT image - scaled up to match headline column height */}
              <div className="hidden lg:flex items-center justify-center relative -mr-12 xl:-mr-20">
                <Image
                  src="/robots/hero-home.png"
                  alt="Laptop and phone mockup with new lead call screen and Spot On mascot"
                  width={2000}
                  height={2000}
                  priority
                  unoptimized
                  className="w-[120%] xl:w-[130%] max-w-none h-auto"
                />
              </div>

              <div className="lg:hidden flex justify-center pb-10">
                <Image
                  src="/robots/hero-home.png"
                  alt="Laptop and phone mockup with new lead call screen and Spot On mascot"
                  width={2000}
                  height={2000}
                  priority
                  unoptimized
                  className="w-full max-w-[420px] h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <TrustedBy />
      </div>

      {/* OLD WAY vs NEW WAY */}
      <OldWayVsNewWay />

      {/* THE OFFER (3 blocks) */}
      <div id="offer">
        <TheOffer />
      </div>

      {/* THE 90-DAY PROMISE - centrepiece */}
      <ThePromise />

      {/* HOW IT WORKS - 6 steps */}
      <HowItWorks />

      {/* PORTFOLIO */}
      <PortfolioSection />

      {/* WHAT YOU GET / INCLUDED */}
      <WhatYouGet />

      {/* WHY AUSSIE TRADIES CHOOSE US */}
      <WhyChooseUs />

      {/* FAQ */}
      <FaqSection />

      {/* FINAL CTA */}
      <FinalCTA />
    </>
  );
}
