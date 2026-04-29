export const runtime = "edge";

import { NextRequest, NextResponse } from "next/server";

type ScanResult = {
  title?: string;
  description?: string;
  h1?: string;
  heroSubcopy?: string;
  phones: string[];
  emails: string[];
  services: string[];
  logoUrl?: string;
  generator?: string;
  stack?: string;
  colors: string[];
};

const SERVICE_PATTERN =
  /\b(repair|install|service|design|build|construct|maintain|replace|clean|inspect|plumb|electr|hvac|roof|pave|concrete|landscape|paint|tile|lock|pest|tow|mechanic|weld|renovate|fit|fix|supply|haul)\w*/i;

const NOISE_EMAIL_DOMAINS = [
  "wixpress.com",
  "squarespace.com",
  "sentry.io",
  "example.com",
  "cloudflare.com",
  "amazonaws.com",
  "schema.org",
  "w3.org",
];

function normaliseUrl(raw: string): string {
  const u = raw.trim();
  if (!u) throw new Error("URL is required");
  const withScheme = /^https?:\/\//i.test(u) ? u : `https://${u}`;
  return new URL(withScheme).toString();
}

function toAbsolute(src: string, base: string): string {
  if (!src) return "";
  try { return new URL(src, base).toString(); } catch { return src; }
}

function dedupe<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

// Pull a single tag's inner text
function getTagText(html: string, tag: string): string {
  const m = html.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i"));
  return m ? m[1].replace(/<[^>]+>/g, " ").trim() : "";
}

// Pull a meta tag's content by name or property
function getMeta(html: string, attr: string, value: string): string {
  // Try both attribute orderings
  const patterns = [
    new RegExp(`<meta[^>]+${attr}=["']${value}["'][^>]+content=["']([^"']+)["']`, "i"),
    new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+${attr}=["']${value}["']`, "i"),
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m) return m[1].trim();
  }
  return "";
}

// Pull all values of a specific attribute across all instances of a tag
function getAllAttrs(html: string, tag: string, attr: string): string[] {
  const results: string[] = [];
  const re = new RegExp(`<${tag}[^>]+${attr}=["']([^"']+)["']`, "gi");
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) results.push(m[1]);
  return results;
}

// Strip all HTML tags → plain text for regex matching
function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
}

