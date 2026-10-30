import { editorialDates } from '@/lib/editorial-dates'
import Link from 'next/link'
import { ContentPage, contentMetadata } from '@/components/content-page'

export const metadata = contentMetadata({
  title: 'Shared vs Cloud vs Managed WordPress Hosting: Which Do You Need?',
  description:
    'Shared, VPS, cloud and managed WordPress hosting explained in plain English, with who each type suits.',
  path: '/guides/shared-vs-cloud-vs-managed-wordpress-hosting',
})

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Shared vs Cloud vs Managed WordPress Hosting: Which Do You Need?',
  datePublished: editorialDates.guides,
  dateModified: editorialDates.guides,
  author: { '@type': 'Organization', name: 'FIVE PICKED', url: 'https://fivepicked.com' },
  publisher: { '@type': 'Organization', name: 'FIVE PICKED', url: 'https://fivepicked.com' },
  mainEntityOfPage: 'https://fivepicked.com/guides/shared-vs-cloud-vs-managed-wordpress-hosting',
}

export default function HostingTypesPage() {
  return (
    <ContentPage path="/guides/shared-vs-cloud-vs-managed-wordpress-hosting"
      eyebrow="Guide"
      title="Shared vs cloud vs managed WordPress hosting"
      intro="Hosting plans come with confusing names. This guide explains the main types in plain English, so you can pick the one that matches your site today and leave room to grow."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <h2>The quick answer</h2>
      <ul>
        <li>
          <strong>Starting a new site on a budget:</strong> shared hosting.
        </li>
        <li>
          <strong>A growing site that needs more power and control:</strong> cloud hosting.
        </li>
        <li>
          <strong>A busy WordPress site where you want someone else to handle the technical work:</strong> managed
          WordPress hosting.
        </li>
        <li>
          <strong>Full control and the skills to manage a server:</strong> VPS hosting.
        </li>
      </ul>

      <h2>The four types at a glance</h2>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[40rem] text-left text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-3 font-semibold">Type</th>
              <th className="px-4 py-3 font-semibold">Best for</th>
              <th className="px-4 py-3 font-semibold">Trade-off</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="px-4 py-3 font-medium">Shared</td>
              <td className="px-4 py-3">New sites, blogs and small business sites</td>
              <td className="px-4 py-3">Resources are shared with other sites</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-4 py-3 font-medium">VPS</td>
              <td className="px-4 py-3">People who want control and can manage a server</td>
              <td className="px-4 py-3">More technical, more work to maintain</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-4 py-3 font-medium">Cloud</td>
              <td className="px-4 py-3">Growing sites and agencies</td>
              <td className="px-4 py-3">Costs more than shared, and is more technical</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Managed WordPress</td>
              <td className="px-4 py-3">Busy WordPress sites and businesses</td>
              <td className="px-4 py-3">Usually the highest price, and works with WordPress only</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Shared hosting</h2>
      <p>
        On shared hosting, many websites live on the same server and share its resources. It is the cheapest way to
        get online and is easy to set up, which makes it a common first choice. If another site on the server gets a
        lot of traffic, performance can sometimes suffer.
      </p>

      <h2>VPS hosting</h2>
      <p>
        A VPS (virtual private server) gives you a guaranteed slice of a server. You get more control and more
        consistent performance than shared hosting, but you are usually responsible for setting it up and keeping it
        updated, unless the plan is managed.
      </p>

      <h2>Cloud hosting</h2>
      <p>
        Cloud hosting runs your site on cloud infrastructure, so resources can grow as your traffic grows. Many
        providers let you choose a server size and upgrade it later. Some, such as Cloudways, handle the setup and
        maintenance for you, so you get the power of the cloud without managing a server yourself.
      </p>

      <h2>Managed WordPress hosting</h2>
      <p>
        Managed WordPress hosts specialize in one thing: running WordPress sites well. They typically handle
        updates, backups, security and speed for you, and often include tools such as staging sites for safe testing.
        You pay more, and in return you spend less time on technical upkeep. Kinsta is an example.
      </p>

      <h2>How to choose</h2>
      <ul>
        <li>
          <strong>Your traffic:</strong> a new site with a few visitors does not need more than shared hosting.
        </li>
        <li>
          <strong>Your skills:</strong> if server settings sound stressful, choose a managed option.
        </li>
        <li>
          <strong>Your budget:</strong> compare the renewal price, not just the first-term price.
        </li>
        <li>
          <strong>Your plans:</strong> pick a host that lets you upgrade later without moving your site.
        </li>
      </ul>

      <h2>Frequently asked questions</h2>
      <h3>Is shared hosting good enough to start?</h3>
      <p>
        For most new sites, yes. You can move to a more powerful plan later when your traffic grows.
      </p>
      <h3>Can I upgrade later?</h3>
      <p>
        Usually yes. Many hosts let you move from shared to cloud or VPS plans, and some offer help with the move.
        Check this before you buy.
      </p>
      <h3>Do I need managed WordPress hosting?</h3>
      <p>
        Not at the start. It becomes attractive when your site earns money, gets steady traffic, or you would rather
        not handle updates and backups yourself.
      </p>
      <h3>What is the difference between cloud and managed WordPress?</h3>
      <p>
        Cloud hosting is about the infrastructure and how it scales. Managed WordPress is about who looks after
        WordPress for you. Some plans combine both.
      </p>

      <h2>The bottom line</h2>
      <p>
        Start simple and upgrade when you need to. See our{' '}
        <Link href="/web-hosting-and-domains">web hosting top 5</Link> for our picks across these types, and read{' '}
        <Link href="/guides/hostinger-vs-bluehost">Hostinger vs Bluehost</Link> if you are choosing a first host.
      </p>
    </ContentPage>
  )
}
