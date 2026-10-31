import { pageMetadata } from '@/lib/metadata'
import { socialImages } from '@/lib/site'
import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react'
import { RelatedContent } from '@/components/related-content'
import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { SectionMarker } from '@/components/section-marker'

export function contentMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  return pageMetadata({
    title,
    description,
    alternates: { canonical: path },
    openGraph: { images: socialImages, title, description, url: path, type: 'article' },
    twitter: { images: socialImages, title, description },
  })
}

export function ContentPage({
  path,
  eyebrow,
  title,
  intro,
  children,
  showRelatedContent = true,
  designSystem = false,
}: {
  path?: string
  eyebrow: string
  title: string
  intro: string
  children: React.ReactNode
  showRelatedContent?: boolean
  designSystem?: boolean
}) {
  const sections: { id: string; label: string }[] = []
  const content = Children.map(children, (child) => {
    if (!isValidElement(child) || child.type !== 'h2') return child
    const element = child as ReactElement<{ id?: string; children?: ReactNode }>
    const label = Children.toArray(element.props.children).filter((item) => typeof item === 'string').join('')
    const id = element.props.id ?? `section-${sections.length + 1}`
    if (label) sections.push({ id, label })
    return cloneElement(element, { id })
  })
  return (
    <div data-design-system={designSystem ? 'foundation' : undefined} className={`mx-auto max-w-3xl px-5 pt-10 sm:px-8 sm:pt-14${designSystem ? ' fp-design-system' : ''}`}>
      <Breadcrumbs items={[...(path?.startsWith("/reviews/") ? [{ label: "Reviews", href: "/reviews" }] : path?.startsWith("/alternatives/") ? [{ label: "Alternatives", href: "/alternatives" }] : []), { label: title }]} />
      <header className="mt-10 border-b border-border pb-10">
        <SectionMarker label={eyebrow} />
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">{intro}</p>
      </header>
      {sections.length > 2 && <nav aria-label="On this page" className="mt-8 rounded-xl border border-border p-5"><p className="font-semibold">On this page</p><ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">{sections.map((section) => <li key={section.id}><a href={`#${section.id}`} className="text-primary underline underline-offset-4">{section.label}</a></li>)}</ul></nav>}
      <div className="mt-10 flex flex-col gap-5 leading-relaxed text-muted-foreground [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-primary [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5 [&_ul]:marker:text-primary">
        {content}
      </div>
      {path && showRelatedContent && <RelatedContent path={path} />}
    </div>
  )
}
