"use client";

import { useState, useEffect, useRef } from "react";
import { useFunnel } from "./FunnelProvider";

type ScanData = {
  title?: string;
  h1?: string;
  phones: string[];
  emails: string[];
  services: string[];
  logoUrl?: string;
  stack?: string;
  colors: string[];
};

const LOADING_MESSAGES = [
  "Pulling your homepage...",
  "Reading your services...",
  "Spotting what to keep...",
];

const inputClass =
  "flex-1 rounded-xl border border-ink/15 bg-white px-4 py-3.5 text-ink text-base placeholder:text-ink/35 focus:outline-none focus:border-green-brand transition-colors";

export default function Step2Scan() {
  const { data, updateData, setStep } = useFunnel();

  const [url, setUrl] = useState(data.existingUrl ?? "");
  const [isScanning, setIsScanning] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);
  const [scan, setScan] = useState<ScanData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [notes, setNotes] = useState("");

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!isScanning) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setMsgIndex((i) => (i + 1) % LOADING_MESSAGES.length);
    }, 1300);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isScanning]);

  const handleScan = async () => {
    if (!url.trim()) return;
    setIsScanning(true);
    setError(null);
    setScan(null);
    setMsgIndex(0);

    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const json = (await res.json()) as
        | { ok: true; scan: ScanData }
        | { ok: false; error: string };

      if (!json.ok) {
        setError(json.error);
      } else {
        setScan(json.scan);
        updateData({ existingUrl: url });
      }
    } catch {
      setError("Something went wrong. Check the URL and try again.");
    } finally {
      setIsScanning(false);
    }
  };

  const handleContinue = () => {
    updateData({
      scanResult: JSON.stringify(scan),
      notes,
    });
    setStep(3);
  };

  const domain = (() => {
    try {
      const u = url.startsWith("http") ? url : `https://${url}`;
      return new URL(u).hostname.replace(/^www\./, "");
    } catch {
      return url;
    }
  })();

  return (
    <div className="flex flex-col gap-6">
      {/* URL input */}
      <div className="flex gap-2">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleScan()}
          placeholder="yourwebsite.com.au"
          className={inputClass}
          disabled={isScanning}
        />
        <button
          onClick={handleScan}
          disabled={isScanning || !url.trim()}
          className="shrink-0 px-5 py-3 bg-green-brand text-cream font-bold rounded-xl hover:bg-green-deep transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isScanning ? "Scanning..." : "Scan My Site"}
        </button>
      </div>

      {/* Loading state */}
      {isScanning && (
        <div className="flex items-center gap-3 py-4">
          <span className="w-4 h-4 rounded-full border-2 border-green-brand border-t-transparent animate-spin shrink-0" />
          <span
            key={msgIndex}
            className="text-ink/60 text-sm transition-opacity"
          >
            {LOADING_MESSAGES[msgIndex]}
          </span>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="rounded-xl bg-red-accent/10 border border-red-accent/20 px-4 py-3 text-sm text-red-accent">
          {error}
        </div>
      )}

      {/* Scan result card */}
      {scan && (
        <div className="rounded-2xl border border-ink/10 bg-white overflow-hidden">
          {/* Card header */}
          <div className="bg-ink/4 border-b border-ink/8 px-5 py-4 flex items-center gap-3">
            {scan.logoUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={scan.logoUrl}
                alt="site logo"
                className="w-8 h-8 object-contain rounded"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            )}
            <div>
              <p className="font-bold text-ink text-sm">
                Here&apos;s what we pulled from{" "}
                <span className="text-green-brand">{domain}</span>
              </p>
              {scan.title && (
                <p className="text-ink/50 text-xs mt-0.5 truncate max-w-[260px]">
                  {scan.title}
                </p>
              )}
            </div>
          </div>

          <div className="px-5 py-4 flex flex-col gap-4">
            {/* Contact details */}
            {(scan.phones.length > 0 || scan.emails.length > 0) && (
              <div className="flex flex-col gap-1">
                {scan.phones.slice(0, 2).map((p) => (
                  <p key={p} className="text-sm text-ink/70">
                    <span className="font-semibold text-ink">Phone:</span> {p}
                  </p>
                ))}
                {scan.emails.slice(0, 2).map((e) => (
                  <p key={e} className="text-sm text-ink/70 break-all">
                    <span className="font-semibold text-ink">Email:</span> {e}
                  </p>
                ))}
              </div>
            )}

            {/* Services chips */}
            {scan.services.length > 0 && (
              <div>
                <p className="text-xs font-bold text-ink/40 uppercase tracking-wide mb-2">
                  Services we spotted
                </p>
                <div className="flex flex-wrap gap-2">
                  {scan.services.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1 rounded-full bg-green-brand/10 text-green-deep font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Stack badge */}
            {scan.stack && (
              <p className="text-sm text-ink/60">
                <span className="font-semibold text-ink">Currently on:</span>{" "}
                {scan.stack}
              </p>
            )}

            {/* Color swatches */}
            {scan.colors.length > 0 && (
              <div>
                <p className="text-xs font-bold text-ink/40 uppercase tracking-wide mb-2">
                  Brand colors
                </p>
                <div className="flex gap-2">
                  {scan.colors.map((c) => (
                    <div
                      key={c}
                      className="w-6 h-6 rounded-full border border-ink/10 shadow-sm"
                      style={{ backgroundColor: c }}
                      title={c}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Notes + continue */}
      {scan && (
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-bold text-ink mb-1.5">
              Anything we should know?{" "}
              <span className="font-normal text-ink/40">(optional)</span>
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              placeholder="e.g. We want to keep the same colors but modernise the layout."
              className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink text-sm placeholder:text-ink/35 focus:outline-none focus:border-green-brand transition-colors resize-none"
            />
          </div>
          <button
            onClick={handleContinue}
            className="w-full bg-green-brand text-cream font-bold text-base rounded-xl py-4 hover:bg-green-deep transition-colors"
          >
            Continue to Booking
          </button>
        </div>
      )}
    </div>
  );
}
