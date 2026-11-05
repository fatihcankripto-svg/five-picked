import type { Metadata } from 'next'
import Link from 'next/link'

const title = 'Latest News: AI, Software & Technology | FIVE PICKED'
const description =
  'Catch up on company announcements, AI launches and software developments, with clear summaries and links to the original sources.'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: 'https://fivepicked.com/news',
  },
  openGraph: {
    title,
    description,
    url: 'https://fivepicked.com/news',
    siteName: 'FIVE PICKED',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
}

type NewsItem = {
  slug: string
  title: string
  date: string
  company: string
  category: string
  paragraphs: string[]
  source: string
  sourceName: string
  relatedHref: string
  relatedLabel: string
}

const news: NewsItem[] = [
  {
    slug: 'openai-pierre-acquisition',
    title: 'OpenAI plans Pierre acquisition to expand Codex',
    date: '2026-11-04',
    company: 'OpenAI',
    category: 'Company news',
    paragraphs: [
      'OpenAI has announced plans to acquire Pierre Computer Company, the developer-tools business behind Code Storage and several open-source projects. Its Trees and Diffs libraries already help people browse files and review changes in the Codex app.',
      'OpenAI says Pierre’s open-source projects will remain open source. Code Storage customers can continue using the service after closing while the companies work on bringing its features into Codex. The deal still needs to meet closing conditions, including regulatory approvals.',
    ],
    source: 'https://openai.com/index/openai-to-acquire-pierre/',
    sourceName: 'OpenAI announcement',
    relatedHref: '/ai-tools',
    relatedLabel: 'Explore AI tools',
  },
  {
    slug: 'openai-images-2-6',
    title: 'Images 2.6 brings GIF creation and faster image generation',
    date: '2026-11-04',
    company: 'OpenAI',
    category: 'AI & creativity',
    paragraphs: [
      'OpenAI has introduced Images 2.6 across ChatGPT, Codex and its API. The update adds GIF creation, more precise editing and new controls for developers. OpenAI says image generation is 50% faster than before.',
      'The API offers Flare and Sunburst models for different needs, alongside image markup and SVG exports. For creators, the main change is a shorter path from an initial image to an edited or animated asset. The speed figures are OpenAI’s claims, not results from FivePicked testing.',
    ],
    source: 'https://openai.com/index/introducing-images-2-6/',
    sourceName: 'OpenAI product announcement',
    relatedHref: '/video-and-design-software',
    relatedLabel: 'Explore creative software',
  },
  {
    slug: 'openai-linux-security-research',
    title: 'OpenAI reports 948 Linux privilege-escalation vulnerabilities',
    date: '2026-11-04',
    company: 'OpenAI',
    category: 'Security',
    paragraphs: [
      'OpenAI says an autonomous security-research pipeline generated evidence and candidate patches for 948 distinct Linux vulnerabilities that could allow a local user to gain higher privileges. The company reports around $1.2 million in API costs for the research run.',
      'Human researchers reviewed the outputs before reporting findings. Candidate patches are not the same as fixes already installed on users’ systems. The work shows why finding weaknesses, checking them and getting reliable fixes reviewed are separate parts of software security.',
    ],
    source: 'https://openai.com/index/a-thousand-fewer-paths-to-root/',
    sourceName: 'OpenAI security research',
    relatedHref: '/vpn-and-security',
    relatedLabel: 'Explore security tools',
  },
  {
    slug: 'canva-team-restructuring',
    title: 'Canva restructuring affects 1,271 employees',
    date: '2026-11-03',
    company: 'Canva',
    category: 'Company news',
    paragraphs: [
      'Canva CEO Melanie Perkins has announced organisational changes affecting 1,271 employees, or 22% of the company. That total includes people facing changes to their roles or relocation, as well as employees leaving the business.',
      'Canva plans to bring Product, Growth and Platform into one organisation, simplify management layers and base more closely connected teams together. Perkins says growth has slowed and describes the changes as a reset for the next stage of the company. The affected total should not be read as 1,271 confirmed layoffs.',
    ],
    source: 'https://www.canva.com/newsroom/news/canva-team-update/',
    sourceName: 'Canva CEO’s team update',
    relatedHref: '/video-and-design-software',
    relatedLabel: 'Explore design software',
  },
  {
    slug: 'affinity-ipad-launch',
    title: 'Affinity brings sketching, photo editing and layout to one iPad app',
    date: '2026-11-03',
    company: 'Canva / Affinity',
    category: 'Creative software',
    paragraphs: [
      'Canva has announced Affinity for iPad, bringing sketching, vector work, photo editing and page layout into one application. Projects use a shared file format so users can move between different kinds of creative work without repeatedly exporting files.',
      'The company says core tools are free for individuals, with a Canva account required. AI Studio features require a premium Canva account. Canva also reports that the unified desktop Affinity has passed seven million sign-ups; that figure does not establish how many people are active or paying users.',
    ],
    source: 'https://www.canva.com/newsroom/news/affinity-for-ipad/',
    sourceName: 'Canva’s Affinity announcement',
    relatedHref: '/video-and-design-software',
    relatedLabel: 'Compare creative tools',
  },
  {
    slug: 'openai-jill-hazelbaker',
    title: 'Jill Hazelbaker moves from Uber to OpenAI',
    date: '2026-11-03',
    company: 'OpenAI',
    category: 'Leadership',
    paragraphs: [
      'OpenAI has appointed Jill Hazelbaker as its incoming Chief Corporate Affairs Officer. She will lead global communications and corporate positioning after serving as Uber’s President and Chief Corporate Affairs Officer.',
      'Hazelbaker has also held senior roles at Snap and Google. OpenAI says the appointment will strengthen how it engages with the public and institutions shaping AI’s future. The announcement concerns company leadership, rather than a new ChatGPT feature or subscription change.',
    ],
    source:
      'https://openai.com/index/jill-hazelbaker-chief-corporate-affairs-officer/',
    sourceName: 'OpenAI leadership announcement',
    relatedHref: '/ai-tools',
    relatedLabel: 'Explore AI tools',
  },
  {
    slug: 'openai-astra-hardware-engineering',
    title: 'OpenAI shows how Astra helped with physical hardware design',
    date: '2026-11-03',
    company: 'OpenAI',
    category: 'AI research',
    paragraphs: [
      'OpenAI has published examples of GPT-6 Astra supporting engineering work for physical devices. The report describes a device-design project and work with hardware teams, extending the discussion of AI beyond writing software.',
      'These are company-reported demonstrations, not proof that AI can replace a complete hardware-development process. The useful distinction is between speeding up parts of design work and checking whether a device can actually be manufactured and used reliably.',
    ],
    source:
      'https://openai.com/index/accelerating-engineering-for-the-physical-world/',
    sourceName: 'OpenAI engineering report',
    relatedHref: '/ai-tools',
    relatedLabel: 'Explore AI tools',
  },
  {
    slug: 'windows-11-8gb-memory',
    title: 'Microsoft targets better Windows 11 performance on 8 GB PCs',
    date: '2026-11-03',
    company: 'Microsoft',
    category: 'Software',
    paragraphs: [
      'Microsoft has detailed Windows 11 improvements aimed at computers with 8 GB of RAM. The work includes changes to memory compression, background activity and the memory used by Windows and several Microsoft apps.',
      'Microsoft reports gains in particular responsiveness and multitasking tests. Those results do not guarantee the same improvement on every computer. The company also separates changes available now from further memory-saving work it plans to introduce later.',
    ],
    source:
      'https://blogs.windows.com/windowsexperience/2026/11/03/raising-the-bar-for-8-gb-windows-11-pcs-whats-improved-and-how-to-get-it/',
    sourceName: 'Microsoft Windows Experience Blog',
    relatedHref: '/software-and-productivity',
    relatedLabel: 'Explore productivity software',
  },
  {
    slug: 'google-guided-learning-schools',
    title: 'Google adds Guided Learning and revises school AI controls',
    date: '2026-11-03',
    company: 'Google',
    category: 'Learning & AI',
    paragraphs: [
      'Google has announced Guided Learning capabilities for Search and Classroom. The approach is intended to help students work through problems with prompts and explanations, rather than simply receive a final answer.',
      'Google is also changing how schools control AI access for student accounts. Availability depends on the product, administrator settings and rollout. A school pilot should not be confused with access for every user. The announcement adds to the debate about how AI should support classroom learning.',
    ],
    source:
      'https://blog.google/products-and-platforms/products/education/ai-learning-era-updates-2026/',
    sourceName: 'Google Education announcement',
    relatedHref: '/online-courses',
    relatedLabel: 'Explore online learning',
  },
  {
    slug: 'google-ai-educator-training-expansion',
    title: 'Google expands its free AI training for teachers',
    date: '2026-11-03',
    company: 'Google',
    category: 'Online learning',
    paragraphs: [
      'Google says its no-cost AI Educator Series will expand to Brazil, Mexico, Spain, Australia and sub-Saharan Africa in the coming months. The on-demand training is designed to help teachers use AI for lessons and routine work.',
      'The expansion covers four named countries and a wider region. It is a planned rollout, so the announcement should not be read as confirmation that every new market already has access. Google also describes new training modules covering assessments and game-based learning activities.',
    ],
    source:
      'https://blog.google/products-and-platforms/products/education/google-ai-educator-series-global-expansion-november-2026/',
    sourceName: 'Google Education announcement',
    relatedHref: '/online-courses',
    relatedLabel: 'Explore learning platforms',
  },
  {
    slug: 'google-antigravity-chemistry',
    title: 'Google Antigravity explores AI-assisted chemistry workflows',
    date: '2026-11-03',
    company: 'Google DeepMind',
    category: 'AI research',
    paragraphs: [
      'Google DeepMind has described chemistry-research workflows using Google Antigravity. The work involves tasks such as collecting information from scientific material, building predictive models and proposing molecules for further study.',
      'This is a report about research tools and workflows, not an announcement of an approved medicine. It shows how the AI-agent discussion is moving beyond office tasks and coding into specialist work where scientific validation remains essential.',
    ],
    source:
      'https://deepmind.google/blog/agentic-cheminformatics-with-google-antigravity/',
    sourceName: 'Google DeepMind research report',
    relatedHref: '/ai-tools',
    relatedLabel: 'Explore AI tools',
  },
  {
    slug: 'microsoft-copilot-cowork-engineering',
    title: 'Nine engineers, 1,211 pull requests: Microsoft shares its AI coding process',
    date: '2026-11-02',
    company: 'Microsoft',
    category: 'Software development',
    paragraphs: [
      'A Microsoft engineering account says nine engineers merged 1,211 pull requests in one day while working on the Copilot Cowork backend. The report also describes moving its runtime from Python to Rust while the service was live.',
      'The figure refers to pull requests, not lines of code or a general productivity benchmark. Microsoft says agents wrote most of the code while engineers remained responsible for specifications, architecture, permissions and deciding whether the results were acceptable.',
    ],
    source:
      'https://commandline.microsoft.com/how-we-built-copilot-cowork-python-to-rust-migration/',
    sourceName: 'Microsoft engineering account',
    relatedHref: '/software-and-productivity',
    relatedLabel: 'Explore productivity tools',
  },
  {
    slug: 'microsoft-lumen-ai-networks',
    title: 'Microsoft and Lumen expand their enterprise AI network partnership',
    date: '2026-11-02',
    company: 'Microsoft / Lumen',
    category: 'Company news',
    paragraphs: [
      'Microsoft and Lumen have expanded a co-selling collaboration around networks connecting enterprise AI applications, data and infrastructure. The companies say customers need to plan connectivity alongside Azure modernisation.',
      'Lumen intends to bring more cloud-networking and application-connectivity capabilities into Microsoft’s ecosystem. This is an enterprise infrastructure announcement, rather than a new consumer Copilot plan. It reflects the practical networking work required to connect AI systems with business data.',
    ],
    source:
      'https://news.microsoft.com/source/2026/11/02/lumen-and-microsoft-expand-collaboration-to-co-sell-enterprise-ai-ready-networks/',
    sourceName: 'Microsoft and Lumen announcement',
    relatedHref: '/software-and-productivity',
    relatedLabel: 'Explore business software',
  },
  {
    slug: 'openai-grid-protectors',
    title: 'OpenAI plans flexible power use at future computing campuses',
    date: '2026-11-02',
    company: 'OpenAI',
    category: 'Company news',
    paragraphs: [
      'OpenAI has launched the Grid Protectors Program, an effort to make future computing campuses reduce electricity demand when local grids are under pressure. The company plans to work with utilities, regulators and policymakers.',
      'The arrangements will vary by location. These are plans and commitments, not proof that electricity bills have already fallen. The announcement addresses a growing concern around AI infrastructure: how to build the capacity it needs without shifting unnecessary costs onto local communities.',
    ],
    source: 'https://openai.com/index/grid-protectors-program/',
    sourceName: 'OpenAI programme announcement',
    relatedHref: '/ai-tools',
    relatedLabel: 'Explore AI tools',
  },
  {
    slug: 'canva-brush-design-editing',
    title: 'Canva Brush turns written instructions into design edits',
    date: '2026-10-29',
    company: 'Canva',
    category: 'AI & creativity',
    paragraphs: [
      'Canva has introduced Brush, a vision-language model designed to change existing designs from written instructions. Supported edits are initially available through Canva AI for Pro subscribers.',
      'The company describes changes ranging from individual text edits to updates across multiple pages. Brush edits designs, while Canva’s separate Craft model generates images. Brand Kit support and some other capabilities are still described as work in progress, rather than features available at launch.',
    ],
    source: 'https://www.canva.com/newsroom/news/canva-brush/',
    sourceName: 'Canva Brush announcement',
    relatedHref: '/video-and-design-software',
    relatedLabel: 'Explore design tools',
  },
  {
    slug: 'microsoft-fiscal-q1-cloud-results',
    title: 'Microsoft Cloud revenue reaches $63.9 billion in fiscal Q1',
    date: '2026-10-28',
    company: 'Microsoft',
    category: 'Company results',
    paragraphs: [
      'Microsoft reported $92.279 billion in revenue for the quarter ended September 30, 2026, an increase of 19% from a year earlier. Microsoft Cloud revenue reached $63.9 billion, up 30%, while Azure revenue increased 48%.',
      'These are different reporting measures and should not be added together. The results show the scale of the cloud business behind Microsoft’s AI expansion, but they do not establish that all cloud revenue comes from AI products.',
    ],
    source:
      'https://www.microsoft.com/en-us/Investor/earnings/FY-2027-Q1/press-release-webcast',
    sourceName: 'Microsoft quarterly results',
    relatedHref: '/software-and-productivity',
    relatedLabel: 'Explore productivity software',
  },
  {
    slug: 'anthropic-ai-science-partnerships',
    title: 'Anthropic expands AI for Science partnerships',
    date: '2026-10-28',
    company: 'Anthropic',
    category: 'AI research',
    paragraphs: [
      'Anthropic has highlighted 20 foundations, institutions and research groups involved in an expansion of its AI for Science programme. The company says the partnerships are intended to support scientific work using AI.',
      'The announcement concerns collaboration and access, rather than a new Claude model or a clinical breakthrough. It adds to the competition among AI companies to establish a role in research beyond conventional writing, office and software-development tasks.',
    ],
    source:
      'https://www.anthropic.com/news/ai-for-science-expands-foundations-research-institutions',
    sourceName: 'Anthropic programme announcement',
    relatedHref: '/ai-tools',
    relatedLabel: 'Explore AI tools',
  },
  {
    slug: 'anthropic-claude-drug-development',
    title: 'Anthropic shares early work using Claude in drug development',
    date: '2026-10-27',
    company: 'Anthropic',
    category: 'AI research',
    paragraphs: [
      'Anthropic has published early accounts of research partnerships with six organisations developing medicines. The work explores where Claude can support parts of the development process.',
      'These are early projects, not proof of improved patient outcomes or approved AI-developed treatments. The wider story is the growing use of general-purpose AI in specialist research, where useful assistance still has to meet the requirements of scientific checking and validation.',
    ],
    source:
      'https://www.anthropic.com/research/early-progress-drug-development',
    sourceName: 'Anthropic research report',
    relatedHref: '/ai-tools',
    relatedLabel: 'Explore AI tools',
  },
  {
    slug: 'anthropic-proposed-ipo',
    title: 'Anthropic files for a proposed IPO under the ANT symbol',
    date: '2026-10-26',
    company: 'Anthropic',
    category: 'Company news',
    paragraphs: [
      'Anthropic says it has filed a Form S-1 registration statement with the U.S. Securities and Exchange Commission for a proposed initial public offering of Class A common stock.',
      'The company intends to list on Nasdaq under the symbol ANT. Its announcement says the number of shares and the price range have not been determined. An IPO filing is a step toward a potential listing, not confirmation that the offering has been completed.',
    ],
    source: 'https://www.anthropic.com/news/s1-sec',
    sourceName: 'Anthropic IPO announcement',
    relatedHref: '/ai-tools',
    relatedLabel: 'Explore AI tools',
  },
  {
    slug: 'canva-craft-image-model',
    title: 'Canva launches Craft, its own foundation image model',
    date: '2026-10-22',
    company: 'Canva',
    category: 'AI & creativity',
    paragraphs: [
      'Canva has introduced Craft, its first foundation image model built and trained by Canva Research. The company says it is available through Dream Lab and describes a public API for developers.',
      'Craft is intended for work including posters, product visuals, photography and illustration. The launch page describes a Canva MCP connection as coming soon, despite a broader reference to MCP elsewhere on the page. That integration is therefore treated here as planned rather than confirmed available.',
    ],
    source: 'https://www.canva.com/newsroom/news/canva-craft/',
    sourceName: 'Canva Craft announcement',
    relatedHref: '/video-and-design-software',
    relatedLabel: 'Explore creative software',
  },
]

