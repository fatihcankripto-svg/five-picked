import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CalendarDays } from 'lucide-react'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { ComparisonTable } from '@/components/comparison-table'
import { SectionMarker } from '@/components/section-marker'
import { ToolCard } from '@/components/tool-card'
import { freePages, freePagesUpdated, getFreePage } from '@/lib/free-pages'
import { absoluteUrl, formatDate, getOutboundLink } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return freePages.map((page) => ({ slug: page.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = getFreePage(slug)
  if (!page) return {}
  const path = `/free/${page.slug}`
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: path },
    openGraph: { title: page.metaTitle, description: page.metaDescription, url: path, type: 'article' },
    twitter: { title: page.metaTitle, description: page.metaDescription },
  }
}

export default async function FreePage({ params }: Props) {
  const { slug } = await params
  const page = getFreePage(slug)
  if (!page) notFound()

  const path = `/free/${page.slug}`

  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: page.title,
    description: page.metaDescription,
    url: absoluteUrl(path),
    numberOfItems: page.tools.length,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    itemListElement: page.tools.map((tool, i) => ({
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

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Best free tools', item: absoluteUrl('/free') },
      { '@type': 'ListItem', position: 2, name: page.title, item: absoluteUrl(path) },
    ],
  }

  return (
    <div className="mx-auto max-w-
