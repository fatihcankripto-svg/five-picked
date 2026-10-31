import { publishedCategories as allCategories } from '@/data/all-categories'
import { blogPosts } from '@/lib/blog-pages'
import { reviews } from '@/data/reviews'
import { comparePages } from '@/lib/compare-pages'
import { freePages } from '@/lib/free-pages'
import { quizPages } from '@/lib/quiz-pages'
import { getAllAlternativePages } from '@/lib/alternatives'
import { guides } from '@/lib/guides'

export type ContentLink = { path: string; title: string; listPath: string }
const lists: ContentLink[] = allCategories.flatMap((c) => [
  { path: `/${c.slug}`, title: c.name, listPath: `/${c.slug}` },
  ...(c.subcategories ?? []).map((s) => ({ path: `/${c.slug}/${s.slug}`, title: `${c.name}: ${s.name}`, listPath: `/${c.slug}/${s.slug}` })),
])
function toolList(slug: string) {
  for (const c of allCategories) {
    if (c.tools?.some((t) => t.slug === slug)) return `/${c.slug}`
    for (const s of c.subcategories ?? []) if (s.tools.some((t) => t.slug === slug)) return `/${c.slug}/${s.slug}`
  }
  return ''
}
export const contentLinks: ContentLink[] = [
  ...lists, ...guides,
  ...blogPosts.map((p) => ({ path: `/blog/${p.slug}`, title: p.title, listPath: p.relatedListPath })),
  ...reviews.map((p) => ({ path: `/reviews/${p.toolSlug}`, title: p.headline, listPath: toolList(p.toolSlug) })),
  ...comparePages.map((p) => ({ path: `/compare/${p.slug}`, title: `${p.a.name} vs ${p.b.name}`, listPath: p.listPath })),
  ...freePages.map((p) => ({ path: `/free/${p.slug}`, title: p.title, listPath: p.relatedListPath })),
  ...quizPages.map((p) => ({ path: `/quiz/${p.slug}`, title: p.metaTitle, listPath: p.listPath })),
  ...getAllAlternativePages().map((p) => ({ path: `/alternatives/${p.slug}`, title: `${p.tool.name} alternatives`, listPath: p.listPath })),
  { path: '/tools', title: 'Free planning calculators', listPath: '/tools' },
  { path: '/tools/text-to-speech-duration', title: 'Text-to-speech duration calculator', listPath: '/ai-tools/video-and-voice' },
  { path: '/tools/freelance-fee-calculator', title: 'Freelance fee calculator', listPath: '/freelance-platforms' },
]
function relevance(a: ContentLink, b: ContentLink) {
  const tokens = new Set(a.title.toLowerCase().split(/\W+/).filter((w) => w.length > 3))
  const words = b.title.toLowerCase().split(/\W+/).filter((w) => tokens.has(w)).length
  return (a.listPath === b.listPath ? 100 : 0) + (a.listPath.split('/')[1] === b.listPath.split('/')[1] ? 10 : 0) + words
}
function sameTopic(a: ContentLink, b: ContentLink) {
  // The calculator directory may link its calculators across their topics.
  if ((a.path === '/tools' && b.path.startsWith('/tools/')) || (b.path === '/tools' && a.path.startsWith('/tools/'))) return true
  return Boolean(a.listPath && b.listPath) && a.listPath.split('/')[1] === b.listPath.split('/')[1]
}
const graph = new Map<string, Set<string>>(contentLinks.map((p) => [p.path, new Set<string>()]))
for (const page of contentLinks) {
  const related = contentLinks.filter((p) => p.path !== page.path && sameTopic(page, p)).sort((a, b) => relevance(page, b) - relevance(page, a) || a.path.localeCompare(b.path))
  for (const link of related.slice(0, 4)) graph.get(page.path)!.add(link.path)
}
// Seek three distinct referring pages within the topic; never pad a small cluster with unrelated links.
for (const target of contentLinks) {
  let incoming = [...graph.values()].filter((links) => links.has(target.path)).length
  const sources = contentLinks.filter((p) => p.path !== target.path && sameTopic(target, p)).sort((a, b) => relevance(target, b) - relevance(target, a) || graph.get(a.path)!.size - graph.get(b.path)!.size || a.path.localeCompare(b.path))
  for (const source of sources) {
    if (incoming >= 3) break
    const links = graph.get(source.path)!
    if (!links.has(target.path)) { links.add(target.path); incoming++ }
  }
}
// Keep the VPN topic cluster connected across its existing editorial formats.
const vpnPages = contentLinks.filter((page) => page.listPath === '/vpn-and-security')
for (const source of vpnPages) {
  for (const target of vpnPages) {
    if (source.path !== target.path) graph.get(source.path)!.add(target.path)
  }
}
const languageFreePath = '/free/best-free-language-learning-apps'
const languageFreeReferrers: Record<string, string> = {
  '/language-learning': 'Check free language practice and trial limits',
  '/blog/preply-vs-lingoda': 'Explore no-cost language resources before booking lessons',
  '/quiz/language-learning': 'Review free previews before choosing a paid service',
  '/compare/babbel-vs-italki': 'See what language-learning access is genuinely free',
  '/reviews/babbel': 'Compare Babbel’s free lessons with other starter options',
}
for (const source of Object.keys(languageFreeReferrers)) {
  graph.get(source)?.add(languageFreePath)
  graph.get(languageFreePath)?.add(source)
}
const freelanceFreePath = '/free/best-free-freelance-platforms'
const freelanceFreeReferrers: Record<string, string> = {
  '/freelance-platforms': 'Check free account limits and the real cost of freelancing',
  '/quiz/freelance-platforms': 'Review marketplace fees before following your match',
  '/compare/fiverr-vs-upwork': 'Compare free access and payout conditions across five platforms',
  '/tools/freelance-fee-calculator': 'Check the official fee conditions behind your estimate',
}
for (const source of Object.keys(freelanceFreeReferrers)) {
  graph.get(source)?.add(freelanceFreePath)
  graph.get(freelanceFreePath)?.add(source)
}
const freelanceBlogPath = '/blog/real-cost-of-freelancing-2026'
const freelanceBlogReferrers: Record<string, string> = {
  '/freelance-platforms': 'Understand the full cost of finding work and getting paid',
  '/free/best-free-freelance-platforms': 'See how the verified fees affect example invoices',
  '/compare/fiverr-vs-upwork': 'Read the broader analysis of freelance platform costs',
  '/quiz/freelance-platforms': 'Check commission and payout tradeoffs before signing up',
  '/tools/freelance-fee-calculator': 'Understand the assumptions behind take-home calculations',
}
for (const source of Object.keys(freelanceBlogReferrers)) {
  graph.get(source)?.add(freelanceBlogPath)
  graph.get(freelanceBlogPath)?.add(source)
}
const emailBlogPath = '/blog/real-cost-of-email-marketing-2026'
const emailBlogReferrers: Record<string, string> = {
  '/email-marketing': 'Understand email pricing, delivery and feature limits',
  '/free/best-free-email-marketing-tools': 'See how these limits affect newsletters and online shops',
  '/compare/mailerlite-vs-kit': 'Explore the wider cost of email marketing platforms',
  '/quiz/email-marketing': 'Check the cost and delivery assumptions behind your choice',
}
for (const source of Object.keys(emailBlogReferrers)) {
  graph.get(source)?.add(emailBlogPath)
  graph.get(emailBlogPath)?.add(source)
}
const flightFreePath = '/free/best-free-flight-booking-sites'
const flightFreeReferrers: Record<string, string> = {
  '/travel': 'Check what flight search and booking really cost',
  '/travel/flights': 'Compare free search, price alerts and booking fees',
  '/quiz/travel-flights': 'Review cancellation and fee conditions before booking your match',
}
for (const source of Object.keys(flightFreeReferrers)) {
  graph.get(source)?.add(flightFreePath)
  graph.get(flightFreePath)?.add(source)
}
const flightComparePath = '/compare/kiwi-com-vs-trip-com'
const flightCompareReferrers: Record<string, string> = {
  '/travel': 'Choose between Kiwi.com and Trip.com for your journey',
  '/travel/flights': 'Weigh separate-airline routes against fare conditions',
  '/free/best-free-flight-booking-sites': 'Apply these flight fees to a Kiwi.com or Trip.com decision',
  '/quiz/travel-flights': 'Check whether Kiwi.com or Trip.com fits your result',
}
for (const source of Object.keys(flightCompareReferrers)) {
  graph.get(source)?.add(flightComparePath)
  graph.get(flightComparePath)?.add(source)
}
export function getContentLinks(path: string) {
  const links = graph.get(path)
  return contentLinks.filter((p) => links?.has(p.path)).map((page) => {
    if (page.path === flightComparePath && flightCompareReferrers[path]) return { ...page, title: flightCompareReferrers[path] }
    if (path === flightComparePath && page.path === '/travel') return { ...page, title: 'Browse the broader travel planning category' }
    if (path === flightComparePath && page.path === '/travel/flights') return { ...page, title: 'Compare all five shortlisted flight booking sites' }
    if (path === flightComparePath && page.path === flightFreePath) return { ...page, title: 'Read the verified free search and booking fee breakdown' }
    if (path === flightComparePath && page.path === '/quiz/travel-flights') return { ...page, title: 'Match a flight booking site to your priorities' }
    if (page.path === flightFreePath && flightFreeReferrers[path]) return { ...page, title: flightFreeReferrers[path] }
    if (path === flightFreePath && page.path === '/travel') return { ...page, title: 'Explore the wider travel planning category' }
    if (path === flightFreePath && page.path === '/travel/flights') return { ...page, title: 'See our five flight booking sites in context' }
    if (path === flightFreePath && page.path === '/quiz/travel-flights') return { ...page, title: 'Find a booking site for your travel priorities' }
    if (page.path === emailBlogPath && emailBlogReferrers[path]) return { ...page, title: emailBlogReferrers[path] }
    if (page.path === freelanceBlogPath && freelanceBlogReferrers[path]) return { ...page, title: freelanceBlogReferrers[path] }
    if (page.path === freelanceFreePath && freelanceFreeReferrers[path]) return { ...page, title: freelanceFreeReferrers[path] }
    if (page.path === languageFreePath && languageFreeReferrers[path]) return { ...page, title: languageFreeReferrers[path] }
    if (path === '/travel/flights' && page.path === '/travel') return { ...page, title: 'Explore our travel planning shortlist' }
    if (path === '/travel/flights' && page.path === '/quiz/travel-flights') return { ...page, title: 'Find a flight booking site for your trip' }
    return page
  })
}
