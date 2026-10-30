import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getBlogPost, getAllBlogSlugs, blogPosts, type BlogPost } from '@/lib/blog-pages'
import { readingTimeMinutes, getRelatedPosts } from '@/lib/blog-utils'

type PageProps = { params: Promise<{ slug: string }> }

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
      title: post.metaTitle, description: post.metaDescription,
      url: `https://fivepicked.com/blog/${post.slug}`, siteName: 'FIVE PICKED',
      type: 'article', publishedTime: post.publishedAt, modifiedTime: post.updatedAt, authors: [post.author],
    },
    twitter: { card: 'summary_large_image', title: post.metaTitle, description: post.metaDescription },
  }
}

function ArticleJsonLd({ post }: { post: BlogPost }) {
  const data = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title,
    description: post.metaDescription, datePublished: post.publishedAt, dateModified: post.updatedAt,
    author: { '@type': 'Organization', name: post.author },
    publisher: { '@type': 'Organization', name: 'FIVE PICKED', logo: { '@type': 'ImageObject', url: 'https://fivepicked.com/icon.svg' } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://fivepicked.com/blog/${post.slug}` },
    keywords: post.keywords.join(', '), articleSection: post.category, inLanguage: 'en',
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

function FaqJsonLd({ post }: { post: BlogPost }) {
  if (!post.faqs.length) return null
  const data = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question', name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

function BreadcrumbJsonLd({ post }: { post: BlogPost }) {
  const data = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fivepicked.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://fivepicked.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://fivepicked.com/blog/${post.slug}` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
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

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-foreground">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground">{post.category}</li>
          </ol>
        </nav>

        <header>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">{post.category}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{post.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
            <span aria-hidden="true">·</span><span>{minutes} min read</span>
            <span aria-hidden="true">·</span><span>{post.author}</span>
          </div>
        </header>

        <div
          className="prose prose-invert mt-10 max-w-none prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 rounded-xl border border-border bg-muted/30 p-5">
          <p className="text-sm font-semibold text-foreground">About {post.author}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            FIVE PICKED is an independent recommendation site. Our recommendations explain product fit and trade-offs using editorial research. They are not hands-on test reports unless a page includes a documented test. Check the official product website for current prices and limits. We never rank a tool higher because of a partnership —{' '}
            <Link href="/how-we-choose" className="font-medium text-primary hover:opacity-80">read how we choose</Link>.
          </p>
        </div>

        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold text-foreground">Related guides</h2>
            <ul className="mt-4 grid gap-4">
              {related.map((rel) => (
                <li key={rel.slug}>
                  <Link href={`/blog/${rel.slug}`} className="group block rounded-lg border border-border bg-card p-4 transition hover:border-primary/50 hover:bg-muted/50">
                    <p className="text-xs font-medium uppercase tracking-widest text-primary">{rel.category}</p>
                    <p className="mt-1 font-semibold text-foreground group-hover:text-primary">{rel.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{rel.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <footer className="mt-12 border-t border-border pt-8">
          <h2 className="text-lg font-semibold text-foreground">Keep exploring</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {post.relatedLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path} className="text-sm font-medium text-primary hover:opacity-80">{link.label} →</Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-xl border border-border bg-muted/30 p-5">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Want the full list?</strong> See{' '}
              <Link href={post.relatedListPath} className="font-medium text-primary hover:opacity-80">{post.relatedListLabel}</Link>{' '}
              for the ranked top 5, or take the{' '}
              <Link href="/quiz" className="font-medium text-primary hover:opacity-80">3-question quiz</Link>{' '}
              to find what fits you.
            </p>
          </div>
        </footer>
      </article>
    </>
  )
}
