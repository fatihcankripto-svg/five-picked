import Link from 'next/link'
import { ContentPage, contentMetadata } from '@/components/content-page'
import { publishedCategories } from '@/data/all-categories'
import { editorialDates } from '@/lib/editorial-dates'
import { editorialIdentity } from '@/lib/editorial-identity'
import { serializeJsonLd } from '@/lib/json-ld'
import { guideSchemas } from '@/lib/restored-guides'
import { formatDate } from '@/lib/site'

const path = '/guides/how-to-choose-a-vpn'
const title = 'How to choose a VPN'
export const metadata = contentMetadata({ title: 'How to Choose a VPN: Practical Guide', description: 'Choose a VPN by your devices, privacy requirements, billing term and refund conditions, with clear limits and links to documented provider options.', path })
const faqs = [
  { question: 'Does a VPN make me anonymous?', answer: 'No. Logging into accounts and other tracking methods can still identify you; a VPN changes the network route rather than removing every way to recognize you.' },
  { question: 'Do I need a paid VPN?', answer: 'An ongoing free plan can be enough when its device, location and feature limits fit your needs. Compare the free-access guide before treating a refund guarantee as free use.' },
  { question: 'Can a published speed result predict my connection?', answer: 'No. The test connection, server, protocol and workload matter. Use the speed guide to compare a baseline with the connection and tasks you actually use.' },
]

export default function VpnGuide() {
  const tools = publishedCategories.find((category) => category.slug === 'vpn-and-security')!.tools!
  return <ContentPage path={path} eyebrow="Guide" title={title} intro="Start with the problem you want to solve, then check the provider, supported devices and complete billing commitment before buying.">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(guideSchemas(path, title, faqs)) }} />
    <p><Link href="/editorial-team">{editorialIdentity.name}</Link>. Last reviewed: <time dateTime={editorialDates.guides}>{formatDate(editorialDates.guides)}</time>. This is source-based guidance, not a VPN performance or privacy test.</p>
    <h2>What a VPN changes</h2>
    <p>A VPN routes traffic through an encrypted connection to its server and changes the IP address seen by destination websites. This shifts trust toward the VPN provider; it does not remove the need to assess that provider.</p>
    <p>HTTPS already protects the contents of many web connections. A VPN is not a guarantee against account tracking, phishing or malware, and it does not make a logged-in account anonymous.</p>
    <h2>Choose by the job and the devices</h2>
    <ul>
      <li><strong>Public networks:</strong> decide what information you want to protect and whether you trust the VPN operator more than the network you are using.</li>
      <li><strong>Device coverage:</strong> confirm the app, operating system and simultaneous-connection allowance for the selected plan.</li>
      <li><strong>Privacy evidence:</strong> read the privacy policy and the scope and date of any independent audit; an audit is not a permanent guarantee.</li>
      <li><strong>Required features:</strong> verify kill-switch behavior, protocol support and any plan-specific extras on your actual platform.</li>
    </ul>
    <h2>Compare the purchase, not just the monthly label</h2>
    <p>Record the amount due now, coverage period, renewal amount and renewal interval. A long-plan monthly equivalent is different from monthly billing, and a refund guarantee can require payment first.</p>
    <p>Use the <Link href="/blog/2026-vpn-price-index">VPN price and renewal index</Link> for dated offer observations and the <Link href="/free/vpns-with-a-free-plan">free-access guide</Link> to separate permanent plans, trials and conditional refunds.</p>
    <h2>Match the shortlist to your priorities</h2>
    <div className="overflow-x-auto rounded-xl border border-border"><table className="w-full min-w-[34rem] text-left text-sm"><thead><tr className="border-b border-border"><th className="px-4 py-3 font-semibold">Provider</th><th className="px-4 py-3 font-semibold">Documented fit</th><th className="px-4 py-3 font-semibold">Check before buying</th></tr></thead><tbody>{tools.map((tool) => <tr key={tool.slug} className="border-b border-border"><td className="px-4 py-3"><Link href={`/vpn-and-security#${tool.slug}`}>{tool.name}</Link></td><td className="px-4 py-3">{tool.bestFor}</td><td className="px-4 py-3">{tool.goodToKnow}</td></tr>)}</tbody></table></div>
    <h2>Check the connection you will actually use</h2>
    <p>Compare a baseline and a VPN connection under the same setup, then check the tasks that matter to you. Read <Link href="/blog/vpn-speed-test-2026">how to test VPN speed</Link> for the method and the limits of the credited third-party benchmark.</p>
    <h2>Frequently asked questions</h2>
    {faqs.map((faq) => <section key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></section>)}
    <h2>Sources and next steps</h2>
    <p><a href="https://ssd.eff.org/module/vpn.html" rel="noopener noreferrer">EFF’s guidance on choosing a VPN</a> explains the security boundaries. Provider-specific prices and features remain linked to official evidence on <Link href="/vpn-and-security">our VPN shortlist</Link>.</p>
  </ContentPage>
}
