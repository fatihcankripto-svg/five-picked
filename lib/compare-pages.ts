import { thirdComparePairs, thirdCompareTool } from '@/lib/compare-package-three'
import { secondComparePairs, secondCompareTool } from '@/lib/compare-package-two'
import { packageComparePairs, packageCompareTool } from '@/lib/compare-package'
import { marketingSeoFreeEditorial, marketingSeoFreeOptions } from '@/lib/marketing-seo-free-options'
import { flightFreeEditorial, flightFreeOptions } from '@/lib/flight-free-options'
import { editorialDates } from '@/lib/editorial-dates'
/**
 * FIVE PICKED — "X vs Y" comparison pages.
 * Only pairs where both tools exist in the data files. Guides that already
 * cover a pair are skipped to avoid duplicate content.
 */

import { publishedCategories as allCategories } from '@/data/all-categories'
import type { Tool } from '@/data/categories'

export const comparePagesUpdated = editorialDates.comparisons

export type ComparePair = {
  slug: string
  aSlug: string
  bSlug: string
  /** One-line framing shown under the H1. */
  framing: string
  /** Short verdict: which one to pick, for whom. */
  verdict: string
  /** 2–4 bullet points: when A wins. */
  aWinsWhen: string[]
  /** 2–4 bullet points: when B wins. */
  bWinsWhen: string[]
  faqs: { question: string; answer: string }[]
  /** The list page these tools came from. */
  listPath: string
  listLabel: string
  authorBio?: string
  lastReviewedAt?: string
  scopeNote?: string
  decisionRows?: { label: string; a: string; b: string }[]
  migration?: { title: string; text: string }[]
  sources?: { url: string; label: string }[]
  relatedLinks?: { path: string; label: string }[]
}

const kiwiFlight = flightFreeOptions.find((option) => option.slug === 'kiwi-com')!
const tripFlight = flightFreeOptions.find((option) => option.slug === 'trip-com')!

const semrushFree = marketingSeoFreeOptions.find((option) => option.slug === 'semrush')!
const surferFree = marketingSeoFreeOptions.find((option) => option.slug === 'surfer-seo')!
const seoComparePrices = {
  semrush: 'SEO plan: US$139/month, or US$117.33/month billed annually; limited Free account available',
  surfer: 'Discovery: US$49/month billed yearly; separate 7-day Pro trial',
}

