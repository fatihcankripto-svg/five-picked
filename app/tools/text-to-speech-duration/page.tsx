import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { SectionMarker } from '@/components/section-marker'
import { TtsDuration } from '@/components/tts-duration'
import { absoluteUrl } from '@/lib/site'

const path = '/tools/text-to-speech-duration'
const title = 'Text-to-Speech Duration Calculator (2026)'
const description =
  'Free text-to-speech duration calculator. Paste a script and see how long the AI voiceover will run at slow, normal or fast speed.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, type: 'website' },
  twitter: { title, description },
}

const faqs = [
  {
    question: 'How many words per minute is a normal voiceover?',
    answer:
      'Most professional voiceovers run at about 150 words per minute. Slow narration (documentaries, tutorials) sits closer to 120 wpm, and fast reads (ads, shorts) reach around 180 wpm.',
  },
  {
    question: 'How long does a 1,000-word script take to read aloud?',
    answer:
      'At a normal 150 wpm pace, a 1,000-word script runs for roughly 6 minutes 40 seconds. At 120 wpm it is closer to 8 minutes 20 seconds, and at 180 wpm just over 5 minutes 30 seconds.',
  },
  {
    question: 'Is the duration the same for AI voices and human narrators?',
    answer:
      'Not exactly. AI voice tools follow their own pacing and add small pauses at punctuation. Treat this calculator as a planning estimate, then confirm in your chosen tool before you commit to a script length.',
  },
  {
    question: 'Which AI voice tool should I use?',
    answer:
      'For realistic voices with dubbing and voice cloning, ElevenLabs is our top pick. For narrated videos that also add visuals and captions, try Fliki. Both are listed on our AI video tools page.',
  },
  {
    question: 'Does this calculator store my text?',
    answer:
      'No. Everything runs in your browser and nothing is sent to a server, so you can safely paste scripts with unreleased content.',
  },
]

export default function Page() {
  const webAppLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: title,
    description,
    url: absoluteUrl(path),
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <div className="mx-auto max-w-3xl px-5 pt-10 sm:px-8 sm:pt-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppLd).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, '\\u003c') }}
      />

      <Breadcrumbs
        items={[
          { label: 'Tools', href: '/tools' },
          { label: 'Text-to-speech duration calculator' },
        ]}
      />

      <header className="mt-10">
        <SectionMarker label="Free tool" />
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl">
          Text-to-speech duration calculator
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
          Paste a script and see how long the AI voiceover will run at slow, normal or fast speed.
          Runs entirely in your browser — nothing is uploaded.
        </p>
      </header>

      <div className="mt-10">
        <TtsDuration />
      </div>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          How to use it
        </h2>
        <div className="mt-4 flex flex-col gap-4 leading-relaxed text-muted-foreground">
          <p>
            Paste your script into the box above, pick a speaking speed, and read the estimated
            duration. The calculator uses the word count and an average words-per-minute rate for
            the speed you choose.
          </p>
          <p>
            This is useful before you generate a voiceover in a tool like ElevenLabs or Fliki, which
            bill per character or per minute. Knowing the runtime helps you plan a script that fits
            your plan without wasting credits.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Frequently asked questions
        </h2>
        <dl className="mt-6 flex flex-col gap-6">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <dt className="font-semibold text-foreground">{faq.question}</dt>
              <dd className="mt-2 leading-relaxed text-muted-foreground">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <aside className="mt-14 rounded-2xl border border-border p-6 text-sm leading-relaxed text-muted-foreground">
        Ready to record? See{' '}
        <Link
          href="/free/best-free-ai-video-tools"
          className="text-foreground underline underline-offset-4 hover:text-primary"
        >
          the best free AI video tools
        </Link>{' '}
        or{' '}
        <Link
          href="/ai-tools/video-and-voice"
          className="text-foreground underline underline-offset-4 hover:text-primary"
        >
          our full AI video & voice top 5
        </Link>
        .
      </aside>
    </div>
  )
}
