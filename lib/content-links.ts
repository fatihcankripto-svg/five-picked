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
export function getContentLinks(path: string) {
  const links = graph.get(path)
  return contentLinks.filter((p) => links?.has(p.path)).map((page) => {
    if (path === '/travel/flights' && page.path === '/travel') return { ...page, title: 'Explore our travel planning shortlist' }
    if (path === '/travel/flights' && page.path === '/quiz/travel-flights') return { ...page, title: 'Find a flight booking site for your trip' }
    return page
  })
}
