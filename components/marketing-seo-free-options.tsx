import { marketingSeoFreeEditorial, marketingSeoFreeOptions } from '@/lib/marketing-seo-free-options'
import { formatDate } from '@/lib/site'

export function MarketingSeoFreeOptions() {
  return <section aria-labelledby="marketing-free-scope" className="mt-12 rounded-xl border border-border p-5 text-sm leading-relaxed">
    <h2 id="marketing-free-scope" className="text-xl font-semibold text-foreground">Genuinely free, limited access, credit traps and paid features</h2>
    <dl className="mt-4 space-y-3 text-muted-foreground">
      <div><dt className="font-semibold">Genuinely free access</dt><dd>Semrush documents an ongoing limited account. Writesonic documents separate public tools. Neither is an unlimited free AI marketing suite.</dd></div>
      <div><dt className="font-semibold">Limited free evaluation</dt><dd>All five document trial routes. A trial clock, project cap, seat limit and generation allowance are different restrictions; access to a feature does not establish unlimited use.</dd></div>
      <div><dt className="font-semibold">The credit trap</dt><dd>Do not treat a paid plan’s monthly credits as free trial credits, or assume one credit equals one word. When a quota or evaluation ends, no continued free generation is promised. Unpublished quotas remain unknown, not unlimited.</dd></div>
      <div><dt className="font-semibold">Paid features and exports</dt><dd>Check ongoing optimization, AI writing, keyword data and report export separately. Semrush disables exports during toolkit trials. Surfer’s trial converts to a paid subscription unless cancelled. These are disclosed conditions, not evidence of deceptive billing.</dd></div>
    </dl>
    <p className="mt-4 text-muted-foreground">{marketingSeoFreeEditorial.authorBio} Last reviewed <time dateTime={marketingSeoFreeEditorial.lastReviewedAt}>{formatDate(marketingSeoFreeEditorial.lastReviewedAt)}</time>. Official-source research only; no account, generation or export test was performed. Unverified commercial rights are not presented as permission or prohibition.</p>
    {marketingSeoFreeOptions.map((option) => <div key={option.slug} className="mt-6 border-t border-border pt-5">
      <h3 className="font-semibold text-foreground">{option.name}: free access and restrictions</h3>
      <dl className="mt-3 space-y-2 text-muted-foreground">
        <div><dt className="font-semibold">Account, credits, projects and users</dt><dd>{option.access}</dd></div>
        <div><dt className="font-semibold">Trial and billing</dt><dd>{option.trial}</dd></div>
        <div><dt className="font-semibold">Feature and export gates</dt><dd>{option.features}</dd></div>
        <div><dt className="font-semibold">Business and commercial use</dt><dd>{option.commercial}</dd></div>
      </dl>
      <ul className="mt-3 space-y-2">{option.sources.map((source) => <li key={source.url}><a href={source.url} className="text-primary underline underline-offset-4">{source.label}</a></li>)}</ul>
    </div>)}
  </section>
}
