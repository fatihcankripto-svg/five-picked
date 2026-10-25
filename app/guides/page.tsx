import Link from 'next/link'
import { ContentPage, contentMetadata } from '@/components/content-page'

export const metadata = contentMetadata({
  title: 'Guides',
  description: 'Plain-English comparisons and buying guides from FIVE PICKED.',
  path: '/guides',
})

const guides = [
  {
    href: '/guides/best-ai-video-tools-for-beginners',
    title: 'Best AI video tools for beginners',
    summary: 'What Pictory, Fliki, Synthesia, Kling AI and ElevenLabs each do best.',
  },
  {
    href: '/guides/shared-vs-cloud-vs-managed-wordpress-hosting',
    title: 'Shared vs cloud vs managed WordPress hosting',
    summary: 'The main hosting types explained, and which one you actually need.',
  },
  {
    href: '/guides/how-to-choose-a-vpn',
    title: 'How to choose a VPN',
    summary: 'What a VPN does, what to check before you pick one, and which suits you.',
  },
  {
    href: '/guides/hostinger-vs-bluehost',
    title: 'Hostinger vs Bluehost: which is better for beginners?',
    summary: 'Pricing, ease of use, support and who each host suits.',
  },
]

export default function GuidesPage() {
  return (
    <ContentPage
      eyebrow="Guides"
      title="Guides"
      intro="Plain-English comparisons and buying guides to help you choose with confidence."
    >
      <ul>
        {guides.map((guide) => (
          <li key={guide.href}>
            <Link href={guide.href}>
              <strong>{guide.title}</strong>
            </Link>
            <br />
            {guide.summary}
          </li>
        ))}
      </ul>
    </ContentPage>
  )
}
