/** Official language-access observations checked October 31, 2026. */
export const languageFreeOptions = [
  {
    slug: 'babbel', name: 'Babbel', price: 'Free first lesson of every course; full courses require a subscription',
    access: 'Limited free preview: registration and the first lesson of every course are free. Full courses require a subscription.',
    trial: 'The verified offer is a lesson preview, not a fixed-day full-library trial or live tutor session.',
    certificate: 'Certificates require completing a course and are downloadable on desktop. Babbel says they are not formally recognised. A free first lesson is not a completed course; no separate certificate price is stated in the reviewed help page.',
    progress: 'The free-access source establishes lesson previews, not full-course completion or unrestricted progress features. No separate progress-record fee is established here.',
    sources: [
      { url: 'https://support.babbel.com/hc/en-us/articles/205600498-Try-Babbel-for-free', label: 'Babbel free registration, first lessons and subscription boundary' },
      { url: 'https://support.babbel.com/hc/en-gb/articles/19086073375890-Course-certificates', label: 'Babbel course completion, desktop certificates and recognition' },
    ],
  },
  {
    slug: 'lingoda', name: 'Lingoda', price: '7-day free trial; then a paid plan unless cancelled',
    access: 'Time-limited live teaching: the trial includes 3 group classes or 1 private class, depending on the selected plan. It is not an ongoing free class subscription.',
    trial: 'The trial lasts 7 days. Payment is processed automatically afterward; cancel before the trial ends to avoid being charged.',
    certificate: 'Lingoda issues certificates for completed CEFR levels. Trial attendance alone does not establish level completion; the FAQ does not list a separate certificate fee.',
    progress: 'The FAQ describes learning progress and level completion. It does not establish a separate progress-record fee or promise a complete level within the free trial.',
    sources: [
      { url: 'https://www.lingoda.com/en/free-trial/', label: 'Lingoda trial duration and automatic billing' },
      { url: 'https://www.lingoda.com/en/faq/', label: 'Lingoda trial class allowance and level certificates' },
    ],
  },
  {
    slug: 'italki', name: 'italki', price: 'Free community; private lesson prices set by teachers',
    access: 'Freemium access: italki’s official app listing describes free registration and a free community for questions, practice and language exchanges with other students.',
    trial: 'The same listing describes private lessons paid per class. Free community access is not a free private teacher appointment; no universal free tutor-trial duration is promised here.',
    certificate: 'The reviewed official app description does not establish a free learner certificate. Check a specific course or assessment before treating it as a credential route.',
    progress: 'No separate progress-record fee or free assessment entitlement is established by the reviewed listing. Community practice and paid private teaching are distinct.',
    sources: [
      { url: 'https://play.google.com/store/apps/details?hl=en_US&id=com.italki.app', label: 'italki’s official publisher listing: free community and paid tutoring' },
    ],
  },
  {
    slug: 'preply', name: 'Preply', price: 'Free English exercises; tutoring and trial lessons are paid',
    access: 'Ongoing public resources: Preply provides free English grammar and vocabulary exercises across beginner, intermediate and advanced levels. These are self-study exercises, not private tutor sessions.',
    trial: 'Standard tutoring terms describe buying a trial lesson before choosing a subscription. A conditional replacement after an unsatisfactory paid trial is not an unconditional free first lesson. Check any checkout-specific promotion rather than assuming it applies to everyone.',
    certificate: 'Preply says learners can request a certificate after at least 10 hours of lessons on its platform. The help page does not state a separate issuance fee; free public exercises are not those tutoring hours.',
    progress: 'The public exercise page does not establish a saved-progress entitlement or a separate progress-record fee. Do not confuse public practice with a tutoring subscription.',
    sources: [
      { url: 'https://preply.com/en/learn/english/exercises', label: 'Preply free English grammar and vocabulary practice' },
      { url: 'https://termsofuse.preply.com/terms_of_use/en_SubscriptionServicesTerms.pdf', label: 'Preply paid trial lessons and conditional promotional terms' },
      { url: 'https://help.preply.com/en/articles/5060847-certificates-for-students', label: 'Preply certificate eligibility after tutoring hours' },
    ],
  },
  {
    slug: 'rocket-languages', name: 'Rocket Languages', price: 'Free sample-course trial; full courses are paid',
    access: 'Limited course trial: the Intro Module and selected Audio and Language and Culture lessons are available. For the additional levels described in the FAQ, the trial provides the first Audio lesson and Language and Culture lesson for each level.',
    trial: 'A free trial and free language resources are documented. The reviewed FAQ does not specify a fixed trial duration; no expiry or unlimited lifetime free access is claimed here.',
    certificate: 'No free completion-certificate entitlement or separate certificate charge is established in the reviewed FAQ. Sample access should not be treated as full course completion.',
    progress: 'The FAQ describes weekly progress summaries by email, but does not establish a separate tracking fee or every feature’s free-trial eligibility.',
    sources: [
      { url: 'https://www.rocketlanguages.com/help', label: 'Rocket trial lesson limits, account access and progress summaries' },
    ],
  },
]

export const languageFreeLinks = [
  { path: '/language-learning', label: 'Compare our five language-learning picks' },
  { path: '/blog/preply-vs-lingoda', label: 'Explore personal tutoring versus structured live classes' },
  { path: '/quiz/language-learning', label: 'Find a learning format that fits your routine' },
  { path: '/compare/babbel-vs-italki', label: 'Decide between a self-paced course and private tutoring' },
  { path: '/reviews/babbel', label: 'Read the detailed Babbel assessment' },
]
