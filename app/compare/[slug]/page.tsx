import { socialImages } from '@/lib/site'
import { RelatedContent } from '@/components/related-content'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { ComparisonTable } from '@/components/comparison-table'
import { SectionMarker } from '@/components/section-marker'
import { ToolCard } from '@/components/tool-card'
import { comparePages, getComparePage } from '@/lib/compare-pages'
import { absoluteUrl, formatDate, getOutboundLink } from '@/lib/site'

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
    openGraph: { images: socialImages, title, description, url: path, type: 'article' },
    twitter: { images: socialImages, title, description },
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

      {page.lastReviewedAt && <p className="mt-6 text-sm text-muted-foreground">Last reviewed <time dateTime={page.lastReviewedAt}>{formatDate(page.lastReviewedAt)}</time>. {page.authorBio}</p>}

      <section className="mt-10 rounded-2xl border border-primary/30 bg-primary/[0.06] p-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">Verdict</h2>
        <p className="mt-3 leading-relaxed text-foreground text-pretty">{page.verdict}</p>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-foreground">{['capcut-vs-premiere-pro', 'kiwi-com-vs-trip-com', 'semrush-vs-surfer-seo', 'make-vs-n8n', 'pcloud-vs-dropbox', 'skillshare-vs-masterclass', 'monday-com-vs-asana', 'neuronwriter-vs-frase', 'upwork-vs-freelancer-com'].includes(page.slug) ? `Choose ${page.a.name} if…` : `When ${page.a.name} wins`}</h2>
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
          <h2 className="text-xl font-semibold text-foreground">{['capcut-vs-premiere-pro', 'kiwi-com-vs-trip-com', 'semrush-vs-surfer-seo', 'make-vs-n8n', 'pcloud-vs-dropbox', 'skillshare-vs-masterclass', 'monday-com-vs-asana', 'neuronwriter-vs-frase', 'upwork-vs-freelancer-com'].includes(page.slug) ? `Choose ${page.b.name} if…` : `When ${page.b.name} wins`}</h2>
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

      {page.decisionRows && <section className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">{page.slug === 'kiwi-com-vs-trip-com' ? 'Which situation fits your trip?' : 'Which situation fits your work?'}</h2>
        {page.scopeNote && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{page.scopeNote}</p>}
        <div className="mt-5 overflow-x-auto rounded-2xl border border-border bg-card"><table className="w-full min-w-[34rem] text-left text-sm">
          <caption className="sr-only">Decision criteria for {page.a.name} and {page.b.name}</caption>
          <thead><tr className="border-b border-border"><th scope="col" className="px-5 py-3.5">Decision criterion</th><th scope="col" className="px-5 py-3.5">{page.a.name}</th><th scope="col" className="px-5 py-3.5">{page.b.name}</th></tr></thead>
          <tbody>{page.decisionRows.map((row) => <tr key={row.label} className="border-b border-border last:border-0"><th scope="row" className="px-5 py-4 font-medium">{row.label}</th><td className="px-5 py-4 align-top text-muted-foreground">{row.a}</td><td className="px-5 py-4 align-top text-muted-foreground">{row.b}</td></tr>)}</tbody>
        </table></div>
      </section>}
      {page.migration?.map((scenario) => <section key={scenario.title} className="mt-12"><h2 className="text-xl font-semibold text-foreground">{scenario.title}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{scenario.text}</p></section>)}
      {page.sources && <aside className="mt-12 rounded-2xl border border-border p-6 text-sm leading-relaxed"><h2 className="text-xl font-semibold text-foreground">Official sources and conditions</h2><ul className="mt-4 space-y-3">{page.sources.map((source) => <li key={source.url}><a href={source.url} className="text-primary underline underline-offset-4">{source.label}</a></li>)}</ul></aside>}

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
        {page.slug === 'capcut-vs-premiere-pro' ? 'For our ranked alternatives, see ' : 'Both tools appear in '}
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
    {page.relatedLinks && <nav aria-label={page.slug === 'coursera-vs-datacamp' ? 'Related course decisions' : 'Related video decisions'} className="mt-14 rounded-2xl border border-border p-6 text-sm leading-relaxed"><h2 className="text-xl font-semibold text-foreground">Continue your decision</h2><ul className="mt-4 space-y-3">{page.relatedLinks.map((link) => <li key={link.path}><Link href={link.path} className="text-primary underline underline-offset-4">{link.label}</Link></li>)}</ul></nav>}
    <RelatedContent path={path} />
    </div>
  )
}
