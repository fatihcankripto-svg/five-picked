type IndexKind = 'hosting' | 'vpn' | 'courses'
const decisions: Record<IndexKind, readonly (readonly [string, string, string])[]> = {
  hosting: [
    ['Launching a website', 'Match the site software, support needs and included services before comparing the introductory payment.', 'A trial, a long prepaid offer and usage-based hosting do not buy the same commitment.'],
    ['Budgeting beyond the first term', 'Read the initial term and renewal basis together, including domain, email and migration conditions.', 'A smaller percentage increase does not establish the lowest total bill.'],
    ['Moving a working site', 'Verify application fit, backups and the migration route against the selected offer.', 'This price snapshot provides no uptime or site-speed result for that workload.'],
  ],
  vpn: [
    ['Looking for ongoing free access', 'Compare the free-plan limits separately from paid features and refund conditions.', 'A money-back route can require payment and an eligible refund request.'],
    ['Planning the next paid period', 'Keep the initial invoice and coverage beside the next invoice and its own coverage period.', 'The billing-commitment calculator below uses only complete recorded amounts; it does not fill missing invoices.'],
    ['Comparing different offers', 'Match the plan, currency, billing interval and eligibility before drawing a price conclusion.', 'The lowest headline rate does not establish a performance or privacy advantage.'],
  ],
  courses: [
    ['Choosing a learning outcome', 'Check whether the purchase is library access, an eligible course certificate or a separate credential.', 'A preview lesson and a paid certificate track are different entitlements.'],
    ['Choosing monthly or annual payment', 'Use a matched offer for the same product and retain its complete payment commitment.', 'A calculated annual saving is not evidence of a historical price increase or a need to study for a full year.'],
    ['Buying for a team', 'Check the organizational offer and account-use conditions rather than multiplying an individual headline price.', 'A personal subscription does not establish a company-wide license.'],
  ],
}
const escape = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** A decision worksheet based on the existing snapshot, without changing its observations or claims. */
export function withIndexDecisionNotes(content: string, kind: IndexKind) {
  const rows = decisions[kind].map((cells) => `<tr>${cells.map((cell, index) => index === 0 ? `<th scope="row">${escape(cell)}</th>` : `<td>${escape(cell)}</td>`).join('')}</tr>`).join('')
  return `${content}\n<h2>Decision worksheet: use the evidence for your purchase</h2><div class="overflow-x-auto"><table><caption>Purchasing decisions and the limits of this snapshot</caption><thead><tr><th scope="col">Your decision</th><th scope="col">What to use from the record</th><th scope="col">What the evidence does not establish</th></tr></thead><tbody>${rows}</tbody></table></div><p>When citing a finding, retain its observation date, selected product, currency, billing period and limitations, and link to this article and its downloadable source-linked dataset; the figures describe the recorded offer rather than a current checkout guarantee.</p>`
}
