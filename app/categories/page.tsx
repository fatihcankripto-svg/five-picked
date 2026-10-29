import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { SectionMarker } from '@/components/section-marker'
import { allCategories } from '@/data/all-categories'
import { categoryMeta } from '@/lib/category-stats'
import { absoluteUrl } from '@/lib/site'

const path = '/categories'
const title = 'All categories — FIVE PICKED'
const description =
  'Every FIVE PICKED category in one place. Each one lists exactly 5 hand-picked tools, ranked 1 to 5, with a clear note on who each suits.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, type: 'website' },
  twitter: { title, description },
}

export default function CategoriesHubPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url: absoluteUrl(path),
    hasPart: allCategories.map((category) => ({
      '@type': 'Article',
      name: category.name,
      description: category.description,
      url: absoluteUrl(`/${category.slug}`),
    })),
  }

  return (
    <div className="mx-auto max-w-6xl px-5 pt-10 sm:px-8 sm:pt-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <Breadcrumbs items={[{ label: 'Categories' }]} />

      <header className="mt-10 max-w-3xl">
        <SectionMarker label="All categories" />
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl">
          Every category, in one place
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
          Each category lists exactly 5 hand-picked tools, ranked 1 to 5, with a clear note on who
          each one is best for. Pick a category to see its picks.
        </p>
      </header>

      <section aria-label="All categories" className="mt-12">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {allCategories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/${category.slug}`}
                className="fp-lift group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {categoryMeta(category)}
                </span>
                <h2 className="mt-3 text-xl font-semibold text-foreground group-hover:text-primary">
                  {category.name}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
                <span className="mt-4 text-sm font-medium text-primary">See the 5 picks →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
