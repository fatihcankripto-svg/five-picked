import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'

export function FiveDots({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn('inline-flex items-center gap-1.5', className)}>
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className="fp-pulse size-1.5 rounded-full bg-primary shadow-[0_0_8px_1px] shadow-primary/60"
          style={{ '--fp-i': i } as CSSProperties}
        />
      ))}
    </span>
  )
}
