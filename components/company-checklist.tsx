'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { PaymentCompany, PaymentFact } from '@/lib/before-you-pay'
import { paymentChecksFor } from '@/lib/payment-checks'

function displayDate(iso: string) {
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`))
}

function Fact({ fact, missing }: { fact: PaymentFact; missing: string }) {
  return <section className="rounded-lg border border-border p-4">
    <h2 className="font-semibold text-foreground">{fact.label}</h2>
    {fact.recorded ? <>
      {fact.paragraphs.map((text, index) => <p key={index} className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>)}
      {fact.checkedAt && <p className="mt-2 text-xs text-muted-foreground">Source record checked <time dateTime={fact.checkedAt}>{displayDate(fact.checkedAt)}</time>.</p>}
    </> : <p className="mt-2 text-sm leading-relaxed text-muted-foreground"><strong className="text-foreground">Not recorded here.</strong> {missing}</p>}
  </section>
}

export function CompanyChecklist({ company }: { company: PaymentCompany }) {
  const [checked, setChecked] = useState<Set<number>>(() => new Set())
  const [copyMessage, setCopyMessage] = useState('')
  const [manualLink, setManualLink] = useState('')
  const checks = paymentChecksFor(company)
  const isTravel = company.categories.some((c) => c.slug === 'travel')

  async function copyLink() {
    const url = new URL('/before-you-pay', window.location.origin)
    url.hash = company.slug
    try {
      await navigator.clipboard.writeText(url.href)
      setManualLink('')
      setCopyMessage('Link copied. Your checked boxes are not included.')
    } catch {
      setManualLink(url.href)
      setCopyMessage('Copy the link below. Your checked boxes are not included.')
    }
  }

  return <div className="mt-4 space-y-5 border-t border-border pt-5">
    <p className="text-sm text-muted-foreground">{company.description}</p>
    {company.roleNote && <p className="rounded-lg border border-border p-4 text-sm text-muted-foreground">{company.roleNote}</p>}
    <div className="grid gap-3">
      <Fact fact={company.price} missing="Open the official price source before paying." />
      <Fact fact={company.access} missing="Confirm whether the selected offer has a free plan, a preview or a trial, and whether payment details are required." />
      <Fact fact={company.renewal} missing="Ask the provider for the renewal amount, how to cancel and which payments can be refunded. Do not assume cancellation also requests a refund." />
      {company.renewal.recorded && <p className="text-sm text-muted-foreground">{isTravel ? 'Confirm the change and refund rules for your selected fare and service package.' : 'These notes may cover only part of the offer. Confirm the next invoice, cancellation steps and refund eligibility for your selected plan.'}</p>}
      <Fact fact={company.limits} missing="Check usage, seats, devices, exports and any extra charges that apply to your intended use." />
    </div>

    {company.extra.map((extra) => <details key={extra.label} className="rounded-lg border border-border p-4">
      <summary className="cursor-pointer font-semibold text-foreground">{extra.label}</summary>
      {extra.paragraphs.map((text, index) => <p key={index} className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>)}
      {company.access.checkedAt && <p className="mt-2 text-xs text-muted-foreground">Source record checked <time dateTime={company.access.checkedAt}>{displayDate(company.access.checkedAt)}</time>.</p>}
    </details>)}

    <details className="rounded-lg border border-border p-4">
      <summary className="cursor-pointer font-semibold text-foreground">Fit and trade-offs from our shortlist</summary>
      <p className="mt-3 text-sm text-muted-foreground"><strong className="text-foreground">Who it suits:</strong> {company.audience}</p>
      <p className="mt-3 text-sm text-muted-foreground"><strong className="text-foreground">Keep in mind:</strong> {company.caution}</p>
      <p className="mt-2 text-xs text-muted-foreground">Published shortlist updated <time dateTime={company.shortlistUpdatedAt}>{displayDate(company.shortlistUpdatedAt)}</time>. These are editorial notes, not a product test.</p>
    </details>

    <section aria-labelledby={`sources-${company.slug}`}>
      <h2 id={`sources-${company.slug}`} className="font-semibold text-foreground">Official sources</h2>
      <p className="mt-2 text-sm text-muted-foreground">These links support the dated records above. Open them to check the offer available to you now.</p>
      <ul className="mt-3 space-y-2 text-sm">{company.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">{source.label}<span className="sr-only"> (opens in a new tab)</span></a></li>)}</ul>
    </section>

    <fieldset className="rounded-xl border border-border bg-muted/30 p-4">
      <legend className="px-1 font-semibold text-foreground">Your five checks</legend>
      <p className="mb-4 text-sm text-muted-foreground">Tick each box after you have checked it. These are your reminders, not checks performed by FIVE PICKED.</p>
      <div className="space-y-3">{checks.map((label, index) => <label key={label} className="flex cursor-pointer items-start gap-3 text-sm text-foreground">
        <input type="checkbox" checked={checked.has(index)} onChange={(event) => {
          const isChecked = event.target.checked
          setChecked((previous) => { const next = new Set(previous); if (isChecked) next.add(index); else next.delete(index); return next })
        }} className="mt-1 size-4 shrink-0 accent-primary" />
        <span>{label}</span>
      </label>)}</div>
      <p role="status" className="mt-4 text-sm font-medium text-foreground">{checked.size} of {checks.length} checks completed by you.{checked.size === checks.length && ' Checklist complete. Confirm the final offer before accepting it.'}</p>
      <button type="button" onClick={() => setChecked(new Set())} disabled={checked.size === 0} className="mt-3 rounded-md border border-border px-3 py-2 text-sm text-foreground disabled:opacity-50">Reset my checks</button>
    </fieldset>

    <p className="text-sm text-muted-foreground">Your ticks stay only while this page is open. They are not saved or sent to us.</p>
    <div className="flex flex-wrap gap-3">
      <a href={company.outbound.href} target="_blank" rel={company.outbound.rel} className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">Visit {company.name}<span className="sr-only"> (opens in a new tab)</span></a>
      <button type="button" onClick={copyLink} className="min-h-11 rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground">Copy company link</button>
    </div>
    <p role="status" className="text-sm text-muted-foreground">{copyMessage}</p>
    {manualLink && <label className="block text-sm text-foreground">Company link<input readOnly value={manualLink} onFocus={(event) => event.target.select()} className="mt-2 w-full rounded-lg border border-border bg-background p-3 text-foreground" /></label>}
    <section aria-labelledby={`guides-${company.slug}`}>
      <h2 id={`guides-${company.slug}`} className="font-semibold text-foreground">Read more before deciding</h2>
      <ul className="mt-3 space-y-2 text-sm">{company.guides.map((guide) => <li key={guide.href}><Link href={guide.href} className="text-primary underline underline-offset-4">{guide.label}</Link></li>)}</ul>
    </section>
  </div>
}

