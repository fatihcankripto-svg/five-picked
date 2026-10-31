import type { ComparePair } from '@/lib/compare-pages'
import type { Tool } from '@/data/categories'
import { marketingSeoFreeOptions } from '@/lib/marketing-seo-free-options'
import { freelanceFreeOptions } from '@/lib/freelance-free-options'

const neuron = marketingSeoFreeOptions.find((entry) => entry.slug === 'neuronwriter')!
const frase = marketingSeoFreeOptions.find((entry) => entry.slug === 'frase')!
const upwork = freelanceFreeOptions.find((entry) => entry.slug === 'upwork')!
const freelancer = freelanceFreeOptions.find((entry) => entry.slug === 'freelancer-com')!
const authorBio = 'Five Picked Editors is FIVE PICKED’s collective byline for research-based tool comparisons and buying guides.'
const reviewed = { authorBio, lastReviewedAt: '2026-10-31' }
const scopeNote = 'Official-source review on October 31, 2026. Fit and learning-curve comments are editorial guidance, not measured performance or guaranteed results. Prices retain their stated currency and billing basis. Free-plan quantities are not inferred from paid plans.'

export const secondComparePairs: ComparePair[] = [
  {
    slug: 'monday-com-vs-asana', aSlug: 'monday-com', bSlug: 'asana', ...reviewed,
    framing: 'Choose by the work structure you will maintain: configurable boards and documents, or a task-and-project process with the paid planning controls you need. Compare the required tier and total seat commitment before choosing a workspace.',
    verdict: 'Consider monday.com when a board-centered workspace fits your team’s work and someone will maintain its structure. Consider Asana when organizing task ownership, projects and schedules matches the process you need. Neither should be bought on a per-user headline without checking the plan, minimum purchase and required features.',
    aWinsWhen: ['Your work can be represented clearly in boards, columns and documents.', 'A named owner will maintain the board structure rather than adding fields without a process.', 'The required plan and seat purchase fit your actual team and budget.'],
    bWinsWhen: ['Your immediate need is task ownership and project organization in list, board or calendar views.', 'You require the Timeline, Gantt, forms or dashboard features listed in Starter and can justify that tier.', 'You can map the project workflow before choosing the paid seats.'],
    scopeNote: scopeNote + ' The existing project-management free guide does not provide verified platform-specific numeric quotas. This comparison does not repeat its general seat-range estimate or invent a matching per-tool allowance; consult the linked official plan pages before adding members.',
    decisionRows: [
      { label: 'Work structure', a: 'Boards organize work and data using columns; Docs provide a separate writing and collaboration surface.', b: 'Tasks and projects can be organized in list, board and calendar views.' },
      { label: 'Free access baseline', a: 'An ongoing Free plan is documented. Numeric quotas are not reproduced from the general free guide because it does not verify tool-specific counts.', b: 'An ongoing Personal plan is documented. No generic seat-range estimate is presented as a guaranteed Asana allowance.' },
      { label: 'First paid tier', a: 'Basic: US$9 per seat per month billed annually. The official pricing FAQ says paid plans start at 3 users; selected AI-credit offers and seat choices affect the quote.', b: 'Starter: US$10.99 per user per month billed annually, or US$13.49 billed monthly. Confirm the actual seat purchase at checkout.' },
      { label: 'Planning and reporting', a: 'Choose the plan containing the views and reporting you require; Basic is not asserted to include every higher-tier feature.', b: 'Starter lists Timeline and Gantt views, reporting dashboards and custom fields. These are not presented as free Personal features.' },
      { label: 'Forms and automation', a: 'Check the live plan comparison for the required automation and intake functions; no unverified numeric allowance is promised.', b: 'Starter lists forms and automations. Confirm the actual workflow and applicable conditions rather than equating a feature label with every integration entitlement.' },
      { label: 'AI and integrations', a: 'The current pricing page separates AI-credit packages from the seat price. Do not treat the displayed seat amount as unlimited AI usage.', b: 'The pricing page lists integrations and plan-dependent AI features. This page does not invent a free AI quota.' },
      { label: 'Team and billing', a: 'Compare the total selected seats and billing term; the per-seat amount alone is not a team invoice.', b: 'Compare who needs paid access and the chosen billing cycle; annual monthly equivalents differ from monthly billing.' },
      { label: 'Learning curve', a: 'Editorial guidance: test one real board and assign responsibility for fields and status definitions. No setup-time estimate is claimed.', b: 'Editorial guidance: test ownership, handoffs and schedule changes on one project. No measured ease-of-use winner is claimed.' },
      { label: 'Upgrade and switching trigger', a: 'Upgrade when a verified plan gate blocks the required board workflow, not because a generic free-plan estimate implies a deadline.', b: 'Upgrade when the needed planning or reporting feature is outside Personal. Validate the destination workflow before changing a live workspace.' },
    ],
    migration: [
      { title: 'Consider Asana after monday.com when project handoffs become the focus', text: 'Map one board into tasks, owners, dates and the views you need. Check that the selected Asana tier supports the process before moving active work. No automatic transfer of permissions, history or every automation is promised.' },
      { title: 'Consider monday.com after Asana when boards better represent the process', text: 'Prototype one workflow with the required columns and documents, and obtain a complete seat and feature quote. Retain the original project until the new workflow has been checked.' },
      { title: 'Who should choose neither paid plan yet?', text: 'If the team cannot define owners, stages and required reporting, resolve that before paying. monday.com is a poor fit when no one will maintain its board structure; Asana Starter is a poor fit when its paid planning features will go unused. These are editorial suitability judgments.' },
    ],
    sources: [
      { url: 'https://monday.com/pricing', label: 'monday.com work management plans, seats and billing' },
      { url: 'https://support.monday.com/hc/en-us/articles/360010487220-Understanding-the-Free-Plan', label: 'monday.com official Free-plan restrictions' },
      { url: 'https://asana.com/pricing', label: 'Asana Personal and Starter features and billing' },
    ],
    faqs: [
      { question: 'Can I use the free guide’s generic seat range as a platform quota?', answer: 'No. The existing guide does not verify platform-specific numeric quotas. This comparison leaves them unstated and links the official plan pages rather than converting a general estimate into a promise.' },
      { question: 'Is the annual per-user price my monthly invoice?', answer: 'Not necessarily. Check the billing cycle, seat purchase and any separately selected products. A monthly equivalent billed annually is different from a monthly subscription.' },
      { question: 'Which workspace is faster to learn?', answer: 'No measured learning-time comparison is provided. Evaluate one representative board or project with the people who will maintain it.' },
      { question: 'Will every automation and permission transfer?', answer: 'No lossless migration is established. Check tasks, fields, users, sharing and automations before retiring the original workspace.' },
    ],
    listPath: '/software-and-productivity/project-management', listLabel: 'All five project management options',
  },
  {
    slug: 'neuronwriter-vs-frase', aSlug: 'neuronwriter', bSlug: 'frase', ...reviewed,
    framing: 'Choose by how much of the content workflow you need to coordinate: a content optimization and planning workspace, or a broader research-to-publishing loop. Trial features and continuing entry-plan entitlements are different offers.',
    verdict: 'Consider NeuronWriter when content analysis, planning and optimization cover your immediate job. Consider Frase when its documented planning, audit and publishing workflow fits your process. Compare the selected paid plan after the trial, especially team access and production quotas; neither trial is presented as ongoing free content creation.',
    aWinsWhen: ['You want to evaluate the optimization editor and content planner before committing.', 'The Bronze feature set covers your continuing work after the richer Gold trial ends.', 'You will check collaboration and integrations against the actual paid tier.'],
    bWinsWhen: ['Your work needs the documented planning and publishing loop rather than only an editor.', 'You can evaluate the Professional trial within its explicit article, audit, prompt and seat caps.', 'Your continuing plan fits the sites, users and output volume you actually need.'],
    scopeNote,
    decisionRows: [
      { label: 'Core workflow', a: 'The pricing page lists a content planner, optimization tools and AI templates; advanced content and integration features differ by tier.', b: 'The pricing documentation describes planning, content production, audits and CMS publishing, with plan-specific automation.' },
      { label: 'Free access and quotas', a: neuron.access, b: frase.access },
      { label: 'Trial conditions', a: neuron.trial, b: frase.trial },
      { label: 'First paid tier', a: 'Bronze: US$23/month. This entry plan is different from the Gold evaluation; confirm the selected billing option.', b: 'Starter: US$39/month equivalent billed yearly, or US$49 month to month.' },
      { label: 'Optimization and analysis', a: 'Bronze documents content analyses, standard templates and planning. Do not convert its paid allowances into trial credits.', b: 'Starter documents SEO/GEO scores and audit access. Trial audit caps and paid monthly production allowances are separate.' },
      { label: 'AI writing', a: 'Standard AI templates are listed in Bronze; advanced templates and Content Designer are listed in higher tiers.', b: 'The trial documents AI content engines. No universal free word count is established.' },
      { label: 'Team and publishing', a: 'Bronze lists read-only sharing; Gold lists team features and integrations. Do not assume entry-level team editing.', b: 'Starter lists CMS publishing; Professional adds team and planning capabilities. Check the continuing tier after evaluation.' },
      { label: 'Exports and commercial rights', a: 'A separate trial report-export allowance and explicit trial-output commercial license are not verified in the free guide.', b: 'A trial-specific report export allowance and blanket trial-output commercial license are not established in the free guide.' },
      { label: 'Learning curve and upgrade trigger', a: 'Editorial guidance: analyze one representative draft, then identify which trial features disappear on your intended paid tier. No learning-time claim is made.', b: 'Editorial guidance: test one brief-to-publishing workflow, including approvals, before enabling automation. No ranking improvement or time saving is guaranteed.' },
    ],
    migration: [
      { title: 'Consider Frase after NeuronWriter when the publishing process is the gap', text: 'Inspect the required CMS and approval workflow on the selected Frase plan, using a representative draft. A broader feature list is not proof that automated publishing is appropriate for your content.' },
      { title: 'Consider NeuronWriter after Frase when a narrower editing workflow is enough', text: 'Map the analyses, templates and collaboration you actually use to NeuronWriter’s continuing tier. Keep source drafts and briefs; no score equivalence or automatic project transfer is promised.' },
      { title: 'Who should choose neither yet?', text: 'If your decision requires an unverified trial export, commercial right or performance improvement, confirm that first. NeuronWriter Bronze is unsuitable if you require higher-tier collaboration; Frase is unsuitable if its publishing workflow will go unused and the selected cost cannot be justified.' },
    ],
    sources: [...neuron.sources, ...frase.sources],
    faqs: [
      { question: 'Are the two free trials unlimited?', answer: 'No unlimited use is established. Frase publishes explicit trial caps. NeuronWriter documents Gold trial access, but its paid monthly quantities are not presented as a separate free trial allocation.' },
      { question: 'Do entry plans include everything seen in a trial?', answer: 'Do not assume so. NeuronWriter evaluates Gold and Frase evaluates Professional. Check the features and quantities of the paid plan you will actually keep.' },
      { question: 'Will optimization scores carry over?', answer: 'No equivalent scoring scale or lossless project migration is claimed. Keep the source content and evaluate the destination workflow separately.' },
      { question: 'Is commercial use automatically cleared by a free trial?', answer: 'No blanket trial-output commercial license is established in the linked free guide. Check the exact terms and third-party material before client delivery.' },
    ],
    listPath: '/ai-tools/marketing-and-seo', listLabel: 'The complete AI marketing and SEO shortlist',
  },
  {
    slug: 'upwork-vs-freelancer-com', aSlug: 'upwork', bSlug: 'freelancer-com', ...reviewed,
    framing: 'Choose by how you will find work and get paid: proposal spending, contract deductions and withdrawal conditions all affect the result. This comparison is freelancer-side, not a client hiring-price guide.',
    verdict: 'Consider Upwork when suitable jobs justify the Connects you may spend and the displayed contract fee. Consider Freelancer.com when its project or contest route fits your work and you can satisfy its bid-balance and payout requirements. Free registration is not unlimited applications, guaranteed income or commission-free work.',
    aWinsWhen: ['You can evaluate a job before spending Connects and accept the displayed contract-specific fee.', 'The available withdrawal method and country rules fit how you receive payment.', 'You need the optional Plus features only after assessing whether Basic is sufficient.'],
    bWinsWhen: ['The project or contest format fits the service you sell.', 'You can meet the available-balance requirement before bidding.', 'You have checked the fee floor and withdrawal conditions for your expected project size.'],
    scopeNote,
    decisionRows: [
      { label: 'Account access', a: upwork.account, b: freelancer.account },
      { label: 'Finding work', a: 'Proposals and advertising products can consume Connects. Evaluate each job before spending; no guaranteed demand or acceptance is asserted.', b: 'The platform supports project bids and contest entries. A contest submission is not a guarantee of a prize or payment.' },
      { label: 'Earnings deductions', a: upwork.commission, b: freelancer.commission },
      { label: 'Application costs and constraints', a: upwork.proposals, b: freelancer.proposals },
      { label: 'Withdrawals', a: upwork.payout, b: freelancer.payout },
      { label: 'Optional paid membership', a: 'The official freelancer pricing page lists optional Plus at US$19.99/month. It is not required for Basic and does not replace every contract or proposal cost.', b: 'Optional paid memberships and bid upgrades are separate from free membership. No unverified membership price is quoted here.' },
      { label: 'Free tier versus trial', a: upwork.trial, b: freelancer.trial },
      { label: 'Learning curve', a: 'Editorial guidance: assess the proposal flow, fee disclosure and payment method before pursuing a live job. No time-to-first-client estimate is claimed.', b: 'Editorial guidance: inspect bidding, milestone and contest conditions before accepting work. No higher win-rate or earnings claim is made.' },
      { label: 'Fit and switching trigger', a: 'Consider another marketplace when the actual proposal economics or withdrawal route do not fit your work, after checking the destination conditions.', b: 'Consider another marketplace when the required bid balance, fee floor or withdrawal conditions do not fit your project economics.' },
    ],
    migration: [
      { title: 'Consider Freelancer.com after Upwork when the work format fits better', text: 'Evaluate a suitable project or contest and verify the balance requirement before applying. Do not assume existing ratings, contracts or client relationships transfer. Keep current commitments under their original platform rules.' },
      { title: 'Consider Upwork after Freelancer.com when proposal economics fit the job', text: 'Inspect the actual Connects requirement, displayed fee and payment method for a relevant opportunity. Do not assume a lower deduction for every contract or that free registration covers repeated proposals.' },
      { title: 'Who should choose neither yet?', text: 'If you need guaranteed income or cannot meet the applicable application, balance or payout conditions, neither platform solves that uncertainty. Upwork is unsuitable when proposal spend is unjustified; Freelancer.com is unsuitable when the balance or fee floor does not fit the work. No earnings forecast is provided.' },
    ],
    sources: [...upwork.sources, ...freelancer.sources,
      { url: 'https://www.upwork.com/pricing/freelancer', label: 'Upwork optional Plus membership pricing' },
    ],
    faqs: [
      { question: 'Does free membership mean free applications and no commission?', answer: 'No. Account access, application conditions, earnings deductions and payouts are separate. The table reuses the free guide’s verified freelancer-side observations.' },
      { question: 'Is the Freelancer.com required balance a proposal fee?', answer: 'No. A required available balance is different from an application charge, but it still means funds must be available before bidding.' },
      { question: 'Does every Upwork account get the same free Connects?', answer: 'No universal monthly grant is promised in the free guide. Eligibility and offers vary; verify the allocation shown in your own account.' },
      { question: 'Can my reputation and contracts move with me?', answer: 'No transfer entitlement is established. The scenarios describe evaluating new opportunities, while existing commitments remain under their original platform conditions.' },
    ],
    listPath: '/freelance-platforms', listLabel: 'Our five freelance marketplace options',
  },
]

