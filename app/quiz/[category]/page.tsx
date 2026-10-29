import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { SectionMarker } from '@/components/section-marker'
import { getQuizPage, quizPages } from '@/lib/quiz-pages'
import { absoluteUrl } from '@/lib/site'
import { QuizClient } from './quiz-client'

export const dynamicParams = false

export function generateStaticParams() {
  return quizPages.map((page) => ({ category: page.slug }))
}

type Props = { params: Promise<{ category: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const page = getQuizPage(category)
  if (!page) return {}
  const path = `/quiz/${page.slug}`
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: path },
    openGraph: { title: page.metaTitle, description: page.metaDescription, url: path, type: 'website' },
    twitter: { title: page.metaTitle, description: page.metaDescription },
  }
}

export default async function QuizPage({ params }: Props) {
  const { category } = await params
  const page = getQuizPage(category)
  if (!page) notFound()

  const path = `/quiz/${page.slug}`

  const webAppLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: page.metaTitle,
    description: page.metaDescription,
    url: absoluteUrl(path),
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
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
          { label: 'Quizzes', href: '/quiz' },
          { label: page.metaTitle },
        ]}
      />

      <header className="mt-10">
        <SectionMarker label="Quiz" />
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl">
          {page.metaTitle.replace(/\s*\(2026 Quiz\)\s*$/, '')}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
          {page.intro}
        </p>
      </header>

      <div className="mt-10">
        <QuizClient
          questions={page.questions}
          tools={page.tools}
          tieBreak={page.tieBreak}
          listPath={page.listPath}
          listLabel={page.listLabel}
        />
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Frequently asked questions
        </h2>
        <dl className="mt-6 flex flex-col gap-6">
          {page.faqs.map((faq) => (
            <div key={faq.question}>
              <dt className="font-semibold text-foreground">{faq.question}</dt>
              <dd className="mt-2 leading-relaxed text-muted-foreground">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <aside className="mt-14 rounded-2xl border border-border p-6 text-sm leading-relaxed text-muted-foreground">
        Prefer to see the full list?{' '}
        <Link
          href={page.listPath}
          className="text-foreground underline underline-offset-4 hover:text-primary"
        >
          {page.listLabel}
        </Link>
        . Or{' '}
        <Link href="/quiz" className="text-foreground underline underline-offset-4 hover:text-primary">
          take another quiz
        </Link>
        .
      </aside>
    </div>
  )
}
