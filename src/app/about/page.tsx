import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: `About | ${SITE_NAME}`,
  description: "We are an Australian web design team that builds custom coded websites for local businesses. No templates, no monthly fees, no nonsense.",
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="h-display text-4xl md:text-5xl text-ink mb-6">About Spot On Websites</h1>
        <p className="text-ink/70 text-lg leading-relaxed">
          We are an Australian web design team based in Queensland. We build custom coded websites for local businesses who are tired of paying thousands upfront for a site they have never seen. Our model is simple - we build your homepage first at no cost, show it to you before any money changes hands, and charge a flat $997 total only if you love what we built. Free lifetime hosting is included. No monthly fees, no lock-in, no nonsense. Real people, real code, real results.
        </p>
      </div>
    </section>
  );
}
