# Your new website

This folder is the complete Side Hustles NZ website. Everything that makes the
site work is in here. You own it, you can host it anywhere, and any web
developer can pick it up and keep going without talking to us first.

There is nothing locked, nothing rented, and no monthly fee attached to the code
itself.

---

## The short version

- **Your words live in one place.** Every sentence on the site sits in a file
  under `sidehustles-nz-website/src/content/`. One file per page. Change a
  sentence there and it changes on the site. You never have to touch layout or
  design code to fix a typo or reword a section.
- **The site is 7 pages plus a "page not found" page.** Home, Pricing, Success
  Stories, Library, About, Contact, Privacy Policy.
- **It is a static site.** No database, no WordPress, no plugins to update,
  nothing that can be hacked through a login. It builds into plain files that
  get served very fast and cost nothing to host.

---

## If you want to change your own wording

You have two options, and you do not need to install anything for the first one.

### Option 1: edit in the browser (easiest)

The code lives in a private GitHub repository. Once you have access, you can
click any file, click the pencil icon, change the words, and click Commit. The
live site updates itself a minute or two later. Nothing else to do.

The files you will want are all in `src/content/`:

| File | What it controls |
| --- | --- |
| `site.ts` | The menu, the footer, and links used across the whole site |
| `home.ts` | The home page |
| `pricing.ts` | The pricing page |
| `library.ts` | The library page |
| `stories.ts` | Success stories |
| `about.ts` | About us |
| `contact.ts` | Contact page, including the refunds section |
| `privacy.ts` | Privacy policy |
| `notfound.ts` | The "this page has moved" page |

Inside each file the text sits between quote marks. Change what is between the
quotes, leave the quote marks and commas alone, and you are done.

### Option 2: run it on your own computer

If you or a developer want to work on it properly:

```
npm install
npm run dev
```

That opens the site at `http://localhost:4321` and updates as you type.
`npm run build` produces the finished site in a `dist` folder.

Full technical detail is in `sidehustles-nz-website/README.md`.

---

## Where the site lives

It is hosted on Cloudflare, on their free plan, and it is connected to the
GitHub repository. That means every time a change is saved to the code, the live
site rebuilds and republishes itself automatically. There is no separate
"upload" step and no FTP.

Your old web addresses are looked after too. Anyone clicking an old
`/accelerator` link from Facebook lands on your new Pricing page. `/freebies`
and `/growth-fund` go to the home page. Any other old address that no longer
exists shows a simple page explaining the site was rebuilt, with a button back
to the home page, rather than a broken screen.

---

## What the site still needs from you

These are marked in the code and are quick to fill in once you have them.

1. **Photos and video, around 20 slots.** Every striped grey box is waiting for
   a real image. The label on each one says what it is meant to be, for example
   "Founder portrait" or "Meetup photo".
2. **Coach names and podcast guest names.** These still say "Coach name" and
   "Guest name", exactly as the design did.
3. **Success story videos.** Paste each member's YouTube ID into `stories.ts`
   and the grey box turns into a real video player.
4. **Which email tool your newsletter list is in.** One answer connects both the
   subscribe popup and the contact form. Until then the contact form opens the
   visitor's email app addressed to hello@sidehustles.nz, so nothing is lost.
5. **Permission for the press logos.** NZ Herald, Stuff, One News, One
   Breakfast and Making Cents are shown as text on the site, as in the design.
   They belong to those companies, so it is worth confirming you are cleared to
   use them.

## Three things worth deciding before the site goes live

1. **The annual plan checkout.** Both "Join annual" buttons currently point at
   the same checkout link as the monthly plan, because no separate annual link
   was supplied. If annual is a separate product in your checkout, someone
   choosing annual would be charged monthly. This one is worth checking first.
2. **The podcast link.** "Listen to the latest episode" points at the Contact
   page for now because there is no podcast URL yet.
3. **The privacy policy mentions a Meta pixel.** There is no Meta pixel on the
   site, only Google Analytics. Either the pixel needs adding or that sentence
   needs removing, so the policy describes what the site actually does.

Also worth a look: the home page and the pricing page quote different prices.
Home says $197 GST inclusive with $149 a month annual. Pricing says $197 plus
GST with $147 plus GST. The site was built exactly as each page was designed
rather than guessing, so whichever is right is a small change in two files.

---

## Going live on sidehustles.nz

When you are ready, one DNS record for `sidehustles.nz` and `www` gets pointed
at the new site. Nothing else changes. Your email keeps working and
`learn.sidehustles.nz` is untouched, because neither of those is affected by
that single record.
