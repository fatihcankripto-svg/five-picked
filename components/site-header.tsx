'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import { allCategories } from '@/data/all-categories'
import { comparePages } from '@/lib/compare-pages'
import { freePages } from '@/lib/free-pages'
import { quizPages } from '@/lib/quiz-pages'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

type MenuItem = { href: string; label: string }

type NavSection =
  | {
      kind: 'menu'
      id: string
      label: string
      heading: string
      items: MenuItem[]
      seeAllHref: string
      seeAllLabel: string
      columns: 1 | 2
      width: string
    }
  | { kind: 'link'; id: string; label: string; href: string }

const categoriesItems: MenuItem[] = allCategories.map((c) => ({
  href: `/${c.slug}`,
  label: c.name,
}))

const compareItems: MenuItem[] = comparePages.map((p) => ({
  href: `/compare/${p.slug}`,
  label: `${p.a.name} vs ${p.b.name}`,
}))

const quizItems: MenuItem[] = quizPages.map((p) => ({
  href: `/quiz/${p.slug}`,
  label: p.listLabel.replace(/ top 5$/, ''),
}))

const freeItems: MenuItem[] = freePages.map((p) => ({
  href: `/free/${p.slug}`,
  label: p.title,
}))

const navSections: NavSection[] = [
  {
    kind: 'menu',
    id: 'categories',
    label: 'Categories',
    heading: 'All categories',
    items: categoriesItems,
    seeAllHref: '/',
    seeAllLabel: 'Back to home',
    columns: 2,
    width: 'w-[36rem]',
  },
  {
    kind: 'menu',
    id: 'compare',
    label: 'Compare',
    heading: 'Head-to-head comparisons',
    items: compareItems,
    seeAllHref: '/compare',
    seeAllLabel: 'All comparisons',
    columns: 2,
    width: 'w-[36rem]',
  },
  {
    kind: 'menu',
    id: 'quiz',
    label: 'Find your tool',
    heading: '3-question quizzes',
    items: quizItems,
    seeAllHref: '/quiz',
    seeAllLabel: 'All quizzes',
    columns: 2,
    width: 'w-[36rem]',
  },
  {
    kind: 'menu',
    id: 'free',
    label: 'Free picks',
    heading: 'Tools with a free plan',
    items: freeItems,
    seeAllHref: '/free',
    seeAllLabel: 'All free picks',
    columns: 1,
    width: 'w-[26rem]',
  },
  { kind: 'link', id: 'guides', label: 'Guides', href: '/guides' },
  { kind: 'link', id: 'how', label: 'How we choose', href: '/how-we-choose' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!openMenu && !mobileOpen) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenMenu(null)
        setMobileOpen(false)
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [openMenu, mobileOpen])

  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [pathname])

  const closeAll = () => {
    setOpenMenu(null)
    setMobileOpen(false)
  }

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/')

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div
        aria-hidden="true"
        className="fp-progress pointer-events-none absolute inset-x-0 -bottom-px h-0.5 bg-primary"
      />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Logo onClick={closeAll} />

        <nav ref={navRef} aria-label="Main" className="hidden items-center gap-0.5 md:flex">
          {navSections.map((section) =>
            section.kind === 'link' ? (
              <Link
                key={section.id}
                href={section.href}
                aria-current={isActive(section.href) ? 'page' : undefined}
                className="rounded-md px-3 py-2 text-[15px] font-medium text-foreground/85 transition-colors hover:bg-accent/60 hover:text-foreground aria-[current=page]:text-primary"
              >
                {section.label}
              </Link>
            ) : (
              <div key={section.id} className="relative">
                <button
                  type="button"
                  aria-expanded={openMenu === section.id}
                  aria-controls={`menu-${section.id}`}
                  aria-haspopup="true"
                  onClick={() =>
                    setOpenMenu((current) => (current === section.id ? null : section.id))
                  }
                  className="flex items-center gap-1.5 rounded-md px-3 py-2 text-[15px] font-medium text-foreground/85 transition-colors hover:bg-accent/60 hover:text-foreground aria-expanded:bg-accent/60 aria-expanded:text-foreground"
                >
                  {section.label}
                  <ChevronDown
                    aria-hidden="true"
                    className={cn(
                      'size-3.5 transition-transform',
                      openMenu === section.id && 'rotate-180',
                    )}
                  />
                </button>
                {openMenu === section.id && (
                  <div
                    id={`menu-${section.id}`}
                    className={cn(
                      'absolute right-0 top-full mt-2 rounded-xl border border-border bg-popover p-2 shadow-2xl shadow-black/40 animate-in fade-in-0',
                      section.width,
                    )}
                  >
                    <p className="px-3 pb-1 pt-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      {section.heading}
                    </p>
                    <ul
                      className={cn(
                        'grid gap-0.5',
                        section.columns === 2 ? 'grid-cols-2' : 'grid-cols-1',
                      )}
                    >
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={closeAll}
                            aria-current={isActive(item.href) ? 'page' : undefined}
                            className="block rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent aria-[current=page]:text-primary"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-1 border-t border-border pt-1">
                      <Link
                        href={section.seeAllHref}
                        onClick={closeAll}
                        className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-accent"
                      >
                        {section.seeAllLabel}
                        <ArrowRight aria-hidden="true" className="size-4" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ),
          )}
        </nav>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
          <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background px-5 pb-8 pt-4 animate-in fade-in-0 md:hidden"
        >
          <p className="px-3 pb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Categories
          </p>
          <ul className="flex flex-col">
            {allCategories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/${category.slug}`}
                  onClick={closeAll}
                  aria-current={isActive(`/${category.slug}`) ? 'page' : undefined}
                  className="block rounded-lg px-3 py-3 text-base text-foreground hover:bg-accent aria-[current=page]:text-primary"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-6 px-3 pb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            More
          </p>
          <ul className="flex flex-col">
            <li>
              <Link
                href="/compare"
                onClick={closeAll}
                aria-current={isActive('/compare') ? 'page' : undefined}
                className="block rounded-lg px-3 py-3 text-base text-foreground hover:bg-accent aria-[current=page]:text-primary"
              >
                Compare
              </Link>
            </li>
            <li>
              <Link
                href="/quiz"
                onClick={closeAll}
                aria-current={isActive('/quiz') ? 'page' : undefined}
                className="block rounded-lg px-3 py-3 text-base text-foreground hover:bg-accent aria-[current=page]:text-primary"
              >
                Find your tool
              </Link>
            </li>
            <li>
              <Link
                href="/free"
                onClick={closeAll}
                aria-current={isActive('/free') ? 'page' : undefined}
                className="block rounded-lg px-3 py-3 text-base text-foreground hover:bg-accent aria-[current=page]:text-primary"
              >
                Free picks
              </Link>
            </li>
            <li>
              <Link
                href="/guides"
                onClick={closeAll}
                aria-current={isActive('/guides') ? 'page' : undefined}
                className="block rounded-lg px-3 py-3 text-base text-foreground hover:bg-accent aria-[current=page]:text-primary"
              >
                Guides
              </Link>
            </li>
            <li>
              <Link
                href="/how-we-choose"
                onClick={closeAll}
                aria-current={isActive('/how-we-choose') ? 'page' : undefined}
                className="block rounded-lg px-3 py-3 text-base text-foreground hover:bg-accent aria-[current=page]:text-primary"
              >
                How we choose
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
