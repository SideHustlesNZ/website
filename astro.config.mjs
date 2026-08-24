import { defineConfig } from 'astro/config';

// Static output, deployed as a Cloudflare Worker with static assets (not
// Cloudflare Pages). Trailing-slash directory URLs (/pricing/, /about/) so old
// WordPress-style links keep working. src/pages/404.astro builds to
// dist/404.html, which wrangler.jsonc serves for any unknown address.
export default defineConfig({
  site: 'https://sidehustles.nz',
  output: 'static',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
