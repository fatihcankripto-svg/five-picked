import { pageMetadata } from '@/lib/metadata'
import { socialImages } from '@/lib/site'
import { RelatedContent } from '@/components/related-content'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { FeeCalculator } from '@/components/fee-calculator'
import { SectionMarker } from '@/components/section-marker'
import { absoluteUrl } from '@/lib/site'

const path = '/tools/freelance-fee-calculator'
const title = 'Fiverr & Upwork Fee Calculator (2026)'
const description =
  'Free Fiverr and Upwork fee calculator. Enter your order amount to estimate what you keep after platform fees — in USD, EUR or GBP.'

export const metadata: Metadata = pageMetadata({
  title,
  description,
  alternates: { canonical: path },
  openGraph: { images: socialImages, title, description, url: path, type: 'website' },
  twitter: { images: socialImages, title, description },
})

const faqs = [
  {
    question: 'How much does Fiverr take from sellers?',
    answer:
      'Fiverr charges a flat 20% seller fee on each completed order. If a buyer pays $100, you keep $80 before any other costs like withdrawal or currency conversion fees.',
  },
  {
    question: 'How much does Upwork take from freelancers?',
    answer:
      'Upwork lists a contract-specific freelancer fee from 0% to 15%. Use the rate shown in your proposal or offer. A 10% example on $100 leaves $90 before other costs.',
  },
  {
    question: 'Does the client also pay a fee on Upwork?',
    answer:
      'Yes. Upwork charges clients a separate marketplace fee on top of your rate. That fee does not affect your net earnings, so this calculator subtracts only the freelancer rate you enter.',
  },
  {
    question: 'Are these fees the same in every country?',
    answer:
      'Your applicable contract and any local taxes, conversion or withdrawal charges affect the total. Check the platform’s official help centre for your country before you rely on these numbers.',
  },
  {
    question: 'Which platform leaves me with more money?',
    answer:
      'Compare the actual contract fee and any extra costs, then consider how each platform fits your service. A lower percentage alone does not guarantee higher earnings.',
  },
]

export default function Page() {
  const webAppLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: title,
    description,
    url: absoluteUrl(path),
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <div className="mx-auto max-w-3xl px-5 pt-10 sm:px-8 sm:pt-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppLd).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, '\\u003c') }}
      />

      <Breadcrumbs
        items={[
          { label: 'Tools', href: '/tools' },
          { label: 'Freelance fee calculator' },
        ]}
      />

      <header className="mt-10">
        <SectionMarker label="Free tool" />
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl">
          Fiverr & Upwork fee calculator
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
          Enter an order amount to estimate earnings before taxes and other charges. Fiverr uses
          a 20% seller fee; enter your Upwork contract percentage (0–15%). Nothing is sent to a server — everything runs in
          your browser.
        </p>
      </header>

      <div className="mt-10">
        <FeeCalculator />
      </div>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          How the fees work
        </h2>
        <div className="mt-4 flex flex-col gap-4 leading-relaxed text-muted-foreground">
          <p>
            Fiverr charges a flat <strong className="text-foreground">20% seller fee</strong> on
            every completed order. There is no sliding scale, so a $50 order costs you $10 and a
            $500 order costs you $100.
          </p>
          <p>
            Upwork lists a <strong className="text-foreground">0–15% contract-specific fee</strong>. The percentage is displayed when you submit a proposal or receive an offer and is fixed for that contract.
          </p>
          <p>
            Neither platform’s fee includes payment processing, currency conversion or withdrawal
            fees. Those vary by country and payment method, so check the platform’s help centre for
            your exact numbers.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Frequently asked questions
        </h2>
        <dl className="mt-6 flex flex-col gap-6">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <dt className="font-semibold text-foreground">{faq.question}</dt>
              <dd className="mt-2 leading-relaxed text-muted-foreground">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <aside className="mt-14 rounded-2xl border border-border p-6 text-sm leading-relaxed text-muted-foreground">
        Choosing where to sell? See{' '}
        <Link
          href="/freelance-platforms"
          className="text-foreground underline underline-offset-4 hover:text-primary"
        >
          our freelance platforms top 5
        </Link>{' '}
        — Fiverr, Upwork and three other options, ranked with notes on who each one suits.
      </aside>
      <p className="mt-6 text-sm text-muted-foreground">Sources checked October 31, 2026: <a className="text-primary underline" href="https://support.upwork.com/hc/en-us/articles/211062538-Learn-about-the-Freelancer-Service-Fee">Upwork freelancer fee</a> and <a className="text-primary underline" href="https://help.fiverr.com/hc/en-us/articles/9234443621137-Your-earnings-page">Fiverr earnings</a>.</p>
      <RelatedContent path={path} />
    </div>
  )
}
