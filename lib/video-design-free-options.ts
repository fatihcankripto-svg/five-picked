/** Official access and licensing observations checked October 31, 2026. */
export const videoDesignFreeOptions = [
  {
    slug: 'adobe-premiere-pro', name: 'Adobe Premiere Pro', kind: 'Time-limited desktop trial',
    access: 'The desktop app has a 7-day full-version trial, not an ongoing free desktop plan. Adobe also describes a separate free mobile app; that is not the desktop product compared here.',
    limits: 'The trial starts at checkout and converts to a paid subscription unless cancelled. The reviewed trial page does not specify a trial export-resolution or project-count cap; this guide does not invent one.',
    commercial: 'No blanket commercial clearance is claimed for the trial. Adobe’s general terms prohibit commercial use of output from versions designated NFR, including versions designated trial or evaluation. Check the designation and terms supplied with your installation before paid work; asset rights remain separate.',
    caution: 'A free download is not a permanently free desktop license, and a full-featured trial is not proof of commercial permission.',
    sources: [
      { url: 'https://www.adobe.com/products/premiere/free-trial-download.html', label: 'Adobe desktop trial duration and automatic billing' },
      { url: 'https://www.adobe.com/legal/terms.html', label: 'Adobe trial, NFR and content-file terms' },
    ],
  },
  {
    slug: 'filmora', name: 'Filmora', kind: 'Limited free access with no stated trial expiry',
    access: 'Wondershare describes the basic editing trial as having no expiration date. This is limited free access, not a promise of free watermark-free delivery.',
    limits: 'Exported videos contain a Filmora watermark. Removing it requires a paid plan. The reviewed support page does not publish a numerical project, export-duration or resolution cap.',
    commercial: 'Wondershare says monetization requires a commercial license. Asset permission is separate: assets marked for commercial use differ from personal-use assets, and mixing commercial and non-commercial assets restricts the result to non-commercial use.',
    caution: 'Being able to edit indefinitely does not make the watermarked free version suitable for monetized client work.',
    sources: [
      { url: 'https://support.wondershare.com/how-tos/filmora/how-long-is-the-free-trial-with-watermark.html', label: 'Filmora trial expiry and watermark restrictions' },
      { url: 'https://support.wondershare.com/how-tos/filmora/about-corporate-and-commercial-plans.html', label: 'Filmora monetization and commercial-license requirements' },
      { url: 'https://www.wondershare.com/company/asset-license-agreement.html', label: 'Wondershare commercial and non-commercial asset rules' },
    ],
  },
  {
    slug: 'envato-elements', name: 'Envato Elements', kind: 'Selected free assets; no subscription trial',
    access: 'Envato says its subscription has no free trial. A free account can download selected free files without paying for the full library. Envato is an asset library, not a video editor.',
    limits: 'The free selection is not unlimited subscription access. Each free file is licensed for one customized end product; it cannot be redistributed as a standalone stock file.',
    commercial: 'The Free Files Use Policy explicitly permits a single commercial end product, including client work, subject to its restrictions. Music has additional limits, including no broadcast use or theatrical film release under this policy.',
    caution: 'A free account or a free stock download does not unlock the full paid library or remove the need to read the file’s license.',
    sources: [
      { url: 'https://help.elements.envato.com/hc/en-us/articles/360000629506-Does-Envato-subscription-Offer-a-Free-Trial', label: 'Envato free-account access and absence of a subscription trial' },
      { url: 'https://elements.envato.com/free-files', label: 'Browse the currently selected Envato free files' },
      { url: 'https://help.elements.envato.com/hc/en-us/articles/31035932718489-Free-Files-Use-Policy', label: 'Envato free-file commercial permissions and restrictions' },
    ],
  },
  {
    slug: 'riverside', name: 'Riverside', kind: 'Limited ongoing free plan; separate paid-plan trial',
    access: 'Riverside has a free account with ongoing recording and editing access. A separate 14-day paid-plan trial requires a credit card and begins charging after the trial unless cancelled.',
    limits: 'The free pricing comparison lists up to 720p video, a Riverside watermark, and an initial 2-hour allowance to try separate multi-track recordings. That allowance is not described as a fresh monthly allocation. The help center distinguishes it from unlimited recording, editing and exports of edits or clips.',
    commercial: 'This guide does not certify blanket commercial clearance for a Free account. Riverside’s terms apply to individuals and businesses and require appropriate rights in uploaded content; account access is not permission to use someone else’s footage, music or likeness.',
    caution: 'Unlimited recording does not mean unlimited separate high-quality track downloads or watermark-free delivery.',
    sources: [
      { url: 'https://riverside.com/pricing/switch', label: 'Riverside Free export quality, watermark and track allowance' },
      { url: 'https://support.riverside.com/hc/en-us/articles/5448590090013-What-is-included-in-a-free-account', label: 'Riverside ongoing free-account access versus separate-track downloads' },
      { url: 'https://support.riverside.com/hc/en-us/articles/22576984609949-Can-I-try-Riverside-for-free', label: 'Riverside paid-plan trial length and payment conditions' },
      { url: 'https://riverside.com/terms-conditions', label: 'Riverside platform and content-rights terms' },
    ],
  },
  {
    slug: 'camtasia', name: 'Camtasia', kind: 'Free desktop editor with watermarked export',
    access: 'TechSmith offers a free Camtasia Editor download with editing access. It is described as free mode rather than a fixed-day editor trial; no expiry period is promised here.',
    limits: 'Produced videos include a watermark. The download terms prohibit removing, obscuring or altering that watermark, and reserve the right to terminate the limited version. No numerical project or export-resolution limit is asserted by this guide.',
    commercial: 'The reviewed free-download terms do not provide an explicit blanket commercial-use approval. This guide therefore does not label free Camtasia exports commercially cleared. Check the applicable EULA and the rights of any included media before a commercial delivery.',
    caution: 'Do not mistake a separate Camtasia Online offer for the desktop editor, or remove the free desktop version’s watermark.',
    sources: [
      { url: 'https://www.techsmith.com/camtasia/', label: 'TechSmith free desktop editor and watermark explanation' },
      { url: 'https://www.techsmith.com/download/camtasia/', label: 'Camtasia free-download and watermark conditions' },
      { url: 'https://www.techsmith.com/trust-center/camtasia-snagit-tos/', label: 'TechSmith software and media license terms' },
    ],
  },
] as const

export const videoDesignFreeLinks = [
  { path: '/compare/capcut-vs-premiere-pro', label: 'Compare CapCut and Premiere before choosing an export workflow' },
  { path: '/quiz/video-and-design-software', label: 'Match a video or design tool to your production needs' },
  { path: '/video-and-design-software', label: 'Compare the full video and design software shortlist' },
  { path: '/blog/best-video-editing-software-for-youtube', label: 'Choose a YouTube editing workflow before upgrading' },
  { path: '/blog/capcut-vs-premiere-pro', label: 'Compare CapCut with the Premiere workflow' },
  { path: '/blog/envato-elements-vs-freepik', label: 'Understand Envato and Freepik asset-library trade-offs' },
] as const
