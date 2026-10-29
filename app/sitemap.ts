import type { MetadataRoute } from 'next'
import { lastUpdated, type Tool } from '@/data/categories'
import { allCategories } from '@/data/all-categories'
import { reviews } from '@/data/reviews'
import { alternativesUpdated, getAllAlternativePages } from '@/lib/alternatives'
import { freePages, freePagesUpdated } from '@/lib/free-pages'
import { comparePages, comparePagesUpdated } from '@/lib/compare-pages'
const toolsLastModified = new Date('2026-10-29T00:00:00Z')
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

/** A list is "full" when none of its 5 slots is a "Coming soon" placeholder. */
function isFull(tools: Tool[]) {
  return tools.every((tool) => (tool as Tool & { comingSoon?: boolean }).comingSoon !== true)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${lastUpdated}T00:00:00Z`)

  const listPages = allCategories.flatMap((category) => {
    const fullSubs = (category.subcategories ?? []).filter((sub) => isFull(sub.tools))
    const categoryIsReady = category.tools ? isFull(category.tools) : fullSubs.length > 0

    if (!categoryIsReady) return []

    return [
      { url: absoluteUrl(`/${category.slug}`), lastModified, priority: 0.9 },
      ...fullSubs.map((sub) => ({
        url: absoluteUrl(`/${category.slug}/${sub.slug}`),
        lastModified,
        priority: 0.8,
      })),
    ]
  })

  const guidePages = [
    { url: absoluteUrl('/guides'), lastModified: guidesLastModified, priority: 0.7 },
    ...guidePaths.map((path) => ({
      url: absoluteUrl(path),
      lastModified: guidesLastModified,
      priority: 0.7,
    })),
  ]

  const reviewPages = reviews.map((review) => ({
    url: absoluteUrl(`/reviews/${review.toolSlug}`),
    lastModified: new Date(`${review.updated}T00:00:00Z`),
    priority: 0.8,
  }))

  const alternativesModified = new Date(`${alternativesUpdated}T00:00:00Z`)
  const alternativePages = [
    { url: absoluteUrl('/alternatives'), lastModified: alternativesModified, priority: 0.6 },
    ...getAllAlternativePages().map((page) => ({
      url: absoluteUrl(`/alternatives/${page.slug}`),
      lastModified: alternativesModified,
      priority: 0.7,
    })),
  ]

  const freeModified = new Date(`${freePagesUpdated}T00:00:00Z`)
  const freeRoutes = [
    { url: absoluteUrl('/free'), lastModified: freeModified, priority: 0.8 },
    ...freePages.map((page) => ({
      url: absoluteUrl(`/free/${page.slug}`),
      lastModified: freeModified,
      priority: 0.7,
    })),
  ]

  return [
    { url: absoluteUrl('/'), lastModified, priority: 1 },
    ...listPages,
    ...reviewPages,
    ...guidePages,
    ...alternativePages,
    ...freeRoutes,
    { url: absoluteUrl('/compare'), lastModified: new Date(`${comparePagesUpdated}T00:00:00Z`), priority: 0.7 },
...comparePages.map((page) => ({
  url: absoluteUrl(`/compare/${page.slug}`),
  lastModified: new Date(`${comparePagesUpdated}T00:00:00Z`),
  priority: 0.7,
})),
    { url: absoluteUrl('/tools/text-to-speech-duration'), lastModified: toolsLastModified, priority: 0.8 },
    { url: absoluteUrl('/tools/freelance-fee-calculator'), lastModified: toolsLastModified, priority: 0.8 },
    ...staticPages.map((page) => ({ url: absoluteUrl(page.href), lastModified, priority: 0.5 })),
  ]
}
