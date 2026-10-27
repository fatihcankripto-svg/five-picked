/**
 * FIVE PICKED — the full category list (original + new categories).
 * Pages should import `allCategories` from here instead of `categories`.
 */

import { categories, type Category } from './categories'
import { extraCategories } from './more-categories'

export const allCategories: Category[] = [...categories, ...extraCategories]

const seen = new Set<string>()
for (const category of allCategories) {
  if (seen.has(category.slug)) {
    throw new Error(`[FIVE PICKED] Duplicate category slug "${category.slug}".`)
  }
  seen.add(category.slug)
}
