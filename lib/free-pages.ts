import { emailFreeOptions } from '@/lib/email-free-options'
import { freelanceFreeOptions } from '@/lib/freelance-free-options'
import { languageFreeOptions } from '@/lib/language-free-options'
import { courseFreeOptions } from '@/lib/course-free-options'
import { videoDesignFreeOptions } from '@/lib/video-design-free-options'
import { hostingOffers } from '@/lib/hosting-free-options'
import { editorialDates } from '@/lib/editorial-dates'
/**
 * FIVE PICKED — "Free plan" pages.
 *
 * Pages compare documented access options; the VPN page explicitly distinguishes paid services.
 * Copy is hand-written per page so Google never sees thin, template-only pages.
 */

import { publishedCategories as allCategories } from '@/data/all-categories'
import type { Tool } from '@/data/categories'

export const freePagesUpdated = editorialDates.free

export type FreeFaq = { question: string; answer: string }

type FreeCopy = {
  slug: string
  title: string
  h1: string
  metaTitle: string
  metaDescription: string
  intro: string
  verdict: string
  faqs: FreeFaq[]
  /** Tool slugs to include, in display order. Must all exist in the data files. */
  toolSlugs: string[]
  /** Where this page links back to for more context. */
  relatedListPath: string
  relatedListLabel: string
}

