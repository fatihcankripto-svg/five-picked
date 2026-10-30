import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getBlogPost, getAllBlogSlugs, blogPosts, type BlogPost } from '@/lib/blog-pages'
import { readingTimeMinutes, getRelatedPosts } from '@/lib/blog-utils'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `https://fivepicked.com/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://fivepicked.com/blog/${post.slug}`,
      siteName: 'FIVE PICKED',
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    },
  }
}

function ArticleJsonLd({ post }: { post: BlogPost }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'FIVE PICKED',
      logo: {
        '@type': 'ImageObject',
        url: 'https://fivepicked.com/icon.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://fivepicked.com/blog/${post.slug}`,
    },
    keywords: post.keywords.join(', '),
    articleSection: post.category,
    inLanguage: 'en',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

function FaqJsonLd({ post }: { post: BlogPost }) {
  if (!post.faqs.length) return null
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

function BreadcrumbJsonLd({ post }: { post: BlogPost }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fivepicked.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://fivepicked.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://fivepicked.com/blog/${post.slug}` },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const minutes = readingTimeMinutes(post.content)
  const related = getRelatedPosts(post, blogPosts, 3)

  return (
    <>
      <ArticleJsonLd post={post} />
      <FaqJsonLd post={post} />
      <BreadcrumbJsonLd post={post} />

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-slate-700">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="hover:text-slate-700">Blog</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-700">{post.category}</li>
          </ol>
        </nav>

        <header>
          <p className="text-sm font-medium uppercase tracking-widest text-amber-600">
            {post.category}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span aria-hidden="true">·</span>
            <span>{minutes} min read</span>
            <span aria-hidden="true">·</span>
            <span>{post.author}</span>
          </div>
        </header>

        <div
          className="prose prose-slate mt-10 max-w-none prose-headings:tracking-tight prose-a:text-amber-700 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-semibold text-slate-900">
            About {post.author}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            FIVE PICKED is an independent recommendation site. Every top-5 list
            is written by editors who test the tools, verify pricing against
            official sources, and update the picks as products change. We never
            rank a tool higher because of a partnership —{' '}
            <Link href="/how-we-choose" className="font-medium text-amber-700 hover:text-amber-800">
              read how we choose
            </Link>
            .
          </p>
        </div>

        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold text-slate-900">
              Related guides
            </h2>
            <ul className="mt-4 grid gap-4">
              {related.map((rel) => (
                <li key={rel.slug}>
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="group block rounded-lg border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:bg-slate-50"
                  >
                    <p className="text-xs font-medium uppercase tracking-widest text-amber-600">
                      {rel.category}
                    </p>
                    <p className="mt-1 font-semibold text-slate-900 group-hover:text-amber-700">
                      {rel.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">{rel.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <footer className="mt-12 border-t border-slate-200 pt-8">
          <h2 className="text-lg font-semibold text-slate-900">
            Keep exploring
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {post.relatedLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="text-sm font-medium text-amber-700 hover:text-amber-800"
                >
                  {link.label} →
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm text-slate-600">
              <strong className="text-slate-900">Want the full list?</strong>{' '}
              See{' '}
              <Link
                href={post.relatedListPath}
                className="font-medium text-amber-700 hover:text-amber-800"
              >
                {post.relatedListLabel}
              </Link>{' '}
              for the ranked top 5, or take the{' '}
              <Link
                href="/quiz"
                className="font-medium text-amber-700 hover:text-amber-800"
              >
                3-question quiz
              </Link>{' '}
              to find what fits you.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
              }
