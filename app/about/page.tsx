import Link from 'next/link'
import { ContentPage, contentMetadata } from '@/components/content-page'
import { editorialIdentity } from '@/lib/editorial-identity'
import { siteConfig } from '@/lib/site'

export const metadata = contentMetadata({
  title: 'About',
  description: 'FIVE PICKED is an independent recommendation site that narrows every category down to the 5 best tools, ranked 1 to 5.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <ContentPage eyebrow="About" title="About FIVE PICKED" intro="Five Picked helps you compare tools through focused five-pick lists, buying guides and price indices.">
      <h2>Who runs Five Picked</h2>
      <p>Five Picked is run by an editorial team focused on tool comparisons, price indices and honest reviews. We do not run our own hands-on tests; we use official pricing pages, published data and third-party sources. Every guide is dated and reviewed.</p>
      <h2>How we choose tools</h2>
      <p>We start with the job you need a tool to do, then compare documented features, pricing, access limits and trade-offs. Each published list contains five picks. Read <Link href="/how-we-choose">our editorial methodology and source policy</Link> to see how we choose and review them.</p>
      <h2>How we make money</h2>
      <p>Some links may earn us a commission at no extra cost to you. We do not accept payment for placement or rankings. Our <Link href="/affiliate-disclosure">affiliate disclosure</Link> explains how these links support the site.</p>
      <h2>Corrections and updates</h2>
      <p>We update when official details change. If you spot an error or an outdated detail, email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. Include the page address and the source you would like us to check.</p>
      <h2 id="editorial-team">Editorial team</h2>
      <p><strong>{editorialIdentity.name}</strong></p>
      <p>{editorialIdentity.bio}</p>
      <p>This is our shared editorial byline. It does not represent a named individual or imply professional credentials.</p>
    </ContentPage>
  )
}
