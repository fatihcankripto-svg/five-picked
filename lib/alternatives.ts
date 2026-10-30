import { editorialDates } from '@/lib/editorial-dates'
/**
 * FIVE PICKED — "X alternatives" pages.
 *
 * A page is created only when:
 *  - the tool has hand-written copy below (so no thin, template-only pages), and
 *  - its list is full (no "Coming soon" slots).
 *
 * To add a new page later: add an entry to `altCopy` using the tool's slug.
 * Facts (prices, strengths) always come from the data files, never from here.
 */

import { allCategories } from '@/data/all-categories'
import type { Tool } from '@/data/categories'

/** Update this date whenever you edit the copy below. ISO format. */
export const alternativesUpdated = editorialDates.alternatives

export type Faq = { question: string; answer: string }
export type GuideLink = { href: string; label: string }

type Copy = {
  summary: string
  reasons: string[]
  faqs: Faq[]
  guides: GuideLink[]
}

export type AlternativesPageData = {
  slug: string
  tool: Tool
  rank: number
  listName: string
  listPath: string
  alternatives: Tool[]
  summary: string
  reasons: string[]
  faqs: Faq[]
  guides: GuideLink[]
}

const videoGuide: GuideLink = {
  href: '/guides/best-ai-video-tools-for-beginners',
  label: 'Best AI video tools for beginners',
}
const flikiPictoryGuide: GuideLink = {
  href: '/guides/fliki-vs-pictory',
  label: 'Fliki vs Pictory: which AI video tool is better?',
}

const altCopy: Record<string, Copy> = {
  fliki: {
    summary:
      'Fliki turns scripts and blog posts into narrated videos, and it is known for natural-sounding voices in many languages. That makes it a good fit for narration-led content. It is not the right tool for every video job, and the free plan has limits.',
    reasons: [
      'You want a lifelike AI presenter on screen. Synthesia is built around that.',
      'You want to cut existing articles or long recordings into short clips. Pictory is built for repurposing.',
      'You only need the voice, not the video. ElevenLabs focuses on realistic voices, dubbing and voice cloning (with permission).',
      'You want AI-generated motion from a prompt or a still image. Kling AI creates short clips that way.',
    ],
    faqs: [
      {
        question: 'What is Fliki best at?',
        answer:
          'Fliki is best at narrated videos built from text, such as turning a blog post into a video with natural-sounding AI voices in many languages.',
      },
      {
        question: 'Which Fliki alternative is best if I already have articles or long videos?',
        answer:
          'Pictory. It is built to repurpose articles, scripts and long recordings into short clips with captions, stock footage and voiceover.',
      },
    ],
    guides: [flikiPictoryGuide, videoGuide],
  },
  pictory: {
    summary:
      'Pictory turns blog posts, scripts and long videos into short clips with captions, stock footage and AI voiceover. It works best when you already have content to repurpose. Each plan limits how many videos you can make per month.',
    reasons: [
      'You want to start from an idea and care most about narration quality. Fliki puts voices first.',
      'You want a presenter on screen. Synthesia uses lifelike AI presenters.',
      'You only need the audio. ElevenLabs is built for realistic voiceovers, podcasts and audiobooks.',
      'You want AI-generated clips instead of stock footage. Kling AI generates video from text or images.',
    ],
    faqs: [
      {
        question: 'What is Pictory best at?',
        answer:
          'Pictory is best at repurposing content you already have, such as blog posts, scripts and long recordings, into short videos with captions and voiceover.',
      },
      {
        question: 'Which Pictory alternative is better for voice quality?',
        answer:
          'ElevenLabs is the most voice-focused tool in this list, and Fliki is also known for natural voices in many languages. Try the same short script in both before you pay.',
      },
    ],
    guides: [flikiPictoryGuide, videoGuide],
  },
  synthesia: {
    summary:
      'Synthesia lets you type a script and have a lifelike AI presenter deliver it in many languages, with no camera or studio. It is aimed at training, onboarding and explainer videos. Plans limit video minutes, and prices were raised earlier this year.',
    reasons: [
      'You do not need a presenter on screen. Fliki and Pictory build narrated videos from text.',
      'You want to turn existing articles or recordings into clips. Pictory is built for that.',
      'You want cinematic AI clips instead of a presenter. Kling AI generates short video from text or images.',
      'You want a lower starting price. Kling AI and ElevenLabs list some of the lowest starting prices in this list, but ElevenLabs makes audio only.',
    ],
    faqs: [
      {
        question: 'What is Synthesia best for?',
        answer:
          'Synthesia is best for training, onboarding and explainer videos where you want an AI presenter and no camera or studio.',
      },
      {
        question: 'Do I need a camera with Synthesia or its alternatives?',
        answer:
          'No. Synthesia uses AI presenters. Fliki and Pictory build videos from text, footage and AI voices, and Kling AI generates clips from text or images. ElevenLabs makes audio only.',
      },
    ],
    guides: [videoGuide],
  },
  'kling-ai': {
    summary:
      'Kling AI turns text prompts or still images into short video clips, with camera-motion controls and, in newer models, native audio. It is a different kind of tool from the narrated-video builders in this list. Videos use credits, and free access is limited and may add a watermark.',
    reasons: [
      'You want a narrated explainer or a longer video built from a script. Fliki and Pictory are made for that.',
      'You need a presenter delivering a script. Synthesia uses lifelike AI presenters.',
      'You only need a voiceover or audio track. ElevenLabs focuses on realistic voices.',
      'You want to turn existing articles or recordings into videos. Pictory repurposes them with captions and voiceover.',
    ],
    faqs: [
      {
        question: 'What is Kling AI best at?',
        answer:
          'Kling AI is best at short, realistic-looking clips generated from text prompts or still images, with camera and motion controls.',
      },
      {
        question: 'Can Kling AI replace Fliki or Pictory?',
        answer:
          'Not exactly. Kling AI generates short clips from prompts or images, while Fliki and Pictory turn scripts, articles and recordings into complete videos with captions and voiceover. They solve different jobs, so choose by the job.',
      },
    ],
    guides: [videoGuide],
  },
  elevenlabs: {
    summary:
      'ElevenLabs turns text into natural-sounding speech in many voices and languages, and it offers voice cloning (with permission) and dubbing. It makes audio, not complete videos. Usage is measured in credits, so heavy use needs a higher plan.',
    reasons: [
      'You need finished videos, not just audio. Fliki adds visuals and subtitles to AI voiceover.',
      'You want a presenter on screen. Synthesia delivers your script with a lifelike AI presenter.',
      'You want to turn articles into videos. Pictory repurposes written content into short clips.',
      'You want AI-generated video clips. Kling AI creates them from text or images.',
    ],
    faqs: [
      {
        question: 'What is ElevenLabs best for?',
        answer:
          'ElevenLabs is best for voiceovers, audiobooks, podcasts and dubbing, where voice quality matters most.',
      },
      {
        question: 'Is there an ElevenLabs alternative that also makes video?',
        answer:
          'Yes. Fliki and Synthesia both pair AI voices with video. Fliki is known for natural voices in many languages, and Synthesia uses a lifelike AI presenter. Neither is a pure voice tool, so compare the voices on a short script first.',
      },
    ],
    guides: [],
  },
}

