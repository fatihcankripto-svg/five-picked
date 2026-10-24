import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionMarker } from '@/components/section-marker'

const points = [
  {
    number: '01',
    title: 'We research widely',
    body: 'We look at the options people actually consider, read the documentation, and compare features, plans and limits.',
  },
  {
    number: '02',
    title: 'We keep only five',
    body: 'Cutting a list down to five forces clear decisions. Each pick has to earn its place for a specific kind of user.',
  },
  {
    number: '03',
    title: 'Money never decides',
    body: 'Some links may earn us a commission, but that never changes a ranking. Tools are ordered on fit, quality and value.',
  },
]

export function HowWeChooseStrip() {
  return (
    <section aria-labelledby="how-heading" className="mx-auto max-w-6xl px-5 pt-24 sm:px-8 md:pt-32">
      <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 lg:p-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <SectionMarker label="How we choose" />
            <h2
              id="how-heading"
              className="mt-5 text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl"
            >
              A short list, chosen carefully
            </h2>
          </div>
          <Link
            href="/how-we-choose"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline hover:underline-offset-4"
          >
            Read our full method
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
          {points.map((point) => (
            <li key={point.number} className="border-t border-border pt-6">
              <span className="font-mono text-sm text-primary">{point.number}</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
