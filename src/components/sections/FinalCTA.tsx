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
            className="hidden md:block absolute right-0 top-0 bottom-0 h-full w-auto object-contain object-right z-30 pointer-events-none translate-x-8 md:translate-x-14 lg:translate-x-20 xl:translate-x-24"
          />
          <div className="relative z-20 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            {/* LEFT - Text + CTA (cols 1-3 of 5) */}
            <div className="md:col-span-3 md:pr-6 lg:pr-10 xl:pr-14">
              <h2 className="h-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-cream leading-[1.05] mb-5">
                <span className="block">Get Your Free Homepage.</span>
                <span className="block text-green-brand mt-2 md:mt-3">Get Your Phone Ringing.</span>
              </h2>
              <div className="flex flex-col items-start gap-2 mb-8">
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
                  Build My Free Homepage Now
                </Link>
                <p className="text-cream/85 text-base md:text-lg max-w-xl">
                  Free homepage. $997 site. 90-day lead promise. No deposit. No risk.
                </p>
              </div>
            </div>

            {/* RIGHT - spacer for layout balance (robot is absolutely positioned) */}
            <div className="hidden md:block md:col-span-2 relative h-[280px] lg:h-[320px]" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
