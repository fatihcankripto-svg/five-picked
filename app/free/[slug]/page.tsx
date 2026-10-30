import { RelatedContent } from '@/components/related-content'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CalendarDays } from 'lucide-react'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { ComparisonTable } from '@/components/comparison-table'
import { SectionMarker } from '@/components/section-marker'
import { ToolCard } from '@/components/tool-card'
import { freePages, freePagesUpdated, getFreePage } from '@/lib/free-pages'
import { absoluteUrl, formatDate, getOutboundLink } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return freePages.map((page) => ({ slug: page.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = getFreePage(slug)
  if (!page) return {}
  const path = `/free/${page.slug}`
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: path },
    openGraph: { title: page.metaTitle, description: page.metaDescription, url: path, type: 'article' },
    twitter: { title: page.metaTitle, description: page.metaDescription },
  }
}

export default async function FreePage({ params }: Props) {
  const { slug } = await params
  const page = getFreePage(slug)
  if (!page) notFound()

  const path = `/free/${page.slug}`

  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: page.title,
    description: page.metaDescription,
    url: absoluteUrl(path),
    numberOfItems: page.tools.length,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    itemListElement: page.tools.map((tool, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: tool.name,
      description: tool.tagline,
      url: getOutboundLink(tool).href,
    })),
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

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Best free tools', item: absoluteUrl('/free') },
      { '@type': 'ListItem', position: 2, name: page.title, item: absoluteUrl(path) },
    ],
  }

  return (
    <div className="mx-auto max-w-4xl px-5 pt-10 sm:px-8 sm:pt-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd).replace(/</g, '\\u003c') }}
      />

      <Breadcrumbs items={[{ label: 'Best free tools', href: '/free' }, { label: page.title }]} />

      <header className="mt-10">
        <SectionMarker label="Free plans" />
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl">
          {page.h1}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          {page.intro}
        </p>

        <div className="mt-8 flex flex-col gap-3 rounded-xl border border-border px-4 py-3.5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2">
            <CalendarDays aria-hidden="true" className="size-4 text-primary" />
            Last updated{' '}
            <time dateTime={freePagesUpdated} className="text-foreground">
              {formatDate(freePagesUpdated)}
            </time>
          </p>
          <p>
            Some links may earn us a commission.{' '}
            <Link href="/affiliate-disclosure" className="text-foreground underline underline-offset-4 hover:text-primary">
              Learn more
            </Link>
          </p>
        </div>
      </header>

      <section aria-labelledby="verdict" className="mt-12 rounded-2xl border border-primary/30 bg-primary/[0.06] p-6">
        <h2 id="verdict" className="text-sm font-semibold uppercase tracking-widest text-primary">
          Our verdict
        </h2>
        <p className="mt-3 leading-relaxed text-foreground text-pretty">{page.verdict}</p>
      </section>

      <section aria-labelledby="at-a-glance" className="mt-14">
        <h2 id="at-a-glance" className="text-xl font-semibold text-foreground">
          At a glance
        </h2>
        <div className="mt-5">
          <ComparisonTable tools={page.tools} caption={`Free tools compared: ${page.title}`} />
        </div>
      </section>

      <section aria-labelledby="the-picks" className="mt-16">
        <h2 id="the-picks" className="text-xl font-semibold text-foreground">
          The free picks, ranked
        </h2>
        <ol className="mt-6 flex flex-col gap-6">
          {page.tools.map((tool, index) => (
            <li key={tool.slug}>
              <ToolCard tool={tool} rank={index + 1} />
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="faq" className="mt-16">
        <h2 id="faq" className="text-xl font-semibold text-foreground">
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
        Want the full picture? See{' '}
        <Link href={page.relatedListPath} className="text-foreground underline underline-offset-4 hover:text-primary">
          {page.relatedListLabel}
        </Link>{' '}
        — every tool in this category, ranked 1 to 5.{' '}
        <Link href="/free" className="text-foreground underline underline-offset-4 hover:text-primary">
          Browse all free-tool pages
        </Link>
        .
      </aside>
    <RelatedContent path={path} />
    </div>
  )
}
