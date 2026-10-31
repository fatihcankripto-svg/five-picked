import { editorialIdentity } from '@/lib/editorial-identity'
import type { ComparePair } from '@/lib/compare-pages'
import { courseFreeOptions } from '@/lib/course-free-options'
import type { Tool } from '@/data/categories'

const skillshare = courseFreeOptions.find((entry) => entry.slug === 'skillshare')!
const masterclass = courseFreeOptions.find((entry) => entry.slug === 'masterclass')!
const authorBio = editorialIdentity.bio
const scopeNote = 'Official sources reviewed October 31, 2026. Recommendations and learning-curve comments are editorial fit judgments, not hands-on tests or measured time savings. Unknown quotas and checkout prices remain unknown. The linked free guide is the baseline for free-access claims.'

export const packageComparePairs: ComparePair[] = [
  {
    slug: 'make-vs-n8n', aSlug: 'make', bSlug: 'n8n', authorBio, lastReviewedAt: '2026-10-31',
    framing: 'Choose by who will operate the automation: a team using a hosted visual builder, or someone prepared to manage a self-hosted workflow service. Compare the billing unit and maintenance responsibility before comparing headline prices.',
    verdict: 'Consider Make when you want a hosted visual automation workflow without maintaining an n8n server. Consider n8n Community when control of the installation matters and you can maintain it; choose n8n Cloud if you want its workflow model without self-hosting. A free software license does not make infrastructure or third-party API usage cost-free.',
    aWinsWhen: ['You want to build app-to-app scenarios in a hosted visual interface.', 'You can map the actions in your workflow to Make’s credit accounting before choosing a plan.', 'Your team wants to avoid operating a self-hosted n8n installation.'],
    bWinsWhen: ['You need control over an installation and can manage its infrastructure and updates.', 'You can work within Community edition’s feature and license restrictions.', 'You prefer to assess the Cloud execution-based offer when self-hosting is unsuitable.'],
    scopeNote,
    decisionRows: [
      { label: 'Working model', a: 'A visual builder connects apps in scenarios, with routers and filters.', b: 'A workflow service available as n8n Cloud or a self-hosted installation; deployment choice changes responsibilities.' },
      { label: 'Free access', a: 'The existing automation free guide documents a limited free plan. It does not establish a numeric credit quota, so this page does not add one.', b: 'The free guide documents self-hosting without a software execution cap. Community is not a free hosted Cloud plan, and real infrastructure capacity still applies.' },
      { label: 'Paid price and commitment', a: 'Paid plans use credit tiers and a billing-cycle selector. A fixed current amount with an unambiguous selected billing basis was not established in the retrieved page; check the live quote.', b: 'Cloud Starter is €20/month billed annually. This is a hosted subscription, not the price of self-hosted Community.' },
      { label: 'Billing unit', a: 'Scenario actions consume credits; advanced AI actions can consume more. Count the actual workflow steps instead of equating a credit to a complete business process.', b: 'Cloud pricing is based on workflow executions rather than pricing each step as a separate execution. Third-party services have their own charges.' },
      { label: 'Hosting and maintenance', a: 'Editorial fit: a hosted builder when server operation is outside your remit.', b: 'Self-hosting requires installation, configuration, security, updates and infrastructure management. Cloud is the alternative for managed hosting.' },
      { label: 'Team collaboration', a: 'Team roles and shared templates are documented in the Teams offer. Confirm the selected plan rather than treating Free as full governance.', b: 'Community omits features such as projects, workflow/credential sharing and SSO; paid editions have different entitlements.' },
      { label: 'Learning curve', a: 'Editorial guidance: start with a representative visual scenario and inspect its run history and credit usage. No training-time estimate is supplied.', b: 'Editorial guidance: evaluate workflow construction separately from learning to operate the server. No claim that self-hosting is simple or faster is made.' },
      { label: 'Business and client use', a: 'Check the chosen plan, connected-service permissions and any client requirements. This page does not establish a right to redistribute the platform.', b: 'Community uses the Sustainable Use License. Internal use and certain client-work arrangements are allowed; hosting it as a service or letting external users configure workflows can require a commercial license.' },
      { label: 'Upgrade trigger', a: 'Upgrade when the required quota, scheduling or team feature exceeds the selected plan; there is no invented time-to-upgrade prediction.', b: 'Move to Cloud or a paid self-hosted edition when maintenance responsibility or a documented Community feature restriction blocks the work.' },
    ],
    migration: [
      { title: 'Move from Make to n8n when deployment control becomes a requirement', text: 'Rebuild one representative workflow, check connectors, credentials, error handling and licensing, then inspect the actual operation. Keep the existing automation available until the replacement has been verified. No automatic or lossless scenario conversion is promised.' },
      { title: 'Move from self-hosted n8n to Make when operations become the bottleneck', text: 'Consider Make when server maintenance is consuming effort you cannot support and the required integrations fit its builder. Compare the real credit workload and plan gates before switching. n8n Cloud is also an option if the existing workflow model remains suitable.' },
      { title: 'Who should choose neither yet?', text: 'Do not choose Make until the credit workload and required plan are understood. Do not choose self-hosted n8n without someone responsible for updates, access and recovery. Verify the actual integration and data-handling requirements before committing production work.' },
    ],
    sources: [
      { url: 'https://www.make.com/en/pricing', label: 'Make credit accounting, plan structure and paid feature gates' },
      { url: 'https://help.make.com/monthly-and-annual-subscriptions', label: 'Make monthly and annual billing distinctions' },
      { url: 'https://n8n.io/pricing/', label: 'n8n Cloud Starter price and execution billing' },
      { url: 'https://docs.n8n.io/hosting/', label: 'n8n self-hosting responsibilities' },
      { url: 'https://github.com/n8n-io/n8n-docs/blob/main/docs/deploy/host-n8n/community-edition-features.md', label: 'Official n8n Community and paid-edition feature distinctions' },
      { url: 'https://support.n8n.io/article/can-i-use-your-license-for-my-use-case', label: 'n8n Community commercial-use boundaries' },
    ],
    faqs: [
      { question: 'Is n8n free in the same way as Make Free?', answer: 'No. Make has a limited hosted free plan. n8n Community is free software you operate yourself. The free guide’s no-execution-cap statement is not unlimited hosting, capacity or free third-party APIs.' },
      { question: 'Does a Make credit equal an n8n execution?', answer: 'No. Make meters actions using credits, while n8n Cloud prices workflow executions. Compare the actual workflow rather than dividing one headline allowance by the other.' },
      { question: 'Can I automatically import every scenario?', answer: 'No universal lossless migration is established. Rebuild and verify the connectors, credentials and failure handling of a representative workflow before moving production work.' },
      { question: 'Which is easier to learn?', answer: 'No measured learning-time comparison is provided. A hosted visual workflow and operating a self-hosted server are different responsibilities; choose by the skills and support available.' },
    ],
    listPath: '/software-and-productivity/automation', listLabel: 'The complete automation shortlist',
  },
  {
    slug: 'pcloud-vs-dropbox', aSlug: 'pcloud', bSlug: 'dropbox', authorBio, lastReviewedAt: '2026-10-31',
    framing: 'Choose by your storage commitment and the people who need to exchange files with you. A larger free allowance and an existing collaboration workflow solve different problems.',
    verdict: 'Consider pCloud when its storage and payment model fits a personal file library. Consider Dropbox when the people you work with already use its shared-file workflow. Evaluate sharing, device access and the selected plan before moving data. This page claims neither a speed winner nor a security ranking.',
    aWinsWhen: ['You want to evaluate the free storage route up to the documented allowance.', 'You are considering a one-time storage purchase and have checked the current offer and terms.', 'Your priority is a personal file library rather than assuming a personal account supplies team administration.'],
    bWinsWhen: ['The people receiving your files already work through Dropbox sharing.', 'The Basic allowance covers your small working set, or the selected paid plan fits it.', 'You need to evaluate a Dropbox team offer separately from personal Plus.'],
    scopeNote,
    decisionRows: [
      { label: 'Free storage', a: 'Up to 10 GB free, matching the existing free guide’s capacity figure. The official plan page requires onboarding/referral unlocks; do not assume the maximum is available immediately.', b: 'Basic includes 2 GB free, matching the existing free guide. Referral bonuses are not counted as guaranteed starting capacity.' },
      { label: 'Paid price and commitment', a: 'The retrieved offer advertises Premium 500 GB Lifetime at US$219 as a one-time payment. It is an advertised offer, not a guaranteed permanent price or monthly subscription.', b: 'Plus is a recurring personal offer with 2 TB. Currency and billing-cycle choices affect the live quote; no ambiguous retrieved headline is converted into a fixed monthly bill here.' },
      { label: 'File access', a: 'Official documentation lists desktop, mobile and web apps for access to stored files.', b: 'Basic documents desktop, browser and mobile access. Verify the actual account’s device restrictions before a multi-device rollout.' },
      { label: 'Sharing workflow', a: 'pCloud documents file sharing and shared-link traffic limits. Confirm the intended plan when distributing large files.', b: 'Dropbox documents shared folders and links. Editorial fit: use it when collaborators already depend on that exchange process.' },
      { label: 'Personal versus team', a: 'Individual, Family and Business are distinct offers; personal storage is not evidence of team access controls.', b: 'Plus is for personal use. Team folders and administrative controls belong to separate team offers.' },
      { label: 'Privacy decision', a: 'Inspect the security and encryption offer separately from capacity. This page does not treat a larger allowance as stronger security.', b: 'Inspect the selected plan’s security controls. No blanket end-to-end-encryption claim is made for Basic or Plus.' },
      { label: 'Learning curve', a: 'Editorial guidance: try the app with a disposable folder and verify upload, download and share-link behavior.', b: 'Editorial guidance: test with an actual collaborator. Familiarity with a shared-folder process is a fit consideration, not a measured usability score.' },
      { label: 'Migration', a: 'Keep originals, copy a representative folder and verify downloaded files and links before moving the library.', b: 'Recreate required shares and check permissions. No automatic preservation of old links, comments or history is promised.' },
      { label: 'Upgrade trigger', a: 'Upgrade when the unlocked capacity or required sharing entitlement cannot support your files; no invented usage duration is supplied.', b: 'Upgrade when the free capacity or required personal/team feature is insufficient. Compare the whole billing commitment before choosing Plus or a team plan.' },
    ],
    migration: [
      { title: 'Consider Dropbox after pCloud when collaborators dictate the workflow', text: 'Move only after testing the required shared folders and permissions with their actual recipients. Keep the original files until copies have been verified, and plan to replace links where needed.' },
      { title: 'Consider pCloud after Dropbox when the storage commitment changes', text: 'If you want to evaluate a different storage or payment model, test a representative library and read the purchase terms first. No break-even year or guaranteed lifetime saving is calculated from an unverified Dropbox billing quote.' },
      { title: 'Who should choose neither personal plan yet?', text: 'If mandatory retention, account administration or sensitive-data requirements have not been verified, investigate those before buying personal storage. Neither free capacity nor a one-time price establishes compliance or a backup strategy.' },
    ],
    sources: [
      { url: 'https://help.pcloud.com/article/plan-details', label: 'pCloud free capacity, unlocking and plan distinctions' },
      { url: 'https://www.pcloud.com/cloud-storage-pricing-plans.html', label: 'pCloud advertised one-time Premium offer' },
      { url: 'https://www.pcloud.com/download-free-online-cloud-file-storage.html', label: 'pCloud app platforms' },
      { url: 'https://www.dropbox.com/basic', label: 'Dropbox Basic capacity, access and sharing' },
      { url: 'https://www.dropbox.com/plans', label: 'Dropbox personal and team plan distinctions; live billing choices' },
    ],
    faqs: [
      { question: 'Does pCloud give the full free allowance immediately?', answer: 'The maximum free capacity in the guide is subject to unlocking requirements on pCloud’s official plan page. Do not treat the maximum as automatically available on registration.' },
      { question: 'Is a Lifetime offer equivalent to a monthly subscription?', answer: 'No. The documented pCloud offer is a one-time purchase, while Dropbox personal paid access is recurring. Read the applicable terms and live billing quote rather than comparing unlike headline periods.' },
      { question: 'Will all sharing links survive a move?', answer: 'No universal preservation of links, comments or history is established. Verify copied files and recreate permissions and shares where required.' },
      { question: 'Which service is faster or more secure?', answer: 'No matched performance test or security audit is provided here. Check the selected plan, app behavior and security requirements for your use case.' },
    ],
    listPath: '/software-and-productivity/cloud-storage', listLabel: 'Our five cloud storage options',
  },
  {
    slug: 'skillshare-vs-masterclass', aSlug: 'skillshare', bSlug: 'masterclass', authorBio, lastReviewedAt: '2026-10-31',
    framing: 'Choose by what you want to do after a lesson: complete a creative class project, or learn from an instructor’s demonstrations and perspective. This is a concise enrollment decision; the related blog explores the learning workflow more deeply.',
    verdict: 'Consider Skillshare when making and submitting a class project fits your goal. Consider MasterClass when the specific instructor and class match the perspective you want to learn. Neither should be chosen as an automatic route to an accredited credential or permanent free library access.',
    aWinsWhen: ['You can name a creative project you want to complete using a listed class.', 'The class-project and community-feedback workflow fits how you learn.', 'You understand the trial end and annual payment before enrolling.'],
    bWinsWhen: ['A specific instructor or class matches the techniques or perspective you want to study.', 'You prefer to evaluate the class before building your own independent practice plan.', 'You have checked device and offline needs against the selected membership tier.'],
    scopeNote,
    decisionRows: [
      { label: 'Learning format', a: 'Creative classes, learning paths and a community for feedback. Editorial fit: a defined creative project.', b: 'Instructor-led classes and demonstrations. Editorial fit: studying a specific practitioner’s approach rather than expecting class-project assessment.' },
      { label: 'Ongoing free access', a: skillshare.access, b: masterclass.access },
      { label: 'Trial duration and billing', a: skillshare.trial, b: masterclass.trial },
      { label: 'Paid price and billing', a: 'US$13.99/month equivalent; US$167.88 paid annually. This is not a monthly cancel-anytime payment.', b: 'Standard is US$10/month equivalent, billed annually. The purchase guarantee is not a no-payment trial.' },
      { label: 'Certificates', a: skillshare.certificate, b: masterclass.certificate },
      { label: 'Devices and offline access', a: 'The pricing page documents web and app learning. No unverified device or offline allowance is promised in this comparison.', b: 'Standard checkout lists one simultaneous device and no offline mode. Higher tiers list offline access; verify the selected offer.' },
      { label: 'Learning curve', a: 'Editorial guidance: inspect the project brief and prerequisites before choosing a class. No completion-time or skill-gain estimate is made.', b: 'Editorial guidance: inspect the lesson outline and decide how you will practice independently. No measured learning advantage is asserted.' },
      { label: 'Material and business rights', a: skillshare.rights, b: masterclass.rights },
      { label: 'When access ends', a: skillshare.limits, b: masterclass.limits },
    ],
    migration: [
      { title: 'Move from MasterClass to Skillshare when you need a defined project', text: 'If viewing lessons is no longer enough, inspect a relevant Skillshare project and its prerequisites. Keep your own notes and work, and check the trial end before subscribing. No credit or progress transfer between platforms is promised.' },
      { title: 'Move from Skillshare to MasterClass when a specific instructor is the reason', text: 'Choose a named class that fills a gap in your learning rather than buying a broad catalog on reputation alone. Keep an independent practice plan; the new membership does not transfer previous course completion.' },
      { title: 'Who should choose neither yet?', text: 'If an employer or school requires an accredited credential, verify the exact course and issuer first. Neither a Skillshare class certificate nor regular MasterClass membership is presented here as a substitute for that requirement. Avoid either subscription if you cannot identify a relevant class or track its billing commitment.' },
    ],
    sources: [
      ...skillshare.sources, ...masterclass.sources,
      { url: 'https://www.masterclass.com/checkout', label: 'MasterClass Standard annual billing, device and offline conditions' },
    ],
    faqs: [
      { question: 'Are both libraries permanently free?', answer: 'No. The free guide documents a Skillshare trial and an eligible MasterClass Guest Pass, not ongoing free full-library memberships.' },
      { question: 'Does a trial automatically stop without charging?', answer: 'No. Both documented routes require payment details and convert unless cancelled. A MasterClass Guest Pass also requires an eligible invitation.' },
      { question: 'Do both offer the same certificate?', answer: 'No. Skillshare describes a class certificate after lessons and a submitted project. MasterClass says regular classes do not provide an official completion certificate; its Certificates product is separate.' },
      { question: 'Can I transfer course progress between them?', answer: 'No cross-platform course-progress entitlement is established. The switching scenarios describe a change of learning approach, not an automatic credential or progress transfer.' },
    ],
    listPath: '/online-courses', listLabel: 'Our complete online course shortlist',
  },
]

