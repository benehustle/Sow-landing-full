"use client";

import Image from "next/image";
import Script from "next/script";
import { motion } from "framer-motion";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useFunnel } from "./FunnelProvider";
import BouncingRobot from "@/components/ui/BouncingRobot";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const CALENDAR_URL =
  process.env.NEXT_PUBLIC_CALENDAR_URL ??
  "https://crm.spotonwebsites.com.au/widget/booking/ZdjWTrTNfzLGUSFGSH0O";
const CALENDAR_EMBED_SCRIPT =
  "https://crm.spotonwebsites.com.au/js/form_embed.js";

// ---------- Success state ----------

function SuccessState({ name }: { name?: string }) {
  return (
    <div className="flex flex-col items-center text-center py-10 gap-6">
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 0.6 }}
      >
        <Image
          src="/robots/robot-pointing.png"
          alt="Spot On Websites mascot"
          width={200}
          height={240}
        />
      </motion.div>
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

  // Pre-fill calendar with lead details where supported
  const calendarSrc = useMemo(() => {
    if (!CALENDAR_URL) return "";
    try {
      const url = new URL(CALENDAR_URL);
      if (data.firstName) url.searchParams.set("first_name", data.firstName);
      if (data.email) url.searchParams.set("email", data.email);
      if (data.phone) url.searchParams.set("phone", data.phone);
      return url.toString();
    } catch {
      return CALENDAR_URL;
    }
  }, [data.firstName, data.email, data.phone]);

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
        <>
          {/* Styled card around the GHL booking widget */}
          <div className="relative rounded-2xl border border-ink/10 bg-white shadow-sm overflow-hidden">
            {/* Top accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-green-brand via-green-brand to-green-deep" />

            <div className="p-2 sm:p-3">
              <iframe
                src={calendarSrc}
                id="ZdjWTrTNfzLGUSFGSH0O_embed"
                title="Book your homepage walkthrough"
                scrolling="no"
                className="w-full block rounded-xl bg-white"
                style={{ border: "none", overflow: "hidden", minHeight: 720 }}
                allow="payment"
              />
            </div>

            {/* Footer trust strip */}
            <div className="border-t border-ink/8 bg-cream/60 px-5 py-3 flex flex-wrap items-center justify-between gap-2 text-xs text-ink/55">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-brand" />
                15-minute walkthrough
              </span>
              <span>Zero pressure. Reschedule any time.</span>
            </div>
          </div>

          {/* Auto-resize script from GHL */}
          <Script src={CALENDAR_EMBED_SCRIPT} strategy="afterInteractive" />
        </>
      ) : (
        <CallbackForm onSubmit={handleCallbackSubmit} />
      )}

      {submitting && !success && (
        <div className="flex items-center justify-center gap-3 py-4 text-ink/50 text-sm">
          <BouncingRobot size={48} />
          Saving your details...
        </div>
      )}
    </div>
  );
}
