import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { news, formatDate } from '@/lib/news'
import { serializeJsonLd } from '@/lib/json-ld'

export const metadata: Metadata = {
  title: { absolute: 'Latest News: AI, Software & Technology | FIVE PICKED' },
  description: 'The latest AI launches, software updates and company news. Browse the headlines and read clear, source-linked briefs.',
  alternates: { canonical: 'https://fivepicked.com/news' },
  openGraph: { title: 'Latest News | FIVE PICKED', url: 'https://fivepicked.com/news', type: 'website' },
}

export default function NewsPage() {
  const lead = news[0]
  return <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
    <nav aria-label="Breadcrumb" className="mb-7 text-sm text-muted-foreground"><Link href="/" className="hover:text-primary">Home</Link><span className="mx-2">/</span><span aria-current="page">News</span></nav>
    <header className="mb-8 border-b border-border pb-6">
      <p className="text-xs font-semibold uppercase tracking-[.22em] text-primary">The companies behind your tools</p>
      <div className="mt-3 flex flex-wrap items-end justify-between gap-4"><h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Latest news<span className="text-primary">.</span></h1><span className="text-xs text-muted-foreground">November 5, 2026 edition · {news.length} stories</span></div>
      <p className="mt-3 max-w-2xl text-muted-foreground">AI launches, company moves and what changes for the tools you use.</p>
    </header>
    <section aria-label="Leading story" className="mb-10">
      <Link href={`/news/${lead.slug}`} className="group grid overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-2 focus-visible:outline-2 focus-visible:outline-primary">
        <div className="relative aspect-[16/9] overflow-hidden"><Image src={`/news/${lead.slug}.svg`} alt="" fill priority unoptimized className="object-cover transition-transform duration-500 group-hover:scale-105" /></div>
        <div className="flex flex-col justify-center p-6 sm:p-8"><p className="text-xs font-semibold uppercase tracking-widest text-primary">Leading story / {lead.company}</p><h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight group-hover:text-primary sm:text-3xl">{lead.title}</h2><p className="mt-4 line-clamp-2 text-sm leading-6 text-muted-foreground">{lead.paragraphs[0]}</p><span className="mt-5 text-sm font-medium text-primary">Read story ↗</span></div>
      </Link>
    </section>
    <section aria-labelledby="headlines-heading">
      <div className="flex items-center justify-between border-b border-border pb-4"><h2 id="headlines-heading" className="text-xl font-semibold">All headlines</h2><span className="text-xs text-muted-foreground">Newest announcements first</span></div>
      <ol className="divide-y divide-border">
        {news.map((item,index)=><li key={item.slug} id={item.slug} className="scroll-mt-24">
          <Link href={`/news/${item.slug}`} className="group flex items-center gap-4 rounded-lg py-4 transition-colors hover:bg-accent/40 focus-visible:outline-2 focus-visible:outline-primary sm:gap-6">
            <span aria-hidden="true" className="hidden w-6 shrink-0 text-xs tabular-nums text-muted-foreground sm:block">{String(index+1).padStart(2,'0')}</span>
            <div className="relative h-[62px] w-24 shrink-0 overflow-hidden rounded-lg sm:h-20 sm:w-32"><Image src={`/news/${item.slug}.svg`} alt="" fill unoptimized className="object-cover transition-transform duration-300 group-hover:scale-105" /></div>
            <div className="min-w-0 flex-1"><p className="text-[10px] font-semibold uppercase tracking-wider text-primary sm:text-xs">{item.company}<span className="hidden font-normal text-muted-foreground sm:inline"> / {item.category}</span></p><h3 className="mt-1 text-sm font-semibold leading-snug group-hover:text-primary sm:text-lg">{item.title}</h3><time dateTime={item.date} className="mt-1 block text-xs text-muted-foreground">{formatDate(item.date)}</time></div>
            <span aria-hidden="true" className="hidden pr-3 text-xl text-muted-foreground group-hover:text-primary sm:block">↗</span>
          </Link>
        </li>)}
      </ol>
    </section>
    <p className="mt-7 border-t border-border pt-5 text-xs leading-5 text-muted-foreground">Dates refer to the original announcements. Briefs link to their primary sources. Artwork is original editorial illustration, not a photograph of the events.</p>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:serializeJsonLd({'@context':'https://schema.org','@type':'CollectionPage',name:'Latest news',url:'https://fivepicked.com/news',mainEntity:{'@type':'ItemList',itemListElement:news.map((item,index)=>({'@type':'ListItem',position:index+1,name:item.title,url:`https://fivepicked.com/news/${item.slug}`}))}})}} />
  </div>
}
