/*
  Home page text (design: Home v2).
  Change wording here and the Home page updates. Words in a two-part array
  are split where the colour changes, e.g. ['Turn your ideas', 'into income'].
*/

export const meta = {
  title: 'Side Hustles NZ — Turn your ideas into income',
  description:
    'A community for New Zealanders turning an idea, a trade or a weekend gig into real income. Accountability, structure, weekly coaching and NZ templates for $197 a month.',
};

export const hero = {
  // Placeholder stock video (Pexels). Replace with owned footage before launch.
  video: 'https://videos.pexels.com/video-files/35315590/14962042_2560_1440_50fps.mp4',
  poster: 'https://images.pexels.com/videos/35315590/studio-35315590.jpeg?auto=compress&w=1600',
  eyebrow: 'For Kiwis building something on the side',
  h1: ['Turn your ideas', 'into income'],
  lead: 'A community for New Zealanders who are serious about turning an idea, a trade or a weekend gig into real income. Get the accountability and structure to actually finish what you start.',
  ctaLabel: 'Become a Member',
  ctaPrice: '$197/month',
  fine: 'Cancel anytime. No lock-in contract.',
  featuredLabel: 'As featured in',
  // Plain text names. Confirm permission before swapping these for logos.
  featured: ['Making Cents', 'One News', 'NZ Herald', 'One Breakfast', 'Stuff'],
};

export const problem = {
  h2: ['Stuck, stalled', 'or on your own?'],
  lead: 'If any of these sounds familiar, you are in the right place...',
  cards: [
    {
      icon: 'hourglass_empty',
      title: "You've had the idea for years and it's still just an idea",
      body: "Every month you tell yourself this is the one you start. The Kiwis earning on the side aren't more talented than you - they just stopped waiting. This is where you finally make the first move.",
    },
    {
      icon: 'sell',
      title: "You're making a bit on the side, but it's not adding up",
      body: "A few sales here, a client there, nothing you can count on. You're not sure whether to fix your pricing, your offer or your marketing first. We help you find the one thing to change next.",
    },
    {
      icon: 'person_off',
      title: "You're doing it alone, after hours, and running out of steam",
      body: 'The day job takes the best of your energy and nobody notices when the side hustle slips. A room of people building the same thing keeps you moving when motivation runs out.',
    },
  ],
};

export const how = {
  eyebrow: 'How the membership works',
  h2: ['Three steps to ', 'paid.'],
  lead: 'Built for evenings and weekends - small pockets of time, structured so progress compounds instead of stalling.',
  steps: [
    { num: '01', title: 'Join in minutes.', body: "Set up your profile, tell us what you're building, and unlock the library, calls and community instantly." },
    { num: '02', title: 'Build your offer.', body: 'Follow the membership framework to shape, price and pressure-test one offer, with feedback from coaches and members.' },
    { num: '03', title: 'Get paid, then repeat.', body: 'Launch to real people, make the sale, then systemise it so month two is easier than month one.' },
  ],
};

export const included = {
  h2: ['Everything included,', 'from day one'],
  lead: 'One membership. No tiers, no upsells, no $2,000 "mastermind" waiting behind the door.',
  cards: [
    {
      icon: 'forum', kicker: 'Community', title: 'The private community',
      body: 'The core of the membership - a space where you can ask anything and get a real answer the same day.',
      points: ['Ask-anything feed, no algorithm', 'Searchable archive of every question already answered', 'Member directory for collaborators and first customers'],
    },
    {
      icon: 'folder_copy', kicker: 'Templates', title: 'Done-for-you templates',
      body: 'Never start from a blank page again. Fill in the gaps, hit send, and spend your evenings selling instead of formatting.',
      points: ['Ready-to-use pricing calculators, budgets & GST trackers', 'Professional templates for quotes, invoices & contracts', 'Copy-and-paste scripts for emails, social media & suppliers'],
    },
    {
      icon: 'menu_book', kicker: 'Training', title: 'Step-by-step training',
      body: 'Short, practical modules you can finish in an evening, each one built to get you a single result.',
      points: ['Idea to first sale pathway', 'NZ tax, GST and admin basics, minus the jargon', 'New lessons added based on what members ask for'],
    },
    {
      icon: 'groups', kicker: 'Events', title: 'Events, online and in person',
      body: 'Monthly meetups in the main centres and live online sessions you can join from the couch.',
      points: ['In-person meetups and socials', 'Monthly workshops on one skill', 'Guest sessions with NZ operators'],
    },
    {
      icon: 'record_voice_over', kicker: 'Expert access', title: 'Coaching and expert access',
      body: "Get your offer, pricing or marketing pulled apart by people who've done it here, not overseas.",
      points: ['Live coaching calls with Q&A', 'Offer clinics and teardowns', 'Guest experts: accounting, legal, marketing'],
    },
  ],
  navyCard: {
    kicker: 'All of it, one price',
    title: 'No tiers. No upsells.',
    body: 'Everything on this page is included the moment you join, for $197 a month. Cancel anytime.',
    cta: 'Join the community →',
  },
};

