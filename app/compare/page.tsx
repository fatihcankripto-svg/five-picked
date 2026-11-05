import { serializeJsonLd } from '@/lib/json-ld'
import { pageMetadata } from '@/lib/metadata'
import { socialImages } from '@/lib/site'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { ToolMark } from '@/components/tool-mark'
import { toolMarks } from '@/data/tool-marks'
import { ArrowUpRight } from 'lucide-react'
import { SectionMarker } from '@/components/section-marker'
import { comparePages, comparePagesUpdated } from '@/lib/compare-pages'
import { absoluteUrl, formatDate } from '@/lib/site'

const path = '/compare'
const title = 'Head-to-Head Comparisons (2026)'
const description =
  'Side-by-side comparisons of the tools we recommend. See which one wins for your use case, in one page.'

export const metadata: Metadata = pageMetadata({
  title,
  description,
  alternates: { canonical: path },
  openGraph: { images: socialImages, title, description, url: path, type: 'website' },
  twitter: { images: socialImages, title, description },
})

const cardSummaries: Record<string, string> = {
  "clickup-vs-monday-com": "Tasks and documents or customizable boards? Find the workspace that fits your team.",
  "fireflies-vs-otter": "Compare how you capture, search and share meeting notes.",
  "filmora-vs-camtasia": "Editing footage or explaining something on screen? Start with the video you need.",
  "monday-com-vs-asana": "Compare boards, project planning and the seat commitments behind each plan.",
  "neuronwriter-vs-frase": "Compare content optimization with a broader research-to-publishing workflow.",
  "upwork-vs-freelancer-com": "Look beyond the contract value: compare proposals, platform fees and getting paid.",
  "make-vs-n8n": "Hosted automation or a service you manage yourself? Compare workflow costs and maintenance.",
  "pcloud-vs-dropbox": "Compare storage commitments, file sharing and the way your team already works.",
  "skillshare-vs-masterclass": "Creative class projects or instructor-led demonstrations? Choose the learning format that suits you.",
  "semrush-vs-surfer-seo": "Research search opportunities or improve an article? Match the tool to your content workflow.",
  "kiwi-com-vs-trip-com": "Compare itineraries and booking conditions, including what happens when plans change.",
  "capcut-vs-premiere-pro": "Social video templates or detailed desktop editing? Compare the workflow and commercial-use conditions.",
  "fiverr-vs-upwork": "Fixed-price packages or proposals and contracts? Compare two ways to sell freelance services.",
  "mailerlite-vs-kit": "Compare newsletter workflows, email automation and options for creator businesses.",
  "pcloud-vs-sync-com": "Compare storage plans, privacy features and the commitment you are making.",
  "adobe-firefly-vs-ideogram": "Compare image creation for Adobe workflows and designs with readable text.",
  "fliki-vs-synthesia": "Narrated videos or an on-screen AI presenter? Pick the format your project needs.",
  "elevenlabs-vs-fliki": "Need a voiceover or a complete narrated video? Compare the two workflows.",
  "asana-vs-clickup": "Compare task organization and project workflows before choosing a team workspace.",
  "coursera-vs-datacamp": "Explore a broad course catalog or focus on practical data and AI learning.",
  "hostinger-vs-cloudways": "Compare hosting setup, management responsibilities and the costs behind each offer.",
  "expressvpn-vs-nordvpn": "Compare VPN features, device support and subscription conditions.",
  "babbel-vs-italki": "Self-paced lessons or one-to-one tutoring? Choose how you want to learn.",
  "gamma-vs-pitch": "Create a deck from a prompt or build it with your team. Compare presentation workflows."
}

export default function CompareIndexPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url: absoluteUrl(path),
    hasPart: comparePages.map((page) => ({
      '@type': 'Article',
      name: `${page.a.name} vs ${page.b.name}`,
      url: absoluteUrl(`/compare/${page.slug}`),
    })),
  }

  return (
    <div className="mx-auto max-w-4xl px-5 pt-10 sm:px-8 sm:pt-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <Breadcrumbs items={[{ label: 'Comparisons' }]} />

      <header className="mt-10">
        <SectionMarker label="Head-to-head" />
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl">
          Head-to-head comparisons
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Two tools, one page. Each comparison explains which one wins for your use case, so you do
          not have to read two reviews to decide.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated <time dateTime={comparePagesUpdated}>{formatDate(comparePagesUpdated)}</time>
        </p>
      </header>

      <section aria-label="Comparisons" className="mt-12">
        <ul className="grid gap-4 sm:grid-cols-2">
          {comparePages.map((page) => (
            <li key={page.slug}>
              <Link
                href={`/compare/${page.slug}`}
                className="fp-lift group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40 sm:p-6"
              >
                <div aria-hidden="true" className="mb-5 flex items-center gap-3">
                  {[page.a, page.b].map((tool, i) => <span key={tool.slug} className="flex items-center gap-3">
                    {i > 0 && <span className="text-[10px] font-semibold tracking-widest text-muted-foreground">VS</span>}
                    {toolMarks[tool.slug] ? <ToolMark slug={tool.slug} /> : <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-primary/10 text-sm font-semibold text-primary">{tool.name.split(/\s+/).slice(0, 2).map(word => word[0]).join('').toUpperCase()}</span>}
                  </span>)}
                  <ArrowUpRight className="ml-auto size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <h2 className="text-lg font-semibold text-foreground">
                  {page.a.name} vs {page.b.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cardSummaries[page.slug] ?? page.framing}
                </p>
                <span className="mt-5 pt-3 text-xs font-semibold text-primary">Read comparison <span aria-hidden="true">→</span></span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
