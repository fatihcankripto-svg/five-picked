import { editorialIdentity } from '@/lib/editorial-identity'
/** Official-source access observations, not a hands-on test. */
export const marketingSeoFreeEditorial = {
  authorBio: editorialIdentity.bio,
  lastReviewedAt: '2026-10-31',
}
export const marketingSeoFreeOptions = [
  {
    slug: 'semrush', name: 'Semrush', audience: 'Marketers making small research checks',
    standout: 'An ongoing limited account, separate from toolkit trials',
    price: 'Free account; optional 7-day toolkit trials with billing details',
    access: 'The current SEO & AI Search pricing page lists 1 demo project and 10 reports per day across vital tools. These are shared plan limits, not 10 reports for every tool. No monthly AI-word or credit allowance or extra-user entitlement is established here.',
    trial: 'Eligible toolkits offer a separate 7-day trial requiring payment details. It converts to the selected paid plan unless cancelled; previous trial or paid use can affect eligibility.',
    features: 'Limited keyword and domain research is available. The reviewed sources do not establish a full recurring free SERP-analysis, optimization or AI-writing allowance. Data export is disabled during toolkit trials; paid-plan export rights do not carry over to a trial.',
    commercial: 'The terms cover unpaid users and permit internal business use within the selected plan. This is not permission to resell the service or redistribute the data without checking the applicable restrictions.',
    sources: [
      { label: 'Semrush current Free account: project and daily report limits', url: 'https://www.semrush.com/pricing/seo-ai-search/' },
      { label: 'Semrush toolkit trial eligibility, renewal and export restrictions', url: 'https://www.semrush.com/kb/1011-subscriptions' },
      { label: 'Semrush free-account research functions', url: 'https://www.semrush.com/blog/what-can-i-do-with-a-free-account-from-semrush/' },
      { label: 'Semrush internal-business-use terms', url: 'https://www.semrush.com/company/legal/terms-of-service/' },
    ],
  },
  {
    slug: 'surfer-seo', name: 'Surfer SEO', audience: 'SEO writers evaluating an optimization workflow',
    standout: 'Pro feature access during a time-limited evaluation',
    price: '7-day Pro trial; converts to the selected paid subscription',
    access: 'A 7-day Pro trial is documented for new accounts. An ongoing free main-suite plan is not verified. The trial article does not specify numeric document, AI-credit, project or user allowances; full feature access is not an unlimited-volume promise.',
    trial: 'Choose a plan and enter billing details. The selected subscription starts and the card is charged after 7 days unless you cancel before the trial ends.',
    features: 'The trial includes keyword research, content audit, AI writing, AI Visibility and real-time SEO guidelines. Continuing the main suite requires paid access. A separate trial export entitlement or numeric SERP-analysis allowance is not verified.',
    commercial: 'The reviewed trial documentation does not explicitly establish trial-output commercial-use rights. No blanket commercial license or exclusivity is claimed; confirm the applicable terms before a client deliverable.',
    sources: [
      { label: 'Surfer trial feature access, duration and automatic billing', url: 'https://docs.surferseo.com/en/articles/12944181-how-does-the-surfer-trial-work' },
      { label: 'Surfer pricing FAQ: new-account Pro trial', url: 'https://docs.surferseo.com/en/articles/7545943-pricing-faq' },
    ],
  },
  {
    slug: 'neuronwriter', name: 'NeuronWriter', audience: 'Writers evaluating SERP-based content optimization',
    standout: 'Gold-plan feature evaluation without a card requirement',
    price: '7-day trial under Gold terms; no card required',
    access: 'The pricing FAQ offers 7 days under Gold plan terms. No ongoing free main-suite plan is verified. Paid Gold lists document, project, AI-credit and team allowances, but a separate numeric trial allocation or replenishment schedule is not established here; those paid quantities are not presented as free monthly credits.',
    trial: 'New users receive a 7-day free trial with Gold features. No credit card is required. After evaluation, access follows the chosen plan; a lower paid plan can omit features seen during the trial.',
    features: 'Gold includes content optimization, AI templates, Content Designer, team functions and integrations. These are evaluation features, not permanent free entitlements. Separate trial keyword-research, export and report quotas are not verified.',
    commercial: 'The pricing page addresses business owners, copywriters and agencies, but this does not establish an explicit commercial-output license for the trial. Trial-specific commercial rights remain unverified.',
    sources: [
      { label: 'NeuronWriter pricing and Gold trial conditions', url: 'https://neuronwriter.com/pricing-neuron/' },
      { label: 'NeuronWriter trial access and no-card payment FAQ', url: 'https://neuronwriter.com/faq-category/payments/' },
    ],
  },
  {
    slug: 'frase', name: 'Frase', audience: 'Content teams evaluating a research-to-publishing workflow',
    standout: 'A trial with explicitly stated article, audit and seat caps',
    price: '7-day trial; no card required; capped usage',
    access: 'The 7-day trial includes up to 5 articles, 50 audit pages, 25 AI prompts and 3 seats. These are trial caps, not monthly free allowances. No separate trial project count or AI-word allowance is verified. An ongoing free main-suite plan is not established.',
    trial: 'No credit card is required to start. The trial evaluates Professional features; continued subscription access is paid.',
    features: 'Trial access includes content planning, internal linking, AI content engines and AI Visibility, including optional agent publishing. Paid-plan article quantities and client-report features are not assumed to apply to the trial. A trial-specific report export allowance is not verified.',
    commercial: 'The terms address submitted Customer Data and responsibility for its legality; that is not an explicit trial AI-output commercial-use grant. No blanket commercial-output entitlement is established here.',
    sources: [
      { label: 'Frase pricing FAQ: exact trial caps and Professional access', url: 'https://www.frase.io/pricing' },
      { label: 'Frase trial and publishing workflow', url: 'https://www.frase.io/' },
      { label: 'Frase terms: Customer Data and intellectual property', url: 'https://www.frase.io/company/terms' },
    ],
  },
  {
    slug: 'writesonic', name: 'Writesonic', audience: 'Marketers checking AI crawlability or evaluating AI content tools',
    standout: 'Standalone free tools are separate from the platform trial',
    price: 'Free standalone tools with daily limits; 7-day platform trial',
    access: 'The llms.txt Generator and AI Crawl Checker provide full on-screen output without login or email, subject to daily limits whose numeric amount is not published on the reviewed page. The main platform offers a 7-day no-card trial; its exact trial credits, users, projects and article allocation are not verified.',
    trial: 'The homepage and AI Article Writer advertise a 7-day free trial without a card. This does not establish a permanent free subscription to the full platform.',
    features: 'Standalone free tools do not establish free ongoing keyword research, SERP analysis, content optimization or AI writing. Paid Starter article, project and user quantities must not be reused as trial allowances. A full-platform trial report export entitlement is not verified.',
    commercial: 'The terms assign generated outputs to the customer subject to third-party and model-provider rights and human review. Service use follows the order and business-use restrictions; this is not unrestricted resale or guaranteed copyright protection for every output.',
    sources: [
      { label: 'Writesonic standalone free tools and daily-limit disclosure', url: 'https://writesonic.com/free-tools' },
      { label: 'Writesonic homepage: 7-day no-card trial', url: 'https://writesonic.com/' },
      { label: 'Writesonic paid-plan gates, not trial quotas', url: 'https://writesonic.com/pricing' },
      { label: 'Writesonic output ownership and usage restrictions', url: 'https://writesonic.com/legal/terms' },
    ],
  },
]
