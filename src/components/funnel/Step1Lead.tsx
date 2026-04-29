"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useFunnel } from "./FunnelProvider";
import { submitToNetlify } from "@/lib/netlifyForm";

declare global {
  interface Window {
    dataLayer?: object[];
    fbq?: (...args: unknown[]) => void;
  }
}

const schema = z.object({
  firstName: z.string().min(2, "At least 2 characters required"),
  businessName: z.string().min(2, "At least 2 characters required"),
  phone: z.string().refine(
    (v) => /^(\+?61|0)4\d{8}$/.test(v.replace(/\s/g, "")),
    "Enter a valid Australian mobile (e.g. 0412 345 678)"
  ),
  email: z.string().email("Enter a valid email address"),
});

type FormValues = z.infer<typeof schema>;

const inputClass =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3.5 text-ink text-base placeholder:text-ink/35 focus:outline-none focus:border-green-brand transition-colors";

const errorClass = "mt-1.5 text-sm text-red-accent";

export default function Step1Lead() {
  const { data, updateData, submitLead, setStep } = useFunnel();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: data.firstName ?? "",
      businessName: data.businessName ?? "",
      phone: data.phone ?? "",
      email: data.email ?? "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    const phone = values.phone.replace(/\s/g, "");

    updateData({ ...values, phone });

    // Capture the lead to Netlify Forms first (fire-and-forget).
    // This guarantees we keep the lead even if they bail before Step 3.
    void submitToNetlify("lead", {
      firstName: values.firstName,
      businessName: values.businessName,
      phone,
      email: values.email,
      utm_source: data.utm.utm_source,
      utm_medium: data.utm.utm_medium,
      utm_campaign: data.utm.utm_campaign,
      utm_content: data.utm.utm_content,
      utm_term: data.utm.utm_term,
      fbclid: data.utm.fbclid,
      gclid: data.utm.gclid,
      referrer: data.utm.referrer,
      landing_url: data.utm.landing_url,
    });

    await submitLead({
      step: 1,
      firstName: values.firstName,
      businessName: values.businessName,
      phone,
      email: values.email,
      utm: data.utm,
    });

    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({
      event: "lead_step_1",
      firstName: values.firstName,
      businessName: values.businessName,
    });

    window.fbq?.("track", "Lead");

    setStep(2);
  };

  return (
    <div className="mx-auto max-w-md w-full relative">
      <Image
        src="/robots/robot-pointing.png"
        alt=""
        width={120}
        height={144}
        aria-hidden="true"
        className="hidden lg:block absolute top-4 -right-40 w-[120px] h-auto pointer-events-none"
      />
      <h2 className="h-display text-3xl md:text-4xl text-ink mb-2">
        Let&apos;s Get Started
      </h2>
      <p className="text-ink/60 text-base mb-8">
        Two minutes. We&apos;ll build your homepage free. You decide if you want the rest.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
        <div>
          <input
            {...register("firstName")}
            type="text"
            placeholder="First name"
            autoComplete="given-name"
            className={inputClass}
          />
          {errors.firstName && (
            <p className={errorClass}>{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("businessName")}
            type="text"
            placeholder="Business name"
            autoComplete="organization"
            className={inputClass}
          />
          {errors.businessName && (
            <p className={errorClass}>{errors.businessName.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("phone")}
            type="tel"
            placeholder="Mobile (04XX XXX XXX)"
            autoComplete="tel"
            className={inputClass}
          />
          {errors.phone && (
            <p className={errorClass}>{errors.phone.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email address"
            autoComplete="email"
            className={inputClass}
          />
          {errors.email && (
            <p className={errorClass}>{errors.email.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 bg-green-brand text-cream font-bold text-lg rounded-xl py-4 hover:bg-green-deep transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Continue"}
        </button>

        <p className="text-center text-xs text-ink/40">
          Zero deposit. Free homepage preview. $997 total if you proceed.
        </p>
      </form>
    </div>
  );
}