const copies: FreeCopy[] = [
  {
    slug: 'best-free-freelance-platforms',
    title: 'Free Freelance Platforms in 2026: Accounts, Fees and Payout Limits',
    h1: 'Free freelance platforms in 2026: what does working actually cost?',
    metaTitle: 'Free Freelance Platforms: Fees & Payout Limits (2026)',
    metaDescription: 'Compare Fiverr, Upwork, 99designs, Freelancer.com and Toptal on free access, commissions, proposal costs and payout limits, using official freelancer-side sources.',
    intro: 'Free registration does not mean commission-free earnings or unlimited applications. This guide checks the five platforms in our existing freelance shortlist and separates account access, proposal costs, service fees and withdrawals. Toptal is assessed as a screened talent network, not an open free account.',
    verdict: 'Compare the cost of getting work with the cost of getting paid. Fiverr offers free listings with earnings deductions; Upwork separates Basic access from Connects and contract fees; 99designs applies designer fees to direct projects; Freelancer.com adds bid and balance constraints. Toptal says it takes no cut from talent-set rates, but admission is screened and its public FAQ does not establish every payment detail.',
    toolSlugs: ['fiverr', 'upwork', '99designs', 'freelancer-com', 'toptal'],
    faqs: [
      { question: 'Does a free freelance account mean commission-free work?', answer: 'No. Free registration and deductions from earnings are separate. Check each platform’s service fees, proposal costs and withdrawal terms before accepting work. Toptal’s no-cut statement applies to talent-set rates in its screened network, not free hiring for clients.' },
      { question: 'Does every Upwork Basic account receive free monthly Connects?', answer: 'No universal allowance is promised. Upwork says some freelancers may receive monthly free Connects and offers vary by eligibility. Check your account’s Connects history rather than assuming free registration covers unlimited proposals.' },
      { question: 'Can I bid on Freelancer.com without any available balance?', answer: 'The official fee policy requires a standard unreserved account balance before bidding, with higher requirements possible for designated work or risk profiles. Free membership does not remove that requirement.' },
      { question: 'Is a payout minimum the same as a withdrawal fee?', answer: 'No. The minimum is the balance required to release a payout; the fee is a separate cost. Methods, countries and currencies can change both, and external payment providers may add charges.' },
      { question: 'Are all five platforms verified free trials?', answer: 'No. The documented free accounts are ongoing access routes, not countdown trials. No universal freelancer-side fixed-day premium trial is verified here. Toptal’s talent FAQ documents screening and no deduction from talent rates, rather than an open free-account promise.' },
    ],
    relatedListPath: '/freelance-platforms',
    relatedListLabel: 'Freelance marketplaces: all five options in context',
  },
  {
    slug: 'best-free-language-learning-apps',
    title: 'Free Language Learning in 2026: Previews, Resources and Trials',
    h1: 'Free language learning in 2026: what is actually included?',
    metaTitle: 'Free Language Learning: Lesson Limits & Trials (2026)',
    metaDescription: 'Compare free access from Babbel, Lingoda, italki, Preply and Rocket Languages: lesson previews, community practice, live-class trials and certificate limits.',
    intro: 'These five language-learning services are not five unlimited free apps. This guide separates public practice resources, first-lesson previews, free community exchanges and time-limited live teaching, using official sources. Free tutor search does not mean free tutoring.',
    verdict: 'For no-cost practice, start with Preply’s public English exercises or italki’s community. Try Babbel’s first lessons or Rocket’s sample content to assess a self-study course. Lingoda is the documented live-class trial, with an automatic payment afterward unless cancelled. Check certificate requirements separately from access to a lesson.',
    toolSlugs: ['babbel', 'lingoda', 'italki', 'preply', 'rocket-languages'],
    faqs: [
      { question: 'Are all five language-learning services completely free?', answer: 'No. Preply offers public English exercises and italki offers free community practice. Babbel provides first-lesson previews, Rocket provides limited sample content, and Lingoda offers a time-limited live-class trial. Full courses and private tutoring have separate payment conditions.' },
      { question: 'What does the Lingoda free trial include?', answer: 'The official FAQ describes 7 days with either 3 group classes or 1 private class, depending on the plan. Payment follows automatically unless you cancel before the trial ends.' },
      { question: 'Does a free account include free private tutoring?', answer: 'No. italki’s free community is separate from teacher-priced private lessons. Preply’s public exercises are separate from paid tutoring and its standard paid trial lesson. A conditional replacement or checkout promotion is not a universal free lesson.' },
      { question: 'Can I get a certificate just by trying a free lesson?', answer: 'Do not assume so. Babbel requires course completion; Lingoda requires completing a CEFR level; Preply documents at least 10 hours of platform lessons before requesting a certificate. No free learner-certificate entitlement is established here for italki community practice or Rocket trial samples.' },
      { question: 'How long is the Rocket Languages free trial?', answer: 'The reviewed official FAQ describes the sample lessons but does not specify a fixed duration. This guide does not invent an expiry date or claim unlimited lifetime free access.' },
    ],
    relatedListPath: '/language-learning',
    relatedListLabel: 'Language-learning apps and tutors: the complete shortlist',
  },
  {
    slug: 'best-free-online-course-platforms',
    title: 'Free Online Course Platforms in 2026: Access and Certificate Limits',
    h1: 'Free online course platforms in 2026: what is actually included?',
    metaTitle: 'Free Online Courses: Previews, Trials & Certificates (2026)',
    metaDescription: 'Compare Coursera, DataCamp, Skillshare, Scrimba and MasterClass: free courses, preview limits, trial billing and certificate conditions, with official sources.',
    intro: 'A free account, a course preview and a trial are not the same as a complete course with a free certificate. This guide compares the five platforms in our existing online-courses shortlist and separates ongoing access, restricted previews, subscription trials and invitation-only offers.',
    verdict: 'Start with the documented free course selection or previews when you only want to explore a subject. Check the certificate route before planning a credential, and the billing date before starting a trial. DataCamp and Scrimba provide limited free tiers; Coursera previews most courses by module; Skillshare and the MasterClass Guest Pass offer time-limited access under different conditions.',
    toolSlugs: ['coursera', 'datacamp', 'skillshare', 'scrimba', 'masterclass'],
    faqs: [
      { question: 'Can I still audit a full Coursera course for free?', answer: 'Do not assume the old audit model is available. Coursera says its new preview replaces audit for most courses and opens the first module, including assessments when available there. Selected free courses and financial aid are separate access routes.' },
      { question: 'Does a free trial include a free certificate?', answer: 'Not automatically. Coursera’s subscription terms require payment before a trial learner can earn a certificate. DataCamp excludes certificates from Basic, and Scrimba links certificate access to Pro. Skillshare has completion requirements; regular MasterClass classes do not provide an official completion certificate.' },
      { question: 'Which options offer ongoing free access?', answer: 'DataCamp Basic provides first-chapter access, and Scrimba offers selected introductory courses with limited challenges. Coursera provides first-module previews for most courses and selected free Community Impact courses. None of these means unlimited access to every course and certificate.' },
      { question: 'How do Skillshare and MasterClass free access differ?', answer: 'Skillshare documents a standard 7-day subscription trial, with some longer promotions. MasterClass offers eligible Guest Pass recipients 14 days after redeeming an invitation. Both require attention to payment details, cancellation and the displayed billing date.' },
      { question: 'Can a free account be used as a shared corporate course library?', answer: 'No shared corporate-use permission is established by this guide. Individual access and organizational licensing are different. Check the applicable terms and team offering; learning skills for work is not the same as copying or redistributing course materials.' },
    ],
    relatedListPath: '/online-courses',
    relatedListLabel: 'Online learning platforms: the complete shortlist',
  },
  {
    slug: 'best-free-video-and-design-software',
    title: 'Free Video and Design Software in 2026: Limits and Trials',
    h1: 'Free video and design software in 2026: what is actually free?',
    metaTitle: 'Free Video & Design Software: Limits and Trials (2026)',
    metaDescription: 'Compare Premiere Pro, Filmora, Envato, Riverside and Camtasia: free access, trial duration, watermarks, export limits and documented commercial-use conditions.',
    intro: 'Free to download is not always free to deliver. Our five existing video and design picks include a desktop trial, watermarked editors, a limited recording plan and selected free stock assets. This guide separates those options and explains the official conditions before you spend time on a project.',
    verdict: 'Use the ongoing limited options to learn a workflow, but check the export and commercial-use conditions before client delivery. Premiere desktop has a short trial; Filmora and Camtasia add watermarks; Riverside limits free video quality and separate-track access; Envato’s free files have a specific single-end-product license. None is presented as unlimited, unrestricted free production.',
    toolSlugs: ['adobe-premiere-pro', 'filmora', 'envato-elements', 'riverside', 'camtasia'],
    faqs: [
      { question: 'Are all five tools permanently free?', answer: 'No. Premiere desktop has a 7-day trial. Filmora provides limited editing access without a stated trial expiry, Camtasia offers a watermarked free editor, Riverside has a limited ongoing Free account, and Envato offers selected free assets rather than a subscription trial.' },
      { question: 'Which free options add a watermark?', answer: 'Filmora and Camtasia document watermarks on free exported videos. Riverside’s Free pricing comparison also lists a watermark. Editing access is not the same as watermark-free delivery.' },
      { question: 'Is Riverside’s 2-hour separate-track allowance renewed every month?', answer: 'The free-account help describes the first 2 hours of recorded content as an opportunity to try separate high-quality tracks. This guide does not treat that allowance as a monthly reset or confuse it with ongoing recording and editing access.' },
      { question: 'Can I use Envato’s free files for a paying client?', answer: 'The Free Files Use Policy permits one customized commercial end product per file, including client work, subject to restrictions. It does not permit standalone redistribution, and music has additional limits.' },
      { question: 'Does a free editor automatically allow monetized work?', answer: 'No. Wondershare requires a commercial license for monetization, and asset permissions are separate. Adobe’s NFR terms restrict commercial output from designated versions. This guide does not certify blanket commercial permission for free Camtasia or Riverside access.' },
    ],
    relatedListPath: '/video-and-design-software',
    relatedListLabel: 'Video and design tools: the complete ranked comparison',
  },
  {
    slug: 'best-free-web-hosting',
    title: 'Web Hosting Free Trials and Money-Back Options (2026)',
    h1: 'Web hosting free trials and money-back options in 2026',
    metaTitle: 'Web Hosting Free Trials & Refund Options (2026)',
    metaDescription: 'Compare Hostinger, Bluehost, Cloudways, Kinsta and Namecheap: verified hosting trials, refund windows and temporary domains. No permanent free hosting promised.',
    intro: 'Looking for free web hosting? Our five hosting picks offer paid plans with different ways to evaluate them. This guide separates genuine trials, introductory free periods and conditional money-back guarantees; none is presented as permanently free hosting.',
    verdict: 'For a trial without paying for standard hosting upfront, compare Cloudways Flexible, Namecheap Shared Hosting and the selected Kinsta first-month offer. Hostinger and Bluehost instead provide eligible paid hosting purchases with refund windows. Check the exclusions, continuation price and cancellation process before starting.',
    toolSlugs: ['hostinger', 'bluehost', 'cloudways', 'kinsta', 'namecheap'],
    faqs: [
      { question: 'Are these five hosting providers permanently free?', answer: 'No ongoing general-purpose free hosting plan is verified for these five standard hosting offers. Trials and introductory free periods expire; a money-back guarantee requires an eligible purchase and refund request.' },
      { question: 'Which providers have a verified hosting trial or free introductory period?', answer: 'Cloudways Flexible offers 5 days without a credit card, and Autonomous offers 3 days. Namecheap Shared Hosting advertises a 30-day trial. Kinsta offers a first month free on selected plans for new customers. Confirm eligibility and continuation terms before signing up.' },
      { question: 'Is a 30-day money-back guarantee the same as a free trial?', answer: 'No. Hostinger and Bluehost require payment for the eligible hosting plan first. Refund exclusions apply, including domain-related charges; Bluehost also excludes monthly terms and Cloud Hosting. Namecheap’s Shared Hosting guarantee applies to eligible first-time customers who start without a trial.' },
      { question: 'Can I keep hosting free by using a temporary subdomain?', answer: 'No. A temporary address lets you build or preview a site without connecting your own domain; the underlying hosting account still has trial or paid conditions. It is not a standalone permanent free hosting plan.' },
      { question: 'How do Kinsta and Cloudways refunds differ?', answer: 'Kinsta has a conditional 30-day guarantee for first-time Managed WordPress customers, starting at renewal after a qualifying free period. Cloudways documents refunds of eligible unused prepaid funds requested within 3 months, rather than a general money-back period for consumed hosting.' },
    ],
    relatedListPath: '/web-hosting-and-domains',
    relatedListLabel: 'Web hosting shortlist and paid-plan comparison',
  },
  {
    slug: 'best-free-ai-video-tools',
    title: 'Best Free AI Video Tools',
    h1: 'The best free AI video tools',
    metaTitle: 'Best Free AI Video Tools (2026) — Free Plans and Trials',
    metaDescription:
      'The best AI video tools with a free plan, ranked and compared. See what each free tier actually includes before you upgrade.',
    intro:
      'AI video tools are expensive at full price, but most of the big names let you try before you pay. This page lists the tools in our AI video top 5 that offer a real free plan, free tier or free trial — and explains exactly what you get for free, so you do not waste a trial on the wrong tool.',
    verdict:
      'If you only want to try AI video once, start with Fliki or Synthesia, which both offer a free plan and produce a finished video from a script. If voice quality matters most, ElevenLabs has the strongest free tier for audio. Kling AI is the one to try for AI-generated motion from a prompt.',
    faqs: [
      {
        question: 'Are free AI video tools really free?',
        answer:
          'Most are free trials or credit-based free tiers, not unlimited free use. You can usually make one or two short videos before you need a paid plan, and some free tiers add a watermark. Check the current limits on each official website.',
      },
      {
        question: 'Which free AI video tool is best for beginners?',
        answer:
          'Fliki is the easiest starting point because you paste a script and it builds a narrated video for you. Synthesia is similarly beginner-friendly if you want a presenter on screen.',
      },
      {
        question: 'Can I use free AI video tools for commercial work?',
        answer:
          'Often not on the free tier. Commercial rights are usually on paid plans, and some free plans add watermarks. Read the terms on each official website before you publish anything.',
      },
    ],
    toolSlugs: ['fliki', 'synthesia', 'elevenlabs', 'kling-ai', 'pictory'],
    relatedListPath: '/ai-tools/video-and-voice',
    relatedListLabel: 'AI video & voice: our full top 5',
  },
  {
    slug: 'best-free-ai-image-tools',
    title: 'Best Free AI Image Tools',
    h1: 'The best free AI image tools',
    metaTitle: 'Best Free AI Image Tools (2026) — 5 Free Tiers Compared',
    metaDescription:
      'The best AI image generators with a free plan, ranked. See which free tiers are usable and which are just a trial.',
    intro:
      'Every major AI image generator advertises a free plan, but the free tiers are not equal. Some give you enough generations per day to finish a real project; others give you a handful and stop. This page lists the image tools in our AI image top 5 that still offer a genuine free option, with notes on what each free plan actually allows.',
    verdict:
      'For most people, Adobe Firefly and Ideogram are the two free tiers worth trying first: Firefly if you want images you can use commercially with confidence, Ideogram if your images need readable text. Freepik is the best free option if you also want stock assets in the same account.',
    faqs: [
      {
        question: 'Which free AI image tool has the most generous free plan?',
        answer:
          'Freepik offers daily free AI image generations on its free plan, which is among the most generous we list. Adobe Firefly, Ideogram and Krea all offer free tiers too, but with tighter monthly or credit limits.',
      },
      {
        question: 'Do free AI image tools put a watermark on images?',
        answer:
          'Some do. Watermarks and commercial-use rights vary by tool and plan, so check the current terms on the official website before you use an image publicly.',
      },
      {
        question: 'Can I sell images made with a free AI image tool?',
        answer:
          'Usually you need a paid plan for a commercial licence. Free tiers are often for personal or testing use. Read the licence on each tool before you rely on it.',
      },
    ],
    toolSlugs: ['adobe-firefly', 'ideogram', 'freepik', 'krea', 'openart'],
    relatedListPath: '/ai-tools/image-and-design',
    relatedListLabel: 'AI image & design: our full top 5',
  },
  {
    slug: 'best-free-ai-meeting-note-takers',
    title: 'Best Free AI Meeting Note Takers',
    h1: 'The best free AI meeting note takers',
    metaTitle: 'Best Free AI Meeting Note Takers (2026) — Ranked',
    metaDescription:
      'The best AI meeting note takers with a free plan, ranked. See which free tiers give unlimited recordings and which cap your minutes.',
    intro:
      'AI meeting notetakers are one of the few categories where the free plans are genuinely usable. Several of the tools in our meeting-notes top 5 give you unlimited recordings or transcripts on the free tier, which is enough for many individuals and small teams. This page lists those tools, with honest notes on where the free plan stops.',
    verdict:
      'Fathom is the strongest free pick if you want unlimited recordings and transcripts. Fireflies is a good free alternative if you work across many meeting apps. Otter, tl;dv and Notta have tighter free limits, but all are worth testing if you mainly need live transcription or shareable highlights.',
    faqs: [
      {
        question: 'Is there a truly free AI meeting note taker?',
        answer:
          'Yes. Fathom offers unlimited recordings and transcripts on its free plan, and Fireflies offers unlimited transcription. Both cap advanced AI summaries, but the basic free tiers are usable for real work.',
      },
      {
        question: 'Do free AI notetakers work with Zoom, Meet and Teams?',
        answer:
          'Most of the tools on this page work with the major meeting apps, including Zoom, Google Meet and Microsoft Teams. Check the official website for the exact list.',
      },
      {
        question: 'Are free meeting notetakers private?',
        answer:
          'Free tiers usually come with the same privacy terms as paid plans, but check each tool’s privacy policy and whether it stores recordings in the cloud before you use it for sensitive calls.',
      },
    ],
    toolSlugs: ['fathom', 'fireflies', 'tldv', 'otter', 'notta'],
    relatedListPath: '/ai-tools/meeting-notes',
    relatedListLabel: 'AI meeting notes: our full top 5',
  },
  {
    slug: 'best-free-ai-chatbots',
    title: 'Best Free AI Chatbots',
    h1: 'The best free AI chatbots for your website',
    metaTitle: 'Best Free AI Chatbots (2026) — Free Plans Compared',
    metaDescription:
      'The best AI chatbot builders with a free plan, ranked. See which free tiers you can actually launch on your website.',
    intro:
      'A chatbot can answer common questions on your site around the clock, and you do not need to pay to try it. Several tools in our chatbots top 5 offer a free plan, though the free tiers vary a lot: some let you launch on a real site, and some are only for testing. This page explains which is which.',
    verdict:
      'For a real site, Tidio and Chatbase are the two free plans worth starting with. Tidio gives you live chat plus a basic chatbot at no cost; Chatbase gives you a free tier to test a chatbot trained on your own content. Landbot, Botpress and CustomGPT.ai are better once you already know what you want to build.',
    faqs: [
      {
        question: 'Can I put a free AI chatbot on my website?',
        answer:
          'Yes. Tidio lets you use live chat and a basic chatbot on the free plan, and Chatbase offers a free tier you can embed on a site. Check each tool for current limits before you rely on it.',
      },
      {
        question: 'Which free AI chatbot is easiest to set up?',
        answer:
          'Tidio and Chatbase are both quick to set up without code. Chatbase is the faster option if you mainly want a bot that answers from your own documents or pages.',
      },
      {
        question: 'Will a free chatbot handle real customer questions?',
        answer:
          'A free chatbot can handle common questions, but the free tiers usually cap the number of AI conversations or messages. For steady live traffic, plan to move to a paid plan.',
      },
    ],
    toolSlugs: ['tidio', 'chatbase', 'landbot', 'botpress', 'customgpt'],
    relatedListPath: '/ai-tools/chatbots',
    relatedListLabel: 'AI chatbots: our full top 5',
  },
  {
    slug: 'vpns-with-a-free-plan',
    title: 'VPN Free Plans, Trials and Refunds',
    h1: 'VPN free plans vs trials: know the difference',
    metaTitle: 'VPN Free Plans vs Trials: Proton, NordVPN and More',
    metaDescription:
      'Compare Proton VPN’s ongoing free plan with trials and refund offers from four paid VPNs. Understand payment, cancellation and app-store conditions.',
    intro:
      'An ongoing free plan, a time-limited trial and a money-back guarantee are different offers. Among these five picks, Proton VPN offers an ongoing free plan. The other four are paid services with trial or refund options that depend on where you subscribe. Do not count a refund offer as free access: it may require payment first.',
    verdict:
      'Start with Proton VPN if you need an ongoing free plan; its official pricing page confirms no data cap. For NordVPN, Surfshark, ExpressVPN and PIA, check the exact trial and refund terms for your device and purchase channel. Never assume an app-store purchase follows the provider’s website refund policy.',
    faqs: [
      {
        question: 'Is there a free VPN with no data limit?',
        answer:
          'Proton VPN’s official pricing page confirms an ongoing free plan without a data limit. The other four entries here are paid VPNs, not equivalent ongoing free plans.',
      },
      {
        question: 'Are free VPNs safe?',
        answer:
          'A free price alone does not establish safety. Review the provider, privacy policy, security documentation and the permissions requested by its app. A familiar brand name is not a substitute for checking those details.',
      },
      {
        question: 'Is a cheap paid VPN better than a free one?',
        answer:
          'A paid plan may suit you if you need features or locations not included in the free tier. Compare the total commitment and renewal price on each official website. See website for current pricing; do not choose by an unverified monthly headline.',
      },
    ],
    toolSlugs: ['proton-vpn', 'nordvpn', 'surfshark', 'expressvpn', 'private-internet-access'],
    relatedListPath: '/vpn-and-security',
    relatedListLabel: 'VPN & security: our full top 5',
  },
  {
    slug: 'best-free-email-marketing-tools',
    title: 'Best Free Email Marketing Tools',
    h1: 'The best free email marketing tools',
    metaTitle: 'Free Email Marketing Plans and Trials Compared',
    metaDescription: 'Compare verified free subscriber and sending limits, automation gates, branding and paid starting tiers for MailerLite, Kit, beehiiv, Systeme.io and GetResponse.',
    intro: 'Free email plans differ in audience size, sending allowance and workflow access. This guide separates ongoing free plans from premium-feature trials and ties each paid starting price to its subscriber capacity and billing period.',
    verdict: 'Choose by the limit that affects your work: MailerLite suits a small list needing limited automation; Kit suits broadcasts without automated sequences; beehiiv focuses on newsletter publishing; Systeme.io bundles limited funnels and automation; GetResponse combines a small ongoing Free account with temporary premium-feature access. None is presented as unlimited white-label marketing.',
    faqs: [
      { question: 'How many subscribers and emails does each free plan include?', answer: 'MailerLite: 250 active subscribers and 2,500 monthly emails. Kit: 10,000 subscribers and unlimited broadcasts. beehiiv: 2,500 subscribers and unlimited sends. Systeme.io: 2,000 contacts and unlimited emails. GetResponse: 500 contacts and 2,500 monthly newsletters. A separate daily numeric cap is not specified in the reviewed plan sources.' },
      { question: 'Which free plans include automation?', answer: 'MailerLite allows 3 active automations with up to 5 steps. Systeme.io includes 1 automation rule and 1 workflow. Kit’s current Free comparison excludes visual automations and automated sequences. beehiiv lists automations as a Lite upgrade. GetResponse premium automation access is time-limited; saving drafts on Free is not the same as running workflows after the trial.' },
      { question: 'What do the first paid tiers cost, and for how many subscribers?', answer: 'MailerLite Comfort: $12 monthly or $129.60 yearly for 500 subscribers. Kit Creator: $39 monthly or $390 yearly for 1,000 subscribers. beehiiv Lite: $59 monthly or $49 per month billed yearly at 1,000 subscribers. Systeme.io Startup: $17 monthly or $170 yearly for 5,000 contacts. GetResponse Starter: $19 monthly or $15.58 per month paid annually for 1,000 subscribers. These entry prices are not quotes for larger lists.' },
      { question: 'Are these free plans white-label?', answer: 'No blanket white-label claim is made. MailerLite and Kit list branding removal as paid access; beehiiv requires Pro for branding removal. Systeme.io Free cannot remove page badges or its email footer. GetResponse Free messages include its badge.' },
      { question: 'Can I use these free plans for a business?', answer: 'The providers document business-oriented features: MailerLite includes a limited digital-product or booking offer, Kit supports product and subscription sales, beehiiv includes digital products, Systeme.io permits sales subject to its Free sales cap, and GetResponse describes business lead generation and broadcasts. Payment-processing charges, consent and provider terms still apply; a free account is not permission to send unsolicited messages.' },
    ],
    toolSlugs: ['mailerlite', 'kit', 'beehiiv', 'systeme-io', 'getresponse'],
    relatedListPath: '/email-marketing',
    relatedListLabel: 'Email marketing: our full top 5',
  },
  {
    slug: 'best-free-project-management-tools',
    title: 'Best Free Project Management Tools',
    h1: 'The best free project management tools',
    metaTitle: 'Best Free Project Management Tools (2026) — Ranked',
    metaDescription:
      'The best project management tools with a free plan, ranked. See which free tiers work for real teams and which are demo-only.',
    intro:
      'Project management tools are some of the most generous free plans in software. Several of the tools in our project management top 5 let small teams plan real work at no cost. This page explains which free plans are worth using, and where they stop before you would need to pay.',
    verdict:
      'ClickUp has the most capable free plan for a small team. Asana is the cleanest to learn if you just want tasks and timelines. monday.com, Wrike and Teamwork all have free tiers too, but with more limits on seats or features.',
    faqs: [
      {
        question: 'Which free project management tool is best for small teams?',
        answer:
          'ClickUp’s free plan is the most feature-complete for a small team, covering tasks, docs and multiple views. Asana’s free plan is simpler and easier to learn if you mainly need tasks and timelines.',
      },
      {
        question: 'Do free project management tools limit the number of users?',
        answer:
          'Yes, most do. Free tiers usually cap you at a small number of seats, often around 5–10. Check the current limits on each official website before you commit a team.',
      },
      {
        question: 'Can I run a real project on a free plan?',
        answer:
          'Yes, for a small team with straightforward needs. You will usually hit limits on automations, reporting or seats as your projects grow, at which point a paid plan makes sense.',
      },
    ],
    toolSlugs: ['clickup', 'asana', 'monday-com', 'wrike', 'teamwork'],
    relatedListPath: '/software-and-productivity/project-management',
    relatedListLabel: 'Project management: our full top 5',
  },
  {
    slug: 'best-free-note-taking-apps',
    title: 'Best Free Note-Taking Apps',
    h1: 'The best free note-taking apps',
    metaTitle: 'Best Free Note-Taking Apps (2026) — Ranked',
    metaDescription:
      'The best note-taking apps with a free plan, ranked. See which free tiers you can rely on daily and which need a paid plan.',
    intro:
      'Note-taking apps are personal, and the free plans differ a lot. Some give you a fully usable app at no cost; others are a demo. This page lists the note-taking apps in our top 5 that offer a free plan, with notes on how far each free tier really goes.',
    verdict:
      'Craft and Evernote have the most useful free plans for everyday notes. Capacities is the better free pick if you like linking notes to people and projects. Mem and Coda are worth testing if you want AI help or docs that behave like apps, but their best features are on paid plans.',
    faqs: [
      {
        question: 'Which free note-taking app is best for everyday use?',
        answer:
          'Craft is the most pleasant free option if you are on Apple devices, and Evernote’s free plan is the most familiar. Both let you take real notes daily without paying.',
      },
      {
        question: 'Do free note-taking apps sync across devices?',
        answer:
          'Most do, but some free tiers limit the number of devices or the amount of storage. Check each tool’s current plan details before you rely on it across devices.',
      },
      {
        question: 'Are free note-taking apps private?',
        answer:
          'Usually yes, but check the privacy policy of the specific tool, especially if you plan to store sensitive information. Paid plans sometimes add stronger encryption.',
      },
    ],
    toolSlugs: ['craft', 'evernote', 'capacities', 'mem', 'coda'],
    relatedListPath: '/software-and-productivity/note-taking',
    relatedListLabel: 'Note-taking: our full top 5',
  },
  {
    slug: 'best-free-cloud-storage',
    title: 'Best Free Cloud Storage',
    h1: 'The best free cloud storage',
    metaTitle: 'Best Free Cloud Storage (2026) — Free GBs Compared',
    metaDescription:
      'The best cloud storage with a free plan, ranked. See how much free space each service gives and what you give up.',
    intro:
      'Free cloud storage is a crowded market, and the free allowances vary from a couple of gigabytes to ten or more. Several tools in our cloud storage top 5 offer a free tier worth using. This page compares them on how much free space you get and how usable that space really is.',
    verdict:
      'pCloud and Icedrive give the most generous free storage among our picks, at 10 GB each. Sync.com and Proton Drive are the best free options if privacy matters most to you. Dropbox’s free tier is small, so it is only worth it if you already use Dropbox with others.',
    faqs: [
      {
        question: 'Which free cloud storage gives the most space?',
        answer:
          'Among the tools on this page, pCloud and Icedrive both offer 10 GB free, which is the most generous free allowance. Sync.com offers 5 GB and Dropbox offers 2 GB.',
      },
      {
        question: 'Is free cloud storage safe for personal files?',
        answer:
          'It can be, but it depends on the service. Sync.com and Proton Drive use end-to-end encryption even on free plans, which is stronger than what most free tiers offer. Check each tool’s privacy terms before you store sensitive files.',
      },
      {
        question: 'What happens when I run out of free storage?',
        answer:
          'You either stop syncing new files or upgrade to a paid plan. Most services let you buy more storage without changing your account, and some, like pCloud, offer a one-time lifetime plan.',
      },
    ],
    toolSlugs: ['pcloud', 'icedrive', 'sync-com', 'proton-drive', 'dropbox'],
    relatedListPath: '/software-and-productivity/cloud-storage',
    relatedListLabel: 'Cloud storage: our full top 5',
  },
  {
    slug: 'best-free-presentation-tools',
    title: 'Best Free Presentation Tools',
    h1: 'The best free presentation tools',
    metaTitle: 'Best Free Presentation Tools (2026) — Ranked',
    metaDescription:
      'The best presentation tools with a free plan, ranked. See which free tiers let you build and present real decks.',
    intro:
      'Slide decks are one of the easiest things to build for free, and several tools in our presentations top 5 let you do it without paying. The free tiers differ on how many decks you can make and whether your deck carries branding. This page explains which free plans are worth using.',
    verdict:
      'Gamma and Pitch have the most usable free plans: Gamma is the fastest way to get a deck from a prompt, and Pitch is the easiest for a small team working together. Prezi and Visme are worth trying if you want a more visual style, and Beautiful.ai is trial-only.',
    faqs: [
      {
        question: 'Which free presentation tool is best for a quick deck?',
        answer:
          'Gamma is the fastest free option if you want to start from a prompt and edit from there. Pitch is a good free choice if you want to build a deck by hand with a team.',
      },
      {
        question: 'Do free presentation tools add branding to my slides?',
        answer:
          'Some do. Gamma, for example, keeps its branding on free decks. Check each tool’s free-plan terms if you need a clean, unbranded deck.',
      },
      {
        question: 'Can I present directly from a free tool?',
        answer:
          'Yes. Most of the tools on this page let you present from the browser or share a link, even on the free plan. Some restrict who can view or edit your deck until you pay.',
      },
    ],
    toolSlugs: ['gamma', 'pitch', 'prezi', 'visme', 'beautiful-ai'],
    relatedListPath: '/software-and-productivity/presentations',
    relatedListLabel: 'Presentations: our full top 5',
  },
  {
    slug: 'best-free-automation-tools',
    title: 'Best Free Automation Tools',
    h1: 'The best free automation tools',
    metaTitle: 'Best Free Automation Tools (2026) — Free Tiers Compared',
    metaDescription:
      'The best automation tools with a free plan, ranked. See which free tiers you can actually run real workflows on.',
    intro:
      'Automation tools are one of the few software categories where the free plans are genuinely usable for real work. Several tools in our automation top 5 give you free workflows every month, and one (n8n) lets you self-host with no execution limits at all. This page explains the free options worth using.',
    verdict:
      'n8n is the strongest free option if you are willing to self-host: no execution limits and full control. Make, Activepieces and Latenode are easier starting points with free tiers that cover real workflows. Pabbly Connect is the best free plan for high-volume tasks on a fixed budget.',
    faqs: [
      {
        question: 'Which free automation tool is best for beginners?',
        answer:
          'Make is the easiest free option to start with: it uses a visual canvas and has a free tier that covers real automations. Activepieces is a good free alternative if you want a simpler interface.',
      },
      {
        question: 'Is n8n really free?',
        answer:
          'n8n is free to self-host with no execution limits, because you run it on your own server. The cloud version is paid. If you are comfortable with a bit of technical setup, self-hosted n8n is the most generous free option in this category.',
      },
      {
        question: 'How many automations can I run on a free plan?',
        answer:
          'It depends on the tool. Most free tiers cap you by tasks or operations per month rather than by the number of workflows. Check each tool’s current free-plan limits before you build anything critical.',
      },
    ],
    toolSlugs: ['make', 'n8n', 'activepieces', 'latenode', 'pabbly-connect'],
    relatedListPath: '/software-and-productivity/automation',
    relatedListLabel: 'Automation: our full top 5',
  },
  {
    slug: 'best-free-website-builders',
    title: 'Best Free Website Builders',
    h1: 'The best free website builders',
    metaTitle: 'Best Free Website Builders (2026) — Ranked',
    metaDescription:
      'The best website builders with a free plan, ranked. See which free tiers let you publish a real site and what each one limits.',
    intro:
      'Website builders are a crowded market, but only a few tools in our website builders top 5 offer a free plan you can publish on. The free tiers differ on hosting, custom domains and branding, so this page focuses on what each free option actually lets you do.',
    verdict:
      'Create is the strongest free pick if you want a working site from a text prompt. Elementor and Brizy both offer free versions, but they are add-ons to WordPress, so they only make sense if you already have hosting. If you want a host too, look at our web hosting top 5.',
    faqs: [
      {
        question: 'Can I build a real website for free?',
        answer:
          'Yes, with limits. Free plans typically give you a working site on a subdomain, often with a small provider badge. A custom domain and full branding usually need a paid plan.',
      },
      {
        question: 'Do free website builders include hosting?',
        answer:
          'It depends. Create includes hosting on its free plan. Elementor and Brizy are builders that sit on top of WordPress, so you still need to arrange hosting separately.',
      },
      {
        question: 'Can I use a free website builder for a business site?',
        answer:
          'You can, but free plans usually add provider branding and do not let you use your own domain. For a business, budget for a paid plan from the same tool or a cheap host from our hosting top 5.',
      },
    ],
    toolSlugs: ['create', 'elementor', 'brizy'],
    relatedListPath: '/website-builders',
    relatedListLabel: 'Website builders: our full top 5',
  },
]

