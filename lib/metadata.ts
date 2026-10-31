import type { Metadata } from 'next'
import { absoluteUrl, siteConfig, socialImages } from '@/lib/site'

/** Snippet copy only: these overrides never replace editorial body or schema data. */
const snippets: Record<string, { title?: string; description?: string }> = {
  "/free/best-free-cloud-storage": {"description": "Explore free cloud storage services and compare storage allowances and sharing conditions. Check the limits and paid upgrades before choosing where to start."},
  "/free/best-free-note-taking-apps": {"description": "Explore free note-taking apps and compare writing, organization and plan conditions. Check the limits and paid upgrades before choosing where to start."},
  "/free/best-free-presentation-tools": {"description": "Explore free presentation tools and compare slide creation and sharing conditions. Check the limits and paid upgrades before choosing where to start."},
  "/free/best-free-ai-image-tools": {"description": "Explore free AI image tools and compare generation access and plan conditions. Check the limits and paid upgrades before choosing where to start."},
  "/free/best-free-ai-video-tools": {"description": "Explore free AI video tools and compare credits, export conditions and trials. Check the limits and paid upgrades before choosing where to start."},
  "/free/best-free-ai-chatbots": {"description": "Explore free AI chatbot tools and compare website access and plan conditions. Check the limits and paid upgrades before choosing where to start."},
  "/free/best-free-automation-tools": {"description": "Explore free automation tools and compare workflow access and usage limits. Check the limits and paid upgrades before choosing where to start."},
  "/free/best-free-project-management-tools": {"description": "Explore free project management tools and compare team workflows and collaboration. Check the limits and paid upgrades before choosing where to start."},
  "/reviews/babbel": {"description": "Explore Babbel lessons, language options and subscription costs. Learn who its study format suits and what to consider before choosing your next language app."},
  "/guides/how-to-choose-a-vpn": {"description": "Learn what a VPN can do and what to check before subscribing. Explore privacy, device support and access conditions to find an option that fits your needs."},
  "/tools/text-to-speech-duration": {"description": "Plan a voiceover before recording. Paste your script into the free text-to-speech duration calculator and compare estimated timing at different speaking speeds."},
  "/about": {"description": "Meet FIVE PICKED, an independent tool recommendation site. Learn how focused five-pick lists and practical comparisons help you choose tools for your needs."},
  "/contact": {"description": "Share a suggestion, correction or question with FIVE PICKED. Find our contact email and help us keep tool information clear, useful and relevant to your needs."},
  "/how-we-choose": {"description": "Explore how FIVE PICKED researches, compares and ranks tools. Learn what goes into each five-pick list and how we explain sources, trade-offs and suitability."},
  "/privacy": {"description": "Learn how FIVE PICKED handles privacy while you browse. Read about accounts, forms, newsletters and data practices so you know what to expect from the site."},
  "/affiliate-disclosure": {"description": "Learn how affiliate links support FIVE PICKED and what happens when you use them. Read our commission disclosure and approach to independent recommendations."},
  "/tools": {"description": "Plan your next project with free narration and freelance fee calculators. Explore timing and take-home estimates before choosing a workflow or quoting a job."},
  "/blog/semrush-vs-surfer-seo": {"title": "Semrush vs Surfer SEO: Detailed Guide (2026)"},
  "/blog/skillshare-vs-masterclass": {"title": "Skillshare vs MasterClass: Learning Guide"},
  '/': { title: 'Choose Your Next Tool with Confidence', description: 'Find five carefully selected tools for each published list. Explore comparisons, buying guides and free-plan limits to choose what fits your needs.' },
  '/categories': { title: 'Explore All Tool Categories', description: 'Find the right starting point for your next tool. Browse complete five-pick lists across AI, hosting, VPNs, productivity, learning and more.' },
  '/blog': { title: 'Tool Comparisons and Buying Guides', description: 'Explore practical tool comparisons, buying guides and price indices. Understand costs, free-plan limits and trade-offs before choosing your next tool.' },
  '/reviews': { title: 'Product Reviews and Buying Notes', description: 'Explore product reviews with clear pricing, useful features and practical trade-offs. Find who each tool suits and what to check before subscribing.' },
  '/compare': { title: 'Tool Comparisons (2026)', description: 'Compare tools side by side by cost, features and the work you need to do. Explore clear decision guides to find the option that fits your situation.' },
  '/free': { title: 'Free Tool Plans, Trials and Limits (2026)', description: 'Explore free plans and trials across our tool categories. Check access limits, paid upgrades and refund conditions before choosing where to start.' },
  '/quiz': { title: 'Find Your Tool: Recommendation Quizzes', description: 'Answer questions about your goals and preferences to narrow down your tool options. Explore category quizzes and find a starting point for your shortlist.' },
  '/guides': { title: 'Practical Tool Buying Guides', description: 'Get help choosing tools for your next project. Explore practical buying guides on hosting, VPNs, AI video, chatbots and meeting notes before committing.' },
  '/alternatives': { title: 'Tool Alternatives by Use Case', description: 'Explore alternatives to familiar tools and compare where each option fits. Check pricing, access conditions and trade-offs before making a switch.' },
  '/reviews/nordvpn': { title: 'NordVPN Review (2026): Pricing and Fit', description: 'Explore NordVPN plans, pricing and device support. Compare free-access conditions and refund rules to decide whether it fits your VPN needs.' },
  '/reviews/hostinger': { title: 'Hostinger Review (2026): Pricing and Fit', description: 'Explore Hostinger hosting features, introductory prices and renewal costs. Check refund conditions and find out whether it fits your next website.' },
  '/reviews/expressvpn': { title: 'ExpressVPN Review (2026): Plans and Costs', description: 'Explore ExpressVPN plans, introductory billing and renewal costs. Check device support and purchase-channel refund rules before choosing a subscription.' },
  '/reviews/cloudways': { title: "Cloudways Review (2026): Pricing and Fit", description: "Explore how Cloudways managed cloud hosting works, what its plans include and who it suits. Compare pricing and practical trade-offs before choosing a host.",},
  '/reviews/semrush': { title: 'Semrush Review (2026): Plans and Fit' },
  '/reviews/surfer-seo': { title: 'Surfer SEO Review (2026): Plans and Fit' },
  '/reviews/kiwi-com': { title: 'Kiwi.com Review (2026): Booking Costs and Fit' },
  '/blog/real-cost-of-email-marketing-2026': { title: 'Email Marketing Costs and Limits (2026)', description: 'Compare email plan limits, paid starting tiers and automation features. Explore newsletter and ecommerce scenarios to plan a stack that fits your needs.' },
  '/blog/real-cost-of-freelancing-2026': { title: 'Freelancing Costs: Fees and Payouts (2026)' },
  '/blog/2026-web-hosting-price-index': { title: 'Web Hosting Price Index (2026): 10 Providers', description: 'Compare hosting entry prices, renewals and included services across ten providers. Use the dated price table and downloadable data to plan your budget.' },
  '/blog/2026-vpn-price-index': { title: 'VPN Price Index (2026): 10 Providers', description: 'Compare VPN entry prices, renewals, device allowances and refund conditions across ten providers. Explore the dated table and downloadable price data.' },
  '/blog/2026-online-course-price-index': { title: 'Online Course Price Index (2026): 10 Platforms', description: 'Compare course subscriptions, free access and certificate conditions across ten platforms. Explore individual and team costs with a downloadable dataset.' },
  '/guides/ai-voice-commercial-use': { title: 'Free AI Voices: Commercial-Use Guide' },
  '/guides/shared-vs-cloud-vs-managed-wordpress-hosting': { title: "Shared vs Cloud vs Managed WordPress Hosting", description: "Explore shared, VPS, cloud and managed WordPress hosting in plain English. Compare maintenance, flexibility and buying needs before choosing your hosting type.",},
  '/guides/hostinger-vs-bluehost': { title: "Hostinger vs Bluehost: Beginner Hosting Guide", description: "Compare Hostinger and Bluehost by pricing, setup, support and the websites they suit. Explore practical trade-offs before choosing hosting for your first site.",},
  '/guides/nordvpn-vs-surfshark': { title: "NordVPN vs Surfshark: VPN Buying Guide", description: "Compare NordVPN and Surfshark by device support, plans and privacy features. Explore the trade-offs and buying considerations to find the right VPN for you.",},
  '/guides/best-ai-video-tools-for-beginners': { title: 'AI Video Tools for Beginners: Buying Guide' },
  '/guides/fliki-vs-pictory': { title: 'Fliki vs Pictory: AI Video Buying Guide' },
  '/guides/tidio-vs-chatbase': { title: 'Tidio vs Chatbase: Chatbot Buying Guide' },
  '/guides/best-ai-meeting-note-takers': { title: "AI Meeting Note Takers: Buying Guide", description: "Compare AI meeting-note tools by recording, transcription and summaries. Explore Fireflies, tl;dv, Notta and Otter to find a workflow that fits your meetings.",},
  '/free/best-free-online-course-platforms': { title: 'Free Online Courses: Access and Certificates' },
  '/free/best-free-flight-booking-sites': { title: 'Free Flight Search: Alerts and Booking Fees' },
  '/free/best-free-language-learning-apps': { title: 'Free Language Apps: Lesson Limits and Trials' },
  '/free/best-free-ai-marketing-and-seo-tools': { title: 'Free AI Marketing and SEO: Trials and Limits' },
  '/free/best-free-freelance-platforms': { title: 'Free Freelance Platforms: Fees and Limits' },
  '/free/best-free-video-and-design-software': { title: 'Free Video and Design: Limits and Trials' },
  '/free/vpns-with-a-free-plan': { title: 'VPN Free Plans and Trials Compared' },
  '/alternatives/adobe-premiere-pro': { title: 'Premiere Pro Alternatives (2026): 4 Picks' },
}

