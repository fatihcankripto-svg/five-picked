import Link from 'next/link'
import { comparePages } from '@/lib/compare-pages'
import { blogPosts } from '@/lib/blog-pages'

const guideLinks = [
  { href: '/vpn-and-security', title: 'Compare five VPN providers', summary: 'Understand privacy, device support and the limits of a VPN before subscribing.' },
  { href: '/ai-tools/video-and-voice', title: 'Explore AI video and voice tools', summary: 'Choose by the video you need: a presenter, narration or an edited recording.' },
  { href: '/web-hosting-and-domains', title: 'Compare hosting providers', summary: 'Start with your maintenance needs, traffic and total renewal cost.' },
]
export function EditorialSections() {
  const latest = [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, 3)
  return <>
    <section aria-labelledby="featured-heading" className="mx-auto max-w-6xl px-5 pt-20 sm:px-8">
      <h2 id="featured-heading" className="text-3xl font-semibold tracking-tight">Compare before you commit</h2>
      <p className="mt-4 max-w-2xl text-muted-foreground">Practical differences, clear trade-offs and a starting point for your shortlist.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">{comparePages.slice(0, 3).map((page) => <Link key={page.slug} href={`/compare/${page.slug}`} className="rounded-2xl border border-border bg-card p-6 hover:border-primary/50"><h3 className="text-lg font-semibold">{page.a.name} vs {page.b.name}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{page.framing}</p></Link>)}</div>
      <p className="mt-6"><Link href="/compare" className="text-primary underline underline-offset-4">All comparisons →</Link></p>
      <h2 className="mt-16 text-3xl font-semibold tracking-tight">Start with the right questions</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">{guideLinks.map((guide) => <Link key={guide.href} href={guide.href} className="rounded-2xl border border-border p-6 hover:border-primary/50"><h3 className="text-lg font-semibold">{guide.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{guide.summary}</p></Link>)}</div>
      <p className="mt-6"><Link href="/blog" className="text-primary underline underline-offset-4">All blog guides →</Link></p>
    </section>
    <section aria-labelledby="latest-heading" className="mx-auto max-w-6xl px-5 pt-20 sm:px-8"><h2 id="latest-heading" className="text-3xl font-semibold tracking-tight">Latest from the blog</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{latest.map((post) => <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-2xl border border-border bg-card p-6 hover:border-primary/50"><p className="text-xs uppercase tracking-widest text-primary">{post.category}</p><h3 className="mt-3 text-lg font-semibold">{post.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p></Link>)}</div><p className="mt-6"><Link href="/blog" className="text-primary underline underline-offset-4">All articles →</Link></p></section>
  </>
}
