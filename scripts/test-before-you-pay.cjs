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
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpile(
  fs.readFileSync(filename, 'utf8'),
  { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
), filename)

const { publishedCategories, categoryRegistry } = require('../data/all-categories.ts')
const { verifiedPricing } = require('../data/tool-pricing.ts')
const { getPaymentCompanies } = require('../lib/before-you-pay.ts')
const { paymentChecks, paymentChecksFor, matchesPaymentCompany } = require('../lib/payment-checks.ts')
const { getOutboundLink } = require('../lib/site.ts')

const published = new Map()
for (const category of publishedCategories) {
  for (const list of category.tools ? [category] : category.subcategories ?? []) {
    for (const tool of list.tools) published.set(tool.slug, tool)
  }
}
const frozen = JSON.stringify({ categoryRegistry, verifiedPricing })
const companies = getPaymentCompanies()
assert.deepEqual(new Set(companies.map((c) => c.slug)), new Set(published.keys()), 'Every published company appears once')
assert.equal(companies.length, published.size)
assert.equal(JSON.stringify({ categoryRegistry, verifiedPricing }), frozen, 'No source data is mutated')
assert.equal(paymentChecks.length, 5)
assert.equal(new Set(paymentChecks).size, 5)
for (const company of companies) {
  assert.equal(paymentChecksFor(company).length, 5)
  assert.equal(new Set(paymentChecksFor(company)).size, 5)
  const price = verifiedPricing[company.slug]
  assert.deepEqual(company.price.paragraphs, [price.label], `${company.slug}: preserve the exact recorded amount and billing basis`)
  assert.equal(company.price.checkedAt, price.checkedAt)
  assert(company.sources.some((s) => s.url === price.sourceUrl))
  assert.deepEqual(company.outbound, getOutboundLink(published.get(company.slug)), 'Preserve approved outbound URLs and sponsored attributes')
  for (const source of company.sources) {
    assert(source.label)
    assert.equal(new URL(source.url).protocol, 'https:')
    assert(!/awin1\.com|awinaffid/i.test(source.url), 'Evidence links must not be affiliate links')
  }
  for (const field of ['price', 'access', 'renewal', 'limits']) {
    const fact = company[field]
    assert.equal(fact.recorded, fact.paragraphs.length > 0)
    if (fact.recorded) assert(/^\d{4}-\d{2}-\d{2}$/.test(fact.checkedAt))
    else assert.equal(fact.checkedAt, null, 'Missing evidence must not receive a fabricated check date')
  }
  assert(matchesPaymentCompany(company, company.name, 'all'), 'Each name can be found')
  assert(matchesPaymentCompany(company, company.slug, 'all'), 'Each slug can be found')
  assert(matchesPaymentCompany(company, '', company.categories[0].slug), 'Category filtering includes the company')
  assert(!matchesPaymentCompany(company, '', 'not-a-category'))
  assert(!matchesPaymentCompany(company, '<script>nonexistent-company</script>', 'all'))
  assert(!matchesPaymentCompany(company, '🚀', 'all'))
}
const find = (slug) => companies.find((c) => c.slug === slug)
assert(matchesPaymentCompany(find('tldv'), 'tl dv', 'all'))
assert(matchesPaymentCompany(find('monday-com'), 'MONDAY.COM', 'all'))
assert(matchesPaymentCompany(find('private-internet-access'), 'Private Internet Access', 'all'))
assert(matchesPaymentCompany(find('99designs'), '99designs', 'all'))
assert.equal(find('landbot').price.paragraphs[0], verifiedPricing.landbot.label, 'Do not convert the recorded EUR offer')
assert.equal(find('pictory').renewal.recorded, false, 'No invented renewal/refund policy for a missing record')
assert(find('hostinger').renewal.paragraphs.some((p) => p.includes('US$10.99')), 'Reuse the plan-matched published renewal note')
assert(find('expressvpn').renewal.paragraphs.some((p) => p.includes('US$99.95')), 'Reuse the plan-matched published renewal note')
assert(find('toptal').price.paragraphs[0].includes('matching-platform fee'), 'Keep the hiring-side price label distinct from freelancer payout notes')
assert(find('toptal').roleNote.includes('clients who hire'))
assert(find('99designs').roleNote.includes('for buyers'))
assert(find('adobe-premiere-pro').renewal.paragraphs[0].includes('converts'))
assert(find('proton-vpn').access.paragraphs[0].includes('without a data cap'))
assert(find('kiwi-com').renewal.paragraphs[0].includes('€30'), 'Preserve documented refund-fee currency')
assert(paymentChecksFor(find('trip-com')).some((label) => label.includes('baggage')), 'Flight checks concern bookings, not software renewals')
assert(paymentChecksFor(find('upwork')).some((label) => label.includes('proposal costs')), 'Freelance checks concern the account role and work costs')
assert.deepEqual(getPaymentCompanies(), companies, 'Stable output across repeated builds')
if (process.argv.includes('--html')) {
  const html = fs.readFileSync(path.join(root, '.next/server/app/before-you-pay.html'), 'utf8')
  assert.equal((html.match(/type="checkbox"/g) ?? []).length, 0, 'The directory must not render all checklists')
  assert(!html.includes('Not recorded here.'), 'Full company facts are not serialized into the directory')
  assert(html.includes('<noscript>'))
  assert(html.includes('name="robots" content="index, follow"'))
  for (const company of companies) {
    assert(html.includes(`/before-you-pay/${company.slug}`), 'Every record has an ordinary link')
    const detail = fs.readFileSync(path.join(root, `.next/server/app/before-you-pay/${company.slug}.html`), 'utf8')
    assert.equal((detail.match(/type="checkbox"/g) ?? []).length, paymentChecks.length)
    assert(detail.includes('content="noindex, follow"'))
    assert(detail.includes('Your ticks stay only while this page is open.'))
    for (const source of company.sources) assert(detail.includes(source.url.replace(/&/g, '&amp;')), `${company.slug}: preserve source link`)
  }
  const sitemap = fs.readFileSync(path.join(root, '.next/server/app/sitemap.xml.body'), 'utf8')
  assert(!sitemap.includes('/before-you-pay/'), 'Utility detail pages stay outside the sitemap')
  console.log(`PASS: lightweight directory and ${companies.length} readable noindex detail pages with five controls each`)
}
console.log(`PASS: ${companies.length} published companies, exact prices/dates/URLs, evidence gaps, affiliate safety, plan-specific renewals, search and category filters`)
