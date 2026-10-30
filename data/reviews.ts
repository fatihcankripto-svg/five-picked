import { editorialDates } from '@/lib/editorial-dates'
export type ReviewSection = { heading: string; paragraphs: string[] }
export type ReviewLink = { label: string; href: string; note: string }
export type ReviewFaq = { question: string; answer: string }

export type Review = {
  toolSlug: string
  name: string
  officialUrl: string
  title: string
  description: string
  headline: string
  intro: string
  verdict: string
  bestFor: string[]
  lessIdealFor: string[]
  sections: ReviewSection[]
  alternatives: ReviewLink[]
  related: ReviewLink[]
  faqs: ReviewFaq[]
  published: string
  updated: string
}

export const reviews: Review[] = [
  {
    toolSlug: 'cloudways',
    name: 'Cloudways',
    officialUrl: 'https://www.cloudways.com/',
    title: 'Cloudways Review (2026): Pricing and Who It’s For',
    description:
      'An honest look at Cloudways managed cloud hosting: how it works, what it costs, what is included and who should choose it.',
    headline: 'Cloudways review: managed cloud hosting, explained',
    intro:
      'Cloudways sits between cheap shared hosting and do-it-yourself servers. You pick a cloud provider and a server size, and Cloudways handles the setup and day-to-day management. This review explains how it works, what it costs and who it suits.',
    verdict:
      'Cloudways is a strong choice for growing WordPress and PHP sites that have outgrown shared hosting, and for people who want cloud performance without managing a server themselves. If you only need the cheapest way to launch a first site, a simpler shared host is easier to start with.',
    bestFor: [
      'Growing websites that have outgrown shared hosting',
      'Agencies and freelancers who manage several client sites',
      'Store owners who want room to scale',
      'People who want cloud servers without server administration',
    ],
    lessIdealFor: [
      'First-time site owners who want the simplest, cheapest start',
      'People who want a free domain or email bundled in',
      'Anyone who prefers a flat, fixed price with no usage-based billing',
    ],
    sections: [
      {
        heading: 'What Cloudways is',
        paragraphs: [
          'Cloudways is a managed cloud hosting platform. Instead of running its own data centers, it sets up servers on cloud providers such as DigitalOcean, Vultr, Linode, AWS and Google Cloud. You choose the provider and the server size, and Cloudways adds a control panel, security tools and server management on top.',
          'It supports WordPress, WooCommerce and other PHP-based applications, so it is not limited to one type of site.',
        ],
      },
      {
        heading: 'What is included',
        paragraphs: [
          'Plans are mainly priced by server size, and the core tools come with every plan. These include free SSL certificates, automated backups, staging environments for testing changes, server cloning and team access. A caching plugin for WordPress is also provided.',
          'Cloudways offers migration help for WordPress sites. Check the current migration terms on the official website before you start.',
        ],
      },
      {
        heading: 'Cloudways pricing',
        paragraphs: [
          'Cloudways uses pay-as-you-go pricing. See the official website for current server prices and any introductory terms. Larger servers and other cloud providers cost more, so the final price depends on the provider and size you choose.',
          'A short free trial is available for new users, currently listed as three days. Cloudways does not include a free domain, and email is a paid add-on, so budget for those separately. Check the refund and cancellation terms before you commit.',
        ],
      },
      {
        heading: 'Ease of use',
        paragraphs: [
          'Reviewers generally describe the dashboard as clean and the setup as straightforward: launching a server with an app takes a few clicks. It is still more technical than shared hosting, and some users mention a little trial and error with server settings at the start.',
        ],
      },
      {
        heading: 'Cloudways vs shared hosting',
        paragraphs: [
          'Shared hosting puts many sites on one server and often bundles a domain and email at a low intro price. Cloudways gives you your own cloud server at a higher starting price. If your site is small and new, shared hosting is usually enough. If traffic is growing or you want more control, Cloudways is worth comparing.',
        ],
      },
    ],
    alternatives: [
      {
        label: 'Kinsta',
        href: '/web-hosting-and-domains#kinsta',
        note: 'Premium managed hosting built only for WordPress.',
      },
      {
        label: 'Hostinger',
        href: '/web-hosting-and-domains#hostinger',
        note: 'Lower-cost shared hosting for a first site.',
      },
      {
        label: 'Bluehost',
        href: '/web-hosting-and-domains#bluehost',
        note: 'Guided WordPress setup for beginners.',
      },
    ],
    related: [
      {
        label: 'Shared vs cloud vs managed WordPress hosting',
        href: '/guides/shared-vs-cloud-vs-managed-wordpress-hosting',
        note: 'The main hosting types explained.',
      },
      {
        label: 'Hostinger vs Bluehost',
        href: '/guides/hostinger-vs-bluehost',
        note: 'Two beginner-friendly hosts compared.',
      },
    ],
    faqs: [
      {
        question: 'Is Cloudways good for beginners?',
        answer:
          'It can be, but it is not the simplest option. The dashboard is friendly, yet you still choose a cloud provider and server size. Beginners who want the lowest price and the least setup may prefer shared hosting first.',
      },
      {
        question: 'Does Cloudways include a free domain or email?',
        answer:
          'No. Domain registration and email are separate costs. Check the current plan details on the official website.',
      },
      {
        question: 'Does Cloudways have a free trial?',
        answer:
          'Yes. New users can try the platform for a short free trial, currently listed as three days. Confirm the current terms on the official website.',
      },
      {
        question: 'Which cloud provider should I choose on Cloudways?',
        answer:
          'Smaller DigitalOcean servers are the usual starting point for new sites because they are the least expensive. Move to a larger server or another provider if your traffic or needs grow.',
      },
      {
        question: 'Can I move my existing site to Cloudways?',
        answer:
          'Yes. Cloudways offers migration help for WordPress sites, and other sites can be moved manually. Check the current migration terms before you start.',
      },
    ],
    published: '2026-10-27',
    updated: editorialDates.reviews,
  },
  {
    toolSlug: 'babbel',
    name: 'Babbel',
    officialUrl: 'https://www.babbel.com/',
    title: 'Babbel Review (2026): Pricing and Who It’s For',
    description:
      'An honest look at Babbel: how its short lessons work, which languages it teaches, what it costs and who it suits.',
    headline: 'Babbel review: short, conversation-focused language lessons',
    intro:
      'Babbel is a subscription language app built around short lessons that focus on practical conversation. This review covers how it works, what it costs and who is likely to get the most from it.',
    verdict:
      'Babbel is a solid pick for beginners and early intermediate learners who want a structured, step-by-step course they can fit into a busy day. If you mainly want live conversation practice or advanced grammar depth, you may want to pair it with a tutoring platform.',
    bestFor: [
      'Beginners who want a clear, guided path',
      'Busy people who can study in short sessions',
      'Learners who want everyday conversation first',
      'Travelers preparing for a trip',
    ],
    lessIdealFor: [
      'Advanced learners who need deep grammar and reading practice',
      'People who want a free app',
      'Learners who want a lot of live speaking practice',
    ],
    sections: [
      {
        heading: 'How Babbel works',
        paragraphs: [
          'Babbel teaches through short lessons, usually around 10 to 20 minutes, built around realistic conversations. Lessons mix vocabulary, listening, speaking and quick quizzes, and speech recognition checks your pronunciation. A placement test helps returning learners find the right level.',
        ],
      },
      {
        heading: 'Learning tools',
        paragraphs: [
          'A review feature brings back words and phrases you have already learned so they stick, and a progress view shows your study days. Babbel also offers extra content such as podcasts and games, depending on the language.',
        ],
      },
      {
        heading: 'Languages',
        paragraphs: [
          'Babbel offers courses in around 14 languages at the time of writing, including popular choices such as Spanish, French and German. Course depth varies by language, so check the official website for the language you want.',
        ],
      },
      {
        heading: 'Pricing and refunds',
        paragraphs: [
          'Babbel is a subscription, and the monthly price drops the longer the plan you choose. Plan options have included single-language and multi-language subscriptions, and lifetime access has also been offered.',
          'Free access has varied over time. Babbel has advertised a 20-day money-back guarantee, so check the current terms on the official website before you pay.',
        ],
      },
      {
        heading: 'Live classes',
        paragraphs: [
          'Babbel has offered live online classes with teachers in the past. Availability for individual subscribers has changed over time, so check what your plan includes before you count on it.',
        ],
      },
      {
        heading: 'Babbel and tutoring platforms',
        paragraphs: [
          'Babbel is self-paced, which is convenient but means less real conversation. If you want to speak with a person, a tutoring platform can complement it. See our language learning top 5 for options.',
        ],
      },
    ],
    alternatives: [
      {
        label: 'Lingoda',
        href: '/language-learning',
        note: 'Live online classes with teachers.',
      },
      {
        label: 'italki',
        href: '/language-learning',
        note: 'One-to-one lessons with tutors.',
      },
      {
        label: 'Preply',
        href: '/language-learning',
        note: 'A marketplace of online tutors.',
      },
      {
        label: 'Rocket Languages',
        href: '/language-learning',
        note: 'Self-paced language courses.',
      },
    ],
    related: [
      {
        label: 'Language Learning top 5',
        href: '/language-learning',
        note: 'All five of our picks, ranked.',
      },
    ],
    faqs: [
      {
        question: 'Is Babbel good for beginners?',
        answer:
          'Yes. Its lessons follow a clear structure that starts with the basics and builds toward everyday conversation, which suits beginners well.',
      },
      {
        question: 'How many languages does Babbel teach?',
        answer:
          'Around 14 at the time of writing. The list can change, so check the official website for the language you want.',
      },
      {
        question: 'Does Babbel have a free trial?',
        answer:
          'Free access has varied over time. Babbel has advertised a 20-day money-back guarantee, so check the current terms on the official website before you subscribe.',
      },
      {
        question: 'Can Babbel make me fluent?',
        answer:
          'On its own, Babbel is best for building a solid beginner to intermediate foundation. Fluency usually also needs plenty of speaking, listening and reading outside the app.',
      },
      {
        question: 'Is Babbel worth it?',
        answer:
          'It is worth considering if you will study consistently and want a structured course. Compare plan lengths and prices carefully, since longer plans lower the monthly cost.',
      },
    ],
    published: '2026-10-27',
    updated: editorialDates.reviews,
  },
]

export function getReview(slug: string): Review | undefined {
  return reviews.find((review) => review.toolSlug === slug)
}
