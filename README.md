# Side Hustles NZ — website

Static site built with [Astro](https://astro.build). Seven pages plus a 404
page, no database, no server. It builds to plain HTML/CSS and is hosted free on
Cloudflare as a Worker with static assets.

## Running it on your own machine

```bash
npm install      # once
npm run dev      # opens http://localhost:4321
```

`npm run build` writes the finished site to `dist/`. `npm run preview` serves
that built version so you can check it exactly as it will be online.

## Where things are

```
src/
  content/          <- ALL the words on the site live here. Start here.
    site.ts           shared bits: nav, footer, links, subscribe modal
    home.ts           the Home page
    pricing.ts        the Pricing page
    library.ts        the Library page
    stories.ts        Success Stories (member videos + screenshots)
    about.ts          About us
    contact.ts        Contact (form, channels, refunds)
    privacy.ts        Privacy policy
    notfound.ts       the 404 "this page has moved" page
  pages/            <- one file per page, the layout of each page
                       (404.astro builds to dist/404.html)
  components/       <- shared pieces: header, footer, modal, FAQ, icons
  layouts/          <- the page shell (head tags, Google tag, header, footer)
  styles/global.css <- design tokens (colours, type, spacing) + shared styles
public/
  _redirects        <- Cloudflare redirect rules for old URLs
  favicon.svg
wrangler.jsonc      <- Cloudflare deploy config (what to serve, and what to do
                       with unknown addresses)
```

To change wording, edit the matching file in `src/content/`. You do not need to
touch anything in `pages/` or `components/` to fix a typo or reword a section.

Colours, type sizes and spacing are all defined once at the top of
`src/styles/global.css` as variables, taken from the design handoff's token
table. Change a value there and it updates everywhere.

## Things that are deliberately still unfinished

These need something from you. Each one is marked with a comment in the code.

1. **Photos and video — about 20 slots.** Every striped grey box is a real
   photo waiting to arrive. To fill one, replace the `<Placeholder ... />` with
   an `<img>` at the same aspect ratio or height. The labels say what each one
   is meant to be ("Founder portrait", "Meetup photo", "Screenshot 4").
2. **Subscribe modal has no destination.** `src/components/SubscribeModal.astro`
   — set `ACTION` to the form endpoint from your email tool. Until then the form
   shows the confirmation message without storing anything.
3. **Contact form has no destination.** `src/content/contact.ts` — set
   `formAction`. Until then the form falls back to opening the visitor's email
   app addressed to hello@sidehustles.nz, so messages still get through.
4. **Success Stories videos.** `src/content/stories.ts` — paste each member's
   YouTube ID into `videoId` and the placeholder turns into a real player.
5. **Coach and podcast guest names** still say "Coach name" / "Guest name",
   exactly as the design does. In `src/content/home.ts`.
6. **Podcast "Listen to the latest episode" button** has no URL yet, so it
   points at the Contact page. Set `podcast.listenHref` in
   `src/content/home.ts` when the podcast link exists.
7. **Press logos** (NZ Herald, Stuff, One News, One Breakfast, Making Cents)
   are set as text, as in the design. Confirm you have permission to show
   them before go-live — they are other companies' trade marks.

## The price difference between two pages

The design states different prices on two pages, and this build copies each
page exactly as designed rather than guessing:

| | Home page | Pricing page |
|---|---|---|
| Monthly | $197, "NZD, GST inclusive" | $197 "month + GST" |
| Annual, per month | $149 | $147 "month + GST*" |
| Annual, billed | $1,788 | $1,764 + GST |
| Saving quoted | $576 | $600 |

Once you confirm which is right, the numbers live in `src/content/home.ts`
(`pricing`) and `src/content/pricing.ts` (`annual`, `monthly`, and FAQ answer
"Monthly or annual").

## Mobile

The design had no mobile version of the header, hero, pricing table or footer,
so those were designed here, following the recommendations in the handoff:

- **Header**: below 900px the nav links collapse into a hamburger that opens a
  full-screen navy menu. The "Join the community" button stays visible in the
  bar at every screen size, because that is the signup button.
- **Hero**: top padding scales 150px → 88px, the price pill wraps.
- **Pricing / included cards**: stack to one column, plan panel first.
- **Footer**: 5 columns → 2 → 1.
- **Section padding**: 96–120px → 56–64px, page padding 32px → 20px. These are
  single variables at the top of `global.css`, so the whole site scales together.
- The quote marquee pauses on hover and falls back to a swipeable row for
  visitors who have "reduce motion" turned on.

## Other build decisions worth knowing

- **Fonts are self-hosted** (Archivo, from the `@fontsource-variable` package)
  rather than loaded from Google Fonts. Faster, and nothing breaks if Google is
  slow.
- **Icons are inline SVG**, extracted from the same Material Symbols Outlined
  font the design uses, so they look identical without the site downloading a
  3.8MB icon font.
- **Accessibility**: the subscribe modal traps focus, closes on Escape and
  returns focus to the bell; FAQ rows are real buttons with `aria-expanded`;
  decorative placeholders and the scattered member circles are hidden from
  screen readers.
- **Google tag** `G-5JNEDQJWWZ` is on every page, set in
  `src/layouts/BaseLayout.astro` (`site.gaId` in `src/content/site.ts`).
- Every "Join the community" button opens
  `https://shop.sidehustles.nz/shnz-insider` in a new tab with `rel="noopener"`.
  "Log in" and "Sign in" go to `https://www.skool.com/sidehustlesnz`.

## Old URLs and the 404 page

`public/_redirects` sends the old WordPress addresses somewhere sensible:
`/accelerator` goes to the new Pricing page, `/freebies` and `/growth-fund` go
home. Every anything-else address gets `src/pages/404.astro`, a branded page
that says the site was rebuilt and offers a way back, served with a real 404
status rather than pretending the page exists. Its wording is in
`src/content/notfound.ts` like every other page.

Never add a `/*` catch-all rule to `_redirects`. It matches the home page
itself and causes an infinite redirect loop.

## Deploying

This is a Cloudflare **Worker with static assets**, not Cloudflare Pages. The
current dashboard funnels new projects into the Workers flow, and the two are
configured differently.

- The repo is connected to the Worker, so **every push to `main` redeploys**.
- Build command `npm run build`, deploy command `npx wrangler deploy`, build
  variable `NODE_VERSION=22`.
- `wrangler.jsonc` at the top level tells Cloudflare to serve `./dist` and to
  use `404-page` handling for unknown addresses. It is JSONC, and wrangler
  fails the deploy on any brace or comma error, so replace the whole file
  rather than hand-editing it.
- A failed *deploy* still shows the build stage as successful, and leaves the
  previous version live. Check the build banner in the dashboard, not the site.

**Going live on the real domain:** add the custom domain under the Worker's
**Domains** tab, which issues the DNS record to point `sidehustles.nz` at it.
This is not the same screen as the Cloudflare Pages custom domain flow that
older instructions describe.
