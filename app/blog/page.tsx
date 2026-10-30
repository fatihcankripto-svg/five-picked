import Link from 'next/link'
import type { Metadata } from 'next'
import { blogPosts } from '@/lib/blog-pages'

export const metadata: Metadata = {
  title: 'Blog — FIVE PICKED',
  description:
    'Plain-English buying guides and tool comparisons. Tested picks, honest verdicts, no fluff.',
  alternates: { canonical: 'https://fivepicked.com/blog' },
  openGraph: {
    title: 'Blog — FIVE PICKED',
    description:
      'Plain-English buying guides and tool comparisons. Tested picks, honest verdicts, no fluff.',
    url: 'https://fivepicked.com/blog',
    siteName: 'FIVE PICKED',
    type: 'website',
  },
}

export default function BlogIndexPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mb-12">
        <p className="text-sm font-medium uppercase tracking-widest text-amber-600">
          Blog
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Guides that actually help you choose
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
          Tested picks, side-by-side comparisons, and plain-English buying
          guides. Every article links back to the tools and lists it mentions.
        </p>
      </header>

      <ul className="grid gap-8">
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md">
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
                  {post.category}
                </span>
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-amber-700 focus:outline-none focus-visible:underline"
                >
                  {post.title}
                </Link>
              </h2>

              <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
                {post.excerpt}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-semibold text-amber-700 hover:text-amber-800"
                >
                  Read the guide →
                </Link>
                <Link
                  href={post.relatedListPath}
                  className="text-sm font-medium text-slate-500 hover:text-slate-700"
                >
                  {post.relatedListLabel}
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </main>
  )
}
