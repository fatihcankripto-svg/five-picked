import Image from 'next/image'
import { toolMarks } from '@/data/tool-marks'
import { cn } from '@/lib/utils'

/** Decorative identifier beside a visible tool name; never an endorsement badge. */
export function ToolMark({ slug, size = 'md', className }: { slug: string; size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const mark = toolMarks[slug]
  if (!mark) return null

  return (
    <span aria-hidden="true" className={cn(
      'fp-tool-mark inline-flex shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white p-2',
      size === 'sm' ? 'size-9 rounded-lg p-1.5' : size === 'lg' ? 'size-14 sm:size-16 sm:p-2.5' : 'size-11',
      mark.wordmark && (size === 'sm' ? 'w-24' : 'w-32'),
      mark.dark && 'bg-[#111827]',
      className,
    )}>
      <Image src={mark.src} alt="" width={mark.wordmark ? 128 : 64} height={64} unoptimized loading="lazy" className="h-full w-full object-contain" />
    </span>
  )
}