const pairs: ComparePair[] = [
  ...thirdComparePairs,
  ...secondComparePairs,
  ...packageComparePairs,
  {
    slug: 'semrush-vs-surfer-seo', aSlug: 'semrush', bSlug: 'surfer-seo',
    authorBio: marketingSeoFreeEditorial.authorBio, lastReviewedAt: marketingSeoFreeEditorial.lastReviewedAt,
    framing: 'Choose by the decision you need to make: which search opportunities to pursue, or how to improve an article already in production. This page is a short buying framework; the linked blog provides the deeper workflow analysis.',
    verdict: 'Consider Semrush when keyword and competitor research, site auditing and tracking drive your work. Consider Surfer when your immediate job is improving a draft with content-editor guidelines. Both have overlapping functions: check the exact plan, exports and team entitlements before paying for both. Neither a free account nor a Pro trial guarantees a complete ongoing production workflow.',
    aWinsWhen: [
      'You need to investigate keywords and competing domains before deciding what to publish.',
      'Site auditing and position tracking belong in the same research process as your keyword work.',
      'An ongoing limited account is enough for occasional checks, or you can justify the selected paid toolkit.',
    ],
    bWinsWhen: [
      'You already have a topic or draft and need a content-editor workflow with SEO guidance.',
      'You want to evaluate keyword research, audit and AI writing together during the documented Pro trial.',
      'You have checked the continuing paid plan; trial Pro features are not automatically included in entry-level Discovery.',
    ],
    scopeNote: 'Official pages reviewed October 31, 2026. Free access text is reused from our verified free guide. Prices below name the current advertised plans and billing basis, rather than reusing older repository price labels. Suitability is editorial guidance, not a performance, ranking or hands-on test.',
    decisionRows: [
      { label: 'Keyword research', a: 'Basic keyword research is listed in the SEO plan. Editorial fit: investigating demand before commissioning an article. Free usage remains limited.', b: 'Keyword research is documented in the Pro trial. Confirm the continuing paid plan rather than assuming Discovery includes every Pro feature.' },
      { label: 'SERP and competitor analysis', a: 'The SEO plan lists competitor analysis. Editorial fit: comparing domains and opportunities before selecting work; deeper data depends on the toolkit and plan.', b: 'The Content Editor supports competitor research and outlines. Advanced SERP Analysis is listed in a higher plan; it is not presented as an entry-plan entitlement.' },
      { label: 'Content optimization and editor', a: 'Content optimization and AI writing are available through the separately described Content Toolkit. Do not assume every SEO entry subscription includes the same content workflow.', b: 'Discovery lists AI SEO optimization guidelines and Surfy. The Content Editor organizes research, writing, optimization and publishing steps.' },
      { label: 'AI writing', a: 'The Content Toolkit documents AI Chat, rewriting and article creation. A recurring free AI-writing quota is not established in the free guide.', b: 'AI writing is included in the Pro trial. No numeric trial generation allowance is verified, and full feature access is not unlimited usage.' },
      { label: 'Reporting and export', a: 'Toolkit trial data exports are disabled. Paid exports depend on the chosen plan; do not buy a trial for an urgent export deliverable.', b: 'The Content Editor documents HTML and Markdown article export. Article export is different from client reporting; a trial-specific report export entitlement is not verified.' },
      { label: 'Team and user limits', a: 'No extra-user entitlement is verified for the Free account. The pricing page sells additional users separately; confirm seats for the selected toolkit.', b: 'The reviewed trial article does not specify a numeric user allowance. Discovery’s summary is not evidence of a particular team size; confirm users separately from document and brand limits.' },
      { label: 'Free access and quotas', a: semrushFree.access, b: surferFree.access },
      { label: 'Trial billing conditions', a: semrushFree.trial, b: surferFree.trial },
      { label: 'First advertised paid tier and billing', a: seoComparePrices.semrush, b: seoComparePrices.surfer },
    ],
    migration: [
      { title: 'Move from Semrush-led research to Surfer-led editing when the task changes', text: 'Consider Surfer when you already have a researched brief and your bottleneck is improving the article in an editor. Evaluate one representative draft and verify the intended paid plan. This is a suggested workflow decision, not evidence of better rankings or a guaranteed one-click project transfer.' },
      { title: 'Move from Surfer-led editing to Semrush-led research when priorities are unclear', text: 'Consider Semrush when the next decision is which topics, competitors or site issues deserve attention rather than how to revise a known draft. Keep the existing brief and source text, and compare the actual research and export entitlements before changing subscriptions.' },
      { title: 'Who should not choose either subscription yet?', text: 'Semrush is a poor fit if you only need occasional draft-level guidance and will not use its research workflow. Surfer is a poor fit if you expect its entry plan to replace every competitor-research or reporting requirement. Neither should be purchased before a mandatory export or team entitlement is confirmed. These are editorial fit judgments, not product capability exclusions.' },
      { title: 'Avoid paying twice for an untested overlap', text: 'List the research, drafting, optimization and reporting tasks you actually need. Buy both only when each fills a documented gap in the selected plans. A lower entry headline is not a like-for-like comparison: Semrush’s Content Toolkit is separately described, and Surfer’s temporary Pro access differs from Discovery. A yearly-billed monthly equivalent is not a cancel-anytime monthly bill.' },
    ],
    sources: [
      { label: 'Semrush current SEO plan prices, Free limits and included research functions', url: 'https://www.semrush.com/pricing/seo-ai-search/' },
      { label: 'Semrush toolkit trial billing and export restrictions', url: 'https://www.semrush.com/kb/1011-subscriptions' },
      { label: 'Semrush Content Toolkit writing and optimization features', url: 'https://www.semrush.com/kb/1536-content-toolkit-pricing-and-plans' },
      { label: 'Surfer Discovery pricing and plan-specific features', url: 'https://surfer.ai/pricing/' },
      { label: 'Surfer Pro trial access and automatic conversion', url: 'https://docs.surferseo.com/en/articles/12944181-how-does-the-surfer-trial-work' },
      { label: 'Surfer Content Editor workflow and article export', url: 'https://docs.surferseo.com/en/articles/5700347-content-editor-overview' },
    ],
    faqs: [
      { question: 'Is Semrush Free equivalent to Surfer’s Pro trial?', answer: 'No. Semrush provides an ongoing limited account; Surfer documents temporary Pro access. The shared free-guide limits and conditions are shown in the comparison table, not treated as equivalent production allowances.' },
      { question: 'Does Surfer Discovery include every Pro trial feature?', answer: 'Do not assume so. The trial and the continuing paid plan are different offers. Check required keyword, audit, AI writing, user and reporting entitlements before the trial converts.' },
      { question: 'Can I export Semrush data during a toolkit trial?', answer: 'Semrush disables data export during toolkit trials. Paid-plan export allowances do not establish a trial entitlement. Check the chosen subscription if an export is part of your deliverable.' },
      { question: 'Should I subscribe to both?', answer: 'Only when the selected plans fill distinct needs in your actual workflow. Research and editing can overlap. This page does not claim a measured productivity gain or ranking improvement from combining them.' },
    ],
    listPath: '/ai-tools/marketing-and-seo', listLabel: 'The complete marketing and SEO shortlist',
  },
  {
    slug: 'kiwi-com-vs-trip-com', aSlug: 'kiwi-com', bSlug: 'trip-com',
    authorBio: flightFreeEditorial.authorBio,
    lastReviewedAt: flightFreeEditorial.lastReviewedAt,
    framing: 'Choose by the itinerary you can manage and the booking conditions you can accept. Kiwi.com combines separate-airline routes; Trip.com documents free route tracking across desktop and mobile. Neither makes every booking free to change or cancel.',
    verdict: 'Consider Kiwi.com when its separate-ticket combination fits your route and you understand self-transfer responsibilities. Consider Trip.com when its route alerts and the selected fare’s conditions fit your trip. Compare the final payable total, baggage and refund rules before choosing; this is an editorial decision framework, not a price or usability test.',
    aWinsWhen: [
      'A separate-airline combination suits your journey and you can manage collecting and rechecking bags where required.',
      'You have checked the service-fee breakdown, selected protection and the cancellation conditions attached to that booking.',
      'You want account-based price alerts and accept the documented website and service conditions.',
    ],
    bWinsWhen: [
      'You want explicitly documented free route alerts on desktop or mobile without a membership upgrade.',
      'The actual fare you find has baggage and change conditions that meet your needs after you check the payable total.',
      'You prefer to evaluate flight options alongside the platform’s other travel products; this does not guarantee a single protected ticket.',
    ],
    scopeNote: 'Official sources reviewed October 31, 2026. Access, fees and cancellation text below reuse the travel free guide’s data. Unspecified amounts and limits remain unspecified. Suitability is editorial guidance; no booking, refund or mobile usability test was performed.',
    decisionRows: [
      { label: 'Free search', a: kiwiFlight.price, b: tripFlight.price },
      { label: 'Price alerts and access limits', a: kiwiFlight.access, b: tripFlight.access },
      { label: 'Service and transaction fees', a: kiwiFlight.fees, b: tripFlight.fees },
      { label: 'Cancellation and changes', a: kiwiFlight.changes, b: tripFlight.changes },
      { label: 'Baggage cost transparency', a: 'Carrier ancillaries are separated from the base fare in the booking breakdown. Self-transfer can require bag collection and recheck. Inspect every segment; baggage is not automatically free.', b: 'Check the baggage rules attached to the selected fare. This guide makes no claim that every displayed fare includes a checked bag or that the interface is more transparent.' },
      { label: 'Currency and payment-provider costs', a: 'No universal separate payment-fee amount is verified in the free guide. Do not infer that every payment method or currency is cost-free.', b: 'The payment account provider may use a different exchange rate or charge for international payments. No fixed universal amount is verified.' },
      { label: 'Mobile experience: documented functions', a: 'Account-based alerts can send push notifications; alerts can be managed in the website or app. No measured ease-of-use or speed advantage is claimed.', b: 'The official guide documents free alerts on desktop and in the app. No measured mobile usability advantage is claimed.' },
    ],
    migration: [
      { title: 'When to compare Trip.com after searching Kiwi.com', text: 'Before buying, check Trip.com if the Kiwi.com option needs a self-transfer you cannot manage, or its baggage, agency charges or refund conditions do not fit your trip. Choose only if the actual alternative itinerary and final terms resolve that problem. Trip.com is not automatically cheaper, refundable or protected against missed connections.' },
      { title: 'When to compare Kiwi.com after searching Trip.com', text: 'Before buying, check Kiwi.com when you want to explore separate-airline combinations beyond the itinerary you found. Inspect all segments, baggage handling and selected protection before accepting the route. A search result is not proof of a lower total cost.' },
      { title: 'Who should not choose Kiwi.com or Trip.com yet?', text: 'Kiwi.com is unsuitable for a traveler who cannot manage the responsibilities of a proposed self-transfer itinerary. Trip.com is unsuitable if the selected fare fails a required baggage or refund condition. Neither should be selected on an assumption of universally free cancellation. After purchase, manage the existing booking under its original conditions; switching search sites does not transfer a ticket or erase charges.' },
      { title: 'Service fees are not evidence of hidden fees', text: 'A documented agency service fee is separate from the airfare, baggage and payment-provider costs. The free guide and this comparison do not establish undisclosed charges or certify a fee-free checkout. Check the breakdown before payment; an unspecified Trip.com fee is not evidence that its fee is zero.' },
    ],
    sources: [...kiwiFlight.sources, ...tripFlight.sources],
    faqs: [
      { question: 'Is Trip.com always cheaper than Kiwi.com?', answer: 'No matched fare test is presented. Compare the same journey, included baggage, agency charges, payment currency and cancellation conditions before deciding.' },
      { question: 'Does the Kiwi.com assisted refund deduction apply to every refund?', answer: 'No. The basic voluntary assisted-refund condition described in the table can deduct from recovered carrier funds and may be waived. Other selected services and disruption circumstances have their own conditions; do not treat one rule as universal.' },
      { question: 'Does Trip.com include free cancellation for every flight?', answer: 'No universal free entitlement is established. Rights and associated fees are shown during booking; some fares cannot be changed or refunded.' },
      { question: 'Can I move a booked ticket between these sites?', answer: 'No ticket-transfer entitlement is established here. The switching scenarios concern comparison before purchase. Manage an existing booking with the original provider and under its conditions.' },
    ],
    listPath: '/travel/flights', listLabel: 'Our full shortlist of five flight booking sites',
  },
  {
    slug: 'capcut-vs-premiere-pro', aSlug: 'capcut', bSlug: 'adobe-premiere-pro',
    framing: 'Choose by the job you need to deliver: a template-oriented social edit or a desktop editing workflow with detailed control. Free access and commercial rights are separate decisions.',
    verdict: 'Choose CapCut when its standard editing workflow and the permitted assets cover your deliverable. Choose Premiere Pro when the desktop controls, Adobe workflow and review process justify a subscription. Neither is a sensible choice if the required export, device support or media rights have not been checked.',
    aWinsWhen: [
      'Your immediate task is a social edit using your own media and standard editing tools.',
      'You want to evaluate free access and can check the entire project for Pro-only elements before export.',
      'You need a mobile, web or desktop starting point and will verify feature availability on that specific version.',
    ],
    bWinsWhen: [
      'Your work needs detailed desktop color, audio and effects control rather than a template-led starting point.',
      'You already work in an Adobe workflow and need the included Frame.io review route.',
      'You can accommodate the subscription commitment and verify the desktop system requirements before starting.',
    ],
    scopeNote: 'CapCut is included as a comparison-only reference tool, not an extra ranked category pick. Suitability and learning-curve comments are editorial guidance, not measured speed or learning-time results. Official conditions checked October 31, 2026.',
    decisionRows: [
      { label: 'Price and commitment', a: 'A Free option is listed. Pro and other paid offers must be checked for the account and purchase channel; no fixed Pro price is quoted here.', b: 'Individual single-app plan: US$22.99/month on an annual commitment billed monthly. A 7-day trial converts to paid unless cancelled.' },
      { label: 'Platform', a: 'CapCut documents Online, desktop Windows/macOS, and mobile iOS/Android workflows. Feature and team controls differ between them.', b: 'This comparison focuses on Premiere desktop for Windows and macOS. Check Adobe’s current system requirements; the separate mobile offer is not a substitute for desktop compatibility.' },
      { label: 'Editing depth and fit', a: 'Standard editing can assemble your own clips, music, text and effects. Editorial fit: a focused social deliverable that does not require a broader desktop workflow.', b: 'Adobe documents color grading, audio tools, effects and timeline editing. Editorial fit: projects needing those controls and an Adobe-centered production process.' },
      { label: 'Learning curve', a: 'Editorial decision: start with a small standard edit and confirm the final export before building a template-heavy workflow. No learning-time claim is made.', b: 'Editorial decision: choose it when you will use the desktop controls, and allow time to learn that workflow. No measured training-time comparison is available here.' },
      { label: 'Collaboration', a: 'CapCut documents team workspaces and plan-dependent member limits; full team management is handled online. Do not assume a free workspace fits every team.', b: 'Adobe lists Frame.io review and approval with the subscription. Review collaboration is not a promise that every team can edit one timeline simultaneously.' },
      { label: 'Export and watermark', a: 'Watermark-free export depends on the version, template and assets. A Pro element can trigger a paid export requirement, even when a lower resolution is selected. No universal free 4K, duration or project allowance is asserted.', b: 'The desktop trial is described as the full version for 7 days, followed by paid access. This is not an ongoing free desktop export plan; check the selected plan and actual deliverable during evaluation.' },
      { label: 'Performance', a: 'No matched export-speed or playback benchmark is claimed. Evaluate the intended version with your footage and device rather than assuming a mobile or web workflow is faster.', b: 'No faster-render claim is made. Adobe publishes CPU, memory, GPU and storage requirements; check those and evaluate your own footage before changing workflows.' },
      { label: 'Commercial use and licensing', a: 'CapCut’s legal page permits commercial use of templates and materials expressly labeled Commercial Use. Free access or Pro payment does not by itself clear every included asset.', b: 'Adobe’s software terms and each asset license apply separately. Its general terms restrict commercial output from versions designated NFR, including trial/evaluation designations. No blanket commercial clearance for the trial is claimed.' },
    ],
    migration: [
      { title: 'Move from CapCut to Premiere Pro when the workflow requires it', text: 'Consider the move when a deliverable needs the desktop controls or Adobe review workflow described above and you can justify the subscription. First recreate one representative edit with your original media, check the system requirements and required licenses, and compare the delivered output. This is a decision process, not a claim of lossless project interchange.' },
      { title: 'Use CapCut again when the task is narrower', text: 'Consider CapCut for a focused social edit when its standard tools meet the brief without unnecessary production overhead. Verify export availability and asset permissions before committing. Keep the original media and finished master; this page does not promise automatic project transfer between the applications.' },
      { title: 'Who should not choose either tool yet?', text: 'If a mandatory codec, device, collaboration arrangement or commercial license has not been verified, resolve that requirement first. A clean-looking export and a paid subscription are not evidence that all third-party footage, music or templates are licensed for the intended use.' },
    ],
    sources: [
      { url: 'https://www.capcut.com/pricing', label: 'CapCut current free and paid access options' },
      { url: 'https://www.capcut.com/help/video-without-watermark', label: 'CapCut conditional watermark-free export' },
      { url: 'https://www.capcut.com/help/join-capcut-pro-for-exporting', label: 'CapCut Pro elements and export requirements' },
      { url: 'https://www.capcut.com/help/team-collaboration-feature', label: 'CapCut platform and team-workspace conditions' },
      { url: 'https://www.capcut.com/trust/legal', label: 'CapCut ownership and Commercial Use material labels' },
      { url: 'https://www.adobe.com/products/premiere/plans.html', label: 'Adobe Premiere subscription price and Frame.io review' },
      { url: 'https://www.adobe.com/products/premiere/free-trial-download.html', label: 'Adobe Premiere full-version trial and billing transition' },
      { url: 'https://helpx.adobe.com/premiere/desktop/get-started/technical-requirements/adobe-premiere-pro-technical-requirements.html', label: 'Adobe Premiere desktop system requirements' },
      { url: 'https://www.adobe.com/legal/terms.html', label: 'Adobe content, trial and NFR licensing terms' },
    ],
    faqs: [
      { question: 'Can I use CapCut free without a watermark?', answer: 'CapCut says this depends on the app version and the features, templates and assets in the project. Standard editing with suitable free assets can allow clean export, while Pro content can introduce a paid requirement. Check a representative export before building the whole project.' },
      { question: 'Is Premiere Pro permanently free after the trial?', answer: 'No. Adobe describes a 7-day full-version trial that converts to a paid subscription unless cancelled. The listed US$22.99 monthly individual price is an annual commitment billed monthly, not a cancel-anytime monthly commitment.' },
      { question: 'Does buying Pro or a subscription clear every asset commercially?', answer: 'No. CapCut identifies materials expressly labeled Commercial Use, and Adobe applies its software terms alongside asset-specific rights. Check music, footage and templates separately; no blanket commercial permission for trial output is asserted here.' },
      { question: 'Which editor performs faster?', answer: 'This page does not provide a matched performance benchmark. Test representative footage on your own device and check system requirements; an editorial workflow recommendation is not a measured render-speed ranking.' },
      { question: 'Can I transfer projects automatically between the two?', answer: 'No automatic or lossless project-transfer claim is made here. Retain the original media and finished master and verify the intended workflow before moving an active project.' },
    ],
    listPath: '/video-and-design-software', listLabel: 'Video and design software shortlist',
    relatedLinks: [
      { path: '/blog/capcut-vs-premiere-pro', label: 'Read the deeper CapCut and Premiere workflow analysis' },
      { path: '/free/best-free-video-and-design-software', label: 'Check free video tools, watermarks and license conditions' },
      { path: '/quiz/video-and-design-software', label: 'Match an editor or recording tool to your production needs' },
    ],
  },
  {
    slug: 'fiverr-vs-upwork',
    aSlug: 'fiverr',
    bSlug: 'upwork',
    framing:
      'Fiverr is fixed-price packages; Upwork is proposals and contracts. They suit different ways of selling.',
    verdict:
      'Pick Fiverr if you sell a clear, repeatable service and want orders to arrive without proposals. Pick Upwork if you want longer contracts, hourly work or higher-budget clients.',
    aWinsWhen: [
      'You want to sell one specific service as a package',
      'You prefer fixed prices and fast orders over proposals',
      'You are starting out and want a simple profile',
    ],
    bWinsWhen: [
      'You want ongoing or hourly contracts',
      'You are targeting larger clients and budgets',
      'You are hiring and want to browse profiles and proposals',
    ],
    faqs: [
      {
        question: 'Is Fiverr cheaper than Upwork?',
        answer:
          'Fiverr orders are usually smaller and fixed-price, so the total is lower per job. Upwork contracts tend to be larger and longer, so the totals are higher. Both charge platform fees on top.',
      },
      {
        question: 'Which is better for beginners?',
        answer:
          'Fiverr is easier to start on because you list a package and wait for orders. Upwork rewards a strong profile and proposals, so it takes more effort up front.',
      },
      {
        question: 'Can I use both?',
        answer:
          'Yes, and many freelancers do. Fiverr brings steady small orders, Upwork brings bigger contracts. Keep your pricing consistent so you do not undercut yourself.',
      },
    ],
    listPath: '/freelance-platforms',
    listLabel: 'Freelance platforms top 5',
  },
  {
    slug: 'mailerlite-vs-kit',
    aSlug: 'mailerlite',
    bSlug: 'kit',
    framing:
      'MailerLite is friendly and simple; Kit is built for creators who plan to sell products.',
    verdict:
      'Pick MailerLite for a clean first newsletter with a generous free plan. Pick Kit if you sell digital products or paid newsletters and want creator-focused tools.',
    aWinsWhen: [
      'You want the simplest editor and the friendliest free plan',
      'You are running a small business list, not a creator business',
      'You care more about clean emails than fancy automations',
    ],
    bWinsWhen: [
      'You sell digital products or paid subscriptions',
      'You are a YouTuber, podcaster or course creator',
      'You want creator-specific landing pages and templates',
    ],
    faqs: [
      {
        question: 'Which has the better free plan?',
        answer:
          'Both free plans cover small lists. MailerLite is easier to use, and Kit is stronger if you plan to sell something later. Check the current subscriber limits on each website.',
      },
      {
        question: 'Can I migrate from MailerLite to Kit?',
        answer:
          'Yes. Both tools support CSV import and can migrate subscribers and tags. Plan a quiet day for the move so your open rates do not dip.',
      },
      {
        question: 'Which is better for a blog newsletter?',
        answer:
          'MailerLite is simpler if you only send newsletters. Kit is better if you also want to sell ebooks or courses from the same tool.',
      },
    ],
    listPath: '/email-marketing',
    listLabel: 'Email marketing top 5',
  },
  {
    slug: 'pcloud-vs-sync-com',
    aSlug: 'pcloud',
    bSlug: 'sync-com',
    framing:
      'pCloud offers lifetime plans; Sync.com focuses on zero-knowledge encryption.',
    verdict:
      'Pick pCloud if you want to pay once and avoid subscriptions. Pick Sync.com if privacy and end-to-end encryption matter more than price.',
    aWinsWhen: [
      'You want a lifetime plan instead of a subscription',
      'You want the most generous free storage in this list',
      'You mainly store files, not sensitive documents',
    ],
    bWinsWhen: [
      'You want end-to-end encryption on every plan',
      'You are storing sensitive or business files',
      'You are happy to pay monthly for privacy',
    ],
    faqs: [
      {
        question: 'Is pCloud lifetime really unlimited?',
        answer:
          'No. pCloud sells lifetime plans for a fixed storage amount, not unlimited space. Read the plan details before you buy.',
      },
      {
        question: 'Does Sync.com work on mobile?',
        answer:
          'Yes. Sync.com has iOS and Android apps and syncs across devices like a normal cloud drive.',
      },
      {
        question: 'Which is better for sharing files with clients?',
        answer:
          'pCloud is easier for casual sharing links. Sync.com is better if the files are confidential and you need encryption end to end.',
      },
    ],
    listPath: '/software-and-productivity/cloud-storage',
    listLabel: 'Cloud storage top 5',
  },
  {
    slug: 'adobe-firefly-vs-ideogram',
    aSlug: 'adobe-firefly',
    bSlug: 'ideogram',
    framing:
      'Firefly is built for commercial safety inside Adobe; Ideogram is built for images with readable text.',
    verdict:
      'Pick Firefly if you need commercial-use AI images and already use Adobe apps. Pick Ideogram if your images include words, like logos, posters or social graphics.',
    aWinsWhen: [
      'You need commercial-use AI images with confidence',
      'You already use Photoshop or other Adobe apps',
      'You want text-to-image and image editing in one ecosystem',
    ],
    bWinsWhen: [
      'Your image needs readable text inside it',
      'You are making posters, logos or social graphics',
      'You want a simpler prompt-only workflow',
    ],
    faqs: [
      {
        question: 'Which is better at text inside images?',
        answer:
          'Ideogram is much stronger at readable text inside images. Firefly struggles with long words and unusual fonts.',
      },
      {
        question: 'Does Firefly have a free plan?',
        answer:
          'Yes, a free plan with a limited monthly credit allowance. Paid plans add more credits and higher-priority generations.',
      },
      {
        question: 'Can I sell images made with Ideogram?',
        answer:
          'Commercial use depends on your plan. Check Ideogram’s licence page before you sell anything generated on the free tier.',
      },
    ],
    listPath: '/ai-tools/image-and-design',
    listLabel: 'AI image & design top 5',
  },
  {
    slug: 'fliki-vs-synthesia',
    aSlug: 'fliki',
    bSlug: 'synthesia',
    framing:
      'Fliki turns scripts into narrated videos; Synthesia puts a lifelike AI presenter on screen.',
    verdict:
      'Pick Fliki for narrated explainer or social videos with natural voices. Pick Synthesia if you want a presenter delivering the script on camera for training or onboarding.',
    aWinsWhen: [
      'You want narrated videos with natural voices',
      'You are repurposing scripts or blog posts',
      'You do not need a presenter on screen',
    ],
    bWinsWhen: [
      'You need a presenter delivering your script',
      'You are making training or onboarding videos',
      'You want the same look across many languages',
    ],
    faqs: [
      {
        question: 'Do I need a camera for either?',
        answer:
          'No. Both create videos from text. Fliki adds narration and visuals, Synthesia adds a digital presenter.',
      },
      {
        question: 'Which is better for training videos?',
        answer:
          'Synthesia, because it puts a consistent presenter on screen and keeps the same look across languages.',
      },
      {
        question: 'Which has a free plan?',
        answer:
          'Both offer a free plan, but with limited video minutes. Check each website for the current free-tier limits.',
      },
    ],
    listPath: '/ai-tools/video-and-voice',
    listLabel: 'AI video & voice top 5',
  },
  {
    slug: 'elevenlabs-vs-fliki',
    aSlug: 'elevenlabs',
    bSlug: 'fliki',
    framing:
      'ElevenLabs is a voice tool; Fliki is a full video tool that includes voices.',
    verdict:
      'Pick ElevenLabs for the most realistic voiceover, dubbing or audiobook. Pick Fliki if you also need visuals and a finished video, not just audio.',
    aWinsWhen: [
      'You need only audio, not video',
      'Voice quality is the single most important thing',
      'You are dubbing or cloning a voice (with permission)',
    ],
    bWinsWhen: [
      'You need a finished video with visuals and captions',
      'You are turning a blog post into a video',
      'You want one tool instead of stacking audio and video tools',
    ],
    faqs: [
      {
        question: 'Can Fliki use ElevenLabs voices?',
        answer:
          'Fliki has its own voice library. ElevenLabs voices are a separate product, so check the current Fliki website if you specifically want a particular voice.',
      },
      {
        question: 'Which has a better free plan?',
        answer:
          'ElevenLabs’ free tier is a good way to test voice quality. Fliki’s free plan is a good way to test a full narrated video. Try the same short script in both.',
      },
      {
        question: 'Can I combine them?',
        answer:
          'Yes. Many creators record the voiceover in ElevenLabs and assemble the video separately. Fliki is a faster all-in-one alternative if you do not need that control.',
      },
    ],
    listPath: '/ai-tools/video-and-voice',
    listLabel: 'AI video & voice top 5',
  },
  {
    slug: 'asana-vs-clickup',
    aSlug: 'asana',
    bSlug: 'clickup',
    framing:
      'Asana is clean and simple; ClickUp is feature-heavy and lower-cost per user.',
    verdict:
      'Pick Asana if you want a clean tool a small team will actually use. Pick ClickUp if you want more views, docs and goals in one place for a lower per-user price.',
    aWinsWhen: [
      'You want a clean, easy-to-learn interface',
      'Your team uses lists, boards and timelines only',
      'You do not want to configure many settings',
    ],
    bWinsWhen: [
      'You want docs, goals and whiteboards in one tool',
      'You are comfortable spending time on setup',
      'You want the lowest per-user price for many features',
    ],
    faqs: [
      {
        question: 'Which is better for a small team?',
        answer:
          'Asana is easier to get started with. ClickUp is better once you want more features and do not mind some setup time.',
      },
      {
        question: 'Which has the better free plan?',
        answer:
          'Both free plans are usable for a small team. ClickUp’s covers more features; Asana’s is simpler and cleaner.',
      },
      {
        question: 'Can I switch later?',
        answer:
          'Yes. Both support CSV import, and migration tools exist. Plan a quiet day so nothing is in flight during the move.',
      },
    ],
    listPath: '/software-and-productivity/project-management',
    listLabel: 'Project management top 5',
  },
  {
    slug: 'coursera-vs-datacamp',
    aSlug: 'coursera',
    bSlug: 'datacamp',
    framing:
      'Coursera is broad; DataCamp is hands-on data and AI skills.',
    verdict:
      'Pick Coursera for university certificates and a wide subject range. Pick DataCamp if your goal is data skills — Python, SQL, analytics, AI — with exercises you actually write.',
    aWinsWhen: [
      'You want a certificate from a university or company',
      'You want a wide range of subjects beyond data',
      'You want to audit many courses for free',
    ],
    bWinsWhen: [
      'Your goal is data, Python, SQL or AI specifically',
      'You want hands-on exercises, not just videos',
      'You want a clear career track from beginner to job-ready',
    ],
    faqs: [
      {
        question: 'Which is better for a career change into data?',
        answer:
          'DataCamp is more direct for data roles because it teaches by doing. Coursera is stronger if you also want a university-branded certificate on your CV.',
      },
      {
        question: 'Can I use Coursera for free?',
        answer:
          'Many courses can be audited for free. Certificates and graded assignments need a paid plan or per-course fee.',
      },
      {
        question: 'Which is better for AI skills?',
        answer:
          'DataCamp covers practical AI and data skills with exercises. Coursera has deeper theory from university courses. Use both if you can afford it.',
      },
    ],
    relatedLinks: [{ path: '/free/best-free-online-course-platforms', label: 'Check preview limits and certificate access across five platforms' }],
    listPath: '/online-courses',
    listLabel: 'Online courses top 5',
  },
  {
    slug: 'hostinger-vs-cloudways',
    aSlug: 'hostinger',
    bSlug: 'cloudways',
    framing:
      'Hostinger is cheap shared hosting; Cloudways is managed cloud hosting for growing sites.',
    verdict:
      'Pick Hostinger for a first site on a budget. Pick Cloudways once your site has outgrown shared hosting or you manage several client sites.',
    aWinsWhen: [
      'You are launching a first site on a tight budget',
      'You want a simple control panel and a free domain for year one',
      'Your site has low to moderate traffic',
    ],
    bWinsWhen: [
      'Your site is growing and needs more headroom',
      'You manage multiple client sites',
      'You want cloud servers without server admin',
    ],
    faqs: [
      {
        question: 'Is Cloudways worth the extra cost over Hostinger?',
        answer:
          'Only if your site has outgrown shared hosting or you want cloud-level performance and control. For a first site, Hostinger is usually enough.',
      },
      {
        question: 'Does Cloudways include email?',
        answer:
          'No. Email is a paid add-on. Hostinger bundles email with most plans, which is one reason it suits beginners.',
      },
      {
        question: 'Can I migrate from Hostinger to Cloudways?',
        answer:
          'Yes. Cloudways offers migration help for WordPress sites. Check the current terms on the official website before you start.',
      },
    ],
    listPath: '/web-hosting-and-domains',
    listLabel: 'Web hosting & domains top 5',
  },
  {
    slug: 'expressvpn-vs-nordvpn',
    aSlug: 'expressvpn',
    bSlug: 'nordvpn',
    framing:
      'ExpressVPN is simple and polished; NordVPN is faster and cheaper on long plans.',
    verdict:
      'Pick ExpressVPN if you want the simplest app and do not mind paying more. Pick NordVPN for the best balance of speed, features and price on long plans.',
    aWinsWhen: [
      'You want the easiest, most polished apps',
      'You value simplicity over extra features',
      'You want RAM-only servers and clean audits',
    ],
    bWinsWhen: [
      'You want the fastest connections',
      'You want extra security features like Threat Protection',
      'You want the lowest price on a 2-year plan',
    ],
    faqs: [
      {
        question: 'Which is faster?',
        answer:
          'NordVPN is generally faster on benchmark tests thanks to its NordLynx protocol. ExpressVPN is fast too, but typically slightly behind.',
      },
      {
        question: 'Which is better for streaming?',
        answer:
          'Both work well for streaming. NordVPN has a slight edge on server variety and speed; ExpressVPN has slightly easier apps.',
      },
      {
        question: 'Which has a free plan?',
        answer:
          'Neither. Both offer a 30-day money-back guarantee instead. Proton VPN is the free option on our VPN list.',
      },
    ],
    listPath: '/vpn-and-security',
    listLabel: 'VPN & security top 5',
  },
  {
    slug: 'babbel-vs-italki',
    aSlug: 'babbel',
    bSlug: 'italki',
    framing:
      'Babbel is a structured self-paced course; italki is one-to-one tutoring with real people.',
    verdict:
      'Pick Babbel for structured lessons you can fit into a busy day. Pick italki if you want live conversation practice with a tutor and pay per lesson.',
    aWinsWhen: [
      'You want a clear, guided course path',
      'You can study in short sessions',
      'You prefer a fixed monthly price',
    ],
    bWinsWhen: [
      'You want real conversation practice with a person',
      'You prefer to pay per lesson, not a subscription',
      'You want a tutor who adapts to your goals',
    ],
    faqs: [
      {
        question: 'Can Babbel make me fluent?',
        answer:
          'On its own, Babbel builds a strong beginner-to-intermediate foundation. Fluency usually needs live speaking practice too, which is where italki fits.',
      },
      {
        question: 'Is italki cheaper than Babbel?',
        answer:
          'Italki’s per-lesson price varies by tutor. For casual conversation partners it can be cheaper than a Babbel subscription; for professional teachers it is usually more.',
      },
      {
        question: 'Can I use both?',
        answer:
          'Yes, and it works well: Babbel for structured daily practice, italki for weekly speaking sessions.',
      },
    ],
    listPath: '/language-learning',
    listLabel: 'Language learning top 5',
  },
  {
    slug: 'gamma-vs-pitch',
    aSlug: 'gamma',
    bSlug: 'pitch',
    framing:
      'Gamma builds a deck from a prompt; Pitch is a collaborative editor for teams.',
    verdict:
      'Pick Gamma to go from idea to draft deck in seconds. Pick Pitch if a team needs to build and edit a deck together in real time.',
    aWinsWhen: [
      'You want a draft deck from a prompt in seconds',
      'You need a quick internal or client deck',
      'You do not have strong design skills',
    ],
    bWinsWhen: [
      'A team needs to edit the same deck together',
      'You want brand controls and analytics',
      'You want clean templates and a familiar editor',
    ],
    faqs: [
      {
        question: 'Which has a better free plan?',
        answer:
          'Both offer a free plan. Gamma’s is limited by AI credits; Pitch’s is limited by team size and some features. Compare the current limits before you commit.',
      },
      {
        question: 'Can Gamma replace PowerPoint?',
        answer:
          'For many internal decks, yes. For highly designed keynotes or decks with complex animations, PowerPoint or Keynote still give more control.',
      },
      {
        question: 'Does Pitch have AI?',
        answer:
          'Pitch has AI helpers for drafting and design. Gamma is more AI-first: it starts from a prompt and builds the deck automatically.',
      },
    ],
    listPath: '/software-and-productivity/presentations',
    listLabel: 'Presentations top 5',
  },
]

