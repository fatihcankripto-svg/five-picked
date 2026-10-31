import { editorialDates } from '@/lib/editorial-dates'
/**
 * FIVE PICKED — "Which tool is right for me?" quizzes.
 * One page per full list. Answers score against the tools in that list.
 * A quiz only appears when its list is fully populated (no "Coming soon").
 */

import { publishedCategories as allCategories } from '@/data/all-categories'
import type { Category, Tool } from '@/data/categories'

export const quizPagesUpdated = editorialDates.quizzes

type MaybeSoon = Tool & { comingSoon?: boolean }

function isLive(tool: Tool) {
  return (tool as MaybeSoon).comingSoon !== true
}

export type QuizOption = {
  /** Short label shown on the button. */
  label: string
  /** Which tool slugs this answer favours, with a weight (1–3). */
  favours: Record<string, number>
}

export type QuizQuestion = {
  id: string
  question: string
  options: QuizOption[]
}

type QuizDef = {
  /** Slugs that make up this list's result pool. Must match tools in the list. */
  categorySlug: string
  subSlug?: string
  metaTitle: string
  metaDescription: string
  intro: string
  questions: QuizQuestion[]
  relatedLinks?: { path: string; label: string }[]
  /** If two tools tie on score, this slug wins. */
  tieBreak: string
  faqs: { question: string; answer: string }[]
}

// ---------------------------------------------------------------------------
// Quiz definitions (12 fully-populated lists)
// ---------------------------------------------------------------------------

