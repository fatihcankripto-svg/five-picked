'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

const primaryLinks = [
  { href: '/categories', label: 'Categories' },
  { href: '/compare', label: 'Compare' },
  { href: '/quiz', label: 'Find your tool' },
  { href: '/free', label: 'Free picks' },
  { href: '/guides', label: 'Guides' },
  { href: '/how-we-choose', label: 'How we choose' },
] as const

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!mobileOpen) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const closeAll = () => setMobileOpen(false)

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/')

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div
        aria-hidden="true"
        className="fp-progress pointer-events-none absolute inset-x-0 -bottom-px h-0.5 bg-primary"
      />
      <div className="relative z-50 mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Logo onClick={closeAll} />

        <nav ref={navRef} aria-label="Main" className="hidden items-center gap-1 md:flex">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={cn(
                'rounded-md px-3.5 py-2 text-base font-semibold transition-colors',
                isActive(link.href)
                  ? 'bg-accent/70 text-primary'
                  : 'text-foreground hover:bg-accent/60 hover:text-primary',
              )}
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
          className="relative z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background px-5 pb-8 pt-4 animate-in fade-in-0 md:hidden"
        >
          <ul className="flex flex-col">
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeAll}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={cn(
                    'block rounded-lg px-3 py-3.5 text-lg font-semibold transition-colors',
                    isActive(link.href)
                      ? 'bg-accent/70 text-primary'
                      : 'text-foreground hover:bg-accent hover:text-primary',
                  )}
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
