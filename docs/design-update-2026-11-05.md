# Tool identities and list navigation — 5 November 2026

## Shipped scope
- 45 official-site-sourced product identifiers are served locally in cards, comparison tables and two-product choice panels. No external logo-service requests, new dependency or recolouring.
- Other products retain their visible names. The registry does not invent marks or assert blanket reuse permission. Source records, file hashes, retrieval failures and known brand restrictions are in brand-assets/.
- Ranked lists and comparison pages have a sticky, horizontally scrollable jump bar. It highlights the current tool and brings the active tab into view without moving the page horizontally.
- Under 640px, summary comparisons become readable vertical summaries of the same audience, price and official pricing source. Larger screens retain the table.
- Two-product decision sections use separate visual panels. Product descriptions, order, prices, metadata, URLs and affiliate destinations were not changed.

## Verification
- Final production build and TypeScript passed: 233 generated pages; search index contains 131 published pages, 90 companies and 90 payment records.
- Catalog audit passed: 10 categories, 18 complete lists, 90 published tools.
- All 45 asset files decoded or parsed, matched their SHA-256 source records, and were visually inspected; ClickUp and the 44-asset contact/gallery review were checked separately.
- Chrome desktop: tool card, comparison table and two-product panels checked, including a name-only product.
- Responsive Chrome iframe viewports: 320×820 and 390×820. No document-level horizontal overflow. Last-tool jump correctly activates ElevenLabs and exposes its tab; 320px summary prices are readable without horizontal scrolling.
- A stale selected-tab result found in the first mobile test was corrected and the same journey passed again.

These are responsive Chrome checks, not physical iOS/Android tests. No measured traffic, conversion or performance improvement is claimed. No full legal clearance of all 90 marks is claimed.
