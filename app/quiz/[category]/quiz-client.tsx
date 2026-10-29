'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import type { QuizQuestion } from '@/lib/quiz-pages'
import type { Tool } from '@/data/categories'
import { ToolCard } from '@/components/tool-card'
import { cn } from '@/lib/utils'

type Props = {
  questions: QuizQuestion[]
  tools: Tool[]
  tieBreak: string
  listPath: string
  listLabel: string
}

export function QuizClient({ questions, tools, tieBreak, listPath, listLabel }: Props) {
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null))
  const [submitted, setSubmitted] = useState(false)

  const allAnswered = answers.every((a) => a !== null)

  const result = useMemo(() => {
    if (!submitted) return null
    const scores = new Map<string, number>()
    for (const tool of tools) scores.set(tool.slug, 0)

    answers.forEach((choice, qIndex) => {
      if (choice === null) return
      const option = questions[qIndex].options[choice]
      for (const [slug, weight] of Object.entries(option.favours)) {
        if (scores.has(slug)) scores.set(slug, (scores.get(slug) ?? 0) + weight)
      }
    })

    let bestSlug = tieBreak
    let bestScore = -1
    for (const tool of tools) {
      const score = scores.get(tool.slug) ?? 0
      if (score > bestScore) {
        bestScore = score
        bestSlug = tool.slug
      }
    }
    const winner = tools.find((t) => t.slug === bestSlug) ?? tools[0]
    const runnerUp =
      tools
        .filter((t) => t.slug !== winner.slug)
        .sort((a, b) => (scores.get(b.slug) ?? 0) - (scores.get(a.slug) ?? 0))[0] ?? null

    return { winner, runnerUp }
  }, [submitted, answers, questions, tools, tieBreak])

  if (submitted && result) {
    const winnerRank = tools.findIndex((t) => t.slug === result.winner.slug) + 1
    return (
      <div>
        <div className="rounded-2xl border border-primary/40 bg-primary/[0.08] p-6 sm:p-8">
          <p className="text-xs uppercase tracking-widest text-primary">Your result</p>
          <h2 className="mt-2 text-3xl font-semibold text-foreground">{result.winner.name}</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Based on your answers, <strong className="text-foreground">{result.winner.name}</strong>{' '}
            is the best fit for you. It is ranked #{winnerRank} in{' '}
            <Link href={listPath} className="text-foreground underline underline-offset-4">
              {listLabel}
            </Link>
            .
          </p>
          {result.runnerUp && (
            <p className="mt-2 text-sm text-muted-foreground">
              Runner-up: <span className="text-foreground">{result.runnerUp.name}</span>.
            </p>
          )}
          <button
            type="button"
            onClick={() => {
              setSubmitted(false)
              setAnswers(questions.map(() => null))
            }}
            className="mt-6 rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground hover:border-primary/40 hover:bg-accent"
          >
            Take the quiz again
          </button>
        </div>

        <div className="mt-8">
          <ToolCard tool={result.winner} rank={winnerRank} />
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      {questions.map((q, qIndex) => (
        <fieldset key={q.id} className="rounded-2xl border border-border bg-card p-6">
          <legend className="px-1 text-sm font-semibold text-foreground">
            {qIndex + 1}. {q.question}
          </legend>
          <div className="mt-4 flex flex-col gap-2">
            {q.options.map((option, oIndex) => {
              const selected = answers[qIndex] === oIndex
              return (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => {
                    const next = [...answers]
                    next[qIndex] = oIndex
                    setAnswers(next)
                  }}
                  aria-pressed={selected}
                  className={cn(
                    'rounded-lg border px-4 py-2.5 text-left text-sm transition-colors',
                    selected
                      ? 'border-primary bg-primary/10 text-foreground'
                      : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground',
                  )}
                >
                  {option.label}
                </button>
              )
            })}
          </div>
        </fieldset>
      ))}

      <button
        type="button"
        disabled={!allAnswered}
        onClick={() => setSubmitted(true)}
        className={cn(
          'rounded-lg px-5 py-3 text-sm font-semibold transition-colors',
          allAnswered
            ? 'bg-primary text-primary-foreground hover:opacity-90'
            : 'cursor-not-allowed bg-muted text-muted-foreground',
        )}
      >
        {allAnswered ? 'See my result' : 'Answer all questions to continue'}
      </button>
    </div>
  )
        }
