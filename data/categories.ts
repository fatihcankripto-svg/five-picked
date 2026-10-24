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
          'Tools that let you build your own AI chatbot for your website or business, trained on your content to answer visitors’ questions around the clock.',
        tools: placeholderTools('AI chatbot'),
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
        startingPrice: 'From about $3/month (long-term intro price)',
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
          'Intro prices apply to the first term only. At the time of writing, the Starter plan renews at around $10/month on a 36-month term.',
        startingPrice: 'From about $4/month (36-month intro price)',
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
        startingPrice: 'From about $11–14/month, pay as you go',
        officialUrl: 'https://www.cloudways.com/',
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
        startingPrice: 'From about $35/month',
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
        startingPrice: 'Domains from a few dollars in year one; hosting from about $2–3/month',
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
        startingPrice: 'From about $3.50/month (2-year plan)',
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
        startingPrice: 'From about $2.50/month (2-year plan)',
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
        startingPrice: 'From about $2.50/month (2-year plan)',
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
        startingPrice: 'Free plan available; paid from about $3/month (2-year plan)',
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
        startingPrice: 'From about $2/month (3-year plan)',
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
        startingPrice: 'Free to start; Coursera Plus from about $59/month',
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
        startingPrice: 'Free plan available; Premium from about $28/month (billed yearly)',
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
        startingPrice: 'From about $14/month (billed yearly)',
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
        startingPrice: 'Free tier available; Pro from about $24.50/month (billed yearly)',
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
        startingPrice: 'From about $10/month (billed yearly)',
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
        startingPrice: 'Free plan available; paid from about $10/month',
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
        startingPrice: 'Free plan available; paid from about $33/month (billed yearly)',
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
        startingPrice: '14-day free trial; paid from about $19/month',
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
          'beehiiv changed its plans and prices in October 2026, and most monetization tools need a paid plan, so check the latest details.',
        startingPrice: 'Free plan for up to 2,500 subscribers; paid from about $45/month',
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
        startingPrice: 'Free plan available; paid from about $17/month',
        officialUrl: 'https://systeme.io',
      },
    ],
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
        startingPrice: 'Free to join; you pay per service (sellers set their own prices)',
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
        startingPrice: 'Free to join; fees apply on contracts',
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
        startingPrice: 'Logo contests from about $250',
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
        startingPrice: 'Free to join; fees apply on projects',
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
        startingPrice: 'No fixed price; you pay your matched freelancer’s rate',
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
        startingPrice: 'From about $9/month (12-month plan)',
        officialUrl: 'https://www.babbel.com',
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
        startingPrice: 'Group classes from about $40 per 4 weeks',
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
        startingPrice: 'Free to join; lessons from about $5/hour (tutors set their own prices)',
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
        startingPrice: 'Free to join; lessons from about $5/hour (tutors set their own prices)',
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
        startingPrice: 'From about $150 one-time (lifetime access)',
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
