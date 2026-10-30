import { editorialDates } from '@/lib/editorial-dates'
import Link from 'next/link'
import { ContentPage, contentMetadata } from '@/components/content-page'

export const metadata = contentMetadata({
  title: 'How to Choose a VPN: A Plain-English Guide',
  description:
    'What a VPN does, what it does not do, and what to check before you pick one. Plus which VPNs suit which kind of user.',
  path: '/guides/how-to-choose-a-vpn',
})

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Choose a VPN: A Plain-English Guide',
  datePublished: editorialDates.guidesPublished,
  dateModified: editorialDates.guides,
  author: { '@type': 'Organization', name: 'FIVE PICKED', url: 'https://fivepicked.com' },
  publisher: { '@type': 'Organization', name: 'FIVE PICKED', url: 'https://fivepicked.com' },
  mainEntityOfPage: 'https://fivepicked.com/guides/how-to-choose-a-vpn',
}

export default function HowToChooseAVpnPage() {
  return (
    <ContentPage path="/guides/how-to-choose-a-vpn"
      eyebrow="Guide"
      title="How to choose a VPN"
      intro="VPN ads promise a lot. This guide explains in plain English what a VPN really does, what to check before you pick one, and which options suit which kind of person."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <h2>The quick answer</h2>
      <p>
        Pick a VPN from a company that has had its no-logs policy independently audited, has apps for all your
        devices, and shows its renewal price clearly. For most people, a well-known all-rounder is the safest
        choice. If privacy is your top priority, look at VPNs with open-source apps and a free plan to test first.
      </p>

      <h2>What a VPN does</h2>
      <ul>
        <li>
          <strong>Encrypts your connection,</strong> which helps on public Wi-Fi in cafes, hotels and airports.
        </li>
        <li>
          <strong>Hides your IP address</strong> from the websites you visit.
        </li>
        <li>
          <strong>Stops your internet provider</strong> from seeing which sites you open, though the VPN company can
          see your traffic instead, which is why trust matters.
        </li>
        <li>
          <strong>Lets you appear in another country,</strong> which can help while traveling.
        </li>
      </ul>

      <h2>What a VPN does not do</h2>
      <ul>
        <li>It does not make you anonymous. Websites can still identify you if you log in.</li>
        <li>It does not protect you from viruses, phishing or scams.</li>
        <li>It does not make illegal activity legal. Always follow the laws where you live.</li>
      </ul>

      <h2>What to check before you choose</h2>
      <ul>
        <li>
          <strong>Independent audits:</strong> a company saying it keeps no logs is not enough. Look for outside audits
          of its no-logs policy.
        </li>
        <li>
          <strong>Apps for your devices:</strong> check that your phone, laptop and any other device are supported,
          and how many can connect at once.
        </li>
        <li>
          <strong>Kill switch:</strong> this cuts your internet if the VPN drops, so your real connection is never
          exposed.
        </li>
        <li>
          <strong>Speed:</strong> every VPN slows your connection a little. Most offer a refund period, so you can
          test it on your own network.
        </li>
        <li>
          <strong>Price and renewal:</strong> long plans have low intro prices that renew higher. Compare the renewal
          price, not only the first one.
        </li>
        <li>
          <strong>Refund policy:</strong> many VPNs offer a money-back period. Read the terms before you pay.
        </li>
      </ul>

      <h2>Which VPN suits which person?</h2>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[34rem] text-left text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-3 font-semibold">VPN</th>
              <th className="px-4 py-3 font-semibold">Best for</th>
              <th className="px-4 py-3 font-semibold">Worth knowing</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="px-4 py-3 font-medium">NordVPN</td>
              <td className="px-4 py-3">Most people who want a polished all-rounder</td>
              <td className="px-4 py-3">Wide feature set and an independently audited no-logs policy</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-4 py-3 font-medium">Surfshark</td>
              <td className="px-4 py-3">Households with many devices</td>
              <td className="px-4 py-3">Lets you connect an unlimited number of devices on one subscription</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-4 py-3 font-medium">ExpressVPN</td>
              <td className="px-4 py-3">People who want the simplest experience</td>
              <td className="px-4 py-3">Easy-to-use apps; often priced higher than rivals</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-4 py-3 font-medium">Proton VPN</td>
              <td className="px-4 py-3">Privacy-focused users</td>
              <td className="px-4 py-3">Open-source apps and a free plan to try first</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Private Internet Access</td>
              <td className="px-4 py-3">People who like to adjust settings</td>
              <td className="px-4 py-3">Open-source apps and many configuration options</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Features and prices change often, so confirm current details on each official website. You can see all five
        with our notes in the <Link href="/vpn-and-security">VPN &amp; Security top 5</Link>.
      </p>

      <h2>Do you actually need a VPN?</h2>
      <p>
        A VPN is most useful if you often use public Wi-Fi, travel, or want to keep your browsing private from your
        internet provider. If you only browse at home on a trusted network and use secure websites, the benefit is
        smaller. It is a helpful tool, not a requirement for everyone.
      </p>

      <h2>Frequently asked questions</h2>
      <h3>Is a free VPN safe?</h3>
      <p>
        It depends on the company. Some free plans from reputable providers are safe but limited. Others make money
        in ways you may not like, such as showing ads or sharing data. Check who runs it and how it is funded before
        you trust it.
      </p>
      <h3>Is using a VPN legal?</h3>
      <p>
        In most countries, yes. Rules differ by country, so check the laws where you live. A VPN never makes illegal
        activity legal.
      </p>
      <h3>Will a VPN slow down my internet?</h3>
      <p>
        Usually a little, because your traffic takes an extra step. The difference depends on the VPN, the server you
        pick and your own connection.
      </p>
      <h3>Can I use one VPN on all my devices?</h3>
      <p>
        Often yes, but the number of devices allowed at once varies by company. Check this before you subscribe.
      </p>

      <h2>The bottom line</h2>
      <p>
        Choose a VPN you can trust, not just the cheapest one. Check for audits, make sure it supports your devices,
        and compare renewal prices. See how we pick tools on our <Link href="/how-we-choose">method page</Link>, or
        browse the full <Link href="/vpn-and-security">VPN &amp; Security top 5</Link>.
      </p>
    </ContentPage>
  )
}
