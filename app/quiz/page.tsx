import { socialImages } from '@/lib/site'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { SectionMarker } from '@/components/section-marker'
import { quizPages, quizPagesUpdated } from '@/lib/quiz-pages'
import { absoluteUrl, formatDate } from '@/lib/site'

const path = '/quiz'
const title = 'Which Tool Is Right for Me? — 3-Question Quizzes (2026)'
const description =
  'Answer three quick questions and get a tool recommendation from our top 5. Free, no signup, no email.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { images: socialImages, title, description, url: path, type: 'website' },
  twitter: { images: socialImages, title, description },
}

export default function QuizIndexPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url: absoluteUrl(path),
    hasPart: quizPages.map((page) => ({
      '@type': 'Quiz',
      name: page.metaTitle,
      url: absoluteUrl(`/quiz/${page.slug}`),
    })),
  }

  return (
    <div className="mx-auto max-w-4xl px-5 pt-10 sm:px-8 sm:pt-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <Breadcrumbs items={[{ label: 'Quizzes' }]} />

      <header className="mt-10">
        <SectionMarker label="Quick quizzes" />
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl">
          Which tool is right for me?
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Three questions, one recommendation from our top 5. No signup, no email, no tracking —
          the quiz runs in your browser.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated <time dateTime={quizPagesUpdated}>{formatDate(quizPagesUpdated)}</time>
        </p>
      </header>

      <section aria-label="Quizzes" className="mt-12">
        <ul className="grid gap-4 sm:grid-cols-2">
          {quizPages.map((page) => (
            <li key={page.slug}>
              <Link
                href={`/quiz/${page.slug}`}
                className="fp-lift block h-full rounded-2xl border border-border bg-card p-5 hover:border-primary/40"
              >
                <h2 className="text-lg font-semibold text-foreground">{page.metaTitle}</h2>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {page.intro}
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-primary">
                  {page.questions.length} questions →
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
