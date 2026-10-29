import Link from 'next/link'
import { ContentPage, contentMetadata } from '@/components/content-page'
import { getAllAlternativePages } from '@/lib/alternatives'

export const metadata = contentMetadata({
  title: 'Tool Alternatives: Find the Right Fit',
  description:
    'Not sure a tool is right for you? See the other four picks in its list, who each one suits, and what to know before you switch.',
  path: '/alternatives',
})

export default function AlternativesIndexPage() {
  const pages = getAllAlternativePages()

  return (
    <ContentPage
      eyebrow="Alternatives"
      title="Tool alternatives"
      intro="Every FIVE PICKED list has exactly five tools. If one of them is not quite right for you, these pages show the other four and explain when each one makes more sense."
    >
      <h2>Pick a tool to compare</h2>
      <div className="flex flex-col gap-4">
        {pages.map((page) => (
          <Link
            key={page.slug}
            href={`/alternatives/${page.slug}`}
            style={{ textDecoration: 'none' }}
            className="block rounded-xl border border-border bg-card p-5 fp-lift"
          >
            <span className="block text-lg font-semibold text-foreground">{page.tool.name} alternatives</span>
            <span className="mt-1 block text-sm text-muted-foreground">{page.tool.tagline}</span>
            <span className="mt-3 block text-xs uppercase tracking-wider text-primary">{page.listName}</span>
          </Link>
        ))}
      </div>

      <p>
        Want the full ranked picture instead? Browse our <Link href="/#categories">categories</Link> or read{' '}
        <Link href="/how-we-choose">how we choose</Link>.
      </p>
    </ContentPage>
  )
}
