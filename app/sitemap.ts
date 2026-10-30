import type { MetadataRoute } from 'next'
import { contentLinks } from '@/lib/content-links'
import { blogPosts } from '@/lib/blog-pages'
import { reviews } from '@/data/reviews'
import { editorialDates } from '@/lib/editorial-dates'
import { absoluteUrl, staticPages } from '@/lib/site'
export const dynamic = 'force-static'

/** Missing lastmod is preferable to an invented update date. */
function updated(path: string): string | undefined {
  if (path.startsWith('/blog/')) return blogPosts.find((p) => path === `/blog/${p.slug}`)?.updatedAt
  if (path.startsWith('/reviews/')) return reviews.find((p) => path === `/reviews/${p.toolSlug}`)?.updated
  if (path.startsWith('/guides/')) return path.endsWith('/ai-voice-commercial-use') ? editorialDates.commercialVoiceGuide : editorialDates.guides
  if (path.startsWith('/compare/')) return editorialDates.comparisons
  if (path.startsWith('/free/')) return editorialDates.free
  if (path.startsWith('/quiz/')) return editorialDates.quizzes
  if (path.startsWith('/alternatives/')) return editorialDates.alternatives
  if (path.startsWith('/tools/')) return editorialDates.calculators
  return undefined
}
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = new Set(['/', '/categories', '/guides', '/blog', '/reviews', '/compare', '/free', '/quiz', '/alternatives', ...staticPages.map((p) => p.href), ...contentLinks.map((p) => p.path)])
  return [...paths].map((path) => ({ url: absoluteUrl(path), ...(updated(path) ? { lastModified: updated(path) } : {}) }))
}
