import { editorialIdentity } from '@/lib/editorial-identity'
import type { BlogPost } from '@/lib/blog-pages'
import observations from '@/data/hosting-price-index-2026.json'
import priceChecks from '@/data/hosting-price-check-2026-11-04.json'
import { hostingIntroTermCost, hostingThreeYearScenario } from '@/lib/hosting-price-math'

export const hostingPriceIndexRows = observations
const slug = '2026-web-hosting-price-index'
const url = `https://fivepicked.com/blog/${slug}`
const escape = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const money = (amount: number, currency: string) => `${currency === 'EUR' ? '€' : 'US$'}${amount.toFixed(2)}`
export function hostingRenewalIncrease(row: typeof observations[number]): number | null {
  if (!row.renewalComparisonEligible || row.introMonthly <= 0 || row.renewalMonthly === null || !row.initialTermMonths) return null
  return Math.round(((row.renewalMonthly / row.introMonthly) - 1) * 10000) / 100
}
const table = `<div class="overflow-x-auto"><table><caption>Official hosting offers reviewed October 31, 2026; lowest displayed offers within the stated scope, not equivalent service units</caption><thead><tr>${['Provider and plan', 'Hosting type / currency', 'Initial monthly rate or equivalent', 'Initial term', 'Renewal / continuation monthly rate', 'Eligible rate increase', 'Domain benefit', 'SSL', 'Migration', 'Refund window', 'Setup / additional-fee evidence', 'Official sources and limitations'].map((heading) => `<th scope="col">${heading}</th>`).join('')}</tr></thead><tbody>${observations.map((row) => {
  const increase = hostingRenewalIncrease(row)
  const initial = row.provider === 'Kinsta' ? 'US$0 for qualifying first month' : row.provider === 'Namecheap' ? 'US$0 for 30-day trial' : `${money(row.introMonthly, row.currency)}/month`
  const term = row.provider === 'Cloudways' ? 'Pay-as-you-go; no fixed multi-month term inferred' : row.initialTermMonths ? `${row.initialTermMonths} month${row.initialTermMonths === 1 ? '' : 's'}${row.provider === 'Namecheap' ? ' selected billing route; 30-day trial' : ''}` : 'Required promotional term not verified'
  return `<tr><th scope="row">${escape(row.provider)} — ${escape(row.plan)}</th>${[`${row.hostingType}; ${row.currency}`, initial, term, `${money(row.renewalMonthly, row.currency)}/month. ${row.renewalBasis}`, increase === null ? 'Not ranked; see method and notes' : `${increase.toFixed(2)}%`, row.freeDomain, row.freeSsl, row.freeMigration, row.refund, row.setupFee].map((cell) => `<td>${escape(cell)}</td>`).join('')}<td>${row.sources.map((source) => `<a href="${escape(source.url)}" rel="noopener noreferrer">${escape(source.label)}</a>`).join('<br>')}<p>${escape(row.notes)}</p></td></tr>`
}).join('')}</tbody></table></div>`

