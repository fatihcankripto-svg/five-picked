import { pageMetadata } from '@/lib/metadata'
import { socialImages } from '@/lib/site'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { SectionMarker } from '@/components/section-marker'
import { comparePages, comparePagesUpdated } from '@/lib/compare-pages'
import { absoluteUrl, formatDate } from '@/lib/site'

const path = '/compare'
const title = 'Head-to-Head Comparisons (2026)'
const description =
  'Side-by-side comparisons of the tools we recommend. See which one wins for your use case, in one page.'

export const metadata: Metadata = pageMetadata({
  title,
  description,
  alternates: { canonical: path },
  openGraph: { images: socialImages, title, description, url: path, type: 'website' },
  twitter: { images: socialImages, title, description },
})

export default function CompareIndexPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url: absoluteUrl(path),
    hasPart: comparePages.map((page) => ({
      '@type': 'Article',
      name: `${page.a.name} vs ${page.b.name}`,
      url: absoluteUrl(`/compare/${page.slug}`),
    })),
  }

  return (
    <div className="mx-auto max-w-4xl px-5 pt-10 sm:px-8 sm:pt-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <Breadcrumbs items={[{ label: 'Comparisons' }]} />

      <header className="mt-10">
        <SectionMarker label="Head-to-head" />
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl">
          Head-to-head comparisons
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Two tools, one page. Each comparison explains which one wins for your use case, so you do
          not have to read two reviews to decide.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated <time dateTime={comparePagesUpdated}>{formatDate(comparePagesUpdated)}</time>
        </p>
      </header>

      <section aria-label="Comparisons" className="mt-12">
        <ul className="grid gap-4 sm:grid-cols-2">
          {comparePages.map((page) => (
            <li key={page.slug}>
              <Link
                href={`/compare/${page.slug}`}
                className="fp-lift block h-full rounded-2xl border border-border bg-card p-5 hover:border-primary/40"
              >
                <h2 className="text-lg font-semibold text-foreground">
                  {page.a.name} vs {page.b.name}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {page.framing}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
