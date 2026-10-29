'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { allCategories } from '@/data/all-categories'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

type TopLevel =
  | { kind: 'dropdown'; id: string; label: string; items: { href: string; label: string }[] }
  | { kind: 'link'; id: string; label: string; href: string }

const categoriesItems = allCategories.map((c) => ({
  href: `/${c.slug}`,
  label: c.name,
}))

const topLevel: TopLevel[] = [
  {
    kind: 'dropdown',
    id: 'categories',
    label: 'Categories',
    items: categoriesItems,
  },
  { kind: 'link', id: 'compare', label: 'Compare', href: '/compare' },
  { kind: 'link', id: 'quiz', label: 'Find your tool', href: '/quiz' },
  { kind: 'link', id: 'free', label: 'Free picks', href: '/free' },
  { kind: 'link', id: 'guides', label: 'Guides', href: '/guides' },
  { kind: 'link', id: 'how', label: 'How we choose', href: '/how-we-choose' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [openDesktop, setOpenDesktop] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false)
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
    setMobileOpen(false)
    setMobileCategoriesOpen(false)
  }, [pathname])

  const closeAll = () => {
    setOpenDesktop(null)
    setMobileOpen(false)
    setMobileCategoriesOpen(false)
  }

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/')

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

        {/* DESKTOP MENU */}
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
                    className="absolute right-0 top-full mt-2 w-[34rem] rounded-xl border border-border/50 bg-popover/95 p-3 shadow-2xl shadow-black/80 backdrop-blur-xl animate-in fade-in-0"
                  >
                    <ul className="grid grid-cols-2 gap-1">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={closeAll}
                            aria-current={isActive(item.href) ? 'page' : undefined}
                            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary aria-[current=page]:text-primary"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* MOBILE TOGGLE */}
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

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-xl md:hidden animate-in fade-in-0">
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="flex h-[calc(100dvh-4rem)] flex-col overflow-y-auto px-5 pb-8 pt-4"
          >
            <ul className="flex flex-col gap-1">
              {topLevel.map((section) => {
                if (section.kind === 'link') {
                  return (
                    <li key={section.id}>
                      <Link
                        href={section.href}
                        onClick={closeAll}
                        aria-current={isActive(section.href) ? 'page' : undefined}
                        className={cn(
                          'block rounded-xl px-4 py-3.5 text-lg font-semibold transition-colors',
                          isActive(section.href)
                            ? 'bg-primary/15 text-primary'
                            : 'text-foreground hover:bg-accent hover:text-primary',
                        )}
                      >
                        {section.label}
                      </Link>
                    </li>
                  )
                }

                // Categories Dropdown
                return (
                  <li key={section.id} className="flex flex-col">
                    <button
                      type="button"
                      aria-expanded={mobileCategoriesOpen}
                      onClick={() => setMobileCategoriesOpen((open) => !open)}
                      className={cn(
                        'flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-lg font-semibold transition-colors',
                        mobileCategoriesOpen
                          ? 'bg-primary/15 text-primary'
                          : 'text-foreground hover:bg-accent hover:text-primary',
                      )}
                    >
                      {section.label}
                      <ChevronDown
                        aria-hidden="true"
                        className={cn('size-5 transition-transform duration-300', mobileCategoriesOpen && 'rotate-180')}
                      />
                    </button>
                    
                    {/* Mobile Dropdown Items - No boring lines, just clean boxes */}
                    {mobileCategoriesOpen && (
                      <div className="mt-2 mb-4 rounded-2xl bg-accent/40 p-2 animate-in slide-in-from-top-2 fade-in-0">
                        <ul className="flex flex-col">
                          {section.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                onClick={closeAll}
                                aria-current={isActive(item.href) ? 'page' : undefined}
                                className="block rounded-lg px-4 py-3 text-base text-muted-foreground transition-colors hover:bg-background/80 hover:text-primary aria-[current=page]:text-primary"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
