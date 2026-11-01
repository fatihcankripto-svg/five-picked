'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import styles from './home-motion.module.css'

// Invert the timing curve's x coordinate so rAF matches cubic-bezier(.16, 1, .3, 1).
function easeOut(progress: number) {
  let low = 0
  let high = 1
  for (let i = 0; i < 18; i++) {
    const t = (low + high) / 2
    const x = 3 * (1 - t) ** 2 * t * 0.16 + 3 * (1 - t) * t ** 2 * 0.3 + t ** 3
    if (x < progress) low = t
    else high = t
  }
  return 1 - (1 - (low + high) / 2) ** 3
}

export function HeroCount({ target, className }: { target: number; className: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const motion = window.matchMedia('(prefers-reduced-motion: no-preference)')
    let frame = 0
    let pulse: Animation | undefined
    let started = false
    function stop() {
      cancelAnimationFrame(frame)
      pulse?.cancel()
      node!.textContent = String(target)
    }
    function update() {
      if (!motion.matches) { stop(); return }
      if (started) return
      started = true
      node!.textContent = '0'
      const start = performance.now()
      function tick(now: number) {
        if (!motion.matches) { stop(); return }
        const progress = Math.min((now - start) / 1200, 1)
        node!.textContent = String(progress === 1 ? target : Math.floor(easeOut(progress) * target))
        if (progress < 1) frame = requestAnimationFrame(tick)
        else pulse = node!.animate?.(
          [{ transform: 'scale(1)' }, { transform: 'scale(1.02)' }, { transform: 'scale(1)' }],
          { duration: 200, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' },
        )
      }
      frame = requestAnimationFrame(tick)
    }
    update()
    motion.addEventListener('change', update)
    return () => { motion.removeEventListener('change', update); stop() }
  }, [target])
  // The final value is server-rendered; JavaScript failure and reduced motion keep it visible.
  return <span ref={ref} className={`${className} ${styles.counter}`}>{target}</span>
}

export function CategoryReveal({ children, className }: { children: ReactNode; className: string }) {
  const ref = useRef<HTMLUListElement>(null)
  useEffect(() => {
    const cards = Array.from(ref.current?.children ?? []) as HTMLElement[]
    const motion = window.matchMedia('(prefers-reduced-motion: no-preference)')
    const revealed = new Set<Element>()
    let observer: IntersectionObserver | undefined
    function showAll() {
      observer?.disconnect()
      cards.forEach(card => { card.dataset.revealState = 'visible'; revealed.add(card) })
    }
    function update() {
      observer?.disconnect()
      if (!motion.matches || !('IntersectionObserver' in window)) { showAll(); return }
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting || revealed.has(entry.target)) return
          revealed.add(entry.target)
          ;(entry.target as HTMLElement).dataset.revealState = 'visible'
          observer?.unobserve(entry.target)
        })
      }, { threshold: 0.1 })
      cards.forEach((card, index) => {
        if (revealed.has(card)) return
        card.style.setProperty('--home-reveal-delay', `${index * 60}ms`)
        card.dataset.revealState = 'pending'
        observer!.observe(card)
      })
    }
    update()
    motion.addEventListener('change', update)
    return () => { motion.removeEventListener('change', update); showAll() }
  }, [])
  return <ul ref={ref} className={`${className} ${styles.revealGrid}`}>{children}</ul>
}
