import type { Tool } from '@/data/categories'
import type { Review } from '@/data/reviews'

/** Display-only copy for the six requested routes. Editorial records and schema stay unchanged. */
const categoryCopy: Record<string, { intro: string; cards?: Record<string, string> }> = {
  '/web-hosting-and-domains': {
    intro: 'Find a home for your website, whether you are starting a personal project or running a growing business. Compare five hosting providers and see who each one suits.',
  },
  '/vpn-and-security': {
    intro: 'Find a VPN that suits the way you use the internet. Compare five options for everyday privacy, public Wi-Fi and your devices, then check the plans before choosing.',
  },
  '/video-and-design-software': {
    intro: 'Start with what you want to create: an edited video, a recording or a project using ready-made assets. Compare five tools and see which one fits your work.',
  },
  '/ai-tools': {
    intro: 'Start with the job you want AI to help with, from creating a video to taking meeting notes. Choose an area below to compare five tools for that task.',
    cards: {
      'video-and-voice': 'Create and edit videos, add narration or make a voiceover with AI tools.',
      'image-and-design': 'Generate images, edit photos and get help with everyday design work.',
      'meeting-notes': 'Let an AI assistant record, transcribe and summarize your meetings while you focus on the conversation.',
      'marketing-and-seo': 'Get help with writing, planning content, improving search visibility and running campaigns.',
      'chatbots': 'Build a chatbot that uses your content to answer questions on your website or for your business, around the clock.',
    },
  },
  '/software-and-productivity': {
    intro: 'Choose the part of your work you want to make easier, from keeping notes to organizing a team. Each area below has five tools to compare.',
    cards: {
      'note-taking': 'Keep your ideas and notes organized so you can find and build on them later.',
      'project-management': 'Plan projects, track tasks and help your team stay focused on what matters.',
      'cloud-storage': 'Store, sync and share files securely across your devices.',
      'presentations': 'Build clear slides that look good and help you present with confidence.',
      'automation': 'Connect your apps and let repetitive tasks run automatically.',
    },
  },
}

export function categoryBodyCopy(path: string) {
  return categoryCopy[path]
}

const toolDescriptions: Record<string, Record<string, string>> = {
  '/web-hosting-and-domains': {
    hostinger: 'Hostinger offers shared, WordPress, cloud and VPS hosting through its own control panel. You can get a site online in a few clicks, and longer plans include a free domain for the first year.',
    bluehost: 'Bluehost offers shared, WordPress, WooCommerce and VPS hosting. It installs WordPress for you, includes a free domain for the first year on most plans and provides support around the clock.',
    cloudways: 'Choose a server size on a provider such as DigitalOcean, Vultr or Google Cloud, and Cloudways sets it up and manages it. You pay for what you use, while Cloudways handles updates, backups and security tools.',
    kinsta: 'Kinsta hosts WordPress sites on Google Cloud and takes care of server setup, daily backups and security. Staging tools let you try changes before putting them on your live site.',
    namecheap: 'Namecheap lets you buy a domain and manage it in one dashboard. It also sells shared hosting, VPS hosting and email services.',
  },
  '/vpn-and-security': {
    nordvpn: 'NordVPN encrypts your internet connection and hides your real location. You can use it on phones, computers and many other devices, with servers around the world.',
    surfshark: 'Surfshark protects your connection and hides your location. One subscription lets you use it on as many devices as you like.',
    expressvpn: 'ExpressVPN encrypts your traffic and connects you to servers in many countries. Its apps are designed to keep setup and everyday use simple.',
    'proton-vpn': 'Proton VPN encrypts your connection and hides your location. Its free plan has no data limit; paid plans give you more servers and features.',
    'private-internet-access': 'Private Internet Access (PIA) encrypts your connection and works on unlimited devices. Its extra settings give you more ways to adjust the VPN to your needs.',
  },
  '/video-and-design-software': {
    'adobe-premiere-pro': 'Use Premiere Pro to edit anything from a quick social clip to a long film. It is Adobe’s professional video editor and works with apps such as After Effects and Photoshop.',
    filmora: 'Filmora uses a drag-and-drop editor to help you put a video together. Effects, templates and AI helpers make everyday editing quicker.',
    'envato-elements': 'An Envato Elements subscription gives you unlimited downloads of video templates, stock footage, music, graphics, fonts and more, with a commercial license.',
    riverside: 'Riverside records each guest on their own device to keep audio and video clear when the connection is shaky. You also get editing tools and AI features for transcripts and short clips.',
    camtasia: 'Record your screen and webcam, then edit the footage in the same app. Camtasia is built for tutorials, training videos and presentations.',
  },
}

export function toolBodyCopy(path: string, tool: Tool): Tool {
  const description = toolDescriptions[path]?.[tool.slug]
  return description ? { ...tool, whatItDoes: description } : tool
}

