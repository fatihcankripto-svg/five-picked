import { publishedCategories as allCategories } from '@/data/all-categories'
import { blogPosts } from '@/lib/blog-pages'
import { reviews } from '@/data/reviews'
import { comparePages } from '@/lib/compare-pages'
import { freePages } from '@/lib/free-pages'
import { quizPages } from '@/lib/quiz-pages'
import { getAllAlternativePages } from '@/lib/alternatives'

export type ContentLink = { path: string; title: string; listPath: string }
const lists: ContentLink[] = allCategories.flatMap((c) => [
  { path: `/${c.slug}`, title: c.name, listPath: `/${c.slug}` },
  ...(c.subcategories ?? []).map((s) => ({ path: `/${c.slug}/${s.slug}`, title: `${c.name}: ${s.name}`, listPath: `/${c.slug}/${s.slug}` })),
])
function toolList(slug: string) {
  for (const c of allCategories) {
    if (c.tools?.some((t) => t.slug === slug)) return `/${c.slug}`
    for (const s of c.subcategories ?? []) if (s.tools.some((t) => t.slug === slug)) return `/${c.slug}/${s.slug}`
  }
  return ''
}
export const contentLinks: ContentLink[] = [
  ...lists,
  ...blogPosts.map((p) => ({ path: `/blog/${p.slug}`, title: p.title, listPath: p.relatedListPath })),
  ...reviews.map((p) => ({ path: `/reviews/${p.toolSlug}`, title: p.headline, listPath: toolList(p.toolSlug) })),
  ...comparePages.map((p) => ({ path: `/compare/${p.slug}`, title: `${p.a.name} vs ${p.b.name}`, listPath: p.listPath })),
  ...freePages.map((p) => ({ path: `/free/${p.slug}`, title: p.title, listPath: p.relatedListPath })),
  ...quizPages.map((p) => ({ path: `/quiz/${p.slug}`, title: p.metaTitle, listPath: p.listPath })),
  ...getAllAlternativePages().map((p) => ({ path: `/alternatives/${p.slug}`, title: `${p.tool.name} alternatives`, listPath: p.listPath })),
  { path: '/tools', title: 'Free planning calculators', listPath: '/tools' },
  { path: '/tools/text-to-speech-duration', title: 'Text-to-speech duration calculator', listPath: '/ai-tools/video-and-voice' },
  { path: '/tools/freelance-fee-calculator', title: 'Freelance fee calculator', listPath: '/freelance-platforms' },
]
function relevance(a: ContentLink, b: ContentLink) {
  const tokens = new Set(a.title.toLowerCase().split(/\W+/).filter((w) => w.length > 3))
  const words = b.title.toLowerCase().split(/\W+/).filter((w) => tokens.has(w)).length
  return (a.listPath === b.listPath ? 100 : 0) + (a.listPath.split('/')[1] === b.listPath.split('/')[1] ? 10 : 0) + words
}
const marketingFreePath = '/free/best-free-ai-marketing-and-seo-tools'
const marketingFreeReferrers: Record<string, string> = {
  '/ai-tools': 'Check free AI marketing access and trial restrictions',
  '/ai-tools/marketing-and-seo': 'Inspect free SEO accounts, credits and export limits',
  '/quiz/ai-tools-marketing-and-seo': 'Review the free access conditions behind your marketing match',
  '/blog/best-ai-tools-for-content-marketing': 'Check which content marketing features remain free',
  '/blog/semrush-vs-surfer-seo': 'Separate Semrush free research from Surfer trial access',
}
const seoComparePath = '/compare/semrush-vs-surfer-seo'
const seoCompareReferrers: Record<string, string> = {
  '/ai-tools': 'Choose a research or content optimization workflow',
  '/ai-tools/marketing-and-seo': 'Decide when Semrush or Surfer fits your work',
  '/free/best-free-ai-marketing-and-seo-tools': 'Apply these free limits to a Semrush or Surfer decision',
  '/quiz/ai-tools-marketing-and-seo': 'Check Semrush and Surfer plan fit before subscribing',
  '/blog/semrush-vs-surfer-seo': 'Use the concise Semrush–Surfer buying framework',
  '/blog/best-ai-tools-for-content-marketing': 'Compare research and article editing subscriptions',
}
const packageCompareLinks: Record<string, Record<string, string>> = {
  '/compare/make-vs-n8n': {
    '/software-and-productivity': 'Choose hosted automation or self-hosted workflow control',
    '/software-and-productivity/automation': 'Weigh Make scenarios against n8n deployment options',
    '/free/best-free-automation-tools': 'Apply free automation conditions to a Make or n8n choice',
    '/quiz/software-and-productivity-automation': 'Check the operating responsibilities behind your automation match',
  },
  '/compare/pcloud-vs-dropbox': {
    '/software-and-productivity': 'Compare personal storage commitments and file sharing',
    '/software-and-productivity/cloud-storage': 'Decide between pCloud and Dropbox for your files',
    '/free/best-free-cloud-storage': 'Compare pCloud’s unlocked allowance with Dropbox Basic',
    '/quiz/software-and-productivity-cloud-storage': 'Review storage and collaboration tradeoffs before choosing',
  },
  '/compare/skillshare-vs-masterclass': {
    '/online-courses': 'Choose project-led classes or instructor-led learning',
    '/free/best-free-online-course-platforms': 'Compare Skillshare trial access with a MasterClass Guest Pass',
    '/quiz/online-courses': 'Check the class format and certificate conditions behind your match',
    '/blog/skillshare-vs-masterclass': 'Use the concise Skillshare and MasterClass enrollment framework',
  },
}
const alternativePackageLinks: Record<string, Record<string, string>> = {
  '/alternatives/hostinger': {
    '/web-hosting-and-domains': 'Explore four hosting routes beyond Hostinger',
    '/free/best-free-web-hosting': 'Choose a Hostinger alternative by trial and renewal conditions',
    '/quiz/web-hosting-and-domains': 'Review the other hosting options before committing',
    '/compare/hostinger-vs-cloudways': 'See the broader Hostinger alternatives shortlist',
  },
  '/alternatives/nordvpn': {
    '/vpn-and-security': 'Consider other VPN plans before choosing NordVPN',
    '/free/vpns-with-a-free-plan': 'Find a NordVPN alternative by free access or billing needs',
    '/quiz/vpn-and-security': 'Inspect alternative VPN access and device choices',
    '/compare/expressvpn-vs-nordvpn': 'Compare the wider set of NordVPN alternatives',
  },
  '/alternatives/adobe-premiere-pro': {
    '/video-and-design-software': 'Choose another tool for the part of production you need',
    '/free/best-free-video-and-design-software': 'Evaluate alternatives to Premiere by export and licensing limits',
    '/quiz/video-and-design-software': 'Review other editing, recording and media options',
    '/compare/capcut-vs-premiere-pro': 'Explore the wider Premiere alternatives by production task',
  },
}
const secondCompareLinks: Record<string, Record<string, string>> = {
  '/compare/monday-com-vs-asana': {
    '/software-and-productivity': 'Choose a board-centered or task-centered project workflow',
    '/software-and-productivity/project-management': 'Compare monday.com and Asana by plan and process',
    '/free/best-free-project-management-tools': 'Evaluate monday.com and Asana before buying team seats',
    '/quiz/software-and-productivity-project-management': 'Check the project workflow and billing behind your match',
  },
  '/compare/neuronwriter-vs-frase': {
    '/ai-tools': 'Choose between content optimization and a publishing workflow',
    '/ai-tools/marketing-and-seo': 'Weigh NeuronWriter against Frase for your content process',
    '/free/best-free-ai-marketing-and-seo-tools': 'Apply the verified trial conditions to NeuronWriter and Frase',
    '/quiz/ai-tools-marketing-and-seo': 'Review entry-plan fit before choosing a content platform',
    '/blog/best-ai-tools-for-content-marketing': 'Compare the NeuronWriter and Frase buying decision',
  },
  '/compare/upwork-vs-freelancer-com': {
    '/freelance-platforms': 'Choose a marketplace by proposal, fee and payout conditions',
    '/free/best-free-freelance-platforms': 'Apply these freelancer costs to Upwork or Freelancer.com',
    '/quiz/freelance-platforms': 'Check the marketplace economics behind your recommendation',
    '/blog/real-cost-of-freelancing-2026': 'Use the Upwork and Freelancer.com decision framework',
  },
}
const packageReviewLinks: Record<string, Record<string, string>> = {
  '/reviews/nordvpn': {
    '/vpn-and-security': 'Read the NordVPN offer and fit assessment',
    '/free/vpns-with-a-free-plan': 'Check NordVPN’s paid-access decision in detail',
    '/quiz/vpn-and-security': 'Review NordVPN billing and plan boundaries before subscribing',
    '/compare/expressvpn-vs-nordvpn': 'Inspect the full NordVPN source-based review',
    '/alternatives/nordvpn': 'Revisit NordVPN’s documented strengths and limitations',
  },
  '/reviews/hostinger': {
    '/web-hosting-and-domains': 'Read the Hostinger pricing and suitability review',
    '/free/best-free-web-hosting': 'Assess the Hostinger introductory term and refund conditions',
    '/quiz/web-hosting-and-domains': 'Review Hostinger’s purchase commitment before choosing',
    '/compare/hostinger-vs-cloudways': 'Inspect Hostinger’s documented offer in more detail',
    '/alternatives/hostinger': 'Check whether Hostinger itself fits your site requirements',
  },
  '/reviews/semrush': {
    '/ai-tools': 'Read the Semrush research-toolkit review',
    '/ai-tools/marketing-and-seo': 'Assess Semrush pricing, access and reporting constraints',
    '/free/best-free-ai-marketing-and-seo-tools': 'Review Semrush’s ongoing account and toolkit boundaries',
    '/quiz/ai-tools-marketing-and-seo': 'Check Semrush plan fit before purchasing a toolkit',
    '/compare/semrush-vs-surfer-seo': 'Inspect the full Semrush source-based assessment',
  },
}
const secondReviewLinks: Record<string, Record<string, string>> = {
  "/reviews/kiwi-com": {
    "/travel": "Read the full Kiwi.com purchase assessment",
    "/travel/flights": "Check Kiwi.com access and billing in detail",
    "/free/best-free-flight-booking-sites": "Inspect Kiwi.com conditions before committing",
    "/quiz/travel-flights": "Review whether Kiwi.com fits your requirements",
    "/compare/kiwi-com-vs-trip-com": "Explore the source-based Kiwi.com review"
  },
  "/reviews/surfer-seo": {
    "/ai-tools": "Read the full Surfer SEO purchase assessment",
    "/ai-tools/marketing-and-seo": "Check Surfer SEO access and billing in detail",
    "/free/best-free-ai-marketing-and-seo-tools": "Inspect Surfer SEO conditions before committing",
    "/quiz/ai-tools-marketing-and-seo": "Review whether Surfer SEO fits your requirements",
    "/compare/semrush-vs-surfer-seo": "Explore the source-based Surfer SEO review"
  },
  "/reviews/expressvpn": {
    "/vpn-and-security": "Read the full ExpressVPN purchase assessment",
    "/free/vpns-with-a-free-plan": "Check ExpressVPN access and billing in detail",
    "/quiz/vpn-and-security": "Inspect ExpressVPN conditions before committing",
    "/compare/expressvpn-vs-nordvpn": "Review whether ExpressVPN fits your requirements"
  }
}
const thirdCompareLinks: Record<string, Record<string, string>> = {
  "/compare/clickup-vs-monday-com": {
    "/software-and-productivity": "Choose between ClickUp and monday.com by your workflow",
    "/free/best-free-project-management-tools": "Apply these access conditions to the ClickUp and monday.com decision",
    "/quiz/software-and-productivity-project-management": "Check the ClickUp and monday.com buying framework",
    "/software-and-productivity/project-management": "Compare ClickUp and monday.com before committing"
  },
  "/compare/fireflies-vs-otter": {
    "/ai-tools": "Choose between Fireflies and Otter by your workflow",
    "/free/best-free-ai-meeting-note-takers": "Apply these access conditions to the Fireflies and Otter decision",
    "/quiz/ai-tools-meeting-notes": "Check the Fireflies and Otter buying framework",
    "/blog/fireflies-vs-fathom": "Compare Fireflies and Otter before committing",
    "/ai-tools/meeting-notes": "Explore the full Fireflies and Otter decision criteria"
  },
  "/compare/filmora-vs-camtasia": {
    "/free/best-free-video-and-design-software": "Choose between Filmora and Camtasia by your workflow",
    "/quiz/video-and-design-software": "Apply these access conditions to the Filmora and Camtasia decision",
    "/blog/best-video-editing-software-for-youtube": "Check the Filmora and Camtasia buying framework",
    "/video-and-design-software": "Compare Filmora and Camtasia before committing"
  }
}
const hostingIndexPath = '/blog/2026-web-hosting-price-index'
const hostingIndexReferrers: Record<string, string> = {
  "/web-hosting-and-domains": "Inspect the ten-provider hosting price index",
  "/free/best-free-web-hosting": "Compare entry rates with renewal and included-service costs",
  "/blog/kinsta-vs-cloudways": "Check the wider hosting price dataset and renewal method",
  "/compare/hostinger-vs-cloudways": "Review the official ten-provider price snapshot",
  "/reviews/cloudways": "Place Cloudways billing in the hosting price index",
  "/reviews/hostinger": "See Hostinger\u2019s term and renewal alongside other providers"
}
const vpnIndexPath = '/blog/2026-vpn-price-index'
const vpnIndexReferrers: Record<string, string> = {
  "/vpn-and-security": "Inspect the ten-provider VPN price and renewal dataset",
  "/free/vpns-with-a-free-plan": "Compare free access with paid VPN billing commitments",
  "/compare/expressvpn-vs-nordvpn": "Check the wider VPN renewal-price snapshot",
  "/reviews/nordvpn": "Place NordVPN\u2019s offer in the ten-provider cost index",
  "/reviews/expressvpn": "Review ExpressVPN\u2019s billing interval alongside other VPNs",
  "/alternatives/nordvpn": "Examine the official-source VPN price dataset"
}
const courseIndexPath = '/blog/2026-online-course-price-index'
const courseIndexReferrers: Record<string, string> = {
  "/online-courses": "Inspect the ten-platform course price and certificate index",
  "/free/best-free-online-course-platforms": "Compare free learning with subscription and certificate costs",
  "/compare/coursera-vs-datacamp": "Place these course subscriptions in the wider price dataset",
  "/blog/skillshare-vs-masterclass": "Check annual payments and credential boundaries across ten platforms"
}
function sameTopic(a: ContentLink, b: ContentLink) {
  if (a.path === courseIndexPath || b.path === courseIndexPath) return Boolean(courseIndexReferrers[a.path === courseIndexPath ? b.path : a.path])
  if (a.path === vpnIndexPath || b.path === vpnIndexPath) return Boolean(vpnIndexReferrers[a.path === vpnIndexPath ? b.path : a.path])
  if (a.path === hostingIndexPath || b.path === hostingIndexPath) return Boolean(hostingIndexReferrers[a.path === hostingIndexPath ? b.path : a.path])
  for (const [target, sources] of Object.entries(thirdCompareLinks)) {
    if (a.path === target || b.path === target) return Boolean(sources[a.path === target ? b.path : a.path])
  }
  for (const [target, sources] of Object.entries(secondReviewLinks)) {
    if (a.path === target || b.path === target) return Boolean(sources[a.path === target ? b.path : a.path])
  }
  for (const [target, sources] of Object.entries(packageReviewLinks)) {
    if (a.path === target || b.path === target) return Boolean(sources[a.path === target ? b.path : a.path])
  }
  for (const [target, sources] of Object.entries(secondCompareLinks)) {
    if (a.path === target || b.path === target) return Boolean(sources[a.path === target ? b.path : a.path])
  }
  for (const [target, sources] of Object.entries(alternativePackageLinks)) {
    if (a.path === target || b.path === target) return Boolean(sources[a.path === target ? b.path : a.path])
  }
  for (const [target, sources] of Object.entries(packageCompareLinks)) {
    if (a.path === target || b.path === target) return Boolean(sources[a.path === target ? b.path : a.path])
  }
  if (a.path === seoComparePath || b.path === seoComparePath) return Boolean(seoCompareReferrers[a.path === seoComparePath ? b.path : a.path])
  if (a.path === marketingFreePath || b.path === marketingFreePath) return Boolean(marketingFreeReferrers[a.path === marketingFreePath ? b.path : a.path])
  // The calculator directory may link its calculators across their topics.
  if ((a.path === '/tools' && b.path.startsWith('/tools/')) || (b.path === '/tools' && a.path.startsWith('/tools/'))) return true
  return Boolean(a.listPath && b.listPath) && a.listPath.split('/')[1] === b.listPath.split('/')[1]
}
const graph = new Map<string, Set<string>>(contentLinks.map((p) => [p.path, new Set<string>()]))
for (const page of contentLinks) {
  const related = contentLinks.filter((p) => p.path !== page.path && sameTopic(page, p)).sort((a, b) => relevance(page, b) - relevance(page, a) || a.path.localeCompare(b.path))
  for (const link of related.slice(0, 4)) graph.get(page.path)!.add(link.path)
}
// Seek three distinct referring pages within the topic; never pad a small cluster with unrelated links.
for (const target of contentLinks) {
  let incoming = [...graph.values()].filter((links) => links.has(target.path)).length
  const sources = contentLinks.filter((p) => p.path !== target.path && sameTopic(target, p)).sort((a, b) => relevance(target, b) - relevance(target, a) || graph.get(a.path)!.size - graph.get(b.path)!.size || a.path.localeCompare(b.path))
  for (const source of sources) {
    if (incoming >= 3) break
    const links = graph.get(source.path)!
    if (!links.has(target.path)) { links.add(target.path); incoming++ }
  }
}
// Keep the VPN topic cluster connected across its existing editorial formats.
const vpnPages = contentLinks.filter((page) => page.listPath === '/vpn-and-security' && page.path !== vpnIndexPath)
for (const source of vpnPages) {
  for (const target of vpnPages) {
    if (source.path !== target.path) graph.get(source.path)!.add(target.path)
  }
}
const languageFreePath = '/free/best-free-language-learning-apps'
const languageFreeReferrers: Record<string, string> = {
  '/language-learning': 'Check free language practice and trial limits',
  '/blog/preply-vs-lingoda': 'Explore no-cost language resources before booking lessons',
  '/quiz/language-learning': 'Review free previews before choosing a paid service',
  '/compare/babbel-vs-italki': 'See what language-learning access is genuinely free',
  '/reviews/babbel': 'Compare Babbel’s free lessons with other starter options',
}
for (const source of Object.keys(languageFreeReferrers)) {
  graph.get(source)?.add(languageFreePath)
  graph.get(languageFreePath)?.add(source)
}
const freelanceFreePath = '/free/best-free-freelance-platforms'
const freelanceFreeReferrers: Record<string, string> = {
  '/freelance-platforms': 'Check free account limits and the real cost of freelancing',
  '/quiz/freelance-platforms': 'Review marketplace fees before following your match',
  '/compare/fiverr-vs-upwork': 'Compare free access and payout conditions across five platforms',
  '/tools/freelance-fee-calculator': 'Check the official fee conditions behind your estimate',
}
for (const source of Object.keys(freelanceFreeReferrers)) {
  graph.get(source)?.add(freelanceFreePath)
  graph.get(freelanceFreePath)?.add(source)
}
const freelanceBlogPath = '/blog/real-cost-of-freelancing-2026'
const freelanceBlogReferrers: Record<string, string> = {
  '/freelance-platforms': 'Understand the full cost of finding work and getting paid',
  '/free/best-free-freelance-platforms': 'See how the verified fees affect example invoices',
  '/compare/fiverr-vs-upwork': 'Read the broader analysis of freelance platform costs',
  '/quiz/freelance-platforms': 'Check commission and payout tradeoffs before signing up',
  '/tools/freelance-fee-calculator': 'Understand the assumptions behind take-home calculations',
}
for (const source of Object.keys(freelanceBlogReferrers)) {
  graph.get(source)?.add(freelanceBlogPath)
  graph.get(freelanceBlogPath)?.add(source)
}
const emailBlogPath = '/blog/real-cost-of-email-marketing-2026'
const emailBlogReferrers: Record<string, string> = {
  '/email-marketing': 'Understand email pricing, delivery and feature limits',
  '/free/best-free-email-marketing-tools': 'See how these limits affect newsletters and online shops',
  '/compare/mailerlite-vs-kit': 'Explore the wider cost of email marketing platforms',
  '/quiz/email-marketing': 'Check the cost and delivery assumptions behind your choice',
}
for (const source of Object.keys(emailBlogReferrers)) {
  graph.get(source)?.add(emailBlogPath)
  graph.get(emailBlogPath)?.add(source)
}
const flightFreePath = '/free/best-free-flight-booking-sites'
const flightFreeReferrers: Record<string, string> = {
  '/travel': 'Check what flight search and booking really cost',
  '/travel/flights': 'Compare free search, price alerts and booking fees',
  '/quiz/travel-flights': 'Review cancellation and fee conditions before booking your match',
}
for (const source of Object.keys(flightFreeReferrers)) {
  graph.get(source)?.add(flightFreePath)
  graph.get(flightFreePath)?.add(source)
}
const flightComparePath = '/compare/kiwi-com-vs-trip-com'
const flightCompareReferrers: Record<string, string> = {
  '/travel': 'Choose between Kiwi.com and Trip.com for your journey',
  '/travel/flights': 'Weigh separate-airline routes against fare conditions',
  '/free/best-free-flight-booking-sites': 'Apply these flight fees to a Kiwi.com or Trip.com decision',
  '/quiz/travel-flights': 'Check whether Kiwi.com or Trip.com fits your result',
}
for (const source of Object.keys(flightCompareReferrers)) {
  graph.get(source)?.add(flightComparePath)
  graph.get(flightComparePath)?.add(source)
}
for (const source of Object.keys(marketingFreeReferrers)) {
  graph.get(source)?.add(marketingFreePath)
  graph.get(marketingFreePath)?.add(source)
}
for (const source of Object.keys(seoCompareReferrers)) {
  graph.get(source)?.add(seoComparePath)
  graph.get(seoComparePath)?.add(source)
}
for (const [target, sources] of Object.entries(packageCompareLinks)) {
  for (const source of Object.keys(sources)) {
    graph.get(source)?.add(target)
    graph.get(target)?.add(source)
  }
}
for (const [target, sources] of Object.entries(alternativePackageLinks)) {
  for (const source of Object.keys(sources)) {
    graph.get(source)?.add(target)
    graph.get(target)?.add(source)
  }
}
for (const [target, sources] of Object.entries(secondCompareLinks)) {
  for (const source of Object.keys(sources)) {
    graph.get(source)?.add(target)
    graph.get(target)?.add(source)
  }
}
for (const [target, sources] of Object.entries(packageReviewLinks)) {
  for (const source of Object.keys(sources)) {
    graph.get(source)?.add(target)
    graph.get(target)?.add(source)
  }
}
for (const [target, sources] of Object.entries(secondReviewLinks)) {
  for (const source of Object.keys(sources)) {
    graph.get(source)?.add(target)
    graph.get(target)?.add(source)
  }
}
for (const [target, sources] of Object.entries(thirdCompareLinks)) {
  for (const source of Object.keys(sources)) {
    graph.get(source)?.add(target)
    graph.get(target)?.add(source)
  }
}
for (const source of Object.keys(hostingIndexReferrers)) {
  graph.get(source)?.add(hostingIndexPath)
  graph.get(hostingIndexPath)?.add(source)
}
function hostingPriceIndexLabel(path: string) {
  return blogPosts.find((post) => `/blog/${post.slug}` === hostingIndexPath)?.relatedLinks.find((link) => link.path === path)?.label
}
for (const source of Object.keys(vpnIndexReferrers)) {
  graph.get(source)?.add(vpnIndexPath)
  graph.get(vpnIndexPath)?.add(source)
}
for (const source of Object.keys(courseIndexReferrers)) {
  graph.get(source)?.add(courseIndexPath)
  graph.get(courseIndexPath)?.add(source)
}
// The content marketing article also belongs to the AI pillar's buying journey.
graph.get('/ai-tools')?.add('/blog/best-ai-tools-for-content-marketing')