export const curriculum = {
  eyebrow: 'The curriculum',
  h2: ['What you learn, ', 'what you get.'],
  lead: 'The practical skills that turn an idea into steady income on the side, taught for New Zealand rules and the NZ market.',
  rows: [
    { title: 'Picking and validating an idea', body: 'Test demand before you spend money, and know when to drop an idea.', outcome: 'A tested idea in your first month' },
    { title: 'Pricing your offer', body: 'Set prices that cover your time, and raise them without losing customers.', outcome: 'A price that covers your time' },
    { title: 'Landing your first customers', body: 'Find buyers through your own network, local groups and simple outreach.', outcome: 'Your first paying customers' },
    { title: 'Marketing on a small budget', body: 'Content, referrals and social channels that work in a few hours a week.', outcome: 'Steady enquiries in a few hours a week' },
    { title: 'Tax, GST and the boring bits', body: 'IRD obligations, when to register for GST, and simple bookkeeping.', outcome: 'No surprises from IRD' },
    { title: 'Systems that save your evenings', body: 'Tools and routines so the side hustle fits around your day job.', outcome: 'Income that fits around your day job' },
  ],
};

export const pricing = {
  h2: ['Get instant ', 'access.'],
  lead: 'One membership. Full access from day one.',
  // Set to false to hide the Annual card on the Home page.
  showAnnual: true,
};

export const faqSection = {
  eyebrow: 'Common questions',
  h2: 'FAQs.',
  podcastLead: 'Not ready yet?',
  podcastLink: 'Listen to the free podcast →', // goes to the Library page for now
  faqs: [
    { q: "Is this for me if I haven't started yet?", a: "Yes. The membership isn't gated by revenue. Week one is about picking one idea and shaping it into something sellable, and most members are testing an offer inside their first month." },
    { q: 'How much time do I need each week?', a: 'Three to five focused hours. Everything is structured around evenings and weekends, and every live session is recorded.' },
    { q: "What's the difference between the free group and the membership?", a: 'The free group is 55,000 Kiwis swapping ideas. The membership is the paid room: frameworks, weekly coaching, templates and direct feedback on your offer.' },
    { q: "What if I can't make the live sessions?", a: 'Every coaching call and clinic is recorded and added to the library within 24 hours, with the key takeaways written up.' },
    { q: 'Can I cancel?', a: "Anytime, in two clicks from your account. No lock-in contract, and you keep access until the end of the month you've paid for." },
  ],
};

export const story = {
  photoAlt: 'Rachel Mills, founder of Side Hustles NZ',
  eyebrow: 'Our story',
  h2: ['A community for', 'the after-hours.'],
  paragraphs: [
    'Side Hustles NZ began with one question posted to a handful of people: how do you start something on the side without quitting your job first? The answers turned into a community of 55,000.',
    "So I made the membership deliberately local. GST, IRD, five million customers and a culture that doesn't like talking about money - because advice only works if it fits the country you are actually selling in.",
  ],
  name: 'Rachel Mills',
  role: 'Founder',
};

export const finalCta = {
  eyebrow: 'Last thing',
  h2: ["A year from now you'll", 'wish you\'d ', 'started today.'],
  lead: "The idea you keep thinking about doesn't need another year of research. It needs a room of Kiwis who expect you at the next call - and who'll tell you the truth about your offer.",
  cta: 'Join the community · $197/month',
  fine: 'Cancel anytime in two clicks. No lock-in contract.',
};
