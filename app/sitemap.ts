import type { MetadataRoute } from "next";
import { siteConfig, legalLastUpdated } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/privacy`,
      lastModified: new Date(legalLastUpdated),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/terms`,
      lastModified: new Date(legalLastUpdated),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
