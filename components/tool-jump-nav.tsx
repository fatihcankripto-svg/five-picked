'use client'

import { useEffect, useRef, useState } from 'react'

type JumpItem = { id: string; label: string }

export function ToolJumpNav({ items }: { items: JumpItem[] }) {
  const navRef = useRef<HTMLElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const [active, setActive] = useState(items[0]?.id ?? '')

  useEffect(() => {
    let frame = 0
    const targets = items.map((item) => ({ ...item, element: document.getElementById(item.id) }))
    function update() {
      frame = 0
      const edge = (navRef.current?.getBoundingClientRect().bottom ?? 154) + 48
      let current = items[0]?.id ?? ''
      for (const target of targets) {
        if (target.element && target.element.getBoundingClientRect().top <= edge) current = target.id
      }
      setActive(current)
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [items])

  useEffect(() => {
    const list = listRef.current
    const current = list?.querySelector<HTMLAnchorElement>('[aria-current="location"]')
    if (!list || !current) return
    const listBox = list.getBoundingClientRect()
    const tabBox = current.getBoundingClientRect()
    if (tabBox.left < listBox.left || tabBox.right > listBox.right) {
      list.scrollTo({ left: list.scrollLeft + tabBox.left - listBox.left - (list.clientWidth - tabBox.width) / 2, behavior: 'instant' })
    }
  }, [active])

  return (
    <nav ref={navRef} aria-label="On this page" className="fp-tool-nav sticky top-16 z-30 mt-8 rounded-2xl border border-border bg-background/95 px-3 py-3 shadow-lg backdrop-blur-md sm:px-4">
      <p className="mb-2 px-1 text-[10px] font-semibold uppercase tracking-[.16em] text-muted-foreground">Jump to a tool</p>
      <ul ref={listRef} className="flex gap-1.5 overflow-x-auto pb-1">
        {items.map((item, index) => (
          <li key={item.id} className="shrink-0">
            <a href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined} onClick={() => setActive(item.id)} className="fp-tool-tab inline-flex min-h-10 items-center gap-2 whitespace-nowrap rounded-lg border border-transparent px-3 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
              {index > 0 && <span aria-hidden="true" className="text-[10px] tabular-nums opacity-60">0{index}</span>}
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
