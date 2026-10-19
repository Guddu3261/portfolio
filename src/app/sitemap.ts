import type { MetadataRoute } from "next";
import { getAllNotes } from "@/lib/notes";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/notes`, changeFrequency: "weekly", priority: 0.7 },
    ...getAllNotes().map((n) => ({
      url: `${siteUrl}/notes/${n.slug}`,
      lastModified: n.date,
      priority: 0.5,
    })),
  ];
}
