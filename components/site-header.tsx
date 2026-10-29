'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { allCategories } from '@/data/all-categories'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

const primaryLinks = [
  { href: '/compare', label: 'Compare' },
  { href: '/quiz', label: 'Quiz' },
  { href: '/free', label: 'Free tools' },
  { href: '/guides', label: 'Guides' },
  { href: '/how-we-choose', label: 'How we choose' },
] as const

export function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!menuOpen && !mobileOpen) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setMobileOpen(false)
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [menuOpen, mobileOpen])

  const closeAll = () => {
    setMenuOpen(false)
    setMobileOpen(false)
  }

  const activeCategory = pathname.split('/')[1]
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

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          <div ref={menuRef} className="relative">
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="category-menu"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground aria-expanded:text-foreground"
            >
              Categories
              <ChevronDown
                aria-hidden="true"
                className={cn('size-4 transition-transform', menuOpen && 'rotate-180')}
              />
            </button>
            {menuOpen && (
              <div
                id="category-menu"
                className="absolute right-0 top-full mt-2 w-[34rem] rounded-xl border border-border bg-popover p-2 shadow-2xl shadow-black/40 animate-in fade-in-0"
              >
                <ul className="grid grid-cols-2 gap-1">
                  {allCategories.map((category) => (
                    <li key={category.slug}>
                      <Link
                        href={`/${category.slug}`}
                        onClick={closeAll}
                        aria-current={activeCategory === category.slug ? 'page' : undefined}
                        className="block rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-accent aria-[current=page]:text-primary"
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground aria-[current=page]:text-foreground"
            >
              {link.label}
            </Link>
          ))}
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
                  aria-current={activeCategory === category.slug ? 'page' : undefined}
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
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeAll}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className="block rounded-lg px-3 py-3 text-base text-foreground hover:bg-accent aria-[current=page]:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
