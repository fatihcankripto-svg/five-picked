const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const Module = require('node:module')
const ts = require('typescript')
const root = path.resolve(__dirname, '..')
const resolve = Module._resolveFilename
Module._resolveFilename = function (name, ...args) {
  return resolve.call(this, name.startsWith('@/') ? path.join(root, name.slice(2)) : name, ...args)
}
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpile(fs.readFileSync(filename, 'utf8'), { module: ts.ModuleKind.CommonJS }), filename)
const { categoryRegistry, allCategories, publishedCategories, isCompleteList } = require('../data/all-categories.ts')
const { catalogStats } = require('../lib/category-stats.ts')
const hidden = ['website-builders', 'gaming', 'refurbished-electronics', 'diy-legal']
assert.deepEqual(categoryRegistry.filter((c) => c.hidden).map((c) => c.slug).sort(), hidden.sort())
assert.equal(allCategories.length, categoryRegistry.length - hidden.length)
let listCount = 0, tools = 0
for (const category of publishedCategories) {
  for (const list of category.subcategories ?? [category]) {
    assert(isCompleteList(list.tools), `Incomplete list published: ${category.slug}/${list.slug}`)
    listCount++
    tools += list.tools.length
  }
}
assert.equal(catalogStats.categories, allCategories.length)
assert.equal(catalogStats.lists, listCount)
assert.equal(catalogStats.tools, tools)
assert.equal(catalogStats.tools, listCount * 5)
for (const slug of ['personal-finance', 'fitness-and-nutrition']) {
  assert(allCategories.some((c) => c.slug === slug), `Missing visible topic: ${slug}`)
  assert(!publishedCategories.some((c) => c.slug === slug), `Partial list published: ${slug}`)
}
console.log('PASS: exactly four hidden categories; counts derive from real complete lists', catalogStats)
