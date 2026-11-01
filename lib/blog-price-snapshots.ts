import { verifiedPricing } from '@/data/tool-pricing'

const names: Record<string, string> = {
  semrush: 'Semrush', 'surfer-seo': 'Surfer SEO', kinsta: 'Kinsta', cloudways: 'Cloudways',
  skillshare: 'Skillshare', masterclass: 'MasterClass', preply: 'Preply', lingoda: 'Lingoda',
  'envato-elements': 'Envato Elements', freepik: 'Freepik', 'adobe-premiere-pro': 'Adobe Premiere Pro',
}
const escape = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** Reuse dated observations; never imply that a stored price is a live checkout quote. */
export function blogPriceSnapshot(slugs: readonly string[]) {
  const rows = slugs.map((slug) => {
    const fact = verifiedPricing[slug]
    if (!fact || !names[slug]) throw new Error(`Missing blog price observation: ${slug}`)
    return `<tr><th scope="row">${escape(names[slug])}</th><td>${escape(fact.label)}</td><td><time datetime="${escape(fact.checkedAt)}">${escape(fact.checkedAt)}</time> · <a href="${escape(fact.sourceUrl)}" rel="noopener noreferrer">Official source</a></td></tr>`
  }).join('')
  return `<div class="overflow-x-auto"><table><caption>Recorded price and access observations</caption><thead><tr><th scope="col">Tool</th><th scope="col">Price and billing basis</th><th scope="col">Checked and source</th></tr></thead><tbody>${rows}</tbody></table></div><p>These are dated observations, not live checkout quotes; confirm the selected plan, tax, currency and renewal before purchasing.</p>`
}
