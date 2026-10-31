/** Shared collective identity; no individual credentials or testing history are implied. */
export const editorialIdentity = {
  name: 'Five Picked Editorial Team',
  bio: 'The Five Picked editorial team researches tools, prices and free-plan limits using official sources. Every guide is dated and reviewed before publication.',
  url: 'https://fivepicked.com/about#editorial-team',
} as const

/** Records the actual editorial change in this package, not an unperformed price or product test. */
export const editorialUpdateNote = 'Added the shared editorial identity, biography and visible update record. Existing pricing, source links and research findings were retained.'
