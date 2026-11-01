/** Preserve JSON values while preventing content from ending an inline script. */
export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}
