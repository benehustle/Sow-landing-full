import type { MetadataRoute } from "next";
import { cities } from "@/data/cities";
import { services } from "@/data/services";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://spotonweb.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const roots: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/start`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const cityHubs: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE}/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const serviceHubs: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const localPages: MetadataRoute.Sitemap = cities.flatMap((city) =>
    services.map((service) => ({
      url: `${BASE}/${city.slug}/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...roots, ...cityHubs, ...serviceHubs, ...localPages];
}