function formatDate(value: string): string {
  const [year, month, day] = value.split('-')
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return `${months[Number(month) - 1]} ${Number(day)}, ${year}`
}

export default function NewsPage() {
  const featured = news.slice(0, 3)
  const companies = ['OpenAI', 'Canva', 'Microsoft', 'Google', 'Anthropic']

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Latest News',
    description,
    url: 'https://fivepicked.com/news',
    inLanguage: 'en',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: news.length,
      itemListElement: news.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.title,
        url: `https://fivepicked.com/news#${item.slug}`,
      })),
    },
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />

      <nav
        aria-label="Breadcrumb"
        className="mb-8 flex items-center gap-2 text-sm text-muted-foreground"
      >
        <Link
          href="/"
          className="rounded-sm hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          Home
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-foreground" aria-current="page">
          Latest News
        </span>
      </nav>

      <header className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-14 -top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        />

        <div className="relative max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            The companies behind your tools
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Latest News
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Big launches, company moves and the stories shaping AI, software
            and creative work. Clear summaries, with the original sources
            one click away.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full border border-border bg-background px-3 py-1.5 text-foreground">
              {news.length} stories
            </span>
            <span className="text-muted-foreground">
              November 5, 2026 edition
            </span>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Dates below refer to the original announcements. This edition
            covers developments announced from October 22 to November 4.
          </p>
        </div>
      </header>

      <section
        aria-labelledby="headlines-heading"
        className="mt-12"
      >
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Start here
            </p>
            <h2
              id="headlines-heading"
              className="mt-2 text-2xl font-semibold tracking-tight text-foreground"
            >
              In the headlines
            </h2>
          </div>

          <a
            href="#all-stories"
            className="rounded-sm text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Browse all stories →
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {featured.map((item, index) => (
            <a
              key={item.slug}
              href={`#${item.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {item.company}
                </span>
                <span
                  aria-hidden="true"
                  className="text-3xl font-bold text-muted-foreground/30"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold leading-snug text-foreground group-hover:text-primary">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.paragraphs[0]}
              </p>

              <span className="mt-auto pt-6 text-sm font-medium text-primary">
                Read the brief →
              </span>
            </a>
          ))}
        </div>
      </section>

      <section
        id="all-stories"
        aria-labelledby="all-stories-heading"
        className="mt-14 scroll-mt-28"
      >
        <div className="mb-7">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            The news desk
          </p>
          <h2
            id="all-stories-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-foreground"
          >
            All stories
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Company statements and performance claims are attributed to
            their sources. Our summaries do not imply independent product
            testing.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-5">
            {news.map((item, index) => (
              <article
                key={item.slug}
                id={item.slug}
                aria-labelledby={`${item.slug}-title`}
                className="scroll-mt-28 rounded-2xl border border-border bg-card p-5 sm:p-7"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
                  <span className="font-semibold text-primary">
                    {item.company}
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-muted-foreground"
                  >
                    •
                  </span>

                  <span className="text-muted-foreground">
                    {item.category}
                  </span>

                  <time
                    dateTime={item.date}
                    className="text-muted-foreground sm:ml-auto"
                  >
                    Announced {formatDate(item.date)}
                  </time>
                </div>

                <h3
                  id={`${item.slug}-title`}
                  className="mt-4 text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl"
                >
                  {item.title}
                </h3>

                <div className="mt-5 space-y-4">
                  {item.paragraphs.map((paragraph, paragraphIndex) => (
                    <p
                      key={`${item.slug}-${paragraphIndex}`}
                      className="text-base leading-7 text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <footer className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-4 text-sm">
                  <a
                    href={item.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="max-w-full break-words rounded-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    aria-label={`${item.sourceName}: original source for ${item.title} (opens in a new tab)`}
                  >
                    Source: {item.sourceName} ↗
                  </a>

                  <Link
                    href={item.relatedHref}
                    className="rounded-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    {item.relatedLabel} →
                  </Link>

                  {index > 2 && (
                    <a
                      href="#all-stories"
                      className="rounded-sm text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:ml-auto"
                    >
                      Back to stories ↑
                    </a>
                  )}
                </footer>
              </article>
            ))}
          </div>

          <aside
            aria-label="About this news edition"
            className="space-y-5 lg:sticky lg:top-28"
          >
            <div className="rounded-2xl border border-border bg-card p-5">
              <h2 className="text-base font-semibold text-foreground">
                Inside this edition
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {companies.map((company) => (
                  <span
                    key={company}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                  >
                    {company}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                A snapshot of recent developments, not a live news feed.
                Availability, company plans and product details may change
                after an announcement.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <h2 className="text-base font-semibold text-foreground">
                Looking for the right tool?
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                News tells you what changed. Our shortlists and comparisons
                help you decide what fits your work.
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm">
                <Link
                  href="/categories"
                  className="rounded-sm font-medium text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  Browse categories →
                </Link>

                <Link
                  href="/compare"
                  className="rounded-sm font-medium text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  Compare tools →
                </Link>

                <Link
                  href="/blog"
                  className="rounded-sm font-medium text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  Read our guides →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <div className="mt-12 rounded-2xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground">
          A note on our sources
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          This edition summarises public announcements from the companies
          involved. Figures are presented with their original context:
          sign-ups are not active users, proposed deals are not completed
          acquisitions, and research demonstrations are not independently
          verified product results. Follow each source link for the full
          announcement and any subsequent updates.
        </p>
      </div>
    </div>
  )
}
