/**
 * FIVE PICKED — the full category list (original + new categories).
 * Pages should import `allCategories` from here instead of `categories`.
 */

import { categories, type Category, type Tool } from './categories'
import { extraCategories } from './more-categories'

/** Complete editorial data; hidden entries remain available for restoration. */
export const categoryRegistry: Category[] = [...categories, ...extraCategories]

export function isCompleteList(tools: Tool[]) {
  return tools.length === 5 && tools.every((tool) =>
    !(tool as Tool & { comingSoon?: boolean }).comingSoon && tool.officialUrl !== '#',
  )
}

/** Only complete, public lists may be used by navigation, counts and content. */
export const allCategories: Category[] = categoryRegistry.flatMap((category) => {
  if (category.hidden) return []
  if (category.tools) return isCompleteList(category.tools) ? [category] : []
  const subcategories = category.subcategories?.filter((sub) => isCompleteList(sub.tools)) ?? []
  return subcategories.length ? [{ ...category, subcategories }] : []
})

const seen = new Set<string>()
for (const category of categoryRegistry) {
  if (seen.has(category.slug)) {
    throw new Error(`[FIVE PICKED] Duplicate category slug "${category.slug}".`)
  }
  seen.add(category.slug)
}
