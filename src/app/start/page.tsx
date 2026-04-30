import type { Metadata } from "next";
import FunnelProvider from "@/components/funnel/FunnelProvider";
import FunnelShell from "@/components/funnel/FunnelShell";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Build My Free Homepage Now | SPOT ON WEBSITES",
  description: "Tell us about your business and we will build your homepage free. $997 total only if you love it. Free lifetime hosting.",
  alternates: { canonical: `${SITE_URL}/start` },
};

export default function StartPage() {
  return (
    <FunnelProvider>
      <FunnelShell />
    </FunnelProvider>
  );
}
