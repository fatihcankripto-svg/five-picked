import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The page you are looking for does not exist on FIVE PICKED.',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-5 pt-24 text-center sm:px-8">
      <p aria-hidden="true" className="text-8xl font-bold text-primary">
        404
      </p>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-foreground">Page not found</h1>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        That page does not exist. Try one of our categories instead.
      </p>
      <Link
        href="/#categories"
        className="mt-8 inline-flex h-11 items-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
      >
        Browse categories
      </Link>
    </div>
  )
}
