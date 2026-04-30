"use client";

import { useFunnel } from "./FunnelProvider";

export default function Step2() {
  const { data } = useFunnel();

  return (
    <div className="mx-auto max-w-md w-full">
      <h2 className="h-display text-3xl md:text-4xl text-ink mb-2">
        About Your Business
      </h2>
      <p className="text-ink/60 text-base mb-8">
        Hi {data.firstName ?? "there"}, tell us a bit more so we can nail the brief.
      </p>
      <div className="rounded-2xl border border-ink/10 bg-ink/4 p-8 text-center text-ink/40 text-sm">
        Step 2 coming soon.
      </div>
    </div>
  );
}
