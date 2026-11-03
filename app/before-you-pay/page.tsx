import Link from 'next/link'
import { BeforeYouPay } from '@/components/before-you-pay'
import { ContentPage, contentMetadata } from '@/components/content-page'
import { getPaymentCompanies } from '@/lib/before-you-pay'
import { serializeJsonLd } from '@/lib/json-ld'
import { absoluteUrl, siteOrganization } from '@/lib/site'

const path = '/before-you-pay'
const title = 'Before You Pay: Check Tool Costs & Terms'
const description = 'Choose a company and check recorded prices, free-access limits and payment conditions. Use a five-point checklist with dated sources before you pay.'

export const metadata = contentMetadata({ title, description, path })

const faqs = [
  { question: 'Are these live prices?', answer: 'No. Each record shows its source-check date. Prices, plans and eligibility can change. Confirm the currency, amount due and conditions on the provider’s website before paying.' },
  { question: 'What does “Not recorded here” mean?', answer: 'It means the published source records used by this tool do not establish that detail. It does not mean a feature is unavailable, a fee is zero or a refund is guaranteed. Check with the provider.' },
  { question: 'Does completing the checklist verify the company?', answer: 'No. The boxes record your own checks during this visit. FIVE PICKED does not make a purchase, test the service or verify the answers on your behalf. The boxes are not saved or included in a shared link.' },
]

export default function BeforeYouPayPage() {
  const companies = getPaymentCompanies()
  const schemas = [
    {
      '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Before You Pay', description,
      url: absoluteUrl(path), applicationCategory: 'UtilityApplication', operatingSystem: 'Any',
      provider: siteOrganization, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
    },
  ]
  return <ContentPage path={path} eyebrow="A clearer buying decision" title="Check costs and terms before you pay" intro="Choose a company. Check the offer. Know what to confirm before you commit.">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schemas) }} />
    <p>Browse all {companies.length} companies in our published shortlists. Choose one to see its recorded price, access conditions, official sources and your own five-point checklist. No account is needed.</p>
    <p className="rounded-xl border border-border bg-muted/30 p-4 text-sm">These are dated source records, not live quotes. A monthly equivalent can require a longer upfront payment. Plans, currencies, account roles, taxes and purchase channels can change the amount you pay.</p>
    <p className="text-sm">Some visit links may earn us a commission. This does not determine our rankings or verdicts. <Link href="/affiliate-disclosure">Read our affiliate disclosure.</Link></p>
    <h2>Find a company</h2>
    <BeforeYouPay companies={companies.map(({ slug, name, categories, topics }) => ({ slug, name, categories, topics }))} />
    <h2>How to use your five checks</h2>
    <p>Read the record, open the official source and confirm the conditions for your own plan or booking. Tick each box only after you have checked it. Use “Copy company link” to share the company’s record; your ticks stay private to this open page.</p>
    <p>A missing detail is a question to resolve before paying. A refund window is different from free access, and cancelling a renewal does not automatically request money back. If records differ from the offer you see, use the provider’s current checkout terms and <Link href="/contact">tell us about the correction</Link>.</p>
    <h2>Frequently asked questions</h2>
    {faqs.map((faq) => <section key={faq.question}><h3 className="font-semibold text-foreground">{faq.question}</h3><p className="mt-2">{faq.answer}</p></section>)}
    <p>Learn <Link href="/how-we-choose">how we research tools</Link> or meet <Link href="/editorial-team">our editorial team</Link>. We use official sources, published data and credited third-party research rather than our own hands-on tests.</p>
  </ContentPage>
}