function buildToolIndex(): Map<string, Tool> {
  const index = new Map<string, Tool>()
  for (const category of allCategories) {
    for (const tool of category.tools ?? []) index.set(tool.slug, tool)
    for (const sub of category.subcategories ?? []) {
      for (const tool of sub.tools) index.set(tool.slug, tool)
    }
  }
  return index
}

const toolIndex = buildToolIndex()
// Comparison-only reference: preserve the category’s existing five ranked tools.
toolIndex.set('capcut', {
  slug: 'capcut', name: 'CapCut',
  tagline: 'Standard editing across mobile, web and desktop, with paid feature restrictions.',
  bestFor: 'Creators evaluating a focused social edit with suitable free assets',
  whatItDoes: 'CapCut provides editing tools for combining clips, text, music and effects. Available features and export conditions depend on the selected version, plan and project assets.',
  strengths: ['Standard editing with your own media', 'Online, desktop and mobile workflows', 'Free access available for evaluation'],
  goodToKnow: 'Check a representative export: Pro assets can require payment. Only materials expressly labeled Commercial Use carry the stated commercial permission; a free or paid account does not clear every asset.',
  startingPrice: 'Free option available; paid features and export conditions vary',
  officialUrl: 'https://www.capcut.com/',
})

export type ComparePage = {
  slug: string
  a: Tool
  b: Tool
  framing: string
  verdict: string
  aWinsWhen: string[]
  bWinsWhen: string[]
  faqs: { question: string; answer: string }[]
  listPath: string
  listLabel: string
  authorBio?: string
  lastReviewedAt?: string
  scopeNote?: string
  decisionRows?: { label: string; a: string; b: string }[]
  migration?: { title: string; text: string }[]
  sources?: { url: string; label: string }[]
  relatedLinks?: { path: string; label: string }[]
}

