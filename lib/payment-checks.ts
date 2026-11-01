export const paymentChecks = [
  'I checked the plan, currency and full amount due.',
  'I checked what free access includes and when it ends.',
  'I checked renewal, cancellation and refund terms.',
  'I checked the limits that matter for my work.',
  'I checked the final total on the provider’s website.',
] as const

/** Buying a flight or finding freelance work needs different checks from a subscription. */
export function paymentChecksFor(company: { categories: { slug: string }[] }): readonly string[] {
  if (company.categories.some((c) => c.slug === 'travel')) return [
    'I checked the fare, currency and full amount due.',
    'I checked what search includes and which booking services cost extra.',
    'I checked change, cancellation and refund conditions.',
    'I checked baggage, connections and optional extras.',
    'I checked the final total on the provider’s website.',
  ]
  if (company.categories.some((c) => c.slug === 'freelance-platforms')) return [
    'I checked my account role, fees and the full amount due.',
    'I checked registration, application and proposal costs.',
    'I checked cancellation, payout and refund conditions for my role.',
    'I checked project and withdrawal limits that apply to me.',
    'I checked the final offer on the provider’s website.',
  ]
  return paymentChecks
}

/** Punctuation does not prevent finding tl;dv, monday.com or 99designs. */
export function matchesPaymentCompany(company: {
  name: string
  slug: string
  topics: string[]
  categories: { slug: string; name: string }[]
}, query: string, category: string) {
  const normalize = (value: string) => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '')
  const haystack = normalize([company.name, company.slug, ...company.topics, ...company.categories.map((c) => c.name)].join(' '))
  const terms = query.trim().split(/\s+/).map(normalize).filter(Boolean)
  return (category === 'all' || company.categories.some((c) => c.slug === category))
    && (!query.trim() || (terms.length > 0 && terms.every((term) => haystack.includes(term))))
}
