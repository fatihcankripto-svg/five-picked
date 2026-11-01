/** Build a static index from the production HTML, including dynamic index pages.
 * Local requests only; no scraping, external requests, or search-query logging.
 */
const fs = require('node:fs')
const path = require('node:path')
const net = require('node:net')
const { spawn } = require('node:child_process')
const Module = require('node:module')
const ts = require('typescript')
const root = path.resolve(__dirname, '..')
const resolve = Module._resolveFilename
Module._resolveFilename = function (name, ...args) { return resolve.call(this, name.startsWith('@/') ? path.join(root, name.slice(2)) : name, ...args) }
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpile(fs.readFileSync(filename, 'utf8'), { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true }), filename)
const { publishedCategories } = require('../data/all-categories.ts')
const { quizPages } = require('../lib/quiz-pages.ts')
const { pageSearchKind, prepareSearch } = require('../lib/site-search.ts')

function decode(text) {
  const named = { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>', nbsp: ' ', ndash: '–', mdash: '—' }
  return text.replace(/&(#x[\da-f]+|#\d+|[a-z]+);/gi, (all, code) => {
    if (code[0] !== '#') return named[code] ?? all
    const point = code[1].toLowerCase() === 'x' ? parseInt(code.slice(2), 16) : Number(code.slice(1))
    return point > 0 && point <= 0x10ffff ? String.fromCodePoint(point) : ' '
  })
}
function text(html) {
  return decode(html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ').replace(/<!--[\s\S]*?-->/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim()
}
async function freePort() {
  return new Promise((resolvePort, reject) => {
    const socket = net.createServer()
    socket.on('error', reject)
    socket.listen(0, '127.0.0.1', () => { const port = socket.address().port; socket.close(() => resolvePort(port)) })
  })
}
async function main() {
  const port = await freePort()
  const base = `http://127.0.0.1:${port}`
  const server = spawn(process.execPath, [require.resolve('next/dist/bin/next'), 'start', '--hostname', '127.0.0.1', '--port', String(port)], { cwd: root, stdio: ['ignore', 'ignore', 'pipe'] })
  let errors = ''
  server.stderr.on('data', (chunk) => { errors = (errors + chunk).slice(-3000) })
  try {
    let sitemap
    for (let attempt = 0; attempt < 100; attempt++) {
      try { const response = await fetch(`${base}/sitemap.xml`, { signal: AbortSignal.timeout(10000) }); if (response.ok) { sitemap = await response.text(); break } } catch {}
      if (server.exitCode !== null) throw new Error(`Search index server failed: ${errors}`)
      await new Promise((done) => setTimeout(done, 100))
    }
    if (!sitemap) throw new Error('Search index could not read the production sitemap')
    const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => decode(match[1]))
    const pages = new Array(urls.length)
    let cursor = 0
    await Promise.all(Array.from({ length: 8 }, async () => {
      while (cursor < urls.length) {
        const index = cursor++
        const url = new URL(urls[index])
        if (url.origin !== 'https://fivepicked.com') throw new Error('Unexpected sitemap origin')
        const response = await fetch(base + url.pathname, { redirect: 'error', signal: AbortSignal.timeout(30000) })
        if (!response.ok) throw new Error(`Search index HTTP ${response.status}: ${url.pathname}`)
        const html = await response.text()
        if (/<meta\b[^>]*name="robots"[^>]*content="[^"]*noindex/i.test(html) || /noindex/i.test(response.headers.get('x-robots-tag') ?? '')) throw new Error(`Sitemap includes a noindex page: ${url.pathname}`)
        const title = text(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? '').replace(/ \| FIVE PICKED$/, '')
        const description = decode(html.match(/<meta\b[^>]*name="description"[^>]*content="([^"]*)"/i)?.[1] ?? '')
        const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1]
        if (!title || !main || !description) throw new Error(`Missing search content: ${url.pathname}`)
        let body = text(main)
        const quiz = quizPages.find((q) => `/quiz/${q.slug}` === url.pathname)
        if (quiz) body += ' ' + quiz.questions.map((q) => `${q.question} ${q.options.map((o) => o.label).join(' ')}`).join(' ')
        pages[index] = { id: `page:${url.pathname}`, kind: pageSearchKind(url.pathname), href: url.pathname, title, description, body }
      }
    }))
    const companies = new Map()
    for (const category of publishedCategories) for (const list of category.tools ? [category] : category.subcategories ?? []) for (const tool of list.tools) {
      if (companies.has(tool.slug)) continue
      const listPath = category.tools ? `/${category.slug}` : `/${category.slug}/${list.slug}`
      companies.set(tool.slug, { id: `company:${tool.slug}`, kind: 'company', href: `${listPath}#${tool.slug}`, title: tool.name, description: tool.tagline, body: [category.name, list.name, tool.whatItDoes, tool.bestFor, ...tool.strengths, tool.goodToKnow, new URL(tool.officialUrl).hostname].join(' ') })
    }
    const entries = [...companies.values(), ...pages]
    if (new Set(entries.map((entry) => entry.id)).size !== entries.length) throw new Error('Duplicate search entries')
    prepareSearch(entries)
    const output = path.join(root, 'public/site-search.json')
    fs.writeFileSync(`${output}.tmp`, JSON.stringify({ version: 1, entries }))
    fs.renameSync(`${output}.tmp`, output)
    console.log(`Search index: ${pages.length} published pages + ${companies.size} companies; full page text, no hidden content`)
  } finally {
    server.kill('SIGTERM')
    await new Promise((done) => { if (server.exitCode !== null) done(); else server.once('exit', done) })
  }
}
main().catch((error) => { console.error(error); process.exitCode = 1 })
