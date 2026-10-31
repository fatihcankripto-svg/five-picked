import { editorialIdentity, editorialUpdateNote } from '@/lib/editorial-identity'
import { pageMetadata } from '@/lib/metadata'
import { socialImages } from '@/lib/site'
import { formatDate } from '@/lib/site'
import { RelatedContent } from '@/components/related-content'
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
  return pageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `https://fivepicked.com/blog/${post.slug}` },
    openGraph: { images: socialImages,
      title: post.metaTitle, description: post.metaDescription,
      url: `https://fivepicked.com/blog/${post.slug}`, siteName: 'FIVE PICKED',
      type: 'article', publishedTime: post.publishedAt, modifiedTime: post.lastReviewedAt, authors: [post.author],
    },
    twitter: { images: socialImages, card: 'summary_large_image', title: post.metaTitle, description: post.metaDescription },
  })
}

function ArticleJsonLd({ post }: { post: BlogPost }) {
  const data = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title,
    description: post.metaDescription, datePublished: post.publishedAt, dateModified: post.lastReviewedAt,
    author: { '@type': 'Organization', name: post.author, description: post.authorBio, url: editorialIdentity.url },
    publisher: { '@type': 'Organization', name: 'FIVE PICKED', logo: { '@type': 'ImageObject', url: 'https://fivepicked.com/icon.svg' } },
    mainEntityOfPage: {
      '@type': 'WebPage', '@id': `https://fivepicked.com/blog/${post.slug}`,
      lastReviewed: post.lastReviewedAt,
      reviewedBy: { '@type': 'Organization', name: post.author, description: post.authorBio, url: editorialIdentity.url },
    },
    ...(post.dataset ? { hasPart: { '@type': 'Dataset', '@id': post.dataset['@id'] } } : {}),
    keywords: post.keywords.join(', '), articleSection: post.category, inLanguage: 'en',
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}

function FaqJsonLd({ post }: { post: BlogPost }) {
  if (!post.faqs.length) return null
  // Existing FAQ records can differ from the published copy. Describe the
  // visible FAQ section without rewriting either source of editorial content.
  const section = post.content.split('<h2>Frequently asked questions</h2>')[1]?.split('<h2>')[0] ?? ''
  const plainText = (html: string) => html.replace(/<[^>]*>/g, '').replace(/&(#x[0-9a-f]+|#\d+|amp|quot|apos|lt|gt|nbsp);/gi, (entity, code: string) => {
    if (code.startsWith('#')) return String.fromCodePoint(code[1].toLowerCase() === 'x' ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10))
    return ({ amp: '&', quot: '"', apos: "'", lt: '<', gt: '>', nbsp: ' ' } as Record<string, string>)[code.toLowerCase()] ?? entity
  }).trim()
  const questions = [...section.matchAll(/<h3>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/g)]
  if (!questions.length) return null
  const data = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: questions.map(([, question, answer]) => ({
      '@type': 'Question', name: plainText(question),
      acceptedAnswer: { '@type': 'Answer', text: plainText(answer) },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const headings: { id: string; label: string }[] = []
  const articleHtml = post.content.replace(/<h2>(.*?)<\/h2>/g, (_, label: string) => {
    const id = `section-${headings.length + 1}`
    headings.push({ id, label: label.replace(/<[^>]*>/g, '') })
    return `<h2 id="${id}">${label}</h2>`
  })
  const minutes = readingTimeMinutes(post.content)
  const related = getRelatedPosts(post, ['2026-web-hosting-price-index', '2026-vpn-price-index', '2026-online-course-price-index'].includes(post.slug) ? blogPosts.filter((entry) => entry.relatedListPath === post.relatedListPath) : blogPosts, 3)

  return (
    <>
      <ArticleJsonLd post={post} />
      {post.dataset && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(post.dataset).replace(/</g, '\\u003c') }} />}
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
            <time dateTime={post.updatedAt}>
              Updated {formatDate(post.updatedAt)}
            </time>
            <span aria-hidden="true">·</span><span>{minutes} min read</span>
            <span aria-hidden="true">·</span><span>{post.author}</span>
          </div>
        </header>

        <nav aria-label="On this page" className="mt-8 rounded-xl border border-border p-5"><p className="font-semibold">On this page</p><ul className="mt-3 space-y-2 text-sm">{headings.map((heading) => <li key={heading.id}><a href={`#${heading.id}`} className="text-primary underline underline-offset-4">{heading.label}</a></li>)}</ul></nav>
        <div
          className="prose prose-invert mt-10 max-w-none prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: articleHtml }}
        />

        <aside aria-labelledby="about-author" className="mt-12 rounded-xl border border-border bg-muted/30 p-5">
          <h2 id="about-author" className="text-sm font-semibold text-foreground">About {post.author}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.authorBio}</p>
          <p className="mt-3 text-sm text-muted-foreground">Last reviewed: <time dateTime={post.lastReviewedAt}>{new Date(`${post.lastReviewedAt}T00:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</time></p>
          <p className="mt-2 text-sm text-muted-foreground">Reviewed by: {post.author}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            FIVE PICKED is an independent recommendation site. Our recommendations explain product fit and trade-offs using editorial research. We use official sources, published data and credited third-party research rather than our own hands-on tests. Check the official product website for current prices and limits. We never rank a tool higher because of a partnership —{' '}
            <Link href="/how-we-choose" className="font-medium text-primary hover:opacity-80">How this article was researched</Link>
          </p>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: <time dateTime={post.lastReviewedAt}>{post.lastReviewedAt}</time></p>
          <h2 id="what-changed" className="text-sm font-semibold text-foreground">What changed</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{editorialUpdateNote}</p>
        </aside>

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
      <RelatedContent path={`/blog/${post.slug}`} />
    </article>
    </>
  )
}
