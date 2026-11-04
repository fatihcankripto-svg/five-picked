import { verifiedPricing } from '@/data/tool-pricing'
import { toolDecisions } from '@/data/tool-decisions'
import type { Tool } from '@/data/categories'
import { ToolMark } from '@/components/tool-mark'

export function ComparisonTable({ tools, caption }: { tools: Tool[]; caption: string }) {
  return (
    <div className="fp-comparison rounded-2xl border border-border bg-card">
      <ol aria-label={caption} className="divide-y divide-border sm:hidden">
        {tools.map((tool, index) => (
          <li key={tool.slug} className="p-4">
            <a href={`#${tool.slug}`} className="flex min-h-11 items-center gap-3 font-semibold text-foreground hover:text-primary">
              <ToolMark slug={tool.slug} />
              <span className="min-w-0"><span className="mr-2 text-xs tabular-nums text-primary"><span className="sr-only">Rank </span>{index + 1}.</span>{tool.name}</span>
            </a>
            <dl className="mt-4 space-y-3 text-sm leading-relaxed">
              <div><dt className="text-[10px] font-semibold uppercase tracking-wider text-primary">Best for</dt><dd className="mt-1 text-muted-foreground">{tool.decisionOverride?.audience ?? toolDecisions[tool.slug]?.audience ?? tool.bestFor}</dd></div>
              <div><dt className="text-[10px] font-semibold uppercase tracking-wider text-primary">Price &amp; access</dt><dd className="mt-1 text-foreground">{tool.startingPrice}</dd></div>
            </dl>
            {verifiedPricing[tool.slug] && <a href={verifiedPricing[tool.slug].sourceUrl} className="mt-3 inline-flex min-h-8 items-center text-xs text-primary underline underline-offset-4">{tool.name} pricing source</a>}
          </li>
        ))}
      </ol>
      <div role="region" aria-label={caption} tabIndex={0} className="hidden overflow-x-auto rounded-2xl focus-visible:outline-2 focus-visible:outline-primary sm:block">
      <table className="w-full min-w-[34rem] text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-border text-xs uppercase tracking-widest text-muted-foreground">
            <th scope="col" className="sticky left-0 z-10 bg-card px-4 py-3.5 font-medium">
              Tool
            </th>
            <th scope="col" className="px-5 py-3.5 font-medium">
              Best for
            </th>
            <th scope="col" className="px-5 py-3.5 font-medium">
              Price & access
            </th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool, index) => (
            <tr
              key={tool.slug}
              className="border-b border-border transition-colors last:border-0 hover:bg-accent/60"
            >
              <th scope="row" className="sticky left-0 z-10 min-w-40 bg-card px-4 py-4 font-medium">
                <a
                  href={`#${tool.slug}`}
                  className="flex items-center gap-2.5 text-foreground hover:text-primary"
                >
                  <span className="flex flex-col items-center gap-1.5"><ToolMark slug={tool.slug} size="sm" /><span className="text-[10px] tabular-nums text-muted-foreground"><span className="sr-only">Rank </span>{index + 1}</span></span>
                  <span>{tool.name}</span>
                </a>
              </th>
              <td className="px-5 py-4 text-muted-foreground">{tool.decisionOverride?.audience ?? toolDecisions[tool.slug]?.audience ?? tool.bestFor}</td>
              <td className="max-w-xs px-5 py-4 text-foreground"><span className="block min-w-44 leading-relaxed">{tool.startingPrice}</span>{verifiedPricing[tool.slug] && <a href={verifiedPricing[tool.slug].sourceUrl} className="mt-2 inline-block text-xs text-primary underline underline-offset-4">{tool.name} pricing source</a>}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}
