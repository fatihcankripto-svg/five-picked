import { serializeJsonLd } from '@/lib/json-ld'
import { CategoryMarquee } from '@/components/home/category-marquee'
import { pageMetadata } from '@/lib/metadata'
import { WhyFivePicked } from '@/components/home/why-five-picked'
import { Hero } from '@/components/home/hero'
import { EditorialSections } from '@/components/home/editorial-sections'
import { CategoryGrid } from '@/components/home/category-grid'
import { HowWeChooseStrip } from '@/components/home/how-we-choose-strip'
import { AboutTeaser } from '@/components/home/about-teaser'
import { siteConfig, siteOrganization } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'The 5 Best Tools in Every Category (2026)',
  description: 'Find five carefully selected tools for each published list. Explore comparisons, buying guides and free-plan limits to choose what fits your needs.',
  alternates: { canonical: '/' },
})

export default function HomePage() {
  const jsonLd = [{ '@context': 'https://schema.org', ...siteOrganization }, {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  }]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <Hero />
      <CategoryMarquee />
      <WhyFivePicked />
      <CategoryGrid />
      <EditorialSections />
      <HowWeChooseStrip />
      <AboutTeaser />
    </>
  )
}