const cardCopy: Record<string, { audience: string; standout: string; price: string; description: string }> = {
  make: { audience: 'People wanting hosted visual app automation', standout: 'Visual scenarios without operating an n8n server', price: 'Limited Free plan; paid quote depends on credits and billing cycle', description: 'Builds app-to-app workflows using a visual scenario builder, routers and filters.' },
  n8n: { audience: 'Builders choosing deployment control or n8n Cloud', standout: 'Self-hosted Community and managed Cloud are separate options', price: 'Community self-hosted software is free; Cloud Starter €20/month billed annually', description: 'Runs workflows as a managed Cloud service or on infrastructure you operate, with edition-specific features.' },
  pcloud: { audience: 'People evaluating personal file storage and payment options', standout: 'Free storage unlocking and a one-time paid offer', price: 'Up to 10 GB free; advertised 500 GB Lifetime offer US$219 one-time', description: 'Stores and shares files through desktop, mobile and web apps. Individual and team-oriented offers differ.' },
  dropbox: { audience: 'People exchanging files with existing Dropbox collaborators', standout: 'Shared-file workflow across desktop, mobile and browser', price: 'Basic 2 GB free; Plus is recurring and requires a live billing quote', description: 'Provides file access and sharing, with separate personal and team plans. No speed or security ranking is claimed.' },
  skillshare: { audience: 'Learners with a creative class project in mind', standout: 'Class projects and a creative community', price: 'Trial available; US$13.99/month equivalent, US$167.88 billed annually', description: 'Provides on-demand creative classes, learning paths and community feedback. Check the class and project before subscribing.' },
  masterclass: { audience: 'Learners selecting a specific instructor’s class', standout: 'Practitioner-led lessons with plan-specific viewing options', price: 'Standard US$10/month equivalent, billed annually; eligible Guest Pass separate', description: 'Provides instructor-led classes. Regular membership and the separate Certificates product are different offers.' },
}
export function packageCompareTool(tool: Tool): Tool {
  const copy = cardCopy[tool.slug]
  return { ...tool, bestFor: copy.audience, tagline: copy.standout, startingPrice: copy.price,
    whatItDoes: copy.description, strengths: [copy.standout, 'Official conditions and limits linked above'],
    goodToKnow: 'Confirm the actual offer and required features before purchasing. Free access, paid capacity and usage rights are separate decisions.',
    decisionOverride: { audience: copy.audience, standout: copy.standout },
  }
}
