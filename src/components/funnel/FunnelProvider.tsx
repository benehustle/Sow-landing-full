"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

type UTMData = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
  gclid?: string;
  referrer?: string;
  landing_url?: string;
};

export type FunnelData = {
  firstName?: string;
  businessName?: string;
  phone?: string;
  email?: string;
  hasExistingSite?: boolean | null;
  existingUrl?: string;
  scanResult?: string;
  industry?: string;
  services?: string[];
  serviceArea?: string;
  photos?: string[];
  photoFiles?: File[];
  notes?: string;
  preferredTime?: string;
  utm: UTMData;
};

type FunnelContextType = {
  step: 1 | 2 | 3;
  leadId: string | null;
  data: FunnelData;
  setStep: (step: 1 | 2 | 3) => void;
  updateData: (patch: Partial<FunnelData>) => void;
  submitLead: (payload: object) => Promise<void>;
};

const FunnelContext = createContext<FunnelContextType | null>(null);

export function useFunnel() {
  const ctx = useContext(FunnelContext);
  if (!ctx) throw new Error("useFunnel must be used inside FunnelProvider");
  return ctx;
}

export default function FunnelProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [leadId, setLeadId] = useState<string | null>(null);
  const [data, setData] = useState<FunnelData>({ utm: {} });

  // Parse UTM params on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setData((prev) => ({
      ...prev,
      utm: {
        utm_source: params.get("utm_source") ?? undefined,
        utm_medium: params.get("utm_medium") ?? undefined,
        utm_campaign: params.get("utm_campaign") ?? undefined,
        utm_content: params.get("utm_content") ?? undefined,
        utm_term: params.get("utm_term") ?? undefined,
        fbclid: params.get("fbclid") ?? undefined,
        gclid: params.get("gclid") ?? undefined,
        referrer: document.referrer || undefined,
        landing_url: window.location.href,
      },
    }));
  }, []);

  const updateData = useCallback((patch: Partial<FunnelData>) => {
    setData((prev) => ({ ...prev, ...patch }));
  }, []);

  const submitLead = useCallback(async (payload: object) => {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const json = (await res.json()) as { leadId?: string };
    if (json.leadId) setLeadId(json.leadId);
  }, []);

  return (
    <FunnelContext.Provider
      value={{ step, leadId, data, setStep, updateData, submitLead }}
    >
      {children}
    </FunnelContext.Provider>
  );
}
