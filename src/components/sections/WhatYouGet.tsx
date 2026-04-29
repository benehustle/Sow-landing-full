import Image from "next/image";
import { Check } from "lucide-react";

const ITEMS = [
  "Custom coded pages",
  "Mobile responsive",
  "SEO basics done right",
  "Domain connected",
  "Free lifetime hosting",
];

export default function WhatYouGet() {
  return (
    <section id="what-you-get" className="relative bg-cream pt-2 pb-4 overflow-hidden">
      {/* Right-side vertical dot column */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 w-12 h-[70%] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(31,183,109,0.35) 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — Robot image with soft green blob behind */}
          <div className="relative flex justify-center">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-green-brand/10 pointer-events-none"
            />
            <Image
              src="/robots/robot-laptop.png"
              alt=""
              width={500}
              height={500}
              className="relative w-full h-auto max-w-md"
            />
          </div>

          {/* RIGHT — Headline + checklist */}
          <div>
            <h2 className="h-display text-4xl md:text-5xl font-extrabold text-ink leading-tight">
              What You Get for{" "}
              <span className="text-green-brand">$997</span>
            </h2>
            <span
              aria-hidden="true"
              className="block w-12 h-[3px] bg-green-brand rounded-full mt-3 mb-8"
            />

            <ul className="flex flex-col gap-4">
              {ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-deep flex items-center justify-center shrink-0">
                    <Check
                      className="w-3.5 h-3.5 text-white"
                      aria-hidden="true"
                      strokeWidth={3}
                    />
                  </span>
                  <span className="font-bold text-lg text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
