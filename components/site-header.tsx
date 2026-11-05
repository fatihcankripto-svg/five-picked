'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Sparkles, Server, ShieldCheck, GraduationCap, Mail, Clapperboard, Layers, BriefcaseBusiness, Languages, Plane, Compass, ChevronDown, Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { SiteSearch } from '@/components/site-search'
import { cn } from '@/lib/utils'

const categoryDetails: Record<string, { icon: typeof Sparkles; detail: string }> = {
  '/ai-tools': { icon: Sparkles, detail: 'Create, write and automate' },
  '/web-hosting-and-domains': { icon: Server, detail: 'Give your website a home' },
  '/vpn-and-security': { icon: ShieldCheck, detail: 'Privacy and online security' },
  '/online-courses': { icon: GraduationCap, detail: 'Learn your next skill' },
  '/email-marketing': { icon: Mail, detail: 'Newsletters and email campaigns' },
  '/video-and-design-software': { icon: Clapperboard, detail: 'Edit, design and record' },
  '/software-and-productivity': { icon: Layers, detail: 'Organize your everyday work' },
  '/freelance-platforms': { icon: BriefcaseBusiness, detail: 'Find freelance talent' },
  '/language-learning': { icon: Languages, detail: 'Build your language skills' },
  '/travel': { icon: Plane, detail: 'Compare your travel options' },
}

function CategoryLink({ item, active, onClick }: { item: { href: string; label: string }; active: boolean; onClick: () => void }) {
  const { icon: Icon, detail } = categoryDetails[item.href] ?? { icon: Compass, detail: 'Explore the shortlist' }
  return <Link href={item.href} onClick={onClick} aria-current={active ? 'page' : undefined} className="fp-menu-category group">
    <span className="fp-menu-icon"><Icon size={21} strokeWidth={1.6} aria-hidden="true" /></span>
    <span className="min-w-0"><span className="fp-menu-category-title">{item.label}</span><span className="fp-menu-detail">{detail}</span></span>
    <ArrowUpRight size={15} className="fp-menu-arrow" aria-hidden="true" />
  </Link>
}

type TopLevel =
  | { kind: 'dropdown'; id: string; label: string; items: { href: string; label: string }[] }
  | { kind: 'link'; id: string; label: string; href: string }

const makeTopLevel = (categoriesItems: { href: string; label: string }[]): TopLevel[] => [
  {
    kind: 'dropdown',
    id: 'categories',
    label: 'Categories',
    items: categoriesItems,
  },
  { kind: 'link', id: 'compare', label: 'Compare', href: '/compare' },
  { kind: 'link', id: 'quiz', label: 'Find your tool', href: '/quiz' },
  { kind: 'link', id: 'before-you-pay', label: 'Before you pay', href: '/before-you-pay' },
  { kind: 'link', id: 'free', label: 'Free picks', href: '/free' },
  { kind: 'link', id: 'blog', label: 'Blog', href: '/blog' },
  { kind: 'link', id: 'news', label: 'News', href: '/news' },
]

