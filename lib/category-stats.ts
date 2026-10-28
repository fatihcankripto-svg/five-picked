import type { Category, Tool } from '@/data/categories'
import { allCategories } from '@/data/all-categories'

type MaybeSoon = Tool & { comingSoon?: boolean }

/** A real tool (not a "Coming soon" placeholder). */
export function isLive(tool: Tool) {
  return (tool as MaybeSoon).comingSoon !== true
}

/** Counts only real tools across all categories. */
export function countAllLiveTools() {
  return allCategories.reduce((total, category) => {
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
    const count = category.subcategories.length
    const allFull = category.subcategories.every((sub) => sub.tools.every(isLive))
    return allFull ? `${count} categories · 5 picks each` : `${count} categories`
  }
  const live = (category.tools ?? []).filter(isLive).length
  return live === 5 ? '5 picks' : `${live} of 5 picks`
}
