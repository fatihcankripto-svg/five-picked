import { Check, Info } from 'lucide-react'
import type { Tool } from '@/data/categories'
import { RankBadge } from '@/components/rank-badge'
import { VisitButton } from '@/components/visit-button'

export function ToolCard({ tool, rank }: { tool: Tool; rank: number }) {
  const headingId = `${tool.slug}-heading`

  return (
    <article
      id={tool.slug}
      aria-labelledby={headingId}
      className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/25 sm:p-8"
    >
      <header className="flex items-start gap-5">
        <RankBadge rank={rank} />
        <div className="min-w-0">
          <h3 id={headingId} className="text-2xl font-semibold text-foreground">
            {tool.name}
          </h3>
          <p className="mt-1 leading-relaxed text-muted-foreground text-pretty">{tool.tagline}</p>
        </div>
      </header>

      <div className="mt-6 inline-flex flex-wrap items-baseline gap-x-2 gap-y-1 rounded-lg bg-secondary px-3 py-2 text-sm">
        <span className="font-medium uppercase tracking-widest text-primary text-xs">Best for</span>
        <span className="text-foreground">{tool.bestFor}</span>
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h4 className="text-sm font-semibold text-foreground">What it does</h4>
          <p className="mt-2 leading-relaxed text-muted-foreground">{tool.whatItDoes}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Strengths</h4>
          <ul className="mt-2 flex flex-col gap-2">
            {tool.strengths.map((strength) => (
              <li key={strength} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                {strength}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex gap-3 rounded-xl border border-border p-4">
        <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
        <p className="text-sm leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">Good to know: </span>
          {tool.goodToKnow}
        </p>
      </div>

      <footer className="mt-6 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          Starting price: <span className="font-semibold text-foreground">{tool.startingPrice}</span>
        </p>
        <VisitButton tool={tool} />
      </footer>
    </article>
  )
}
