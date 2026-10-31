/** Phase 5 foundation is opt-in: every other route retains its existing appearance. */
export function hasDesignFoundation(path: string | null) {
  return path === '/' || path === '/web-hosting-and-domains' || path === '/reviews/hostinger'
}

export type FoundationButtonVariant = 'primary' | 'secondary' | 'ghost'
export function foundationButtonClasses(variant: FoundationButtonVariant = 'primary') {
  return `fp-ds-button fp-ds-button-${variant}`
}
export const foundationCardClasses = 'fp-glass fp-ds-card'
