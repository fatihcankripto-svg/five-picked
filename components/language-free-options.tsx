import Link from 'next/link'
import { languageFreeOptions, languageFreeLinks } from '@/lib/language-free-options'

export function LanguageFreeOptions() {
  return <section aria-labelledby="language-free-scope" className="mt-12 rounded-xl border border-border p-5 text-sm leading-relaxed">
    <h2 id="language-free-scope" className="text-xl font-semibold text-foreground">What is free: resources, previews, community or a trial?</h2>
    <p className="mt-3 text-muted-foreground">Genuinely free resources include Preply’s public English exercises and italki’s community practice. Limited free access includes Babbel’s first lessons and Rocket’s sample course content. Lingoda offers a time-limited live-class trial. None of these means unlimited free private teaching.</p>
    <p className="mt-3 text-muted-foreground">The traps to avoid are assumptions: free tutor search is not a booked lesson, a discounted trial is not a free trial, a certificate requires its stated completion conditions, and a trial can start billing. An expired promotion is not a current entitlement.</p>
    <p className="mt-3 text-muted-foreground">Official sources checked <time dateTime="2026-10-31">October 31, 2026</time>. Where the reviewed source does not specify certificate or progress-record fees, this guide makes no free-or-paid claim. The card labels distinguish free access from paid full courses or tutoring.</p>
    {languageFreeOptions.map((option) => <div key={option.slug} className="mt-6 border-t border-border pt-5">
      <h3 className="font-semibold text-foreground">{option.name}: access conditions</h3>
      <dl className="mt-3 space-y-2 text-muted-foreground">
        <div><dt className="font-semibold">Ongoing free access or preview</dt><dd>{option.access}</dd></div>
        <div><dt className="font-semibold">Trial and billing</dt><dd>{option.trial}</dd></div>
        <div><dt className="font-semibold">Certificate access</dt><dd>{option.certificate}</dd></div>
        <div><dt className="font-semibold">Progress records and unverified entitlements</dt><dd>{option.progress}</dd></div>
      </dl>
      <ul className="mt-3 space-y-2">{option.sources.map((source) => <li key={source.url}><a href={source.url} className="text-primary underline underline-offset-4">{source.label}</a></li>)}</ul>
    </div>)}
  </section>
}
export function LanguageFreeLinks() {
  return <nav aria-label="Language learning guides" className="mt-14 rounded-xl border border-border p-5"><h2 className="text-xl font-semibold text-foreground">Choose your language-learning route</h2><ul className="mt-4 space-y-3">{languageFreeLinks.map((link) => <li key={link.path}><Link href={link.path} className="text-primary underline underline-offset-4">{link.label}</Link></li>)}</ul></nav>
}
