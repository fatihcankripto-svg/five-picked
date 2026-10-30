import Link from 'next/link'
import type { Metadata } from 'next'
import { blogPosts } from '@/lib/blog-pages'
import { getAllBlogCategories, readingTimeMinutes } from '@/lib/blog-utils'

export const metadata: Metadata = {
  title: 'Blog — FIVE PICKED',
  description: 'Plain-English buying guides and tool comparisons. Tested picks, honest verdicts, no fluff.',
  alternates: { canonical: 'https://fivepicked.com/blog' },
}

type BlogPageProps = {
  searchParams: Promise<{ category?: string }>
}

export default async function BlogIndexPage({ searchParams }: BlogPageProps) {
  const resolvedParams = await searchParams
  const activeCategory = resolvedParams?.category ?? 'All'
  const categories = ['All', ...getAllBlogCategories(blogPosts)]

  const filtered =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory)

  const sorted = [...filtered].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mb-10">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Blog
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Guides that actually help you choose
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Tested picks, side-by-side comparisons, and plain-English buying
          guides. Every article links back to the tools and lists it mentions.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          {blogPosts.length} guides published · updated regularly
        </p>
      </header>

      <nav aria-label="Filter by category" className="mb-10 flex flex-wrap gap-2">
        {categories.map((cat) => {
          const isActive = cat === activeCategory
          const href = cat === 'All' ? '/blog' : `/blog?category=${encodeURIComponent(cat)}`
          return (
            <Link
              key={cat}
              href={href}
              className={
                isActive
                  ? 'rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm'
                  : 'rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-muted'
              }
            >
              {cat}
            </Link>
          )
        })}
      </nav>

      <ul className="grid gap-8">
        {sorted.map((post) => {
          const minutes = readingTimeMinutes(post.content)
          return (
            <li key={post.slug}>
              <article className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:border-primary/50 hover:shadow-md">
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="rounded-full bg-muted px-3 py-1 font-medium text-foreground">
                    {post.category}
                  </span>
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric', month: 'long', day: 'numeric',
                    })}
                  </time>
                  <span aria-hidden="true">·</span>
                  <span>{minutes} min read</span>
                </div>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary focus:outline-none focus-visible:underline"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-semibold text-primary hover:opacity-80"
                  >
                    Read the guide →
                  </Link>
                  <Link
                    href={post.relatedListPath}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    {post.relatedListLabel}
                  </Link>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
      {sorted.length === 0 && (
        <p className="mt-12 text-center text-muted-foreground">No guides in this category yet.</p>
      )}
    </main>
  )
}
