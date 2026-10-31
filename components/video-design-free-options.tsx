import Link from 'next/link'
import { videoDesignFreeOptions, videoDesignFreeLinks } from '@/lib/video-design-free-options'

export function VideoDesignFreeOptions() {
  return <section aria-labelledby="video-free-scope" className="mt-12 rounded-xl border border-border p-5 text-sm leading-relaxed">
    <h2 id="video-free-scope" className="text-xl font-semibold text-foreground">What is actually free, limited or a trial?</h2>
    <p className="mt-3 text-muted-foreground">A genuine free option can still have export and licensing restrictions. Riverside provides an ongoing limited free plan; Filmora and Camtasia provide watermarked editing access; Premiere desktop is a time-limited trial. Envato provides selected free assets, not a free video editor or a full-library trial.</p>
    <p className="mt-3 text-muted-foreground">The traps to avoid are assumptions: free download means free delivery, unlimited recording means unlimited separate tracks, or free stock means unrestricted commercial rights. None of those follows automatically. These are disclosed conditions, not accusations of deceptive conduct by the providers.</p>
    <p className="mt-3 text-muted-foreground">Official sources checked <time dateTime="2026-10-31">October 31, 2026</time>. Where the reviewed source does not state an exact limit or provide clear commercial permission, this guide does not invent one. Paid price labels on the cards are separate from free-access conditions.</p>
    {videoDesignFreeOptions.map((option) => <div key={option.slug} className="mt-6 border-t border-border pt-5">
      <h3 className="font-semibold text-foreground">{option.name}: {option.kind}</h3>
      <dl className="mt-3 space-y-2 text-muted-foreground">
        <div><dt className="font-semibold">Free access and duration</dt><dd>{option.access}</dd></div>
        <div><dt className="font-semibold">Export and usage limits</dt><dd>{option.limits}</dd></div>
        <div><dt className="font-semibold">Commercial-use position</dt><dd>{option.commercial}</dd></div>
        <div><dt className="font-semibold">Assumption to avoid</dt><dd>{option.caution}</dd></div>
      </dl>
      <ul className="mt-3 space-y-2">{option.sources.map((source) => <li key={source.url}><a href={source.url} className="text-primary underline underline-offset-4">{source.label}</a></li>)}</ul>
    </div>)}
  </section>
}

export function VideoDesignFreeLinks() {
  return <nav aria-label="Video and design reading" className="mt-14 rounded-xl border border-border p-5">
    <h2 className="text-xl font-semibold text-foreground">Choose your editing and asset workflow</h2>
    <ul className="mt-4 space-y-3">{videoDesignFreeLinks.map((link) => <li key={link.path}><Link href={link.path} className="text-primary underline underline-offset-4">{link.label}</Link></li>)}</ul>
  </nav>
}
