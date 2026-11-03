const assert = require('node:assert/strict')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { spawnSync } = require('node:child_process')

// Deny direct utility-HTML reads in the index builder only. Its local Next
// server runs in a separate process, so this models an adapter moving files
// without depending on any particular deployment's private output layout.
const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'search-portability-'))
try {
  const hook = path.join(temporary, 'deny-private-html.cjs')
  fs.writeFileSync(hook, `
    const fs = require('node:fs')
    const original = fs.readFileSync
    fs.readFileSync = function (file, ...args) {
      if (String(file).replaceAll('\\\\', '/').includes('.next/server/app/before-you-pay/') && String(file).endsWith('.html')) {
        throw new Error('Search builder must not depend on private utility HTML paths')
      }
      return original.call(this, file, ...args)
    }
  `)
  const probe = spawnSync(process.execPath, ['--require', hook, '-e', "require('node:fs').readFileSync('.next/server/app/before-you-pay/probe.html')"], { encoding: 'utf8' })
  assert.notEqual(probe.status, 0)
  assert(probe.stderr.includes('must not depend on private utility HTML paths'), 'The filesystem guard must be active')
  const result = spawnSync(process.execPath, ['--require', hook, 'scripts/build-search-index.cjs'], {
    cwd: path.resolve(__dirname, '..'), encoding: 'utf8', timeout: 120000,
  })
  assert.equal(result.status, 0, result.error?.message ?? result.stderr)
  assert.match(result.stdout, /[1-9]\d* payment records/)
  console.log('PASS: search index builds when direct company HTML reads are unavailable')
} finally {
  fs.rmSync(temporary, { recursive: true, force: true })
}
