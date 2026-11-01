const assert = require('node:assert/strict')
const { firstRenewalCommitment } = require('../lib/vpn-renewal.ts')
const offers = require('../data/vpn-price-index-2026.json')
const find = (name) => offers.find((offer) => offer.provider === name)
assert.deepEqual(firstRenewalCommitment(find('ExpressVPN')), { currency: 'USD', total: 183.67, coverageMonths: 40 })
assert.deepEqual(firstRenewalCommitment(find('NordVPN')), { currency: 'JPY', total: 37620, coverageMonths: 39 })
assert.deepEqual(firstRenewalCommitment(find('Mullvad')), { currency: 'EUR', total: 10, coverageMonths: 2 })
assert.equal(firstRenewalCommitment(find('Private Internet Access')), null, 'Do not invent the missing initial invoice')
assert.equal(firstRenewalCommitment(find('Surfshark')), null, 'Do not invent a missing renewal quote')
for (const missing of [null, undefined, NaN, Infinity, -1]) {
  assert.equal(firstRenewalCommitment({ ...find('ExpressVPN'), initialInvoice: missing }), null)
}
for (const invalid of [null, undefined, NaN, Infinity, -1, 0, 1.5]) {
  assert.equal(firstRenewalCommitment({ ...find('ExpressVPN'), renewalTermMonths: invalid }), null)
}
assert.deepEqual(firstRenewalCommitment({ ...find('ExpressVPN'), initialInvoice: 0, renewalInvoice: 0 }), { currency: 'USD', total: 0, coverageMonths: 40 }, 'A verified zero differs from missing data')
console.log('PASS: exact same-currency invoice arithmetic, correct coverage, missing-data handling and no invoice reconstruction')
