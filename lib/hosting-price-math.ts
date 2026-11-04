type Offer = {
  currency: string
  introMonthly: number
  initialTermMonths: number | null
  renewalMonthly: number | null
}

/** Hosting-only scenario: 12 introductory months and 24 at the recorded renewal rate.
 * This is neither an invoice forecast nor a comparison of equivalent service capacity.
 */
export function hostingThreeYearScenario(offer: Offer): number | null {
  if (offer.currency !== 'USD' || offer.initialTermMonths !== 12 ||
      offer.renewalMonthly === null || !Number.isFinite(offer.introMonthly) ||
      !Number.isFinite(offer.renewalMonthly) || offer.introMonthly <= 0 ||
      offer.renewalMonthly < 0) return null
  return (Math.round(offer.introMonthly * 100) * 12 + Math.round(offer.renewalMonthly * 100) * 24) / 100
}

export function hostingIntroTermCost(offer: Offer): number | null {
  if (!offer.initialTermMonths || !Number.isFinite(offer.introMonthly) || offer.introMonthly < 0) return null
  return Math.round(offer.introMonthly * 100) * offer.initialTermMonths / 100
}
