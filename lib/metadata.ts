import type { Metadata } from 'next'
import { absoluteUrl, siteConfig, socialImages } from '@/lib/site'

import { searchSnippets as snippets } from '@/lib/search-snippets'

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
  // Hand-edited search titles are already complete and length-checked; preserve brand casing.
  if (snippets[path]) return snippets[path].title
  let value = title.replace(/FIVE PICKED/gi, '').replace(/\s*[|—–-]\s*$/, '').trim()
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
  let description = snippets[path]?.description ?? (path.startsWith('/quiz/') && quizTopic
    ? `Find your ${quizTopic} match. Answer questions about your needs and preferences, then explore the shortlist and compare the options before choosing.`
    : input.description ?? '')
  description = description.replace(/\s*No (?:fabricated|invented|independent|hands-on)[^.]*\./gi, '').trim()
  if (description.length > 165) description = description.slice(0, 160).replace(/\s+\S*$/, '').replace(/[,:;]+$/, '') + '…'
  return {
    ...input,
    title: { absolute: `${title} | ${siteConfig.name}` },
    description,
    alternates: { ...input.alternates, canonical: url },
    openGraph: { type: 'website', ...input.openGraph, images: input.openGraph?.images ?? socialImages, title: `${title} | ${siteConfig.name}`, description, url },
    twitter: { ...input.twitter, images: input.twitter?.images ?? socialImages, card: 'summary_large_image', title: `${title} | ${siteConfig.name}`, description },
  }
}
