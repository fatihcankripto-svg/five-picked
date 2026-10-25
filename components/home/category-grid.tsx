import { categories } from '@/data/categories'
import { CategoryCard } from '@/components/category-card'
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
          Nine categories. Each one leads to a short, ranked list of five tools worth your time.
        </p>
        <FiveDots className="mt-6" />
      </div>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <li key={category.slug}>
            <CategoryCard
              href={`/${category.slug}`}
              slug={category.slug}
              name={category.name}
              description={category.description}
              meta={category.subcategories ? '5 categories · 5 picks each' : '5 picks'}
              number={String(index + 1).padStart(2, '0')}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