export function getContentLinks(path: string) {
  const links = graph.get(path)
  return contentLinks.filter((p) => links?.has(p.path)).map((page) => {
    if (path === '/ai-tools' && page.path === '/blog/best-ai-tools-for-content-marketing') return { ...page, title: 'Choose AI tools for your content marketing workflow' }
    if (page.path === courseIndexPath && courseIndexReferrers[path]) return { ...page, title: courseIndexReferrers[path] }
    if (path === courseIndexPath) return { ...page, title: blogPosts.find((post) => `/blog/${post.slug}` === path)?.relatedLinks.find((link) => link.path === page.path)?.label ?? page.title }
    if (page.path === vpnIndexPath && vpnIndexReferrers[path]) return { ...page, title: vpnIndexReferrers[path] }
    if (path === vpnIndexPath) return { ...page, title: blogPosts.find((post) => `/blog/${post.slug}` === path)?.relatedLinks.find((link) => link.path === page.path)?.label ?? page.title }
    if (page.path === hostingIndexPath && hostingIndexReferrers[path]) return { ...page, title: hostingIndexReferrers[path] }
    if (path === hostingIndexPath) return { ...page, title: hostingPriceIndexLabel(page.path) ?? page.title }
    if (thirdCompareLinks[page.path]?.[path]) return { ...page, title: thirdCompareLinks[page.path][path] }
    if (thirdCompareLinks[path]?.[page.path]) {
      const compare = comparePages.find((entry) => `/compare/${entry.slug}` === path)
      return { ...page, title: compare?.relatedLinks?.find((link) => link.path === page.path)?.label ?? compare?.listLabel ?? page.title }
    }
    if (secondReviewLinks[page.path]?.[path]) return { ...page, title: secondReviewLinks[page.path][path] }
    if (secondReviewLinks[path]?.[page.path]) {
      const review = reviews.find((review) => `/reviews/${review.toolSlug}` === path)
      return { ...page, title: review?.related.find((link) => link.href === page.path)?.label ?? page.title }
    }
    if (packageReviewLinks[page.path]?.[path]) return { ...page, title: packageReviewLinks[page.path][path] }
    if (packageReviewLinks[path]?.[page.path]) return { ...page, title: `Continue your research: ${page.title}` }
    if (secondCompareLinks[page.path]?.[path]) return { ...page, title: secondCompareLinks[page.path][path] }
    if (secondCompareLinks[path]?.[page.path]) {
      const labels: Record<string, string> = {
        '/software-and-productivity': 'Browse the wider productivity categories',
        '/software-and-productivity/project-management': 'See the full project management shortlist',
        '/free/best-free-project-management-tools': 'Inspect the existing free project management guide',
        '/quiz/software-and-productivity-project-management': 'Match a project tool to your team’s work',
        '/ai-tools': 'Explore the broader AI tool categories',
        '/ai-tools/marketing-and-seo': 'Review all five marketing and SEO platforms',
        '/free/best-free-ai-marketing-and-seo-tools': 'Check the underlying AI access and trial observations',
        '/quiz/ai-tools-marketing-and-seo': 'Find a content tool for your working needs',
        '/blog/best-ai-tools-for-content-marketing': 'Read the broader content marketing workflow analysis',
        '/freelance-platforms': 'Compare all five freelance marketplaces',
        '/free/best-free-freelance-platforms': 'Inspect the verified account, proposal and payout conditions',
        '/quiz/freelance-platforms': 'Match a marketplace to how you work',
        '/blog/real-cost-of-freelancing-2026': 'Explore the full cost of finding freelance work',
      }
      return { ...page, title: labels[page.path] }
    }
    if (alternativePackageLinks[page.path]?.[path]) return { ...page, title: alternativePackageLinks[page.path][path] }
    if (alternativePackageLinks[path]?.[page.path]) return { ...page, title: `Continue with ${page.title}` }
    if (packageCompareLinks[page.path]?.[path]) return { ...page, title: packageCompareLinks[page.path][path] }
    if (packageCompareLinks[path]?.[page.path]) {
      const labels: Record<string, string> = {
        '/software-and-productivity': 'Explore the productivity tool categories',
        '/software-and-productivity/automation': 'See all five automation options',
        '/free/best-free-automation-tools': 'Inspect the existing free automation access guide',
        '/quiz/software-and-productivity-automation': 'Match an automation platform to your responsibilities',
        '/software-and-productivity/cloud-storage': 'Browse the complete cloud storage shortlist',
        '/free/best-free-cloud-storage': 'Check the underlying free storage allowances',
        '/quiz/software-and-productivity-cloud-storage': 'Find a storage service for your sharing needs',
        '/online-courses': 'Explore the full online learning shortlist',
        '/free/best-free-online-course-platforms': 'Read the verified course trial and certificate conditions',
        '/quiz/online-courses': 'Match a learning platform to your goals',
        '/blog/skillshare-vs-masterclass': 'Read the deeper Skillshare and MasterClass learning analysis',
      }
      return { ...page, title: labels[page.path] }
    }
    if (page.path === seoComparePath && seoCompareReferrers[path]) return { ...page, title: seoCompareReferrers[path] }
    if (path === seoComparePath && page.path === '/ai-tools') return { ...page, title: 'Browse the broader AI tools category' }
    if (path === seoComparePath && page.path === '/ai-tools/marketing-and-seo') return { ...page, title: 'Explore all five marketing and SEO options' }
    if (path === seoComparePath && page.path === marketingFreePath) return { ...page, title: 'Check the underlying free accounts, trials and credit limits' }
    if (path === seoComparePath && page.path === '/quiz/ai-tools-marketing-and-seo') return { ...page, title: 'Find an AI marketing tool for your working needs' }
    if (path === seoComparePath && page.path === '/blog/semrush-vs-surfer-seo') return { ...page, title: 'Read the deeper Semrush and Surfer workflow analysis' }
    if (path === seoComparePath && page.path === '/blog/best-ai-tools-for-content-marketing') return { ...page, title: 'See how research and writing fit a content marketing stack' }
    if (page.path === marketingFreePath && marketingFreeReferrers[path]) return { ...page, title: marketingFreeReferrers[path] }
    if (path === marketingFreePath && page.path === '/ai-tools') return { ...page, title: 'Explore the wider AI tools category' }
    if (path === marketingFreePath && page.path === '/ai-tools/marketing-and-seo') return { ...page, title: 'See all five marketing and SEO tools in context' }
    if (path === marketingFreePath && page.path === '/quiz/ai-tools-marketing-and-seo') return { ...page, title: 'Match an AI marketing tool to your workflow' }
    if (path === marketingFreePath && page.path === '/blog/best-ai-tools-for-content-marketing') return { ...page, title: 'Read the content marketing workflow guide' }
    if (path === marketingFreePath && page.path === '/blog/semrush-vs-surfer-seo') return { ...page, title: 'Understand Semrush and Surfer’s different roles' }
    if (page.path === flightComparePath && flightCompareReferrers[path]) return { ...page, title: flightCompareReferrers[path] }
    if (path === flightComparePath && page.path === '/travel') return { ...page, title: 'Browse the broader travel planning category' }
    if (path === flightComparePath && page.path === '/travel/flights') return { ...page, title: 'Compare all five shortlisted flight booking sites' }
    if (path === flightComparePath && page.path === flightFreePath) return { ...page, title: 'Read the verified free search and booking fee breakdown' }
    if (path === flightComparePath && page.path === '/quiz/travel-flights') return { ...page, title: 'Match a flight booking site to your priorities' }
    if (page.path === flightFreePath && flightFreeReferrers[path]) return { ...page, title: flightFreeReferrers[path] }
    if (path === flightFreePath && page.path === '/travel') return { ...page, title: 'Explore the wider travel planning category' }
    if (path === flightFreePath && page.path === '/travel/flights') return { ...page, title: 'See our five flight booking sites in context' }
    if (path === flightFreePath && page.path === '/quiz/travel-flights') return { ...page, title: 'Find a booking site for your travel priorities' }
    if (page.path === emailBlogPath && emailBlogReferrers[path]) return { ...page, title: emailBlogReferrers[path] }
    if (page.path === freelanceBlogPath && freelanceBlogReferrers[path]) return { ...page, title: freelanceBlogReferrers[path] }
    if (page.path === freelanceFreePath && freelanceFreeReferrers[path]) return { ...page, title: freelanceFreeReferrers[path] }
    if (page.path === languageFreePath && languageFreeReferrers[path]) return { ...page, title: languageFreeReferrers[path] }
    if (path === '/travel/flights' && page.path === '/travel') return { ...page, title: 'Explore our travel planning shortlist' }
    if (path === '/travel/flights' && page.path === '/quiz/travel-flights') return { ...page, title: 'Find a flight booking site for your trip' }
    return page
  })
}
