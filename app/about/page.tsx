import Link from 'next/link'
import { ContentPage, contentMetadata } from '@/components/content-page'

export const metadata = contentMetadata({
  title: 'About',
  description:
    'FIVE PICKED is an independent recommendation site that narrows every category down to the 5 best tools, ranked 1 to 5.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <ContentPage
      eyebrow="About"
      title="About FIVE PICKED"
      intro="FIVE PICKED is an independent recommendation site with one simple idea: in every category, show only the five tools that are most worth your time."
    >
      <h2>Why we exist</h2>
      <p>
        Choosing software has become exhausting. Search for almost any tool and you will find lists of 15, 25 or 50
        options, many of them padded, outdated or written mainly to collect clicks. More choice rarely makes the
        decision easier.
      </p>
      <p>
        We think a shorter list, chosen carefully and explained honestly, is far more useful. So every category on
        FIVE PICKED has exactly five picks, ranked 1 to 5, with a plain-language note on who each one is best for.
      </p>

      <h2>What we cover</h2>
      <p>
        We focus on the tools people use to work, learn and build online: AI tools, web hosting, VPNs and security,
        online courses, email marketing, creative software, productivity apps, freelance platforms and language
        learning.
      </p>

      <h2>How we stay independent</h2>
      <p>
        We do not accept payment for placement or rankings. Some links on the site may earn us a commission, which
        helps keep FIVE PICKED running, but it never changes what you pay and it does not decide which tools appear
        or how they are ordered. Our <Link href="/how-we-choose">method</Link> and{' '}
        <Link href="/affiliate-disclosure">affiliate disclosure</Link> explain this in detail.
      </p>

      <h2>What you will not find here</h2>
      <ul>
        <li>No invented ratings, scores or review counts.</li>
        <li>No fake testimonials or awards.</li>
        <li>No popups, newsletters or accounts.</li>
      </ul>

      <h2>Get in touch</h2>
      <p>
        We read every message. If you have a suggestion, a correction or a question, please{' '}
        <Link href="/contact">contact us</Link>.
      </p>
    </ContentPage>
  )
}
