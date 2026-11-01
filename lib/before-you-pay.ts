import { publishedCategories } from '@/data/all-categories'
import { verifiedPricing } from '@/data/tool-pricing'
import { courseFreeOptions } from '@/lib/course-free-options'
import { emailFreeOptions } from '@/lib/email-free-options'
import { flightFreeOptions } from '@/lib/flight-free-options'
import { freelanceFreeOptions } from '@/lib/freelance-free-options'
import { hostingOffers, hostingOffersCheckedAt } from '@/lib/hosting-free-options'
import { languageFreeOptions } from '@/lib/language-free-options'
import { marketingSeoFreeOptions } from '@/lib/marketing-seo-free-options'
import { videoDesignFreeOptions } from '@/lib/video-design-free-options'
import { freePages, freePagesUpdated } from '@/lib/free-pages'
import { reviews } from '@/data/reviews'
import { editorialDates } from '@/lib/editorial-dates'
import { getOutboundLink } from '@/lib/site'

export type PaymentSource = { url: string; label: string }
export type PaymentFact = {
  label: string
  paragraphs: string[]
  checkedAt: string | null
  recorded: boolean
}
export type PaymentCompany = {
  slug: string
  name: string
  categories: { slug: string; name: string }[]
  topics: string[]
  description: string
  audience: string
  caution: string
  shortlistUpdatedAt: string
  roleNote: string | null
  price: PaymentFact
  access: PaymentFact
  renewal: PaymentFact
  limits: PaymentFact
  extra: { label: string; paragraphs: string[] }[]
  sources: PaymentSource[]
  guides: { href: string; label: string }[]
  outbound: { href: string; rel: string }
}

type Offer = {
  slug: string
  sources: readonly PaymentSource[]
  access: readonly string[]
  renewal?: readonly string[]
  limits: readonly string[]
  extra?: { label: string; paragraphs: string[] }[]
  checkedAt?: string
}

// Reuse the dated source observations. Never infer a renewal invoice, currency conversion,
// refund entitlement or cancellation procedure from a headline price or a missing value.
const offers: Offer[] = [
  ...hostingOffers.map((o) => ({ slug: o.slug, sources: o.sources, access: [o.plan, o.trial], renewal: [o.refund], limits: [o.subdomain], checkedAt: hostingOffersCheckedAt })),
  ...courseFreeOptions.map((o) => ({ slug: o.slug, sources: o.sources, access: [o.access], renewal: [o.trial], limits: [o.limits, o.certificate], extra: [{ label: 'Account and content rights', paragraphs: [o.rights] }] })),
  ...languageFreeOptions.map((o) => ({ slug: o.slug, sources: o.sources, access: [o.access], renewal: [o.trial], limits: [o.certificate, o.progress] })),
  ...marketingSeoFreeOptions.map((o) => ({ slug: o.slug, sources: o.sources, access: [o.access], renewal: [o.trial], limits: [o.features], extra: [{ label: 'Commercial-use notes', paragraphs: [o.commercial] }] })),
  ...videoDesignFreeOptions.map((o) => ({ slug: o.slug, sources: o.sources, access: [o.access], renewal: o.slug === 'adobe-premiere-pro' ? [o.limits] : o.slug === 'riverside' ? [o.access] : undefined, limits: [o.limits, o.caution], extra: [{ label: 'Commercial-use notes', paragraphs: [o.commercial] }] })),
  ...emailFreeOptions.map((o) => ({ slug: o.slug, sources: o.sources, access: [o.limits], limits: [o.features], extra: [{ label: 'Paid-plan billing notes', paragraphs: [o.paid] }, { label: 'Business-use notes', paragraphs: [o.commercial] }] })),
  ...flightFreeOptions.map((o) => ({ slug: o.slug, sources: o.sources, access: [o.access], renewal: [o.changes], limits: [o.fees] })),
  ...freelanceFreeOptions.map((o) => ({ slug: o.slug, sources: o.sources, access: [o.account, o.trial], limits: [o.commission, o.proposals], extra: [{ label: 'Freelancer payout conditions', paragraphs: [o.payout] }] })),
]

const vpnTerms: Record<string, string> = {
  'nordvpn': 'https://support.nordvpn.com/hc/en-us/articles/19744837091217-Does-NordVPN-have-a-free-trial',
  'surfshark': 'https://support.surfshark.com/hc/en-us/articles/360026123554-Does-Surfshark-offer-a-free-trial',
  'expressvpn': 'https://www.expressvpn.com/features/money-back-guarantee',
  'private-internet-access': 'https://www.privateinternetaccess.com/vpn-features/free-trial-vpn',
}

