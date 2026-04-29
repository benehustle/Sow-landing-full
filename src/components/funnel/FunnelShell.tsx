"use client";

import { useFunnel } from "./FunnelProvider";
import Step1Lead from "./Step1Lead";
import Step2Branch from "./Step2Branch";
import Step3Book from "./Step3Book";

const STEP_LABELS = ["Your Details", "Your Business", "Confirm"];

function ProgressBar({ step }: { step: 1 | 2 | 3 }) {
  const pct = Math.round((step / 3) * 100);

  return (
    <div className="w-full mb-10">
      <div className="flex justify-between mb-2">
        {STEP_LABELS.map((label, i) => {
          const stepNum = (i + 1) as 1 | 2 | 3;
          const active = stepNum === step;
          const done = stepNum < step;
          return (
            <span
              key={label}
              className={`text-xs font-bold tracking-wide transition-colors ${
                active
                  ? "text-green-brand"
                  : done
                  ? "text-green-deep"
                  : "text-ink/25"
              }`}
            >
              {label}
            </span>
          );
        })}
      </div>
      <div className="h-1.5 w-full rounded-full bg-ink/8 overflow-hidden">
        <div
          className="h-full rounded-full bg-green-brand transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function FunnelShell() {
  const { step } = useFunnel();

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-start px-4 pt-12 pb-20">
        <div className="w-full max-w-md">
          <ProgressBar step={step} />
          {step === 1 && <Step1Lead />}
          {step === 2 && <Step2Branch />}
          {step === 3 && <Step3Book />}
        </div>
      </div>
    </div>
  );
}
