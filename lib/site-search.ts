/** Shared search logic only; the full content index is loaded on demand. */
export const searchKinds = {
  company: 'Companies', category: 'Categories', blog: 'Blog', review: 'Reviews',
  compare: 'Comparisons', free: 'Free options', quiz: 'Quizzes',
  alternatives: 'Alternatives', guide: 'Guides', tool: 'Tools', page: 'Pages',
} as const
export type SearchKind = keyof typeof searchKinds
export type SearchEntry = { id: string; kind: SearchKind; href: string; title: string; description: string; body: string }
export type PreparedSearchEntry = SearchEntry & { titleKey: string; compactTitle: string; words: Set<string> }

const normalize = (text: string) => text.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()
const stopWords = new Set(['a', 'an', 'and', 'the', 'to', 'of', 'for', 'in', 'on', 'with', 'is', 'it'])

export function pageSearchKind(path: string): SearchKind {
  const prefix = path.split('/')[1]
  const kinds: Record<string, SearchKind> = { blog: 'blog', reviews: 'review', compare: 'compare', free: 'free', quiz: 'quiz', alternatives: 'alternatives', guides: 'guide', tools: 'tool', 'before-you-pay': 'tool' }
  if (kinds[prefix]) return kinds[prefix]
  return ['/', '/about', '/contact', '/privacy', '/how-we-choose', '/editorial-team', '/affiliate-disclosure'].includes(path) ? 'page' : 'category'
}

export function prepareSearch(entries: SearchEntry[]): PreparedSearchEntry[] {
  return entries.map((entry) => {
    if (!entry.href.startsWith('/') || entry.href.startsWith('//') || entry.href.includes('\\') || !(entry.kind in searchKinds)) throw new Error('Invalid internal search entry')
    const titleKey = normalize(entry.title)
    return { ...entry, titleKey, compactTitle: titleKey.replace(/ /g, ''), words: new Set(normalize(`${entry.title} ${entry.description} ${entry.body} ${entry.href}`).split(' ')) }
  })
}

export function searchSite(entries: PreparedSearchEntry[], query: string, kind: SearchKind | 'all' = 'all') {
  const phrase = normalize(query.slice(0, 100))
  const terms = [...new Set(phrase.split(' ').filter((word) => word && !stopWords.has(word)))]
  if (phrase.length < 2 || terms.length === 0) return []
  const compact = phrase.replace(/ /g, '')
  return entries.flatMap((entry) => {
    if (kind !== 'all' && entry.kind !== kind) return []
    if (!terms.every((term) => entry.words.has(term) || entry.compactTitle.includes(term) || (term.length >= 3 && [...entry.words].some((word) => word.startsWith(term))))) return []
    const score = (entry.compactTitle === compact ? 1000 : 0)
      + (entry.titleKey.startsWith(phrase) ? 200 : 0)
      + (entry.titleKey.includes(phrase) ? 100 : 0)
      + terms.reduce((total, term) => total + (entry.titleKey.includes(term) ? 30 : 0), 0)
      + (entry.kind === 'company' ? 5 : 0)
    return [{ entry, score }]
  }).sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title, 'en')).map(({ entry }) => entry)
}
