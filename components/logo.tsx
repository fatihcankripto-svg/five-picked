import Link from 'next/link'

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="group flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4"
      aria-label="FIVE PICKED home"
    >
      <span
        aria-hidden="true"
        className="flex size-8 items-center justify-center rounded-lg bg-primary text-lg font-bold leading-none text-primary-foreground"
      >
        5
      </span>
      <span className="text-sm font-semibold tracking-[0.18em] text-foreground">
        FIVE PICKED
      </span>
    </Link>
  )
}
