export const runtime = "edge";

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const bodySchema = z
  .object({
    step: z.union([z.literal(1), z.literal(2), z.literal(3)]).optional(),
    leadId: z.string().optional(),
  })
  .catchall(z.unknown());

async function forwardToWebhook(url: string, payload: unknown): Promise<void> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    console.error(`[lead] webhook ${url} returned ${res.status}`);
  }
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = bodySchema.parse(await req.json());
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  const leadId: string =
    typeof body.leadId === "string" && body.leadId
      ? body.leadId
      : crypto.randomUUID();

  const payload = { ...body, leadId };

  // Forward to GHL contact webhook (fire-and-forget, never fail the user)
  const ghlWebhookUrl = process.env.GHL_WEBHOOK_URL;
  if (ghlWebhookUrl) {
    forwardToWebhook(ghlWebhookUrl, payload).catch((err: unknown) =>
      console.error("[lead] GHL_WEBHOOK_URL failed:", err)
    );
  }

  // For step 3, also forward to booking webhook
  if (body.step === 3) {
    const bookingUrl = process.env.GHL_BOOKING_WEBHOOK_URL;
    if (bookingUrl) {
      forwardToWebhook(bookingUrl, payload).catch((err: unknown) =>
        console.error("[lead] GHL_BOOKING_WEBHOOK_URL failed:", err)
      );
    }
  }

  return NextResponse.json({ ok: true, leadId });
}
