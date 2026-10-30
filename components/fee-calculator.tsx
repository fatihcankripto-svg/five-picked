'use client'

import { useState } from 'react'
import { calculateFee } from '@/lib/fee-math'
import { cn } from '@/lib/utils'

type Platform = 'fiverr' | 'upwork'

const PLATFORMS: { id: Platform; name: string; feeRate: number; feeNote: string }[] = [
  {
    id: 'fiverr',
    name: 'Fiverr',
    feeRate: 0.2,
    feeNote: 'Fiverr takes a flat 20% seller fee from each order.',
  },
  {
    id: 'upwork',
    name: 'Upwork',
    feeRate: 0.1,
    feeNote:
      'Upwork fees range from 0% to 15% per contract. Enter the rate shown in your proposal or offer. The initial 10% is an example, not a quoted fee.',
  },
]

const CURRENCIES: { id: string; symbol: string; label: string }[] = [
  { id: 'USD', symbol: '$', label: 'USD' },
  { id: 'EUR', symbol: '€', label: 'EUR' },
  { id: 'GBP', symbol: '£', label: 'GBP' },
]

export function FeeCalculator() {
  const [platform, setPlatform] = useState<Platform>('fiverr')
  const [currency, setCurrency] = useState('USD')
  const [amount, setAmount] = useState('100')
  const [upworkRate, setUpworkRate] = useState('10')

  const activePlatform = PLATFORMS.find((p) => p.id === platform)!
  const activeCurrency = CURRENCIES.find((c) => c.id === currency)!
  const feeRate = platform === 'upwork' ? Math.min(15, Math.max(0, Number(upworkRate) || 0)) / 100 : 0.2
  const { gross: numericAmount, fee: feeAmount, net: netAmount } = calculateFee(Number(amount), feeRate * 100)

  const format = (value: number) =>
    `${activeCurrency.symbol}${value.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-foreground">
            Platform
          </p>
          <div role="group" aria-label="Platform" className="mt-2 flex gap-2">
            {PLATFORMS.map((p) => (
              <button
                key={p.id}
                type="button"

                aria-pressed={platform === p.id}
                onClick={() => setPlatform(p.id)}
                className={cn(
                  'flex-1 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors',
                  platform === p.id
                    ? 'border-primary bg-primary/10 text-foreground'
                    : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground',
                )}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-foreground">
            Currency
          </p>
          <div role="group" aria-label="Currency" className="mt-2 flex gap-2">
            {CURRENCIES.map((c) => (
              <button
                key={c.id}
                type="button"

                aria-pressed={currency === c.id}
                onClick={() => setCurrency(c.id)}
                className={cn(
                  'flex-1 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors',
                  currency === c.id
                    ? 'border-primary bg-primary/10 text-foreground'
                    : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground',
                )}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {platform === 'upwork' && <div className="mt-6"><label htmlFor="upwork-fee-rate" className="text-sm font-medium">Your Upwork contract fee (%)</label><input id="upwork-fee-rate" type="number" min="0" max="15" step="0.01" value={upworkRate} onChange={(event) => setUpworkRate(event.target.value)} className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3" /><p className="mt-2 text-sm text-muted-foreground">Use the percentage displayed in your proposal or offer; 10% is an example.</p></div>}
      <div className="mt-6">
        <label htmlFor="fee-amount" className="text-sm font-medium text-foreground">
          Order amount (what the client pays)
        </label>
        <div className="relative mt-2">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
            {activeCurrency.symbol}
          </span>
          <input
            id="fee-amount"
            type="number"
            inputMode="decimal"
            min="0"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-lg border border-border bg-background py-3 pl-9 pr-4 text-lg font-semibold text-foreground outline-none focus:border-primary"
          />
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-background p-4">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Client pays</p>
          <p className="mt-1 text-xl font-semibold text-foreground">{format(numericAmount)}</p>
        </div>
        <div className="rounded-xl border border-border bg-background p-4">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            {activePlatform.name} fee ({Number((feeRate * 100).toFixed(2))}%)
          </p>
          <p className="mt-1 text-xl font-semibold text-destructive">−{format(feeAmount)}</p>
        </div>
        <div className="rounded-xl border border-primary/40 bg-primary/[0.08] p-4">
          <p className="text-xs uppercase tracking-widest text-primary">You keep</p>
          <p className="mt-1 text-xl font-semibold text-foreground">{format(netAmount)}</p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{activePlatform.feeNote}</p>
    </div>
  )
}
