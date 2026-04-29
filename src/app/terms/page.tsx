import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${SITE_NAME}`,
  description: "The terms and conditions for using Spot On Websites services.",
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="h-display text-4xl md:text-5xl text-ink mb-6">Terms &amp; Conditions</h1>
        <p className="text-ink/70 text-lg leading-relaxed">
          These terms govern your use of our services. By engaging Spot On Websites you agree to our build process, payment schedule of $600 on approval and $397 prior to going live, and our free lifetime hosting policy. Full terms will be supplied with your project agreement.
        </p>
      </div>
    </section>
  );
}
