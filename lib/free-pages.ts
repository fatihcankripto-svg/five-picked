import { editorialDates } from '@/lib/editorial-dates'
/**
 * FIVE PICKED — "Free plan" pages.
 *
 * Every page here lists only tools whose `startingPrice` mentions free.
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
    metaDescription:
      'The best email marketing software with a free plan, ranked. See how many subscribers each free plan supports before you pay.',
    intro:
      'Email marketing is one of the few categories where you can run a real list for months without paying. Several tools in our email marketing top 5 offer a free plan with real subscriber limits — enough to start a newsletter or a small business list. This page lists those tools and explains what each free tier actually gives you.',
    verdict:
      'For a first list, MailerLite is the friendliest free plan: it is easy to use and the free tier covers a real starting list. Kit is the better free pick if you are a creator planning to sell digital products later. beehiiv is worth a look if you are building a newsletter business specifically.',
    faqs: [
      {
        question: 'Which free email marketing tool is best for beginners?',
        answer:
          'MailerLite is the easiest free plan to start with. It has a clean editor, basic automations and a free tier that works for a small list. Kit is a close second for creators.',
      },
      {
        question: 'How many subscribers can I have on a free email plan?',
        answer:
          'It varies by tool. Some free tiers cover around 500–1,000 subscribers, while others cap the number of monthly emails rather than subscribers. Check the current limits on each official website.',
      },
      {
        question: 'Do free email marketing tools include automation?',
        answer:
          'Some do. MailerLite and Kit both include basic automations on their free plans. More advanced workflows usually need a paid plan.',
      },
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
