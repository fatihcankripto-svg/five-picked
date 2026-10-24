import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-5 pb-16 pt-12 sm:px-8 md:grid-cols-[1.3fr_1fr] md:gap-10 md:pb-24 md:pt-20">
        <div className="order-2 md:order-1">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Independent recommendations
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            The 5 best tools, hand-picked for you
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            No endless lists. Every category gets exactly five tools, ranked 1 to 5, so you can choose with
            confidence and get back to work.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#categories"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Browse categories
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <Link
              href="/how-we-choose"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-border px-6 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-accent"
            >
              How we choose
            </Link>
          </div>
        </div>

        <div aria-hidden="true" className="order-1 flex justify-start md:order-2 md:justify-end">
          <div className="relative">
            <span className="block select-none text-[9rem] font-bold leading-[0.8] tracking-tighter text-primary sm:text-[12rem] md:text-[18rem] lg:text-[22rem]">
              5
            </span>
            <span className="absolute -bottom-2 left-1 hidden text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground md:block">
              Ranked 1 to 5
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
