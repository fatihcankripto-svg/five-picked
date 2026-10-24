import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionMarker } from '@/components/section-marker'

export function AboutTeaser() {
  return (
    <section aria-labelledby="about-heading" className="mx-auto max-w-6xl px-5 pt-24 sm:px-8 md:pt-32">
      <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <div>
          <SectionMarker label="About" />
          <h2
            id="about-heading"
            className="mt-5 text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl"
          >
            Why only five?
          </h2>
        </div>
        <div className="flex flex-col gap-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            Most &ldquo;best of&rdquo; lists are long, padded and hard to trust. FIVE PICKED exists to do the
            opposite: give you a small, considered shortlist and explain who each option is really for.
          </p>
          <p>
            We are independent. We do not accept payment for placement, and we tell you plainly when a link may
            earn us a commission.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline hover:underline-offset-4"
          >
            More about FIVE PICKED
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
