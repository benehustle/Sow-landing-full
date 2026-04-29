import type { Metadata } from "next";
import Link from "next/link";
import PhoneMockup from "@/components/home/PhoneMockup";
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
      <section className="relative overflow-hidden bg-cream">
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

        {/* Green glow - top right */}
        <div
          aria-hidden="true"
          className="absolute -top-48 -right-48 w-[640px] h-[640px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(31,183,109,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Green glow - bottom left */}
        <div
          aria-hidden="true"
          className="absolute -bottom-48 -left-48 w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(31,183,109,0.13) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
            {/* ---- Text block ---- */}
            <div className="flex-1 min-w-0">
              {/* Eyebrow */}
              <p
                className="small-caps text-green-deep font-bold tracking-wide text-sm mb-6"
              >
                Custom Design. No Templates. Ready in 7 Days.
              </p>

              {/* H1 */}
              <h1 className="h-display text-6xl md:text-8xl text-ink leading-[1.05] mb-2">
                Custom Coded
                <br />
                Websites
              </h1>

              {/* Pricing treatment - kept outside h1 to avoid absolute overflow clipping */}
              <div className="relative inline-block mb-10">
                {/* "From $997" in display font matching h1 */}
                <p className="h-display text-6xl md:text-8xl text-ink leading-none">
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
              <p className="text-ink/70 text-lg md:text-xl lg:mt-12 mb-10 max-w-lg leading-relaxed">
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
                  className="px-7 py-3.5 bg-transparent text-ink font-bold rounded-full text-base border-2 border-ink/20 hover:border-ink/50 transition-colors"
                >
                  See How It Works
                </Link>
              </div>
            </div>

            {/* ---- Phone mockup ---- */}
            <div className="hidden lg:flex shrink-0 justify-center items-center pt-4">
              <PhoneMockup />
            </div>
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
