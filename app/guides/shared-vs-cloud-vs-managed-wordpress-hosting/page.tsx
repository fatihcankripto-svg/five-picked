import Link from 'next/link'
import { ContentPage, contentMetadata } from '@/components/content-page'
import { editorialDates } from '@/lib/editorial-dates'
import { editorialIdentity } from '@/lib/editorial-identity'
import { serializeJsonLd } from '@/lib/json-ld'
import { guideSchemas } from '@/lib/restored-guides'
import { formatDate } from '@/lib/site'

const path = '/guides/shared-vs-cloud-vs-managed-wordpress-hosting'
const title = 'Shared vs cloud vs managed WordPress hosting'
export const metadata = contentMetadata({ title: 'Shared vs Cloud vs Managed WordPress', description: 'Compare shared, VPS, cloud and managed WordPress hosting by resource control, maintenance responsibility and the billing terms your website needs.', path })
const faqs = [
  { question: 'Is cloud hosting the same as managed WordPress?', answer: 'No. Cloud describes infrastructure, while managed WordPress describes the supported application and management service. A plan can combine both.' },
  { question: 'Is shared hosting enough for a new site?', answer: 'It can be a suitable starting point when the software, resource limits and support fit the site. Check the selected plan instead of relying on a universal traffic threshold.' },
  { question: 'Can I upgrade without moving the site?', answer: 'That depends on the provider and destination plan. Confirm the migration route, included assistance and any application or email work before paying.' },
]
const rows = [
  ['Shared hosting', 'Sites share server resources.', 'A simple website launch when the plan covers the required software and workload.', 'Resource limits, renewal terms and included services.'],
  ['VPS hosting', 'A virtual server allocates resources within a physical host.', 'Owners who need configuration control and can handle the management responsibilities.', 'Whether the service is managed and who maintains the operating system.'],
  ['Cloud hosting', 'Infrastructure and resource configuration are provided through a cloud environment.', 'Sites that need to choose or change resources as their requirements develop.', 'The actual scaling process, support scope and billing basis.'],
  ['Managed WordPress', 'The service is focused on supporting and managing WordPress.', 'WordPress owners who want a provider to handle the included maintenance tasks.', 'Backup, staging, update and support responsibilities in the selected plan.'],
]

export default function HostingGuide() {
  return <ContentPage path={path} eyebrow="Guide" title={title} intro="Choose hosting by the software you run, the resources you need and who will maintain it; hosting labels alone do not establish performance or the full price.">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(guideSchemas(path, title, faqs)) }} />
    <p><Link href="/editorial-team">{editorialIdentity.name}</Link>. Last reviewed: <time dateTime={editorialDates.guides}>{formatDate(editorialDates.guides)}</time>. These are purchasing distinctions, not our own hosting benchmarks.</p>
    <h2>The distinction that prevents the wrong purchase</h2>
    <p>Shared, VPS and cloud describe resource arrangements; managed WordPress describes an application-focused service and its maintenance scope. Managed WordPress can run on cloud infrastructure, so those labels are not mutually exclusive.</p>
    <h2>Compare the hosting models</h2>
    <div className="overflow-x-auto rounded-xl border border-border"><table className="w-full min-w-[34rem] text-left text-sm"><thead><tr className="border-b border-border">{['Model', 'What it describes', 'When to evaluate it', 'Verify in the offer'].map((heading) => <th key={heading} className="px-4 py-3 font-semibold">{heading}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row[0]} className="border-b border-border">{row.map((cell, index) => index === 0 ? <th key={cell} scope="row" className="px-4 py-3 font-medium">{cell}</th> : <td key={cell} className="px-4 py-3">{cell}</td>)}</tr>)}</tbody></table></div>
    <h2>Choose by maintenance responsibility</h2>
    <ul><li><strong>A straightforward launch:</strong> compare an entry hosting plan against the website’s actual software, backups and support needs.</li><li><strong>More configuration control:</strong> identify who will configure, update and monitor the server before choosing a VPS or cloud arrangement.</li><li><strong>WordPress maintenance:</strong> compare the included update, backup, staging and support tasks rather than assuming every managed plan handles the same work.</li></ul>
    <h2>Build a comparable budget</h2>
    <p>Keep the introductory payment, term and renewal separate. Check domain renewal, email, migration scope and optional services before treating two headline prices as the cost of the same website.</p>
    <p>The <Link href="/blog/2026-web-hosting-price-index">hosting price index</Link> records dated offers and missing evidence; the <Link href="/free/best-free-web-hosting">free-hosting guide</Link> distinguishes trials and refund routes from permanent free hosting.</p>
    <h2>Use the shortlist after choosing the model</h2>
    <p>Browse <Link href="/web-hosting-and-domains">our hosting shortlist</Link> for the documented provider fit. For a WordPress-focused managed service versus configurable managed cloud hosting, read <Link href="/blog/kinsta-vs-cloudways">Kinsta vs Cloudways</Link>. For an entry hosting offer versus managed cloud, read <Link href="/compare/hostinger-vs-cloudways">Hostinger vs Cloudways</Link>.</p>
    <h2>Frequently asked questions</h2>
    {faqs.map((faq) => <section key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></section>)}
    <h2>Sources and methodology</h2>
    <p><a href="https://aws.amazon.com/what-is/vps/" rel="noopener noreferrer">AWS’s explanation of shared and virtual private hosting</a> and <a href="https://aws.amazon.com/what-is/cloud-hosting/" rel="noopener noreferrer">cloud hosting</a> explain resource arrangements. Provider scope and offer details are documented in the linked shortlist and price index.</p>
  </ContentPage>
}
