import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Tool } from '@/data/categories'
import { ContentPage, contentMetadata } from '@/components/content-page'
import {
  alternativesUpdated,
  formatLongDate,
  formatMonthYear,
  getAllAlternativePages,
  getAlternativePage,
  joinNames,
} from '@/lib/alternatives'
import { absoluteUrl } from '@/lib/site'

export const dynamicParams = false

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getAllAlternativePages().map((page) => ({ slug: page.slug }))
}

function titleFor(name: string) {
  return `${name} Alternatives: 4 Hand-Picked Options (${alternativesUpdated.slice(0, 4)})`
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = getAlternativePage(slug)
  if (!page) return {}

  const names = joinNames(page.alternatives.map((t) => t.name))
  return contentMetadata({
    title: titleFor(page.tool.name),
    description: `Looking for ${page.tool.name} alternatives? Compare ${names}: who each suits, prices and trade-offs. Updated ${formatMonthYear(alternativesUpdated)}.`,
    path: `/alternatives/${page.slug}`,
  })
}

function outbound(tool: Tool) {
  const href = tool.affiliateUrl ?? tool.officialUrl
  const isAffiliate = Boolean(tool.affiliateUrl) || href.includes('awin1.com')
  return {
    href,
    target: '_blank' as const,
    rel: isAffiliate ? 'sponsored noopener noreferrer' : 'noopener noreferrer',
  }
}

export default async function AlternativesPage({ params }: Props) {
  const { slug } = await params
  const page = getAlternativePage(slug)
  if (!page) notFound()

  const { tool, alternatives, faqs, reasons, summary, guides, listName, listPath, rank } = page
  const title = titleFor(tool.name)
  const url = absoluteUrl(`/alternatives/${page.slug}`)
  const withPages = new Set(getAllAlternativePages().map((p) => p.slug))
  const otherPages = getAllAlternativePages().filter((p) => p.slug !== page.slug && p.listPath === page.listPath)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: title,
        datePublished: alternativesUpdated,
        dateModified: alternativesUpdated,
        author: { '@type': 'Organization', name: 'FIVE PICKED', url: 'https://fivepicked.com', ...(page.authorBio ? { description: page.authorBio } : {}) },
        publisher: { '@type': 'Organization', name: 'FIVE PICKED', url: 'https://fivepicked.com' },
        mainEntityOfPage: url,
      },
      {
        '@type': 'ItemList',
        name: `${tool.name} alternatives`,
        itemListElement: alternatives.map((alt, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: alt.name,
          description: alt.tagline,
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  }

  return (
    <ContentPage path={`/alternatives/${page.slug}`}
      eyebrow="Alternatives"
      title={`${tool.name} alternatives`}
      intro={`${tool.name} is ranked #${rank} in our ${listName} list, but it is not right for every job. Here are the other four picks, and when each one makes more sense. Last updated ${formatLongDate(alternativesUpdated)}.`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      {page.authorBio && <p>{page.authorBio} Last reviewed <time dateTime={page.lastReviewedAt}>{formatLongDate(page.lastReviewedAt!)}</time>. Official-source research; no hands-on performance test is claimed.</p>}
      <h2>Why look for a {tool.name} alternative?</h2>
      <p>{summary}</p>
      <p>
        <strong>Consider another tool if:</strong>
      </p>
      <ul>
        {reasons.map((reason) => (
          <li key={reason}>{reason}</li>
        ))}
      </ul>

      <h2>{tool.name} and its alternatives at a glance</h2>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[34rem] text-left text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-3 font-semibold">Tool</th>
              <th className="px-4 py-3 font-semibold">Best for</th>
              <th className="px-4 py-3 font-semibold">Starting price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border bg-card">
              <td className="px-4 py-3 font-medium text-foreground">{tool.name} (this page)</td>
              <td className="px-4 py-3">{tool.bestFor}</td>
              <td className="px-4 py-3">{tool.startingPrice}</td>
            </tr>
            {alternatives.map((alt, i) => (
              <tr key={alt.slug} className={i < alternatives.length - 1 ? 'border-b border-border' : ''}>
                <td className="px-4 py-3 font-medium text-foreground">{alt.name}</td>
                <td className="px-4 py-3">{alt.bestFor}</td>
                <td className="px-4 py-3">{alt.startingPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>{page.sources ? 'Amounts retain the stated currency, billing term and offer conditions. Unverified amounts are not estimated. Confirm the live offer and renewal before purchase.' : 'Prices are approximate and change often, so confirm current details on each official website before you buy.'}</p>
      {page.sources && <p><a {...outbound(tool)}>Visit {tool.name} and check the current offer &#8599;</a></p>}

      <h2>
        The {alternatives.length} best {tool.name} alternatives
      </h2>
      <div className="flex flex-col gap-4">
        {alternatives.map((alt, i) => {
          const out = outbound(alt)
          return (
            <article key={alt.slug} className="rounded-xl border border-border bg-card p-5 fp-lift">
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                {i + 1}. {alt.name}
              </h3>
              <p className="mt-1 text-foreground">{alt.tagline}</p>
              <p className="mt-3">
                <strong>Best for:</strong> {alt.bestFor}
              </p>
              <p className="mt-1">
                <strong>Starting price:</strong> {alt.startingPrice}
              </p>
              <p className="mt-3">{alt.whatItDoes}</p>
              <ul className="mt-3">
                {alt.strengths.map((strength) => (
                  <li key={strength}>{strength}</li>
                ))}
              </ul>
              <p className="mt-3">
                <strong>Good to know:</strong> {alt.goodToKnow}
              </p>
              <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                <a href={out.href} target={out.target} rel={out.rel}>
                  Visit {alt.name} &#8599;
                </a>
                {withPages.has(alt.slug) && (
                  <Link href={`/alternatives/${alt.slug}`}>See {alt.name} alternatives</Link>
                )}
              </p>
            </article>
          )
        })}
      </div>

      {page.sources && <><h2>Official access and pricing sources</h2><ul>{page.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a></li>)}</ul></>}
      <h2>Frequently asked questions</h2>
      {faqs.map((faq) => (
        <div key={faq.question}>
          <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
          <p className="mt-2">{faq.answer}</p>
        </div>
      ))}

      <h2>Keep exploring</h2>
      <ul>
        <li>
          <Link href={listPath}>Our full {listName} top 5</Link>
        </li>
        {guides.map((guide) => (
          <li key={guide.href}>
            <Link href={guide.href}>{guide.label}</Link>
          </li>
        ))}
        {otherPages.map((other) => (
          <li key={other.slug}>
            <Link href={`/alternatives/${other.slug}`}>{other.tool.name} alternatives</Link>
          </li>
        ))}
        <li>
          <Link href="/how-we-choose">How we choose</Link>
        </li>
      </ul>
      <p>
        Some links on this page may earn us a commission, which never changes a ranking. See our{' '}
        <Link href="/affiliate-disclosure">affiliate disclosure</Link>.
      </p>
    </ContentPage>
  )
}
