import { Hero } from '@/components/home/hero'
import { EditorialSections } from '@/components/home/editorial-sections'
import { CategoryGrid } from '@/components/home/category-grid'
import { HowWeChooseStrip } from '@/components/home/how-we-choose-strip'
import { AboutTeaser } from '@/components/home/about-teaser'
import { siteConfig } from '@/lib/site'

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <Hero />
      <CategoryGrid />
      <EditorialSections />
      <HowWeChooseStrip />
      <AboutTeaser />
    </>
  )
}
