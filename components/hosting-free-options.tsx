import Link from 'next/link'
import { hostingOffers, hostingOffersCheckedAt, hostingGuideLinks } from '@/lib/hosting-free-options'

export function HostingFreeOptions() {
  return <section aria-labelledby="hosting-offer-scope" className="mt-12 rounded-xl border border-border p-5 text-sm leading-relaxed">
    <h2 id="hosting-offer-scope" className="text-xl font-semibold text-foreground">What this page covers</h2>
    <p className="mt-3 text-muted-foreground">These are five existing hosting recommendations, not five permanently free hosts. A free plan continues without hosting charges; a free trial expires; a money-back guarantee requires payment first and a qualifying refund request. A temporary subdomain is only an address and does not remove hosting charges.</p>
    <p className="mt-3 text-muted-foreground">Official terms checked <time dateTime={hostingOffersCheckedAt}>October 31, 2026</time>. Trial offers, account eligibility and renewal conditions can change. The paid rates on the cards may use a different billing term from the trial offer; do not treat a long-term introductory price as the trial renewal price.</p>
    {hostingOffers.map((offer) => <div key={offer.slug} className="mt-6 border-t border-border pt-5">
      <h3 className="font-semibold text-foreground">{offer.name}: access conditions</h3>
      <dl className="mt-3 space-y-2 text-muted-foreground">
        <div><dt className="font-semibold">Ongoing free plan</dt><dd>{offer.plan}</dd></div>
        <div><dt className="font-semibold">Free trial or introductory period</dt><dd>{offer.trial}</dd></div>
        <div><dt className="font-semibold">Money-back guarantee or refund policy</dt><dd>{offer.refund}</dd></div>
        <div><dt className="font-semibold">Temporary subdomain</dt><dd>{offer.subdomain}</dd></div>
      </dl>
      <ul className="mt-3 space-y-2">{offer.sources.map((source) => <li key={source.url}><a href={source.url} className="text-primary underline underline-offset-4">{source.label}</a></li>)}</ul>
    </div>)}
  </section>
}

export function HostingGuideLinks() {
  return <nav aria-label="Hosting guides" className="mt-14 rounded-xl border border-border p-5">
    <h2 className="text-xl font-semibold text-foreground">Explore your hosting options</h2>
    <ul className="mt-4 space-y-3">{hostingGuideLinks.map((link) => <li key={link.path}><Link href={link.path} className="text-primary underline underline-offset-4">{link.label}</Link></li>)}</ul>
  </nav>
}
