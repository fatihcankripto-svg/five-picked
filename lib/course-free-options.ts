/** Official course-access observations checked October 31, 2026. */
export const courseFreeOptions = [
  {
    slug: 'coursera', name: 'Coursera',
    access: 'Free preview replaces the old audit experience for most courses: the first module is available, including assessments when provided in that module. Selected Community Impact courses are free. This is not unrestricted free access to every course.',
    trial: 'Coursera Plus monthly advertises a 7-day trial. Check the checkout offer; an annual purchase with a refund window is different from a free trial.',
    certificate: 'Subscription certificates cannot be earned during a free trial without ending the trial and accepting payment. Financial aid can provide eligible learners with full access and certificates free or at reduced cost; approval is not automatic.',
    limits: 'Preview does not unlock the remaining course modules. Do not claim all graded work is locked: Coursera explicitly includes assessments when available within the preview module.',
    rights: 'The general service license is personal and non-commercial unless written permission is obtained; account access cannot be shared. Learning skills is different from redistributing course materials or arranging organizational access.',
    sources: [
      { url: 'https://blog.coursera.org/introducing-courseras-new-course-preview-experience/', label: 'Coursera preview replacing audit, included assessments and financial aid' },
      { url: 'https://www.coursera.org/courseraplus', label: 'Coursera Plus trial and paid subscription options' },
      { url: 'https://www.coursera.org/about/terms', label: 'Coursera trial certificates and personal-use license' },
    ],
  },
  {
    slug: 'datacamp', name: 'DataCamp',
    access: 'The ongoing Basic plan is free and the pricing comparison includes the first chapter of every course. It is a sample of the course library, not full free completion of every course.',
    trial: 'No universal fixed-day Premium trial is verified on the reviewed pricing page. Basic is a limited free plan, not a countdown trial.',
    certificate: 'The pricing comparison excludes certificates from Basic and includes them with Premium and Teams. Do not treat free chapter access as a free certificate route.',
    limits: 'Full courses and career or skill tracks are not included in Basic. Practice exercises and step-by-step projects are limited; no unstated numerical allowance is promised.',
    rights: 'Individual subscriptions are for personal learning. DataCamp documents separate Business plans with organizational seats and administration; a free account is not a shared corporate license.',
    sources: [
      { url: 'https://www.datacamp.com/pricing', label: 'DataCamp Basic chapters, certificate exclusions and paid plans' },
      { url: 'https://www.datacamp.com/terms-of-use', label: 'DataCamp free, individual and business license distinctions' },
      { url: 'https://support.datacamp.com/hc/en-us/articles/360005503474-DataCamp-Subscriptions-Individual-v-Business', label: 'DataCamp individual learning versus business seats' },
    ],
  },
  {
    slug: 'skillshare', name: 'Skillshare',
    access: 'The reviewed subscription offer provides a trial, not a verified ongoing free full-library membership.',
    trial: 'Skillshare documents a standard 7-day trial and sometimes longer promotional trials. Payment details are required; the subscription begins charging unless cancelled before the displayed trial end.',
    certificate: 'Members earn a class certificate after watching all lessons and submitting the class project. The source does not state a separate per-certificate fee; this guide does not promise trial-only certificate eligibility or permanent free certificate access.',
    limits: 'The trial provides class access for its stated period; it does not create permanent access after cancellation. The annual pricing page says the year is billed in full after the trial.',
    rights: 'The service license is personal, non-commercial and educational; course materials are not licensed for commercial redistribution. Skillshare advertises separate Teams offerings. This does not mean skills you learn cannot be used at work.',
    sources: [
      { url: 'https://help.skillshare.com/hc/en-us/articles/4402806767117-How-do-Skillshare-subscriptions-pricing-and-refunds-work', label: 'Skillshare trial billing, access and refund conditions' },
      { url: 'https://help.skillshare.com/hc/en-us/articles/13898861927437-What-information-will-I-receive-about-my-membership', label: 'Skillshare standard trial and promotional variations' },
      { url: 'https://help.skillshare.com/hc/en-us/articles/205221427-Does-Skillshare-provide-certification-upon-completion-of-a-class', label: 'Skillshare class-certificate completion requirements' },
      { url: 'https://www.skillshare.com/en/pricing', label: 'Skillshare annual payment and Teams information' },
      { url: 'https://legal.skillshare.com/hc/en-us/articles/27194932901645-Skillshare-Terms-of-Service', label: 'Skillshare educational-use and course-material rights' },
    ],
  },
  {
    slug: 'scrimba', name: 'Scrimba',
    access: 'Freemium includes free introductory courses and introductory scrims from Pro courses. The free selection is ongoing but does not unlock the premium catalog.',
    trial: 'No fixed-day Pro trial is verified here. The free plan and a paid-plan refund guarantee are different offers.',
    certificate: 'Scrimba’s pricing FAQ says certificate access is paused when an account downgrades to Free until it resubscribes. Do not equate a free lesson with a free completion certificate.',
    limits: 'The help center limits free accounts to 10 interactive challenges in total and excludes private Pro Discord channels. Premium courses and unlimited challenges require Pro.',
    rights: 'Scrimba advertises Pro Teams separately for organizational training. No blanket right to share Free accounts or redistribute course content commercially is verified by this guide.',
    sources: [
      { url: 'https://scrimba.com/our-pricing', label: 'Scrimba Freemium, certificate access and Pro Teams' },
      { url: 'https://scrimba.helpscoutdocs.com/article/73-whats-the-difference-between-pro-and-free', label: 'Scrimba free-course selection and total challenge limit' },
    ],
  },
  {
    slug: 'masterclass', name: 'MasterClass',
    access: 'No ongoing free full-library membership is verified. Eligible recipients can redeem a Guest Pass sent by an existing member.',
    trial: 'A Guest Pass provides 14 days of access and requires payment details. It converts to a paid subscription unless cancelled. The separate 30-day satisfaction guarantee starts with an eligible purchase; it is not free access.',
    certificate: 'The regular class help page says those classes do not provide an official completion certificate. MasterClass Certificates is a separate product; this page does not present it as a free certificate included in a Guest Pass.',
    limits: 'Guest Pass access is time-limited and depends on receiving and redeeming an eligible invitation. A refund guarantee does not provide a no-payment enrollment route.',
    rights: 'Standard terms limit access to personal, non-commercial use and prohibit public performances. Commercial exploitation requires express authorization; an individual Guest Pass is not a company-wide screening license.',
    sources: [
      { url: 'https://www.masterclass.com/help-center/masterclass/answers/master-class-guest-pass--id--cggC2xUvSK2Xcu5cF6hi7w', label: 'MasterClass Guest Pass eligibility, 14-day access and billing' },
      { url: 'https://www.masterclass.com/help-center/masterclass/answers/what-is-your-30-day-satisfaction-guarantee--id--7RGbse64Rhyb35P39wYrBw', label: 'MasterClass paid-purchase satisfaction guarantee' },
      { url: 'https://www.masterclass.com/help-center/masterclass/answers/certificate-of-completion--id--iG8dy7oFSuqjCg9czvEm-w', label: 'MasterClass regular classes versus separate Certificates product' },
      { url: 'https://www.masterclass.com/terms', label: 'MasterClass personal use, public performance and commercial restrictions' },
    ],
  },
] as const

export const courseFreeLinks = [
  { path: '/blog/2026-online-course-price-index', label: 'See the ten-platform subscription and certificate cost snapshot' },
  { path: '/compare/skillshare-vs-masterclass', label: 'Weigh class projects against practitioner-led learning before enrolling' },
  { path: '/online-courses', label: 'Compare our five online learning platforms' },
  { path: '/blog/skillshare-vs-masterclass', label: 'Explore Skillshare projects versus MasterClass lessons' },
  { path: '/quiz/online-courses', label: 'Find a course platform for your learning goals' },
  { path: '/compare/coursera-vs-datacamp', label: 'Compare Coursera and DataCamp before paying for access' },
] as const
