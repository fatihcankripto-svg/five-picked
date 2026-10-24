import type { MetadataRoute } from 'next'
import { categories, lastUpdated } from '@/data/categories'
import { absoluteUrl, staticPages } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${lastUpdated}T00:00:00Z`)

  const listPages = categories.flatMap((category) => [
    { url: absoluteUrl(`/${category.slug}`), lastModified, priority: 0.9 },
    ...(category.subcategories ?? []).map((sub) => ({
      url: absoluteUrl(`/${category.slug}/${sub.slug}`),
      lastModified,
      priority: 0.8,
    })),
  ])

  return [
    { url: absoluteUrl('/'), lastModified, priority: 1 },
    ...listPages,
    ...staticPages.map((page) => ({ url: absoluteUrl(page.href), lastModified, priority: 0.5 })),
  ]
}
