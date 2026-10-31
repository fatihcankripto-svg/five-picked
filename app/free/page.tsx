import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { SectionMarker } from '@/components/section-marker'
import { freePages, freePagesUpdated } from '@/lib/free-pages'
import { absoluteUrl, formatDate } from '@/lib/site'

const path = '/free'
const title = 'Best Free Tools — Free Plans Worth Using (2026)'
const description =
  'Compare free plans, trials and clearly labeled paid options with refund guarantees. Check what is free, what requires payment and which conditions apply.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, type: 'website' },
  twitter: { title, description },
}

export default function FreeIndexPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url: absoluteUrl(path),
    hasPart: freePages.map((page) => ({
      '@type': 'Article',
      name: page.title,
      url: absoluteUrl(`/free/${page.slug}`),
    })),
  }

  return (
    <div className="mx-auto max-w-4xl px-5 pt-10 sm:px-8 sm:pt-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <Breadcrumbs items={[{ label: 'Best free tools' }]} />

      <header className="mt-10">
        <SectionMarker label="Free plans" />
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl">
          Best free tools
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Compare free plans, free trials and clearly labeled paid options with refund guarantees.
          Each guide explains what is free, what requires payment and which conditions apply.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated <time dateTime={freePagesUpdated}>{formatDate(freePagesUpdated)}</time>
        </p>
      </header>

      <section aria-label="Free tool pages" className="mt-12">
        <ul className="grid gap-4 sm:grid-cols-2">
          {freePages.map((page) => (
            <li key={page.slug}>
              <Link
                href={`/free/${page.slug}`}
                className="fp-lift block h-full rounded-2xl border border-border bg-card p-5 hover:border-primary/40"
              >
                <h2 className="text-lg font-semibold text-foreground">{page.title}</h2>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {page.intro}
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-primary">
                  {page.tools.length} {page.slug === 'best-free-online-course-platforms' ? 'platforms: free access & trials' : page.slug === 'best-free-video-and-design-software' ? 'options: free access & trials' : page.slug === 'best-free-web-hosting' ? 'hosting options: trials & refunds' : 'free picks'} →
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
