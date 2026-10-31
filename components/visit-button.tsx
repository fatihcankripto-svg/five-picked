import { foundationButtonClasses } from '@/lib/design-system'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import type { Tool } from '@/data/categories'
import { getOutboundLink } from '@/lib/site'

export function VisitButton({ tool, designSystem = false }: { tool: Tool; designSystem?: boolean }) {
  const { href, rel } = getOutboundLink(tool)

  return (
    <a
      href={href}
      target="_blank"
      rel={rel}
      className={cn("inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2", designSystem && foundationButtonClasses('primary'))}
    >
      Visit website
      <span className="sr-only">
        {' '}
        for {tool.name} (opens in a new tab)
      </span>
      <ArrowUpRight aria-hidden="true" className="size-4" />
    </a>
  )
}
