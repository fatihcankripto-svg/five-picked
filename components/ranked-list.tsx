import { RelatedContent } from '@/components/related-content'
import Link from 'next/link'
import { CalendarDays } from 'lucide-react'
import { lastUpdated, type Tool } from '@/data/categories'
import { Breadcrumbs, type Crumb } from '@/components/breadcrumbs'
import { ComparisonTable } from '@/components/comparison-table'
import { SectionMarker } from '@/components/section-marker'
import { ToolCard } from '@/components/tool-card'
import { getAllAlternativePages } from '@/lib/alternatives'
import { absoluteUrl, formatDate, getOutboundLink } from '@/lib/site'

export function RankedList({
  eyebrow,
  title,
  intro,
  tools,
  path,
  breadcrumbs,
}: {
  eyebrow: string
  title: string
  intro: string
  tools: Tool[]
  path: string
  breadcrumbs: Crumb[]
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: title,
    description: intro,
    url: absoluteUrl(path),
    numberOfItems: tools.length,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    itemListElement: tools.map((tool, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: tool.name,
      description: tool.tagline,
      url: getOutboundLink(tool).href,
    })),
  }

  // Alternatives pages that exist for tools in this list. Empty list = section hidden.
  const alternativePages = getAllAlternativePages().filter((page) =>
    tools.some((tool) => tool.slug === page.slug),
  )

  return (
    <div className="mx-auto max-w-4xl px-5 pt-10 sm:px-8 sm:pt-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <Breadcrumbs items={breadcrumbs} />

      <header className="mt-10">
        <SectionMarker label={eyebrow} />
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          {intro}
        </p>

        <div className="mt-8 flex flex-col gap-3 rounded-xl border border-border px-4 py-3.5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2">
            <CalendarDays aria-hidden="true" className="size-4 text-primary" />
            Last updated{' '}
            <time dateTime={lastUpdated} className="text-foreground">
              {formatDate(lastUpdated)}
            </time>
          </p>
          <p>
            Some links may earn us a commission at no extra cost to you.{' '}
            <Link
              href="/affiliate-disclosure"
              className="text-foreground underline underline-offset-4 hover:text-primary"
            >
              Learn more
            </Link>
          </p>
        </div>
      </header>

      <nav aria-label="On this page" className="mt-8 rounded-xl border border-border p-5"><p className="text-sm font-semibold">On this page</p><ul className="mt-3 flex flex-wrap gap-x-5 gap-y-3 text-sm"><li><a href="#at-a-glance" className="text-primary underline underline-offset-4">Comparison</a></li>{tools.map((tool) => <li key={tool.slug}><a href={`#${tool.slug}`} className="text-primary underline underline-offset-4">{tool.name}</a></li>)}</ul></nav>
      {path === '/web-hosting-and-domains' && <p className="mt-6 text-sm text-muted-foreground">Want to evaluate a host before committing? <Link href="/free/best-free-web-hosting" className="text-primary underline underline-offset-4">Check hosting free trials and refund conditions</Link>. For a shortlist based on your needs, <Link href="/quiz/web-hosting-and-domains" className="text-primary underline underline-offset-4">take the six-question hosting finder</Link>.</p>}
      {path === '/ai-tools/marketing-and-seo' && <p className="mt-6 text-sm text-muted-foreground">Not sure which workflow to prioritize? <Link href="/quiz/ai-tools-marketing-and-seo" className="text-primary underline underline-offset-4">Find your marketing and SEO tool match</Link>.</p>}
      <section aria-labelledby="at-a-glance" className="mt-14">
        <h2 id="at-a-glance" className="text-xl font-semibold text-foreground">
          The 5 at a glance
        </h2>
        <div className="mt-5">
          <ComparisonTable tools={tools} caption={`Comparison of the 5 picks for ${title}`} />
        </div>
      </section>

      <section aria-labelledby="the-picks" className="mt-16">
        <h2 id="the-picks" className="text-xl font-semibold text-foreground">
          Our 5 picks, ranked
        </h2>
        <ol className="mt-6 flex flex-col gap-6">
          {tools.map((tool, index) => (
            <li key={tool.slug}>
              <ToolCard tool={tool} rank={index + 1} />
            </li>
          ))}
        </ol>
      </section>

      {alternativePages.length > 0 && (
        <section aria-labelledby="alternatives" className="mt-14">
          <h2 id="alternatives" className="text-xl font-semibold text-foreground">
            Not sure about a pick? See the alternatives
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Each page shows the other four tools in this list and explains when each one makes more sense.
          </p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {alternativePages.map((page) => (
              <li key={page.slug}>
                <Link
                  href={`/alternatives/${page.slug}`}
                  className="fp-lift inline-block rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground hover:text-primary"
                >
                  {page.tool.name} alternatives
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <aside className="mt-14 rounded-2xl border border-border p-6 text-sm leading-relaxed text-muted-foreground">
        Rankings reflect our independent judgment of fit, quality and value for most people. Commissions never
        decide the order. Prices and features change, so always check the official website before you buy.{' '}
        <Link href="/how-we-choose" className="text-foreground underline underline-offset-4 hover:text-primary">
          See how we choose
        </Link>
        .
      </aside>
    <RelatedContent path={path} />
    </div>
  )
}
