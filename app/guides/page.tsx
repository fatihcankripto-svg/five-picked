import Link from 'next/link'
import { ContentPage, contentMetadata } from '@/components/content-page'

export const metadata = contentMetadata({
  title: 'Guides',
  description: 'Plain-English comparisons and buying guides from FIVE PICKED.',
  path: '/guides',
})

const guides = [
  { href: '/guides/ai-voice-commercial-use', title: 'Can you use free AI voices commercially?', summary: 'Official ElevenLabs and Fliki licensing rules, and what an upgrade does not cover.' },
  {
    href: '/guides/best-ai-meeting-note-takers',
    title: 'Best AI meeting note takers',
    summary: 'What Fireflies, tl;dv, Notta and Otter each do best.',
  },
  {
    href: '/guides/nordvpn-vs-surfshark',
    title: 'NordVPN vs Surfshark: which VPN should you choose?',
    summary: 'Devices, speed, audits, price and who each VPN suits.',
  },
  {
    href: '/guides/tidio-vs-chatbase',
    title: 'Tidio vs Chatbase: which chatbot platform fits your business?',
    summary: 'A support suite with AI versus a focused AI chatbot builder.',
  },
  {
    href: '/guides/fliki-vs-pictory',
    title: 'Fliki vs Pictory: which AI video tool is better?',
    summary: 'Repurposing content versus voice-first video creation.',
  },
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
