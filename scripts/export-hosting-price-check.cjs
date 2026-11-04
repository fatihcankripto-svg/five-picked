const fs = require('node:fs')
const path = require('node:path')
const ts = require('typescript')
const Module = require('node:module')
const root = path.resolve(__dirname, '..')
const filename = path.join(root, 'lib/hosting-price-math.ts')
const compiled = new Module(filename, module)
compiled._compile(ts.transpile(fs.readFileSync(filename, 'utf8'), { module: ts.ModuleKind.CommonJS }), filename)
const { hostingIntroTermCost, hostingThreeYearScenario } = compiled.exports
const rows = require('../data/hosting-price-check-2026-11-04.json')
const headers = ['provider', 'plan', 'currency', 'introMonthly', 'initialTermMonths', 'renewalMonthly', 'initialInvoice', 'initialAmountBasis', 'calculatedInitialTermCost', 'calculated36MonthBaseCost', 'scenarioAssumptions', 'notes', 'checkedAt', 'sourceUrl']
const cell = (value) => value === null || value === undefined ? '' : /[",\n\r]/.test(String(value)) ? `"${String(value).replace(/"/g, '""')}"` : String(value)
const csv = [headers.join(','), ...rows.map(row => {
  const scenario = hostingThreeYearScenario(row)
  const record = { ...row, calculatedInitialTermCost: hostingIntroTermCost(row), calculated36MonthBaseCost: scenario,
    scenarioAssumptions: scenario === null ? 'Not eligible: requires USD and a 12-month introduction' : '12 months at introductory rate + 24 months at unchanged renewal rate; excludes taxes and extras; not an invoice forecast or equivalent service comparison' }
  return headers.map(key => cell(record[key])).join(',')
})].join('\n') + '\n'
const target = path.join(root, 'public/data/2026-web-hosting-price-check-2026-11-04.csv')
if (process.argv.includes('--check')) {
  if (fs.readFileSync(target, 'utf8') !== csv) throw new Error('Price-check CSV is out of sync with its JSON inputs and formulas')
  console.log('PASS: hosting CSV matches all recorded inputs and calculated scenarios')
} else {
  fs.writeFileSync(target, csv)
  console.log('Exported six dated offers with reproducible cost calculations')
}
