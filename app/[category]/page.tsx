import { socialImages } from '@/lib/site'
import { RelatedContent } from '@/components/related-content'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allCategories, categoryRegistry } from '@/data/all-categories'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { CategoryCard } from '@/components/category-card'
import { RankedList } from '@/components/ranked-list'
import { SectionMarker } from '@/components/section-marker'
import { getCategory } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return categoryRegistry.map((category) => ({ category: category.slug }))
}

type Props = { params: Promise<{ category: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params
  const category = getCategory(slug)
  if (!category) {
    const hidden = categoryRegistry.find((entry) => entry.slug === slug)
    return hidden ? { title: `${hidden.name}: Selection in progress`, description: `Our ${hidden.name} selection is being researched. Browse our complete recommendations instead.`, robots: { index: false, follow: true }, alternates: { canonical: `/${slug}` } } : {}
  }

  const subCount = category.subcategories?.length ?? 0
  const isHub = subCount > 0
  const title = isHub
    ? `${category.name}: ${subCount} Categories, 5 Picks Each`
    : `${category.name}: The 5 Best Picks`
  const description = isHub
    ? `${category.description} Explore ${subCount} focused categories, each with exactly 5 hand-picked tools.`
    : `${category.description} See our 5 hand-picked tools, ranked 1 to 5.`
  const path = `/${category.slug}`

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { images: socialImages, title, description, url: path, type: 'website' },
    twitter: { images: socialImages, title, description },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params
  const category = getCategory(slug)
  if (!category) {
    const hidden = categoryRegistry.find((entry) => entry.slug === slug)
    if (!hidden) notFound()
    return <div className="mx-auto max-w-3xl px-5 py-16"><h1 className="text-3xl font-semibold">{hidden.name}: selection in progress</h1><p className="mt-5 text-muted-foreground">We publish a list only when all five recommendations are ready.</p><a href="/categories" className="mt-6 inline-block text-primary underline">Browse complete categories</a></div>
  }

  if (category.tools) {
    return (
      <RankedList
        eyebrow="The 5 best"
        title={category.name}
        intro={`${category.description} We compared the options and narrowed them down to five. Each one is ranked, with a clear note on who it suits best.`}
        tools={category.tools}
        path={`/${category.slug}`}
        breadcrumbs={[{ label: category.name }]}
      />
    )
  }

  const subCount = category.subcategories?.length ?? 0

  return (
    <div className="mx-auto max-w-6xl px-5 pt-10 sm:px-8 sm:pt-14">
      <Breadcrumbs items={[{ label: category.name }]} />
      <header className="mt-10 max-w-3xl">
        <SectionMarker label={`${subCount} categories`} />
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl">
          {category.name}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
          {category.description} Pick the area you care about. Each one has exactly five ranked tools.
        </p>
      </header>

      <section aria-label={`${category.name} categories`} className="mt-12">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {category.subcategories?.map((sub) => (
            <li key={sub.slug}>
              <CategoryCard
                href={`/${category.slug}/${sub.slug}`}
                slug={sub.slug}
                name={sub.name}
                description={sub.description}
                meta="5 picks"
                headingLevel="h2"
              />
            </li>
          ))}
        </ul>
      </section>
    <RelatedContent path={`/${category.slug}`} />
    </div>
  )
}
