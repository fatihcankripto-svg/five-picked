import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowRight } from 'lucide-react'
import { catalogStats, categoryCountLabel } from '@/lib/category-stats'

const delay = (i: number) => ({ '--fp-i': i }) as CSSProperties

const stats = [
  { value: catalogStats.categories, label: catalogStats.categories === 1 ? 'Category' : 'Categories' },
  { value: catalogStats.tools, label: 'Hand-picked tools' },
  { value: 5, label: 'Picks in every list' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div aria-hidden="true" className="fp-aurora pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="fp-grid-bg pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-4 px-5 pb-14 pt-8 sm:px-8 md:grid-cols-[1.2fr_1fr] md:gap-10 md:pb-20 md:pt-20">
        <div className="order-2 md:order-1">
          <p
            className="fp-reveal inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary"
            style={delay(0)}
          >
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-primary shadow-[0_0_10px_2px] shadow-primary/70"
            />
            Independent recommendations
          </p>
          <h1
            className="fp-reveal mt-6 text-[1.95rem] font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            style={delay(1)}
          >
            <span className="block">The 5 best tools,</span>
            <span className="block">
              <span className="whitespace-nowrap">hand-picked</span> for you
            </span>
          </h1>
          <p
            className="fp-reveal mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
            style={delay(2)}
          >
            No endless lists. Every published list has exactly five tools, ranked 1 to 5, so you can choose with
            confidence and get back to work.
          </p>
          <div className="fp-reveal mt-9 flex flex-col gap-3 sm:flex-row" style={delay(3)}>
            <a
              href="#categories"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px] shadow-primary/60 transition-all hover:-translate-y-0.5 hover:opacity-95"
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

          <dl className="fp-reveal mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-6" style={delay(4)}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="fp-gradient-text block text-3xl font-bold tracking-tight sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{catalogStats.lists} complete lists across {categoryCountLabel(catalogStats.categories)}. Categories can contain several lists.</p>
        </div>

        <div
          aria-hidden="true"
          className="fp-reveal order-1 flex justify-center md:order-2 md:justify-end"
          style={delay(3)}
        >
          <div className="relative flex aspect-square w-[12.5rem] items-center justify-center sm:w-[20rem] md:w-[24rem] lg:w-[28rem]">
            <span className="absolute inset-[12%] rounded-full bg-primary/30 blur-3xl" />

            <div className="absolute inset-0 rounded-full border border-dashed border-primary/30">
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="absolute inset-0"
                  style={{ transform: `rotate(${i * 72}deg)` }}
                >
                  <span className="fp-dot absolute left-1/2 top-0 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
                </span>
              ))}
            </div>

            <div className="absolute inset-[10%] rounded-full border border-border" />

            <span className="fp-gradient-text relative select-none text-[7.5rem] font-bold leading-none tracking-tighter sm:text-[12.5rem] md:text-[15rem] lg:text-[18rem]">
              5
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
