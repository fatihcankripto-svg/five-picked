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

type SubItem = { href: string; label: string }

type TopLevel =
  | {
      kind: 'dropdown'
      id: string
      label: string
      heading: string
      items: SubItem[]
      seeAllHref: string
      seeAllLabel: string
      columns: 1 | 2
      width: string
    }
  | { kind: 'link'; id: string; label: string; href: string }

const categoriesItems: SubItem[] = allCategories.map((c) => ({
  href: `/${c.slug}`,
  label: c.name,
}))

const compareItems: SubItem[] = comparePages.map((p) => ({
  href: `/compare/${p.slug}`,
  label: `${p.a.name} vs ${p.b.name}`,
}))

const quizItems: SubItem[] = quizPages.map((p) => ({
  href: `/quiz/${p.slug}`,
  label: p.listLabel.replace(/ top 5$/, ''),
}))

const freeItems: SubItem[] = freePages.map((p) => ({
  href: `/free/${p.slug}`,
  label: p.title,
}))

const topLevel: TopLevel[] = [
  {
    kind: 'dropdown',
    id: 'categories',
    label: 'Categories',
    heading: 'All categories',
    items: categoriesItems,
    seeAllHref: '/categories',
    seeAllLabel: 'See all categories',
    columns: 2,
    width: 'w-[36rem]',
  },
  {
    kind: 'dropdown',
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
    kind: 'dropdown',
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
    kind: 'dropdown',
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
  const [openDesktop, setOpenDesktop] = useState<string | null>(null)
  const [openMobile, setOpenMobile] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!openDesktop && !mobileOpen) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenDesktop(null)
        setMobileOpen(false)
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDesktop(null)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [openDesktop, mobileOpen])

  useEffect(() => {
    setOpenDesktop(null)
    setOpenMobile(null)
    setMobileOpen(false)
  }, [pathname])

  const closeAll = () => {
    setOpenDesktop(null)
    setOpenMobile(null)
    setMobileOpen(false)
  }

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/')

  const isSectionActive = (section: TopLevel) =>
    section.kind === 'link'
      ? isActive(section.href)
      : isActive(section.seeAllHref) ||
        section.items.some((item) => isActive(item.href))

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div
        aria-hidden="true"
        className="fp-progress pointer-events-none absolute inset-x-0 -bottom-px h-0.5 bg-primary"
      />

      {openDesktop && (
        <div
          aria-hidden="true"
          onClick={closeAll}
          className="fixed inset-0 top-16 z-40 bg-background/60 backdrop-blur-sm"
        />
      )}

      <div className="relative z-50 mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Logo onClick={closeAll} />

        <nav ref={navRef} aria-label="Main" className="hidden items-center gap-1 md:flex">
          {topLevel.map((section) => {
            if (section.kind === 'link') {
              return (
                <Link
                  key={section.id}
                  href={section.href}
                  aria-current={isActive(section.href) ? 'page' : undefined}
                  className={cn(
                    'rounded-md px-3.5 py-2 text-base font-semibold transition-colors',
                    isActive(section.href)
                      ? 'bg-accent/70 text-primary'
                      : 'text-foreground hover:bg-accent/60 hover:text-primary',
                  )}
                >
                  {section.label}
                </Link>
              )
            }

            const isOpen = openDesktop === section.id
            const active = isSectionActive(section)

            return (
              <div key={section.id} className="relative">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`menu-${section.id}`}
                  aria-haspopup="true"
                  onClick={() => setOpenDesktop(isOpen ? null : section.id)}
                  className={cn(
                    'flex items-center gap-1.5 rounded-md px-3.5 py-2 text-base font-semibold transition-colors',
                    isOpen
                      ? 'bg-accent/70 text-primary'
                      : active
                        ? 'text-primary hover:bg-accent/60'
                        : 'text-foreground hover:bg-accent/60 hover:text-primary',
                  )}
                >
                  {section.label}
                  <ChevronDown
                    aria-hidden="true"
                    className={cn('size-4 transition-transform', isOpen && 'rotate-180')}
                  />
                </button>
                {isOpen && (
                  <div
                    id={`menu-${section.id}`}
                    className={cn(
                      'absolute right-0 top-full mt-2 rounded-xl border border-border bg-popover p-2 shadow-2xl shadow-black/60 animate-in fade-in-0',
                      section.width,
                    )}
                  >
                    <p className="px-3 pb-1.5 pt-2 text-xs font-semibold uppercase tracking-widest text-primary">
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
                            className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground aria-[current=page]:text-primary"
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
                        className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-accent"
                      >
                        {section.seeAllLabel}
                        <ArrowRight aria-hidden="true" className="size-4" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
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
          className="relative z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background px-5 pb-8 pt-4 animate-in fade-in-0 md:hidden"
        >
          <ul className="flex flex-col">
            {topLevel.map((section) => {
              if (section.kind === 'link') {
                return (
                  <li key={section.id}>
                    <Link
                      href={section.href}
                      onClick={closeAll}
                      aria-current={isActive(section.href) ? 'page' : undefined}
                      className={cn(
                        'block rounded-lg px-3 py-3.5 text-lg font-semibold transition-colors',
                        isActive(section.href)
                          ? 'bg-accent/70 text-primary'
                          : 'text-foreground hover:bg-accent hover:text-primary',
                      )}
                    >
                      {section.label}
                    </Link>
                  </li>
                )
              }

              const isOpen = openMobile === section.id

              return (
                <li key={section.id} className="border-b border-border/60 last:border-b-0">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`mobile-${section.id}`}
                    onClick={() => setOpenMobile(isOpen ? null : section.id)}
                    className={cn(
                      'flex w-full items-center justify-between rounded-lg px-3 py-3.5 text-lg font-semibold transition-colors',
                      isOpen
                        ? 'bg-accent/70 text-primary'
                        : 'text-foreground hover:bg-accent hover:text-primary',
                    )}
                  >
                    {section.label}
                    <ChevronDown
                      aria-hidden="true"
                      className={cn('size-5 transition-transform', isOpen && 'rotate-180')}
                    />
                  </button>
                  {isOpen && (
                    <div id={`mobile-${section.id}`} className="pb-3">
                      <ul className="flex flex-col">
                        {section.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={closeAll}
                              aria-current={isActive(item.href) ? 'page' : undefined}
                              className="block rounded-lg px-3 py-2.5 text-base text-muted-foreground hover:bg-accent hover:text-foreground aria-[current=page]:text-primary"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={section.seeAllHref}
                        onClick={closeAll}
                        className="mt-1 flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-primary hover:bg-accent"
                      >
                        {section.seeAllLabel}
                        <ArrowRight aria-hidden="true" className="size-4" />
                      </Link>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </header>
  )
}
