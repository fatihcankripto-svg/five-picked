/** Contract fee only; excludes taxes, conversion and withdrawal charges. */
export function calculateFee(amount: number, ratePercent: number) {
  const gross = Number.isFinite(amount) ? Math.max(0, amount) : 0
  const rate = Number.isFinite(ratePercent) ? Math.min(100, Math.max(0, ratePercent)) : 0
  const fee = gross * rate / 100
  return { gross, fee, net: gross - fee }
}
