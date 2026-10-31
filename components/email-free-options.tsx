import { emailFreeOptions } from '@/lib/email-free-options'

export function EmailFreeOptions() {
  return <section aria-labelledby="email-free-scope" className="mt-12 rounded-xl border border-border p-5 text-sm leading-relaxed">
    <h2 id="email-free-scope" className="text-xl font-semibold text-foreground">Verified free-plan limits and paid starting tiers</h2>
    <p className="mt-3 text-muted-foreground">Official sources checked <time dateTime="2026-10-31">October 31, 2026</time>. Prices below are USD before applicable taxes. Monthly equivalents billed annually are not cancel-anytime monthly prices. A free plan and a premium-feature trial have different limits.</p>
    <p className="mt-3 text-muted-foreground">Where a daily cap, form count or feature entitlement is not explicitly verified, it is marked as unspecified rather than assumed unlimited. Commercial features do not override consent, acceptable-use or payment-processing conditions.</p>
    {emailFreeOptions.map((option) => <div key={option.slug} className="mt-6 border-t border-border pt-5">
      <h3 className="font-semibold text-foreground">{option.name}: access conditions</h3>
      <dl className="mt-3 space-y-2 text-muted-foreground">
        <div><dt className="font-semibold">Subscribers and sending</dt><dd>{option.limits}</dd></div>
        <div><dt className="font-semibold">Automation, forms, testing and branding</dt><dd>{option.features}</dd></div>
        <div><dt className="font-semibold">First paid tier and billing</dt><dd>{option.paid}</dd></div>
        <div><dt className="font-semibold">Business use</dt><dd>{option.commercial}</dd></div>
      </dl>
      <ul className="mt-3 space-y-2">{option.sources.map((source) => <li key={source.url}><a href={source.url} className="text-primary underline underline-offset-4">{source.label}</a></li>)}</ul>
    </div>)}
  </section>
}
