import type { Category, Tool } from '@/data/categories'
import { isCompleteList, publishedCategories } from '@/data/all-categories'

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

/** Shared singular/plural label for visible category counts. */
export function categoryCountLabel(count: number): string {
  return `${count} ${count === 1 ? 'category' : 'categories'}`
}

/** Only complete, published lists may promise five picks. */
export function categoryMeta(category: Category): string {
  if (category.hidden) return 'Selection in progress'
  if (category.subcategories) {
    const count = category.subcategories.filter((sub) => isCompleteList(sub.tools)).length
    return count ? `${categoryCountLabel(count)} · 5 picks each` : 'Selection in progress'
  }
  return category.tools && isCompleteList(category.tools) ? '5 picks' : 'Selection in progress'
}

/** Parent hubs may contain several complete lists; do not multiply hub count by five. */
export const catalogStats = {
  categories: publishedCategories.length,
  lists: publishedCategories.reduce((sum, category) => sum + (category.subcategories?.length ?? 1), 0),
  tools: countAllLiveTools(),
}