const categorySnippets: Record<string, { title: string; description: string }> = {
  'web-hosting-and-domains': { title: 'Best Web Hosting (2026): 5 Top Picks Compared', description: 'Compare five web hosting providers by pricing, features and the sites they suit. Explore the trade-offs to find a practical home for your next website.' },
  'vpn-and-security': { title: 'Best VPNs (2026): 5 Top Picks Compared', description: 'Compare five VPN providers by plans, features and device support. Explore access conditions and trade-offs to find the right fit for your privacy needs.' },
  'ai-tools': { title: 'Best AI Tools (2026): 5 Picks per List', description: 'Explore AI tools for video, images, meetings, marketing and chatbots. Compare focused five-pick lists to find the tools that fit your next project.' },
  'software-and-productivity': { title: 'Best Productivity Tools (2026): 5 per List', description: 'Explore note-taking, project management, storage, presentation and automation tools. Compare focused five-pick lists to build a stack that fits your work.' },
  'travel': { title: 'Best Travel Tools (2026): 5 Picks per List', description: 'Compare flight-booking tools by the way you search and book. Explore five picks, booking conditions and related guides before planning your next trip.' },
  'online-courses': { title: 'Best Online Courses (2026): 5 Platforms', description: 'Compare five online learning platforms by their formats, access conditions and learning goals. Find a starting point for your next course or skill.' },
  'email-marketing': { title: 'Best Email Marketing Tools (2026): 5 Picks', description: 'Compare five email marketing platforms by features, plan limits and the businesses they suit. Find a practical fit for your newsletter or customer emails.' },
  'video-and-design-software': { title: 'Best Video and Design Tools (2026): 5 Picks', description: 'Compare five video and design tools by workflow, pricing and access conditions. Find the right starting point for editing, recording or creative assets.' },
  'freelance-platforms': { title: 'Best Freelance Platforms (2026): 5 Picks', description: 'Compare five freelance platforms by the work they support, fees and who they suit. Explore practical trade-offs before choosing where to find projects.' },
  'language-learning': { title: 'Best Language Learning Apps (2026): 5 Picks', description: 'Compare five language learning platforms by lessons, tutoring and study format. Find an approach that fits your goals, budget and preferred way to learn.' },
  'video-and-voice': { title: 'Best AI Video Tools (2026): 5 Picks Compared', description: 'Compare five AI video and voice tools by the content you want to create. Explore formats, pricing and access conditions to find a useful starting point.' },
  'image-and-design': { title: 'Best AI Image Tools (2026): 5 Picks Compared', description: 'Compare five AI image and design tools by creative workflow, pricing and access conditions. Explore the trade-offs before choosing your next tool.' },
  'meeting-notes': { title: 'Best AI Meeting Notes (2026): 5 Tools', description: 'Compare five meeting-note tools by recording, summaries and collaboration needs. Explore their plans and workflows to find a fit for your meetings.' },
  'marketing-and-seo': { title: 'Best AI SEO Tools (2026): 5 Picks Compared', description: 'Compare five AI marketing and SEO tools by research, content and optimization workflows. Explore their plans and access conditions before choosing.' },
  'chatbots': { title: 'Best AI Chatbot Tools (2026): 5 Picks', description: 'Compare five chatbot tools by the conversations and support workflows you need. Explore setup, plans and access conditions before building your shortlist.' },
  'note-taking': { title: 'Best Note-Taking Apps (2026): 5 Picks', description: 'Compare five note-taking apps by organization, writing and knowledge workflows. Explore their plans and access conditions to find a fit for your notes.' },
  'project-management': { title: 'Best Project Management Tools (2026): 5 Picks', description: 'Compare five project management tools by planning, collaboration and team needs. Explore their plans and workflows before choosing your next workspace.' },
  'cloud-storage': { title: 'Best Cloud Storage (2026): 5 Picks Compared', description: 'Compare five cloud storage services by file access, sharing and plan limits. Explore their trade-offs to find a practical fit for your files and team.' },
  'presentations': { title: 'Best Presentation Tools (2026): 5 Picks', description: 'Compare five presentation tools by slide creation, design and collaboration workflows. Explore their plans to find a useful fit for your next presentation.' },
  'automation': { title: 'Best Automation Tools (2026): 5 Picks', description: 'Compare five automation tools by workflow building, connections and plan limits. Explore the trade-offs before choosing how to connect your everyday work.' },
  'flights': { title: 'Best Flight Booking Sites (2026): 5 Picks', description: 'Compare five flight-booking sites by search, alerts and booking conditions. Explore fees and practical trade-offs before choosing where to book your trip.' },
}

