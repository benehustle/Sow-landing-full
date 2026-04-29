import type { Metadata } from "next";
import Link from "next/link";
import { Gauge, ShieldCheck, Smartphone, Search } from "lucide-react";
import ProofStrip from "@/components/home/ProofStrip";
import ProcessSection from "@/components/home/ProcessSection";
import FaqSection from "@/components/home/FaqSection";
import FinalCta from "@/components/home/FinalCta";
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
      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative -mt-16 overflow-hidden bg-ink">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        <div aria-hidden="true" className="absolute top-0 inset-x-0 h-[2px] bg-ink pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
            {/* ---- Text block ---- */}
            <div className="flex-1 min-w-0">
              {/* Eyebrow */}
              <p
                className="small-caps text-cream/85 font-bold tracking-wide text-sm mb-6"
              >
                Custom Design. No Templates. Ready in 7 Days.
              </p>

              {/* H1 */}
              <h1 className="h-display text-6xl md:text-8xl text-cream leading-[1.05] mb-2">
                Custom Coded
                <br />
                <span className="text-green-brand">Websites</span>
              </h1>

              {/* Pricing treatment - kept outside h1 to avoid absolute overflow clipping */}
              <div className="relative inline-block mb-10">
                {/* "From $997" in display font matching h1 */}
                <p className="h-display text-6xl md:text-8xl text-cream leading-none">
                  <span className="relative inline-block">
                    {/* "From" with SVG strikethrough */}
                    <span className="relative inline-block">
                      From
                      <svg
                        aria-hidden="true"
                        className="absolute pointer-events-none"
                        style={{
                          top: "52%",
                          left: "-4px",
                          width: "calc(100% + 8px)",
                          height: "16px",
                          transform: "translateY(-50%) rotate(-8deg)",
                          overflow: "visible",
                        }}
                      >
                        <line
                          x1="0"
                          y1="8"
                          x2="100%"
                          y2="8"
                          stroke="#E63946"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      {/* ONLY — anchored under "From", not under $997 */}
                      <span
                        className="absolute font-marker text-red-accent pointer-events-none left-0"
                        style={{
                          fontSize: "clamp(3rem, 6vw, 5rem)",
                          top: "100%",
                          marginTop: "-0.15em",
                          transform: "rotate(-6deg)",
                          transformOrigin: "top left",
                          lineHeight: 1,
                          whiteSpace: "nowrap",
                        }}
                        aria-hidden="true"
                      >
                        ONLY
                      </span>
                    </span>
                    {" $997"}
                  </span>
                </p>
              </div>

              {/* Subhead — extra top gap on lg+ so ONLY/pricing clears on desktop; mobile unchanged */}
              <p className="text-cream/85 text-lg md:text-xl lg:mt-12 mb-10 max-w-lg leading-relaxed">
                Zero deposit. We build your homepage free. You only pay if you love it.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/start"
                  className="px-7 py-3.5 bg-green-brand text-cream font-bold rounded-full text-base hover:bg-green-deep transition-colors"
                >
                  Get My Free Homepage
                </Link>
                <Link
                  href="#how"
                  className="px-7 py-3.5 bg-transparent text-cream font-bold rounded-full text-base border-2 border-cream/40 hover:border-cream/70 transition-colors"
                >
                  See How It Works
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* USP strip (hero divider) */}
        <div className="relative z-10 border-t border-cream/20 bg-ink/50 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <ul className="grid grid-cols-2 gap-y-4 md:grid-cols-4">
              <li className="flex items-center justify-center gap-2 text-cream/90">
                <Gauge className="h-4 w-4 text-green-brand" aria-hidden="true" />
                <span className="text-sm md:text-base font-semibold">Fast Load</span>
              </li>
              <li className="flex items-center justify-center gap-2 text-cream/90">
                <ShieldCheck className="h-4 w-4 text-green-brand" aria-hidden="true" />
                <span className="text-sm md:text-base font-semibold">Secure</span>
              </li>
              <li className="flex items-center justify-center gap-2 text-cream/90">
                <Smartphone className="h-4 w-4 text-green-brand" aria-hidden="true" />
                <span className="text-sm md:text-base font-semibold">Mobile Ready</span>
              </li>
              <li className="flex items-center justify-center gap-2 text-cream/90">
                <Search className="h-4 w-4 text-green-brand" aria-hidden="true" />
                <span className="text-sm md:text-base font-semibold">SEO Friendly</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* PROOF STRIP                                                         */}
      {/* ------------------------------------------------------------------ */}
      <ProofStrip />

      {/* ------------------------------------------------------------------ */}
      {/* PROCESS                                                             */}
      {/* ------------------------------------------------------------------ */}
      <ProcessSection />

      {/* ------------------------------------------------------------------ */}
      {/* FAQ                                                                 */}
      {/* ------------------------------------------------------------------ */}
      <FaqSection />

      {/* ------------------------------------------------------------------ */}
      {/* FINAL CTA                                                           */}
      {/* ------------------------------------------------------------------ */}
      <FinalCta />
    </>
  );
}
