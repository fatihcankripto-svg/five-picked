import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { FeeCalculator } from '@/components/fee-calculator'
import { SectionMarker } from '@/components/section-marker'
import { absoluteUrl } from '@/lib/site'

const path = '/tools/freelance-fee-calculator'
const title = 'Fiverr & Upwork Fee Calculator (2026)'
const description =
  'Free Fiverr and Upwork fee calculator. Enter your order amount to see exactly what you keep after platform fees — in USD, EUR or GBP.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, type: 'website' },
  twitter: { title, description },
}

const faqs = [
  {
    question: 'How much does Fiverr take from sellers?',
    answer:
      'Fiverr charges a flat 20% seller fee on each completed order. If a buyer pays $100, you keep $80 before any other costs like withdrawal or currency conversion fees.',
  },
  {
    question: 'How much does Upwork take from freelancers?',
    answer:
      'Upwork charges a flat 10% freelancer service fee on hourly and fixed-price contracts. On a $100 contract, you keep $90 before withdrawal fees.',
  },
  {
    question: 'Does the client also pay a fee on Upwork?',
    answer:
      'Yes. Upwork charges clients a separate marketplace fee on top of your rate. That fee does not affect your net earnings, so this calculator only subtracts the 10% freelancer fee.',
  },
  {
    question: 'Are these fees the same in every country?',
    answer:
      'The percentage is the same, but some countries add local taxes or withdrawal fees on top. Check the platform’s official help centre for your country before you rely on these numbers.',
  },
  {
    question: 'Which platform leaves me with more money?',
    answer:
      'On the same order amount, Upwork’s 10% fee leaves you with more than Fiverr’s 20% fee. Fiverr offsets this with fixed-price packages and faster discovery, so the better choice depends on how you sell.',
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
          Enter an order amount to see exactly what you keep after platform fees. Uses the current
          flat rates: 20% on Fiverr, 10% on Upwork. Nothing is sent to a server — everything runs in
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
            Upwork charges a flat <strong className="text-foreground">10% freelancer service fee</strong>{' '}
            on both hourly and fixed-price contracts. Upwork previously used a sliding scale based
            on lifetime billings, but that was replaced with a single rate.
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
    </div>
  )
}