const defs: QuizDef[] = [
  {
    categorySlug: 'video-and-design-software',
    metaTitle: 'Which video and design tool is right for me? (2026 Quiz)',
    metaDescription: 'Answer seven questions to match your editing, recording or stock-asset workflow with Premiere Pro, Filmora, Envato Elements, Riverside or Camtasia.',
    intro: 'Seven questions, a primary match and a runner-up from our five existing picks. These tools serve different jobs: editing, remote recording, screen tutorials or stock assets. Budget and platform answers guide a shortlist, not a guarantee of compatibility, free exports or commercial permission.',
    tieBreak: 'adobe-premiere-pro',
    questions: [
      {
        id: 'content-type', question: 'What kind of content do you mainly create?',
        options: [
          { label: 'Long-form YouTube videos or films needing detailed editing', favours: { 'adobe-premiere-pro': 3, filmora: 1 } },
          { label: 'Short social videos or simple business edits', favours: { filmora: 3, 'adobe-premiere-pro': 1 } },
          { label: 'Graphics, motion templates or stock-based designs', favours: { 'envato-elements': 3 } },
          { label: 'Remote interviews or video podcasts', favours: { riverside: 3 } },
          { label: 'Screen tutorials, presentations or corporate training', favours: { camtasia: 3, 'adobe-premiere-pro': 1 } },
        ],
      },
      {
        id: 'team', question: 'Who is producing the content?',
        options: [
          { label: 'A solo beginner or busy small-business creator', favours: { filmora: 3, camtasia: 1 } },
          { label: 'An experienced editor or an Adobe-based production team', favours: { 'adobe-premiere-pro': 3, 'envato-elements': 1 } },
          { label: 'A designer or team repeatedly sourcing creative assets', favours: { 'envato-elements': 3 } },
          { label: 'A host working with remote guests', favours: { riverside: 3 } },
          { label: 'A teacher, trainer or internal training team', favours: { camtasia: 3 } },
        ],
      },
      {
        id: 'experience', question: 'How much editing experience do you have?',
        options: [
          { label: 'Beginner: I want a friendly editing workflow', favours: { filmora: 3, camtasia: 1, riverside: 1 } },
          { label: 'Intermediate: I want to speed up a specific production task', favours: { filmora: 1, camtasia: 2, riverside: 2, 'envato-elements': 2 } },
          { label: 'Professional: I want detailed editing control', favours: { 'adobe-premiere-pro': 3, 'envato-elements': 1 } },
        ],
      },
      {
        id: 'budget', question: 'What monthly-equivalent budget are you considering?',
        options: [
          { label: 'No payment for now; I can evaluate limited free access', favours: { riverside: 3, camtasia: 3, filmora: 2 } },
          { label: 'Up to $10 per month equivalent; annual payment may apply', favours: { filmora: 3 } },
          { label: 'Above $10 and up to $25 per month equivalent', favours: { 'adobe-premiere-pro': 3, 'envato-elements': 3, filmora: 1 } },
          { label: 'Above $25 per month; workflow matters more than the entry price', favours: { 'adobe-premiere-pro': 2, 'envato-elements': 2, riverside: 1, camtasia: 1, filmora: 1 } },
        ],
      },
      {
        id: 'platform', question: 'Which platform or setup do you need?',
        options: [
          { label: 'Windows desktop; detailed editing or screen recording', favours: { 'adobe-premiere-pro': 3, camtasia: 3 } },
          { label: 'Mac desktop; detailed editing or screen recording', favours: { 'adobe-premiere-pro': 3, camtasia: 3 } },
          { label: 'An online workflow centered on remote guests', favours: { riverside: 3 } },
          { label: 'Mobile-only or another setup: I will verify app compatibility first', favours: { 'adobe-premiere-pro': 1, filmora: 1, 'envato-elements': 1, riverside: 1, camtasia: 1 } },
        ],
      },
      {
        id: 'speed-up', question: 'Which part of production do you most want to speed up?',
        options: [
          { label: 'Detailed cuts, color, audio and effects', favours: { 'adobe-premiere-pro': 3 } },
          { label: 'Quick edits using titles, templates and AI helpers', favours: { filmora: 3 } },
          { label: 'Finding stock footage, music, graphics and motion templates', favours: { 'envato-elements': 3 } },
          { label: 'Recording guests and producing transcripts or short clips', favours: { riverside: 3 } },
          { label: 'Screen capture, callouts, zooms and tutorial captions', favours: { camtasia: 3 } },
        ],
      },
      {
        id: 'delivery-rights', question: 'What are your commercial-use and watermark requirements?',
        options: [
          { label: 'Learning or evaluation: I can accept a watermark', favours: { filmora: 2, riverside: 2, camtasia: 2 } },
          { label: 'Clean delivery: I can consider the appropriate paid plan', favours: { 'adobe-premiere-pro': 2, filmora: 2, riverside: 1, camtasia: 1 } },
          { label: 'Paid client or monetized work: I must verify the plan and asset licenses', favours: { 'adobe-premiere-pro': 1, filmora: 1, 'envato-elements': 1, riverside: 1, camtasia: 1 } },
        ],
      },
    ],
    faqs: [
      { question: 'Are all five results video editors?', answer: 'No. Envato Elements supplies creative assets, Riverside focuses on remote recording, Camtasia on screen tutorials, and Premiere Pro and Filmora on video editing. The result identifies a workflow fit rather than five interchangeable products.' },
      { question: 'Does the quiz guarantee mobile or desktop compatibility?', answer: 'No. The existing category explicitly lists Windows and Mac for Premiere Pro and Camtasia. A mobile-only or other setup must be checked against the provider’s current application and system requirements before purchase.' },
      { question: 'Are budget bands monthly payment quotes?', answer: 'No. They are monthly-equivalent preferences based on existing price labels, some of which require annual billing or an annual commitment. Free access can have watermark and export restrictions. Check the result card and its official pricing source.' },
      { question: 'Does the result grant commercial-use rights or remove watermarks?', answer: 'No. Editorial matching points do not establish licensing permission or export entitlement. Our free-access guide separates trial, watermark and commercial-use conditions; check the selected plan and every asset license before monetized or client work.' },
      { question: 'How are the recommendation and runner-up chosen?', answer: 'The existing quiz engine adds preference points from your answers to the five tools and shows a primary recommendation plus a runner-up. These points are editorial matching rules, not product ratings, measured performance or a guarantee that a plan meets every requirement.' },
    ],
    relatedLinks: [
      { path: '/compare/capcut-vs-premiere-pro', label: 'Review the CapCut versus Premiere decision criteria' },
      { path: '/free/best-free-video-and-design-software', label: 'Review free access, export limits and licensing conditions' },
      { path: '/blog/best-video-editing-software-for-youtube', label: 'Explore video editing choices for a YouTube workflow' },
      { path: '/blog/capcut-vs-premiere-pro', label: 'Compare quick social edits with Premiere control' },
      { path: '/blog/envato-elements-vs-freepik', label: 'Compare Envato and Freepik for creative assets' },
    ],
  },
  {
    categorySlug: 'ai-tools', subSlug: 'marketing-and-seo',
    metaTitle: 'Which marketing and SEO tool is right for me? (2026 Quiz)',
    metaDescription: 'Answer six questions to match your marketing workflow with Semrush, Surfer SEO, NeuronWriter, Frase or Writesonic. Compare research, briefs, optimization and drafting.',
    intro: 'Six questions to identify a primary tool and a runner-up from our five Marketing & SEO picks. The match uses the published audience, strengths and price labels; it does not test products or promise integrations, rankings or campaign results.',
    tieBreak: 'semrush',
    questions: [
      {
        id: 'marketing-work', question: 'What kind of marketing work takes most of your time?',
        options: [
          { label: 'SEO research, competitor analysis and ad research', favours: { semrush: 3 } },
          { label: 'Optimizing articles for search', favours: { 'surfer-seo': 3, neuronwriter: 2 } },
          { label: 'Drafting ad, social or email copy rather than running campaigns', favours: { writesonic: 3 } },
          { label: 'Planning search-led articles and content briefs', favours: { frase: 3, semrush: 1 } },
        ],
      },
      {
        id: 'team', question: 'Who will use the tool in your workflow?',
        options: [
          { label: 'A solo writer or a small team keeping costs down', favours: { neuronwriter: 3, frase: 1 } },
          { label: 'Writers and editors optimizing articles regularly', favours: { 'surfer-seo': 3, frase: 1 } },
          { label: 'A content team planning articles and handing off briefs', favours: { frase: 3 } },
          { label: 'An agency or marketing team doing broad SEO research', favours: { semrush: 3 } },
          { label: 'Marketers producing AI-assisted drafts', favours: { writesonic: 3 } },
        ],
      },
      {
        id: 'budget', question: 'What monthly-equivalent budget fits your main tool?',
        options: [
          { label: 'Up to $30 per month', favours: { neuronwriter: 3 } },
          { label: 'Above $30 and up to $60 per month', favours: { frase: 3, neuronwriter: 1 } },
          { label: 'Above $60 and up to $110 per month', favours: { writesonic: 3, 'surfer-seo': 3, frase: 1 } },
          { label: 'Above $110 per month for broader research', favours: { semrush: 3 } },
        ],
      },
      {
        id: 'technical-comfort', question: 'What level of SEO guidance do you want?',
        options: [
          { label: 'Clear recommendations in a budget-friendly content editor', favours: { neuronwriter: 3, 'surfer-seo': 1 } },
          { label: 'A scoring editor for a regular article-optimization process', favours: { 'surfer-seo': 3, neuronwriter: 1 } },
          { label: 'Search-result research organized into article briefs', favours: { frase: 3 } },
          { label: 'A broad platform for audits, research and rank tracking', favours: { semrush: 3 } },
          { label: 'AI writing help alongside SEO and visibility tools', favours: { writesonic: 3 } },
        ],
      },
      {
        id: 'speed-up', question: 'Which task do you most want to speed up?',
        options: [
          { label: 'Keyword research, competitor analysis and tracking', favours: { semrush: 3 } },
          { label: 'Improving an article with an optimization score', favours: { 'surfer-seo': 3, neuronwriter: 2 } },
          { label: 'Content analysis and optimization on a smaller budget', favours: { neuronwriter: 3 } },
          { label: 'Building a brief from top-ranking pages', favours: { frase: 3 } },
          { label: 'Drafting articles or ad copy and exploring AI-search visibility', favours: { writesonic: 3 } },
        ],
      },
      {
        id: 'existing-workflow', question: 'How should this tool fit your existing tool stack?',
        options: [
          { label: 'I already research topics; I need a focused article editor', favours: { 'surfer-seo': 3, neuronwriter: 2 } },
          { label: 'I already have an editor; I need broad research and tracking', favours: { semrush: 3 } },
          { label: 'I need research and briefs before handing work to writers', favours: { frase: 3 } },
          { label: 'I need AI-assisted drafting alongside my current workflow', favours: { writesonic: 3 } },
          { label: 'I need one low-cost content optimization tool', favours: { neuronwriter: 3 } },
          { label: 'A specific native integration is essential; I will verify it before buying', favours: { semrush: 1, 'surfer-seo': 1, neuronwriter: 1, frase: 1, writesonic: 1 } },
        ],
      },
    ],
    faqs: [
      { question: 'How is the recommendation calculated?', answer: 'Answers add editorial preference points to the five existing Marketing & SEO tools. The existing quiz engine shows a primary recommendation and a runner-up. These points describe workflow fit, not a product rating or a performance test.' },
      { question: 'Are the budget choices monthly payment quotes?', answer: 'No. They are monthly-equivalent budget bands based on the existing price labels. Some listed plans are billed annually, so an annual upfront payment may be required. Check the result card and its official pricing source before purchasing; budget alone does not determine the result.' },
      { question: 'Does this quiz verify native integrations?', answer: 'No. It asks how the tool should complement your existing workflow without claiming compatibility with a particular app. If a native integration is essential, check the provider’s current documentation before choosing.' },
      { question: 'Will these tools run my social or email campaigns?', answer: 'This quiz compares the five existing SEO and content tools. Drafting copy is different from scheduling posts, sending email or managing campaigns; the quiz does not establish those capabilities.' },
      { question: 'Is AI-search visibility included in every plan?', answer: 'Do not assume so. The existing Writesonic entry places AI-search visibility tracking on higher plans. Check the selected plan and official source rather than assuming the starting price includes every feature.' },
    ],
    relatedLinks: [
      { path: '/ai-tools', label: 'Explore the wider AI tools directory' },
      { path: '/blog/best-ai-tools-for-content-marketing', label: 'Build a content-marketing toolkit around your workflow' },
      { path: '/blog/semrush-vs-surfer-seo', label: 'Compare Semrush research with Surfer article optimization' },
    ],
  },
  {
    categorySlug: 'web-hosting-and-domains',
    metaTitle: 'Which web host is right for me? (2026 Quiz)',
    metaDescription: 'Answer six questions about your site, budget, technical comfort and growth plans. Compare your hosting fit across Hostinger, Bluehost, Cloudways, Kinsta and Namecheap.',
    intro: 'Six questions, a hosting recommendation and a runner-up from our existing five picks. The match uses your priorities and our published audience and strength descriptions; it is an editorial shortlist, not a capacity or performance test.',
    tieBreak: 'hostinger',
    questions: [
      {
        id: 'site-type', question: 'What kind of site are you building?',
        options: [
          { label: 'A budget blog or small business website', favours: { hostinger: 3, namecheap: 1 } },
          { label: 'My first WordPress website', favours: { bluehost: 3, hostinger: 1 } },
          { label: 'A growing business or store where server control matters', favours: { cloudways: 3, kinsta: 1 } },
          { label: 'A busy WordPress business site', favours: { kinsta: 3, cloudways: 1 } },
          { label: 'A domain registration and a simple starter site', favours: { namecheap: 3, hostinger: 1 } },
        ],
      },
      {
        id: 'budget', question: 'How do you want to balance cost and hosting support?',
        options: [
          { label: 'Keep the starting cost low', favours: { hostinger: 3, namecheap: 3, bluehost: 1 } },
          { label: 'Prioritize straightforward WordPress setup', favours: { bluehost: 3, hostinger: 1 } },
          { label: 'Prefer usage-based billing and room to adjust resources', favours: { cloudways: 3 } },
          { label: 'Pay more for managed WordPress and specialist support', favours: { kinsta: 3 } },
        ],
      },
      {
        id: 'technical-comfort', question: 'How comfortable are you with hosting settings?',
        options: [
          { label: 'I am a beginner and want a simple dashboard', favours: { hostinger: 3, bluehost: 3, namecheap: 2 } },
          { label: 'I use WordPress but prefer specialist hosting help', favours: { kinsta: 3, bluehost: 1 } },
          { label: 'I am comfortable selecting infrastructure and server sizes', favours: { cloudways: 3 } },
        ],
      },
      {
        id: 'traffic', question: 'What is your traffic situation?',
        options: [
          { label: 'A new or small site with modest needs', favours: { hostinger: 3, namecheap: 3, bluehost: 2 } },
          { label: 'A growing site whose resource needs may change', favours: { cloudways: 3, kinsta: 1 } },
          { label: 'An already busy WordPress site needing managed support', favours: { kinsta: 3, cloudways: 1 } },
        ],
      },
      {
        id: 'management', question: 'What would you most like help managing?',
        options: [
          { label: 'Everyday hosting through an easy control panel', favours: { hostinger: 3, bluehost: 1 } },
          { label: 'Getting WordPress set up for the first time', favours: { bluehost: 3, hostinger: 1 } },
          { label: 'A managed cloud platform while I choose the infrastructure', favours: { cloudways: 3 } },
          { label: 'Managed WordPress with backups, staging and expert support', favours: { kinsta: 3 } },
          { label: 'My domain names and a small budget hosting account', favours: { namecheap: 3 } },
        ],
      },
      {
        id: 'growth', question: 'How do you expect your hosting needs to grow?',
        options: [
          { label: 'Stay focused on one simple site for now', favours: { hostinger: 3, namecheap: 3, bluehost: 2 } },
          { label: 'Increase server resources or manage growing client sites', favours: { cloudways: 3 } },
          { label: 'Keep a growing WordPress business on managed hosting', favours: { kinsta: 3, cloudways: 1 } },
        ],
      },
    ],
    faqs: [
      { question: 'How does this hosting quiz choose a recommendation?', answer: 'Each answer adds editorial preference points to suitable tools in our existing five-host list. The existing quiz engine shows the highest-scoring tool and names a runner-up. These points are matching rules, not product ratings or measured performance.' },
      { question: 'Does the result guarantee that a host can handle my traffic?', answer: 'No. Traffic answers describe your needs without asserting visitor limits or measured capacity. Check the selected plan’s official resource limits and discuss your workload with the provider before buying.' },
      { question: 'Does the quiz change the prices or affiliate links?', answer: 'No. The result card uses the existing hosting tool data, price label and outbound-link handling. Introductory terms and renewal conditions still apply; check the linked official pricing source.' },
      { question: 'Should I compare a trial with a money-back guarantee?', answer: 'Yes. Our hosting trial and refund guide separates introductory access from paid purchases with conditional refunds. Read those conditions before committing to a hosting plan.' },
    ],
    relatedLinks: [
      { path: '/free/best-free-web-hosting', label: 'Check hosting trial access and refund exclusions' },
      { path: '/blog/kinsta-vs-cloudways', label: 'Explore the Kinsta and Cloudways management trade-offs' },
      { path: '/web-hosting-and-domains', label: 'Explore the five hosting provider options' },
      { path: '/compare/hostinger-vs-cloudways', label: 'Compare a starter host with flexible cloud hosting' },
    ],
  },
  {
    categorySlug: 'vpn-and-security',
    metaTitle: 'Which VPN is right for me? (2026 Quiz)',
    metaDescription:
      'Answer 3 quick questions and get a VPN recommendation from our top 5, based on speed, price and privacy.',
    intro:
      'Three questions, one VPN recommendation. We match your answers to the VPNs in our top 5, based on what they actually do best.',
    tieBreak: 'nordvpn',
    questions: [
      {
        id: 'priority',
        question: 'What matters most to you?',
        options: [
          { label: 'Speed and streaming', favours: { nordvpn: 3, surfshark: 1 } },
          { label: 'Lowest price', favours: { surfshark: 3, 'private-internet-access': 2 } },
          { label: 'Ease of use', favours: { expressvpn: 3 } },
          { label: 'A free option first', favours: { 'proton-vpn': 3 } },
        ],
      },
      {
        id: 'devices',
        question: 'How many devices will you connect?',
        options: [
          { label: 'Just one or two', favours: { expressvpn: 1, nordvpn: 1 } },
          { label: 'A household (5+)', favours: { surfshark: 3, 'private-internet-access': 2 } },
        ],
      },
      {
        id: 'control',
        question: 'Do you like tinkering with settings?',
        options: [
          { label: 'Yes, I want control', favours: { 'private-internet-access': 3 } },
          { label: 'No, just make it work', favours: { expressvpn: 2, nordvpn: 1 } },
        ],
      },
    ],
    faqs: [
      {
        question: 'How does this quiz pick a VPN?',
        answer:
          'It scores your answers against the five VPNs in our top 5 using what each one is best at. The tool with the highest score is recommended.',
      },
      {
        question: 'Is a free VPN really safe?',
        answer:
          'Only from well-known, audited providers. Proton VPN is the only free VPN in our list we recommend for daily use. Unknown free VPNs often log traffic or show ads.',
      },
    ],
  },
  {
    categorySlug: 'email-marketing',
    metaTitle: 'Which email marketing tool is right for me? (2026 Quiz)',
    metaDescription:
      'Answer 3 quick questions and get an email marketing recommendation from our top 5.',
    intro:
      'Three questions, one email marketing recommendation. We match your answers to the tools in our top 5 based on what you plan to do with your list.',
    tieBreak: 'mailerlite',
    questions: [
      {
        id: 'goal',
        question: 'What are you building?',
        options: [
          { label: 'A simple newsletter', favours: { mailerlite: 3 } },
          { label: 'A creator business', favours: { kit: 3 } },
          { label: 'A publication with ads', favours: { beehiiv: 3 } },
          { label: 'An online store or funnel', favours: { 'systeme-io': 3, getresponse: 2 } },
        ],
      },
      {
        id: 'size',
        question: 'Roughly how big is your list?',
        options: [
          { label: 'Just starting (0–500)', favours: { mailerlite: 2, kit: 1 } },
          { label: 'Growing (500–5,000)', favours: { kit: 1, getresponse: 2 } },
          { label: 'Large (5,000+)', favours: { getresponse: 3, beehiiv: 1 } },
        ],
      },
      {
        id: 'extras',
        question: 'Do you want to sell things from your emails?',
        options: [
          { label: 'Yes, products or courses', favours: { kit: 2, 'systeme-io': 3 } },
          { label: 'No, just send emails', favours: { mailerlite: 2, beehiiv: 1 } },
        ],
      },
    ],
    faqs: [
      {
        question: 'How does this quiz choose a tool?',
        answer:
          'It scores your answers against the five tools in our email marketing top 5. The highest score wins.',
      },
      {
        question: 'Can I switch tools later?',
        answer:
          'Yes. All five tools support CSV import and can migrate subscribers and tags. Plan a quiet day so nothing breaks during the move.',
      },
    ],
  },
  {
    categorySlug: 'ai-tools',
    subSlug: 'video-and-voice',
    metaTitle: 'Which AI video tool is right for me? (2026 Quiz)',
    metaDescription:
      'Answer 3 quick questions and get an AI video or voice recommendation from our top 5.',
    intro:
      'Three questions, one AI video or voice recommendation, matched to the tools in our top 5.',
    tieBreak: 'fliki',
    questions: [
      {
        id: 'output',
        question: 'What do you want to make?',
        options: [
          { label: 'A narrated video from text', favours: { fliki: 3, pictory: 2 } },
          { label: 'A presenter on screen', favours: { synthesia: 3 } },
          { label: 'A voiceover only', favours: { elevenlabs: 3 } },
          { label: 'Short AI motion clips', favours: { 'kling-ai': 3 } },
        ],
      },
      {
        id: 'source',
        question: 'Do you already have content to reuse?',
        options: [
          { label: 'Yes, articles or recordings', favours: { pictory: 3 } },
          { label: 'No, starting from scratch', favours: { fliki: 2, synthesia: 1 } },
        ],
      },
      {
        id: 'priority',
        question: 'What matters most?',
        options: [
          { label: 'Natural voices', favours: { elevenlabs: 2, fliki: 2 } },
          { label: 'Speed', favours: { synthesia: 1, 'kling-ai': 2 } },
        ],
      },
    ],
    faqs: [
      {
        question: 'How does this quiz pick a tool?',
        answer:
          'It scores your answers against the five tools in our AI video & voice top 5. The highest score wins.',
      },
      {
        question: 'Do I need a camera for any of these?',
        answer:
          'No. All five tools generate video or voice from text. None require filming.',
      },
    ],
  },
  {
    categorySlug: 'ai-tools',
    subSlug: 'image-and-design',
    metaTitle: 'Which AI image tool is right for me? (2026 Quiz)',
    metaDescription:
      'Answer 3 quick questions and get an AI image generator recommendation from our top 5.',
    intro:
      'Three questions, one AI image tool recommendation, matched to what you plan to create.',
    tieBreak: 'adobe-firefly',
    questions: [
      {
        id: 'output',
        question: 'What are you making?',
        options: [
          { label: 'Images with text (logos, posters)', favours: { ideogram: 3 } },
          { label: 'Commercial-safe images', favours: { 'adobe-firefly': 3 } },
          { label: 'Stock + AI in one place', favours: { freepik: 3 } },
          { label: 'Experiments with many models', favours: { krea: 2, openart: 3 } },
        ],
      },
      {
        id: 'skill',
        question: 'How much control do you want?',
        options: [
          { label: 'Simple prompts only', favours: { ideogram: 1, freepik: 2 } },
          { label: 'Advanced models and editing', favours: { krea: 3, openart: 2 } },
        ],
      },
      {
        id: 'budget',
        question: 'Are you planning to pay?',
        options: [
          { label: 'Yes, if it is worth it', favours: { 'adobe-firefly': 1, freepik: 2 } },
          { label: 'Free only for now', favours: { ideogram: 2, krea: 1 } },
        ],
      },
    ],
    faqs: [
      {
        question: 'How does this quiz pick a tool?',
        answer:
          'It scores your answers against the five tools in our AI image & design top 5. The highest score wins.',
      },
      {
        question: 'Can I use the output commercially?',
        answer:
          'It depends on the tool and your plan. Check each tool’s licence page before you publish or sell anything generated on the free tier.',
      },
    ],
  },
  {
    categorySlug: 'ai-tools',
    subSlug: 'meeting-notes',
    metaTitle: 'Which AI meeting notetaker is right for me? (2026 Quiz)',
    metaDescription:
      'Answer 3 quick questions and get a meeting notetaker recommendation from our top 5.',
    intro:
      'Three questions, one AI meeting notetaker recommendation, matched to how you run meetings.',
    tieBreak: 'fathom',
    questions: [
      {
        id: 'size',
        question: 'Who is this for?',
        options: [
          { label: 'Just me', favours: { fathom: 3, otter: 1 } },
          { label: 'A small team', favours: { fireflies: 2, tldv: 3 } },
          { label: 'A larger team or sales', favours: { tldv: 3, fireflies: 2 } },
        ],
      },
      {
        id: 'goal',
        question: 'What will you use it for most?',
        options: [
          { label: 'Recording and transcripts', favours: { fathom: 3, notta: 1 } },
          { label: 'Live transcription during calls', favours: { otter: 3 } },
          { label: 'Sharing highlights with the team', favours: { tldv: 3 } },
          { label: 'Searchable summaries', favours: { fireflies: 2, notta: 2 } },
        ],
      },
      {
        id: 'budget',
        question: 'Are you planning to pay?',
        options: [
          { label: 'Yes', favours: { fireflies: 1, tldv: 2 } },
          { label: 'Free only for now', favours: { fathom: 3, otter: 1 } },
        ],
      },
    ],
    faqs: [
      {
        question: 'How does this quiz pick a tool?',
        answer:
          'It scores your answers against the five tools in our meeting notes top 5. The highest score wins.',
      },
      {
        question: 'Do these tools work with Zoom, Meet and Teams?',
        answer:
          'Most of them do. Check each tool’s official website for the exact list of supported meeting apps.',
      },
    ],
  },
  {
    categorySlug: 'ai-tools',
    subSlug: 'chatbots',
    metaTitle: 'Which AI chatbot builder is right for me? (2026 Quiz)',
    metaDescription:
      'Answer 3 quick questions and get an AI chatbot recommendation from our top 5.',
    intro:
      'Three questions, one AI chatbot recommendation, matched to what you need it to do.',
    tieBreak: 'tidio',
    questions: [
      {
        id: 'goal',
        question: 'What is the chatbot for?',
        options: [
          { label: 'Live chat + basic bot on a small site', favours: { tidio: 3 } },
          { label: 'Answering from my own documents', favours: { chatbase: 3, customgpt: 2 } },
          { label: 'Guided lead-capture flows', favours: { landbot: 3 } },
          { label: 'A custom AI agent with code', favours: { botpress: 3 } },
        ],
      },
      {
        id: 'skill',
        question: 'How technical are you?',
        options: [
          { label: 'I want no-code', favours: { tidio: 1, chatbase: 2, landbot: 1 } },
          { label: 'I am comfortable with code', favours: { botpress: 3 } },
        ],
      },
      {
        id: 'budget',
        question: 'Will you pay for a plan?',
        options: [
          { label: 'Free first', favours: { tidio: 2, chatbase: 2 } },
          { label: 'Yes, if it fits', favours: { botpress: 1, customgpt: 2 } },
        ],
      },
    ],
    faqs: [
      {
        question: 'How does this quiz pick a tool?',
        answer:
          'It scores your answers against the five tools in our chatbots top 5. The highest score wins.',
      },
      {
        question: 'Can a free plan run a real chatbot?',
        answer:
          'Tidio and Chatbase offer free tiers you can embed on a real site. For steady traffic you will likely move to a paid plan.',
      },
    ],
  },
  {
    categorySlug: 'software-and-productivity',
    subSlug: 'project-management',
    metaTitle: 'Which project management tool is right for me? (2026 Quiz)',
    metaDescription:
      'Answer 3 quick questions and get a project management recommendation from our top 5.',
    intro:
      'Three questions, one project management recommendation, matched to how your team works.',
    tieBreak: 'asana',
    questions: [
      {
        id: 'team',
        question: 'How big is your team?',
        options: [
          { label: 'Just me or 2–3 people', favours: { asana: 2, clickup: 2 } },
          { label: '5–15 people', favours: { 'monday-com': 3, asana: 1 } },
          { label: 'Agencies with clients', favours: { teamwork: 3 } },
          { label: 'Larger, with reporting needs', favours: { wrike: 3 } },
        ],
      },
      {
        id: 'style',
        question: 'How do you like to work?',
        options: [
          { label: 'Clean and simple', favours: { asana: 3 } },
          { label: 'Everything in one tool', favours: { clickup: 3 } },
          { label: 'Visual boards', favours: { 'monday-com': 3 } },
        ],
      },
      {
        id: 'extras',
        question: 'Do you track time or bill clients?',
        options: [
          { label: 'Yes', favours: { teamwork: 3 } },
          { label: 'No', favours: { asana: 1, clickup: 1 } },
        ],
      },
    ],
    faqs: [
      {
        question: 'How does this quiz pick a tool?',
        answer:
          'It scores your answers against the five tools in our project management top 5. The highest score wins.',
      },
      {
        question: 'Do these tools have a free plan?',
        answer:
          'Yes, all five offer a free plan, but limits vary by tool. Check each official website for current seat and feature limits.',
      },
    ],
  },
  {
    categorySlug: 'software-and-productivity',
    subSlug: 'note-taking',
    metaTitle: 'Which note-taking app is right for me? (2026 Quiz)',
    metaDescription:
      'Answer 3 quick questions and get a note-taking app recommendation from our top 5.',
    intro:
      'Three questions, one note-taking app recommendation, matched to how you capture ideas.',
    tieBreak: 'craft',
    questions: [
      {
        id: 'device',
        question: 'What do you use most?',
        options: [
          { label: 'Apple devices', favours: { craft: 3 } },
          { label: 'Windows or mixed', favours: { evernote: 2, coda: 1 } },
          { label: 'Mainly the web', favours: { coda: 2, mem: 1 } },
        ],
      },
      {
        id: 'style',
        question: 'How do you take notes?',
        options: [
          { label: 'Quick capture, find later', favours: { mem: 3, evernote: 2 } },
          { label: 'Linked knowledge base', favours: { capacities: 3 } },
          { label: 'Docs that act like apps', favours: { coda: 3 } },
        ],
      },
      {
        id: 'budget',
        question: 'Free plan only?',
        options: [
          { label: 'Yes', favours: { craft: 2, evernote: 2 } },
          { label: 'Can pay', favours: { capacities: 1, mem: 2 } },
        ],
      },
    ],
    faqs: [
      {
        question: 'How does this quiz pick an app?',
        answer:
          'It scores your answers against the five apps in our note-taking top 5. The highest score wins.',
      },
      {
        question: 'Do these apps sync across devices?',
        answer:
          'Most do, but some free tiers limit devices or storage. Check each app’s plan page before you commit.',
      },
    ],
  },
  {
    categorySlug: 'software-and-productivity',
    subSlug: 'cloud-storage',
    metaTitle: 'Which cloud storage is right for me? (2026 Quiz)',
    metaDescription:
      'Answer 3 quick questions and get a cloud storage recommendation from our top 5.',
    intro:
      'Three questions, one cloud storage recommendation, matched to how you store and share files.',
    tieBreak: 'pcloud',
    questions: [
      {
        id: 'privacy',
        question: 'How sensitive are your files?',
        options: [
          { label: 'Very — encrypted please', favours: { 'sync-com': 3, 'proton-drive': 3 } },
          { label: 'Normal personal files', favours: { pcloud: 2, icedrive: 1 } },
          { label: 'Team collaboration', favours: { dropbox: 3 } },
        ],
      },
      {
        id: 'budget',
        question: 'Do you want to avoid subscriptions?',
        options: [
          { label: 'Yes, one-time if possible', favours: { pcloud: 3 } },
          { label: 'Monthly is fine', favours: { 'sync-com': 1, dropbox: 1 } },
        ],
      },
      {
        id: 'size',
        question: 'How much free space do you want?',
        options: [
          { label: 'As much as possible', favours: { pcloud: 2, icedrive: 3 } },
          { label: 'A few GB is fine', favours: { 'proton-drive': 1, dropbox: 1 } },
        ],
      },
    ],
    faqs: [
      {
        question: 'How does this quiz pick a tool?',
        answer:
          'It scores your answers against the five services in our cloud storage top 5. The highest score wins.',
      },
      {
        question: 'Which free plan gives the most space?',
        answer:
          'pCloud and Icedrive both offer 10 GB free, the most among our picks. Sync.com offers 5 GB and Dropbox 2 GB.',
      },
    ],
  },
  {
    categorySlug: 'software-and-productivity',
    subSlug: 'presentations',
    metaTitle: 'Which presentation tool is right for me? (2026 Quiz)',
    metaDescription:
      'Answer 3 quick questions and get a presentation tool recommendation from our top 5.',
    intro:
      'Three questions, one presentation tool recommendation, matched to how you build decks.',
    tieBreak: 'gamma',
    questions: [
      {
        id: 'speed',
        question: 'How do you like to start a deck?',
        options: [
          { label: 'From a prompt', favours: { gamma: 3 } },
          { label: 'From a blank slide', favours: { pitch: 2, visme: 1 } },
          { label: 'From a template', favours: { visme: 2, prezi: 1 } },
        ],
      },
      {
        id: 'team',
        question: 'Does a team work on it together?',
        options: [
          { label: 'Yes', favours: { pitch: 3 } },
          { label: 'No, just me', favours: { gamma: 2, prezi: 1 } },
        ],
      },
      {
        id: 'style',
        question: 'What is the style?',
        options: [
          { label: 'Clean and minimal', favours: { gamma: 1, pitch: 2 } },
          { label: 'Zooming, story-style', favours: { prezi: 3 } },
          { label: 'Data-heavy visuals', favours: { visme: 3 } },
        ],
      },
    ],
    faqs: [
      {
        question: 'How does this quiz pick a tool?',
        answer:
          'It scores your answers against the five tools in our presentations top 5. The highest score wins.',
      },
      {
        question: 'Do free decks have branding?',
        answer:
          'Some do. Gamma, for example, keeps its branding on free decks. Check each tool’s free-plan terms if you need a clean deck.',
      },
    ],
  },
  {
    categorySlug: 'software-and-productivity',
    subSlug: 'automation',
    metaTitle: 'Which automation tool is right for me? (2026 Quiz)',
    metaDescription:
      'Answer 3 quick questions and get an automation tool recommendation from our top 5.',
    intro:
      'Three questions, one automation recommendation, matched to your workflows.',
    tieBreak: 'make',
    questions: [
      {
        id: 'skill',
        question: 'How technical are you?',
        options: [
          { label: 'No-code only', favours: { make: 3, activepieces: 2, 'pabbly-connect': 1 } },
          { label: 'Happy to self-host', favours: { n8n: 3 } },
          { label: 'Some code is fine', favours: { latenode: 2, n8n: 1 } },
        ],
      },
      {
        id: 'volume',
        question: 'How many tasks per month?',
        options: [
          { label: 'A few hundred', favours: { make: 2, activepieces: 2 } },
          { label: 'Thousands on a budget', favours: { 'pabbly-connect': 3 } },
          { label: 'High or unlimited', favours: { n8n: 3 } },
        ],
      },
      {
        id: 'ai',
        question: 'Do you want AI steps in your workflows?',
        options: [
          { label: 'Yes', favours: { latenode: 2, activepieces: 2 } },
          { label: 'Not really', favours: { make: 1, 'pabbly-connect': 1 } },
        ],
      },
    ],
    faqs: [
      {
        question: 'How does this quiz pick a tool?',
        answer:
          'It scores your answers against the five tools in our automation top 5. The highest score wins.',
      },
      {
        question: 'Is n8n really free?',
        answer:
          'n8n is free to self-host with no execution limits. The cloud version is paid.',
      },
    ],
  },
  {
    categorySlug: 'freelance-platforms',
    metaTitle: 'Which freelance platform is right for me? (2026 Quiz)',
    metaDescription:
      'Answer 3 quick questions and get a freelance platform recommendation from our top 5.',
    intro:
      'Three questions, one freelance platform recommendation — matched to whether you are hiring or freelancing.',
    tieBreak: 'upwork',
    questions: [
      {
        id: 'side',
        question: 'Are you hiring or freelancing?',
        options: [
          { label: 'Hiring for a quick job', favours: { fiverr: 3, '99designs': 1 } },
          { label: 'Hiring for a longer project', favours: { upwork: 3, toptal: 1 } },
          { label: 'Freelancing', favours: { fiverr: 2, upwork: 2 } },
          { label: 'Freelancing at senior level', favours: { toptal: 3 } },
        ],
      },
      {
        id: 'budget',
        question: 'What is the budget style?',
        options: [
          { label: 'Fixed prices, small orders', favours: { fiverr: 3 } },
          { label: 'Hourly or contract', favours: { upwork: 3 } },
          { label: 'Contest-style design', favours: { '99designs': 3, 'freelancer-com': 1 } },
        ],
      },
      {
        id: 'quality',
        question: 'How important is vetting?',
        options: [
          { label: 'Critical — I want screened talent', favours: { toptal: 3 } },
          { label: 'Nice but not required', favours: { upwork: 1, fiverr: 1 } },
        ],
      },
    ],
    faqs: [
      {
        question: 'How does this quiz pick a platform?',
        answer:
          'It scores your answers against the five platforms in our freelance platforms top 5. The highest score wins.',
      },
      {
        question: 'Which platform has the lowest fees?',
        answer:
          'Fees vary by platform and contract type. Check the current fee pages on each site before you rely on them.',
      },
    ],
  },
  {
    categorySlug: 'language-learning',
    metaTitle: 'Which language app is right for me? (2026 Quiz)',
    metaDescription:
      'Answer 3 quick questions and get a language learning recommendation from our top 5.',
    intro:
      'Three questions, one language learning recommendation, matched to how you like to learn.',
    tieBreak: 'babbel',
    questions: [
      {
        id: 'style',
        question: 'How do you want to learn?',
        options: [
          { label: 'Short app lessons', favours: { babbel: 3 } },
          { label: 'Live classes with teachers', favours: { lingoda: 3 } },
          { label: 'One-to-one tutoring', favours: { italki: 3, preply: 2 } },
          { label: 'Audio-first self-study', favours: { 'rocket-languages': 3 } },
        ],
      },
      {
        id: 'budget',
        question: 'What is your budget?',
        options: [
          { label: 'Low monthly', favours: { babbel: 1, italki: 2 } },
          { label: 'Higher for live teaching', favours: { lingoda: 3, preply: 1 } },
        ],
      },
      {
        id: 'commitment',
        question: 'How much time per week?',
        options: [
          { label: 'Under an hour', favours: { babbel: 2, 'rocket-languages': 1 } },
          { label: 'A few hours', favours: { lingoda: 2, italki: 1 } },
        ],
      },
    ],
    faqs: [
      {
        question: 'How does this quiz pick an app?',
        answer:
          'It scores your answers against the five options in our language learning top 5. The highest score wins.',
      },
      {
        question: 'Can an app make me fluent?',
        answer:
          'On its own, unlikely. Fluency usually needs live conversation practice as well as app lessons.',
      },
    ],
  },
  {
    categorySlug: 'online-courses',
    metaTitle: 'Which online learning platform is right for me? (2026 Quiz)',
    metaDescription:
      'Answer 3 quick questions and get an online course platform recommendation from our top 5.',
    intro:
      'Three questions, one learning platform recommendation, matched to what you want to learn.',
    relatedLinks: [{ path: '/free/best-free-online-course-platforms', label: 'Review free learning options before starting a subscription' }],
    tieBreak: 'coursera',
    questions: [
      {
        id: 'topic',
        question: 'What do you want to learn?',
        options: [
          { label: 'Data, coding, AI', favours: { datacamp: 3, scrimba: 2 } },
          { label: 'A wide range of subjects', favours: { coursera: 3 } },
          { label: 'Creative skills', favours: { skillshare: 3 } },
          { label: 'Inspiration from famous teachers', favours: { masterclass: 3 } },
        ],
      },
      {
        id: 'style',
        question: 'How do you like to learn?',
        options: [
          { label: 'Hands-on exercises', favours: { datacamp: 2, scrimba: 3 } },
          { label: 'Watching videos', favours: { masterclass: 2, skillshare: 1 } },
          { label: 'University certificates', favours: { coursera: 3 } },
        ],
      },
      {
        id: 'budget',
        question: 'Free first?',
        options: [
          { label: 'Yes', favours: { coursera: 2, scrimba: 2, datacamp: 1 } },
          { label: 'Can pay for the right one', favours: { masterclass: 1, skillshare: 1 } },
        ],
      },
    ],
    faqs: [
      {
        question: 'How does this quiz pick a platform?',
        answer:
          'It scores your answers against the five platforms in our online courses top 5. The highest score wins.',
      },
      {
        question: 'Do these platforms give certificates?',
        answer:
          'Coursera and DataCamp do. Skillshare, MasterClass and Scrimba’s free tier generally do not.',
      },
    ],
  },
  {
    categorySlug: 'travel',
    subSlug: 'flights',
    metaTitle: 'Which flight booking site is right for me? (2026 Quiz)',
    metaDescription:
      'Answer 3 quick questions and get a flight booking site recommendation from our top 5.',
    intro:
      'Three questions, one flight booking recommendation, matched to how you plan trips.',
    tieBreak: 'kiwi-com',
    questions: [
      {
        id: 'priority',
        question: 'What matters most?',
        options: [
          { label: 'The absolute lowest fare', favours: { 'kiwi-com': 3, cheapoair: 1 } },
          { label: 'One familiar platform for everything', favours: { 'trip-com': 3 } },
          { label: 'Flexible payment options', favours: { 'alternative-airlines': 3 } },
        ],
      },
      {
        id: 'region',
        question: 'Where are you flying?',
        options: [
          { label: 'Asia', favours: { 'trip-com': 3 } },
          { label: 'Europe / mixed', favours: { edreams: 2, 'kiwi-com': 1 } },
          { label: 'Anywhere', favours: { cheapoair: 1, 'alternative-airlines': 1 } },
        ],
      },
      {
        id: 'bundles',
        question: 'Do you want to bundle hotels and cars?',
        options: [
          { label: 'Yes', favours: { edreams: 2, cheapoair: 2 } },
          { label: 'No, flights only', favours: { 'kiwi-com': 1, 'alternative-airlines': 1 } },
        ],
      },
    ],
    faqs: [
      {
        question: 'How does this quiz pick a site?',
        answer:
          'It scores your answers against the five booking sites in our flights top 5. The highest score wins.',
      },
      {
        question: 'What if my flight is cancelled on a self-transfer trip?',
        answer:
          'On mixed-airline itineraries, a delay on one flight may not be covered by the next airline. Read the booking terms before paying.',
      },
    ],
  },
]

