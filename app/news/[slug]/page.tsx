import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { news, formatDate } from '@/lib/news'
import { serializeJsonLd } from '@/lib/json-ld'

type Props = { params: Promise<{ slug: string }> }
export const dynamicParams = false
export function generateStaticParams() { return news.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = news.find(item => item.slug === slug)
  if (!item) notFound()
  const url = `https://fivepicked.com/news/${item.slug}`
  const description = item.paragraphs[0].slice(0, 157).replace(/\s+\S*$/, '') + '…'
  return { title: { absolute: `${item.title} | FIVE PICKED` }, description, alternates: { canonical: url }, openGraph: { title: item.title, description, url, type: 'article', publishedTime: '2026-11-05T17:00:54Z', modifiedTime: '2026-11-05T17:00:54Z' }, twitter: { card: 'summary', title: item.title, description } }
}
export default async function NewsArticle({ params }: Props) {
  const { slug } = await params
  const item = news.find(item => item.slug === slug)
  if (!item) notFound()
  const more = news.filter(other => other.slug !== slug).sort((a,b)=>Number(b.company===item.company)-Number(a.company===item.company)).slice(0,3)
  const url = `https://fivepicked.com/news/${item.slug}`
  return <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
    <nav aria-label="Breadcrumb" className="mb-8 flex gap-2 text-sm text-muted-foreground"><Link href="/" className="hover:text-primary">Home</Link><span>/</span><Link href="/news" className="hover:text-primary">News</Link><span>/</span><span aria-current="page" className="truncate">{item.company}</span></nav>
    <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_260px]">
      <article className="min-w-0">
        <header><p className="text-xs font-semibold uppercase tracking-widest text-primary">{item.company} / {item.category}</p><h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">{item.title}</h1><div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground"><span>By FivePicked Editorial</span><span>Published November 5, 2026</span><span>Announcement: <time dateTime={item.date}>{formatDate(item.date)}</time></span></div></header>
        <figure className="my-7"><div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border"><Image src={`/news/${item.slug}.svg`} alt="" fill priority unoptimized className="object-cover" /></div><figcaption className="mt-2 text-xs text-muted-foreground">FivePicked editorial illustration.</figcaption></figure>
        <div className="max-w-prose space-y-5">{item.paragraphs.map((paragraph,index)=><p key={index} className="text-base leading-8 text-foreground/85 sm:text-lg">{paragraph}</p>)}</div>
        <footer className="mt-8 rounded-xl border border-border bg-card p-5"><p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Original reporting source</p><a href={item.source} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-medium text-primary underline underline-offset-4">{item.sourceName} ↗<span className="sr-only"> (opens in a new tab)</span></a><p className="mt-3 text-xs leading-5 text-muted-foreground">This brief summarises the linked announcement. Company claims are attributed to their source.</p></footer>
        <div className="mt-7 flex flex-wrap justify-between gap-4 text-sm"><Link href="/news" className="font-medium text-primary hover:underline">← All headlines</Link><Link href={item.relatedHref} className="text-primary hover:underline">{item.relatedLabel} →</Link></div>
      </article>
      <aside className="border-t border-border pt-6 lg:sticky lg:top-24 lg:border-t-0 lg:pt-0"><h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Keep reading</h2><div className="mt-4 divide-y divide-border">{more.map(other=><Link key={other.slug} href={`/news/${other.slug}`} className="group block py-5 first:pt-0"><div className="relative mb-3 aspect-[16/9] overflow-hidden rounded-lg"><Image src={`/news/${other.slug}.svg`} alt="" fill unoptimized className="object-cover" /></div><p className="text-xs text-primary">{other.company}</p><h3 className="mt-1 text-base font-semibold leading-snug group-hover:text-primary">{other.title}</h3></Link>)}</div><Link href="/news" className="text-sm text-primary hover:underline">Browse all news →</Link></aside>
    </div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:serializeJsonLd([{'@context':'https://schema.org','@type':'NewsArticle',headline:item.title,datePublished:'2026-11-05T17:00:54Z',dateModified:'2026-11-05T17:00:54Z',mainEntityOfPage:url,url,inLanguage:'en',author:{'@type':'Organization',name:'FivePicked Editorial',url:'https://fivepicked.com/editorial-team'},publisher:{'@type':'Organization',name:'FIVE PICKED',url:'https://fivepicked.com'},citation:item.source},{'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://fivepicked.com'},{'@type':'ListItem',position:2,name:'News',item:'https://fivepicked.com/news'},{'@type':'ListItem',position:3,name:item.title,item:url}]}])}} />
  </div>
}
