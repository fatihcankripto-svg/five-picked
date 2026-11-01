import Link from 'next/link'
import { ContentPage, contentMetadata } from '@/components/content-page'
import { editorialIdentity } from '@/lib/editorial-identity'
import { siteConfig } from '@/lib/site'

export const metadata = contentMetadata({
  title: 'Our Editorial Team',
  description: 'Meet the Five Picked Editorial Team and learn how our independent research uses official sources, published data and credited third-party research.',
  path: '/editorial-team',
})

export default function EditorialTeamPage() {
  return (
    <ContentPage path="/editorial-team" eyebrow="Our team" title="Our editorial team" intro="The Five Picked Editorial Team is the collective byline for our independent tool research and buying guides.">
      <h2>Who we are</h2>
      <p><strong>{editorialIdentity.name}</strong> researches tools, prices and access conditions. This is a shared editorial identity, not a named individual or a claim of professional credentials.</p>
      <h2>How we work</h2>
      <p>We use official pricing pages, product documentation, support pages, published data and credited third-party research. We use official sources, published data and credited third-party research rather than our own hands-on tests.</p>
      <p>Read <Link href="/how-we-choose">our editorial methodology</Link> for how we evaluate documented fit and explain limitations.</p>
      <h2>Dates and review records</h2>
      <p>Our guides and reviews display their recorded publication or update dates and a Last reviewed date. These dates describe the editorial record; they do not imply a new product test or price check unless that work is documented.</p>
      <h2>Report an error</h2>
      <p>If a detail is wrong or out of date, visit <Link href="/contact">our contact page</Link> or email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. Include the page address and an official source where possible.</p>
    </ContentPage>
  )
}
