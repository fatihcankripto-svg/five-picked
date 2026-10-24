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
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: 'article' },
    twitter: { title, description },
  }
}

export function ContentPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string
  title: string
  intro: string
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-10 sm:px-8 sm:pt-14">
      <Breadcrumbs items={[{ label: title }]} />
      <header className="mt-10 border-b border-border pb-10">
        <SectionMarker label={eyebrow} />
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">{intro}</p>
      </header>
      <div className="mt-10 flex flex-col gap-5 leading-relaxed text-muted-foreground [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-primary [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5 [&_ul]:marker:text-primary">
        {children}
      </div>
    </div>
  )
}
