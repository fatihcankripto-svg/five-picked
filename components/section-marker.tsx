import { cn } from '@/lib/utils'

export function SectionMarker({
  label,
  className,
}: {
  label: string
  className?: string
}) {
  return (
    <p
      className={cn(
        'flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="flex size-6 items-center justify-center rounded-md border border-primary/40 text-[0.8rem] font-bold tracking-normal text-primary"
      >
        5
      </span>
      {label}
    </p>
  )
}