const wrapTable = (caption: string, headings: string[], rows: string[][]) => `<div class="overflow-x-auto"><table><caption>${escape(caption)}</caption><thead><tr>${headings.map((h) => `<th scope="col">${escape(h)}</th>`).join('')}</tr></thead><tbody>${rows.map((cells) => `<tr>${cells.map((cell, i) => i === 0 ? `<th scope="row">${cell}</th>` : `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`
const currentTable = wrapTable('Six selected offers checked November 4, 2026; base hosting charges, before taxes and extras',
  ['Provider / plan', 'Introductory rate / term', 'Initial term cost', 'After the offer', 'Source and billing notes'],
  priceChecks.map((row) => [escape(`${row.provider} — ${row.plan}`), `${money(row.introMonthly, row.currency)}/month; ${row.initialTermMonths} months`,
    `${money(hostingIntroTermCost(row)!, row.currency)}. ${escape(row.initialAmountBasis)}.`,
    `${money(row.renewalMonthly, row.currency)}/month`, `<a href="${escape(row.sourceUrl)}" rel="noopener noreferrer">Official pricing</a>. ${escape(row.notes)}`]))
const scenarioTable = wrapTable('36-month base-cost scenarios: USD offers with a 12-month introductory term only',
  ['Selected offer', 'Months 1–12', 'Months 13–36', '36-month base cost'],
  priceChecks.filter((row) => hostingThreeYearScenario(row) !== null).map((row) => [escape(`${row.provider} ${row.plan}`),
    money(hostingIntroTermCost(row)!, row.currency), money(Math.round(row.renewalMonthly * 100) * 24 / 100, row.currency), money(hostingThreeYearScenario(row)!, row.currency)]))
const changeTable = wrapTable('Earlier recorded offer versus November 4 recheck; not a market inflation index',
  ['Matched plan / currency / initial term', 'October 31 record', 'November 4 check', 'Renewal rate in both records'],
  priceChecks.filter((row) => observations.some((old) => old.provider === row.provider && old.plan === row.plan && old.currency === row.currency && old.initialTermMonths === row.initialTermMonths && old.introMonthly !== row.introMonthly)).map((row) => {
    const old = observations.find((old) => old.provider === row.provider)!
    return [escape(`${row.provider} ${row.plan}; ${row.currency}; ${row.initialTermMonths} months`), money(old.introMonthly, row.currency), money(row.introMonthly, row.currency), money(row.renewalMonthly, row.currency)]
  }))

const faqs = [
  { question: 'Which host has the lowest three-year cost in this comparison?', answer: 'Among the three selected USD offers with a 12-month introduction, IONOS Plus has the lowest calculated base cost: US$348 for 36 months. That assumes 12 months at US$1 and 24 months at US$14. It excludes taxes and extras and does not compare identical resources or establish the cheapest host across the market.' },
  { question: 'Why is Hostinger missing from the three-year table?', answer: 'The observed Premium offer requires 48 months. Prorating that payment over 36 months would hide part of the commitment. Its full initial payment, US$95.52, is shown separately in the current-offer table.' },
  { question: 'Does a calculated term cost equal the amount due today?', answer: 'Only where the source explicitly states the payment. Hostinger publishes the US$95.52 initial amount. Other term costs are rate multiplied by months; the invoice timing, taxes and selected extras still need checking. IONOS states a one-year term without establishing an annual upfront invoice in the reviewed offer.' },
  { question: 'Are these prices checked for the same country?', answer: 'No. The six rechecks preserve the currencies shown by the linked public pages. Five displayed USD and DreamHost displayed EUR. A currency alone does not verify buyer location, account eligibility or checkout taxes. DreamHost is excluded from the USD scenario.' },
  { question: 'Is this a measure of hosting inflation during 2026?', answer: 'No. The October 31 dataset is an earlier recorded snapshot and the November 4 file is a six-offer price recheck. Two matched introductory offers differ, but localization, eligibility and promotions can affect what a page displays. These observations do not establish market-wide inflation.' },
  { question: 'Why do zero-price offers have no percentage increase?', answer: 'A percentage change divides by the starting price. A zero starting price makes that calculation undefined. The archived Kinsta and Namecheap offers therefore show continuation amounts without a percentage increase.' },
  { question: 'Can I reuse the data?', answer: 'Yes. You may reuse our compiled data and calculated tables under CC BY 4.0. Credit FIVE PICKED, link to this index and the license, retain the observation date and assumptions, and identify your changes. Provider logos and third-party source material are not included in that permission.' },
]

const prose = `
<p>A low hosting price can be a good deal. The catch is knowing how many months you must buy and what happens when the offer ends. This web hosting price index puts those numbers together, with official sources and downloadable data you can check.</p>
<p><strong>Latest price check: November 4, 2026.</strong> We rechecked six selected offers. The original ten-provider dataset, recorded on October 31, remains below with its own date. The new check covers prices and payment terms only; it does not recertify every older refund or migration policy.</p>
<h2>What the latest hosting offers actually cost</h2>
<p>Start with the full initial commitment. A price advertised per month may require several years of prepayment. The table separates an explicitly published initial payment from a term cost we calculated by multiplying the rate by the number of months.</p>
{{CURRENT}}
<p>These are selected public offers, not a search for every available coupon or the lowest price in every country. Five pages displayed USD; DreamHost displayed EUR. We have not verified a common buyer location, converted currencies or completed checkout. Taxes, domain renewals, optional services and usage charges are outside these base amounts.</p>
<h2>A fairer three-year budget: match the currency and first term</h2>
<p>For this calculation, we use only the three rechecked USD offers with a 12-month introductory term: SiteGround StartUp, GreenGeeks Lite and IONOS Plus. Each scenario uses the same 36-month horizon. The first year uses the observed introductory rate; the next 24 months use the published renewal rate.</p>
{{SCENARIOS}}
<p><strong>Formula:</strong> (introductory monthly rate × 12) + (renewal monthly rate × 24). For IONOS Plus, that is (US$1 × 12) + (US$14 × 24) = <strong>US$348</strong>. This is the lowest base-cost scenario among these three offers, even though the same offer has the largest percentage jump at renewal. That is why the percentage alone is a poor shopping guide.</p>
<p>The figures assume the recorded renewal rate remains available for those 24 months. They are planning scenarios, not future invoices: they do not establish when renewal payments fall due, which renewal contract will be available, or whether your site will need an upgrade. The plans also provide different resources and support. Matching the time period makes the arithmetic consistent; it does not make the services equivalent.</p>
<p>Hostinger and Bluehost are excluded because their selected initial commitments last 48 and 36 months. DreamHost is excluded because this observation is in EUR and lasts 48 months. A shorter slice of a long prepaid deal would hide part of the commitment. The managed-hosting and trial offers in the older dataset are outside this calculation too.</p>
<h2>What differs from our October 31 record?</h2>
{{CHANGES}}
<p>The Hostinger and SiteGround introductory rates in the November 4 check are lower than the earlier recorded amounts. Their renewal rates match the earlier record. Both current pages promote Black Friday offers. We cannot establish the exact time a price changed or rule out eligibility and localization differences from two observations, so this is an offer comparison rather than a claim about industry price trends.</p>
<p>The earlier records stay available instead of being overwritten. Bluehost, GreenGeeks, IONOS and the selected four-year DreamHost offer had the same introductory and renewal numbers in the recheck. An unchanged number does not prove that every other feature or policy stayed the same.</p>
<h2>The original ten-provider hosting price table</h2>
<p><strong>Recorded October 31, 2026.</strong> This wider table includes Hostinger, Bluehost, Cloudways, Kinsta, Namecheap, SiteGround, GreenGeeks, DreamHost, IONOS and FastComet. Keep its date attached when using it: these are the earlier observations, not ten newly verified checkout quotes.</p>
{{TABLE}}
<p>Shared hosting, managed cloud hosting and managed WordPress hosting cover different needs. We keep their types and conditions visible rather than averaging them into a single market price. There are no affiliate links in the research tables or downloads.</p>
<h2>Three details to check before paying</h2>
<h3>1. The renewal term matters as much as the renewal rate</h3>
<p>US$10 per month can mean a monthly payment or a monthly equivalent on a longer contract. Ask for the full next invoice and the period it covers. If that period is unresolved in our source, we say so instead of inventing a payment.</p>
<h3>2. An included benefit can have an end date</h3>
<p>A domain included for the first year still needs a renewal budget. A free transfer tool and a managed site migration are different services. Check the supported site type and what work is included. The older table retains the recorded domain, SSL and migration conditions; follow the official policy before relying on them today.</p>
<h3>3. A trial and a refund guarantee are different offers</h3>
<p>A qualifying trial can start at zero. A money-back guarantee usually involves a purchase and eligibility conditions. Do not assume that domain fees, add-ons or one-time services are refundable, or that two promotions can be combined. Our <a href="/free/best-free-web-hosting">hosting trials and refund guide</a> explains the distinction for our shortlist.</p>
<h2>Methodology and limitations</h2>
<p>We read public provider pricing pages and recorded the named plan, displayed currency, initial monthly rate, initial duration and continuation rate. The six-offer November 4 check follows the same selected products where identifiable. It is a focused recheck, not a new survey of the whole market. Each row links to its official source and the download records the date, input amounts and calculation basis.</p>
<p>Term cost equals the advertised monthly rate multiplied by the selected term. We calculate monetary values in cents. Renewal percentage is ((renewal monthly equivalent ÷ introductory monthly equivalent) − 1) × 100, rounded to two decimals, and is shown only for positive-price, term-complete observations in the original table. A blank value means missing evidence or an inapplicable calculation, never a zero fee.</p>
<p>We did not buy these offers, test hosting performance or capture account-specific invoices. This research cannot establish speed, uptime, refund outcomes or final checkout costs. No exchange rates are used. The two dated files support checking the stated calculations, not a market-wide inflation rate or a guaranteed future bill.</p>
<h2>Download the data or cite a finding</h2>
<ul><li><a href="/data/2026-web-hosting-price-check-2026-11-04.csv" download>Download the November 4 six-offer price check and calculated scenarios (CSV)</a>.</li><li><a href="/data/2026-web-hosting-price-index.csv" download>Download the original October 31 ten-provider dataset (CSV)</a>.</li></ul>
<p>You may reuse our compiled data and calculated tables under <a href="https://creativecommons.org/licenses/by/4.0/" rel="noopener noreferrer">Creative Commons Attribution 4.0</a>. Credit FIVE PICKED, link to this index and the license, keep the observation date and assumptions, and identify changes. This permission covers our compilation and calculations, not provider logos or third-party source material.</p>
<p><strong>Suggested citation:</strong> FIVE PICKED, <em>2026 Web Hosting Price Index</em>, six-offer price check dated November 4, 2026. For the three-year table, retain the qualifier “selected USD offers with a 12-month introductory term; base hosting only, assuming unchanged renewal rates.” For an older row, cite October 31 instead. Found a discrepancy? Send the plan, currency and source URL to <a href="mailto:hello@fivepicked.com">hello@fivepicked.com</a>.</p>
<h2>Find a host that fits your site</h2>
<p>Use our <a href="/web-hosting-and-domains">five-provider hosting shortlist</a> to narrow the choice by need. For more context, read <a href="/blog/kinsta-vs-cloudways">Kinsta vs Cloudways</a> or <a href="/compare/hostinger-vs-cloudways">Hostinger vs Cloudways</a>, then check the <a href="/reviews/cloudways">Cloudways review</a> or <a href="/reviews/hostinger">Hostinger review</a>. The lowest base cost is useful only if the plan can do the job.</p>
<h2>Frequently asked questions</h2>
{{FAQ}}
`

export const hostingPriceIndexPost: BlogPost = {
  slug, title: '2026 Web Hosting Price Index: The Real Cost of 10 Major Providers',
  metaTitle: '2026 Web Hosting Price Index: 10 Providers and Renewal Costs',
  metaDescription: 'A dated official-source dataset of ten hosting offers: entry prices, renewal rates, terms, domains, SSL, migrations and refund limits, with a downloadable CSV.',
  publishedAt: '2026-10-31T00:00:00Z', updatedAt: '2026-11-04', lastReviewedAt: '2026-11-04',
  author: editorialIdentity.name,
  authorBio: editorialIdentity.bio,
  category: 'Web Hosting', keywords: ['web hosting price index 2026', 'hosting renewal prices', 'hosting price dataset', 'hosting introductory prices'],
  excerpt: 'Compare ten official hosting offers with renewal calculations, included-service conditions and clearly marked missing evidence. Download the dated source-linked dataset.',
  content: prose.replace('{{CURRENT}}', currentTable).replace('{{SCENARIOS}}', scenarioTable).replace('{{CHANGES}}', changeTable).replace('{{TABLE}}', table).replace('{{FAQ}}', faqs.map((faq) => `<h3>${escape(faq.question)}</h3><p>${escape(faq.answer)}</p>`).join('')),
  faqs, relatedListPath: '/web-hosting-and-domains', relatedListLabel: 'Web hosting and domain options',
  relatedLinks: [
    { path: '/web-hosting-and-domains', label: 'Explore our five-provider hosting shortlist' },
    { path: '/free/best-free-web-hosting', label: 'Separate hosting trials from refund guarantees' },
    { path: '/blog/kinsta-vs-cloudways', label: 'Understand Kinsta and Cloudways operating responsibilities' },
    { path: '/compare/hostinger-vs-cloudways', label: 'Choose between shared and managed cloud hosting needs' },
    { path: '/reviews/cloudways', label: 'Inspect the detailed Cloudways purchase assessment' },
    { path: '/reviews/hostinger', label: 'Review Hostinger’s billing and plan suitability' },
  ],
  dataset: {
    '@context': 'https://schema.org', '@type': 'Dataset', '@id': `${url}#dataset`,
    name: '2026 Web Hosting Price Index — October 31 records and November 4 price recheck',
    description: 'Ten hosting offer records dated October 31, plus six selected price rechecks dated November 4. Includes initial term costs and three selected USD 36-month base-cost scenarios with explicit assumptions.',
    url, version: '2026-11-04', datePublished: '2026-10-31', dateModified: '2026-11-04', temporalCoverage: '2026-10-31/2026-11-04', inLanguage: 'en',
    license: 'https://creativecommons.org/licenses/by/4.0/',
    creator: { '@type': 'Organization', name: 'FIVE PICKED', url: 'https://fivepicked.com' },
    measurementTechnique: 'Public official-page desk research and dated price recheck; term costs and 36-month scenarios use stated formulas, unchanged renewal-rate assumptions and no checkout or performance tests.',
    variableMeasured: ['Provider', 'Plan', 'Hosting type', 'Currency', 'Introductory monthly rate', 'Initial term in months', 'Renewal or continuation monthly rate', 'Domain benefit', 'SSL inclusion', 'Migration conditions', 'Refund conditions', 'Setup-fee evidence', 'Source URLs', 'Review date', 'Renewal comparison eligibility', 'Calculated initial term cost', 'Calculated 36-month USD base-cost scenario'],
    citation: [...new Set(observations.flatMap((row) => row.sources.map((source) => source.url)))],
    isAccessibleForFree: true,
    distribution: [
      { '@type': 'DataDownload', name: 'October 31 ten-provider records', encodingFormat: 'text/csv', contentUrl: 'https://fivepicked.com/data/2026-web-hosting-price-index.csv' },
      { '@type': 'DataDownload', name: 'November 4 six-offer price check and scenarios', encodingFormat: 'text/csv', contentUrl: 'https://fivepicked.com/data/2026-web-hosting-price-check-2026-11-04.csv' },
    ],
    isPartOf: { '@type': 'BlogPosting', '@id': url },
  },
}