function flightCompareTool(tool: Tool, option: typeof kiwiFlight): Tool {
  return { ...tool, startingPrice: option.price, bestFor: option.audience, tagline: option.standout,
    whatItDoes: option.slug === 'kiwi-com' ? 'Searches itineraries including combinations of separate flights. Check the self-transfer responsibilities of the route before buying.' : 'Provides flight search and booking alongside other travel products, with free route tracking on desktop and mobile.',
    strengths: [option.standout, 'Search before purchasing a ticket'],
    goodToKnow: 'Read the sourced comparison table above and the conditions for your actual booking. Free search is separate from paid tickets and optional services.',
    decisionOverride: { audience: option.audience, standout: option.standout },
  }
}

function seoCompareTool(tool: Tool, isSemrush: boolean): Tool {
  const option = isSemrush ? semrushFree : surferFree
  const audience = isSemrush ? 'Marketers prioritizing keyword, competitor and site research' : 'Writers prioritizing a guided content-editor workflow'
  const standout = isSemrush ? 'Research and monitoring across search opportunities' : 'Article-level SEO guidelines in the Content Editor'
  return { ...tool, bestFor: audience, tagline: standout,
    startingPrice: isSemrush ? seoComparePrices.semrush : seoComparePrices.surfer,
    whatItDoes: isSemrush ? 'The advertised SEO plan combines keyword research, competitor analysis, Site Audit and Position Tracking. Check the separate Content Toolkit for the writing workflow.' : 'The editor supports researching an outline, writing, optimizing and preparing an article for publishing. Plan-specific features differ from the temporary Pro trial.',
    strengths: [standout, option.standout],
    goodToKnow: 'Use the sourced conditions above: ongoing access, trial features, exports and team entitlements are separate decisions.',
    decisionOverride: { audience, standout },
  }
}

