"use client";

import { useState, useRef, type ChangeEvent } from "react";
import { useFunnel } from "./FunnelProvider";
import { submitToNetlify } from "@/lib/netlifyForm";

const INDUSTRIES = [
  "Plumbing",
  "Electrical",
  "Carpentry",
  "Building",
  "Roofing",
  "Landscaping",
  "Concreting",
  "Painting",
  "Tiling",
  "HVAC",
  "Pest Control",
  "Cleaning",
  "Auto Mechanic",
  "Towing",
  "Locksmith",
  "Other",
];

const inputClass =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3.5 text-ink text-base placeholder:text-ink/35 focus:outline-none focus:border-green-brand transition-colors";

const labelClass = "block text-sm font-bold text-ink mb-1.5";

export default function Step2Onboard() {
  const { data, updateData, setStep } = useFunnel();

  const [industry, setIndustry] = useState("");
  const [services, setServices] = useState("");
  const [serviceArea, setServiceArea] = useState("");
  const [notes, setNotes] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setPhotos(Array.from(e.target.files).slice(0, 5));
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleContinue = () => {
    updateData({
      industry,
      services: services.split(/[\n,]+/).map((s) => s.trim()).filter(Boolean),
      serviceArea,
      notes,
      photoFiles: photos,
    });

    // Capture onboard-branch submission to Netlify Forms (fire-and-forget).
    void submitToNetlify("onboard", {
      firstName: data.firstName,
      businessName: data.businessName,
      phone: data.phone,
      email: data.email,
      industry,
      services,
      serviceArea,
      notes,
    });

    setStep(3);
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Industry */}
      <div>
        <label className={labelClass} htmlFor="industry">
          What industry are you in?
        </label>
        <select
          id="industry"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className={inputClass + " cursor-pointer"}
        >
          <option value="" disabled>
            Select your trade or industry
          </option>
          {INDUSTRIES.map((ind) => (
            <option key={ind} value={ind}>
              {ind}
            </option>
          ))}
        </select>
      </div>

      {/* Services */}
      <div>
        <label className={labelClass} htmlFor="services">
          What do you do?
        </label>
        <textarea
          id="services"
          value={services}
          onChange={(e) => setServices(e.target.value)}
          rows={4}
          placeholder="Just list it like you'd tell a mate. E.g. hot water systems, burst pipes, bathroom renos, drain clearing."
          className={
            inputClass +
            " resize-none leading-relaxed"
          }
        />
      </div>

      {/* Service area */}
      <div>
        <label className={labelClass} htmlFor="serviceArea">
          Where do you work?
        </label>
        <input
          id="serviceArea"
          type="text"
          value={serviceArea}
          onChange={(e) => setServiceArea(e.target.value)}
          placeholder="Suburbs or regions, e.g. Inner West Sydney, all of QLD"
          className={inputClass}
        />
      </div>

      {/* Photos */}
      <div>
        <label className={labelClass}>
          Got any photos of your work?{" "}
          <span className="font-normal text-ink/40">(optional, max 5)</span>
        </label>

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="w-full rounded-xl border-2 border-dashed border-ink/15 bg-white px-4 py-5 text-sm text-ink/50 hover:border-green-brand hover:text-green-brand transition-colors text-center"
        >
          {photos.length === 0
            ? "Click to upload photos"
            : `${photos.length} photo${photos.length > 1 ? "s" : ""} selected; click to change`}
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleFiles}
        />

        {photos.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {photos.map((file, i) => (
              <div key={i} className="relative group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="w-16 h-16 object-cover rounded-lg border border-ink/10"
                />
                <button
                  type="button"
                  onClick={() => removePhoto(i)}
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-accent text-cream rounded-full text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Remove photo"
                >
                  x
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Notes */}
      <div>
        <label className={labelClass} htmlFor="notes">
          Anything else we should know?{" "}
          <span className="font-normal text-ink/40">(optional)</span>
        </label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          placeholder="Style preferences, competitors you like, anything that matters to you."
          className={inputClass + " resize-none"}
        />
      </div>

      <button
        onClick={handleContinue}
        disabled={!industry}
        className="w-full mt-2 bg-green-brand text-cream font-bold text-base rounded-xl py-4 hover:bg-green-deep transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Continue to Booking
      </button>

      {!industry && (
        <p className="text-center text-xs text-ink/40 -mt-3">
          Select your industry to continue
        </p>
      )}
    </div>
  );
}
