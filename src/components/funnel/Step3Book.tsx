"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useFunnel } from "./FunnelProvider";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const CALENDAR_URL = process.env.NEXT_PUBLIC_CALENDAR_URL;

// ---------- Success state ----------

function SuccessState({ name }: { name?: string }) {
  return (
    <div className="flex flex-col items-center text-center py-10 gap-6">
      <div className="w-20 h-20 rounded-full bg-green-brand flex items-center justify-center animate-[scale-in_0.35s_cubic-bezier(0.34,1.56,0.64,1)_both]">
        <svg
          viewBox="0 0 40 40"
          width="36"
          height="36"
          fill="none"
          stroke="#FAF7F0"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="8,22 16,30 32,12" />
        </svg>
      </div>
      <div>
        <h2 className="h-display text-3xl text-ink mb-3">
          {name ? `You're locked in, ${name}.` : "You're locked in."}
        </h2>
        <p className="text-ink/60 text-base leading-relaxed max-w-sm">
          You&apos;re locked in. We&apos;ll have your homepage preview ready before the call. If you love it, $600 gets the full build moving and we&apos;re live within 7 days.
        </p>
      </div>
    </div>
  );
}

// ---------- Fallback callback form ----------

function CallbackForm({ onSubmit }: { onSubmit: (time: string) => void }) {
  const [value, setValue] = useState("");
  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-6 flex flex-col gap-4">
      <p className="font-bold text-ink">Prefer we call you?</p>
      <p className="text-sm text-ink/60 -mt-2">
        Tell us a good time and we&apos;ll ring you to book the walkthrough.
      </p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="e.g. Tuesday after 3pm AEST"
        className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3.5 text-ink text-base placeholder:text-ink/35 focus:outline-none focus:border-green-brand transition-colors"
      />
      <button
        onClick={() => onSubmit(value)}
        disabled={!value.trim()}
        className="w-full bg-green-brand text-cream font-bold text-base rounded-xl py-4 hover:bg-green-deep transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Request Callback
      </button>
    </div>
  );
}

// ---------- Main component ----------

export default function Step3Book() {
  const { data, leadId, submitLead, updateData } = useFunnel();
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const submitFinal = useCallback(async () => {
    if (submitting || success) return;
    setSubmitting(true);

    try {
      // Build serialisable payload - exclude File objects
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { photoFiles: _pf, ...serializableData } = data;

      await submitLead({ step: 3, leadId, ...serializableData });

      // Upload photos if any
      if (data.photoFiles?.length) {
        const form = new FormData();
        form.append("leadId", leadId ?? "");
        data.photoFiles.forEach((f, i) => form.append(`photo_${i}`, f));
        await fetch("/api/lead/photos", { method: "POST", body: form });
      }

      // Tracking
      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push({ event: "lead_complete" });
      window.fbq?.("track", "Schedule");

      setSuccess(true);
    } catch (err: unknown) {
      console.error("[Step3Book] submitFinal error:", err);
      setSubmitting(false);
    }
  }, [data, leadId, submitLead, submitting, success]);

  // Keep a ref to the latest submitFinal so the postMessage handler never goes stale
  const submitFinalRef = useRef(submitFinal);
  useEffect(() => {
    submitFinalRef.current = submitFinal;
  }, [submitFinal]);

  // Listen for calendar booking events
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      const d = e.data as { type?: string; event?: string } | null;
      if (!d) return;
      if (
        d.type === "calendly.event_scheduled" ||
        d.event === "appointment_booked"
      ) {
        void submitFinalRef.current();
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  if (success) {
    return <SuccessState name={data.firstName} />;
  }

  const handleCallbackSubmit = (time: string) => {
    updateData({ preferredTime: time });
    void submitFinal();
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="h-display text-3xl md:text-4xl text-ink mb-2">
          Pick a Time. We&apos;ll Show You The Build.
        </h2>
        <p className="text-ink/60 text-base">
          15 minutes. We&apos;ll show you the homepage we built. Zero pressure.
        </p>
      </div>

      {CALENDAR_URL ? (
        <iframe
          src={CALENDAR_URL}
          width="100%"
          height="600"
          frameBorder="0"
          title="Book a call"
          className="rounded-2xl border border-ink/10 bg-white"
          allow="payment"
        />
      ) : (
        <CallbackForm onSubmit={handleCallbackSubmit} />
      )}

      {submitting && !success && (
        <div className="flex items-center justify-center gap-3 py-4 text-ink/50 text-sm">
          <span className="w-4 h-4 rounded-full border-2 border-green-brand border-t-transparent animate-spin shrink-0" />
          Saving your details...
        </div>
      )}
    </div>
  );
}
