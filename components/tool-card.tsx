import Link from 'next/link'
import { Check, Info, Star } from 'lucide-react'
import type { Tool } from '@/data/categories'
import { getReview } from '@/data/reviews'
import { RankBadge } from '@/components/rank-badge'
import { VisitButton } from '@/components/visit-button'
import { cn } from '@/lib/utils'

export function ToolCard({ tool, rank }: { tool: Tool; rank: number }) {
  const headingId = `${tool.slug}-heading`
  const isTop = rank === 1
  const review = getReview(tool.slug)

  return (
    <div className="fp-scroll">
      <article
        id={tool.slug}
        aria-labelledby={headingId}
        className={cn(
          'fp-lift relative isolate overflow-hidden rounded-2xl border bg-card p-6 transition-colors hover:border-primary/25 sm:p-8',
          isTop ? 'border-primary/40 bg-linear-to-br from-primary/[0.08] to-card' : 'border-border',
        )}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-2 -top-4 -z-10 select-none text-[8rem] font-bold leading-none tracking-tighter text-foreground/[0.04] sm:text-[11rem]"
        >
          {rank}
        </span>

        <header className="flex items-start gap-5">
          <RankBadge rank={rank} />
          <div className="min-w-0">
            {isTop && (
              <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-widest text-primary">
                <Star aria-hidden="true" className="size-3 fill-primary" />
                Top pick
              </span>
            )}
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
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {review && (
              <Link
                href={`/reviews/${review.toolSlug}`}
                className="inline-flex h-10 items-center justify-center rounded-lg border border-border px-4 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-accent"
              >
                Read our review
              </Link>
            )}
            <VisitButton tool={tool} />
          </div>
        </footer>
      </article>
    </div>
  )
}
