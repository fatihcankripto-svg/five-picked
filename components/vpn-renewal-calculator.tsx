'use client'

import { useState } from 'react'
import observations from '@/data/vpn-price-index-2026.json'
import { firstRenewalCommitment } from '@/lib/vpn-renewal'

export function VpnRenewalCalculator() {
  const [selected, setSelected] = useState('ExpressVPN')
  const offer = observations.find((entry) => entry.provider === selected) ?? observations[0]
  const result = firstRenewalCommitment(offer)
  const money = (amount: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: offer.currency, currencyDisplay: 'code' }).format(amount)
  return <section id="vpn-renewal-calculator" aria-labelledby="vpn-renewal-heading" className="mt-8 rounded-xl border border-border bg-muted/30 p-5">
    <h2 id="vpn-renewal-heading" className="text-xl font-semibold text-foreground">Calculate the next billing commitment</h2>
    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Choose an observed offer to add its initial invoice and the next recorded renewal or top-up; currencies remain unchanged and no live price is fetched.</p>
    <label htmlFor="vpn-offer" className="mt-4 block text-sm font-semibold text-foreground">Offer from the VPN price index</label>
    <select id="vpn-offer" value={offer.provider} onChange={(event) => setSelected(event.target.value)} className="mt-2 w-full rounded-lg border border-border bg-background p-3 text-foreground">{observations.map((entry) => <option key={entry.provider} value={entry.provider}>{entry.provider} — {entry.plan}</option>)}</select>
    <p className="mt-3 text-sm text-muted-foreground">Source observation: <time dateTime={offer.checkedAt}>{offer.checkedAt}</time>. {offer.currency}. {offer.plan}.</p>
    <div aria-live="polite" className="mt-4 overflow-x-auto">
      <table className="w-full text-left text-sm"><tbody>
        <tr className="border-b border-border"><th scope="row" className="px-4 py-3 font-medium">Initial recorded invoice</th><td className="px-4 py-3">{offer.initialInvoice === null ? 'Not established in the snapshot' : money(offer.initialInvoice)}</td></tr>
        <tr className="border-b border-border"><th scope="row" className="px-4 py-3 font-medium">Next recorded invoice</th><td className="px-4 py-3">{offer.renewalInvoice === null ? 'Not established in the snapshot' : money(offer.renewalInvoice)}</td></tr>
        {result && <><tr className="border-b border-border"><th scope="row" className="px-4 py-3 font-medium">Calculated combined payment</th><td className="px-4 py-3"><output>{money(result.total)}</output></td></tr><tr><th scope="row" className="px-4 py-3 font-medium">Combined coverage</th><td className="px-4 py-3">{result.coverageMonths} months</td></tr></>}
      </tbody></table>
      {!result && <p className="mt-3 text-sm text-muted-foreground">A complete combined payment cannot be calculated because an invoice or coverage period is missing; no estimate or zero-price substitute is supplied.</p>}
    </div>
    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Calculation: initial invoice + next invoice, covering initial months + next-period months. This assumes you buy the next recorded period at the snapshot’s amount; it does not predict a current charge or imply automatic renewal. Coverage differs between offers, so these totals do not rank providers.</p>
    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{offer.renewalBasis} {offer.notes} Taxes, payment fees and optional products are not estimated.</p>
    <ul className="mt-3 space-y-2 text-sm">{offer.sources.map((source) => <li key={source.url}><a href={source.url} rel="noopener noreferrer" className="text-primary underline underline-offset-4">{source.label}</a></li>)}</ul>
  </section>
}
