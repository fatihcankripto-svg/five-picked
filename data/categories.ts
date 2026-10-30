import { editorialDates } from '@/lib/editorial-dates'
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
 * Lists that still use `placeholderTools(...)` are clearly marked placeholders
 * ("Tool 1" … "Tool 5"). Replace them with real entries before publishing.
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
  hidden?: boolean
  slug: string
  name: string
  description: string
  subcategories?: Subcategory[]
  tools?: Tool[]
}

/** Shown as "Last updated" on every ranked list page. Use ISO format (YYYY-MM-DD). */
export const lastUpdated = editorialDates.categories

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
    startingPrice: 'See website',
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
        tools: [
                    {
            slug: "kling-ai",
            name: "Kling AI",
            tagline: "Realistic AI video from text or images.",
            bestFor: "Creators who want smooth, natural-looking motion",
            whatItDoes: "Kling AI turns text prompts or still images into short video clips. Newer models add camera-motion controls, native audio and higher-resolution output.",
            strengths: [
              "Smooth, realistic motion",
              "Text-to-video and image-to-video",
              "Camera and motion controls",
              "A free tier to try it",
            ],
            goodToKnow: "Videos use credits, and free access is limited and may add a watermark. Paid plans add faster queues and commercial-use rights.",
            startingPrice: 'See website',
            officialUrl: "https://klingai.com/",
          },
            
          {
            slug: "pictory",
            name: "Pictory",
            tagline: "Turn blogs, scripts and long videos into short clips.",
            bestFor: "Content marketers repurposing articles and webinars",
            whatItDoes: "Pictory turns your text, articles or long recordings into short, shareable videos with captions, stock footage and voiceover.",
            strengths: [
              "Repurposes articles and long videos into short clips",
              "Automatic captions",
              "Stock footage and AI voiceovers included",
              "Free trial to test it first",
            ],
            goodToKnow: "Each plan limits how many videos you can make per month, so check the plan limits before you buy.",
            startingPrice: 'See website',
            officialUrl: "https://pictory.ai",
          },
          {
            slug: "synthesia",
            name: "Synthesia",
            tagline: "Realistic AI presenters for training and explainer videos.",
            bestFor: "Training, onboarding and explainer videos without a camera",
            whatItDoes: "Synthesia lets you type a script and have a lifelike AI presenter deliver it in many languages, so you can make videos without filming anything.",
            strengths: [
              "Lifelike AI presenters",
              "Many languages and voices",
              "No camera or studio needed",
              "A free plan to try it",
            ],
            goodToKnow: "Plans limit video minutes, and prices were raised earlier this year, so check the current plans.",
            startingPrice: 'See website',
            officialUrl: "https://www.synthesia.io",
          },
          {
            slug: "fliki",
            name: "Fliki",
            tagline: "Text to video with natural-sounding AI voices.",
            bestFor: "Creators making narrated videos, podcasts and social clips",
            whatItDoes: "Fliki converts a script or blog post into a video with AI voiceover, visuals and subtitles. It is especially popular for its natural voices in many languages.",
            strengths: [
              "Natural AI voices in many languages",
              "Turns blog posts into narrated videos",
              "Simple editor for quick changes",
              "A free plan to start",
            ],
            goodToKnow: "The free plan has limits, so most regular users upgrade for more minutes and voices.",
            startingPrice: 'See website',
            officialUrl: "https://fliki.ai",
          },
          {
            slug: "elevenlabs",
            name: "ElevenLabs",
            tagline: "Some of the most realistic AI voices available.",
            bestFor: "Voiceovers, audiobooks, podcasts and dubbing",
            whatItDoes: "ElevenLabs turns text into natural-sounding speech in many voices and languages. It can also clone a voice (with permission) and dub content into other languages.",
            strengths: [
              "Very realistic AI voices",
              "Many languages",
              "Voice cloning and dubbing tools",
              "A free plan to try it",
            ],
            goodToKnow: "Usage is measured in credits, so heavy use needs a higher plan. Only clone voices you have permission to use.",
            startingPrice: 'See website',
            officialUrl: "https://elevenlabs.io",
          },
        ],
      },
      {
        slug: 'image-and-design',
        name: 'Image & Design',
        description:
          'AI tools for generating images, editing photos and speeding up everyday design work.',
        tools: [
          {
            slug: "adobe-firefly",
            name: "Adobe Firefly",
            tagline: "AI image tools designed with commercial use in mind.",
            bestFor: "Designers and businesses that want AI images they can use with confidence",
            whatItDoes: "Adobe Firefly generates and edits images from text prompts. It sits inside the Adobe ecosystem, so it works well alongside tools like Photoshop.",
            strengths: [
              "Built with commercial use in mind",
              "Works alongside Photoshop and other Adobe apps",
              "Generates and edits images",
              "A free plan to try it",
            ],
            goodToKnow: "Generations use credits, and higher volumes need a paid plan.",
            startingPrice: 'See website',
            officialUrl: "https://firefly.adobe.com",
          },
          {
            slug: "ideogram",
            name: "Ideogram",
            tagline: "AI images with text that actually looks right.",
            bestFor: "Posters, logos and social graphics that include words",
            whatItDoes: "Ideogram creates images from text prompts and is known for putting readable text inside them, which many image generators struggle with.",
            strengths: [
              "Strong at readable text inside images",
              "Good for logos, posters and social posts",
              "Simple prompt-based workflow",
              "A free plan to start",
            ],
            goodToKnow: "The free plan has limits, so regular use needs a paid plan.",
            startingPrice: 'See website',
            officialUrl: "https://ideogram.ai",
          },
          {
            slug: "krea",
            name: "Krea",
            tagline: "Real-time AI image generation and a library of models.",
            bestFor: "Creators who like to experiment and iterate quickly",
            whatItDoes: "Krea lets you generate and edit images (and video) with many AI models in one place, including real-time tools that update as you type or draw.",
            strengths: [
              "Many AI models in one place",
              "Real-time generation as you create",
              "Image, video and enhancement tools",
              "A free plan to try it",
            ],
            goodToKnow: "Commercial use and the full model library are on paid plans.",
            startingPrice: 'See website',
            officialUrl: "https://www.krea.ai",
          },
          {
            slug: "openart",
            name: "OpenArt",
            tagline: "A big all-in-one AI art studio with many models.",
            bestFor: "Creators who want lots of models and styles in one place",
            whatItDoes: "OpenArt gives you access to many AI image models, plus tools to edit, upscale and finish images without leaving the site.",
            strengths: [
              "Many models and styles to choose from",
              "Editing and finishing tools in one place",
              "A free plan to start",
              "Great for experimenting",
            ],
            goodToKnow: "It runs on credits, so heavy use needs a paid plan.",
            startingPrice: 'See website',
            officialUrl: "https://openart.ai",
          },
                    {
            slug: "freepik",
            name: "Freepik",
            tagline: "AI image tools and a huge stock library in one place.",
            bestFor: "Marketers and creators who want AI images plus ready-made design assets",
            whatItDoes: "Freepik’s AI suite generates and edits images from text prompts using several models, including its own Mystic model. It sits alongside a large library of stock photos, vectors and templates, so you can mix AI and ready-made assets.",
            strengths: [
              "Several AI image models in one subscription",
              "Large library of stock vectors, photos and templates",
              "Editing tools such as upscaling and background removal",
              "A free plan with daily AI image generations",
            ],
            goodToKnow: "AI features run on credits, and the commercial AI license is part of the paid plans. Free use is limited.",
            startingPrice: 'See website',
            officialUrl: "https://www.freepik.com/",
          },
            
        ],
      },
      {
        slug: 'meeting-notes',
        name: 'Meeting Notes',
        description:
          'AI assistants that record, transcribe and summarize meetings so you can focus on the conversation.',
        tools: [
          {
            slug: "fireflies",
            name: "Fireflies.ai",
            tagline: "A meeting assistant that records, transcribes and summarizes.",
            bestFor: "Teams that use many meeting apps and work tools",
            whatItDoes: "Fireflies joins your online meetings, records and transcribes them, and writes summaries and action items you can search later.",
            strengths: [
              "Works with many meeting and work apps",
              "Searchable transcripts and summaries",
              "A free plan with unlimited transcription",
              "Team features on paid plans",
            ],
            goodToKnow: "AI features use credits, so heavy use of summaries may need a higher plan.",
            startingPrice: 'See website',
            officialUrl: "https://fireflies.ai",
          },
          {
            slug: "fathom",
            name: "Fathom",
            tagline: "A generous free notetaker with unlimited recordings.",
            bestFor: "Individuals and small teams who want a strong free option",
            whatItDoes: "Fathom records your video calls, transcribes them and writes clear summaries so you can focus on the conversation.",
            strengths: [
              "Unlimited recordings and transcripts on the free plan",
              "Quick, clear summaries",
              "Easy to get started",
              "Team and CRM features on paid plans",
            ],
            goodToKnow: "The free plan caps the number of advanced AI summaries each month.",
            startingPrice: 'See website',
            officialUrl: "https://fathom.ai",
          },
          {
            slug: "otter",
            name: "Otter.ai",
            tagline: "A long-running AI notetaker with live transcripts.",
            bestFor: "Students and professionals who want live transcription",
            whatItDoes: "Otter transcribes conversations as they happen and turns them into searchable notes and summaries.",
            strengths: [
              "Live transcription during meetings",
              "Searchable notes and summaries",
              "Works with popular meeting apps",
              "A free plan to start",
            ],
            goodToKnow: "The free plan limits monthly minutes and meeting length.",
            startingPrice: 'See website',
            officialUrl: "https://otter.ai",
          },
          {
            slug: "tldv",
            name: "tl;dv",
            tagline: "A meeting recorder with highlights you can share.",
            bestFor: "Teams that want to share key moments from calls",
            whatItDoes: "tl;dv records your meetings, transcribes them and lets you highlight and share the important moments.",
            strengths: [
              "Unlimited recording on the free plan",
              "Transcription in many languages",
              "Highlights you can share with your team",
              "CRM and sales tools on paid plans",
            ],
            goodToKnow: "The free plan limits monthly AI summaries.",
            startingPrice: 'See website',
            officialUrl: "https://tldv.io",
          },
          {
            slug: "notta",
            name: "Notta",
            tagline: "Simple, low-cost transcription and meeting notes.",
            bestFor: "Budget-conscious users who mainly need good transcripts",
            whatItDoes: "Notta records and transcribes meetings and audio, then creates summaries you can search and share.",
            strengths: [
              "Low entry price",
              "Transcription in many languages",
              "Simple to use",
              "A free plan to try it",
            ],
            goodToKnow: "The free plan has tight monthly and per-session limits, and there is no built-in CRM sync.",
            startingPrice: 'See website',
            officialUrl: "https://www.notta.ai",
          },
        ],
      },
      {
        slug: 'marketing-and-seo',
        name: 'Marketing & SEO',
        description:
          'AI tools that help with copywriting, content planning, search optimization and campaign work.',
        tools: [
          {
            slug: "semrush",
            name: "Semrush",
            tagline: "An all-in-one SEO and marketing toolkit.",
            bestFor: "Marketers and agencies who want one platform for SEO research",
            whatItDoes: "Semrush helps you research keywords, check competitors, audit your site and track rankings, with AI tools to help plan and write content.",
            strengths: [
              "Powerful keyword and competitor research",
              "Site audits and rank tracking",
              "Content and ad research in one platform",
              "Free trial and a limited free account",
            ],
            goodToKnow: "It has a lot of features, so it takes time to learn, and costs add up on higher plans.",
            startingPrice: 'See website',
            officialUrl: "https://www.semrush.com",
          },
          {
            slug: "surfer-seo",
            name: "Surfer SEO",
            tagline: "Write content that matches what ranks on Google.",
            bestFor: "Writers and SEO teams optimizing articles",
            whatItDoes: "Surfer analyzes top-ranking pages and shows you what to include in your article, with a scoring editor and AI writing help.",
            strengths: [
              "Clear scoring editor that shows what to improve",
              "Built-in AI writing help",
              "Keyword and search-results analysis",
              "Good for ongoing content work",
            ],
            goodToKnow: "Plans limit how many documents you can create, and there is no free plan.",
            startingPrice: 'See website',
            officialUrl: "https://surferseo.com",
          },
          {
            slug: "neuronwriter",
            name: "NeuronWriter",
            tagline: "A budget-friendly content optimization editor.",
            bestFor: "Solo writers and small teams",
            whatItDoes: "NeuronWriter gives you SEO recommendations while you write, based on what ranks for your keyword, plus AI writing credits.",
            strengths: [
              "Low starting price",
              "Editor with clear SEO recommendations",
              "Content analyses and AI writing credits",
              "Free trial available",
            ],
            goodToKnow: "Plans include a set number of content analyses each month, and it is less polished than pricier tools.",
            startingPrice: 'See website',
            officialUrl: "https://neuronwriter.com",
          },
          {
            slug: "frase",
            name: "Frase",
            tagline: "Research, brief and optimize content in one place.",
            bestFor: "Content teams planning articles from search results",
            whatItDoes: "Frase builds content briefs from top-ranking pages, helps you write with AI and scores your article so you know what to improve.",
            strengths: [
              "Content briefs built from top-ranking pages",
              "Editor with optimization scores",
              "AI writing and search-visibility tracking",
              "Lower entry price than some rivals",
            ],
            goodToKnow: "Plans and limits vary, so check the billing terms carefully after any free trial.",
            startingPrice: 'See website',
            officialUrl: "https://www.frase.io",
          },
          {
            slug: "writesonic",
            name: "Writesonic",
            tagline: "AI writing plus SEO and AI-search visibility tools.",
            bestFor: "Marketers who want to draft content and track how their brand appears in AI search",
            whatItDoes: "Writesonic helps you write articles, ads and landing-page copy with AI, and includes SEO tools and tracking for how your brand shows up in AI search.",
            strengths: [
              "AI writing for articles, ads and pages",
              "SEO and content tools included",
              "AI-search visibility tracking on higher plans",
              "Free trial to test it",
            ],
            goodToKnow: "Plans change often and some features sit on higher plans, so check what is included.",
            startingPrice: 'See website',
            officialUrl: "https://writesonic.com",
          },
        ],
      },
      {
        slug: 'chatbots',
        name: 'Chatbots',
        description:
          'Tools that let you build your own AI chatbot for your website or business, trained on your content to answer visitors’ questions around the clock.',
        tools: [
          {
            slug: "tidio",
            name: "Tidio",
            tagline: "Live chat and chatbots for small online businesses.",
            bestFor: "Small shops and websites that want a chatbot fast",
            whatItDoes: "Tidio combines live chat with chatbot flows and an AI assistant that answers customer questions on your website.",
            strengths: [
              "Easy to set up without code",
              "Live chat and chatbot in one tool",
              "AI assistant for common questions",
              "A free plan to start",
            ],
            goodToKnow: "The AI assistant is billed per conversation on top of your plan.",
            startingPrice: 'See website',
            officialUrl: "https://www.tidio.com",
          },
          {
            slug: "chatbase",
            name: "Chatbase",
            tagline: "Train a chatbot on your own content.",
            bestFor: "Website FAQs and support answers from your own documents",
            whatItDoes: "Chatbase lets you upload your web pages, documents or FAQs and creates a chatbot that answers questions using that content.",
            strengths: [
              "Trains on your own pages and documents",
              "Quick to set up, no coding needed",
              "Embeds on your website",
              "A free plan to try it",
            ],
            goodToKnow: "Usage is measured in message credits, and heavier AI models use more of them.",
            startingPrice: 'See website',
            officialUrl: "https://www.chatbase.co",
          },
          {
            slug: "landbot",
            name: "Landbot",
            tagline: "Build guided chat conversations without code.",
            bestFor: "Lead capture, bookings and guided chat flows",
            whatItDoes: "Landbot is a no-code builder for chat experiences on websites and WhatsApp, with guided conversations and AI options.",
            strengths: [
              "Visual, no-code flow builder",
              "Good for lead forms and guided chats",
              "Works on websites and WhatsApp",
              "A free plan for testing",
            ],
            goodToKnow: "The free plan is for prototyping only, since live use needs a paid plan.",
            startingPrice: 'See website',
            officialUrl: "https://landbot.io",
          },
          {
            slug: "botpress",
            name: "Botpress",
            tagline: "A flexible chatbot platform for people who want more control.",
            bestFor: "Developers and teams building custom AI agents",
            whatItDoes: "Botpress lets you build AI chatbots and agents with a visual builder and code options, then deploy them on your website and messaging channels.",
            strengths: [
              "Very flexible, with code-level control",
              "Visual builder for conversation flows",
              "Unlimited bots on paid plans",
              "A free plan to start",
            ],
            goodToKnow: "It has a steeper learning curve than simpler tools, and AI usage is billed on top.",
            startingPrice: 'See website',
            officialUrl: "https://botpress.com",
          },
          {
            slug: "customgpt",
            name: "CustomGPT.ai",
            tagline: "Business chatbots trained on your documents.",
            bestFor: "Companies with lots of documents and knowledge bases",
            whatItDoes: "CustomGPT.ai builds chatbots from your own files, websites and knowledge bases so they answer using your information.",
            strengths: [
              "Trains on your documents and sites",
              "Aimed at business and knowledge-base use",
              "Easy to embed on a website",
              "Built with company data security in mind",
            ],
            goodToKnow: "It is priced for businesses and has no free plan.",
            startingPrice: 'See website',
            officialUrl: "https://customgpt.ai",
          },
        ],
      },
    ],
  },
  {
    slug: 'web-hosting-and-domains',
    name: 'Web Hosting & Domains',
    description:
      'Reliable places to host your website and register your domain, from simple personal sites to growing businesses.',
    tools: [
      {
        slug: 'hostinger',
        name: 'Hostinger',
        tagline: 'Low-cost hosting that is quick to set up and easy to manage.',
        bestFor: 'Beginners, bloggers and small business sites on a budget',
        whatItDoes:
          'Hostinger offers shared, WordPress, cloud and VPS hosting with its own simple control panel. You can launch a site in a few clicks, and longer plans include a free domain for the first year.',
        strengths: [
          'Very affordable entry prices',
          'Simple control panel that is easy to learn',
          'Fast servers and free SSL certificates',
          '30-day money-back guarantee',
        ],
        goodToKnow:
          'The lowest advertised prices need a long commitment, and plans renew at a higher price. Check the renewal price before you buy.',
        startingPrice: 'See website',
        officialUrl: 'https://www.hostinger.com/',
      },
      {
        slug: 'bluehost',
        name: 'Bluehost',
        tagline: 'A well-known host with a strong focus on WordPress beginners.',
        bestFor: 'First-time WordPress site owners',
        whatItDoes:
          'Bluehost provides shared, WordPress, WooCommerce and VPS hosting. It installs WordPress for you, includes a free domain for the first year on most plans, and offers round-the-clock support.',
        strengths: [
          'Easy WordPress setup for beginners',
          'Free domain for the first year on most plans',
          'Free SSL certificate included',
          '24/7 support',
        ],
        goodToKnow:
          'Compare the total first-term cost and renewal terms on the official website. Current renewal price: see website.',
        startingPrice: 'See website',
        officialUrl: 'https://www.bluehost.com/',
      },
      {
        slug: 'cloudways',
        name: 'Cloudways',
        tagline: 'Managed cloud hosting that lets you pick your own infrastructure.',
        bestFor: 'Growing sites, agencies and people who want more control',
        whatItDoes:
          'Cloudways sets up and manages servers on providers such as DigitalOcean, Vultr and Google Cloud. You choose the server size, pay for what you use, and it handles updates, backups and security tools.',
        strengths: [
          'Pay-as-you-go pricing with hourly billing',
          'Choice of several cloud providers',
          'Free migration for WordPress sites',
          'Easy to upgrade server size as you grow',
        ],
        goodToKnow:
          'It is a little more technical than shared hosting. Email is not included and is an add-on. A free 3-day trial is available.',
        startingPrice: 'See website',
        officialUrl: 'https://www.awin1.com/cread.php?awinmid=89935&awinaffid=3134673&campaign=fivepicked&ued=https%3A%2F%2Fwww.cloudways.com%2F&platform=pl',
      },
      {
        slug: 'kinsta',
        name: 'Kinsta',
        tagline: 'Premium managed hosting built only for WordPress.',
        bestFor: 'Busy WordPress sites and businesses that value speed and support',
        whatItDoes:
          'Kinsta runs WordPress sites on Google Cloud. It handles server setup, daily backups and security, and gives you tools such as staging sites so you can test changes safely.',
        strengths: [
          'Fast, reliable performance for WordPress',
          'Daily backups and staging environments',
          'Dashboard made for WordPress users',
          'Expert support focused on WordPress',
        ],
        goodToKnow:
          'It is the most expensive option in this list and works with WordPress only. Plans are limited by monthly visits.',
        startingPrice: 'See website',
        officialUrl: 'https://kinsta.com/',
      },
      {
        slug: 'namecheap',
        name: 'Namecheap',
        tagline: 'A trusted place to register domains, with budget hosting too.',
        bestFor: 'Registering a domain and starting a simple site at low cost',
        whatItDoes:
          'Namecheap is a long-running domain registrar that also sells shared hosting, VPS and email. It is a popular choice for buying a domain name and managing it in one clear dashboard.',
        strengths: [
          'Low-priced domain registration',
          'Free domain privacy protection on many domains',
          'Simple dashboard for managing domains',
          'Budget hosting plans for small sites',
        ],
        goodToKnow:
          'Promotional domain prices often rise at renewal, so check the renewal price before you buy.',
        startingPrice: 'See website',
        officialUrl: 'https://www.namecheap.com/',
      },
    ],
  },
  {
    slug: 'vpn-and-security',
    name: 'VPN & Security',
    description:
      'Tools that help protect your privacy and accounts online, including VPNs, password managers and security suites.',
    tools: [
      {
        slug: 'nordvpn',
        name: 'NordVPN',
        tagline: 'A fast, well-rounded VPN with extra security tools built in.',
        bestFor: 'Everyday privacy, streaming and public Wi-Fi protection',
        whatItDoes:
          'NordVPN encrypts your internet connection and hides your real location. It runs on phones, computers and many other devices, and has a large network of servers worldwide.',
        strengths: [
          'Fast connections thanks to its own NordLynx protocol',
          'Threat Protection to help block malicious sites and trackers',
          'Its no-logs policy has been checked by independent audits',
          '30-day money-back guarantee',
        ],
        goodToKnow:
          'Long plans are much cheaper than monthly billing, and renewal prices are higher than the first-term price.',
        startingPrice: 'See website',
        officialUrl: 'https://nordvpn.com',
      },
      {
        slug: 'surfshark',
        name: 'Surfshark',
        tagline: 'Low-cost VPN with unlimited devices on one account.',
        bestFor: 'Families and anyone with many devices on a budget',
        whatItDoes:
          'Surfshark protects your connection and hides your location, and you can use it on as many devices as you like with a single subscription.',
        strengths: [
          'Unlimited simultaneous devices',
          'One of the lowest long-term prices among major VPNs',
          'Built-in ad and malware blocking',
          '30-day money-back guarantee',
        ],
        goodToKnow:
          'The low price is for long plans paid upfront, and renewals cost more than the first term.',
        startingPrice: 'See website',
        officialUrl: 'https://surfshark.com',
      },
      {
        slug: 'expressvpn',
        name: 'ExpressVPN',
        tagline: 'Premium VPN known for simplicity and reliability.',
        bestFor: 'People who want an easy, polished app and don’t mind paying a bit more',
        whatItDoes:
          'ExpressVPN encrypts your traffic and lets you connect to servers in many countries with very little setup. Its apps are designed to be simple to use.',
        strengths: [
          'Very easy to use on all major devices',
          'Servers run on RAM only, so data is wiped on every restart',
          'Security setup has been reviewed by independent auditors',
          '30-day money-back guarantee',
        ],
        goodToKnow:
          'Plans and prices have changed often this year, so check the current price before you buy.',
        startingPrice: 'See website',
        officialUrl: 'https://www.expressvpn.com',
      },
      {
        slug: 'proton-vpn',
        name: 'Proton VPN',
        tagline: 'Privacy-first VPN from the team behind Proton Mail, with a free plan.',
        bestFor: 'Privacy-minded users and anyone who wants to try a VPN for free first',
        whatItDoes:
          'Proton VPN hides your location and encrypts your connection. It has a free plan with no data limit, and paid plans that unlock more servers and features.',
        strengths: [
          'A free plan with no data cap',
          'Open-source apps that independent experts can inspect',
          'Secure Core option routes traffic through extra servers for more privacy',
          'Based in Switzerland, known for strong privacy laws',
        ],
        goodToKnow:
          'The free plan has fewer servers and lower speeds than paid plans, and long-term pricing is slightly higher than the cheapest rivals.',
        startingPrice: 'See website',
        officialUrl: 'https://protonvpn.com',
      },
      {
        slug: 'private-internet-access',
        name: 'Private Internet Access',
        tagline: 'Budget VPN with lots of settings for people who like control.',
        bestFor: 'Budget buyers and users who like to customize their VPN',
        whatItDoes:
          'Private Internet Access (PIA) encrypts your connection and lets you connect on unlimited devices. It offers more settings than most VPNs, so you can tune it to your needs.',
        strengths: [
          'Unlimited devices on one subscription',
          'Very low price on the longest plan',
          'Many customization options',
          'Open-source apps and a 30-day money-back guarantee',
        ],
        goodToKnow:
          'It is a US-based company and has no free plan; the lowest price needs a 3-year commitment paid upfront.',
        startingPrice: 'See website',
        officialUrl: 'https://www.privateinternetaccess.com',
      },
    ],
  },
  {
    slug: 'online-courses',
    name: 'Online Courses',
    description:
      'Platforms for learning new skills online, from short practical lessons to structured, in-depth programs.',
    tools: [
      {
        slug: 'coursera',
        name: 'Coursera',
        tagline: 'University and industry courses with certificates you can add to your CV.',
        bestFor: 'Career changers and anyone who wants recognized certificates',
        whatItDoes:
          'Coursera offers thousands of courses and certificate programs from universities and companies. You can watch many courses for free, and pay only if you want the certificate or graded work.',
        strengths: [
          'Huge range: business, tech, data, health, languages and more',
          'Courses from well-known universities and companies',
          'Many courses can be audited for free',
          'Coursera Plus gives unlimited access for one price',
        ],
        goodToKnow:
          'Certificates and graded work need a paid plan, and individual courses are priced separately from Coursera Plus.',
        startingPrice: 'See website',
        officialUrl: 'https://www.coursera.org',
      },
      {
        slug: 'datacamp',
        name: 'DataCamp',
        tagline: 'Learn data skills by writing real code, step by step.',
        bestFor: 'Beginners and professionals learning Python, SQL, data and AI',
        whatItDoes:
          'DataCamp teaches data analysis and AI skills through short lessons with exercises you complete right in your browser. It has guided career tracks, so you always know what to learn next.',
        strengths: [
          'Hands-on exercises instead of just watching videos',
          'Focused on data, Python, SQL and AI',
          'Clear learning paths for beginners',
          'A free plan lets you try the first chapter of every course',
        ],
        goodToKnow:
          'Annual plans are billed upfront and usually can’t be refunded, and prices have changed a few times this year, so check before you buy.',
        startingPrice: 'See website',
        officialUrl: 'https://www.datacamp.com',
      },
      {
        slug: 'skillshare',
        name: 'Skillshare',
        tagline: 'Thousands of practical classes for creative and everyday skills.',
        bestFor: 'Creative hobbies and practical skills like design, writing and photography',
        whatItDoes:
          'Skillshare is a membership with a very large library of short, project-based classes taught by working creators and professionals.',
        strengths: [
          'Huge library covering design, illustration, writing, photography and more',
          'Short classes you can finish in a weekend',
          'Project-based learning',
          'Offline viewing in the mobile app',
        ],
        goodToKnow:
          'It mainly sells yearly memberships, and it does not give completion certificates.',
        startingPrice: 'See website',
        officialUrl: 'https://www.skillshare.com',
      },
      {
        slug: 'scrimba',
        name: 'Scrimba',
        tagline: 'Learn to code in an interactive player where you can edit the lesson itself.',
        bestFor: 'Beginners learning web development, JavaScript and React',
        whatItDoes:
          'Scrimba teaches coding with interactive video lessons. You can pause at any moment and edit the teacher’s code right inside the player, then run it yourself.',
        strengths: [
          'Pause and edit the instructor’s code directly in the lesson',
          'A free tier with complete courses, including React',
          'Guided learning paths for web development',
          'Pro plan adds more courses and certificates',
        ],
        goodToKnow:
          'It focuses on coding only, so it is not the right choice if you want other subjects.',
        startingPrice: 'See website',
        officialUrl: 'https://scrimba.com',
      },
      {
        slug: 'masterclass',
        name: 'MasterClass',
        tagline: 'Learn from famous experts in beautifully produced classes.',
        bestFor: 'Curious people who want inspiration from top names in their field',
        whatItDoes:
          'MasterClass offers over 200 video classes taught by well-known experts in areas such as cooking, writing, business, music and more.',
        strengths: [
          'High-quality, cinematic video production',
          'Wide range of topics from famous teachers',
          'Easy to watch on TV, phone or computer',
          '30-day money-back guarantee',
        ],
        goodToKnow:
          'It is billed yearly only and renews automatically, and it does not give completion certificates.',
        startingPrice: 'See website',
        officialUrl: 'https://www.masterclass.com',
      },
    ],
  },
  {
    slug: 'email-marketing',
    name: 'Email Marketing',
    description:
      'The best email marketing software for building your list, sending newsletters and automating campaigns, with free options for beginners.',
    tools: [
      {
        slug: 'mailerlite',
        name: 'MailerLite',
        tagline: 'Simple, friendly email marketing that doesn’t need a manual.',
        bestFor: 'Beginners, bloggers and small businesses',
        whatItDoes:
          'MailerLite lets you design emails with a drag-and-drop editor, set up automations, build sign-up forms and landing pages, and even run a simple website, all from one clean dashboard.',
        strengths: [
          'Clean, beginner-friendly editor',
          'Automations, forms and landing pages included',
          'A free plan to get started',
          'Affordable paid plans for growing lists',
        ],
        goodToKnow:
          'The free plan has limits, and extras like more users and advanced tools need a paid plan. Prices rise as your list grows.',
        startingPrice: 'See website',
        officialUrl: 'https://www.mailerlite.com',
      },
      {
        slug: 'kit',
        name: 'Kit',
        tagline: 'Email built for creators who want to turn an audience into income.',
        bestFor: 'Bloggers, YouTubers, podcasters and course creators',
        whatItDoes:
          'Kit (formerly ConvertKit) helps creators grow an email list, send newsletters and automate follow-ups. You can also sell digital products and paid newsletters straight from your emails.',
        strengths: [
          'Made for creators, with simple automations',
          'Sell digital products and paid newsletters',
          'Landing pages and sign-up forms included',
          'A free plan to get started',
        ],
        goodToKnow:
          'Paid plans get pricey as your list grows, and prices have gone up recently, so compare before you commit.',
        startingPrice: 'See website',
        officialUrl: 'https://kit.com',
      },
      {
        slug: 'getresponse',
        name: 'GetResponse',
        tagline: 'A full marketing toolbox: email, landing pages and webinars under one roof.',
        bestFor: 'Small businesses and online sellers who want more than newsletters',
        whatItDoes:
          'GetResponse combines email marketing with landing pages, automation, webinar tools and a website builder, so you can run a whole campaign from a single account.',
        strengths: [
          'Email, landing pages and webinar tools in one place',
          'Automation workflows for follow-ups',
          'Templates and AI helpers to write faster',
          '14-day free trial',
        ],
        goodToKnow:
          'Some features, such as webinars, sit on higher plans, and costs climb as your list grows.',
        startingPrice: 'See website',
        officialUrl: 'https://www.getresponse.com',
      },
      {
        slug: 'beehiiv',
        name: 'beehiiv',
        tagline: 'A newsletter platform built to grow and monetize your audience.',
        bestFor: 'Writers and publishers building a newsletter business',
        whatItDoes:
          'beehiiv is made specifically for newsletters. You write and send your issues, grow your readership with built-in tools, and can earn money through ads and paid subscriptions.',
        strengths: [
          'Built just for newsletters',
          'Built-in tools to grow and monetize your audience',
          'Unlimited sends on every plan',
          'A free plan to get started',
        ],
        goodToKnow:
          'Check the current plan terms for monetization features and any additional charges before choosing.',
        startingPrice: 'See website',
        officialUrl: 'https://www.beehiiv.com',
      },
      {
        slug: 'systeme-io',
        name: 'Systeme.io',
        tagline: 'Email, sales funnels and online courses in one account, at a friendly price.',
        bestFor: 'Beginners who want to sell online without paying for five different tools',
        whatItDoes:
          'Systeme.io puts email marketing, sales funnels, a website builder and online courses into one account. It is popular with people launching their first digital product.',
        strengths: [
          'Email, funnels, courses and websites in one place',
          'A free plan to get started',
          'No transaction fees charged on your sales',
          'Simple, low-cost paid plans',
        ],
        goodToKnow:
          'Design options are more limited than dedicated website builders, and the interface can take a little getting used to.',
        startingPrice: 'See website',
        officialUrl: 'https://systeme.io',
      },
    ],
  },
  {
    slug: 'video-and-design-software',
    name: 'Video & Design Software',
    description:
      'The best video editing and creative software, from beginner-friendly editors to professional tools, plus the assets and recording tools that make creative work easier.',
    tools: [
      {
        slug: 'adobe-premiere-pro',
        name: 'Adobe Premiere Pro',
        tagline: 'The industry-standard video editor, for when you want pro-level control.',
        bestFor: 'Serious video editors, YouTubers and filmmakers',
        whatItDoes:
          'Premiere Pro is Adobe’s professional video editing software. It handles everything from quick social clips to long films, and works smoothly with other Adobe apps such as After Effects and Photoshop.',
        strengths: [
          'Used by professionals around the world',
          'Works smoothly with other Adobe apps',
          'Powerful tools for color, audio and effects',
          'Available on Windows and Mac',
        ],
        goodToKnow:
          'It is subscription-only with no one-time purchase, and it takes some time to learn.',
        startingPrice: 'See website',
        officialUrl: 'https://www.adobe.com/products/premiere.html',
      },
      {
        slug: 'filmora',
        name: 'Filmora',
        tagline: 'An easy, friendly video editor for beginners and busy creators.',
        bestFor: 'Beginners, YouTubers and small businesses',
        whatItDoes:
          'Filmora is a video editor with a clean drag-and-drop layout, plus effects, templates and AI helpers that save you time.',
        strengths: [
          'Easy to learn, even if you have never edited video before',
          'Lots of effects, titles and templates',
          'AI tools to speed up editing',
          'Annual plan or one-time purchase option',
        ],
        goodToKnow:
          'The free version adds a watermark to exports, and some AI features use credits.',
        startingPrice: 'See website',
        officialUrl: 'https://filmora.wondershare.com',
      },
      {
        slug: 'envato-elements',
        name: 'Envato Elements',
        tagline: 'Unlimited video templates, music, footage and graphics for one flat fee.',
        bestFor: 'Video editors and designers who need fresh assets all the time',
        whatItDoes:
          'Envato Elements is a subscription with unlimited downloads of video templates, stock footage, music, graphics, fonts and more, all with a commercial license.',
        strengths: [
          'Huge library: video, music, templates, fonts and graphics',
          'Unlimited downloads for a flat fee',
          'Commercial license included',
          'Saves time on every project',
        ],
        goodToKnow:
          'Plans changed in 2026 and AI generation allowances differ by plan, so check what is included. Annual billing is much cheaper than monthly.',
        startingPrice: 'See website',
        officialUrl: 'https://elements.envato.com',
      },
      {
        slug: 'riverside',
        name: 'Riverside',
        tagline: 'Studio-quality recording for podcasts and video interviews.',
        bestFor: 'Podcasters, interviewers and anyone recording remote guests',
        whatItDoes:
          'Riverside records each person locally on their own device, so audio and video stay crisp even if the internet connection is shaky. It also includes editing tools and AI features such as transcripts and short clips.',
        strengths: [
          'High-quality recording for every guest',
          'Up to 4K video on paid plans',
          'Built-in editing and transcription',
          'A free plan to try it out',
        ],
        goodToKnow:
          'The free plan adds a watermark and limits quality, and paid plans cap monthly recording hours.',
        startingPrice: 'See website',
        officialUrl: 'https://riverside.com',
      },
      {
        slug: 'camtasia',
        name: 'Camtasia',
        tagline: 'Screen recording and video editing made for tutorials and training.',
        bestFor: 'Teachers, trainers and anyone making how-to videos',
        whatItDoes:
          'Camtasia records your screen and webcam and lets you edit everything in one app, so you can create tutorials, training videos and presentations.',
        strengths: [
          'Screen recording and editing in one app',
          'Easy callouts, zooms and captions',
          'Works on Windows and Mac',
          'Free trial available',
        ],
        goodToKnow:
          'It costs more than most beginner editors, and exports from the free trial carry a watermark.',
        startingPrice: 'See website',
        officialUrl: 'https://www.techsmith.com/video-editor.html',
      },
    ],
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
        tools: [
          {
            slug: "craft",
            name: "Craft",
            tagline: "Beautiful notes and documents, designed with Apple devices in mind.",
            bestFor: "Apple users who care about design",
            whatItDoes: "Craft is a notes and documents app with a polished writing experience and simple sharing.",
            strengths: [
              "Polished, pleasant writing experience",
              "Notes, documents and easy sharing",
              "Works across your devices",
              "A free plan to start",
            ],
            goodToKnow: "It feels most at home on Apple devices.",
            startingPrice: 'See website',
            officialUrl: "https://www.craft.do",
          },
          {
            slug: "capacities",
            name: "Capacities",
            tagline: "Notes organized around people, ideas and things, not folders.",
            bestFor: "Researchers and knowledge workers",
            whatItDoes: "Capacities lets you link notes to people, projects and topics, so your notes grow into a connected knowledge base.",
            strengths: [
              "Link notes to people, projects and topics",
              "Clean, calm design",
              "Good for building a personal knowledge base",
              "A free plan to start",
            ],
            goodToKnow: "It works differently from folder-based apps, so expect a short learning curve.",
            startingPrice: 'See website',
            officialUrl: "https://capacities.io",
          },
          {
            slug: "evernote",
            name: "Evernote",
            tagline: "The classic note app, still going strong.",
            bestFor: "Everyday notes, web clipping and keeping things in one place",
            whatItDoes: "Evernote lets you capture notes, web clippings and scans in one place and search them later.",
            strengths: [
              "Familiar, easy-to-use notes",
              "Web clipping and document scanning",
              "Search across your notes",
              "A free plan available",
            ],
            goodToKnow: "The free plan has limits, and newer apps offer more modern features.",
            startingPrice: 'See website',
            officialUrl: "https://evernote.com",
          },
          {
            slug: "coda",
            name: "Coda",
            tagline: "Docs that act like apps, with tables and automations.",
            bestFor: "Teams and power users who want flexible docs",
            whatItDoes: "Coda combines documents, tables and simple automations, so one doc can be a note, a tracker or a team wiki.",
            strengths: [
              "Combines docs, tables and workflows",
              "Templates to get started quickly",
              "Good for team wikis and trackers",
              "A free plan available",
            ],
            goodToKnow: "It is more powerful than a simple notes app, so it takes more time to set up.",
            startingPrice: 'See website',
            officialUrl: "https://coda.io",
          },
          {
            slug: "mem",
            name: "Mem",
            tagline: "AI-powered notes that help organize themselves.",
            bestFor: "Busy professionals who want AI to help find and connect notes",
            whatItDoes: "Mem is a notes app that uses AI to help you capture quickly, find things and connect related notes.",
            strengths: [
              "AI helps organize and search your notes",
              "Quick capture",
              "Fast, minimal design",
              "A free plan to try it",
            ],
            goodToKnow: "AI features are best on paid plans, and it is a newer app.",
            startingPrice: 'See website',
            officialUrl: "https://mem.ai",
          },
        ],
      },
      {
        slug: 'project-management',
        name: 'Project Management',
        description:
          'Tools for planning projects, tracking tasks and keeping teams aligned on what matters.',
        tools: [
          {
            slug: "clickup",
            name: "ClickUp",
            tagline: "An all-in-one workspace for tasks, docs and goals.",
            bestFor: "Teams that want lots of features for the price",
            whatItDoes: "ClickUp brings tasks, docs, goals, whiteboards and many project views into one app, from simple to-do lists to Gantt charts.",
            strengths: [
              "Many views: list, board, Gantt and more",
              "Docs, goals and whiteboards included",
              "Low entry price per user",
              "A free plan available",
            ],
            goodToKnow: "It has a lot of options, so setup takes time, and very large workspaces can feel slow.",
            startingPrice: 'See website',
            officialUrl: "https://clickup.com",
          },
          {
            slug: "monday-com",
            name: "monday.com",
            tagline: "Colorful, flexible boards for teams of all sizes.",
            bestFor: "Teams that like visual boards and easy setup",
            whatItDoes: "monday.com lets teams plan and track work on visual boards, with templates, automations and integrations.",
            strengths: [
              "Easy, visual boards",
              "Lots of templates",
              "Automations and integrations",
              "A free plan for very small teams",
            ],
            goodToKnow: "Paid plans have a minimum number of seats, and costs rise on higher tiers.",
            startingPrice: 'See website',
            officialUrl: "https://monday.com",
          },
          {
            slug: "asana",
            name: "Asana",
            tagline: "Clear task management that keeps teams on the same page.",
            bestFor: "Teams that want a clean, easy-to-learn task tool",
            whatItDoes: "Asana helps teams organize tasks and projects in lists, boards, timelines and calendars, so everyone knows who is doing what and by when.",
            strengths: [
              "Clean, easy-to-learn interface",
              "Lists, boards, timelines and calendars",
              "Forms and dashboards on paid plans",
              "A free plan for small teams",
            ],
            goodToKnow: "Paid plans have a minimum number of seats, and advanced features sit on higher tiers.",
            startingPrice: 'See website',
            officialUrl: "https://asana.com",
          },
          {
            slug: "wrike",
            name: "Wrike",
            tagline: "Powerful project and work management for growing teams.",
            bestFor: "Teams that need structure, reporting and lots of integrations",
            whatItDoes: "Wrike helps teams plan projects, track work and report on progress, with many views and integrations.",
            strengths: [
              "Strong reporting and project views",
              "Lots of integrations",
              "Security-focused plans",
              "A free plan available",
            ],
            goodToKnow: "Mid-tier plans cost more than some rivals, and the free plan is basic.",
            startingPrice: 'See website',
            officialUrl: "https://www.wrike.com",
          },
          {
            slug: "teamwork",
            name: "Teamwork.com",
            tagline: "Project management built for client work and agencies.",
            bestFor: "Agencies and service businesses that track time and budgets",
            whatItDoes: "Teamwork combines task management with time tracking, budgets and client collaboration, so service teams can run billable projects in one place.",
            strengths: [
              "Time tracking and budgets built in",
              "Free client user seats",
              "Templates for client projects",
              "A free plan available",
            ],
            goodToKnow: "It is more specialized than general task tools, so it suits client-based teams best.",
            startingPrice: 'See website',
            officialUrl: "https://www.teamwork.com",
          },
        ],
      },
      {
        slug: 'cloud-storage',
        name: 'Cloud Storage',
        description:
          'Services for storing, syncing and sharing your files securely across all your devices.',
        tools: [
          {
            slug: "pcloud",
            name: "pCloud",
            tagline: "Cloud storage with a pay-once lifetime option.",
            bestFor: "People who want to avoid monthly subscriptions",
            whatItDoes: "pCloud stores and syncs your files across devices and lets you share links easily. It is one of the few services that offers lifetime plans.",
            strengths: [
              "Lifetime plans available",
              "10 GB free to start",
              "Easy file sync and sharing",
              "Optional encryption add-on",
            ],
            goodToKnow: "Encryption is a paid add-on, and lifetime plans cost more upfront.",
            startingPrice: 'See website',
            officialUrl: "https://www.pcloud.com",
          },
          {
            slug: "sync-com",
            name: "Sync.com",
            tagline: "Private cloud storage with zero-knowledge encryption.",
            bestFor: "Privacy-minded users and small businesses",
            whatItDoes: "Sync.com stores and shares your files with end-to-end encryption, so only you can read them.",
            strengths: [
              "Zero-knowledge encryption on every plan",
              "Good value for the storage",
              "5 GB free to start",
              "Easy file sharing",
            ],
            goodToKnow: "Plans limit how many devices you can connect, so check the details before you choose.",
            startingPrice: 'See website',
            officialUrl: "https://www.sync.com",
          },
          {
            slug: "proton-drive",
            name: "Proton Drive",
            tagline: "Encrypted storage from the makers of Proton Mail.",
            bestFor: "Privacy-first users already in the Proton ecosystem",
            whatItDoes: "Proton Drive stores your files with end-to-end encryption and works alongside Proton’s mail, VPN and password tools.",
            strengths: [
              "End-to-end encryption by default",
              "Swiss-based, with strong privacy laws",
              "A free plan to start",
              "Works with other Proton apps",
            ],
            goodToKnow: "It costs more per gigabyte than some rivals, and because files are encrypted, losing your password can make recovery difficult.",
            startingPrice: 'See website',
            officialUrl: "https://proton.me/drive",
          },
          {
            slug: "icedrive",
            name: "Icedrive",
            tagline: "A simple cloud drive that feels like a normal folder.",
            bestFor: "Users who want an easy cloud drive with plenty of free space",
            whatItDoes: "Icedrive gives you cloud storage that can appear as a drive on your computer, with sharing tools and optional encryption.",
            strengths: [
              "10 GB free storage",
              "Cloud drive that appears like a folder on your computer",
              "Optional zero-knowledge encryption on paid plans",
              "Affordable plans",
            ],
            goodToKnow: "Plans offer less storage than some rivals, and it is a newer service.",
            startingPrice: 'See website',
            officialUrl: "https://icedrive.net",
          },
          {
            slug: "dropbox",
            name: "Dropbox",
            tagline: "The classic file sync service, with great apps and sharing.",
            bestFor: "Collaboration and sharing across many apps",
            whatItDoes: "Dropbox keeps your files in sync across devices and makes it easy to share and work on them with others.",
            strengths: [
              "Reliable file sync",
              "Easy sharing and collaboration",
              "Works with lots of other apps",
              "A free plan with 2 GB",
            ],
            goodToKnow: "Free storage is small, and Dropbox does not use zero-knowledge encryption.",
            startingPrice: 'See website',
            officialUrl: "https://www.dropbox.com",
          },
        ],
      },
      {
        slug: 'presentations',
        name: 'Presentations',
        description:
          'Apps for building clear, good-looking slide decks and presenting with confidence.',
        tools: [
          {
            slug: "gamma",
            name: "Gamma",
            tagline: "Make a full presentation from a prompt.",
            bestFor: "Quickly drafting decks, documents and simple web pages",
            whatItDoes: "Gamma turns a prompt or outline into a finished-looking presentation that you can edit, present or share as a web page.",
            strengths: [
              "Generates a draft deck from a prompt",
              "Easy editing and clean designs",
              "Present as slides, documents or web pages",
              "Free plan with AI credits",
            ],
            goodToKnow: "Free decks carry Gamma branding, and AI credits are limited by plan.",
            startingPrice: 'See website',
            officialUrl: "https://gamma.app",
          },
          {
            slug: "beautiful-ai",
            name: "Beautiful.ai",
            tagline: "Slides that design themselves as you add content.",
            bestFor: "Teams that want consistent, polished decks",
            whatItDoes: "Beautiful.ai uses smart slide templates that rearrange automatically as you add content, so your deck always looks tidy.",
            strengths: [
              "Smart slides that adjust automatically",
              "Consistent, on-brand layouts",
              "AI help to build decks",
              "Team features on higher plans",
            ],
            goodToKnow: "There is no free plan, only a free trial.",
            startingPrice: 'See website',
            officialUrl: "https://www.beautiful.ai",
          },
          {
            slug: "pitch",
            name: "Pitch",
            tagline: "Collaborative presentations for modern teams.",
            bestFor: "Startups and marketing teams working together",
            whatItDoes: "Pitch is a presentation tool built for teamwork, with templates, brand controls and analytics on how your deck is viewed.",
            strengths: [
              "Real-time team collaboration",
              "Clean templates and brand controls",
              "Engagement analytics",
              "A free plan for small teams",
            ],
            goodToKnow: "Some team features need paid plans.",
            startingPrice: 'See website',
            officialUrl: "https://pitch.com",
          },
          {
            slug: "prezi",
            name: "Prezi",
            tagline: "Zoom-style, non-linear presentations.",
            bestFor: "Speakers who want a more dynamic, story-style presentation",
            whatItDoes: "Prezi presents ideas on one large canvas that zooms between topics, instead of moving slide by slide.",
            strengths: [
              "Distinctive zooming format",
              "AI help to build presentations",
              "Low entry price",
              "A free plan available",
            ],
            goodToKnow: "The free plan keeps presentations public, and the format feels different from classic slides.",
            startingPrice: 'See website',
            officialUrl: "https://prezi.com",
          },
          {
            slug: "visme",
            name: "Visme",
            tagline: "Presentations plus infographics and data visuals.",
            bestFor: "Data-heavy presentations and visual content",
            whatItDoes: "Visme lets you create presentations, infographics and reports with charts and templates in one design tool.",
            strengths: [
              "Strong charts and data visualization",
              "Templates for presentations, infographics and more",
              "Brand tools on paid plans",
              "A free plan available",
            ],
            goodToKnow: "Many premium features need a paid plan.",
            startingPrice: 'See website',
            officialUrl: "https://www.visme.co",
          },
        ],
      },
      {
        slug: 'automation',
        name: 'Automation',
        description:
          'Tools that connect your apps and automate repetitive tasks so they run without you.',
        tools: [
          {
            slug: "make",
            name: "Make",
            tagline: "Visual automation for connecting your apps.",
            bestFor: "People who want powerful workflows without code",
            whatItDoes: "Make lets you connect apps and build automated workflows on a visual canvas, so you can see how your data moves.",
            strengths: [
              "Visual canvas shows how data flows",
              "Large number of app integrations",
              "Low entry price for the volume",
              "A free plan available",
            ],
            goodToKnow: "Complex scenarios take practice, and usage is measured in credits.",
            startingPrice: 'See website',
            officialUrl: "https://www.make.com",
          },
          {
            slug: "n8n",
            name: "n8n",
            tagline: "Open-source automation with a self-hosting option.",
            bestFor: "Tech-savvy users and teams that want control",
            whatItDoes: "n8n is a flexible automation tool you can run on your own server for free, or use in the cloud.",
            strengths: [
              "Free to self-host with no execution limits",
              "Flexible, code-friendly workflows",
              "AI workflow tools",
              "Cloud option if you don’t want a server",
            ],
            goodToKnow: "It is more technical than other tools, and self-hosting means you manage the server.",
            startingPrice: 'See website',
            officialUrl: "https://n8n.io",
          },
          {
            slug: "pabbly-connect",
            name: "Pabbly Connect",
            tagline: "Flat-rate automation with no per-step surprises.",
            bestFor: "High-volume automations on a fixed budget",
            whatItDoes: "Pabbly Connect links your apps and automates tasks, with plans built around generous task volumes and, at times, lifetime deals.",
            strengths: [
              "Plans with generous task volumes",
              "Lifetime deals sometimes available",
              "Many app integrations",
              "A free plan to try it",
            ],
            goodToKnow: "Its app library is smaller than the biggest tools’, and the interface is simpler.",
            startingPrice: 'See website',
            officialUrl: "https://www.pabbly.com/connect/",
          },
          {
            slug: "activepieces",
            name: "Activepieces",
            tagline: "Open-source automation with a free cloud allowance.",
            bestFor: "Beginners and small teams who want to start free",
            whatItDoes: "Activepieces is an open-source automation platform that lets you build workflows with AI steps and run them in the cloud or on your own server.",
            strengths: [
              "A free plan with active flows included",
              "Open source, with self-hosting",
              "AI agents and AI steps",
              "Simple per-flow pricing",
            ],
            goodToKnow: "It has fewer integrations than the biggest tools, and it is a newer platform.",
            startingPrice: 'See website',
            officialUrl: "https://www.activepieces.com",
          },
          {
            slug: "latenode",
            name: "Latenode",
            tagline: "Automation with built-in AI and code when you need it.",
            bestFor: "Builders who want AI agents and automation in one place",
            whatItDoes: "Latenode combines a visual workflow builder with AI agents and code steps, so you can start simple and go deeper later.",
            strengths: [
              "Visual builder with AI agents",
              "Code steps for custom logic",
              "Headless browser automation",
              "A free plan available",
            ],
            goodToKnow: "It is a newer platform with a smaller community than the leaders.",
            startingPrice: 'See website',
            officialUrl: "https://latenode.com",
          },
        ],
      },
    ],
  },
  {
    slug: 'freelance-platforms',
    name: 'Freelance Platforms',
    description:
      'The best freelance platforms for finding work or hiring skilled freelancers, from quick one-off jobs to long-term projects.',
    tools: [
      {
        slug: 'fiverr',
        name: 'Fiverr',
        tagline: 'Hire a freelancer for almost anything, with clear prices upfront.',
        bestFor: 'Quick, fixed-price jobs, and freelancers who want to sell their services',
        whatItDoes:
          'Fiverr is a marketplace where freelancers sell their work as ready-made packages, such as logos, videos, writing and programming. You browse offers, compare prices and order.',
        strengths: [
          'Huge range of services in one place',
          'Fixed-price packages make costs clear',
          'Reviews and ratings help you choose',
          'Easy for freelancers to set up a profile',
        ],
        goodToKnow:
          'Service fees apply to both buyers and sellers, and quality varies, so check reviews and portfolios before you order.',
        startingPrice: 'See website',
        officialUrl: 'https://www.fiverr.com',
      },
      {
        slug: 'upwork',
        name: 'Upwork',
        tagline: 'A big marketplace for long-term freelance work and hiring.',
        bestFor: 'Ongoing projects and businesses hiring skilled remote talent',
        whatItDoes:
          'Upwork connects clients and freelancers for projects of any size. You can post a job and receive proposals, or search profiles and invite people directly.',
        strengths: [
          'Large pool of freelancers in many fields',
          'Hourly and fixed-price contracts',
          'Payment protection tools for both sides',
          'Good for ongoing, long-term work',
        ],
        goodToKnow:
          'Freelancers pay service fees and clients may pay a marketplace fee, so check the current fee rules before you start.',
        startingPrice: 'See website',
        officialUrl: 'https://www.upwork.com',
      },
      {
        slug: '99designs',
        name: '99designs',
        tagline: 'Design contests where many designers compete for your project.',
        bestFor: 'Logos, branding and packaging when you want lots of ideas to choose from',
        whatItDoes:
          'With 99designs you describe the design you need and receive concepts from many designers. You pick a favorite and work with that designer to finish it. You can also hire one designer directly.',
        strengths: [
          'See many ideas from different designers',
          'Fixed-price contest packages',
          'Full ownership of the final design',
          'A satisfaction guarantee on contests',
        ],
        goodToKnow:
          'It costs more than casual marketplaces, and refund options narrow as a contest moves forward.',
        startingPrice: 'See website',
        officialUrl: 'https://99designs.com',
      },
      {
        slug: 'freelancer-com',
        name: 'Freelancer.com',
        tagline: 'A global marketplace where freelancers bid on your project.',
        bestFor: 'Clients who like comparing bids, and freelancers looking for projects',
        whatItDoes:
          'Freelancer.com lets you post a project and receive bids from freelancers around the world. It also offers contests, so you can collect ideas for logos and other creative work.',
        strengths: [
          'Global talent pool across many skills',
          'Compare bids to find the right price',
          'Contests for creative work',
          'Milestone payments help protect your budget',
        ],
        goodToKnow:
          'With so many bidders, take time to review profiles and past work before you choose.',
        startingPrice: 'See website',
        officialUrl: 'https://www.freelancer.com',
      },
      {
        slug: 'toptal',
        name: 'Toptal',
        tagline: 'Hand-vetted freelancers for projects that really matter.',
        bestFor: 'Businesses that need experienced developers, designers or finance experts',
        whatItDoes:
          'Toptal screens freelancers before they join and matches you with talent for your project, so you spend less time sorting through applications.',
        strengths: [
          'Talent is screened before joining',
          'Matching service saves hiring time',
          'Strong for developers, designers and finance experts',
          'A trial period lets you test a match first',
        ],
        goodToKnow:
          'It is aimed at businesses, and rates are higher than on open marketplaces, so it is not for tiny budgets.',
        startingPrice: 'See website',
        officialUrl: 'https://www.toptal.com',
      },
    ],
  },
  {
    slug: 'language-learning',
    name: 'Language Learning',
    description:
      'The best ways to learn a new language online, from quick daily apps to live classes and one-to-one tutors.',
    tools: [
      {
        slug: 'babbel',
        name: 'Babbel',
        tagline: 'Practical, conversation-first lessons you can finish in minutes.',
        bestFor: 'Beginners who want to start speaking quickly',
        whatItDoes:
          'Babbel is a language app with short lessons built around real-life conversations, grammar tips and speech practice, in more than a dozen languages.',
        strengths: [
          'Short lessons that fit a busy day',
          'Conversation-first approach',
          'Covers many popular languages',
          'First lesson is free to try',
        ],
        goodToKnow:
          'It is a paid subscription after the first lesson, and longer plans cost far less per month than short ones.',
        startingPrice: 'See website',
        officialUrl: 'https://www.awin1.com/cread.php?awinmid=9659&awinaffid=3134673&campaign=fivepicked&platform=pl',
      },
      {
        slug: 'lingoda',
        name: 'Lingoda',
        tagline: 'Live small-group classes with certified teachers, on your schedule.',
        bestFor: 'Learners who want structure and live speaking practice',
        whatItDoes:
          'Lingoda runs live online classes in small groups, or one-to-one, that follow a clear level system from beginner to advanced.',
        strengths: [
          'Live classes with certified teachers',
          'Small groups for real speaking practice',
          'Clear levels from beginner to advanced',
          'Many class times to choose from',
        ],
        goodToKnow:
          'It costs more than apps because you are paying for live teaching, and prices vary by language and number of classes.',
        startingPrice: 'See website',
        officialUrl: 'https://www.lingoda.com',
      },
      {
        slug: 'italki',
        name: 'italki',
        tagline: 'Find a private tutor to fit almost any budget.',
        bestFor: 'Learners who want one-to-one speaking practice',
        whatItDoes:
          'italki is a marketplace of language tutors and teachers. You choose a person you like, book a time and pay per lesson, with no subscription.',
        strengths: [
          'Tutors for a very wide range of languages',
          'No subscription; pay only for lessons you book',
          'Casual conversation partners and professional teachers',
          'Low-cost trial lessons',
        ],
        goodToKnow:
          'Quality depends on the tutor you pick, so read reviews and try a trial lesson first.',
        startingPrice: 'See website',
        officialUrl: 'https://www.italki.com',
      },
      {
        slug: 'preply',
        name: 'Preply',
        tagline: 'One-to-one online tutoring with tutors you can compare and choose.',
        bestFor: 'Learners who want a personal tutor and flexible scheduling',
        whatItDoes:
          'Preply matches you with online tutors for private lessons. You filter by language, price and availability, try a trial lesson, then book regular sessions.',
        strengths: [
          'Large choice of tutors in many languages',
          'Filter by price, schedule and reviews',
          'Trial lessons to test a tutor',
          'No long contract required',
        ],
        goodToKnow:
          'Lesson prices vary a lot between tutors, so compare a few before settling on one.',
        startingPrice: 'See website',
        officialUrl: 'https://preply.com',
      },
      {
        slug: 'rocket-languages',
        name: 'Rocket Languages',
        tagline: 'Audio-first courses that train you to actually speak.',
        bestFor: 'Self-study learners who like listening and speaking practice',
        whatItDoes:
          'Rocket Languages offers structured courses built around audio lessons, with voice recognition so you can practice pronunciation, plus reading and writing exercises.',
        strengths: [
          'Audio-first lessons that build listening and speaking skills',
          'Voice recognition to practice pronunciation',
          'A one-time payment option for lifetime access',
          'Lessons can be used offline',
        ],
        goodToKnow:
          'It covers fewer languages than Babbel, and the one-time price is higher upfront than a monthly app.',
        startingPrice: 'See website',
        officialUrl: 'https://www.rocketlanguages.com',
      },
    ],
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
