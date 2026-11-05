<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Production release integrity

- Use `main` as the integration source for production.
- Before editing or publishing, fetch the latest `main` and preserve all released changes. `seo-duzeltme` and the two unused analytics branches were intentionally deleted; do not recreate them.
- Merge divergent work and preserve newer news, affiliate settings, verified content, visual assets and navigation. Do not restore the whole site from an older deployment to fix one feature.
- Work from current `main`. Use expected-head checks when publishing; do not force-push over concurrent work.
- Verify the production deployment commit and the fivepicked.com alias after release.