export function SiteHeader({ categoriesItems }: { categoriesItems: { href: string; label: string }[] }) {
  const topLevel = makeTopLevel(categoriesItems)
  const pathname = usePathname()
  const [openDesktop, setOpenDesktop] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const categoriesButtonRef = useRef<HTMLButtonElement>(null)
  const categoriesPanelRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!openDesktop && !mobileOpen) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenDesktop(null)
        if (openDesktop) categoriesButtonRef.current?.focus()
        setMobileOpen(false)
        if (mobileOpen) menuButtonRef.current?.focus()
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node) && !categoriesPanelRef.current?.contains(event.target as Node)) {
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
    setSearchOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileOpen || searchOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen, searchOpen])

  useEffect(() => {
    if (!mobileOpen) return
    function trapFocus(event: KeyboardEvent) {
      if (event.key !== 'Tab') return
      const nodes = Array.from(headerRef.current?.querySelectorAll<HTMLElement>('a[href], button, input, select') ?? []).filter((node) => node.offsetParent !== null && !node.closest('[inert]'))
      const first = nodes[0], last = nodes[nodes.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
    }
    document.addEventListener('keydown', trapFocus)
    return () => document.removeEventListener('keydown', trapFocus)
  }, [mobileOpen])

  const closeAll = () => {
    setOpenDesktop(null)
    setMobileOpen(false)
    setMobileCategoriesOpen(false)
  }

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/')

  return (
    <header ref={headerRef} className="fp-site-header sticky top-0 z-50 border-b border-border bg-background">
      <div
        aria-hidden="true"
        className="fp-progress pointer-events-none absolute inset-x-0 -bottom-px h-0.5 bg-primary"
      />

      {openDesktop && (
        <div
          aria-hidden="true"
          onClick={closeAll}
          className="fixed inset-0 top-16 z-40 bg-background/50 backdrop-blur-sm animate-in fade-in-0"
        />
      )}

      <div className="relative z-50 mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <Logo onClick={closeAll} />

        <nav ref={navRef} aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {topLevel.map((section) => {
            if (section.kind === 'link') {
              return (
                <Link
                  key={section.id}
                  href={section.href}
                  aria-current={isActive(section.href) ? 'page' : undefined}
                  className={cn(
                    'rounded-md px-2.5 py-2 text-sm font-semibold transition-all duration-300',
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
              <div key={section.id}>
                <button
                  type="button"
                  ref={categoriesButtonRef}
                  aria-controls="desktop-categories"
                  aria-expanded={isOpen}
                  onKeyDown={(event) => { if (event.key === 'ArrowDown') { event.preventDefault(); setOpenDesktop(section.id); requestAnimationFrame(() => categoriesPanelRef.current?.querySelector<HTMLAnchorElement>('a')?.focus()) } }}
                  onClick={() => setOpenDesktop(isOpen ? null : section.id)}
                  className={cn(
                    'flex items-center gap-1.5 rounded-md px-2.5 py-2 text-sm font-semibold transition-all duration-300',
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
                  <div ref={categoriesPanelRef} id="desktop-categories" className="fp-mega-menu">
                    <div className="fp-menu-intro">
                      <span className="fp-menu-eyebrow">THE RIGHT TOOL STARTS HERE</span>
                      <h2>What are you working on?</h2>
                      <p>Find your category. Compare five clear options.</p>
                      <Link href="/categories" onClick={closeAll} className="fp-menu-all">Explore all categories <ArrowUpRight size={16} aria-hidden="true" /></Link>
                      <div className="fp-menu-quiz"><Compass size={26} strokeWidth={1.4} aria-hidden="true" /><span>Not sure where to start?</span><Link href="/quiz" onClick={closeAll}>Find a tool for your needs <span aria-hidden="true">→</span></Link></div>
                    </div>
                    <ul className="fp-menu-category-grid">
                      {section.items.map((item) => <li key={item.href}><CategoryLink item={item} active={isActive(item.href)} onClick={closeAll} /></li>)}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <SiteSearch open={searchOpen} onOpenChange={(open) => { if (open) closeAll(); setSearchOpen(open) }} />
          <button
            type="button"
            className="relative z-50 flex size-10 items-center justify-center rounded-md text-foreground lg:hidden"
            ref={menuButtonRef}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <div id="mobile-navigation" inert={!mobileOpen}
        className={cn(
          "fixed inset-0 top-16 z-50 bg-background transition-all duration-300 ease-in-out lg:hidden flex flex-col",
          mobileOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible pointer-events-none"
        )}
      >
        <nav aria-label="Mobile" className="fp-mobile-menu flex h-full flex-col overflow-y-auto px-5 pb-10 pt-6">
          <p className="fp-menu-eyebrow px-4 pb-4">YOUR NEXT GOOD CHOICE</p>
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
                      aria-current={isActive(section.href) ? 'page' : undefined}
                      className="fp-mobile-link flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-semibold text-foreground transition-colors hover:bg-accent hover:text-primary"
                    >
                      {section.label}<ArrowUpRight size={18} aria-hidden="true" />
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
                    aria-expanded={mobileCategoriesOpen}
                    aria-controls="mobile-categories"
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
                  
                  <div id="mobile-categories" inert={!mobileCategoriesOpen}
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      mobileCategoriesOpen ? "grid-rows-[1fr] opacity-100 mt-2 mb-4" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden rounded-xl bg-card border border-border">
                      <ul className="flex flex-col p-2">
                        {section.items.map((item) => (
                          <li key={item.href}>
                            <CategoryLink item={item} active={isActive(item.href)} onClick={closeAll} />
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
