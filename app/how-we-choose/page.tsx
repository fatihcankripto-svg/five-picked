import Link from 'next/link'
import { ContentPage, contentMetadata } from '@/components/content-page'

export const metadata = contentMetadata({
  title: 'How We Choose',
  description:
    'How FIVE PICKED researches, compares and ranks tools, and why every list has exactly five picks.',
  path: '/how-we-choose',
})

export default function HowWeChoosePage() {
  return (
    <ContentPage
      eyebrow="Our method"
      title="How we choose"
      intro="Every list on FIVE PICKED has exactly five tools, ranked 1 to 5. Here is how we get from a crowded market to a short list we are comfortable putting our name on."
    >
      <h2>Methodology</h2>
      <p>Our comparisons use official sources, published data and credited third-party research. We do not run our own hands-on product tests. A buying recommendation is an editorial judgment about documented fit, not a measured performance result.</p>

      <h2>1. We start with what people actually need</h2>
      <p>
        Before we compare anything, we define the job a tool is supposed to do and who is likely to be doing it. A
        freelancer setting up a first website has different needs from a growing team. Being clear about this keeps
        our picks grounded in real use rather than feature checklists.
      </p>

      <h2>Source use</h2>
      <p>
        We look at the tools people commonly consider in each category, plus credible alternatives that deserve more
        attention. We read official documentation, pricing pages and plan limits, cross-check them against
        published third-party research where it is relevant. We identify the source of third-party measurements rather than presenting them as our own tests. We pay attention to what is
        included, what costs extra, and what is easy to miss.
      </p>

      <h2>3. We compare on a consistent set of questions</h2>
      <ul>
        <li>
          <strong>Fit:</strong> who is this genuinely good for, and who should look elsewhere?
        </li>
        <li>
          <strong>Quality:</strong> does it do its core job well and reliably?
        </li>
        <li>
          <strong>Ease of use:</strong> can a typical person get value from it without a steep learning curve?
        </li>
        <li>
          <strong>Value:</strong> is the pricing clear and fair for what you get?
        </li>
        <li>
          <strong>Trust:</strong> is the company transparent about pricing, privacy and terms?
        </li>
      </ul>

      <h2>4. We cut the list to five</h2>
      <p>
        Limiting each list to five is deliberate. It forces us to make real decisions and leave out tools that are
        merely fine. Each pick has to earn its place, usually by being the best option for a specific kind of user.
        That is why every card tells you who the tool is <strong>best for</strong>.
      </p>

      <h2>5. We rank 1 to 5</h2>
      <p>
        Number 1 is the pick we would suggest to most people. Numbers 2 to 5 are strong choices that may suit you
        better depending on your budget, experience or specific needs. A lower rank does not mean a tool is bad. It
        means it is a better fit for a narrower group.
      </p>

      <h2>How this site is funded</h2>
      <p>
        Some links on FIVE PICKED may earn us a commission at no extra cost to you. This helps fund our research and
        keeps the site free to read. We recommend tools we believe will genuinely help our readers, and we never
        accept payment for placement. You can read more in our{' '}
        <Link href="/affiliate-disclosure">affiliate disclosure</Link>.
      </p>

      <h2>What we do not do</h2>
      <ul>
        <li>We do not invent star ratings, scores, review counts or user numbers.</li>
        <li>We do not publish fake testimonials or awards.</li>
        <li>We do not pad lists to look comprehensive.</li>
      </ul>

      <h2>Update process</h2>
      <p>
        Software changes quickly. Each list shows a &ldquo;Last updated&rdquo; date, and we revisit our picks when
        products, pricing or the market change meaningfully. Prices and features can change at any time, so always
        confirm the details on the official website before you buy.
      </p>
      <p>Blog articles and reviews show their review date and a “What changed” note. The note describes the recorded change; it does not imply a new product test or price check unless that work is documented. We update when official details change and use correction reports to identify information that needs another look.</p>
      <p>
        Spotted something out of date? <Link href="/contact">Let us know</Link>.
      </p>
    </ContentPage>
  )
}