const cards: Record<string, { audience: string; standout: string; price: string; description: string }> = {
  'monday-com': { audience: 'Teams organizing work through boards and documents', standout: 'A configurable board-centered workspace', price: 'Free plan; Basic US$9/seat/month billed annually; paid minimum applies', description: 'Organizes work and data in boards, columns and documents. Select the actual feature tier and total seat commitment.' },
  asana: { audience: 'Teams organizing task ownership and project schedules', standout: 'Task and project views with plan-dependent planning controls', price: 'Free Personal; Starter US$10.99/user/month annually or US$13.49 monthly', description: 'Organizes tasks and projects, with additional planning, forms and reporting in paid tiers.' },
  neuronwriter: { audience: 'Writers evaluating content planning and optimization', standout: 'An optimization workspace with tier-dependent AI templates', price: '7-day Gold trial; Bronze US$23/month', description: 'Combines content planning, optimization and AI templates. Gold trial capabilities differ from Bronze continuing access.' },
  frase: { audience: 'Content teams evaluating a research-to-publishing loop', standout: 'Planning, audits and CMS publishing in one workflow', price: '7-day capped trial; Starter US$39/month billed yearly or US$49 monthly', description: 'Documents planning, content and publishing functions, with trial caps and paid plan differences.' },
  upwork: { audience: 'Freelancers evaluating proposal spend and contract-specific fees', standout: 'A proposal-based route with disclosed contract deductions', price: upwork.price, description: 'Provides a marketplace for freelance proposals and contracts. Read application costs and country-specific payment conditions before accepting work.' },
  'freelancer-com': { audience: 'Freelancers whose projects fit bidding or contests', standout: 'Project bids and contests with balance and payout requirements', price: freelancer.price, description: 'Provides project and contest opportunities. Free membership does not remove bid-balance requirements or earnings fees.' },
}
export function secondCompareTool(tool: Tool): Tool {
  const card = cards[tool.slug]
  return { ...tool, bestFor: card.audience, tagline: card.standout, startingPrice: card.price,
    whatItDoes: card.description, strengths: [card.standout],
    goodToKnow: 'Read the sourced access and fee conditions above. Editorial fit is not a test result, an income forecast or a promise of unlimited free use.',
    decisionOverride: { audience: card.audience, standout: card.standout },
  }
}
