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
              Starting price
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
              <td className="px-5 py-4 text-muted-foreground">{tool.bestFor}</td>
              <td className="whitespace-nowrap px-5 py-4 text-foreground">{tool.startingPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
