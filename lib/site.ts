import { categories, type Category, type Subcategory, type Tool } from '@/data/categories'

export const siteConfig = {
  name: 'FIVE PICKED',
  domain: 'fivepicked.com',
  url: 'https://fivepicked.com',
  tagline: 'The 5 best tools, hand-picked for you.',
  description:
    'FIVE PICKED is an independent recommendation site. Every category shows exactly 5 tools, ranked 1 to 5, with honest notes on who each one is best for.',
  email: 'hello@fivepicked.com',
  disclosure:
    'Some links may earn us a commission at no extra cost to you. This never affects our rankings.',
}

export const staticPages = [
  { href: '/how-we-choose', label: 'How we choose' },
  { href: '/about', label: 'About' },
  { href: '/affiliate-disclosure', label: 'Affiliate disclosure' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/contact', label: 'Contact' },
] as const

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug)
}

export function getSubcategory(
  category: Category,
  slug: string,
): Subcategory | undefined {
  return category.subcategories?.find((sub) => sub.slug === slug)
}

export function getOutboundLink(tool: Tool) {
  const isAffiliate = Boolean(tool.affiliateUrl)
  return {
    href: tool.affiliateUrl ?? tool.officialUrl,
    rel: isAffiliate ? 'sponsored noopener noreferrer' : 'noopener noreferrer',
  }
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${path === '/' ? '' : path}`
}
