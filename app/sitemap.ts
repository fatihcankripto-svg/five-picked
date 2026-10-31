import { flightFreeEditorial } from '@/lib/flight-free-options'
import type { MetadataRoute } from 'next'
import { publishedCategories as allCategories, isCompleteList } from '@/data/all-categories'
import { reviews } from '@/data/reviews'
import { blogPosts } from '@/lib/blog-pages'
import { comparePages, comparePagesUpdated } from '@/lib/compare-pages'
import { freePages, freePagesUpdated } from '@/lib/free-pages'
import { quizPages, quizPagesUpdated } from '@/lib/quiz-pages'
import { alternativesUpdated, getAllAlternativePages } from '@/lib/alternatives'
import { guides } from '@/lib/guides'
import { editorialDates } from '@/lib/editorial-dates'
import { absoluteUrl, staticPages } from '@/lib/site'

export const dynamic = 'force-static'

/** Explicit route families, independent of the related-reading graph. */
export default function sitemap(): MetadataRoute.Sitemap {
  const route = (path: string, lastModified?: string) => ({
    url: absoluteUrl(path),
    ...(lastModified ? { lastModified } : {}),
  })
  const categoryPages = allCategories.flatMap((category) => {
    const subs = (category.subcategories ?? []).filter((sub) => isCompleteList(sub.tools))
    if (category.hidden || (category.tools ? !isCompleteList(category.tools) : subs.length === 0)) return []
    return [route(`/${category.slug}`, editorialDates.categories), ...subs.map((sub) => route(`/${category.slug}/${sub.slug}`, editorialDates.categories))]
  })
  const entries: MetadataRoute.Sitemap = [
    route('/'), route('/categories'),
    ...categoryPages,
    route('/blog'), ...blogPosts.map((post) => route(`/blog/${post.slug}`, post.lastReviewedAt)),
    route('/compare'), ...comparePages.map((page) => route(`/compare/${page.slug}`, comparePagesUpdated)),
    route('/free'), ...freePages.map((page) => route(`/free/${page.slug}`, page.slug === 'best-free-flight-booking-sites' ? flightFreeEditorial.lastReviewedAt : freePagesUpdated)),
    route('/quiz'), ...quizPages.map((page) => route(`/quiz/${page.slug}`, quizPagesUpdated)),
    route('/guides'), ...guides.map((guide) => route(guide.path, guide.path === '/guides/ai-voice-commercial-use' ? editorialDates.commercialVoiceGuide : editorialDates.guides)),
    route('/reviews'), ...reviews.map((review) => route(`/reviews/${review.toolSlug}`, review.updated)),
    route('/alternatives'), ...getAllAlternativePages().map((page) => route(`/alternatives/${page.slug}`, alternativesUpdated)),
    route('/tools'),
    route('/tools/text-to-speech-duration', editorialDates.calculators),
    route('/tools/freelance-fee-calculator', editorialDates.calculators),
    ...staticPages.map((page) => route(page.href)),
  ]
  return [...new Map(entries.map((entry) => [entry.url, entry])).values()]
}
