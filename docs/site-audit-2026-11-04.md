# Site audit — 2026-11-04

## Fixed
- Replaced outdated Coursera audit claims with the current first-module preview model in the category and comparison.
- Explained Riverside's built-in editor; removed the blanket recommendation to buy a second editor.
- Updated Fathom free-plan wording and removed an unsupported approximate advanced-summary allowance.
- Removed a broken cost comparison and simplified the content-marketing introduction.
- Made article update dates agree across visible text, Open Graph, JSON-LD and the sitemap without changing full-review dates.
- Aligned the free-VPN sitemap date with its existing visible review date.

Official references: [Coursera](https://blog.coursera.org/introducing-courseras-new-course-preview-experience/), [Riverside](https://riverside.com/video-editor), [Fathom](https://www.fathom.ai/pricing).

## Verification
- Production build and TypeScript passed.
- 226 generated pages: unique indexable metadata, valid headings, no broken internal page/download links; sitemap parity.
- All 131 sitemap URLs returned HTTP 200; canonical, snippet, social metadata and JSON-LD checks passed.
- 359 FAQ answers agree with visible text. Dataset license/parent checks passed.
- 14 blog posts and 8 reviews: dates, authorship and schema agree.
- Search, 90 published company/payment records, catalog/pricing consistency and VPN article audits passed.
- Updated obsolete audit expectations for published category counts, legitimate CSV downloads, restored guides and registry-based article dates. Runtime audit uses an available port.

Scope: technical checks cover the sitemap and generated HTML. Content corrections target the verified issues above; this is not a new hands-on test or a fresh verification of every product price, external URL or editorial claim. Rankings, traffic impact and Google-selected snippets require subsequent Search Console observation.
