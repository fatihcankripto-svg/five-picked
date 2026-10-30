import Link from 'next/link'
import { getContentLinks } from '@/lib/content-links'
export function RelatedContent({ path }: { path: string }) {
  const links = getContentLinks(path)
  if (!links.length) return null
  return <aside aria-label="Related reading" className="mt-14 border-t border-border pt-8"><h2 className="text-xl font-semibold text-foreground">Continue your research</h2><ul className="mt-5 grid gap-3 sm:grid-cols-2">{links.map((link) => <li key={link.path}><Link href={link.path} className="block rounded-lg border border-border px-4 py-3 text-sm text-primary hover:bg-accent">{link.title}</Link></li>)}</ul></aside>
}
