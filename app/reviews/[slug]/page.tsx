import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ContentPage, contentMetadata } from '@/components/content-page'
import { VisitButton } from '@/components/visit-button'
import type { Tool } from '@/data/categories'
import { publishedCategories as categories } from '@/data/all-categories'
import { getReview, reviews } from '@/data/reviews'
import { absoluteUrl } from '@/lib/site'

export const dynamicParams = false

type PageProps = { params: Promise<{ slug: string }> }

function findTool(slug: string): { tool: Tool; listName: string; listHref: string } | undefined {
  for (const category of categories) {
    const direct = category.tools?.find((tool) => tool.slug === slug)
    if (direct) {
      return { tool: direct, listName: category.name, listHref: `/${category.slug}` }
    }
    for (const sub of category.subcategories ?? []) {
      const nested = sub.tools.find((tool) => tool.slug === slug)
      if (nested) {
        return {
          tool: nested,
          listName: `${category.name}: ${sub.name}`,
          listHref: `/${category.slug}/${sub.slug}`,
        }
      }
    }
  }
  return undefined
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export function generateStaticParams() {
  return reviews.map((review) => ({ slug: review.toolSlug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const review = getReview(slug)
  if (!review) return {}
  return contentMetadata({
    title: review.title,
    description: review.description,
    path: `/reviews/${review.toolSlug}`,
  })
}

export default async function ReviewPage({ params }: PageProps) {
  const { slug } = await params
  const review = getReview(slug)
  if (!review) notFound()

  const found = findTool(slug)
  const url = absoluteUrl(`/reviews/${review.toolSlug}`)
  const organization = { '@type': 'Organization', name: 'FIVE PICKED', url: 'https://fivepicked.com' }

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: review.headline,
      description: review.description,
      datePublished: review.published,
      dateModified: review.updated,
      author: { ...organization, ...(review.authorBio ? { description: review.authorBio } : {}) },
      publisher: organization,
      mainEntityOfPage: url,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: review.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ]

  const visit = found ? (
    <VisitButton tool={found.tool} />
  ) : (
    <a
      href={review.officialUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground"
    >
      Visit website
    </a>
  )

  return (
    <ContentPage path={`/reviews/${review.toolSlug}`}
      eyebrow="Review"
      title={review.headline}
      intro={`${review.intro} Last updated ${formatDate(review.updated)}.`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {review.authorBio && <p>{review.authorBio} Last reviewed <time dateTime={review.updated}>{formatDate(review.updated)}</time>.</p>}
      <h2>Quick verdict</h2>
      <p>{review.verdict}</p>
      <div className="not-prose mt-4">{visit}</div>

      <h2>{review.name} at a glance</h2>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[28rem] text-left text-sm">
          <tbody>
            <tr className="border-b border-border">
              <td className="px-4 py-3 font-medium">Best for</td>
              <td className="px-4 py-3">{review.audience ?? found?.tool.bestFor ?? review.bestFor[0]}</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-4 py-3 font-medium">Starting price</td>
              <td className="px-4 py-3">{review.startingPrice ?? found?.tool.startingPrice ?? 'See the official website'}</td>
            </tr>
            {found && (
              <tr>
                <td className="px-4 py-3 font-medium">Our top 5</td>
                <td className="px-4 py-3">
                  <Link href={found.listHref}>{found.listName}</Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <p>Prices and features change often, so confirm current details on the official website before you buy.</p>

      <h2>Who {review.name} is best for</h2>
      <ul>
        {review.bestFor.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Who might look elsewhere</h2>
      <ul>
        {review.lessIdealFor.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {review.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}

      <h2>{review.name} alternatives</h2>
      <ul>
        {review.alternatives.map((item) => (
          <li key={item.label}>
            <Link href={item.href}>
              <strong>{item.label}</strong>
            </Link>
            : {item.note}
          </li>
        ))}
      </ul>

      {review.sources && <><h2>Official sources and offer conditions</h2><ul>{review.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a></li>)}</ul></>}
      <h2>Frequently asked questions</h2>
      {review.faqs.map((faq) => (
        <div key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}

      <h2>Keep reading</h2>
      <ul>
        {review.related.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>
              <strong>{item.label}</strong>
            </Link>
            : {item.note}
          </li>
        ))}
      </ul>

      <h2>Ready to try {review.name}?</h2>
      <div className="not-prose mt-2">{visit}</div>
      <p>
        Some links on this page may earn us a commission at no extra cost to you. This helps fund our research and
        keeps the site free to read. See our <Link href="/affiliate-disclosure">affiliate disclosure</Link> and{' '}
        <Link href="/how-we-choose">how we choose</Link>.
      </p>
    </ContentPage>
  )
}
