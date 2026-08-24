/*
  Pricing page text. Copied verbatim from the design file Pricing.dc.html,
  except prices: Rachel confirmed (18 Aug 2026) all prices are GST INCLUSIVE —
  $197/month, $149/month annual billed at $1,788 (save $576). Never "+ GST".
  This matches the Home page.
*/

export const hero = {
  h1: ['Join the ', 'crew.'],
  lead: 'One membership. Full access from day one.',
};

export const annual = {
  label: 'Annual',
  save: 'Save $576',
  badge: 'Limited offer',
  wasPrice: '$2,364/year',
  price: '$149',
  per: 'month*',
  fine: 'Billed annually at $1,788, GST inclusive.',
  cta: 'Join annual',
};

export const monthly = {
  label: 'Monthly',
  tag: 'Flexible',
  price: '$197',
  per: 'month',
  fine: 'GST inclusive. No commitment, cancel anytime.',
  cta: 'Start monthly',
};

export const includedTitle = "What's included";

export const includedFootnote =
  '*Annual offer price held for your first year, then renews at the standard annual rate.';

export const included = [
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

export const faqSection = {
  eyebrow: 'FAQs',
  h2: ['Good ', 'questions.'],
  ctaLabel: 'Still deciding? Talk to us first',
  faqs: [
    {
      q: 'What exactly do I get for $197 a month?',
      a: 'The lot: the SHNZ Framework, weekly live coaching, the template vault, the full masterclass library and members-only events online and in person. There is one membership and one price - no tiers, no upsells, no $2,000 mastermind behind the door.',
    },
    {
      q: "I'm still working full time - is this too much?",
      a: 'It is built for evenings and weekends. Each step in the framework is one action you can finish in a sitting, coaching calls are recorded, and most members put in two or three hours a week.',
    },
    {
      q: "I don't have a business idea yet. Should I wait?",
      a: 'No. The first part of the framework is choosing an idea you can actually sell in New Zealand, and the coaching calls are where most members pressure-test theirs before spending a dollar.',
    },
    {
      q: 'Is this New Zealand specific?',
      a: 'Yes. Pricing, GST, IRD, contracts and invoices are all written for how business works here, and the coaches and guests have built businesses in this market - not recycled US advice.',
    },
    {
      q: 'Monthly or annual - which should I pick?',
      a: 'Annual is $149 a month billed once at $1,788 and saves you $576 over the year. Monthly is $197 with no commitment. Both prices are GST inclusive. Start monthly if you want to try it, and we will credit your first month if you switch to annual.',
    },
    {
      q: 'How do I get in after I pay?',
      a: 'Your login arrives by email within a minute. The framework, vault and community open immediately, and you will get the invite to the next weekly coaching call the same day.',
    },
    {
      q: 'Can I cancel?',
      a: 'Anytime, from your account, no phone call and no exit interview. Monthly access runs to the end of your paid period. Annual members are covered by a 14-day full refund if it is not what you expected.',
    },
  ],
};
