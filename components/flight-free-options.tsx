import { flightFreeEditorial, flightFreeOptions } from '@/lib/flight-free-options'
import { formatDate } from '@/lib/site'

export function FlightFreeOptions() {
  return <section aria-labelledby="flight-free-scope" className="mt-12 rounded-xl border border-border p-5 text-sm leading-relaxed">
    <h2 id="flight-free-scope" className="text-xl font-semibold text-foreground">What is free, limited or paid — and where fees enter</h2>
    <dl className="mt-4 space-y-3 text-muted-foreground">
      <div><dt className="font-semibold">Genuinely free</dt><dd>Search before purchase. CheapOair and Trip.com explicitly describe free price alerts; Kiwi.com combines generally free website functions with account-based alerts.</dd></div>
      <div><dt className="font-semibold">Limited free access</dt><dd>Account requirements, fare eligibility and market-specific offers apply. Unspecified limits are not described as unlimited. A membership trial is separate from basic search.</dd></div>
      <div><dt className="font-semibold">Fees to check, sometimes overlooked</dt><dd>Separate the agency service charge, payment or currency costs, airline baggage and post-booking handling. The sources document charges; this guide does not claim evidence of undisclosed or hidden fees.</dd></div>
      <div><dt className="font-semibold">Paid features</dt><dd>Tickets, optional protection, Prime membership and post-booking products are separate from free search. An airline fee waiver does not automatically waive an agency fee or fare difference.</dd></div>
    </dl>
    <p className="mt-4 text-muted-foreground">By {flightFreeEditorial.author}. {flightFreeEditorial.authorBio} Last reviewed <time dateTime={flightFreeEditorial.lastReviewedAt}>{formatDate(flightFreeEditorial.lastReviewedAt)}</time>. Official-source desk research only; no purchase or cancellation was tested. Public booking flows establish browsing before payment, not a guarantee that checkout is fee-free.</p>
    {flightFreeOptions.map((option) => <div key={option.slug} className="mt-6 border-t border-border pt-5">
      <h3 className="font-semibold text-foreground">{option.name}: verified access and costs</h3>
      <dl className="mt-3 space-y-2 text-muted-foreground">
        <div><dt className="font-semibold">Search and price alerts</dt><dd>{option.access}</dd></div>
        <div><dt className="font-semibold">Service, payment and baggage costs</dt><dd>{option.fees}</dd></div>
        <div><dt className="font-semibold">Changes and cancellation</dt><dd>{option.changes}</dd></div>
      </dl>
      <ul className="mt-3 space-y-2">{option.sources.map((source) => <li key={source.url}><a href={source.url} className="text-primary underline underline-offset-4">{source.label}</a></li>)}</ul>
    </div>)}
  </section>
}
