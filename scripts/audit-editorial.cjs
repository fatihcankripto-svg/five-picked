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

const { blogPosts } = require('../lib/blog-pages.ts')
const { reviews } = require('../data/reviews.ts')
const { editorialIdentity } = require('../lib/editorial-identity.ts')
const { siteOrganization, formatDate } = require('../lib/site.ts')
const { serializeJsonLd } = require('../lib/json-ld.ts')

function* nodes(value) {
  if (Array.isArray(value)) {
    for (const item of value) yield* nodes(item)
  } else if (value && typeof value === 'object') {
    yield value
    if (value['@graph']) yield* nodes(value['@graph'])
  }
}
function readPage(route) {
  const filename = path.join(root, '.next/server/app', `${route}.html`)
  assert(fs.existsSync(filename), `Run pnpm build first: missing ${route}`)
  const html = fs.readFileSync(filename, 'utf8')
  const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .flatMap((match) => {
      assert(!match[1].includes('<'), `Unsafe JSON-LD character: ${route}`)
      return [...nodes(JSON.parse(match[1]))]
    })
  const visible = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
  return { html, visible, schemas }
}
function validDate(value, label) {
  assert(value && !Number.isNaN(Date.parse(value)), `Invalid ${label}: ${value}`)
}
function checkAuthor(article, bio, route) {
  assert.equal(article.author['@type'], 'Organization', route)
  assert.equal(article.author.name, editorialIdentity.name, route)
  assert.equal(article.author.url, editorialIdentity.url, route)
  assert.equal(article.author.description, bio, route)
  assert.deepEqual(article.publisher, siteOrganization, route)
}

assert.equal(editorialIdentity.url, 'https://fivepicked.com/editorial-team')
assert(blogPosts.length && reviews.length, 'No editorial records to audit')
for (const post of blogPosts) {
  const route = `blog/${post.slug}`
  const { html, visible, schemas } = readPage(route)
  const article = schemas.find((node) => node['@type'] === 'BlogPosting')
  assert(article, `Missing BlogPosting: ${route}`)
  assert.equal(post.author, editorialIdentity.name, route)
  assert.equal(post.authorBio, editorialIdentity.bio, route)
  validDate(post.publishedAt, `${route} publishedAt`)
  validDate(post.updatedAt ?? post.lastReviewedAt, `${route} updatedAt`)
  validDate(post.lastReviewedAt, `${route} lastReviewedAt`)
  checkAuthor(article, post.authorBio, route)
  assert.equal(article.datePublished, post.publishedAt, route)
  assert.equal(article.dateModified, post.updatedAt ?? post.lastReviewedAt, route)
  assert.equal(article.mainEntityOfPage.lastReviewed, post.lastReviewedAt, route)
  assert.equal(article.mainEntityOfPage.reviewedBy.name, post.author, route)
  assert.equal(article.mainEntityOfPage.reviewedBy.description, post.authorBio, route)
  assert(visible.includes(post.authorBio), `Biography not visible: ${route}`)
  assert(visible.includes(`Last reviewed: ${formatDate(post.lastReviewedAt)}`), `Review date not visible: ${route}`)
  assert(visible.includes(`Last updated: ${post.updatedAt ?? post.lastReviewedAt}`), `Update date not visible: ${route}`)
  assert(html.includes('href="/editorial-team"'), `Missing team link: ${route}`)
}
for (const review of reviews) {
  const route = `reviews/${review.toolSlug}`
  const { html, visible, schemas } = readPage(route)
  const article = schemas.find((node) => node['@type'] === 'Article')
  assert(article, `Missing Article: ${route}`)
  // These records already use updated as their visible review date. Do not invent a separate date.
  const reviewedAt = review.lastReviewedAt ?? review.updated
  assert.equal(review.authorBio, editorialIdentity.bio, route)
  validDate(review.published, `${route} published`)
  validDate(review.updated, `${route} updated`)
  validDate(reviewedAt, `${route} reviewed`)
  checkAuthor(article, review.authorBio, route)
  assert.equal(article.datePublished, review.published, route)
  assert.equal(article.dateModified, review.updated, route)
  assert(visible.includes(review.authorBio), `Biography not visible: ${route}`)
  assert(visible.includes(`Last reviewed ${formatDate(reviewedAt)}`), `Review date not visible: ${route}`)
  assert(visible.includes(`Last updated: ${review.updated}`), `Update date not visible: ${route}`)
  assert(html.includes('href="/editorial-team"'), `Missing team link: ${route}`)
}

const home = readPage('index')
const organization = home.schemas.find((node) => node['@type'] === 'Organization')
assert(organization, 'Homepage Organization missing')
const { '@context': context, ...identity } = organization
assert.equal(context, 'https://schema.org')
assert.deepEqual(identity, siteOrganization)
assert(!('sameAs' in organization), 'Unverified social profiles must not be added')

const payload = { text: '</script><script>alert(1)</script>', comparison: 'a < b' }
const encoded = serializeJsonLd(payload)
assert(!encoded.includes('<'), 'Unsafe serializer')
assert.deepEqual(JSON.parse(encoded), payload, 'Serializer changed the original data')
console.log(`PASS: ${blogPosts.length} blog posts and ${reviews.length} reviews have consistent authors, visible biographies, recorded dates and article schemas; homepage identity and JSON-LD escaping verified`)
