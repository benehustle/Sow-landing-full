"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently most visible in the viewport.
 * Returns the id string of the active section, or "" when none match.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observers: IntersectionObserver[] = [];

    // Track ratio per section so we can pick the highest visible one
    const ratios: Record<string, number> = {};
    ids.forEach((id) => (ratios[id] = 0));

    const updateActive = () => {
      let best = "";
      let bestRatio = 0;
      for (const id of ids) {
        if (ratios[id] > bestRatio) {
          bestRatio = ratios[id];
          best = id;
        }
      }
      setActive(best);
    };

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          ratios[id] = entry.intersectionRatio;
          updateActive();
        },
        {
          // Fire as the section crosses these visibility thresholds
          threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
          // Shrink root top/bottom so sections are "active" when near the centre
          rootMargin: "-10% 0px -10% 0px",
        }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}
