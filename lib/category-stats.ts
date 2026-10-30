import type { Category, Tool } from '@/data/categories'
import { allCategories, publishedCategories } from '@/data/all-categories'

type MaybeSoon = Tool & { comingSoon?: boolean }

/** A real tool (not a "Coming soon" placeholder). */
export function isLive(tool: Tool) {
  return (tool as MaybeSoon).comingSoon !== true
}

/** Counts only real tools across all categories. */
export function countAllLiveTools() {
  return publishedCategories.reduce((total, category) => {
    const direct = (category.tools ?? []).filter(isLive).length
    const nested = (category.subcategories ?? []).reduce(
      (sum, sub) => sum + sub.tools.filter(isLive).length,
      0,
    )
    return total + direct + nested
  }, 0)
}

/** Short honest label for category cards. */
export function categoryMeta(category: Category): string {
  if (category.subcategories) {
    if (category.subcategories.length === 0) return 'Selection in progress'
    const count = category.subcategories.length
    const allFull = category.subcategories.every((sub) => sub.tools.every(isLive))
    return allFull ? `${count} categories · 5 picks each` : `${count} categories`
  }
  const live = (category.tools ?? []).filter(isLive).length
  return live === 5 ? '5 picks' : `${live} of 5 picks`
}

/** Parent hubs may contain several lists; do not multiply hub count by five. */
export const catalogStats = {
  categories: allCategories.length,
  readyCategories: publishedCategories.length,
  lists: publishedCategories.reduce((sum, category) => sum + (category.subcategories?.length ?? 1), 0),
  tools: countAllLiveTools(),
}
