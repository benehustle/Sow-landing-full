import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-cream pt-0 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-green-deep p-10 lg:p-14">
          {/* Full-height robot pinned to right edge of tile */}
          <Image
            src="/robots/robot-pointing.png"
            alt=""
            width={320}
            height={360}
            aria-hidden="true"
            className="hidden md:block absolute right-0 top-0 bottom-0 h-full w-auto object-contain object-right z-30 pointer-events-none"
          />
          <div className="relative z-20 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            {/* LEFT - Text + CTA (cols 1-3 of 5) */}
            <div className="md:col-span-3">
              <h2 className="h-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-cream leading-[1.1] mb-5">
                Your Business. Your Website.
                <br />
                <span className="text-green-brand">Built to Grow.</span>
              </h2>
              <p className="text-cream/85 text-base md:text-lg mb-8">
                Get your FREE homepage today. No deposit. No risk.
              </p>
              <Link
                href="/start"
                className="inline-flex items-center gap-3 bg-white text-green-deep font-bold px-7 py-4 rounded-full hover:bg-green-brand hover:text-white transition-colors text-base"
              >
                <span className="w-8 h-8 rounded-full bg-green-deep flex items-center justify-center shrink-0">
                  <ArrowRight
                    className="w-4 h-4 text-white"
                    aria-hidden="true"
                  />
                </span>
                Get My Free Homepage
              </Link>
            </div>

            {/* RIGHT - spacer column (robot pinned to tile above) with dot pattern */}
            <div className="hidden md:block md:col-span-2 relative h-[280px] lg:h-[320px]">
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(31,183,109,0.55) 1.5px, transparent 1.5px)",
                  backgroundSize: "20px 20px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