type ListInfo = { listName: string; listPath: string; tools: Tool[] }

function allLists(): ListInfo[] {
  const lists: ListInfo[] = []
  for (const category of allCategories) {
    if (category.tools) {
      lists.push({ listName: category.name, listPath: `/${category.slug}`, tools: category.tools })
    }
    for (const sub of category.subcategories ?? []) {
      lists.push({
        listName: sub.name,
        listPath: `/${category.slug}/${sub.slug}`,
        tools: sub.tools,
      })
    }
  }
  return lists
}

function isReal(tool: Tool) {
  return (tool as Tool & { comingSoon?: boolean }).comingSoon !== true
}

export function joinNames(names: string[]) {
  if (names.length <= 1) return names.join('')
  return `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`
}

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

/** "2026-10-29" -> "October 29, 2026" */
export function formatLongDate(iso: string) {
  const [year, month, day] = iso.split('-').map(Number)
  return `${MONTHS[month - 1]} ${day}, ${year}`
}

/** "2026-10-29" -> "October 2026" */
export function formatMonthYear(iso: string) {
  const [year, month] = iso.split('-').map(Number)
  return `${MONTHS[month - 1]} ${year}`
}

function buildPages(): AlternativesPageData[] {
  const pages: AlternativesPageData[] = []
  const seen = new Set<string>()

  for (const list of allLists()) {
    if (!list.tools.every(isReal)) continue

    list.tools.forEach((tool, index) => {
      const copy = altCopy[tool.slug]
      if (!copy) return

      if (seen.has(tool.slug)) {
        throw new Error(`[FIVE PICKED] "${tool.slug}" appears in more than one list. Alternatives need one list.`)
      }
      seen.add(tool.slug)

      const alternatives = list.tools.filter((t) => t.slug !== tool.slug)

      // One FAQ is generated from live data so it never goes out of date.
      const free = alternatives.filter((t) => /free/i.test(t.startingPrice)).map((t) => t.name)
      const freeFaq: Faq = {
        question: `Are there free alternatives to ${tool.name}?`,
        answer:
          free.length > 0
            ? `${joinNames(free)} ${free.length === 1 ? 'lists' : 'list'} a free plan, free tier or free trial. Free access is usually limited, and some free plans add watermarks, so check the current terms on each official website.`
            : `Free access and trial availability are not confirmed here. See each official website for current plans, limits and commercial-use terms.`,
      }

      pages.push({
        slug: tool.slug,
        tool,
        rank: index + 1,
        listName: list.listName,
        listPath: list.listPath,
        alternatives,
        summary: copy.summary,
        reasons: copy.reasons,
        faqs: [...copy.faqs, freeFaq],
        guides: copy.guides,
      })
    })
  }

  return pages
}

const pages = buildPages()

export function getAllAlternativePages() {
  return pages
}

export function getAlternativePage(slug: string) {
  return pages.find((page) => page.slug === slug)
}
