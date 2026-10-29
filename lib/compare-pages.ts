/**
 * FIVE PICKED — "X vs Y" comparison pages.
 * Only pairs where both tools exist in the data files. Guides that already
 * cover a pair (/guides/...) are skipped to avoid duplicate content.
 */

import { allCategories } from '@/data/all-categories'
import type { Tool } from '@/data/categories'

export const comparePagesUpdated = '2026-10-29'

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
}

const pairs: ComparePair[] = [
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
}

export const comparePages: ComparePage[] = pairs.map((pair) => {
  const a = toolIndex.get(pair.aSlug)
  const b = toolIndex.get(pair.bSlug)
  if (!a) throw new Error(`[FIVE PICKED] Compare "${pair.slug}" references missing tool "${pair.aSlug}".`)
  if (!b) throw new Error(`[FIVE PICKED] Compare "${pair.slug}" references missing tool "${pair.bSlug}".`)
  return {
    slug: pair.slug,
    a,
    b,
    framing: pair.framing,
    verdict: pair.verdict,
    aWinsWhen: pair.aWinsWhen,
    bWinsWhen: pair.bWinsWhen,
    faqs: pair.faqs,
    listPath: pair.listPath,
    listLabel: pair.listLabel,
  }
})

export function getComparePage(slug: string) {
  return comparePages.find((page) => page.slug === slug)
  }
