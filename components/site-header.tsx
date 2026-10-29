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

  // Scroll kilidi: menü açıldığında arka plan kaymasın
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

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
          className="fixed inset-0 top-16 z-40 bg-background/80 backdrop-blur-md animate-in fade-in-0"
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
                    'rounded-md px-3.5 py-2 text-base font-semibold transition-all duration-300',
                    isActive(section.href)
                      ? 'bg-accent text-primary shadow-sm'
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
                  onClick={() => setOpenDesktop(isOpen ? null : section.id)}
                  className={cn(
                    'flex items-center gap-1.5 rounded-md px-3.5 py-2 text-base font-semibold transition-all duration-300',
                    isOpen
                      ? 'bg-accent text-primary'
                      : 'text-foreground hover:bg-accent hover:text-primary',
                  )}
                >
                  {section.label}
                  <ChevronDown
                    className={cn('size-4 transition-transform duration-300', isOpen && 'rotate-180')}
                  />
                </button>
                {isOpen && (
                  <div
                    className="absolute right-0 top-full mt-2 w-[34rem] rounded-xl border border-border bg-card p-4 shadow-2xl animate-in slide-in-from-top-2 fade-in-0 duration-200"
                  >
                    <ul className="grid grid-cols-2 gap-2">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={closeAll}
                            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary hover:translate-x-1"
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

      {/* MOBİL TAM EKRAN MENÜ (Animasyonlu ve Opak) */}
      <div 
        className={cn(
          "fixed inset-0 top-16 z-50 bg-background transition-all duration-300 ease-in-out md:hidden flex flex-col",
          mobileOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible pointer-events-none"
        )}
      >
        <nav className="flex h-full flex-col overflow-y-auto px-5 pb-10 pt-6">
          <ul className="flex flex-col gap-2">
            {topLevel.map((section, index) => {
              if (section.kind === 'link') {
                return (
                  <li 
                    key={section.id}
                    style={{ animationDelay: `${index * 50}ms` }}
                    className={cn("animate-in slide-in-from-bottom-2 fade-in-0 duration-300 fill-mode-both", !mobileOpen && "animate-none")}
                  >
                    <Link
                      href={section.href}
                      onClick={closeAll}
                      className="block rounded-xl px-4 py-3.5 text-lg font-semibold text-foreground transition-colors hover:bg-accent hover:text-primary"
                    >
                      {section.label}
                    </Link>
                  </li>
                )
              }

              return (
                <li 
                  key={section.id} 
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={cn("flex flex-col animate-in slide-in-from-bottom-2 fade-in-0 duration-300 fill-mode-both", !mobileOpen && "animate-none")}
                >
                  <button
                    type="button"
                    onClick={() => setMobileCategoriesOpen((open) => !open)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-lg font-semibold transition-colors",
                      mobileCategoriesOpen ? "text-primary bg-primary/5" : "text-foreground hover:bg-accent hover:text-primary"
                    )}
                  >
                    {section.label}
                    <ChevronDown
                      className={cn('size-5 transition-transform duration-300', mobileCategoriesOpen && 'rotate-180')}
                    />
                  </button>
                  
                  {/* Kategori Alt Listesi - Animasyonlu */}
                  <div 
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      mobileCategoriesOpen ? "grid-rows-[1fr] opacity-100 mt-2 mb-4" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden rounded-xl bg-card border border-border">
                      <ul className="flex flex-col p-2">
                        {section.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={closeAll}
                              className="block rounded-lg px-4 py-3 text-base text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary hover:translate-x-1"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
