import Link from 'next/link'
import { ContentPage, contentMetadata } from '@/components/content-page'

export const metadata = contentMetadata({
  title: 'How We Choose',
  description:
    'How FIVE PICKED researches, compares and ranks tools. Why every list has exactly five picks, and why commissions never decide the order.',
  path: '/how-we-choose',
})

export default function HowWeChoosePage() {
  return (
    <ContentPage
      eyebrow="Our method"
      title="How we choose"
      intro="Every list on FIVE PICKED has exactly five tools, ranked 1 to 5. Here is how we get from a crowded market to a short list we are comfortable putting our name on."
    >
      <h2>1. We start with what people actually need</h2>
      <p>
        Before we compare anything, we define the job a tool is supposed to do and who is likely to be doing it. A
        freelancer setting up a first website has different needs from a growing team. Being clear about this keeps
        our picks grounded in real use rather than feature checklists.
      </p>

      <h2>2. We research widely</h2>
      <p>
        We look at the tools people commonly consider in each category, plus credible alternatives that deserve more
        attention. We read official documentation, pricing pages and plan limits, and where it makes sense we try the
        product ourselves. We pay attention to what is included, what costs extra, and what is easy to miss.
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

      <h2>What never affects a ranking</h2>
      <p>
        Some links on FIVE PICKED may earn us a commission. Whether a tool has an affiliate program, and how much it
        might pay, plays no part in whether it appears or where it ranks. We do not accept payment for placement.
        You can read more in our <Link href="/affiliate-disclosure">affiliate disclosure</Link>.
      </p>

      <h2>What we do not do</h2>
      <ul>
        <li>We do not invent star ratings, scores, review counts or user numbers.</li>
        <li>We do not publish fake testimonials or awards.</li>
        <li>We do not pad lists to look comprehensive.</li>
      </ul>

      <h2>Keeping lists up to date</h2>
      <p>
        Software changes quickly. Each list shows a &ldquo;Last updated&rdquo; date, and we revisit our picks when
        products, pricing or the market change meaningfully. Prices and features can change at any time, so always
        confirm the details on the official website before you buy.
      </p>
      <p>
        Spotted something out of date? <Link href="/contact">Let us know</Link>.
      </p>
    </ContentPage>
  )
}
