# FIVE PICKED editorial and SEO review — 2026-10-31

## Implemented

- Preserve the navy/amber brand; remove marquee and hero counter/orbit motion; add comparisons, guides and recent articles to the homepage.
- Publish only complete five-tool lists through `allCategories`. Editorial data remains in `categoryRegistry`; the four requested categories have `hidden: true`.
- Personal Finance and Fitness & Nutrition also have no complete lists and are excluded automatically. Travel exposes only completed subcategories. Incomplete parent routes show a noindex holding page.
- Add a connected, topic-aware internal reading graph; every indexable generated page has at least three distinct referring pages.
- Fix `/marketing-and-seo` links and retain a permanent redirect to `/ai-tools/marketing-and-seo`. Add missing tools and reviews indexes.
- Add readable article typography, server-rendered contents navigation, consistent breadcrumbs and visible-text FAQ checks. Remove undocumented hands-on testing claims.
- Centralize editorial dates. Preserve publication dates; omit sitemap lastmod when no reliable editorial date is available. The sitemap derives its content URLs from the same registry used for internal reading links.
- Stop quoting unverified subscription amounts in product cards and legacy pricing sections. Preserve product-fit analysis and explain the actual cost factors instead.
- Correct the Upwork calculator: the contract fee is 0–15%, not a universal 10%. The 10% initial input is explicitly an example. Fiverr's 20% seller fee is documented separately.
- Explain ongoing free VPN plans versus paid trials and refund offers. Add one focused AI voice commercial-use guide with official sources.
- Pass only category names/paths to the client navigation, rather than shipping the complete product database in the header.
- Disable the build filesystem cache after reproducing two Turbopack persistent-cache panics. Production build still uses Turbopack; visitor caching is unaffected.

## Verification

- `pnpm build`: successful before each published change group.
- `python scripts/audit-seo.py`: unique nonempty titles, descriptions and canonicals; no broken internal links; three referring pages; sitemap parity; one H1 and one main landmark; valid JSON-LD and visible FAQ answers.
- `python scripts/audit-runtime.py`: local HTTP checks for all 102 sitemap URLs, no Set-Cookie headers, noindex holding pages, and the historical URL redirect.
- `node --experimental-strip-types scripts/test-fee-math.mjs`: fee boundaries and invalid inputs.
- All affiliateUrl strings match the original source; the visit-button implementation and privacy page are unchanged.
- Desktop production appearance inspected in the browser. Mobile breakpoints, inert navigation, menu labels, focus handling and reduced-motion behavior were inspected in source. No real-device Core Web Vitals measurement or Search Console access was available.

## Editorial boundaries

This is research-based content, not a fabricated product-testing programme. Existing third-party feature descriptions should continue to be checked against official documentation as products change. Do not interpret an editorial update date as an independent test or a fresh verification of every vendor claim. No analytics, cookies, tracking pixels, new categories or affiliate programmes were added. No numerical search-volume or ranking gains are claimed.

## Official sources used for targeted corrections

- https://support.upwork.com/hc/en-us/articles/211062538-Learn-about-the-Freelancer-Service-Fee
- https://help.fiverr.com/hc/en-us/articles/9234443621137-Your-earnings-page
- https://help.elevenlabs.io/hc/en-us/articles/13313564601361-Can-I-publish-the-content-I-generate-on-the-platform
- https://elevenlabs.io/terms-of-use
- https://fliki.ai/frequently-asked-questions
- https://fliki.ai/features/text-to-video
- https://protonvpn.com/pricing
- https://support.nordvpn.com/hc/en-us/articles/19744837091217-Does-NordVPN-have-a-free-trial
- https://support.surfshark.com/hc/en-us/articles/360026123554-Does-Surfshark-offer-a-free-trial
- https://www.expressvpn.com/features/money-back-guarantee
- https://www.privateinternetaccess.com/vpn-features/free-trial-vpn
- https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

## Owner follow-through

Submit https://fivepicked.com/sitemap.xml in Search Console; inspect the homepage, one revised article and the new guide. Monitor indexing and search queries before expanding content. Share useful guides only in relevant communities where self-promotion is permitted, and seek genuine mentions rather than bulk paid links. Collect real product demonstrations before describing future reviews as hands-on tests.