function fact(label: string, paragraphs: readonly string[] | undefined, checkedAt: string): PaymentFact {
  return { label, paragraphs: [...(paragraphs ?? [])], checkedAt: paragraphs?.length ? checkedAt : null, recorded: Boolean(paragraphs?.length) }
}

export function getPaymentCompanies(): PaymentCompany[] {
  const index = new Map<string, PaymentCompany>()
  for (const category of publishedCategories) {
    const lists = category.tools ? [{ ...category, tools: category.tools }] : category.subcategories ?? []
    for (const list of lists) for (const tool of list.tools) {
      const existing = index.get(tool.slug)
      if (existing) {
        if (!existing.categories.some((c) => c.slug === category.slug)) existing.categories.push({ slug: category.slug, name: category.name })
        if (!existing.topics.includes(list.name)) existing.topics.push(list.name)
        continue
      }
      const price = verifiedPricing[tool.slug]
      if (!price) throw new Error(`Before You Pay: missing dated pricing source for ${tool.slug}`)
      const offer = offers.find((o) => o.slug === tool.slug)
      const checkedAt = offer?.checkedAt ?? freePagesUpdated
      const sources: PaymentSource[] = [{ url: price.sourceUrl, label: 'Recorded price or access offer' }, ...(offer?.sources ?? [])]
      let access = fact('Free access and trials', offer?.access, checkedAt)
      if (!access.recorded && /\b(free|trial)\b/i.test(price.label)) access = fact('Free access and trials', [price.label], price.checkedAt)
      const renewal = fact('Renewal, cancellation and refunds', offer?.renewal, checkedAt)
      const limits = fact('Access and usage limits', offer?.limits, checkedAt)
      if (category.slug === 'travel') {
        access.label = 'Search and alerts before booking'
        renewal.label = 'Changes, cancellation and refunds'
        limits.label = 'Booking fees and extras'
      }
      if (category.slug === 'freelance-platforms') {
        access.label = 'Freelancer-side access'
        limits.label = 'Freelancer-side fees and application limits'
      }
      if (category.slug === 'vpn-and-security') {
        if (tool.slug === 'proton-vpn') {
          access = fact('Free access and trials', ['An ongoing free plan is documented without a data cap.'], freePagesUpdated)
          sources.push({ url: 'https://protonvpn.com/pricing', label: 'Free-plan access and limits' })
        } else if (vpnTerms[tool.slug]) {
          access = fact('Free access and trials', ['Paid VPN access. Trial availability and refund eligibility depend on the purchase channel. A refund offer is not an ongoing free plan.'], freePagesUpdated)
          sources.push({ url: vpnTerms[tool.slug], label: 'Trial and refund conditions' })
        }
      }
      const listPath = category.tools ? `/${category.slug}` : `/${category.slug}/${list.slug}`
      const guides = [{ href: listPath, label: `Our ${list.name} shortlist` }]
      const review = reviews.find((r) => r.toolSlug === tool.slug)
      if (review) guides.push({ href: `/reviews/${tool.slug}`, label: `${tool.name} review` })
      const renewalHeading: Record<string, string> = {
        hostinger: 'Official Premium pricing',
        expressvpn: 'Official pricing: introductory payment and renewal',
      }
      const renewalNote = review?.sections.find((s) => s.heading === renewalHeading[tool.slug])?.paragraphs[0]
      if (renewalNote && review?.sources?.length) {
        renewal.paragraphs.unshift(renewalNote)
        renewal.recorded = true
        renewal.checkedAt = review.updated
        sources.push(...review.sources)
      }
      for (const page of freePages.filter((p) => p.tools.some((t) => t.slug === tool.slug))) guides.push({ href: `/free/${page.slug}`, label: page.h1 })
      index.set(tool.slug, {
        slug: tool.slug, name: tool.name,
        categories: [{ slug: category.slug, name: category.name }], topics: [list.name], description: tool.tagline,
        audience: tool.decisionOverride?.audience ?? tool.bestFor, caution: tool.goodToKnow, shortlistUpdatedAt: editorialDates.categories,
        roleNote: tool.slug === 'toptal'
          ? 'The matching-platform price below is paid by clients who hire. Access, deductions and payout notes describe talent-side conditions; they are not the client’s total hiring cost.'
          : tool.slug === '99designs'
            ? 'The starting project price below is for buyers. Access, fees and payout notes describe the designer side; they are not the same charge.'
            : null,
        price: fact('Recorded price or fee', [price.label], price.checkedAt), access, renewal,
        limits, extra: offer?.extra ?? [],
        sources: [...new Map(sources.map((s) => [s.url, s])).values()], guides, outbound: getOutboundLink(tool),
      })
    }
  }
  return [...index.values()].sort((a, b) => a.name.localeCompare(b.name, 'en'))
}

