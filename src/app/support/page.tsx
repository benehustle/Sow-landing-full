import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: `Support | ${SITE_NAME}`,
  description: "Get help with your Spot On Websites project. Real Aussie support, real fast.",
  alternates: { canonical: `${SITE_URL}/support` },
};

export default function SupportPage() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="h-display text-4xl md:text-5xl text-ink mb-6">Support</h1>
        <p className="text-ink/70 text-lg leading-relaxed">
          Need a hand with your site? We&apos;re a small Aussie team and we answer every message ourselves. Email us, give us a call, or send a message through the contact form on the homepage and we&apos;ll get back to you the same business day.
        </p>
      </div>
    </section>
  );
}
