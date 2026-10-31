import { editorialIdentity } from '@/lib/editorial-identity'
import { hostingOffers } from '@/lib/hosting-free-options'
import { videoDesignFreeOptions } from '@/lib/video-design-free-options'
import type { Tool } from '@/data/categories'

const authorBio = editorialIdentity.bio
export const packageAlternativeCopies = {
  hostinger: {
    authorBio, lastReviewedAt: '2026-10-31',
    summary: 'Hostinger’s Premium offer suits a small-site owner considering an integrated hosting plan and willing to assess the full introductory commitment. It is not the right starting point if you require a permanent free host or have not checked renewal and workload requirements. The alternatives below cover another entry WordPress host, managed cloud configuration, managed WordPress and shared hosting. These are editorial fit judgments, not speed or uptime tests.',
    reasons: [
      'Choose Bluehost when its entry WordPress plan and renewal terms fit the site you are launching.',
      'Choose Cloudways when you need to evaluate a managed cloud server and application configuration rather than another shared-hosting offer.',
      'Choose Kinsta when you specifically want a managed WordPress service and can justify its continuing paid plan.',
      'Choose Namecheap when a shared-hosting trial fits your evaluation, after checking continuation and eligibility conditions.',
    ],
    faqs: [
      { question: 'Are these four permanently free Hostinger alternatives?', answer: 'No. The linked hosting free guide separates trials and introductory periods from paid hosting. A money-back guarantee requires an eligible purchase and refund request; a temporary domain does not make hosting free.' },
      { question: 'Which alternative should I evaluate for managed cloud control?', answer: 'Cloudways is the managed-cloud option in this shortlist. Check the selected product, server and support requirements; this is not evidence that it will be faster or cheaper for every site.' },
      { question: 'Can I compare every introductory monthly headline directly?', answer: 'No. Compare the upfront term, continuation or renewal, included services and workload. An introductory rate paid for a long term is different from a monthly plan or a temporary trial.' },
    ],
    freeAnswer: 'None is presented as permanent free hosting. Exact trial and refund conditions are reused from the existing hosting access guide in the cards; read the selected offer before entering payment details.',
    guides: [
      { href: '/free/best-free-web-hosting', label: 'Inspect the verified hosting trial and refund conditions' },
      { href: '/quiz/web-hosting-and-domains', label: 'Match a host to your site and operating experience' },
      { href: '/compare/hostinger-vs-cloudways', label: 'Weigh Hostinger against a managed-cloud move' },
    ],
    sources: [
      { url: 'https://www.hostinger.com/pricing', label: 'Hostinger Premium introductory commitment and renewal' },
      { url: 'https://www.bluehost.com/pricing/wordpress-hosting', label: 'Bluehost Starter price, term and renewal' },
      { url: 'https://www.cloudways.com/en/pricing.php', label: 'Cloudways managed-cloud products and paid pricing' },
      { url: 'https://kinsta.com/pricing/', label: 'Kinsta selected first-month offer and continuing price' },
      ...hostingOffers.flatMap<{ url: string; label: string }>((offer) => [...offer.sources]),
    ].filter((source, index, sources) => sources.findIndex((other) => other.url === source.url) === index),
  },
  nordvpn: {
    authorBio, lastReviewedAt: '2026-10-31',
    summary: 'NordVPN is a paid VPN option for people whose chosen apps and plan meet their connection needs. It is not an ongoing free service, and a trial or refund offer is not equivalent to a permanent free plan. Consider another provider when ongoing free access, household device coverage, the billing commitment or app fit is the deciding requirement. No speed, streaming-access or security winner is claimed here.',
    reasons: [
      'Choose Proton VPN when ongoing no-data-cap free access matters more than paid-plan location or feature choice.',
      'Choose Surfshark when its paid unlimited simultaneous-device offer fits your household; trial conditions remain separate.',
      'Choose ExpressVPN when its supported apps and the actual Basic offer fit your devices and billing commitment; no faster-service claim is made.',
      'Choose Private Internet Access when its apps and the documented monthly purchase option fit your evaluation without a long introductory commitment.',
    ],
    faqs: [
      { question: 'Which alternative has an ongoing free plan?', answer: 'Proton VPN is the ongoing free option in the existing guide, without a data cap. Surfshark, ExpressVPN and Private Internet Access are paid services; trial and refund availability depend on the purchase channel.' },
      { question: 'Does a money-back guarantee mean free VPN access?', answer: 'No. It can require payment first and an eligible cancellation or refund request. Check website and app-store conditions separately rather than assuming one refund policy applies everywhere.' },
      { question: 'Is any alternative proven faster than NordVPN here?', answer: 'No matched speed test is presented on this page. Evaluate the required app, location and connection on your own setup; the decision framework is based on documented access and plan conditions.' },
    ],
    freeAnswer: 'Proton VPN provides the ongoing no-data-cap free plan. The remaining alternatives are paid VPNs with channel-dependent trial or refund routes, consistent with the linked free guide.',
    guides: [
      { href: '/free/vpns-with-a-free-plan', label: 'Separate ongoing free VPN access from trials and refunds' },
      { href: '/quiz/vpn-and-security', label: 'Choose a VPN by your connection priorities' },
      { href: '/compare/expressvpn-vs-nordvpn', label: 'Compare the NordVPN and ExpressVPN purchase decision' },
    ],
    sources: [
      { url: 'https://nordvpn.com/pricing/', label: 'NordVPN monthly Basic offer' },
      { url: 'https://protonvpn.com/pricing', label: 'Proton VPN ongoing Free versus paid features' },
      { url: 'https://surfshark.com/pricing/', label: 'Surfshark device coverage and billing choices' },
      { url: 'https://www.expressvpn.com/pricing', label: 'ExpressVPN Basic upfront term and renewal' },
      { url: 'https://www.privateinternetaccess.com/buy-vpn-online', label: 'PIA monthly purchase and renewal' },
    ],
  },
  'adobe-premiere-pro': {
    authorBio, lastReviewedAt: '2026-10-31',
    summary: 'Premiere’s desktop workflow suits editors who need its editing controls and can justify a subscription after evaluation. It is not an ongoing free desktop editor. The four alternatives are the other existing category picks, not four interchangeable timeline editors: Filmora is an editor, Camtasia emphasizes screen recording and editing, Riverside emphasizes recording, and Envato is an asset library. Choose by the production task rather than treating every tool as a full Premiere replacement.',
    reasons: [
      'Choose Filmora when its editing workflow meets the deliverable and you have checked watermark removal and commercial licensing.',
      'Choose Camtasia when screen recording and editing are central; free exports retain a watermark.',
      'Choose Riverside when recording interviews or separate participant tracks is the immediate task; Free recording and separate-track allowances differ.',
      'Choose Envato when the missing ingredient is licensed media rather than an editor. It complements an editor instead of replacing Premiere’s timeline.',
    ],
    faqs: [
      { question: 'Are all four alternatives complete Premiere replacements?', answer: 'No. Filmora and Camtasia provide editing workflows, Riverside focuses on recording and editing recorded content, and Envato supplies creative assets. Choose the tool that fills the actual production gap.' },
      { question: 'Do free exports have the same limits?', answer: 'No. Filmora and Camtasia free exports have watermarks. Riverside’s Free output and separate-track allowance have their own limits. Envato’s selected free files use a separate asset license, not an editor export entitlement.' },
      { question: 'Does free access clear every output for client work?', answer: 'No. The linked free guide separates software access from commercial and asset rights. Verify the exact license and media in the project before a commercial delivery.' },
    ],
    freeAnswer: 'Free access differs: watermarked editing, a limited recording account and selected licensed assets are not equivalent to unrestricted free Premiere desktop use. The card restrictions reuse the verified video and design free guide.',
    guides: [
      { href: '/free/best-free-video-and-design-software', label: 'Check the verified export and commercial-use restrictions' },
      { href: '/quiz/video-and-design-software', label: 'Match a production task to an editor or recording tool' },
      { href: '/compare/capcut-vs-premiere-pro', label: 'Compare Premiere with the CapCut workflow' },
    ],
    sources: [
      { url: 'https://www.adobe.com/products/premiere/plans.html', label: 'Adobe current desktop purchase options' },
      ...videoDesignFreeOptions.flatMap<{ url: string; label: string }>((option) => [...option.sources]),
    ],
  },
}