export const categoryClosingCopy = 'We rank these tools by fit, quality and value for most people. Commissions never decide the order. Prices and features can change, so check the current offer, currency, eligibility and billing terms on the official website before you buy.'

export function reviewBodyCopy(review: Review): Review {
  if (review.toolSlug !== 'hostinger') return review
  const repeatedAccessCopy = new Set(review.faqs.map((faq) => faq.answer))
  const paragraphs: Record<string, string> = {
    'The reviewed Premium offer lists WordPress, weekly backups and SSD storage. Editorial fit: a site owner evaluating these included functions together instead of assembling a hosting plan solely from a headline price. Check the selected plan rather than assuming every Hostinger product has the same inclusions.': 'The Premium offer brings WordPress, weekly backups and SSD storage together in one plan. This can suit a small-site owner who wants those features in one place. Check the plan you select, because Hostinger’s other products include different features.',
    'The site separates web hosting from other products. That distinction is useful when comparing a website launch with a requirement for server-level configuration: they should be evaluated as different purchases.': 'Web hosting and server products are separate purchases. If you need to configure the server yourself, check the server options rather than assuming a website-hosting plan includes that control.',
    'The introductory monthly equivalent is attached to a long upfront term. Renewal is a separate rate. A temporary preview address or another product’s trial does not create a permanent free web-hosting account.': 'The advertised monthly equivalent comes with a long term paid upfront, and renewal has a separate rate. A preview address or a trial for another product does not give you permanent free web hosting.',
    'No uptime, page-speed or support-response result is claimed here. The advertised feature list cannot establish whether a particular store, traffic pattern or application will fit. Confirm the exact workload and plan conditions before migrating a live site.': 'Before moving a live site, check that the plan supports your store, traffic and applications. A feature list alone cannot tell you how your own site will perform.',
    'Before purchasing, inspect the payable total, included period, renewal, optional products and refund exclusions. Confirm the final checkout for your location rather than treating the displayed offer as a permanent price guarantee.': 'Before paying, check the total due, the period it covers, renewal costs, optional extras and refund exclusions. The final checkout for your location matters; the displayed offer is not a permanent price guarantee.',
    'These conditions reuse the existing hosting free guide. A qualifying refund window starts from a purchase; it is not a no-payment evaluation. Keep domain and payment-method exclusions separate from the hosting decision.': 'The free-access and refund details appear in the questions below and in the linked hosting free guide. A refund window starts after a qualifying purchase, so you still pay first. Check the separate rules for domains and payment methods.',
    'If the main requirement is a different cloud configuration or a WordPress-specific managed service, inspect the alternatives and the Hostinger–Cloudways comparison before deciding. This is a workflow recommendation, not evidence that another host is universally faster or cheaper.': 'If you need a different cloud setup or a service focused on managed WordPress, explore the alternatives and the Hostinger–Cloudways comparison. Choose by what you need the host to handle; this comparison does not show that another host is always faster or cheaper.',
    'Write down the software, data, backups, domain and management responsibilities of the site. Verify them against the selected offer, and plan a migration only after checking the destination. No automatic transfer of every setting, email account or application is promised.': 'List the software, data, backups, domain and maintenance tasks your site needs. Check that the new plan supports them before planning a move. Do not assume every setting, email account or application will transfer automatically.',
  }
  const headings: Record<string, string> = {
    'Advantages: an integrated starting offer': 'What the plan brings together',
    'Limitations: commitment, renewal and product scope': 'What to check before you commit',
    'Who should compare another hosting model?': 'When to look at another type of hosting',
  }
  return {
    ...review,
    intro: 'This review looks at Hostinger’s Premium web-hosting offer. Use it to understand the upfront payment, renewal costs and whether the plan suits your website.',
    audience: 'Small-site owners who want hosting features in one paid plan',
    verdict: 'Hostinger can suit you if the selected plan covers what your site needs and you are comfortable with the full upfront payment and renewal cost. Look elsewhere if you need permanent free hosting or a server feature you have not confirmed. Compare the total you will pay, not just the small monthly equivalent.',
    bestFor: [
      'People starting a small site that fits the advertised hosting plan.',
      'Owners who want to check the full first-term payment and renewal before buying.',
      'Buyers who know they need web hosting rather than a separate builder, AI or VPS product.',
    ],
    lessIdealFor: [
      'Anyone who needs permanent free hosting.',
      'People who want monthly flexibility instead of a multi-year offer.',
      'Owners who have not checked their site’s software, workload or maintenance needs.',
    ],
    sections: review.sections.map((section) => ({
      ...section,
      heading: headings[section.heading] ?? section.heading,
      paragraphs: section.paragraphs.filter((text) => !repeatedAccessCopy.has(text)).map((text) => paragraphs[text] ?? text),
    })),
  }
}
