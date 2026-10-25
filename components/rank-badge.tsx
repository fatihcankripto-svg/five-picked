import { cn } from '@/lib/utils'

export function RankBadge({ rank, size = 'lg' }: { rank: number; size?: 'sm' | 'lg' }) {
  return (
    <span
      className={cn(
        'flex shrink-0 items-center justify-center rounded-xl font-bold leading-none tabular-nums',
        size === 'lg' ? 'size-14 text-3xl' : 'size-7 rounded-md text-sm',
        rank === 1
          ? 'bg-primary text-primary-foreground'
          : 'border border-primary/40 text-primary',
        rank === 1 && size === 'lg' && 'shadow-[0_0_28px_-4px] shadow-primary/70',
      )}
    >
      <span className="sr-only">Rank </span>
      {rank}
    </span>
  )
}
