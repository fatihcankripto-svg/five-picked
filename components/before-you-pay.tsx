'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import type { PaymentCompany } from '@/lib/before-you-pay'
import { matchesPaymentCompany } from '@/lib/payment-checks'

export type PaymentCompanySummary = Pick<PaymentCompany, 'slug' | 'name' | 'categories' | 'topics'>

export function BeforeYouPay({ companies }: { companies: PaymentCompanySummary[] }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const router = useRouter()
  const categories = useMemo(() => [...new Map(companies.flatMap((c) => c.categories).map((c) => [c.slug, c])).values()].sort((a, b) => a.name.localeCompare(b.name, 'en')), [companies])
  const matches = useMemo(() => companies.filter((c) => matchesPaymentCompany(c, query, category)), [companies, query, category])

  // Keep previously shared /before-you-pay#company links useful. Without JS,
  // the fragment still lands on the company's ordinary detail-page link.
  useEffect(() => {
    function followHash() {
      let slug: string
      try { slug = decodeURIComponent(window.location.hash.slice(1)) } catch { return }
      if (companies.some((c) => c.slug === slug)) router.replace(`/before-you-pay/${slug}`)
    }
    followHash()
    window.addEventListener('hashchange', followHash)
    return () => window.removeEventListener('hashchange', followHash)
  }, [companies, router])

  return <div>
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="block text-sm font-semibold text-foreground">Company name or topic
        <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Company name or topic" aria-controls="payment-companies" className="mt-2 w-full rounded-lg border border-border bg-background p-3 text-foreground" />
      </label>
      <label className="block text-sm font-semibold text-foreground">Category
        <select value={category} onChange={(event) => setCategory(event.target.value)} aria-controls="payment-companies" className="mt-2 w-full rounded-lg border border-border bg-background p-3 text-foreground">
          <option value="all">All categories</option>{categories.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
        </select>
      </label>
    </div>
    <p role="status" className="mt-4 text-sm text-muted-foreground">{matches.length} of {companies.length} companies shown. Choose a company to read its record and start your checks.</p>
    {(query || category !== 'all') && <button type="button" onClick={() => { setQuery(''); setCategory('all') }} className="mt-3 rounded-md border border-border px-3 py-2 text-sm text-foreground">Clear filters</button>}
    {matches.length === 0 && <p className="mt-4 rounded-lg border border-border p-4 text-sm text-muted-foreground">No company matches these filters. Try a shorter name or choose All categories.</p>}
    <noscript><p>Search filters need JavaScript. Every company record below can still be opened and read.</p></noscript>
    <ul id="payment-companies" className="mt-5 space-y-3">{matches.map((company) => <li id={company.slug} key={company.slug} className="scroll-mt-24 rounded-xl border border-border p-5">
      <Link href={`/before-you-pay/${company.slug}`} prefetch={false} className="font-semibold text-primary underline underline-offset-4">Check {company.name} costs and terms</Link>
      <p className="mt-2 text-sm text-muted-foreground">{company.topics.join(' · ')}</p>
    </li>)}</ul>
  </div>
}
