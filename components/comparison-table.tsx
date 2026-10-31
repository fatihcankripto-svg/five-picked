import { verifiedPricing } from '@/data/tool-pricing'
import { toolDecisions } from '@/data/tool-decisions'
import type { Tool } from '@/data/categories'
import { RankBadge } from '@/components/rank-badge'

export function ComparisonTable({ tools, caption }: { tools: Tool[]; caption: string }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card">
      <table className="w-full min-w-[34rem] text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-border text-xs uppercase tracking-widest text-muted-foreground">
            <th scope="col" className="px-5 py-3.5 font-medium">
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
              <th scope="row" className="px-5 py-4 font-medium">
                <a
                  href={`#${tool.slug}`}
                  className="flex items-center gap-3 text-foreground hover:text-primary"
                >
                  <RankBadge rank={index + 1} size="sm" />
                  {tool.name}
                </a>
              </th>
              <td className="px-5 py-4 text-muted-foreground">{tool.decisionOverride?.audience ?? toolDecisions[tool.slug]?.audience ?? tool.bestFor}</td>
              <td className="max-w-xs px-5 py-4 text-foreground"><span className="block min-w-44 leading-relaxed">{tool.startingPrice}</span>{verifiedPricing[tool.slug] && <a href={verifiedPricing[tool.slug].sourceUrl} className="mt-2 inline-block text-xs text-primary underline underline-offset-4">Official source</a>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