function extractHex(text: string): string[] {
  const found: string[] = [];
  const re = /#([0-9a-fA-F]{6})\b/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) found.push("#" + m[1].toUpperCase());
  return found;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { url?: unknown };
    if (typeof body.url !== "string" || !body.url.trim()) {
      return NextResponse.json({ ok: false, error: "url is required" }, { status: 400 });
    }

    let url: string;
    try {
      url = normaliseUrl(body.url);
    } catch {
      return NextResponse.json({ ok: false, error: "Invalid URL" }, { status: 400 });
    }

    // Fetch page with timeout
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);

    let html: string;
    try {
      const res = await fetch(url, {
        signal: controller.signal,
        headers: {
          "User-Agent": "SpotOnWebsitesBot/1.0",
          Accept: "text/html,application/xhtml+xml",
        },
        redirect: "follow",
      });
      clearTimeout(timer);
      if (!res.ok) {
        return NextResponse.json({ ok: false, error: `Site returned ${res.status}` }, { status: 422 });
      }
      html = await res.text();
    } catch (err: unknown) {
      clearTimeout(timer);
      const msg =
        err instanceof Error && err.name === "AbortError"
          ? "Site took too long to respond (8s timeout)"
          : "Could not reach that URL";
      return NextResponse.json({ ok: false, error: msg }, { status: 422 });
    }

    const bodyText = stripTags(html);

    // ------ Core metadata ------
    const title =
      getTagText(html, "title") ||
      getMeta(html, "property", "og:title");

    const description =
      getMeta(html, "name", "description") ||
      getMeta(html, "property", "og:description");

    const h1 = getTagText(html, "h1");

    // Hero subcopy: first <p> after <h1> via simple regex
    const heroSubcopy = (() => {
      const afterH1 = html.match(/<h1[^>]*>[\s\S]*?<\/h1>\s*[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i);
      if (!afterH1) return undefined;
      const text = afterH1[1].replace(/<[^>]+>/g, "").trim();
      return text ? text.substring(0, 200) : undefined;
    })();

    // ------ Contact extraction ------
    const phoneRe = /(\+?61\s?|0)[2-478](?:[ -]?\d){8}/g;
    const rawPhones = bodyText.match(phoneRe) ?? [];
    const phones = dedupe(rawPhones.map((p) => p.replace(/\s/g, "")));

    const emailRe = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const rawEmails = bodyText.match(emailRe) ?? [];
    const emails = dedupe(
      rawEmails.filter((e) => !NOISE_EMAIL_DOMAINS.some((d) => e.toLowerCase().includes(d)))
    );

    // ------ Services: extract h2/h3/a text and filter with pattern ------
    const serviceTexts: string[] = [];
    const tagRe = /<(h2|h3|a)[^>]*>([\s\S]*?)<\/\1>/gi;
    let tm: RegExpExecArray | null;
    while ((tm = tagRe.exec(html)) !== null) {
      const text = tm[2].replace(/<[^>]+>/g, "").trim();
      if (text.length > 3 && text.length < 70 && SERVICE_PATTERN.test(text)) {
        serviceTexts.push(text);
      }
    }
    const services = dedupe(serviceTexts).slice(0, 6);

    // ------ Logo / favicon ------
    let logoUrl = "";
    const imgRe = /<img([^>]+)>/gi;
    let im: RegExpExecArray | null;
    while (!logoUrl && (im = imgRe.exec(html)) !== null) {
      const attrs = im[1];
      if (/logo/i.test(attrs)) {
        const srcM = attrs.match(/src=["']([^"']+)["']/i);
        if (srcM) logoUrl = srcM[1];
      }
    }
    if (!logoUrl) {
      const iconM = html.match(/<link[^>]+rel=["'][^"']*icon[^"']*["'][^>]+href=["']([^"']+)["']/i);
      logoUrl = iconM?.[1] ?? "";
    }
    if (logoUrl) logoUrl = toAbsolute(logoUrl, url);

    // ------ Generator / stack ------
    const generator = getMeta(html, "name", "generator");

    const scriptSrcs = getAllAttrs(html, "script", "src").join(" ");
    const linkHrefs = getAllAttrs(html, "link", "href").join(" ");
    const allSrcs = scriptSrcs + " " + linkHrefs;
    const gen = generator.toLowerCase();

    let stack = "";
    if (/wix\.com|wixstatic/i.test(allSrcs) || gen.includes("wix")) stack = "Wix";
    else if (/squarespace/i.test(allSrcs) || gen.includes("squarespace")) stack = "Squarespace";
    else if (/wp-content|wp-includes/i.test(allSrcs) || gen.includes("wordpress")) stack = "WordPress";
    else if (/cdn\.shopify/i.test(allSrcs)) stack = "Shopify";
    else if (/webflow\.io/i.test(allSrcs)) stack = "Webflow";

    // ------ Colors: inline styles ------
    const hexSet = new Set<string>();
    const styleRe = /style=["']([^"']+)["']/gi;
    let sm: RegExpExecArray | null;
    while ((sm = styleRe.exec(html)) !== null) {
      extractHex(sm[1]).forEach((c) => hexSet.add(c));
    }

    // One external CSS if we need more colors
    if (hexSet.size < 5) {
      const cssHrefM = html.match(/<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/i)
        ?? html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']stylesheet["']/i);
      if (cssHrefM) {
        try {
          const cssUrl = toAbsolute(cssHrefM[1], url);
          const cssCtrl = new AbortController();
          const cssTimer = setTimeout(() => cssCtrl.abort(), 3000);
          const cssRes = await fetch(cssUrl, {
            signal: cssCtrl.signal,
            headers: { "User-Agent": "SpotOnWebsitesBot/1.0" },
          });
          clearTimeout(cssTimer);
          if (cssRes.ok) extractHex(await cssRes.text()).forEach((c) => hexSet.add(c));
        } catch { /* non-fatal */ }
      }
    }

    const colors = [...hexSet]
      .filter((c) => c !== "#FFFFFF" && c !== "#000000")
      .slice(0, 5);

    const scan: ScanResult = {
      title: title || undefined,
      description: description || undefined,
      h1: h1 || undefined,
      heroSubcopy,
      phones,
      emails,
      services,
      logoUrl: logoUrl || undefined,
      generator: generator || undefined,
      stack: stack || undefined,
      colors,
    };

    return NextResponse.json({ ok: true, scan });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unexpected error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
