import Link from 'next/link'
import { ContentPage, contentMetadata } from '@/components/content-page'

export const metadata = contentMetadata({
  title: 'Affiliate Disclosure',
  description:
    'FIVE PICKED may earn a commission from some links at no extra cost to you. We never accept payment for placement.',
  path: '/affiliate-disclosure',
})

export default function AffiliateDisclosurePage() {
  return (
    <ContentPage
      eyebrow="Disclosure"
      title="Affiliate disclosure"
      intro="We want to be completely clear about how FIVE PICKED is funded."
    >
      <h2>The short version</h2>
      <ul>
        <li>
          <strong>We may earn a commission</strong> when you click some links on this site and then buy or sign up.
        </li>
        <li>
          <strong>It never changes the price you pay.</strong> Any commission is paid by the company, not by you.
        </li>
        <li>
          <strong>We recommend tools we believe will genuinely help you.</strong> We never accept payment for
          placement.
        </li>
      </ul>

      <h2>Why we use affiliate links</h2>
      <p>
        FIVE PICKED is an independent site. Affiliate partnerships help fund our research and keep the site free to
        read, without subscriptions or intrusive ads. We focus on tools that are genuinely useful to our readers and
        that we are happy to recommend.
      </p>

      <h2>How affiliate links work</h2>
      <p>
        Some companies run affiliate programs. When you follow a link from FIVE PICKED to one of these companies and
        then make a purchase or create a paid account, they may pay us a commission.
      </p>

      <h2>How we label them</h2>
      <p>
        Every &ldquo;Visit website&rdquo; button opens the tool&rsquo;s site in a new tab. Where a link is an
        affiliate link, it is marked as &ldquo;sponsored&rdquo; in the page code, in line with search engine
        guidelines. Some tools we recommend have no affiliate program at all, and we link to them in exactly the same
        way.
      </p>

      <h2>Our promise</h2>
      <p>
        We do not accept payment for placement, sponsored rankings or favorable coverage. Our goal is simple: help you
        find the right tool faster. You can read how we evaluate tools on our{' '}
        <Link href="/how-we-choose">How we choose</Link> page.
      </p>

      <h2>Questions</h2>
      <p>
        If anything here is unclear, please <Link href="/contact">get in touch</Link>. We are happy to explain.
      </p>
    </ContentPage>
  )
}
