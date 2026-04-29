"use client";

import { useFunnel } from "./FunnelProvider";

export default function Step3() {
  const { data } = useFunnel();

  return (
    <div className="mx-auto max-w-md w-full">
      <h2 className="h-display text-3xl md:text-4xl text-ink mb-2">
        Almost Done
      </h2>
      <p className="text-ink/60 text-base mb-8">
        One last thing, {data.firstName ?? "there"} - and we&apos;ll get your build started.
      </p>
      <div className="rounded-2xl border border-ink/10 bg-ink/4 p-8 text-center text-ink/40 text-sm">
        Step 3 coming soon.
      </div>
    </div>
  );
}
