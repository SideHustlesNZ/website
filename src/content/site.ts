/*
  Site-wide text and links.
  Change wording or a URL here and it updates on every page.
*/

export const site = {
  name: 'Side Hustles NZ',
  wordmark: 'side hustles nz',
  blurb: 'Helping Kiwis build income beyond the day job: one offer, one sale, one system at a time.',
  copyright: '© 2026 Side Hustles NZ. All rights reserved.',
  email: 'hello@sidehustles.nz',
  gaId: 'G-5JNEDQJWWZ',
};

/* External destinations. These are the only two off-site places the site sends people. */
export const links = {
  checkout: 'https://shop.sidehustles.nz/shnz-insider', // hosted checkout, opens in a new tab
  skool: 'https://www.skool.com/sidehustlesnz',         // members sign in / manage plan
  linkedin: 'https://www.linkedin.com/in/rachel-mills-nz/',
  facebook: 'https://www.facebook.com/SideHustlesNZ',
};

/* Page URLs, in one place. */
export const routes = {
  home: '/',
  pricing: '/pricing/',
  stories: '/success-stories/',
  library: '/library/',
  about: '/about/',
  contact: '/contact/',
  privacy: '/privacy-policy/',
};

/*
  Header navigation, per page, exactly as the design files have it.
  `current` puts the active styling on that link.
*/
type NavItem = { label: string; href: string; current?: boolean };

const nav = {
  home: [
    { label: 'About us', href: '#included' },
    { label: 'Library', href: routes.library },
    { label: 'Success stories', href: routes.stories },
    { label: 'Pricing', href: '#pricing' },
  ],
  pricing: [
    { label: 'About us', href: '/#included' },
    { label: 'Library', href: routes.library },
    { label: 'Success stories', href: routes.stories },
    { label: 'Pricing', href: routes.pricing, current: true },
  ],
  library: [
    { label: 'About us', href: '/#included' },
    { label: 'Library', href: routes.library, current: true },
    { label: 'Success stories', href: routes.stories },
    { label: 'Pricing', href: '/#pricing' },
  ],
  stories: [
    { label: 'About us', href: '/#included' },
    { label: 'Library', href: routes.library },
    { label: 'Success stories', href: routes.stories, current: true },
    { label: 'Pricing', href: routes.pricing },
  ],
  about: [
    { label: 'About us', href: routes.about, current: true },
    { label: 'Library', href: routes.library },
    { label: 'Success stories', href: routes.stories },
    { label: 'Pricing', href: routes.pricing },
  ],
  contact: [
    { label: 'About us', href: '/#included' },
    { label: 'Library', href: routes.library },
    { label: 'Success stories', href: routes.stories },
    { label: 'Pricing', href: routes.pricing },
    { label: 'Contact', href: routes.contact, current: true },
  ],
  privacy: [
    { label: 'About us', href: routes.about },
    { label: 'Library', href: routes.library },
    { label: 'Success stories', href: routes.stories },
    { label: 'Pricing', href: routes.pricing },
    { label: 'Contact', href: routes.contact },
  ],
  /* 404 page: full nav, nothing marked as the current page. */
  notfound: [
    { label: 'About us', href: routes.about },
    { label: 'Library', href: routes.library },
    { label: 'Success stories', href: routes.stories },
    { label: 'Pricing', href: routes.pricing },
    { label: 'Contact', href: routes.contact },
  ],
} satisfies Record<string, NavItem[]>;

export type NavKey = keyof typeof nav;
export { nav };
export type { NavItem };

/* Where the header's "Join the community" button points, per page (from the design). */
export const headerCta: Record<NavKey, string> = {
  home: '#pricing',
  pricing: '#plans',
  library: '/#pricing',
  stories: routes.pricing + '#plans',
  about: routes.pricing,
  contact: routes.pricing + '#plans',
  privacy: routes.pricing + '#plans',
  notfound: routes.pricing + '#plans',
};

/* Footer link columns. */
export const footerCols = [
  {
    title: 'Explore',
    links: [
      { label: 'Library', href: routes.library },
      { label: 'Success stories', href: routes.stories },
      { label: 'Podcast', href: '/#library' },
    ],
  },
  {
    title: 'Membership',
    links: [
      { label: 'Join the community', href: routes.pricing + '#plans' },
      { label: 'Sign in', href: links.skool },
      { label: 'Manage plan', href: links.skool },
    ],
  },
  {
    title: 'Community',
    links: [{ label: 'About us', href: routes.about }],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact', href: routes.contact },
      { label: 'Refunds', href: routes.contact + '#refunds' },
      { label: 'FAQs', href: routes.pricing + '#faqs' },
    ],
  },
];

/* Subscribe modal (bell icon in the header). */
export const subscribe = {
  title: 'Subscribe',
  body: 'Stay updated with our latest events and community news.',
  label: 'Email Address',
  placeholder: 'you@example.com',
  button: 'Subscribe',
  done: 'You are on the list. Check your inbox for a confirmation email.',
  error: 'Please enter a valid email address.',
};
