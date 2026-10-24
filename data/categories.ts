/**
 * FIVE PICKED — single source of truth for all categories, subcategories and tools.
 *
 * Rules (enforced at build time by `validateCategories` at the bottom of this file):
 * - Every tool list has exactly 5 tools, in ranked order (index 0 = rank 1).
 * - A category has EITHER `subcategories` OR `tools`, never both.
 * - Slugs must be unique within their list.
 *
 * Outbound buttons use `affiliateUrl` when present, otherwise `officialUrl`.
 *
 * All tools below are clearly marked placeholders ("Tool 1" … "Tool 5").
 * Replace them with real entries before publishing.
 */

export type Tool = {
  slug: string
  name: string
  tagline: string
  bestFor: string
  whatItDoes: string
  strengths: string[]
  goodToKnow: string
  startingPrice: string
  officialUrl: string
  affiliateUrl?: string
}

export type Subcategory = {
  slug: string
  name: string
  description: string
  tools: Tool[]
}

export type Category = {
  slug: string
  name: string
  description: string
  subcategories?: Subcategory[]
  tools?: Tool[]
}

/** Shown as "Last updated" on every ranked list page. Use ISO format (YYYY-MM-DD). */
export const lastUpdated = '2026-10-24'

/**
 * Generates 5 clearly marked placeholder tools for a list.
 * `topic` is a short lowercase phrase, e.g. "web hosting".
 */
function placeholderTools(topic: string): Tool[] {
  const profiles = [
    {
      tagline: `A well-rounded ${topic} option that balances features and ease of use.`,
      bestFor: 'Most people who want one dependable choice',
      whatItDoes: `Placeholder text. Tool 1 covers the core needs of ${topic} in a single, polished package. It is designed to be easy to start with while still offering enough depth for growing needs over time.`,
      strengths: [
        'Clear, beginner-friendly setup',
        'Covers the most common use cases well',
        'Consistent, reliable day-to-day experience',
        'Good documentation and help resources',
      ],
      goodToKnow:
        'Placeholder note. Some advanced features may only be available on higher plans.',
    },
    {
      tagline: `A flexible ${topic} pick with room to grow.`,
      bestFor: 'Users who expect their needs to expand',
      whatItDoes: `Placeholder text. Tool 2 focuses on flexibility, letting you adjust how it works as your ${topic} needs change. It suits people who want more control without a steep learning curve.`,
      strengths: [
        'Highly configurable settings',
        'Scales from small to larger projects',
        'Works well alongside other tools',
      ],
      goodToKnow:
        'Placeholder note. The extra flexibility can take a little time to learn.',
    },
    {
      tagline: `A budget-conscious ${topic} choice that covers the essentials.`,
      bestFor: 'Getting started on a tight budget',
      whatItDoes: `Placeholder text. Tool 3 keeps things simple and affordable, focusing on the essentials of ${topic}. It is a sensible starting point if you want to try things out before committing to more.`,
      strengths: [
        'Straightforward pricing',
        'Lightweight and quick to learn',
        'Covers the basics without clutter',
      ],
      goodToKnow:
        'Placeholder note. Power users may outgrow it and want more advanced options.',
    },
    {
      tagline: `A ${topic} tool built for teams and collaboration.`,
      bestFor: 'Small teams working together',
      whatItDoes: `Placeholder text. Tool 4 is built around collaboration, making it easier for several people to share ${topic} work in one place. It puts shared workflows and permissions front and center.`,
      strengths: [
        'Built-in sharing and collaboration',
        'Role and permission controls',
        'Helpful for keeping work organized',
        'Clean, focused interface',
      ],
      goodToKnow:
        'Placeholder note. Solo users may find some team features unnecessary.',
    },
    {
      tagline: `A specialist ${topic} option for specific needs.`,
      bestFor: 'People with a particular, focused use case',
      whatItDoes: `Placeholder text. Tool 5 does one part of ${topic} especially well rather than trying to do everything. It is a strong fit when its particular strength matches exactly what you need.`,
      strengths: [
        'Excellent at its core specialty',
        'Focused, distraction-free design',
        'Thoughtful details for its niche',
      ],
      goodToKnow:
        'Placeholder note. It is less of an all-rounder than the higher-ranked picks.',
    },
  ]

  return profiles.map((profile, index) => ({
    slug: `tool-${index + 1}`,
    name: `Tool ${index + 1}`,
    startingPrice: '[Placeholder] See website',
    officialUrl: 'https://example.com/',
    ...profile,
  }))
}

