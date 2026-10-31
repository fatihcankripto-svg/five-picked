/** Official freelancer-side access and fee observations checked October 31, 2026. */
export const freelanceFreeOptions = [
  {
    slug: 'fiverr', name: 'Fiverr', price: 'Free to join and list services; sellers retain 80% of orders',
    account: 'Joining and listing services require no subscription. Seller accounts and Gigs are reviewed for approval; free registration is not guaranteed visibility or orders.',
    commission: 'For standard completed orders, sellers retain 80% of the purchase amount, including Gig Extras and tips. This is not commission-free earning.',
    proposals: 'The verified free route is publishing Gigs. No recurring proposal-credit allowance is promised by this guide.',
    payout: 'PayPal: $1 minimum and $0 Fiverr withdrawal fee. Bank transfer via Payoneer: $20 minimum and $1 withdrawal fee. Payoneer account: $10 minimum and $3 fee. Location and provider restrictions apply; additional provider or currency-conversion costs may apply.',
    trial: 'Free registration is ongoing access, not a fixed-day paid-plan trial. No universal optional-upgrade trial is verified here.',
    sources: [
      { url: 'https://www.fiverr.com/start_selling', label: 'Fiverr free service listings and seller earnings' },
      { url: 'https://help.fiverr.com/hc/en-us/articles/360050063113-Creating-your-Fiverr-account', label: 'Fiverr seller and Gig approval requirements' },
      { url: 'https://help.fiverr.com/hc/en-us/articles/9234443621137-Your-earnings-page', label: 'Fiverr retained earnings, Extras and tips' },
      { url: 'https://help.fiverr.com/hc/en-us/articles/360010530058-Withdrawing-your-earnings-managing-payout-methods', label: 'Fiverr payout methods, fees and minimums' },
    ],
  },
  {
    slug: 'upwork', name: 'Upwork', price: 'Free Basic account; 0%–15% freelancer service fee per contract',
    account: 'Freelancer Basic is free. Freelancer Plus is an optional paid upgrade with additional tools; a free account does not mean unlimited free proposals or guaranteed work.',
    commission: 'The freelancer service fee ranges from 0% to 15% per contract. Check the actual percentage shown with the proposal or offer; do not assume one rate applies to every contract.',
    proposals: 'Purchased Connects cost $0.15 each. Proposals and advertising products use Connects. Some freelancers may receive 10 free Connects per month; eligibility and offers vary, so this is not a universal allowance.',
    payout: 'Direct to Local Bank costs $0.99 per withdrawal, plus possible receiving-bank fees. Its minimum is $5 or higher depending on location, and country-specific maximums apply. Other payout methods have separate fees and limits.',
    trial: 'Basic is a free plan rather than a countdown trial. No universal fixed-day Freelancer Plus trial is verified in the sources reviewed here.',
    sources: [
      { url: 'https://support.upwork.com/hc/en-us/articles/40444316172051-What-s-the-difference-between-Freelancer-Basic-and-Freelancer-Plus', label: 'Upwork free Basic plan and optional Plus features' },
      { url: 'https://support.upwork.com/hc/en-us/articles/211062538-Learn-about-the-Freelancer-Service-Fee', label: 'Upwork contract-specific freelancer service fee' },
      { url: 'https://support.upwork.com/hc/en-us/articles/211062898-Understanding-and-using-Connects', label: 'Upwork Connects prices, usage and conditional free offers' },
      { url: 'https://support.upwork.com/hc/en-us/articles/211060578-What-are-the-fees-limits-and-timing-of-Direct-to-Local-Bank-payments', label: 'Upwork local-bank withdrawal fee and country limits' },
    ],
  },
  {
    slug: '99designs', name: '99designs', price: 'Free designer signup; 5%–15% platform fee on 1-to-1 Projects',
    account: 'Designer signup is free, with designer curation and level review. This is not a promise of automatic acceptance, unrestricted visibility or paid contest wins.',
    commission: 'On 1-to-1 Projects, designer platform fees are 5% for Top Level, 10% for Mid Level and 15% for Entry Level. A separate new-client introduction fee takes 20% of the first $500 of invoices, capped at $100. It is waived for qualifying contest relationships and eligible invited new clients; consult the linked conditions.',
    proposals: 'The reviewed designer sources describe contests and direct projects, not a universal monthly proposal-credit allowance. Do not apply the 1-to-1 fee schedule to every contest payout.',
    payout: 'Automatic payouts require $25, tracked separately for the US and EU business entities. Hyperwallet is required. Transfer fees vary by method, region and currency; no single global withdrawal fee is claimed.',
    trial: 'Free signup is not a fixed-day premium trial. No universal designer subscription trial is verified here.',
    sources: [
      { url: 'https://99designs.com/designers', label: '99designs free designer signup and curation' },
      { url: 'https://support.99designs.com/hc/en-us/articles/360022206031-What-is-a-platform-fee', label: '99designs designer-level fees for 1-to-1 Projects' },
      { url: 'https://support.99designs.com/hc/en-us/articles/360022018152-What-is-a-client-introduction-fee', label: '99designs introduction fee, cap and waivers' },
      { url: 'https://support.99designs.com/hc/en-us/articles/204108829-Which-payment-providers-does-99designs-use', label: '99designs Hyperwallet, payout thresholds and variable transfer fees' },
    ],
  },
  {
    slug: 'freelancer-com', name: 'Freelancer.com', price: 'Free membership; project fees and bid-balance requirements apply',
    account: 'Free signup and profile; initially 6 bids per month. A standard $20 unreserved balance is required before bidding, potentially higher for designated risk or high-value work. Paid memberships and bid upgrades are separate.',
    commission: 'Standard fixed-price projects and contest awards: 10% or $5, whichever is greater. Standard hourly projects: 10%. Preferred Freelancer Recruiter projects have a separate 15% fee.',
    proposals: 'Free membership is restricted bidding, not unlimited applications. A required balance is not the same as a proposal fee, but still means cash must be available.',
    payout: 'Minimum withdrawal: $50 after fees. PayPal and Express Withdrawal cost $1; international wire costs $25. Availability and provider charges vary. Inactive accounts can incur maintenance fees under the linked policy.',
    trial: 'Free membership is an ongoing tier. No universal fixed-day paid-membership trial is established here; any checkout promotion must be checked separately.',
    sources: [
      { url: 'https://www.freelancer.com/feesandcharges', label: 'Freelancer membership, bids, balance requirements, project and withdrawal fees' },
    ],
  },
  {
    slug: 'toptal', name: 'Toptal', price: 'No cut from talent-set rates; screening required',
    account: 'A screened talent network, not an immediately open free marketplace account. The reviewed talent FAQ does not explicitly establish an application fee or a free-account entitlement; neither is invented here.',
    commission: 'Toptal says talent members set their own rates and it does not take a cut from those rates. This is a talent-side statement, not a claim that hiring through Toptal is free for clients.',
    proposals: 'Accepted talent are matched with opportunities. No monthly public proposal-credit allocation is documented in the reviewed FAQ.',
    payout: 'The FAQ describes automated payment in USD but does not publish a universal talent withdrawal minimum or transfer fee. Confirm those terms during onboarding; no numerical claim is made.',
    trial: 'No freelancer-side fixed-day free trial is documented in the reviewed talent FAQ. A client hiring trial is not a freelancer account benefit.',
    sources: [
      { url: 'https://www.toptal.com/freelance-jobs/faq', label: 'Toptal screening, matching, talent rates and automated payment' },
    ],
  },
]

export const freelanceFreeLinks = [
  { path: '/freelance-platforms', label: 'Compare the full freelance-platform shortlist' },
  { path: '/quiz/freelance-platforms', label: 'Match a freelance marketplace to your working style' },
  { path: '/compare/fiverr-vs-upwork', label: 'Choose between Fiverr Gigs and Upwork projects' },
  { path: '/tools/freelance-fee-calculator', label: 'Estimate take-home earnings after platform fees' },
]