export const comparePages: ComparePage[] = pairs.map((pair) => {
  const a = toolIndex.get(pair.aSlug)
  const b = toolIndex.get(pair.bSlug)
  if (!a) throw new Error(`[FIVE PICKED] Compare "${pair.slug}" references missing tool "${pair.aSlug}".`)
  if (!b) throw new Error(`[FIVE PICKED] Compare "${pair.slug}" references missing tool "${pair.bSlug}".`)
  return {
    slug: pair.slug,
    a: thirdComparePairs.some((entry) => entry.slug === pair.slug) ? thirdCompareTool(a) : secondComparePairs.some((entry) => entry.slug === pair.slug) ? secondCompareTool(a) : packageComparePairs.some((entry) => entry.slug === pair.slug) ? packageCompareTool(a) : pair.slug === 'semrush-vs-surfer-seo' ? seoCompareTool(a, true) : pair.slug === 'kiwi-com-vs-trip-com' ? flightCompareTool(a, kiwiFlight) : a,
    b: thirdComparePairs.some((entry) => entry.slug === pair.slug) ? thirdCompareTool(b) : secondComparePairs.some((entry) => entry.slug === pair.slug) ? secondCompareTool(b) : packageComparePairs.some((entry) => entry.slug === pair.slug) ? packageCompareTool(b) : pair.slug === 'semrush-vs-surfer-seo' ? seoCompareTool(b, false) : pair.slug === 'kiwi-com-vs-trip-com' ? flightCompareTool(b, tripFlight) : b,
    framing: pair.framing,
    verdict: pair.verdict,
    aWinsWhen: pair.aWinsWhen,
    bWinsWhen: pair.bWinsWhen,
    faqs: pair.faqs,
    listPath: pair.listPath,
    listLabel: pair.listLabel,
    authorBio: pair.authorBio,
    lastReviewedAt: pair.lastReviewedAt,
    scopeNote: pair.scopeNote,
    decisionRows: pair.decisionRows,
    migration: pair.migration,
    sources: pair.sources,
    relatedLinks: pair.relatedLinks,
  }
})

export function getComparePage(slug: string) {
  return comparePages.find((page) => page.slug === slug)
  }