export const categories: Category[] = [
  {
    slug: 'ai-tools',
    name: 'AI Tools',
    description:
      'Hand-picked AI tools for creating, writing, designing and working faster, grouped by what you actually want to get done.',
    subcategories: [
      {
        slug: 'video-and-voice',
        name: 'Video & Voice',
        description:
          'AI tools that help you generate, edit and narrate video, or create natural-sounding voiceovers.',
        tools: placeholderTools('AI video and voice'),
      },
      {
        slug: 'image-and-design',
        name: 'Image & Design',
        description:
          'AI tools for generating images, editing photos and speeding up everyday design work.',
        tools: placeholderTools('AI image and design'),
      },
      {
        slug: 'meeting-notes',
        name: 'Meeting Notes',
        description:
          'AI assistants that record, transcribe and summarize meetings so you can focus on the conversation.',
        tools: placeholderTools('AI meeting notes'),
      },
      {
        slug: 'marketing-and-seo',
        name: 'Marketing & SEO',
        description:
          'AI tools that help with copywriting, content planning, search optimization and campaign work.',
        tools: placeholderTools('AI marketing and SEO'),
      },
      {
        slug: 'chatbots',
        name: 'Chatbots',
        description:
          'General-purpose AI assistants for answering questions, drafting text and thinking through problems.',
        tools: placeholderTools('AI chatbot'),
      },
    ],
  },
  {
    slug: 'web-hosting-and-domains',
    name: 'Web Hosting & Domains',
    description:
      'Reliable places to host your website and register your domain, from simple personal sites to growing businesses.',
    tools: placeholderTools('web hosting and domain'),
  },
  {
    slug: 'vpn-and-security',
    name: 'VPN & Security',
    description:
      'Tools that help protect your privacy and accounts online, including VPNs, password managers and security suites.',
    tools: placeholderTools('VPN and security'),
  },
  {
    slug: 'online-courses',
    name: 'Online Courses',
    description:
      'Platforms for learning new skills online, from short practical lessons to structured, in-depth programs.',
    tools: placeholderTools('online learning'),
  },
  {
    slug: 'email-marketing',
    name: 'Email Marketing',
    description:
      'Services for building an email list, sending newsletters and automating campaigns without the headache.',
    tools: placeholderTools('email marketing'),
  },
  {
    slug: 'video-and-design-software',
    name: 'Video & Design Software',
    description:
      'Software for editing video, designing graphics and producing creative work, for beginners and professionals.',
    tools: placeholderTools('video and design'),
  },
  {
    slug: 'software-and-productivity',
    name: 'Software & Productivity',
    description:
      'Everyday software that helps you stay organized, work with others and get more done with less effort.',
    subcategories: [
      {
        slug: 'note-taking',
        name: 'Note-Taking',
        description:
          'Apps for capturing ideas, organizing notes and building a personal knowledge base.',
        tools: placeholderTools('note-taking'),
      },
      {
        slug: 'project-management',
        name: 'Project Management',
        description:
          'Tools for planning projects, tracking tasks and keeping teams aligned on what matters.',
        tools: placeholderTools('project management'),
      },
      {
        slug: 'cloud-storage',
        name: 'Cloud Storage',
        description:
          'Services for storing, syncing and sharing your files securely across all your devices.',
        tools: placeholderTools('cloud storage'),
      },
      {
        slug: 'presentations',
        name: 'Presentations',
        description:
          'Apps for building clear, good-looking slide decks and presenting with confidence.',
        tools: placeholderTools('presentation'),
      },
      {
        slug: 'automation',
        name: 'Automation',
        description:
          'Tools that connect your apps and automate repetitive tasks so they run without you.',
        tools: placeholderTools('workflow automation'),
      },
    ],
  },
  {
    slug: 'freelance-platforms',
    name: 'Freelance Platforms',
    description:
      'Marketplaces for finding freelance work or hiring skilled freelancers for your next project.',
    tools: placeholderTools('freelance platform'),
  },
  {
    slug: 'language-learning',
    name: 'Language Learning',
    description:
      'Apps and services that help you learn a new language, build vocabulary and practice speaking.',
    tools: placeholderTools('language learning'),
  },
]

const REQUIRED_COUNT = 5

function assertUniqueSlugs(slugs: string[], context: string) {
  const seen = new Set<string>()
  for (const slug of slugs) {
    if (seen.has(slug)) {
      throw new Error(`[FIVE PICKED] Duplicate slug "${slug}" in ${context}.`)
    }
    seen.add(slug)
  }
}

function assertToolList(tools: Tool[], context: string) {
  if (tools.length !== REQUIRED_COUNT) {
    throw new Error(
      `[FIVE PICKED] ${context} has ${tools.length} tools. Every list must have exactly ${REQUIRED_COUNT}.`,
    )
  }
  assertUniqueSlugs(
    tools.map((tool) => tool.slug),
    context,
  )
}

/** Runs on import, so `next build` fails if any list breaks the rules. */
function validateCategories(list: Category[]) {
  assertUniqueSlugs(
    list.map((category) => category.slug),
    'categories',
  )

  for (const category of list) {
    const context = `Category "${category.slug}"`
    const hasSubs = Boolean(category.subcategories?.length)
    const hasTools = Boolean(category.tools)

    if (hasSubs === hasTools) {
      throw new Error(
        `[FIVE PICKED] ${context} must have either "subcategories" or "tools", not both or neither.`,
      )
    }

    if (category.subcategories) {
      if (category.subcategories.length !== REQUIRED_COUNT) {
        throw new Error(
          `[FIVE PICKED] ${context} has ${category.subcategories.length} subcategories. It must have exactly ${REQUIRED_COUNT}.`,
        )
      }
      assertUniqueSlugs(
        category.subcategories.map((sub) => sub.slug),
        `${context} subcategories`,
      )
      for (const sub of category.subcategories) {
        assertToolList(sub.tools, `Subcategory "${category.slug}/${sub.slug}"`)
      }
    }

    if (category.tools) {
      assertToolList(category.tools, context)
    }
  }
}

validateCategories(categories)
