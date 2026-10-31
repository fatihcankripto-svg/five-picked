import Link from 'next/link'
import { courseFreeOptions, courseFreeLinks } from '@/lib/course-free-options'

export function CourseFreeOptions() {
  return <section aria-labelledby="course-free-scope" className="mt-12 rounded-xl border border-border p-5 text-sm leading-relaxed">
    <h2 id="course-free-scope" className="text-xl font-semibold text-foreground">Free courses, audit previews, trials and certificates</h2>
    <p className="mt-3 text-muted-foreground">These are different offers. Free courses or a free tier provide the specified content without a subscription charge. A preview may unlock only part of a course. A trial ends and can start billing. A certificate may require paid access, additional completion steps or a separate product.</p>
    <p className="mt-3 text-muted-foreground">Avoid these assumptions: “enroll for free” means full access, an audit always includes the whole course, every quiz is locked, or watching during a trial earns a free certificate. Coursera has replaced its old audit experience with a first-module preview for most courses; assessments can be included within that module. A refund guarantee is not a free trial.</p>
    <p className="mt-3 text-muted-foreground">Official sources checked <time dateTime="2026-10-31">October 31, 2026</time>. Learning a skill for work is separate from permission to share accounts, copy lessons, resell course content or screen it for an organization. Paid price labels on the cards are not claims that the free access described below includes certificates.</p>
    {courseFreeOptions.map((option) => <div key={option.slug} className="mt-6 border-t border-border pt-5">
      <h3 className="font-semibold text-foreground">{option.name}: access conditions</h3>
      <dl className="mt-3 space-y-2 text-muted-foreground">
        <div><dt className="font-semibold">Ongoing free access or preview</dt><dd>{option.access}</dd></div>
        <div><dt className="font-semibold">Trial and billing</dt><dd>{option.trial}</dd></div>
        <div><dt className="font-semibold">Certificate access</dt><dd>{option.certificate}</dd></div>
        <div><dt className="font-semibold">Content and exercise limits</dt><dd>{option.limits}</dd></div>
        <div><dt className="font-semibold">Commercial and organizational use</dt><dd>{option.rights}</dd></div>
      </dl>
      <ul className="mt-3 space-y-2">{option.sources.map((source) => <li key={source.url}><a href={source.url} className="text-primary underline underline-offset-4">{source.label}</a></li>)}</ul>
    </div>)}
  </section>
}
export function CourseFreeLinks() {
  return <nav aria-label="Online course guides" className="mt-14 rounded-xl border border-border p-5"><h2 className="text-xl font-semibold text-foreground">Choose your learning route</h2><ul className="mt-4 space-y-3">{courseFreeLinks.map((link) => <li key={link.path}><Link href={link.path} className="text-primary underline underline-offset-4">{link.label}</Link></li>)}</ul></nav>
}
