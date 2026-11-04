# Hosting price index: November 4, 2026 revision

Scope: the existing `/blog/2026-web-hosting-price-index` article only, its summary, a dated six-offer price file, and reproducible calculations. No outreach has been sent.

## Official pricing checks

| Provider / selected offer | Currency | Intro rate / months | Later monthly rate | Official source |
|---|---|---|---|---|
| Hostinger Premium | USD | 1.99 / 48 | 10.99 | https://www.hostinger.com/pricing |
| Bluehost Starter | USD | 3.99 / 36 | 9.99 | https://www.bluehost.com/web-hosting |
| SiteGround StartUp | USD | 1.99 / 12 | 17.99 | https://www.siteground.com/web-hosting.htm |
| GreenGeeks Lite | USD | 2.95 / 12 | 13.95 | https://www.greengeeks.com/shared-hosting/ |
| IONOS Plus | USD | 1.00 / 12 | 14.00 | https://www.ionos.com/hosting/web-hosting |
| DreamHost Web Hosting Launch | EUR | 1.99 / 48 | 7.99 | https://www.dreamhost.com/hosting/web-hosting/ |

The public pages were read through web retrieval on November 4. Hostinger explicitly displayed a 95.52 USD first payment and the same 48-month renewal term. Other initial term totals are calculations, not captured checkout invoices. SiteGround and GreenGeeks described 12-month prepayment; IONOS's one-year commitment does not establish upfront annual payment. DreamHost's EUR rendering is retained; no common buyer region is asserted. Prices can vary by visitor, eligibility and promotion.

## Reuse value and limits

The article now separates the first commitment from later costs, retains both observation dates, and supplies a three-year scenario for three USD offers with a 12-month introduction. Formula: 12 × intro + 24 × renewal. Result: IONOS 348.00 USD; GreenGeeks 370.20 USD; SiteGround 455.64 USD. It assumes unchanged rates, excludes taxes and extras, and does not equal an invoice schedule or equivalent hosting capacity. Longer commitments are not prorated to make them look cheaper over a shorter horizon.

The October 31 JSON and CSV remain unchanged. They are existing project records, not newly authenticated archived copies of the providers' historic pages. The two differences in introductory prices are described as record-to-recheck differences, not proof of market inflation or precise change timestamps. The November check covers pricing and terms, not a new verification of all earlier service/refund policies.

Our compilation and calculations are offered under CC BY 4.0, with visible attribution instructions and matching Dataset metadata. Third-party logos/material are excluded. This makes reuse clear; it does not guarantee links or make the research unique in the market.

## Validation

Run `node scripts/test-hosting-price-math.cjs`, `node scripts/export-hosting-price-check.cjs --check`, `pnpm build`, and `node scripts/audit-editorial.cjs`. Review the generated page and verify unchanged routes, canonical URLs, search titles/descriptions, retained internal links and visible FAQ/Dataset agreement. Shared templates, ranking data, affiliate URLs, CSS and original snapshot files are outside this change.
