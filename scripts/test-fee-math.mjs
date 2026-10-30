import assert from 'node:assert/strict'
import { calculateFee } from '../lib/fee-math.ts'
for (const [gross, rate, net] of [[100, 0, 100], [100, 10, 90], [100, 15, 85], [100, 20, 80], [0, 15, 0], [-100, 15, 0]]) {
  assert.equal(calculateFee(gross, rate).net, net)
}
assert.equal(calculateFee(Infinity, 20).net, 0)
assert.equal(calculateFee(100, NaN).net, 100)
assert.equal(calculateFee(100, 200).net, 0)
console.log('PASS: contract-specific fees, zero-fee contracts and invalid input')
