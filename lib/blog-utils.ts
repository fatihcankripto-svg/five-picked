import type { BlogPost } from '@/lib/blog-pages'

export function readingTimeMinutes(html: string): number {
  const text = html.replace(/<[^>]*>/g, ' ')
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 220))
}

export function getAllBlogCategories(posts: BlogPost[]): string[] {
  const set = new Set(posts.map((p) => p.category))
  return Array.from(set).sort()
}

export function getRelatedPosts(current: BlogPost, all: BlogPost[], limit = 3): BlogPost[] {
  const sameCategory = all.filter(
    (p) => p.slug !== current.slug && p.category === current.category,
  )
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit)

  const others = all.filter(
    (p) => p.slug !== current.slug && p.category !== current.category,
  )
  return [...sameCategory, ...others].slice(0, limit)
}
