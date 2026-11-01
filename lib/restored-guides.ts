import { editorialDates } from '@/lib/editorial-dates'
import { editorialIdentity } from '@/lib/editorial-identity'
import { siteOrganization } from '@/lib/site'

/** Restore the original information URLs instead of redirecting their questions to product lists. */
export const restoredGuides = [
  { path: '/guides/how-to-choose-a-vpn', title: 'How to choose a VPN', listPath: '/vpn-and-security' },
  { path: '/guides/shared-vs-cloud-vs-managed-wordpress-hosting', title: 'Shared vs cloud vs managed WordPress hosting', listPath: '/web-hosting-and-domains' },
] as const

export function guideSchemas(path: string, title: string, faqs: readonly { question: string; answer: string }[]) {
  return [{
    '@context': 'https://schema.org', '@type': 'Article', headline: title,
    datePublished: editorialDates.guidesPublished, dateModified: editorialDates.guides,
    author: { '@type': 'Organization', name: editorialIdentity.name, url: editorialIdentity.url, description: editorialIdentity.bio },
    publisher: siteOrganization, mainEntityOfPage: `https://fivepicked.com${path}`,
  }, {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
  }]
}
