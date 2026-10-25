import type { MetadataRoute } from 'next'
import { categories, lastUpdated } from '@/data/categories'
import { absoluteUrl, staticPages } from '@/lib/site'

export const dynamic = 'force-static'

const guidesLastModified = new Date('2026-10-25T00:00:00Z')
const guidePaths = [
  '/guides/hostinger-vs-bluehost',
  '/guides/how-to-choose-a-vpn',
  '/guides/best-ai-video-tools-for-beginners',
  '/guides/shared-vs-cloud-vs-managed-wordpress-hosting',
  '/guides/fliki-vs-pictory',
  '/guides/tidio-vs-chatbase',
  '/guides/nordvpn-vs-surfshark',
  '/guides/best-ai-meeting-note-takers',
]

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

  const guidePages = [
    { url: absoluteUrl('/guides'), lastModified: guidesLastModified, priority: 0.7 },
    ...guidePaths.map((path) => ({
      url: absoluteUrl(path),
      lastModified: guidesLastModified,
      priority: 0.7,
    })),
  ]

  return [
    { url: absoluteUrl('/'), lastModified, priority: 1 },
    ...listPages,
    ...guidePages,
    ...staticPages.map((page) => ({ url: absoluteUrl(page.href), lastModified, priority: 0.5 })),
  ]
}
