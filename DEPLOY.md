# Deployment — Cloudflare Workers

Live site: **https://comparativeai.org**

## Current setup

- **Adapter**: `@astrojs/cloudflare` v12 (SSR-capable, but most routes are
  pre-rendered by Starlight).
- **Build output**: `dist/` containing `_worker.js/` entry + static HTML + assets.
- **Config**: `wrangler.jsonc` points to `dist/_worker.js/index.js` with
  `ASSETS` binding mapped to `dist/`.

## How it auto-deploys

The repo is connected to a Cloudflare Workers project named **comparativeai**
(see git history — commit `acaa24d` by `cloudflare-workers-and-pages[bot]`
added the initial scaffold). On push to `main`:

1. Cloudflare's GitHub integration webhook fires.
2. Cloudflare runs `npm install && npm run build` in their build environment.
3. The built `dist/` is uploaded to Workers and routed to `comparativeai.org`.

If auto-deploy doesn't trigger on push, one of these is likely wrong:
- The Cloudflare project's branch isn't set to `main` (dashboard → Workers →
  comparativeai → Settings → Builds → Production branch).
- The build command isn't `npm run build` (dashboard → same place).
- The build output directory isn't `dist` (dashboard → same place).
- GitHub's Cloudflare app lost its permission on the repo
  (github.com → Settings → Integrations → Cloudflare → re-authorize).

## Manual deploy from laptop

If you need to push a build without waiting for CI:

```bash
npm run build
npx wrangler login              # one-time OAuth in browser
npx wrangler deploy             # uploads dist/ to Workers
```

## Switching back to local Keystatic (content editing)

Keystatic's admin UI was removed from production to avoid bundling its
server runtime into the Workers deploy. To edit content via Keystatic
locally:

1. In `astro.config.mjs`, re-add `import keystatic from '@keystatic/astro'`
   and include `keystatic()` in the `integrations` array.
2. Also re-add `import node from '@astrojs/node'` and set
   `adapter: node({ mode: 'standalone' })` *instead of* `cloudflare()`.
3. Run `npm run dev`. Visit `/keystatic` for the admin UI.
4. Before committing back to main, revert those two edits so the Workers
   build doesn't break.
