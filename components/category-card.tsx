'use client'

import Link from 'next/link'
import type { MouseEvent } from 'react'
import {
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Clapperboard,
  Cloud,
  FolderKanban,
  GraduationCap,
  ImageIcon,
  Languages,
  Layers,
  Mail,
  Megaphone,
  MessageSquare,
  Mic,
  NotebookPen,
  Presentation,
  Server,
  ShieldCheck,
  Workflow,
  FileText,
  type LucideIcon,
} from 'lucide-react'

const icons: Record<string, LucideIcon> = {
  'ai-tools': Bot,
  'web-hosting-and-domains': Server,
  'vpn-and-security': ShieldCheck,
  'online-courses': GraduationCap,
  'email-marketing': Mail,
  'video-and-design-software': Clapperboard,
  'software-and-productivity': Layers,
  'freelance-platforms': BriefcaseBusiness,
  'language-learning': Languages,
  'video-and-voice': Mic,
  'image-and-design': ImageIcon,
  'meeting-notes': FileText,
  'marketing-and-seo': Megaphone,
  chatbots: MessageSquare,
  'note-taking': NotebookPen,
  'project-management': FolderKanban,
  'cloud-storage': Cloud,
  presentations: Presentation,
  automation: Workflow,
}

function followMouse(event: MouseEvent<HTMLAnchorElement>) {
  const rect = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`)
  event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`)
}

export function CategoryCard({
  href,
  slug,
  name,
  description,
  meta,
  number,
  headingLevel = 'h3',
}: {
  href: string
  slug: string
  name: string
  description: string
  meta: string
  number?: string
  headingLevel?: 'h2' | 'h3'
}) {
  const Icon = icons[slug] ?? Layers
  const Heading = headingLevel

  return (
    <Link
      href={href}
      onMouseMove={followMouse}
      className="fp-lift fp-spot group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <div className="flex items-start justify-between">
        <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          <Icon aria-hidden="true" className="size-5" />
        </span>
        <div className="flex items-center gap-3">
          {number && (
            <span
              aria-hidden="true"
              className="text-xs font-semibold tabular-nums tracking-[0.2em] text-muted-foreground/70"
            >
              {number}
            </span>
          )}
          <ArrowUpRight
            aria-hidden="true"
            className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
          />
        </div>
      </div>
      <Heading className="mt-6 text-lg font-semibold text-foreground text-pretty">{name}</Heading>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <p className="mt-6 text-xs font-medium uppercase tracking-widest text-primary">{meta}</p>
    </Link>
  )
}
