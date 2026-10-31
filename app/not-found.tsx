import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FiveDots } from '@/components/five-dots'

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="fp-aurora pointer-events-none absolute inset-0" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 py-24 text-center sm:px-8 md:py-32">
        <span
          aria-hidden="true"
          className="fp-float fp-gradient-text select-none text-[8rem] font-bold leading-none tracking-tighter sm:text-[12rem]"
        >
          404
        </span>
        <FiveDots className="mt-6" />
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          This page isn&rsquo;t one of the five
        </h1>
        <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
          The page you are looking for does not exist or has moved. Start from one of our categories instead.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px] shadow-primary/60 transition-all hover:-translate-y-0.5 hover:opacity-95"
          >
            Back to home
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
          <Link
            href="/blog"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-border px-6 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-accent"
          >
            Read our guides
          </Link>
        </div>
      </div>
    </section>
  )
}
