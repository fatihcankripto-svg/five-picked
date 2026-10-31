/** Official offer observations checked on October 31, 2026; hosting only. */
export const hostingOffersCheckedAt = '2026-10-31'
export const hostingOffers = [
  {
    slug: 'hostinger', name: 'Hostinger',
    plan: 'No ongoing free tier for standard web hosting.',
    trial: 'No standard web-hosting trial verified; separate builder and AI offers are not a hosting trial.',
    refund: '30 days on eligible new hosting purchases. Domains have separate rules; cryptocurrency payments are non-refundable.',
    subdomain: 'Temporary preview address with an active hosting plan; not a standalone free hosting plan.',
    sources: [
      { url: 'https://www.hostinger.com/support/1583320-are-free-hosting-plans-available-at-hostinger/', label: 'Hostinger hosting access and refund eligibility' },
      { url: 'https://www.hostinger.com/support/2489693-how-to-access-your-website-content-without-a-domain-in-hostinger/', label: 'Hostinger temporary website addresses' },
    ],
  },
  {
    slug: 'bluehost', name: 'Bluehost',
    plan: 'No ongoing free hosting plan verified on the standard hosting sales page.',
    trial: 'No standard hosting trial verified. An email or AI-builder trial is a separate product.',
    refund: '30 days for eligible new hosting purchases; monthly terms, Cloud Hosting, domains and most add-ons are excluded. Domain charges can be deducted.',
    subdomain: 'A temporary mybluehost.me address is documented for eligible hosting accounts; it does not make the hosting free.',
    sources: [
      { url: 'https://www.bluehost.com/pricing/wordpress-hosting', label: 'Bluehost paid hosting plans and separate add-on trials' },
      { url: 'https://www.bluehost.com/help/article/refundpolicy', label: 'Bluehost refund exclusions and cancellation window' },
      { url: 'https://www.bluehost.com/help/article/register-a-domain-name', label: 'Bluehost temporary domain documentation' },
    ],
  },
  {
    slug: 'cloudways', name: 'Cloudways',
    plan: 'No ongoing free hosting service; paid usage follows an upgrade.',
    trial: 'Flexible: 5 days without a credit card. Autonomous: 3 days. Confirm the selected product before signing up.',
    refund: 'No general hosting money-back period verified. Eligible unused prepaid funds can be requested back within 3 months, subject to verification; this is not a refund of consumed hosting.',
    subdomain: 'A default application domain is provided for the hosted application; it is not an independent permanent free tier.',
    sources: [
      { url: 'https://www.cloudways.com/en/pricing.php', label: 'Cloudways current trial products and paid rates' },
      { url: 'https://support.cloudways.com/en/articles/5245051-getting-started-faqs', label: 'Cloudways trial lengths and absence of a free tier' },
      { url: 'https://support.cloudways.com/en/articles/9652801-how-to-manage-your-cloudways-payments', label: 'Cloudways unused prepaid funds policy' },
      { url: 'https://support.cloudways.com/en/articles/8743665-how-to-change-the-domain-name-of-your-application', label: 'Cloudways default application domains' },
    ],
  },
  {
    slug: 'kinsta', name: 'Kinsta',
    plan: 'No ongoing general-purpose free WordPress hosting tier verified; the first-month offer is temporary.',
    trial: 'First month free on selected plans for new customers; the guarantee documentation describes a 30-day free period. The selected monthly offer continues at $35/month afterward.',
    refund: '30-day guarantee for first-time customers on eligible Managed WordPress hosting; after a qualifying free period it starts at renewal. Overages, dedicated servers and one-time fees are excluded.',
    subdomain: 'A temporary kinsta.cloud URL is included for the site; temporary URLs are not indexed by search engines.',
    sources: [
      { url: 'https://kinsta.com/pricing/', label: 'Kinsta first-month offer and ongoing monthly price' },
      { url: 'https://kinsta.com/docs/service-information/money-back-guarantee/', label: 'Kinsta guarantee timing and excluded fees' },
      { url: 'https://kinsta.com/docs/wordpress-hosting/wordpress-domains/wordpress-temporary-url/', label: 'Kinsta temporary URL limitations' },
    ],
  },
  {
    slug: 'namecheap', name: 'Namecheap',
    plan: 'No ongoing free Shared Hosting tier advertised; the zero-cost period is a limited-time trial.',
    trial: 'Shared Hosting: 30 days, limited to one trial subscription per account across shared plans. The displayed Stellar monthly trial continues at $2.28/month; check checkout eligibility.',
    refund: '30 days for eligible first-time Shared Hosting customers who start without a trial. Do not combine the trial with this separate guarantee.',
    subdomain: 'A short-term cpanel.site domain is documented; it has no email, editable DNS or search indexing. It is a hosting-account feature, not a free permanent plan.',
    sources: [
      { url: 'https://www.namecheap.com/hosting/shared/', label: 'Namecheap Shared Hosting trial, continuation and guarantee terms' },
      { url: 'https://www.namecheap.com/support/knowledgebase/article.aspx/897/29/how-to-create-an-addon-domain/', label: 'Namecheap temporary domain restrictions' },
    ],
  },
] as const

export const hostingGuideLinks = [
  { path: '/blog/2026-web-hosting-price-index', label: 'Check the ten-provider entry and renewal price dataset' },
  { path: '/reviews/hostinger', label: 'Read the Hostinger review before accepting the hosting term' },
  { path: '/alternatives/hostinger', label: 'Compare the other four hosting choices beyond Hostinger' },
  { path: '/quiz/web-hosting-and-domains', label: 'Find a hosting match for your site and experience' },
  { path: '/web-hosting-and-domains', label: 'Compare our five web hosting picks' },
  { path: '/blog/kinsta-vs-cloudways', label: 'Kinsta or Cloudways: find the managed-hosting fit' },
  { path: '/guides/shared-vs-cloud-vs-managed-wordpress-hosting', label: 'Understand shared, cloud and managed WordPress hosting' },
  { path: '/guides/hostinger-vs-bluehost', label: 'Choose between Hostinger and Bluehost for a first site' },
  { path: '/compare/hostinger-vs-cloudways', label: 'Compare Hostinger with a move to Cloudways' },
  { path: '/reviews/cloudways', label: 'Read the detailed Cloudways review' },
] as const
