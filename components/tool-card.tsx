import Link from 'next/link'
import { Check, Info, Star } from 'lucide-react'
import type { Tool } from '@/data/categories'
import { getReview } from '@/data/reviews'
import { RankBadge } from '@/components/rank-badge'
import { ToolMark } from '@/components/tool-mark'
import { VisitButton } from '@/components/visit-button'
import { verifiedPricing } from '@/data/tool-pricing'
import { toolDecisions } from '@/data/tool-decisions'
import { formatDate } from '@/lib/site'
import { cn } from '@/lib/utils'

export function ToolCard({ tool, rank, showPricingTerms = true }: { tool: Tool; rank: number; showPricingTerms?: boolean }) {
  const headingId = `${tool.slug}-heading`
  const isTop = rank === 1
  const review = getReview(tool.slug)
  const pricing = verifiedPricing[tool.slug]
  const decision = tool.decisionOverride ?? toolDecisions[tool.slug]

  return (
    <div className="fp-scroll">
      <article
        id={tool.slug}
        aria-labelledby={headingId}
        className={cn(
          'relative isolate overflow-hidden rounded-2xl p-5 sm:p-7 transition-colors duration-200',
          isTop ? 'fp-card-top-pick' : 'fp-card-glass'
        )}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-4 -top-8 -z-10 select-none text-[10rem] font-bold leading-none tracking-tighter text-foreground/[0.03] sm:text-[14rem]"
        >
          {rank}
        </span>

        <header>
          <div className="mb-4 flex items-center gap-2.5">
            <RankBadge rank={rank} size="sm" />
            {isTop && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                <Star aria-hidden="true" className="size-3.5 fill-primary" />
                Top pick
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <ToolMark slug={tool.slug} size="lg" />
            <h3 id={headingId} className={cn("min-w-0 text-2xl sm:text-3xl font-bold tracking-tight", isTop ? "text-primary" : "text-foreground")}>
              {tool.name}
            </h3>
          </div>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground/90 text-pretty">{tool.tagline}</p>
        </header>

        <dl className="mt-6 grid gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-4 sm:grid-cols-3 sm:p-5">
          <div><dt className="text-xs font-semibold uppercase tracking-wider text-primary">Who it suits</dt><dd className="mt-2 text-sm font-semibold leading-relaxed text-foreground">{decision?.audience ?? tool.bestFor}</dd></div>
          <div><dt className="text-xs font-semibold uppercase tracking-wider text-primary">Standout strength</dt><dd className="mt-2 text-sm font-semibold leading-relaxed text-foreground">{decision?.standout ?? tool.tagline}</dd></div>
          <div><dt className="text-xs font-semibold uppercase tracking-wider text-primary">{pricing?.kind === 'variable' ? 'How pricing works' : 'Price & access'}</dt><dd className="mt-2 text-sm font-semibold leading-relaxed text-foreground">{tool.startingPrice}</dd></div>
        </dl>
        {pricing && <p className="mt-3 text-xs leading-relaxed text-muted-foreground"><a href={pricing.sourceUrl} className="text-primary underline underline-offset-4">{tool.name} pricing source</a> · Checked <time dateTime={pricing.checkedAt}>{formatDate(pricing.checkedAt)}</time>{showPricingTerms ? '. Currency, eligibility and billing terms apply; offers can change.' : '.'}</p>}

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-sm font-bold text-foreground tracking-wide uppercase">What it does</p>
            <p className="mt-3 leading-relaxed text-muted-foreground/90">{tool.whatItDoes}</p>
          </div>
          <div>
            <p className="text-sm font-bold text-foreground tracking-wide uppercase">Strengths</p>
            <ul className="mt-3 flex flex-col gap-3">
              {tool.strengths.map((strength) => (
                <li key={strength} className="flex gap-3 text-sm leading-relaxed text-muted-foreground/90">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check aria-hidden="true" className="size-3 text-primary" />
                  </span>
                  {strength}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex gap-4 rounded-2xl bg-background/30 border border-white/5 p-5">
          <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary/70" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-bold text-foreground">Good to know: </span>
            {tool.goodToKnow}
          </p>
        </div>

        <footer className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground"><span className="font-semibold text-foreground">Best fit:</span> {tool.bestFor}</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {review && (
              <Link
                href={`/reviews/${review.toolSlug}`}
                className="inline-flex h-11 items-center justify-center rounded-xl bg-background/50 border border-white/10 px-5 text-sm font-semibold text-foreground transition-all hover:bg-accent hover:border-primary/30"
              >
                Read our {tool.name} review
              </Link>
            )}
            <VisitButton tool={tool} />
          </div>
        </footer>
      </article>
    </div>
  )
}
