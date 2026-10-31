import { SectionMarker } from '@/components/section-marker'
const reasons = [
  { title: 'Five picks. A clearer decision.', body: 'Every published list contains just five tools. Compare a useful shortlist instead of sorting through hundreds of near-identical options.' },
  { title: 'Official pricing. Clear conditions.', body: 'Published amounts link to the official source and show when we checked them. Annual commitments, trials and usage-based prices are labelled clearly.' },
  { title: 'A specific fit for every pick.', body: 'See who each tool suits and its standout strength before reading the detail. A good recommendation tells you when to choose it.' },
]
export function WhyFivePicked() {
 return <section aria-labelledby="why-five-picked" className="mx-auto max-w-6xl px-5 pt-20 sm:px-8"><SectionMarker label="Why FIVE PICKED?" /><h2 id="why-five-picked" className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Less searching. More certainty.</h2><ul className="mt-8 grid gap-5 md:grid-cols-3">{reasons.map((reason, i) => <li key={reason.title} className="rounded-2xl border border-border bg-card p-6"><p aria-hidden="true" className="text-sm font-semibold text-primary">0{i + 1}</p><h3 className="mt-4 text-xl font-semibold">{reason.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{reason.body}</p></li>)}</ul></section>
}
