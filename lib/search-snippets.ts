/** Search-result copy only. Keep promises grounded in each published page.
 * Guidance: https://developers.google.com/search/docs/appearance/title-link
 * https://developers.google.com/search/docs/appearance/snippet
 * https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a
 * Page bodies, headings and structured data retain their editorial source values.
 */
export const searchSnippets: Record<string, { title: string; description: string }> = {
  "/": {
    "title": "The 5 Best Tools in Every Category (2026)",
    "description": "Too many tools, too little clarity? Start with five picks per list, then compare costs, free-plan limits and who each option suits before you subscribe."
  },
  "/categories": {
    "title": "Best Tools by Category: Find Your Shortlist",
    "description": "What do you need a tool for? Browse five-pick lists for AI, hosting, VPNs, productivity and learning, with costs and trade-offs to narrow your search."
  },
  "/ai-tools": {
    "title": "Best AI Tools (2026): Pick by the Job",
    "description": "Need videos, images, meeting notes or SEO help? Find five AI picks for each job and compare what they do, what they cost and where the limits are."
  },
  "/ai-tools/video-and-voice": {
    "title": "Best AI Video & Voice Tools (2026): 5 Picks",
    "description": "An AI presenter, a narrated video or just a voiceover? Compare five tools by the job they do, with prices and limits to help you choose."
  },
  "/ai-tools/image-and-design": {
    "title": "Best AI Image Tools (2026): 5 Picks by Use",
    "description": "Readable text, Adobe workflows or a choice of AI models? Compare five image tools by creative use, pricing and limits before picking your next generator."
  },
  "/ai-tools/meeting-notes": {
    "title": "Best AI Meeting Note Takers (2026): 5 Picks",
    "description": "Need transcripts, searchable summaries or shared meeting notes? Compare five AI note takers by workflow, pricing and limits before adding one to your calls."
  },
  "/ai-tools/marketing-and-seo": {
    "title": "Best AI SEO Tools (2026): Research to Writing",
    "description": "Find keywords, plan content or improve a draft: these are different jobs. Compare five AI marketing and SEO tools to see which fits your bottleneck."
  },
  "/ai-tools/chatbots": {
    "title": "Best AI Chatbot Builders (2026): 5 Picks",
    "description": "A support bot, document assistant or lead-capture flow? Compare five chatbot builders by setup, use case and pricing to find the right starting point."
  },
  "/web-hosting-and-domains": {
    "title": "Best Web Hosting (2026): Costs & Trade-offs",
    "description": "A low starting price is only part of the hosting bill. Compare five hosts by renewal costs, included services and who each plan suits before you commit."
  },
  "/vpn-and-security": {
    "title": "Best VPNs (2026): Plans, Costs & Device Limits",
    "description": "Which VPN fits your devices and budget? Compare five providers, including free-access conditions, billing commitments and the trade-offs behind each pick."
  },
  "/online-courses": {
    "title": "Best Online Course Platforms (2026): 5 Picks",
    "description": "Coding practice, creative projects or a certificate? Compare five learning platforms by teaching format, access and costs to find one that fits your goal."
  },
  "/email-marketing": {
    "title": "Best Email Marketing Tools (2026): 5 Picks",
    "description": "A newsletter, creator business or sales funnel? Compare five email tools by audience limits, automation and costs before committing your list."
  },
  "/video-and-design-software": {
    "title": "Best Video & Design Software (2026): 5 Picks",
    "description": "Editing footage, recording guests or finding stock assets? Compare five video and design tools by the work they cover, prices and access conditions."
  },
  "/software-and-productivity": {
    "title": "Best Productivity Tools (2026): Pick by Task",
    "description": "Notes, projects, files, slides or automation: where does work get stuck? Browse five-pick lists and compare costs and trade-offs for each part of your stack."
  },
  "/software-and-productivity/note-taking": {
    "title": "Best Note-Taking Apps (2026): 5 Picks by Use",
    "description": "Quick capture, linked notes or a document workspace? Compare five note-taking apps by organization, platform fit and pricing to find your way of working."
  },
  "/software-and-productivity/project-management": {
    "title": "Best Project Management Tools (2026): 5 Picks",
    "description": "Simple task lists or an all-in-one workspace? Compare five project management tools by team workflow, planning features and pricing before moving your work."
  },
  "/software-and-productivity/cloud-storage": {
    "title": "Best Cloud Storage (2026): 5 Picks by Use",
    "description": "More free space, encrypted files or easier team sharing? Compare five cloud storage services by plans and trade-offs before choosing where your files live."
  },
  "/software-and-productivity/presentations": {
    "title": "Best Presentation Tools (2026): 5 Picks",
    "description": "Start from a prompt, build with a team or tell a visual story? Compare five presentation tools by workflow and pricing to choose your next slide maker."
  },
  "/software-and-productivity/automation": {
    "title": "Best Automation Tools (2026): 5 Picks by Use",
    "description": "A no-code builder or a self-hosted workflow? Compare five automation tools by setup, connections and plan limits before connecting your everyday apps."
  },
  "/freelance-platforms": {
    "title": "Best Freelance Platforms (2026): Fees & Fit",
    "description": "Sell a service, pitch a project or join a screened network? Compare five freelance platforms by work model, fees and fit before spending time finding clients."
  },
  "/language-learning": {
    "title": "Best Language Learning Apps (2026): 5 Picks",
    "description": "Short app lessons, live classes or a private tutor? Compare five language-learning services by study format, pricing and who each approach suits."
  },
  "/travel": {
    "title": "Best Travel Tools (2026): Flight Search & Fit",
    "description": "How you book matters as much as how you search. Explore our flight-booking picks, fees, booking conditions and guides before planning your next trip."
  },
  "/travel/flights": {
    "title": "Best Flight Booking Sites (2026): Fees & Fit",
    "description": "A low fare is only the start. Compare five flight-booking sites by search, alerts, fees and booking conditions before deciding where to buy your ticket."
  },
  "/blog": {
    "title": "Tool Buying Guides: Costs, Limits & Choices",
    "description": "What will a tool cost, and will it fit your work? Explore detailed comparisons, price datasets and buying guides that explain the trade-offs before you pay."
  },
  "/blog/2026-online-course-price-index": {
    "title": "Online Course Price Index: Fees & Certificates",
    "description": "A free lesson is not always a free certificate. Compare ten platforms by subscriptions, billing and credentials, with dated prices and downloadable data."
  },
  "/blog/2026-vpn-price-index": {
    "title": "VPN Price Index (2026): What Renewal Costs",
    "description": "What happens after the VPN offer ends? Compare ten providers' recorded prices and renewals, download the data and calculate complete billing commitments."
  },
  "/blog/2026-web-hosting-price-index": {
    "title": "Web Hosting Price Index: Offers vs Renewals",
    "description": "What does the low hosting rate leave out? Compare ten providers' entry offers, renewals and included services using a dated table and downloadable dataset."
  },
  "/blog/real-cost-of-email-marketing-2026": {
    "title": "Email Marketing Costs (2026): Beyond the Plan",
    "description": "Will a free email plan cover your list? Compare subscriber limits, sending caps, branding and automation, with newsletter and ecommerce budget scenarios."
  },
  "/blog/real-cost-of-freelancing-2026": {
    "title": "Freelancing Costs (2026): What You Keep",
    "description": "Free to join does not mean free to earn. Compare proposal fees, commissions and payout rules, with worked examples to understand your take-home amount."
  },
  "/blog/vpn-speed-test-2026": {
    "title": "VPN Speed Test: Measure Mbps, Upload & Ping",
    "description": "Fast downloads, slow calls? Learn how to test VPN download, upload and ping fairly, isolate a slowdown and interpret the guide's third-party speed figures."
  },
  "/blog/best-ai-tools-for-content-marketing": {
    "title": "AI Content Marketing Tools (2026): 5 Picks",
    "description": "Which part of content work needs help: research, briefs, writing or optimization? Compare five AI tools by their strengths, costs and who should choose each."
  },
  "/blog/semrush-vs-surfer-seo": {
    "title": "Semrush vs Surfer SEO: Do You Need Both?",
    "description": "Research the next topic or improve the draft in front of you? This guide compares Semrush and Surfer workflows, costs and when using both makes sense."
  },
  "/blog/best-video-editing-software-for-youtube": {
    "title": "YouTube Video Editing Tools (2026): 5 Picks",
    "description": "Your editor may not cover your whole YouTube workflow. Compare editing, screen recording, remote interviews and stock assets to see which tool you need."
  },
  "/blog/kinsta-vs-cloudways": {
    "title": "Kinsta vs Cloudways: Which Fits Your Site?",
    "description": "Managed WordPress or a choice of cloud infrastructure? Compare Kinsta and Cloudways on setup, support, pricing and the work each leaves to you."
  },
  "/blog/skillshare-vs-masterclass": {
    "title": "Skillshare vs MasterClass: Worth Paying For?",
    "description": "Creative projects or lessons from well-known experts? Compare Skillshare and MasterClass on learning style, annual costs and what their certificates mean."
  },
  "/blog/preply-vs-lingoda": {
    "title": "Preply vs Lingoda: Tutors or Live Classes?",
    "description": "A tutor you choose or a structured class schedule? Compare Preply and Lingoda on flexibility, teaching format and pricing before paying for lessons."
  },
  "/blog/fireflies-vs-fathom": {
    "title": "Fireflies vs Fathom: Which Notes Fit You?",
    "description": "A searchable meeting library or a simpler notes workflow? Compare Fireflies and Fathom on free-plan limits, paid features and how your team shares meetings."
  },
  "/blog/envato-elements-vs-freepik": {
    "title": "Envato Elements vs Freepik: Which Fits You?",
    "description": "Video templates, stock assets or AI-assisted design? Compare Envato Elements and Freepik on libraries, pricing and the creative work each fits."
  },
  "/blog/capcut-vs-premiere-pro": {
    "title": "CapCut vs Premiere Pro: When to Switch?",
    "description": "Quick social edits or detailed desktop control? Compare CapCut and Premiere Pro on workflow, learning curve and costs to see when a switch makes sense."
  },
  "/blog/riverside-vs-descript": {
    "title": "Riverside vs Descript: Record or Edit First?",
    "description": "Is your bottleneck recording guests or editing the result? Compare Riverside and Descript by capture, text-based editing and pricing before you choose."
  },
  "/compare": {
    "title": "Compare Tools: Which One Fits Your Work?",
    "description": "Two tools on your shortlist? Compare their costs, key differences and ideal use cases side by side, then see which trade-offs matter for your work."
  },
  "/compare/clickup-vs-monday-com": {
    "title": "ClickUp vs monday.com: Tasks or Boards?",
    "description": "Tasks and collaborative docs, or boards built around your process? Compare ClickUp and monday.com on workflow, plan limits and the features you need."
  },
  "/compare/fireflies-vs-otter": {
    "title": "Fireflies vs Otter: Which Meeting Record?",
    "description": "Need a searchable meeting library or live transcripts? Compare Fireflies and Otter on recording, summaries, storage and sharing before choosing a plan."
  },
  "/compare/filmora-vs-camtasia": {
    "title": "Filmora vs Camtasia: Edits or Tutorials?",
    "description": "Editing footage or teaching from your screen? Compare Filmora and Camtasia by recording workflow, editing needs and free-export limits before buying."
  },
  "/compare/monday-com-vs-asana": {
    "title": "monday.com vs Asana: Boards or Projects?",
    "description": "A configurable board or a task-and-project process? Compare monday.com and Asana by workflow, planning controls and the paid features your team needs."
  },
  "/compare/neuronwriter-vs-frase": {
    "title": "NeuronWriter vs Frase: Which Workflow Fits?",
    "description": "Optimize a draft or manage more of the research-to-publishing loop? Compare NeuronWriter and Frase by workflow, features and plan conditions."
  },
  "/compare/upwork-vs-freelancer-com": {
    "title": "Upwork vs Freelancer.com: Fees & Finding Work",
    "description": "What does winning a project cost? Compare Upwork and Freelancer.com on proposals, contract deductions and withdrawal rules before choosing where to pitch."
  },
  "/compare/make-vs-n8n": {
    "title": "Make vs n8n: No-Code or Self-Hosted?",
    "description": "Who will build and maintain your workflows? Compare Make's hosted visual builder with n8n's self-hosting option, including setup and plan trade-offs."
  },
  "/compare/pcloud-vs-dropbox": {
    "title": "pCloud vs Dropbox: Storage or Collaboration?",
    "description": "More storage flexibility or an established sharing workflow? Compare pCloud and Dropbox on plans, free access and the way you exchange files."
  },
  "/compare/skillshare-vs-masterclass": {
    "title": "Skillshare vs MasterClass: Projects or Talks?",
    "description": "Want to make a class project or learn from an expert's demonstrations? Compare Skillshare and MasterClass by format, pricing and access conditions."
  },
  "/compare/semrush-vs-surfer-seo": {
    "title": "Semrush vs Surfer SEO: Research or Content?",
    "description": "Need search opportunities or help optimizing an article? Compare Semrush and Surfer SEO by core task, pricing and limits in this side-by-side buying guide."
  },
  "/compare/kiwi-com-vs-trip-com": {
    "title": "Kiwi.com vs Trip.com: Booking Trade-offs",
    "description": "Would you manage separate-airline routes or prefer a broader booking platform? Compare Kiwi.com and Trip.com by itinerary, fees and booking conditions."
  },
  "/compare/capcut-vs-premiere-pro": {
    "title": "CapCut vs Premiere Pro: Social or Desktop?",
    "description": "A template-led social video or an edit with detailed control? Compare CapCut and Premiere Pro by workflow, free access and commercial-use conditions."
  },
  "/compare/fiverr-vs-upwork": {
    "title": "Fiverr vs Upwork: Packages or Proposals?",
    "description": "Sell a defined service or pitch for a contract? Compare Fiverr and Upwork by work model, platform fees and who each route suits before getting started."
  },
  "/compare/mailerlite-vs-kit": {
    "title": "MailerLite vs Kit: Newsletter or Creator Shop?",
    "description": "A straightforward newsletter or a creator business selling products? Compare MailerLite and Kit by email workflow, automation, pricing and plan limits."
  },
  "/compare/pcloud-vs-sync-com": {
    "title": "pCloud vs Sync.com: Plans or Privacy?",
    "description": "Considering a lifetime storage plan or prioritizing zero-knowledge encryption? Compare pCloud and Sync.com by pricing, sharing and privacy trade-offs."
  },
  "/compare/adobe-firefly-vs-ideogram": {
    "title": "Adobe Firefly vs Ideogram: Design or Text?",
    "description": "Adobe-connected image work or designs with readable text? Compare Firefly and Ideogram by creative use, pricing and access conditions before choosing."
  },
  "/compare/fliki-vs-synthesia": {
    "title": "Fliki vs Synthesia: Narration or AI Presenter?",
    "description": "Need narrated visuals or a presenter delivering your script? Compare Fliki and Synthesia by video format, pricing and the limits that affect your project."
  },
  "/compare/elevenlabs-vs-fliki": {
    "title": "ElevenLabs vs Fliki: Voiceover or Full Video?",
    "description": "Do you need an audio file or a finished video? Compare ElevenLabs and Fliki on voice work, visuals, pricing and the workflow each is designed to cover."
  },
  "/compare/asana-vs-clickup": {
    "title": "Asana vs ClickUp: Simple or All-in-One?",
    "description": "A focused task workspace or more features in one place? Compare Asana and ClickUp by team workflow, pricing and the trade-offs of a broader toolset."
  },
  "/compare/coursera-vs-datacamp": {
    "title": "Coursera vs DataCamp: Courses or Practice?",
    "description": "Broad course choice or focused data and AI exercises? Compare Coursera and DataCamp by learning format, certificate options, pricing and free access."
  },
  "/compare/hostinger-vs-cloudways": {
    "title": "Hostinger vs Cloudways: Shared or Cloud?",
    "description": "Launching a first site or moving beyond shared hosting? Compare Hostinger and Cloudways by setup, management, pricing and the kind of site each suits."
  },
  "/compare/expressvpn-vs-nordvpn": {
    "title": "ExpressVPN vs NordVPN: Plans & Device Fit",
    "description": "Which VPN plan fits your devices and budget? Compare ExpressVPN and NordVPN on features, billing and access conditions before choosing a subscription."
  },
  "/compare/babbel-vs-italki": {
    "title": "Babbel vs italki: App Lessons or a Tutor?",
    "description": "Want a structured app course or one-to-one conversation practice? Compare Babbel and italki by study format, flexibility, pricing and learning goals."
  },
  "/compare/gamma-vs-pitch": {
    "title": "Gamma vs Pitch: AI Drafts or Team Slides?",
    "description": "Start a deck from a prompt or build it together in an editor? Compare Gamma and Pitch by presentation workflow, collaboration, pricing and free-plan limits."
  },
  "/free": {
    "title": "Free Tools: Compare Plans, Trials & Limits",
    "description": "Which tools stay free, and which offers expire? Compare free plans, trials, paid upgrades and refund conditions before putting time into a new tool."
  },
  "/free/best-free-ai-marketing-and-seo-tools": {
    "title": "Free AI SEO Tools: What's Included?",
    "description": "A free account, a checker or a temporary trial? See what Semrush, Surfer, NeuronWriter, Frase and Writesonic include, with billing and export limits."
  },
  "/free/best-free-flight-booking-sites": {
    "title": "Free Flight Search: Where Booking Fees Begin",
    "description": "Searching is free, but booking may add costs. Compare five sites on alerts, agency fees, baggage and cancellation terms before choosing where to buy."
  },
  "/free/best-free-freelance-platforms": {
    "title": "Free Freelance Platforms: What Work Costs",
    "description": "What can you do without paying upfront? Compare five platforms on registration, proposal spending, commissions and payouts before chasing your next project."
  },
  "/free/best-free-language-learning-apps": {
    "title": "Free Language Apps: Lessons, Limits & Trials",
    "description": "A free preview is not a free tutor. Compare five language services on practice resources, lesson previews, trials and billing before starting to learn."
  },
  "/free/best-free-online-course-platforms": {
    "title": "Free Online Courses: Certificates Included?",
    "description": "Can you finish the course and get a certificate for free? Compare five platforms on ongoing access, previews, trial billing and certificate conditions."
  },
  "/free/best-free-video-and-design-software": {
    "title": "Free Video & Design Tools: Export Limits",
    "description": "Free to download, but free to deliver? Compare five tools on watermarks, recording limits, trials and asset licenses before investing time in a project."
  },
  "/free/best-free-web-hosting": {
    "title": "Free Hosting Trials: What Requires Payment?",
    "description": "A free trial and a money-back offer work differently. Compare five hosts on evaluation access, payment and refund conditions before signing up."
  },
  "/free/best-free-ai-video-tools": {
    "title": "Free AI Video Tools: Credits & Watermarks",
    "description": "How much can you create before paying? Compare AI video tools on free credits, video limits, watermarks and trials to find an option for your project."
  },
  "/free/best-free-ai-image-tools": {
    "title": "Free AI Image Tools: Compare Access & Limits",
    "description": "Which AI image tools can you use without a paid plan? Compare generation access, usage limits and trial conditions before spending time on a new tool."
  },
  "/free/best-free-ai-meeting-note-takers": {
    "title": "Free AI Meeting Notes: Recording Limits",
    "description": "Will the free tier cover your meetings? Compare AI note takers on recording access, minute limits and paid upgrades before inviting one to your calls."
  },
  "/free/best-free-ai-chatbots": {
    "title": "Free AI Chatbots: What Can You Build?",
    "description": "How far can a free chatbot plan take your site? Compare access, usage limits and upgrade conditions before building your support or document assistant."
  },
  "/free/vpns-with-a-free-plan": {
    "title": "Free VPN Plans vs Trials: Know the Difference",
    "description": "Proton VPN has an ongoing free plan; other offers involve trials or refunds. Compare access, payment and cancellation conditions before choosing a VPN."
  },
  "/free/best-free-email-marketing-tools": {
    "title": "Free Email Marketing: List & Sending Limits",
    "description": "Will your list fit the free plan? Compare subscriber limits, sending caps, automation and branding across five email tools, plus what requires an upgrade."
  },
  "/free/best-free-project-management-tools": {
    "title": "Free Project Management: Team & Plan Limits",
    "description": "Can your team manage work without upgrading? Compare free project management tools on workflows, collaboration and plan limits before moving your tasks."
  },
  "/free/best-free-note-taking-apps": {
    "title": "Free Note-Taking Apps: What Stays Free?",
    "description": "A quick notebook or a shared workspace? Compare free note-taking plans by writing, organization and upgrade conditions before choosing where your notes go."
  },
  "/free/best-free-cloud-storage": {
    "title": "Free Cloud Storage: Space & Sharing Limits",
    "description": "How much free space do you get, and how usable is it? Compare cloud storage allowances, sharing conditions and paid upgrades before uploading your files."
  },
  "/free/best-free-presentation-tools": {
    "title": "Free Presentation Tools: Slides & Limits",
    "description": "Can you build and share your deck for free? Compare presentation tools by slide creation, sharing, branding and paid-plan conditions before starting."
  },
  "/free/best-free-automation-tools": {
    "title": "Free Automation Tools: Tasks & Setup Limits",
    "description": "Free workflows still have trade-offs. Compare automation tools on usage limits, hosting and upgrade conditions to find a starting point for your apps."
  },
  "/quiz": {
    "title": "Tool Finder Quizzes: Which One Fits You?",
    "description": "Not sure where to start? Pick a category, answer questions about your goals and preferences, and get a tool shortlist to investigate before you commit."
  },
  "/quiz/video-and-design-software": {
    "title": "Video & Design Tool Quiz: Find Your Fit",
    "description": "Editing, screen tutorials, remote guests or stock assets? Answer seven questions for a tool match and runner-up from our five video and design picks."
  },
  "/quiz/ai-tools-marketing-and-seo": {
    "title": "SEO Tool Quiz: Find Your Workflow Match",
    "description": "Research, writing or optimization? Answer six questions about your marketing work to get a primary tool and runner-up from our five SEO and AI picks."
  },
  "/quiz/web-hosting-and-domains": {
    "title": "Web Hosting Quiz: Which Host Fits Your Site?",
    "description": "Building your first site or planning a move? Answer six questions about your needs for a hosting match and runner-up from our five published picks."
  },
  "/quiz/vpn-and-security": {
    "title": "VPN Quiz: Which VPN Fits Your Needs?",
    "description": "Want a VPN shortlist without comparing every plan? Answer three questions about priorities, devices and settings to get a match from our five picks."
  },
  "/quiz/email-marketing": {
    "title": "Email Marketing Quiz: Find Your Tool",
    "description": "Newsletter, creator business or store? Answer three questions about your list and goals to get a match from our five email marketing picks."
  },
  "/quiz/ai-tools-video-and-voice": {
    "title": "AI Video Tool Quiz: What Should You Use?",
    "description": "Narrated video, AI presenter, voiceover or motion clips? Answer three questions about your content to get a match from our five video and voice picks."
  },
  "/quiz/ai-tools-image-and-design": {
    "title": "AI Image Tool Quiz: Find Your Match",
    "description": "Text in images, Adobe workflows or model choice? Answer three questions about creative use, control and budget to get a match from our five image picks."
  },
  "/quiz/ai-tools-meeting-notes": {
    "title": "AI Meeting Notes Quiz: Find Your Tool",
    "description": "Recording calls, live transcripts or sharing highlights? Answer three questions about your meetings to get a note-taking match from our five picks."
  },
  "/quiz/ai-tools-chatbots": {
    "title": "AI Chatbot Quiz: Which Builder Fits You?",
    "description": "Support chat, answers from documents or lead capture? Answer three questions about your goals, coding skills and budget for a match from five builders."
  },
  "/quiz/software-and-productivity-project-management": {
    "title": "Project Management Quiz: Find Your Tool",
    "description": "Simple tasks, visual boards or an all-in-one workspace? Answer three questions about your team and workflow for a project management match from five picks."
  },
  "/quiz/software-and-productivity-note-taking": {
    "title": "Note-Taking App Quiz: Find Your Match",
    "description": "Quick capture, linked knowledge or flexible docs? Answer three questions about devices, note style and budget for a match from five note-taking picks."
  },
  "/quiz/software-and-productivity-cloud-storage": {
    "title": "Cloud Storage Quiz: Find Your File Fit",
    "description": "Encrypted files, team sharing or fewer subscriptions? Answer three questions about storage priorities to get a cloud storage match from our five picks."
  },
  "/quiz/software-and-productivity-presentations": {
    "title": "Presentation Tool Quiz: Find Your Fit",
    "description": "Prompt, template or blank slide? Answer three questions about how you start, collaborate and present to get a match from our five presentation picks."
  },
  "/quiz/software-and-productivity-automation": {
    "title": "Automation Tool Quiz: Find Your Fit",
    "description": "No-code, self-hosted or a little code? Answer three questions about skills, volume and AI steps for an automation match from our five published picks."
  },
  "/quiz/freelance-platforms": {
    "title": "Freelance Platform Quiz: Find Your Fit",
    "description": "Hiring or finding work? Answer three questions about project style, budget and vetting to get a platform match from our five freelance picks."
  },
  "/quiz/language-learning": {
    "title": "Language Learning Quiz: Find Your App",
    "description": "App lessons, live classes or tutoring? Answer three questions about study style, budget and time for a match from our five language-learning picks."
  },
  "/quiz/online-courses": {
    "title": "Online Course Quiz: Find Your Platform",
    "description": "Coding, creative skills or a broader subject? Answer three questions about goals, study style and free access for a match from five learning platforms."
  },
  "/quiz/travel-flights": {
    "title": "Flight Booking Quiz: Find Your Site",
    "description": "Low fares, flexible payments or booking everything together? Answer three questions about your travel priorities for a match from five flight-booking sites."
  },
  "/reviews": {
    "title": "Tool Reviews: Costs, Limits & Who They Suit",
    "description": "Before subscribing, check the details that affect your choice. Browse tool reviews covering pricing, features, access limits and who should look elsewhere."
  },
  "/reviews/nordvpn": {
    "title": "NordVPN Review (2026): Before You Subscribe",
    "description": "Does NordVPN fit your devices and budget? Check plans, billing, free-access conditions and refund rules, plus who should consider a different VPN."
  },
  "/reviews/hostinger": {
    "title": "Hostinger Review (2026): Beyond the Low Rate",
    "description": "What does Hostinger's starting rate commit you to? Check included features, renewal costs, refund conditions and who the hosting plan suits."
  },
  "/reviews/semrush": {
    "title": "Semrush Review (2026): Is It Right for You?",
    "description": "Need keyword research or just help writing? See Semrush's documented features, free-account limits, toolkit trials and pricing before choosing a plan."
  },
  "/reviews/kiwi-com": {
    "title": "Kiwi.com Review (2026): Before You Book",
    "description": "A useful search result is only part of a booking decision. Check Kiwi.com's alerts, fees and cancellation conditions, plus who should look elsewhere."
  },
  "/reviews/surfer-seo": {
    "title": "Surfer SEO Review (2026): Before You Pay",
    "description": "Ready to pay for content optimization? Check Surfer's plan boundaries, annual pricing and trial conversion before deciding if it fits your workflow."
  },
  "/reviews/expressvpn": {
    "title": "ExpressVPN Review (2026): Plans & Renewal",
    "description": "What will you pay upfront and at renewal? Check ExpressVPN tiers, device support and purchase-channel refund rules before choosing a subscription."
  },
  "/reviews/cloudways": {
    "title": "Cloudways Review (2026): Is Cloud Right?",
    "description": "Outgrown shared hosting but don't want to manage a server? See how Cloudways works, what is included and where its costs and setup may not fit."
  },
  "/reviews/babbel": {
    "title": "Babbel Review (2026): Lessons, Costs & Fit",
    "description": "Can short lessons fit your language goals? See how Babbel's structured course works, what a subscription covers and when a tutor may suit you better."
  },
  "/alternatives": {
    "title": "Tool Alternatives: Find a Better Fit",
    "description": "Thinking of switching tools? Compare alternatives by the job you need done, with prices, access conditions and trade-offs to help you choose a better fit."
  },
  "/alternatives/kling-ai": {
    "title": "Kling AI Alternatives: 4 Different Workflows",
    "description": "Need narration, an AI presenter or content repurposing instead of generated clips? Compare four Kling AI alternatives by use case, pricing and limits."
  },
  "/alternatives/pictory": {
    "title": "Pictory Alternatives: 4 Picks by Video Job",
    "description": "Starting from scratch, adding a presenter or focusing on voice? Compare four Pictory alternatives by video workflow, pricing and free-access limits."
  },
  "/alternatives/synthesia": {
    "title": "Synthesia Alternatives: Beyond AI Presenters",
    "description": "Don't need a presenter on screen? Compare four Synthesia alternatives for narrated videos, content repurposing, voiceovers or generated clips."
  },
  "/alternatives/fliki": {
    "title": "Fliki Alternatives: 4 Picks by Content Type",
    "description": "Need an AI presenter, repurposed clips, voiceover or generated motion? Compare four Fliki alternatives by content job, pricing and access conditions."
  },
  "/alternatives/elevenlabs": {
    "title": "ElevenLabs Alternatives: Beyond Voiceovers",
    "description": "Need visuals as well as a voice? Compare four ElevenLabs alternatives for narrated videos, AI presenters, content repurposing and generated motion."
  },
  "/alternatives/hostinger": {
    "title": "Hostinger Alternatives: 4 Hosting Options",
    "description": "Need a different hosting setup? Compare Bluehost, Cloudways, Kinsta and Namecheap by workload, pricing and access conditions before moving your site."
  },
  "/alternatives/nordvpn": {
    "title": "NordVPN Alternatives: Free Plans & Device Fit",
    "description": "Need ongoing free access or a different device allowance? Compare four NordVPN alternatives by apps, plans, billing and access conditions before switching."
  },
  "/alternatives/adobe-premiere-pro": {
    "title": "Premiere Pro Alternatives: Pick by Video Job",
    "description": "Editing, tutorials, interviews or stock assets? Compare Filmora, Camtasia, Riverside and Envato, and see which parts of your Premiere workflow each covers."
  },
  "/guides/how-to-choose-a-vpn": {
    "title": "How to Choose a VPN: Before You Subscribe",
    "description": "What should you check before buying a VPN? Work through device support, privacy claims, billing and refunds, with clear limits and provider links."
  },
  "/guides/shared-vs-cloud-vs-managed-wordpress-hosting": {
    "title": "Shared vs Cloud vs Managed WordPress Hosting",
    "description": "Who manages the server, and what does your site need? Compare shared, VPS, cloud and managed WordPress hosting by control, maintenance and billing."
  },
  "/tools": {
    "title": "Free Calculators: Timing & Freelance Fees",
    "description": "Planning a voiceover or pricing a freelance job? Estimate narration time and platform deductions with our free calculators before you record or quote."
  },
  "/tools/text-to-speech-duration": {
    "title": "Text-to-Speech Duration: Estimate Script Time",
    "description": "Will your script fit the recording slot? Paste your text into the free duration calculator and compare estimated narration time at different speaking speeds."
  },
  "/tools/freelance-fee-calculator": {
    "title": "Fiverr & Upwork Fee Calculator: What You Keep",
    "description": "What could you keep after platform fees? Enter an order amount in our free Fiverr and Upwork calculator for estimates in USD, EUR or GBP."
  },
  "/how-we-choose": {
    "title": "How We Choose Tools: Sources & Ranking",
    "description": "What goes into our tool picks? See how we use official sources and published research, handle corrections and keep affiliate commissions out of rankings."
  },
  "/about": {
    "title": "About Us: Why We Narrow the Choice to Five",
    "description": "Why five picks instead of an endless tool list? Learn what FIVE PICKED covers, how our recommendations work and where to find our research standards."
  },
  "/editorial-team": {
    "title": "Our Editorial Team: How We Research Tools",
    "description": "Who researches the recommendations? Meet the Five Picked Editorial Team and learn how we use official sources, published data and credited research."
  },
  "/affiliate-disclosure": {
    "title": "Affiliate Disclosure: How Links Fund Us",
    "description": "How does FIVE PICKED earn a commission? Read how affiliate links support the site and why payment does not determine our rankings or verdicts."
  },
  "/privacy": {
    "title": "Privacy Policy: What Happens to Your Data",
    "description": "What information is processed when you visit FIVE PICKED or follow a link? Read our approach to cookies, technical data, external sites and email messages."
  },
  "/contact": {
    "title": "Contact Us: Questions, Corrections & Feedback",
    "description": "Found a price change or something we should correct? Contact FIVE PICKED with your feedback, questions or suggestions to help us keep the site useful."
  }
}
