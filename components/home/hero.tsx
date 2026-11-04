import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowRight, Clapperboard, Server, NotebookPen } from 'lucide-react'
import { HeroVisual } from '@/components/home/hero-visual'
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

      <div className="relative mx-auto grid max-w-6xl items-center gap-4 px-5 pb-10 pt-10 sm:px-8 md:grid-cols-[1.2fr_1fr] md:gap-8 md:pb-16 md:pt-16">
        <div className="min-w-0">
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
            Compare tools for the job in front of you. See who each option suits, what it costs and what to
            check before signing up.
          </p>
          <div className="fp-reveal mt-7 flex flex-col gap-3 sm:flex-row" style={delay(3)}>
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

          <nav aria-label="Start with a task" className="mt-7">
            <p className="text-xs font-medium text-muted-foreground">What are you working on?</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[{href:'/ai-tools/video-and-voice',label:'Make a video',icon:Clapperboard},{href:'/web-hosting-and-domains',label:'Build a website',icon:Server},{href:'/software-and-productivity',label:'Organize my work',icon:NotebookPen}].map(({href,label,icon:Icon})=><Link key={href} href={href} className="fp-task-link"><Icon aria-hidden="true" size={15} />{label}<ArrowRight aria-hidden="true" size={13} /></Link>)}
            </div>
          </nav>

          <dl className="fp-reveal mt-8 grid max-w-xl grid-cols-3 gap-3 border-t border-border pt-5" style={delay(4)}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="fp-gradient-text block text-3xl font-bold tracking-tight sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{catalogStats.lists} complete lists across {categoryCountLabel(catalogStats.categories)}. Categories can contain several lists.</p>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}
