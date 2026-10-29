'use client'

import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'

type Speed = 'slow' | 'normal' | 'fast'

const SPEEDS: { id: Speed; label: string; wpm: number }[] = [
  { id: 'slow', label: 'Slow', wpm: 120 },
  { id: 'normal', label: 'Normal', wpm: 150 },
  { id: 'fast', label: 'Fast', wpm: 180 },
]

function formatDuration(totalSeconds: number) {
  if (!Number.isFinite(totalSeconds) || totalSeconds <= 0) return '0:00'
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = Math.round(totalSeconds % 60)
  const padded = seconds.toString().padStart(2, '0')
  return `${minutes}:${padded}`
}

export function TtsDuration() {
  const [text, setText] = useState('')
  const [speed, setSpeed] = useState<Speed>('normal')

  const activeSpeed = SPEEDS.find((s) => s.id === speed)!

  const { words, chars, seconds } = useMemo(() => {
    const trimmed = text.trim()
    const wordCount = trimmed ? trimmed.split(/\s+/).length : 0
    const charCount = text.length
    const estimate = (wordCount / activeSpeed.wpm) * 60
    return { words: wordCount, chars: charCount, seconds: estimate }
  }, [text, activeSpeed.wpm])

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <label htmlFor="tts-text" className="text-sm font-medium text-foreground">
        Paste your script
      </label>
      <textarea
        id="tts-text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={6}
        placeholder="Paste the text you want to turn into a voiceover..."
        className="mt-2 w-full rounded-lg border border-border bg-background p-3 text-sm leading-relaxed text-foreground outline-none focus:border-primary"
      />

      <div className="mt-6">
        <p className="text-sm font-medium text-foreground">Speaking speed</p>
        <div role="radiogroup" aria-label="Speaking speed" className="mt-2 flex gap-2">
          {SPEEDS.map((s) => (
            <button
              key={s.id}
              type="button"
              role="radio"
              aria-checked={speed === s.id}
              onClick={() => setSpeed(s.id)}
              className={cn(
                'flex-1 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors',
                speed === s.id
                  ? 'border-primary bg-primary/10 text-foreground'
                  : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground',
              )}
            >
              {s.label} <span className="font-normal text-muted-foreground">({s.wpm} wpm)</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-primary/40 bg-primary/[0.08] p-4">
          <p className="text-xs uppercase tracking-widest text-primary">Estimated duration</p>
          <p className="mt-1 text-2xl font-semibold text-foreground">{formatDuration(seconds)}</p>
        </div>
        <div className="rounded-xl border border-border bg-background p-4">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Words</p>
          <p className="mt-1 text-xl font-semibold text-foreground">{words.toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-border bg-background p-4">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Characters</p>
          <p className="mt-1 text-xl font-semibold text-foreground">{chars.toLocaleString()}</p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
        Estimates use average speaking rates: slow ≈ 120 words per minute, normal ≈ 150, fast ≈ 180.
        Real AI voice tools vary by voice and language, so treat this as a planning guide.
      </p>
    </div>
  )
}
