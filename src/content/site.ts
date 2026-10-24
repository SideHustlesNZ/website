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

/* External destinations. */
export const links = {
  // Membership checkout. Every "Join" button on the site goes here, in a new tab.
  // NOTE: the annual buttons use this too, because there is no separate annual link yet.
  checkout: 'https://community.sidehustles.nz/checkout/membership',
  // Members' community (Circle): log in, sign in, manage plan.
  community: 'https://community.sidehustles.nz/',
  facebookGroup: 'https://www.facebook.com/groups/sidehustlesnz',
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
  blog: '/blog/',
  privacy: '/privacy-policy/',
  terms: '/terms/',
};

/* Header navigation. The same three links on every page; the current page is bold. */
export type NavKey =
  | 'home' | 'pricing' | 'library' | 'stories' | 'about' | 'contact' | 'blog' | 'privacy' | 'notfound';

export const navItems: { label: string; href: string; key: NavKey }[] = [
  { label: 'About us', href: routes.about, key: 'about' },
  { label: 'Library', href: routes.library, key: 'library' },
  { label: 'Pricing', href: routes.pricing, key: 'pricing' },
];

export const header = {
  login: 'Log in',
  cta: 'Join the community',
};

/* Footer link columns. `external: true` opens in a new tab. */
export const footerCols = [
  {
    title: 'Explore',
    links: [{ label: 'Library', href: routes.library }],
  },
  {
    title: 'Membership',
    links: [
      { label: 'Join the community', href: links.checkout, external: true },
      { label: 'Sign in', href: links.community },
      { label: 'Manage plan', href: links.community },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'About us', href: routes.about },
      { label: 'Blog', href: routes.blog },
      { label: 'Facebook community', href: links.facebookGroup, external: true },
    ],
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

export const footerLegal = [
  { label: 'Terms of Service', href: routes.terms },
  { label: 'Privacy Policy', href: routes.privacy },
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

/* The "55,000 Kiwis" community block used on Home, Pricing and About. */
export const community = {
  h2: ['55,000 Kiwis,', 'already here.'],
  lead: "Side Hustles NZ started as a free space for New Zealanders building something on the side, and it's grown to 55,000 of them: tradies, designers, bakers, bookkeepers and people still deciding. The membership is the paid room inside that community, where the work actually gets done.",
  // Placeholder member photos (Unsplash). Swap these for real member photos before launch.
  faces: [
    '1699431392174-3ac3af29b133', '1531734510209-2da4a139a53a', '1607487768473-cbe887eb0a3d',
    '1739537896959-bb43c32d4a1a', '1582828835690-22a88e8dd257', '1668104217784-cdf6a6e40735',
    '1719154717467-ade7e0b4175b', '1699431391629-3c16ec42b847', '1702003482403-747679ae6091',
    '1638041025066-c9eadd5d9df6', '1609028808972-b5d32ef3cc0b',
  ].map((id) => `https://images.unsplash.com/photo-${id}?w=200&h=200&fit=crop&crop=faces&q=70&auto=format`),
};

/* "What's included" list, shared by the Home and Pricing pricing blocks. */
export const membershipIncluded = [
  {
    icon: 'route',
    title: 'The SHNZ Framework',
    body: 'A step-by-step path from raw idea to first paid customer, broken into weekly actions you can finish in an evening. No theory modules, no busywork - just the next right thing to do.',
  },
  {
    icon: 'record_voice_over',
    title: 'Weekly live coaching',
    body: "Every week you can bring your offer, your pricing or whatever has you stuck, and leave the call with a clear answer and a decision made. Recorded if you can't make it live.",
  },
  {
    icon: 'folder_copy',
    title: 'Template vault',
    body: 'Pricing calculators, sales scripts, proposals, invoices and contracts - written for New Zealand, GST included and ready to send. Fill in your details and use them today.',
  },
  {
    icon: 'rate_review',
    title: 'Masterclasses',
    body: 'Sit in with leading New Zealand business owners as they walk through exactly how they built it. Real numbers, real mistakes, and time at the end for your questions.',
  },
  {
    icon: 'event',
    title: 'Members-only events',
    body: 'Monthly online sessions on one practical topic, plus in-person meetups in Auckland, Wellington and Christchurch where the conversation carries on after the talk finishes.',
  },
];

/* Plan cards, shared by Home and Pricing. Prices are GST inclusive. */
export const plans = {
  includedTitle: "What's included",
  footnote: '*Annual offer price held for your first year, then renews at the standard annual rate.',
  monthly: {
    label: 'Monthly',
    popular: 'Most popular',
    tag: 'Flexible',
    price: '$197',
    per: 'month',
    fine: 'GST inclusive. No commitment, cancel anytime.',
    cta: 'Start monthly',
  },
  annual: {
    label: 'Annual',
    save: 'Save $576',
    badge: 'Limited offer',
    wasPrice: '$2,364/year',
    price: '$149',
    per: 'month*',
    fine: 'Billed annually at $1,788, GST inclusive.',
    cta: 'Join annual',
  },
};
