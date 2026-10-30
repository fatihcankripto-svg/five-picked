import { RelatedContent } from '@/components/related-content'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { ComparisonTable } from '@/components/comparison-table'
import { SectionMarker } from '@/components/section-marker'
import { ToolCard } from '@/components/tool-card'
import { comparePages, getComparePage } from '@/lib/compare-pages'
import { absoluteUrl, getOutboundLink } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return comparePages.map((page) => ({ slug: page.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = getComparePage(slug)
  if (!page) return {}
  const path = `/compare/${page.slug}`
  const title = `${page.a.name} vs ${page.b.name} (2026)`
  const description = `${page.framing} Which one should you pick? Compare features, price and who each is best for.`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: 'article' },
    twitter: { title, description },
  }
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params
  const page = getComparePage(slug)
  if (!page) notFound()

  const path = `/compare/${page.slug}`
  const tools = [page.a, page.b]

  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${page.a.name} vs ${page.b.name}`,
    url: absoluteUrl(path),
    numberOfItems: 2,
    itemListElement: tools.map((tool, i) => ({
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

      <Breadcrumbs
        items={[
          { label: 'Comparisons', href: '/compare' },
          { label: `${page.a.name} vs ${page.b.name}` },
        ]}
      />

      <header className="mt-10">
        <SectionMarker label="Head-to-head" />
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl">
          {page.a.name} vs {page.b.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          {page.framing}
        </p>
      </header>

      <section className="mt-10 rounded-2xl border border-primary/30 bg-primary/[0.06] p-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">Verdict</h2>
        <p className="mt-3 leading-relaxed text-foreground text-pretty">{page.verdict}</p>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-foreground">When {page.a.name} wins</h2>
          <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
            {page.aWinsWhen.map((item) => (
              <li key={item} className="flex gap-2.5">
                <span aria-hidden="true" className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">When {page.b.name} wins</h2>
          <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
            {page.bWinsWhen.map((item) => (
              <li key={item} className="flex gap-2.5">
                <span aria-hidden="true" className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">At a glance</h2>
        <div className="mt-5">
          <ComparisonTable
            tools={tools}
            caption={`Comparison of ${page.a.name} and ${page.b.name}`}
          />
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold text-foreground">The two tools, in full</h2>
        <ol className="mt-6 flex flex-col gap-6">
          {tools.map((tool, i) => (
            <li key={tool.slug}>
              <ToolCard tool={tool} rank={i + 1} />
            </li>
          ))}
        </ol>
      </section>

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
        Both tools appear in{' '}
        <Link
          href={page.listPath}
          className="text-foreground underline underline-offset-4 hover:text-primary"
        >
          {page.listLabel}
        </Link>
        .{' '}
        <Link
          href="/compare"
          className="text-foreground underline underline-offset-4 hover:text-primary"
        >
          See all comparisons
        </Link>
        .
      </aside>
    <RelatedContent path={path} />
    </div>
  )
}