const copy: Record<string, { audience: string; strength: string; price: string; description: string }> = {
  hostinger: { audience: 'Small-site owners assessing a long introductory hosting term', strength: 'An integrated hosting offer for a first website', price: 'Premium US$2.49/month equivalent; US$119.52 upfront for 48 months; renewal differs', description: 'Provides paid web hosting with a managed account interface. Confirm the selected plan and renewal rather than inferring free hosting from an introductory headline.' },
  bluehost: { audience: 'People launching a WordPress site', strength: 'An entry WordPress hosting offer', price: 'Starter US$3.99/month for 36 months; renews US$9.99/month; applicable taxes extra', description: 'Provides WordPress hosting with separate product and billing choices. Check the exact plan before comparing an introductory term.' },
  cloudways: { audience: 'Site owners evaluating managed cloud configuration', strength: 'Managed cloud hosting with product-specific trials', price: 'Paid managed hosting; official offers from US$11/month; confirm the selected server', description: 'Provides managed cloud hosting options, including Flexible and Autonomous. Their evaluations and operating model differ from shared hosting.' },
  kinsta: { audience: 'WordPress owners who want a managed WordPress service', strength: 'WordPress-focused hosting with an eligible introductory period', price: 'Selected monthly offer: first month free, then US$35/month', description: 'Provides managed WordPress hosting. The introductory period is temporary and workload limits must be checked for the selected plan.' },
  namecheap: { audience: 'People evaluating shared hosting before continuing a paid plan', strength: 'A documented limited-time Shared Hosting trial', price: 'Selected Stellar monthly trial continues at US$2.28/month; eligibility applies', description: 'Provides Shared Hosting and other distinct hosting products. The trial is not a permanent free hosting tier.' },
  nordvpn: { audience: 'People selecting a paid VPN for their apps and connection needs', strength: 'Monthly and longer-term VPN purchase options', price: 'Basic US$14.99/month billed monthly; applicable tax may apply', description: 'Provides paid VPN apps across supported platforms. A plan’s extra security products are separate from the core connection decision.' },
  'proton-vpn': { audience: 'People who need ongoing free VPN access', strength: 'An ongoing Free plan without a data cap', price: 'Ongoing Free plan; paid upgrades have separate prices and features', description: 'Separates free VPN access from paid feature and location options. No additional numeric free entitlement is asserted here.' },
  surfshark: { audience: 'Households evaluating paid multi-device coverage', strength: 'Unlimited simultaneous devices on the paid subscription', price: 'Paid VPN; confirm current upfront term and renewal on the official page', description: 'Provides VPN apps and a paid unlimited-device offer. Trial device and purchase conditions differ from the continuing subscription.' },
  expressvpn: { audience: 'People whose devices and budget fit the current Basic offer', strength: 'A documented Basic offer with explicit upfront billing', price: 'Basic €2.49/month equivalent; €69.72 upfront for 28 months; renews €79.95/year', description: 'Provides VPN apps and plan-specific device and feature options. This page does not claim a connection-speed or streaming-access advantage.' },
  'private-internet-access': { audience: 'People evaluating a monthly VPN purchase', strength: 'A monthly purchase route without a long introductory term', price: 'US$11.95/month, auto-renews monthly at the same listed rate', description: 'Provides paid VPN access with monthly and longer subscription choices. Read the purchase-channel trial and refund terms separately.' },
  'adobe-premiere-pro': { audience: 'Desktop editors who can justify a paid editing workflow', strength: 'A desktop editing workflow with a temporary full-version trial', price: '7-day desktop trial; continuing paid price depends on the selected Adobe offer', description: 'Provides desktop video editing. The separate free mobile offer is not an ongoing free license for the desktop product discussed here.' },
  filmora: { audience: 'Editors evaluating a different editing workflow', strength: 'Editing evaluation before purchasing clean export access', price: 'Limited free editing with watermark; paid license required for watermark removal', description: 'Provides video editing with paid export and license distinctions. This page does not make a measured ease-of-use comparison with Premiere.' },
  'envato-elements': { audience: 'Creators needing licensed media for an existing editor', strength: 'Selected free files and a separate paid asset library', price: 'Selected free assets; full-library subscription requires payment; see current quote', description: 'Supplies creative assets rather than a timeline editor. Choose it to fill a media gap, not as a full replacement for Premiere editing.' },
  riverside: { audience: 'Creators recording interviews or separate participant tracks', strength: 'Recording and editing with a limited ongoing Free account', price: 'Ongoing Free account with restrictions; separate paid-plan trial', description: 'Provides recording and editing workflows. General recording access differs from separate high-quality track downloads.' },
  camtasia: { audience: 'People making screen recordings and edited walkthroughs', strength: 'Screen recording and desktop editing', price: 'Free desktop editing with watermarked export; paid upgrades separate', description: 'Provides screen recording and video editing. Verify the required capture and output workflow before replacing a general editor.' },
}

export function packageAlternativeTool(tool: Tool): Tool {
  const entry = copy[tool.slug]
  if (!entry) throw new Error(`Missing verified alternatives copy: ${tool.slug}`)
  const hosting = hostingOffers.find((offer) => offer.slug === tool.slug)
  const video = videoDesignFreeOptions.find((option) => option.slug === tool.slug)
  const caveat = hosting ? `${hosting.plan} ${hosting.trial} ${hosting.refund}`
    : video ? `${video.access} ${video.limits} ${video.commercial}`
    : 'Proton VPN is the ongoing no-data-cap free option in the linked free guide. Other entries are paid VPNs; trial and refund conditions depend on purchase channel. No speed or security ranking is claimed.'
  return { ...tool, bestFor: entry.audience, tagline: entry.strength, startingPrice: entry.price,
    whatItDoes: entry.description, strengths: [entry.strength], goodToKnow: caveat,
    decisionOverride: { audience: entry.audience, standout: entry.strength },
  }
}
