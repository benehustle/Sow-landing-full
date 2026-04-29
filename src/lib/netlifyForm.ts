// Submit a form to Netlify Forms from a SPA / Next.js client component.
//
// The form definitions live in `public/__forms.html` so Netlify's build-time
// form detector can see them. At runtime we POST directly to "/" with
// `application/x-www-form-urlencoded` content-type and a `form-name` field
// matching the form's `name` attribute.
//
// Fire-and-forget: errors are logged but never thrown, so a Netlify outage
// can never block the user's funnel progression.

type FieldValue = string | number | boolean | null | undefined;
type Fields = Record<string, FieldValue>;

function encode(data: Record<string, string>): string {
  return Object.keys(data)
    .map(
      (k) =>
        encodeURIComponent(k) + "=" + encodeURIComponent(data[k] ?? ""),
    )
    .join("&");
}

export async function submitToNetlify(
  formName: string,
  fields: Fields,
): Promise<void> {
  // Skip in dev / SSR — Netlify Forms only works on a deployed Netlify site.
  if (typeof window === "undefined") return;

  const stringFields: Record<string, string> = { "form-name": formName };
  for (const [k, v] of Object.entries(fields)) {
    if (v === undefined || v === null) continue;
    stringFields[k] = String(v);
  }

  try {
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(stringFields),
    });
  } catch (err) {
    // Never block the funnel on a forms outage.
    console.warn(`[netlify-form:${formName}] submit failed`, err);
  }
}
