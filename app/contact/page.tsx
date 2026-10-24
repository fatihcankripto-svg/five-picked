import { Mail } from 'lucide-react'
import { ContentPage, contentMetadata } from '@/components/content-page'
import { siteConfig } from '@/lib/site'

export const metadata = contentMetadata({
  title: 'Contact',
  description: `Get in touch with FIVE PICKED. Email ${siteConfig.email} with suggestions, corrections or questions.`,
  path: '/contact',
})

export default function ContactPage() {
  return (
    <ContentPage
      eyebrow="Contact"
      title="Contact us"
      intro="Have a suggestion, spotted something out of date, or just have a question? We would like to hear from you."
    >
      <a
        href={`mailto:${siteConfig.email}`}
        className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 !no-underline transition-colors hover:border-primary/40 hover:bg-accent"
      >
        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <Mail aria-hidden="true" className="size-5" />
        </span>
        <span className="flex flex-col">
          <span className="text-sm text-muted-foreground">Email us at</span>
          <span className="text-lg font-semibold text-foreground group-hover:text-primary sm:text-xl">
            {siteConfig.email}
          </span>
        </span>
      </a>

      <h2>What to write to us about</h2>
      <ul>
        <li>Corrections to pricing, features or other details that have changed.</li>
        <li>Tools you think deserve a closer look.</li>
        <li>Questions about how we choose or how the site is funded.</li>
      </ul>

      <h2>A note for companies</h2>
      <p>
        We are happy to hear about your product, but we do not accept payment for placement or rankings, and
        contacting us does not guarantee coverage. Every pick is decided independently.
      </p>
    </ContentPage>
  )
}
