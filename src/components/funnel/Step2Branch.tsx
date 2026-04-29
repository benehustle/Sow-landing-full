"use client";

import { useFunnel } from "./FunnelProvider";
import Step2Scan from "./Step2Scan";
import Step2Onboard from "./Step2Onboard";

export default function Step2Branch() {
  const { data, updateData } = useFunnel();

  return (
    <div>
      <h2 className="h-display text-3xl md:text-4xl text-ink mb-2">
        Do you already have a website?
      </h2>
      <p className="text-ink/60 text-base mb-8">
        Either way we&apos;ve got you covered.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-10">
        <button
          onClick={() => updateData({ hasExistingSite: true })}
          className={`rounded-2xl px-4 py-6 font-bold text-base transition-all border-2 ${
            data.hasExistingSite === true
              ? "bg-green-brand text-cream border-green-brand"
              : "bg-white text-ink border-ink/15 hover:border-green-brand"
          }`}
        >
          Yes, I have one
        </button>
        <button
          onClick={() => updateData({ hasExistingSite: false })}
          className={`rounded-2xl px-4 py-6 font-bold text-base transition-all border-2 ${
            data.hasExistingSite === false
              ? "bg-ink text-cream border-ink"
              : "bg-white text-ink border-ink/15 hover:border-ink"
          }`}
        >
          No, starting fresh
        </button>
      </div>

      {data.hasExistingSite === true && <Step2Scan />}
      {data.hasExistingSite === false && <Step2Onboard />}
    </div>
  );
}
