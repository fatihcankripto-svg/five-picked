import { publishedCategories } from '@/data/all-categories'
import { categoryMeta, categoryCountLabel } from '@/lib/category-stats'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { CategoryArtwork } from '@/components/home/category-artwork'
import { SectionMarker } from '@/components/section-marker'
import { FiveDots } from '@/components/five-dots'

export function CategoryGrid() {
  return (
    <section id="categories" aria-labelledby="categories-heading" className="mx-auto max-w-6xl px-5 pt-20 sm:px-8 md:pt-28">
      <div className="max-w-2xl">
        <SectionMarker label="Categories" />
        <h2
          id="categories-heading"
          className="mt-5 text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl"
        >
          Start with what you need
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Browse {categoryCountLabel(publishedCategories.length)}, from AI and hosting to learning and travel.
        </p>
        <FiveDots className="mt-6" />
      </div>

      <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {publishedCategories.slice(0, 6).map((category, index) => (
          <li key={category.slug}>
            <Link href={`/${category.slug}`} className="fp-home-category group">
              <div className="relative overflow-hidden border-b border-white/5">
                <CategoryArtwork slug={category.slug} />
                <span aria-hidden="true" className="absolute left-5 top-4 text-[10px] tracking-widest text-muted-foreground/60">0{index+1}</span>
                <ArrowUpRight aria-hidden="true" className="absolute right-5 top-4 size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">{category.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{category.description}</p>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-widest text-primary">{categoryMeta(category)}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    <p className="mt-8"><a href="/categories" className="text-primary underline underline-offset-4">Explore all {categoryCountLabel(publishedCategories.length)} →</a></p>
    </section>
  )
}
