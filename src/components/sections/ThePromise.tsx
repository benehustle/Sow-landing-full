import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function ThePromise() {
  return (
    <section className="relative bg-green-deep py-20">
      {/* Dot pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(31,183,109,0.55) 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-10 items-center">
            {/* Robot: 2× size, flipped; fixed 200px track preserves text column alignment */}
            <div className="hidden md:block relative shrink-0 w-[200px] h-[480px] self-center">
              <Image
                src="/robots/robot-pointing.png"
                alt=""
                width={440}
                height={528}
                aria-hidden="true"
                className="w-[400px] h-auto max-w-none -scale-x-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-white text-green-deep text-xs font-bold px-3.5 py-1.5 rounded-full mb-5 uppercase tracking-widest shadow-md ring-1 ring-white/60">
                <ShieldCheck className="w-4 h-4 shrink-0 text-green-deep" strokeWidth={2.25} aria-hidden="true" />
                The 90-Day Promise
              </div>
              <h2 className="h-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-cream leading-[1.05]">
                <span className="block">Your phone rings within 90 days.</span>
                <span className="block text-green-brand mt-3 md:mt-4">Or we keep working free.</span>
              </h2>
              <p className="mt-5 text-cream/80 text-lg leading-relaxed max-w-xl">
                Most agencies build it, ship it, ghost you. We don&apos;t. From the day you go live, we spend 90 days tuning copy, conversion paths, and local SEO until you&apos;re getting real enquiries from real customers.
              </p>
              <p className="mt-3 text-cream/70 leading-relaxed max-w-xl">
                Day 90 we sit down and talk results. If the phone hasn&apos;t rung, we keep optimising on our dime. Simple as that.
              </p>

              <div className="mt-8 flex flex-col items-start gap-2">
                <Link
                  href="/start"
                  className="inline-flex items-center gap-3 bg-green-brand text-white font-bold px-6 py-3.5 md:px-7 md:py-4 rounded-full hover:bg-white hover:text-green-deep transition-colors whitespace-nowrap text-sm md:text-base"
                >
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <ArrowRight className="w-4 h-4 text-white" aria-hidden="true" />
                  </span>
                  Build My Free Homepage Now
                </Link>
                <p className="text-cream/60 text-sm md:text-base max-w-xl">
                  Free homepage first. $997 total. Free hosting for life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
