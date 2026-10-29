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
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div
        aria-hidden="true"
        className="fp-progress pointer-events-none absolute inset-x-0 -bottom-px h-0.5 bg-primary"
      />

      {/* DESKTOP ARKA PLAN KARARTMASI */}
      {openDesktop && (
        <div
          aria-hidden="true"
          onClick={closeAll}
          className="fixed inset-0 top-16 z-40 bg-background/80 backdrop-blur-sm"
        />
      )}

      <div className="relative z-50 mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 bg-background">
        <Logo onClick={closeAll} />

        {/* MASAÜSTÜ MENÜ */}
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
                      ? 'bg-accent text-primary'
                      : 'text-foreground hover:bg-accent hover:text-primary',
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
                  onClick={() => setOpenDesktop(isOpen ? null : section.id)}
                  className={cn(
                    'flex items-center gap-1.5 rounded-md px-3.5 py-2 text-base font-semibold transition-colors',
                    isOpen
                      ? 'bg-accent text-primary'
                      : 'text-foreground hover:bg-accent hover:text-primary',
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
                    className="absolute right-0 top-full mt-2 w-[34rem] rounded-xl border border-border bg-card p-3 shadow-xl animate-in fade-in-0"
                  >
                    <ul className="grid grid-cols-2 gap-1">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={closeAll}
                            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
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

        {/* MOBİL MENÜ BUTONU */}
        <button
          type="button"
          className="relative z-50 flex size-10 items-center justify-center rounded-md text-foreground md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* MOBİL TAM EKRAN MENÜ (Burası kesinlikle opak) */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background md:hidden">
          <nav className="flex h-full flex-col overflow-y-auto px-5 pb-10 pt-4">
            <ul className="flex flex-col gap-2">
              {topLevel.map((section) => {
                if (section.kind === 'link') {
                  return (
                    <li key={section.id}>
                      <Link
                        href={section.href}
                        onClick={closeAll}
                        className="block rounded-xl px-4 py-3.5 text-lg font-semibold text-foreground hover:bg-accent"
                      >
                        {section.label}
                      </Link>
                    </li>
                  )
                }

                return (
                  <li key={section.id} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => setMobileCategoriesOpen((open) => !open)}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-lg font-semibold text-foreground hover:bg-accent"
                    >
                      {section.label}
                      <ChevronDown
                        className={cn('size-5 transition-transform duration-200', mobileCategoriesOpen && 'rotate-180')}
                      />
                    </button>
                    
                    {mobileCategoriesOpen && (
                      <div className="mt-2 mb-4 rounded-xl bg-card p-2 border border-border">
                        <ul className="flex flex-col">
                          {section.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                onClick={closeAll}
                                className="block rounded-lg px-4 py-2.5 text-base text-muted-foreground hover:bg-accent hover:text-foreground"
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
