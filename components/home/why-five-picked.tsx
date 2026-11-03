import { SectionMarker } from '@/components/section-marker'
const reasons = [
  { title: 'Five picks. A clearer decision.', body: 'See five options side by side, then read the reasons to choose each one. Start with the list that matches what you need to do.' },
  { title: 'Official pricing. Clear conditions.', body: 'Published amounts link to the official source and show when we checked them. Annual commitments, trials and usage-based prices are labelled clearly.' },
  { title: 'Who is each tool for?', body: 'Check the intended user, main strength and limitations before opening a provider’s website. The right choice depends on your work.' },
]
export function WhyFivePicked() {
 return <section aria-labelledby="why-five-picked" className="mx-auto max-w-6xl px-5 pt-20 sm:px-8"><SectionMarker label="Why FIVE PICKED?" /><h2 id="why-five-picked" className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Know what you’re choosing</h2><ul className="mt-8 grid gap-5 md:grid-cols-3">{reasons.map((reason, i) => <li key={reason.title} className="rounded-2xl border border-border bg-card p-6"><p aria-hidden="true" className="text-sm font-semibold text-primary">0{i + 1}</p><h3 className="mt-4 text-xl font-semibold">{reason.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{reason.body}</p></li>)}</ul></section>
}
