export type RenewalObservation = {
  currency: string
  initialInvoice: number | null
  initialTermMonths: number | null
  renewalInvoice: number | null
  renewalTermMonths: number | null
}

/** Add complete recorded invoices only; never reconstruct an invoice from a rounded monthly label. */
export function firstRenewalCommitment(offer: RenewalObservation) {
  const amounts = [offer.initialInvoice, offer.renewalInvoice]
  const periods = [offer.initialTermMonths, offer.renewalTermMonths]
  if (!amounts.every((amount) => amount !== null && Number.isFinite(amount) && amount >= 0)
    || !periods.every((period) => period !== null && Number.isInteger(period) && period > 0)) return null
  return {
    currency: offer.currency,
    total: Math.round((offer.initialInvoice! + offer.renewalInvoice!) * 100) / 100,
    coverageMonths: offer.initialTermMonths! + offer.renewalTermMonths!,
  }
}