export type FreePage = {
  slug: string
  title: string
  h1: string
  metaTitle: string
  metaDescription: string
  intro: string
  verdict: string
  faqs: FreeFaq[]
  tools: Tool[]
  relatedListPath: string
  relatedListLabel: string
}

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

export const freePages: FreePage[] = copies.filter((copy) => copy.toolSlugs.every((slug) => toolIndex.has(slug))).map((copy) => {
  const tools = copy.toolSlugs.map((slug) => {
    const tool = toolIndex.get(slug)
    if (!tool) {
      throw new Error(`[FIVE PICKED] Free page "${copy.slug}" references missing tool "${slug}".`)
    }
    if (copy.slug === 'best-free-email-marketing-tools') {
      const option = emailFreeOptions.find((entry) => entry.slug === slug)!
      return { ...tool, startingPrice: option.price, bestFor: option.audience, strengths: option.strengths, tagline: option.standout, goodToKnow: option.features, decisionOverride: { audience: option.audience, standout: option.standout } }
    }
    if (copy.slug === 'best-free-freelance-platforms') {
      const option = freelanceFreeOptions.find((entry) => entry.slug === slug)!
      return { ...tool, startingPrice: option.price, goodToKnow: `${option.commission} ${option.payout}` }
    }
    if (copy.slug === 'best-free-language-learning-apps') {
      const option = languageFreeOptions.find((entry) => entry.slug === slug)!
      return { ...tool, startingPrice: option.price, goodToKnow: `${option.access} ${option.trial}` }
    }
    if (copy.slug === 'best-free-online-course-platforms') {
      const option = courseFreeOptions.find((entry) => entry.slug === slug)!
      return { ...tool, goodToKnow: `${option.access} ${option.certificate}` }
    }
    if (copy.slug === 'best-free-video-and-design-software') {
      const option = videoDesignFreeOptions.find((entry) => entry.slug === slug)!
      return { ...tool, goodToKnow: `${option.limits} ${option.commercial}` }
    }
    if (copy.slug === 'best-free-web-hosting') {
      const offer = hostingOffers.find((entry) => entry.slug === slug)!
      return { ...tool, goodToKnow: `${offer.trial} ${offer.refund}` }
    }
    return tool
  })
  return {
    slug: copy.slug,
    title: copy.title,
    h1: copy.h1,
    metaTitle: copy.metaTitle,
    metaDescription: copy.metaDescription,
    intro: copy.intro,
    verdict: copy.verdict,
    faqs: copy.faqs,
    tools,
    relatedListPath: copy.relatedListPath,
    relatedListLabel: copy.relatedListLabel,
  }
})

export function getFreePage(slug: string) {
  return freePages.find((page) => page.slug === slug)
}