// ---------------------------------------------------------------------------
// Build pages from defs, skipping lists that are not fully populated
// ---------------------------------------------------------------------------

function findList(categorySlug: string, subSlug?: string): Tool[] | undefined {
  const category: Category | undefined = allCategories.find((c) => c.slug === categorySlug)
  if (!category) return undefined
  if (subSlug) return category.subcategories?.find((s) => s.slug === subSlug)?.tools
  return category.tools
}

export type QuizPage = {
  slug: string
  metaTitle: string
  metaDescription: string
  intro: string
  questions: QuizQuestion[]
  relatedLinks?: { path: string; label: string }[]
  tools: Tool[]
  tieBreak: string
  listPath: string
  listLabel: string
  faqs: { question: string; answer: string }[]
}

function buildPages(): QuizPage[] {
  const pages: QuizPage[] = []
  for (const def of defs) {
    const tools = findList(def.categorySlug, def.subSlug)
    if (!tools || !tools.every(isLive)) continue

    const category = allCategories.find((c) => c.slug === def.categorySlug)!
    const sub = def.subSlug
      ? category.subcategories?.find((s) => s.slug === def.subSlug)
      : undefined

    const listPath = sub ? `/${category.slug}/${sub.slug}` : `/${category.slug}`
    const listLabel = sub ? `${category.name} · ${sub.name} top 5` : `${category.name} top 5`

    const slug = sub ? `${category.slug}-${sub.slug}` : category.slug

    // tieBreak must exist in this list; otherwise fall back to the top pick.
    const tieBreak =
      tools.find((t) => t.slug === def.tieBreak)?.slug ?? tools[0]?.slug ?? ''

    pages.push({
      slug,
      metaTitle: def.metaTitle,
      metaDescription: def.metaDescription,
      intro: def.intro,
      questions: def.questions,
      relatedLinks: def.relatedLinks,
      tools,
      tieBreak,
      listPath,
      listLabel,
      faqs: def.faqs,
    })
  }
  return pages
}

export const quizPages = buildPages()

export function getQuizPage(slug: string) {
  return quizPages.find((page) => page.slug === slug)
        }