export function categorySeo(slug: string) {
  const entry = categorySnippets[slug]
  if (!entry) throw new Error(`Missing category metadata: ${slug}`)
  return entry
}

function conciseTitle(title: string, path: string) {
  let value = snippets[path]?.title ?? title.replace(/FIVE PICKED/gi, '').replace(/\s*[|—–-]\s*$/, '').trim()
  value = value.replace(/^Which (.+?) is right for me\? \(2026 Quiz\)$/i, '$1 Quiz (2026)')
    .replace(/Alternatives: 4 Hand-Picked Options \(2026\)/, 'Alternatives (2026): 4 Picks')
    .split(/\s+—\s+/)[0]
  value = value.charAt(0).toUpperCase() + value.slice(1)
  const limit = 60 - ` | ${siteConfig.name}`.length
  if (value.length > limit) value = value.slice(0, limit + 1).replace(/\s+\S*$/, '').replace(/[,:;—–-]+$/, '')
  return value
}

/** Route-level metadata; absolute titles prevent the inherited template adding the brand twice. */
export function pageMetadata(input: Metadata): Metadata {
  const canonical = input.alternates?.canonical
  if (typeof canonical !== 'string') throw new Error('Page metadata requires an explicit canonical path')
  const path = new URL(canonical, siteConfig.url).pathname
  const url = absoluteUrl(path)
  const rawTitle = typeof input.title === 'string' ? input.title : input.title && 'absolute' in input.title ? input.title.absolute : input.title?.default
  const title = conciseTitle(rawTitle ?? '', path)
  const quizTopic = rawTitle?.match(/^Which (.+?) is right for me\?/i)?.[1]
  let description = path.startsWith('/quiz/') && quizTopic
    ? `Find your ${quizTopic} match. Answer questions about your needs and preferences, then explore the shortlist and compare the options before choosing.`
    : snippets[path]?.description ?? input.description ?? ''
  description = description.replace(/\s*No (?:fabricated|invented|independent|hands-on)[^.]*\./gi, '').trim()
  if (description.length > 165) description = description.slice(0, 160).replace(/\s+\S*$/, '').replace(/[,:;]+$/, '') + '…'
  return {
    ...input,
    title: { absolute: `${title} | ${siteConfig.name}` },
    description,
    alternates: { ...input.alternates, canonical: url },
    openGraph: { type: 'website', ...input.openGraph, images: input.openGraph?.images ?? socialImages, title, description, url },
  }
}
