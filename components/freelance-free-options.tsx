import Link from 'next/link'
import { freelanceFreeOptions, freelanceFreeLinks } from '@/lib/freelance-free-options'

export function FreelanceFreeOptions() {
  return <section aria-labelledby="freelance-free-scope" className="mt-12 rounded-xl border border-border p-5 text-sm leading-relaxed">
    <h2 id="freelance-free-scope" className="text-xl font-semibold text-foreground">Free accounts, restricted applications and the cost of earning</h2>
    <p className="mt-3 text-muted-foreground">Genuinely free account access covers the documented registration or profile features, not free client work. Limited free access can include proposal credits, bid limits, approval requirements or a required account balance. Paid upgrades and promotion tools are separate from the basic account.</p>
    <p className="mt-3 text-muted-foreground">The commission trap is assuming “free to join” means keeping the whole invoice. Check the earnings deduction, proposal spend, introduction fee, payout minimum and transfer cost separately. Toptal is a screened network with a stated no-cut policy for talent rates; it is not presented here as an open free account.</p>
    <p className="mt-3 text-muted-foreground">Official sources checked <time dateTime="2026-10-31">October 31, 2026</time>. These are freelancer-side access conditions. Taxes, currency conversion and payment-provider charges can be additional; location and eligibility affect the available payout methods. Unknown fees and trial periods are not estimated.</p>
    {freelanceFreeOptions.map((option) => <div key={option.slug} className="mt-6 border-t border-border pt-5">
      <h3 className="font-semibold text-foreground">{option.name}: access conditions</h3>
      <dl className="mt-3 space-y-2 text-muted-foreground">
        <div><dt className="font-semibold">Account access and limits</dt><dd>{option.account}</dd></div>
        <div><dt className="font-semibold">Commission and service fees</dt><dd>{option.commission}</dd></div>
        <div><dt className="font-semibold">Proposals and paid visibility</dt><dd>{option.proposals}</dd></div>
        <div><dt className="font-semibold">Withdrawals and payment limits</dt><dd>{option.payout}</dd></div>
        <div><dt className="font-semibold">Free plan or trial?</dt><dd>{option.trial}</dd></div>
      </dl>
      <ul className="mt-3 space-y-2">{option.sources.map((source) => <li key={source.url}><a href={source.url} className="text-primary underline underline-offset-4">{source.label}</a></li>)}</ul>
    </div>)}
  </section>
}
export function FreelanceFreeLinks() {
  return <nav aria-label="Freelance platform guides" className="mt-14 rounded-xl border border-border p-5"><h2 className="text-xl font-semibold text-foreground">Plan your freelance platform costs</h2><ul className="mt-4 space-y-3">{freelanceFreeLinks.map((link) => <li key={link.path}><Link href={link.path} className="text-primary underline underline-offset-4">{link.label}</Link></li>)}</ul></nav>
}
