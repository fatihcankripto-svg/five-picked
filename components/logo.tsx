import Link from 'next/link'

const dots: [number, number][] = [
  [20, 3],
  [36.2, 14.8],
  [30, 33.8],
  [10, 33.8],
  [3.8, 14.8],
]

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="fp-logo group flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4"
      aria-label="FIVE PICKED home"
    >
      <span aria-hidden="true" className="relative block size-10 shrink-0">
        <span className="fp-logo-orbit absolute inset-0">
          <svg viewBox="0 0 40 40" className="size-full" fill="none">
            <circle
              cx="20"
              cy="20"
              r="17"
              className="stroke-primary/30"
              strokeWidth="0.8"
              strokeDasharray="1.5 2.5"
            />
            {dots.map(([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2" className="fill-primary" />
            ))}
          </svg>
        </span>
        <span className="absolute inset-[9px] flex items-center justify-center rounded-full bg-primary text-[15px] font-extrabold leading-none text-primary-foreground shadow-[0_0_18px_-2px] shadow-primary/60">
          5
        </span>
      </span>
      <span className="text-sm font-semibold tracking-[0.18em] text-foreground">FIVE PICKED</span>
    </Link>
  )
}
