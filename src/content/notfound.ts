/*
  404 page text.
  Shown when someone opens an address that does not exist on the site,
  usually an old link from before the 2026 rebuild.
  Change the wording here and the page updates.
*/

export const notfound = {
  title: 'Page not found — Side Hustles NZ',
  description: 'This page is not part of the new Side Hustles NZ site. Head back to the home page to find what you are after.',

  eyebrow: 'Error 404',
  heading: ['This page has ', 'moved'],
  body: 'We rebuilt the Side Hustles NZ website, and the page you were after is not part of the new site. Nothing is broken. It has either moved or it is no longer here.',

  cta: { label: 'Back to home', href: '/' },

  /* Small row of shortcuts under the button. Delete any line you do not want. */
  quickLinksLabel: 'Or jump straight to',
  quickLinks: [
    { label: 'Pricing', href: '/pricing/' },
    { label: 'Library', href: '/library/' },
    { label: 'Success stories', href: '/success-stories/' },
    { label: 'Contact', href: '/contact/' },
  ],
};
