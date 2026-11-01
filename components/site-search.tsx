'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Search, X } from 'lucide-react'
import { prepareSearch, searchKinds, searchSite, type PreparedSearchEntry, type SearchEntry, type SearchKind } from '@/lib/site-search'

let cachedIndex: Promise<PreparedSearchEntry[]> | null = null
function loadIndex() {
  if (!cachedIndex) cachedIndex = fetch('/site-search.json').then(async (response) => {
    if (!response.ok) throw new Error('Search index unavailable')
    const data: { version: number; entries: SearchEntry[] } = await response.json()
    if (data.version !== 1 || !Array.isArray(data.entries)) throw new Error('Invalid search index')
    return prepareSearch(data.entries)
  }).catch((error) => { cachedIndex = null; throw error })
  return cachedIndex
}

export function SiteSearch({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const firstResultRef = useRef<HTMLAnchorElement>(null)
  const [query, setQuery] = useState('')
  const [kind, setKind] = useState<SearchKind | 'all'>('all')
  const [entries, setEntries] = useState<PreparedSearchEntry[]>([])
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle')
  const [retry, setRetry] = useState(0)
  const [resultLimit, setResultLimit] = useState(12)
  const results = useMemo(() => searchSite(entries, query, kind), [entries, query, kind])
  const visible = results.slice(0, resultLimit)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) { dialog.showModal(); inputRef.current?.focus(); inputRef.current?.select() }
    else if (!open && dialog.open) dialog.close()
  }, [open])

  useEffect(() => {
    if (!open) return
    let active = true
    setStatus('loading')
    loadIndex().then((index) => { if (active) { setEntries(index); setStatus('ready') } }).catch(() => { if (active) setStatus('error') })
    return () => { active = false }
  }, [open, retry])

  useEffect(() => {
    function shortcut(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k' && !event.altKey && !event.repeat) {
        event.preventDefault()
        onOpenChange(!open)
      }
    }
    document.addEventListener('keydown', shortcut)
    return () => document.removeEventListener('keydown', shortcut)
  }, [open, onOpenChange])

  return <>
    <button type="button" aria-label="Search the site" aria-haspopup="dialog" aria-controls="site-search-dialog" aria-expanded={open} aria-keyshortcuts="Control+k Meta+k" title="Search the site (Ctrl+K or ⌘K)" onClick={() => onOpenChange(true)} className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg border border-border px-3 text-sm text-muted-foreground hover:bg-accent hover:text-foreground lg:w-32 lg:justify-start">
      <Search aria-hidden="true" className="size-4" /><span className="hidden lg:inline">Search...</span>
    </button>
    <dialog ref={dialogRef} id="site-search-dialog" aria-labelledby="site-search-heading" aria-describedby="site-search-help" onCancel={(event) => { event.preventDefault(); onOpenChange(false) }} onClose={() => onOpenChange(false)} onClick={(event) => {
      if (event.target !== event.currentTarget) return
      const box = event.currentTarget.getBoundingClientRect()
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) onOpenChange(false)
    }} className="fixed inset-0 m-auto max-h-[85dvh] w-[calc(100%-2rem)] max-w-2xl overflow-hidden rounded-xl border border-border bg-background p-0 text-foreground shadow-2xl backdrop:bg-background/80">
      <div className="border-b border-border p-5">
        <div className="flex items-center justify-between gap-4">
          <h2 id="site-search-heading" className="text-xl font-semibold">Search FIVE PICKED</h2>
          <button type="button" aria-label="Close search" onClick={() => onOpenChange(false)} className="flex size-10 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground"><X aria-hidden="true" className="size-5" /></button>
        </div>
        <p id="site-search-help" className="mt-2 text-sm text-muted-foreground">Find companies, categories, guides and tools. Search stays in your browser.</p>
        <label htmlFor="site-search-query" className="sr-only">Search companies and pages</label>
        <input ref={inputRef} id="site-search-query" type="search" autoComplete="off" spellCheck={false} maxLength={100} value={query} onChange={(event) => { setQuery(event.target.value); setResultLimit(12) }} placeholder="Company, topic or question" aria-controls="site-search-results" onKeyDown={(event) => {
          if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); onOpenChange(false); return }
          if (visible.length && event.key === 'ArrowDown') { event.preventDefault(); firstResultRef.current?.focus() }
          if (visible.length && event.key === 'Enter') { event.preventDefault(); firstResultRef.current?.click() }
        }} className="mt-4 w-full rounded-lg border border-border bg-background p-3 text-base text-foreground" />
        <label htmlFor="site-search-kind" className="mt-3 block text-sm text-muted-foreground">Content type</label>
        <select id="site-search-kind" value={kind} onChange={(event) => { setKind(event.target.value as SearchKind | 'all'); setResultLimit(12) }} className="mt-1 w-full rounded-lg border border-border bg-background p-2 text-sm text-foreground">
          <option value="all">Everything</option>{Object.entries(searchKinds).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
        </select>
      </div>
      <div className="max-h-[50dvh] overflow-y-auto overscroll-contain p-5">
        <p role="status" aria-live="polite" className="mb-3 text-sm text-muted-foreground">{status === 'loading' ? 'Loading site search...' : status === 'error' ? 'Search is temporarily unavailable.' : query.trim().length < 2 ? 'Enter at least two characters to search.' : `${results.length} ${results.length === 1 ? 'result' : 'results'}${results.length > visible.length ? `. Showing the first ${visible.length}` : ''}.`}</p>
        {status === 'error' && <div className="flex flex-wrap items-center gap-4 text-sm"><button type="button" onClick={() => setRetry((value) => value + 1)} className="rounded-lg border border-border px-3 py-2">Try again</button><a href="/categories" onClick={() => onOpenChange(false)} className="text-primary underline underline-offset-4">Browse categories</a></div>}
        {status === 'ready' && query.trim().length >= 2 && results.length === 0 && <p className="text-sm text-muted-foreground">No matches. Try a company name, fewer words or a different content type.</p>}
        <ul id="site-search-results" className="space-y-2">{status === 'ready' && visible.map((result, index) => <li key={result.id}>
          <a ref={index === 0 ? firstResultRef : undefined} href={result.href} onClick={() => onOpenChange(false)} className="block rounded-lg border border-border p-4 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            <span className="text-xs font-medium uppercase tracking-wide text-primary">{searchKinds[result.kind]}</span>
            <span className="mt-1 block font-semibold text-foreground">{result.title}</span>
            <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{result.description}</span>
          </a>
        </li>)}</ul>
        {status === 'ready' && results.length > visible.length && <button type="button" onClick={() => setResultLimit((limit) => limit + 12)} className="mt-4 w-full rounded-lg border border-border px-4 py-3 text-sm font-semibold hover:bg-accent">Show more results</button>}
      </div>
    </dialog>
  </>
}
