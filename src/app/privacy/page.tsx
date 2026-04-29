import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: "How Spot On Websites collects, uses and protects your personal information.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="h-display text-4xl md:text-5xl text-ink mb-6">Privacy Policy</h1>
        <p className="text-ink/70 text-lg leading-relaxed">
          We respect your privacy. We only collect the information needed to build and host your website and we never sell your data. Information you submit through onboarding is stored securely and used solely to deliver your project. Contact us anytime to access, update or delete your data.
        </p>
      </div>
    </section>
  );
}
