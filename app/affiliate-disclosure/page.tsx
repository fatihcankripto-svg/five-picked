import Link from 'next/link'
import { ContentPage, contentMetadata } from '@/components/content-page'

export const metadata = contentMetadata({
  title: 'Affiliate Disclosure',
  description:
    'FIVE PICKED may earn a commission from some links. This never changes the price you pay and never decides our rankings.',
  path: '/affiliate-disclosure',
})

export default function AffiliateDisclosurePage() {
  return (
    <ContentPage
      eyebrow="Disclosure"
      title="Affiliate disclosure"
      intro="We want to be completely clear about how FIVE PICKED is funded and what that does and does not affect."
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
          <strong>It does not decide our rankings.</strong> Tools are chosen and ordered on fit, quality and value.
        </li>
      </ul>

      <h2>How affiliate links work</h2>
      <p>
        Some companies run affiliate programs. When you follow a link from FIVE PICKED to one of these companies and
        then make a purchase or create a paid account, they may pay us a commission. This is a common way for
        independent sites to cover their costs without charging readers or showing intrusive advertising.
      </p>

      <h2>How we label them</h2>
      <p>
        Every &ldquo;Visit website&rdquo; button opens the tool&rsquo;s site in a new tab. Where a link is an
        affiliate link, it is marked in the page code as sponsored, in line with search engine guidelines. Many tools
        we recommend have no affiliate program at all, and we link to them in exactly the same way.
      </p>

      <h2>What commissions do not influence</h2>
      <p>
        Whether a tool offers a commission, and how much it might pay, plays no part in whether it appears on a list
        or where it ranks. We do not accept payment for placement, sponsored rankings or favorable coverage. If the
        best option for most people has no affiliate program, it still ranks first.
      </p>
      <p>
        You can read exactly how we evaluate tools on our <Link href="/how-we-choose">How we choose</Link> page.
      </p>

      <h2>Questions</h2>
      <p>
        If anything here is unclear, please <Link href="/contact">get in touch</Link>. We are happy to explain.
      </p>
    </ContentPage>
  )
}
