import type { MetadataRoute } from "next"

const siteUrl = "https://esantiye.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/iletisim`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/kvkk`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${siteUrl}/kullanim-kosullari`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ]
}
