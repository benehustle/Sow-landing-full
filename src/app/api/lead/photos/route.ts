export const runtime = "edge";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // Stub - wire to cloud storage (R2 / S3) in a later phase
  const form = await req.formData();
  const leadId = form.get("leadId");
  const fileKeys = [...form.keys()].filter((k) => k.startsWith("photo_"));
  console.log(`[photos] leadId=${leadId} files=${fileKeys.length}`);
  return NextResponse.json({ ok: true });
}
