import Link from 'next/link'
import { categories } from '@/data/categories'
import { Logo } from '@/components/logo'
import { FiveDots } from '@/components/five-dots'
import { siteConfig, staticPages } from '@/lib/site'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-6 select-none text-[22rem] font-bold leading-none tracking-tighter text-primary/[0.05]"
      >
        5
      </span>

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo />
            <FiveDots />
            <p className="text-sm font-medium text-foreground">Five picks. No more, no less.</p>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline} An independent recommendation site.
            </p>
          </div>

          <nav aria-label="Categories">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Categories
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/${category.slug}`}
                    className="text-sm text-foreground/85 transition-colors hover:text-primary"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Site">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              FIVE PICKED
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {staticPages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-sm text-foreground/85 transition-colors hover:text-primary"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl leading-relaxed">
            {siteConfig.disclosure}{' '}
            <Link href="/affiliate-disclosure" className="text-foreground underline underline-offset-4 hover:text-primary">
              Read our disclosure
            </Link>
            .
          </p>
          <p>
            &copy; {year} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
