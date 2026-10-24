import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { categories } from '@/data/categories'
import { RankedList } from '@/components/ranked-list'
import { getCategory, getSubcategory } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return categories.flatMap((category) =>
    (category.subcategories ?? []).map((sub) => ({
      category: category.slug,
      subcategory: sub.slug,
    })),
  )
}

type Props = { params: Promise<{ category: string; subcategory: string }> }

async function resolve(params: Props['params']) {
  const { category: categorySlug, subcategory: subSlug } = await params
  const category = getCategory(categorySlug)
  const subcategory = category ? getSubcategory(category, subSlug) : undefined
  return { category, subcategory }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, subcategory } = await resolve(params)
  if (!category || !subcategory) return {}

  const title = `${subcategory.name} (${category.name}): The 5 Best Picks`
  const description = `${subcategory.description} See our 5 hand-picked tools, ranked 1 to 5.`
  const path = `/${category.slug}/${subcategory.slug}`

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: 'website' },
    twitter: { title, description },
  }
}

export default async function SubcategoryPage({ params }: Props) {
  const { category, subcategory } = await resolve(params)
  if (!category || !subcategory) notFound()

  return (
    <RankedList
      eyebrow={`${category.name} · The 5 best`}
      title={subcategory.name}
      intro={`${subcategory.description} We compared the options and narrowed them down to five. Each one is ranked, with a clear note on who it suits best.`}
      tools={subcategory.tools}
      path={`/${category.slug}/${subcategory.slug}`}
      breadcrumbs={[
        { label: category.name, href: `/${category.slug}` },
        { label: subcategory.name },
      ]}
    />
  )
}
