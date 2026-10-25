import Link from 'next/link'
import { categories } from '@/data/categories'

export function CategoryMarquee() {
  return (
    <section aria-label="All categories" className="border-b border-border bg-secondary/30">
      <div className="fp-marquee overflow-hidden py-4">
        <div className="fp-marquee-track">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
              className={`flex shrink-0 items-center gap-3 pr-3 ${copy === 1 ? 'fp-marquee-dup' : ''}`}
            >
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/${category.slug}`}
                    tabIndex={copy === 1 ? -1 : undefined}
                    className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <span className="font-bold text-primary">5</span>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
