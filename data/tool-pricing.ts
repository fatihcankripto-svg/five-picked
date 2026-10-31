/** Official pricing observations checked on 2026-10-31. Amounts retain their source currency and billing basis. */
export type PricingFact = {
  label: string
  sourceUrl: string
  kind: 'amount' | 'free' | 'trial' | 'variable'
  checkedAt: string
}
export const verifiedPricing: Record<string, PricingFact> = {
  "pictory": {
    "label": "Free trial; from $25/mo, billed annually",
    "sourceUrl": "https://pictory.ai/pricing/",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "synthesia": {
    "label": "Free plan available",
    "sourceUrl": "https://help.synthesia.io/en/articles/17217419-what-s-changing-in-synthesia-plans-on-october-1-2026",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "fliki": {
    "label": "Free plan available",
    "sourceUrl": "https://fliki.ai/pricing",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "elevenlabs": {
    "label": "Free plan; paid from $6/mo",
    "sourceUrl": "https://elevenlabs.io/pricing",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "adobe-firefly": {
    "label": "From US$9.99/mo, billed monthly; free trial",
    "sourceUrl": "https://www.adobe.com/products/firefly/plans.html",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "ideogram": {
    "label": "Free plan available",
    "sourceUrl": "https://ideogram.ai/pricing/",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "krea": {
    "label": "Free plan available",
    "sourceUrl": "https://www.krea.ai/pricing",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "fireflies": {
    "label": "Free plan; Pro from $10/seat/mo, billed annually",
    "sourceUrl": "https://fireflies.ai/pricing",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "fathom": {
    "label": "Free plan; Premium $20/user/mo, billed monthly",
    "sourceUrl": "https://www.fathom.ai/pricing",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "otter": {
    "label": "Free plan; Pro $16.99/user/mo, billed monthly",
    "sourceUrl": "https://otter.ai/pricing",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "notta": {
    "label": "Free plan; Pro $8.17/mo, billed annually",
    "sourceUrl": "https://www.notta.ai/en/pricing",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "neuronwriter": {
    "label": "Free trial; Bronze $23/mo, billed monthly",
    "sourceUrl": "https://neuronwriter.com/pricing-neuron/",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "frase": {
    "label": "Free trial; Starter $39/mo, billed yearly",
    "sourceUrl": "https://www.frase.io/pricing",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "writesonic": {
    "label": "Starter from $79/mo, billed annually",
    "sourceUrl": "https://writesonic.com/pricing",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "tidio": {
    "label": "Free plan; 7-day free trial of paid features",
    "sourceUrl": "https://www.tidio.com/pricing/",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "chatbase": {
    "label": "Hobby $40/mo, billed monthly ($32/mo annually)",
    "sourceUrl": "https://www.chatbase.co/pricing",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "botpress": {
    "label": "Free plan available",
    "sourceUrl": "https://botpress.com/pricing",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "cloudways": {
    "label": "Free trial; hosting from US$11/mo",
    "sourceUrl": "https://www.cloudways.com/en/pricing.php",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "nordvpn": {
    "label": "Basic €14.99/mo, billed monthly; longer-term offers available",
    "sourceUrl": "https://nordvpn.com/pricing/",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "surfshark": {
    "label": "From €2.49/mo; €67.23 upfront for 27-month intro",
    "sourceUrl": "https://surfshark.com/pricing",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "expressvpn": {
    "label": "Basic from €2.49/mo; €69.72 upfront for 28-month intro",
    "sourceUrl": "https://www.expressvpn.com/pricing",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "proton-vpn": {
    "label": "Free plan available",
    "sourceUrl": "https://protonvpn.com/pricing",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "private-internet-access": {
    "label": "$11.95/mo, billed monthly; longer-term offers available",
    "sourceUrl": "https://www.privateinternetaccess.com/buy-vpn-online",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "coursera": {
    "label": "Coursera Plus $59/mo; 7-day trial; courses priced separately",
    "sourceUrl": "https://www.coursera.org/courseraplus",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "datacamp": {
    "label": "Free Basic; Premium $14/mo annual-billing offer",
    "sourceUrl": "https://www.datacamp.com/pricing",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "skillshare": {
    "label": "$13.99/mo equivalent; $167.88 billed annually",
    "sourceUrl": "https://www.skillshare.com/en/pricing",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "mailerlite": {
    "label": "Free plan available",
    "sourceUrl": "https://www.mailerlite.com/pricing",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "kit": {
    "label": "Free plan available",
    "sourceUrl": "https://kit.com/pricing",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "getresponse": {
    "label": "Free trial; from $15.58/mo, paid annually",
    "sourceUrl": "https://www.getresponse.com/pricing",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "beehiiv": {
    "label": "Free plan available",
    "sourceUrl": "https://www.beehiiv.com/pricing",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "systeme-io": {
    "label": "Free plan available",
    "sourceUrl": "https://systeme.io/pricing",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "adobe-premiere-pro": {
    "label": "Free trial; US$22.99/mo, annual commitment billed monthly",
    "sourceUrl": "https://www.adobe.com/products/premiere/plans.html",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "riverside": {
    "label": "Free plan available",
    "sourceUrl": "https://riverside.com/pricing",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "craft": {
    "label": "Free Starter plan available",
    "sourceUrl": "https://www.craft.do/pricing",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "capacities": {
    "label": "Free Basic plan available",
    "sourceUrl": "https://capacities.io/pricing",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "evernote": {
    "label": "Free plan; paid plans offer a free trial",
    "sourceUrl": "https://evernote.com/compare-plans",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "clickup": {
    "label": "Free plan; Unlimited $9/user/mo annual-billing offer",
    "sourceUrl": "https://clickup.com/pricing",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "monday-com": {
    "label": "Free plan available",
    "sourceUrl": "https://monday.com/pricing",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "asana": {
    "label": "Free Personal; Starter $10.99/user/mo, billed annually",
    "sourceUrl": "https://asana.com/pricing",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "wrike": {
    "label": "Free plan; Team $10/user/mo (2–15 users)",
    "sourceUrl": "https://www.wrike.com/price/",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "teamwork": {
    "label": "14-day free trial available",
    "sourceUrl": "https://www.teamwork.com/pricing/",
    "kind": "trial",
    "checkedAt": "2026-10-31"
  },
  "sync-com": {
    "label": "30-day free trial available",
    "sourceUrl": "https://www.sync.com/pricing/",
    "kind": "trial",
    "checkedAt": "2026-10-31"
  },
  "proton-drive": {
    "label": "Free plan; Drive Plus $4.99/mo, billed monthly",
    "sourceUrl": "https://proton.me/drive/pricing",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "icedrive": {
    "label": "Free 10 GB plan available",
    "sourceUrl": "https://icedrive.net/plans",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "gamma": {
    "label": "Free plan available",
    "sourceUrl": "https://gamma.app/pricing",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "beautiful-ai": {
    "label": "Free trial; Pro $14.50/mo, billed annually",
    "sourceUrl": "https://www.beautiful.ai/pricing",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "pitch": {
    "label": "Free plan available",
    "sourceUrl": "https://pitch.com/pricing",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "visme": {
    "label": "Free plan; Starter $12.25/person/mo, billed annually",
    "sourceUrl": "https://www.visme.co/pricing/",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "n8n": {
    "label": "Cloud free trial; Starter €20/mo, billed annually",
    "sourceUrl": "https://n8n.io/pricing/",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "activepieces": {
    "label": "Free plan; paid from $20/mo, billed monthly",
    "sourceUrl": "https://www.activepieces.com/pricing",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "lingoda": {
    "label": "7-day free trial; lesson price depends on class plan",
    "sourceUrl": "https://www.lingoda.com/en/pricing/",
    "kind": "trial",
    "checkedAt": "2026-10-31"
  },
  "preply": {
    "label": "Tutor-set lesson prices; English listings from $3",
    "sourceUrl": "https://preply.com/en/online/english-tutors",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "eat-this-much": {
    "label": "Free plan available",
    "sourceUrl": "https://www.eatthismuch.com/pricing",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "fiit": {
    "label": "Free trial; $9.99/mo equivalent, $119.99 billed yearly",
    "sourceUrl": "https://fiit.tv/pricing",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "kiwi-com": {
    "label": "Flight prices vary by route, date and fare",
    "sourceUrl": "https://www.kiwi.com/en/",
    "kind": "variable",
    "checkedAt": "2026-10-31"
  },
  "edreams": {
    "label": "Flight prices vary by route, date and fare",
    "sourceUrl": "https://www.edreams.com/",
    "kind": "variable",
    "checkedAt": "2026-10-31"
  },
  "cheapoair": {
    "label": "Flight prices vary by route, date and fare",
    "sourceUrl": "https://www.cheapoair.com/",
    "kind": "variable",
    "checkedAt": "2026-10-31"
  },
  "alternative-airlines": {
    "label": "Flight prices vary by route, date and fare",
    "sourceUrl": "https://www.alternativeairlines.com/",
    "kind": "variable",
    "checkedAt": "2026-10-31"
  },
  "trip-com": {
    "label": "Flight prices vary by route, date and fare",
    "sourceUrl": "https://www.trip.com/",
    "kind": "variable",
    "checkedAt": "2026-10-31"
  },
  "viator": {
    "label": "Ticket prices vary by activity, date and party size",
    "sourceUrl": "https://www.viator.com/",
    "kind": "variable",
    "checkedAt": "2026-10-31"
  },
  "getyourguide": {
    "label": "Ticket prices vary by activity, date and party size",
    "sourceUrl": "https://www.getyourguide.com/",
    "kind": "variable",
    "checkedAt": "2026-10-31"
  },
  "tiqets": {
    "label": "Ticket prices vary by activity, date and party size",
    "sourceUrl": "https://www.tiqets.com/en/",
    "kind": "variable",
    "checkedAt": "2026-10-31"
  },
  "flixbus": {
    "label": "Bus fares vary by route and departure",
    "sourceUrl": "https://www.flixbus.com/",
    "kind": "variable",
    "checkedAt": "2026-10-31"
  },
  "europcar": {
    "label": "Rental rates vary by location, dates and vehicle",
    "sourceUrl": "https://www.europcar.com/en-us",
    "kind": "variable",
    "checkedAt": "2026-10-31"
  },
  "rentcars": {
    "label": "Rental rates vary by supplier, dates and vehicle",
    "sourceUrl": "https://www.rentcars.com/en/",
    "kind": "variable",
    "checkedAt": "2026-10-31"
  },
  "fanatical": {
    "label": "Pay per game or bundle; sale prices vary",
    "sourceUrl": "https://www.fanatical.com/en/",
    "kind": "variable",
    "checkedAt": "2026-10-31"
  },
  "back-market": {
    "label": "Pay per device; price varies by model and condition",
    "sourceUrl": "https://www.backmarket.com/en-us",
    "kind": "variable",
    "checkedAt": "2026-10-31"
  },
  "openart": {
    "label": "7-day trial with free credits",
    "sourceUrl": "https://openart.ai/faq/",
    "kind": "trial",
    "checkedAt": "2026-10-31"
  },
  "freepik": {
    "label": "Free tier; Premium $14.50/mo annual-billing offer (now Magnific)",
    "sourceUrl": "https://www.magnific.com/pricing",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "scrimba": {
    "label": "Free intro courses available",
    "sourceUrl": "https://scrimba.com/our-pricing",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "tldv": {
    "label": "Free plan; Pro $18/user/mo, billed annually",
    "sourceUrl": "https://tldv.io/blog/free-ai-note-taking/",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "semrush": {
    "label": "SEO Classic $139.95/mo; Semrush One $199.95/mo",
    "sourceUrl": "https://www.semrush.com/semrush-questions/",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "surfer-seo": {
    "label": "Standard $99/mo, billed yearly",
    "sourceUrl": "https://surfer.ai/pricing/",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "landbot": {
    "label": "Free Sandbox; Starter €40/mo, billed monthly",
    "sourceUrl": "https://landbot.io/blog/landbot-pricing-plans",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "customgpt": {
    "label": "7-day free trial; Standard $99/mo, billed monthly",
    "sourceUrl": "https://customgpt.ai/pricing/",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "hostinger": {
    "label": "Premium $2.49/mo; $119.52 upfront for 48-month intro",
    "sourceUrl": "https://www.hostinger.com/pricing",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "bluehost": {
    "label": "Starter $3.99/mo for 36-month intro; renews $9.99/mo",
    "sourceUrl": "https://www.bluehost.com/pricing/web-hosting",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "kinsta": {
    "label": "WordPress hosting $35/mo, billed monthly",
    "sourceUrl": "https://kinsta.com/pricing/",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "namecheap": {
    "label": "Stellar from $1.88/mo; $44.88 upfront for 2-year intro",
    "sourceUrl": "https://www.namecheap.com/hosting/top10/",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "kling-ai": {
    "label": "Free iOS app; Standard US$10/mo (US App Store)",
    "sourceUrl": "https://apps.apple.com/us/app/kling-ai-ai-image-video-maker/id6738049229",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "masterclass": {
    "label": "Standard $10/mo equivalent, billed annually",
    "sourceUrl": "https://www.masterclass.com/checkout",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "filmora": {
    "label": "Basic US$49.99/year, annual subscription",
    "sourceUrl": "https://filmora.wondershare.com/shop/buy/buy-video-editor-fa.html",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "envato-elements": {
    "label": "Core $16.50/mo, billed annually; $39 monthly",
    "sourceUrl": "https://elements.envato.com/pricing",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "camtasia": {
    "label": "Free editor with watermark available",
    "sourceUrl": "https://support.techsmith.com/hc/en-us/articles/41690476457485-Camtasia-Pro-vs-Adobe-Premiere-Pro",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "coda": {
    "label": "Free plan available",
    "sourceUrl": "https://help.coda.io/hc/en-us/articles/39555725230989-Billing-and-pricing-basics",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "pcloud": {
    "label": "Free Basic plan; unlock up to 10 GB",
    "sourceUrl": "https://help.pcloud.com/article/plan-details",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "make": {
    "label": "Free plan available",
    "sourceUrl": "https://www.make.com/en/pricing",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "latenode": {
    "label": "Free plan; pay-as-you-go runtime after the allowance",
    "sourceUrl": "https://latenode.com/pricing-plans",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "babbel": {
    "label": "First lesson of each course free to try",
    "sourceUrl": "https://support.babbel.com/hc/en-gb/articles/205600498-Try-Babbel-for-free",
    "kind": "trial",
    "checkedAt": "2026-10-31"
  },
  "rocket-languages": {
    "label": "Free trial lessons available",
    "sourceUrl": "https://www.rocketlanguages.com/arabic",
    "kind": "trial",
    "checkedAt": "2026-10-31"
  },
  "cronometer": {
    "label": "Free Basic plan available",
    "sourceUrl": "https://support.cronometer.com/hc/en-us/articles/360028026971-Subscription-Types",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "tiller": {
    "label": "30-day free trial; $99/year after trial",
    "sourceUrl": "https://tiller.com/pricing/",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "mem": {
    "label": "Free plan; Pro $29/mo",
    "sourceUrl": "https://get.mem.ai/pricing",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "dropbox": {
    "label": "Free Basic account available",
    "sourceUrl": "https://www.dropbox.com/basic",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "prezi": {
    "label": "Free Basic plan available",
    "sourceUrl": "https://prezi.com/blog/affordable-ai-presentation-tool-prezi-2026/",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "pabbly-connect": {
    "label": "Free plan available",
    "sourceUrl": "https://www.pabbly.com/how-to-automate-your-discord-server/",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "fiverr": {
    "label": "Service prices vary; sellers pay a 20% platform fee",
    "sourceUrl": "https://help.fiverr.com/hc/en-us/articles/9234443621137-Your-earnings-page",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "upwork": {
    "label": "Freelancer service fee: 0–15% per contract",
    "sourceUrl": "https://support.upwork.com/hc/en-us/articles/211062538-Learn-about-the-Freelancer-Service-Fee",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "99designs": {
    "label": "Logo design from $249; scope affects project price",
    "sourceUrl": "https://99designs.com/logo-design",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "freelancer-com": {
    "label": "Freelancer fixed-price fee: 10% or US$5 minimum",
    "sourceUrl": "https://www.freelancer.com/feesandcharges",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "toptal": {
    "label": "$79/mo matching-platform fee; talent charges extra",
    "sourceUrl": "https://www.toptal.com/faq",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "italki": {
    "label": "Free registration; tutoring lessons cost extra",
    "sourceUrl": "https://apps.apple.com/us/app/italki-language-learning/id1140000003",
    "kind": "variable",
    "checkedAt": "2026-10-31"
  },
  "saily": {
    "label": "USA example: €3.49 for 1 GB / 7 days; destinations vary",
    "sourceUrl": "https://saily.com/esim-united-states/",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "medjet": {
    "label": "Short-term regular rate from $99, under age 75",
    "sourceUrl": "https://medjetassist.com/aarp-discount",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "elementor": {
    "label": "Free WordPress plugin; hosting and domain extra",
    "sourceUrl": "https://elementor.com/free-download/",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "brizy": {
    "label": "14-day free trial of Brizy Cloud",
    "sourceUrl": "https://www.brizy.io/pricing-cloud",
    "kind": "trial",
    "checkedAt": "2026-10-31"
  },
  "create": {
    "label": "Free tier available (now Anything)",
    "sourceUrl": "https://www.create.xyz/pricing",
    "kind": "free",
    "checkedAt": "2026-10-31"
  },
  "changed": {
    "label": "From $6/mo",
    "sourceUrl": "https://www.gochanged.com/",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "finaciti": {
    "label": "iOS subscription: $19.99/mo (US listing)",
    "sourceUrl": "https://apps.apple.com/us/app/finaciti/id1605756584",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "identityiq": {
    "label": "Secure Basic $8.49/mo, billed monthly",
    "sourceUrl": "https://www.identityiq.com/",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "helcim": {
    "label": "$0 monthly fee; interchange and processing fees apply",
    "sourceUrl": "https://www.helcim.com/pricing/",
    "kind": "amount",
    "checkedAt": "2026-10-31"
  },
  "welling": {
    "label": "Free trial on eligible 6-month and annual plans",
    "sourceUrl": "https://www.welling.ai/faq",
    "kind": "trial",
    "checkedAt": "2026-10-31"
  },
  "nolo": {
    "label": "Books and legal forms priced individually",
    "sourceUrl": "https://store.nolo.com/products/?sub=forms",
    "kind": "variable",
    "checkedAt": "2026-10-31"
  }
}
