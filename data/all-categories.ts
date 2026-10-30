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

/** Visible topic hubs: only an explicit hidden flag removes a category. */
export const allCategories: Category[] = categoryRegistry
  .filter((category) => !category.hidden)
  .map((category) => category.subcategories
    ? { ...category, subcategories: category.subcategories.filter((sub) => isCompleteList(sub.tools)) }
    : category)

/** Publishing and tool indexes must never include partial five-tool lists. */
export const publishedCategories = allCategories.filter((category) =>
  category.tools ? isCompleteList(category.tools) : Boolean(category.subcategories?.length),
)

const seen = new Set<string>()
for (const category of categoryRegistry) {
  if (seen.has(category.slug)) {
    throw new Error(`[FIVE PICKED] Duplicate category slug "${category.slug}".`)
  }
  seen.add(category.slug)
}
