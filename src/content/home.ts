/*
  Home page text. Copied verbatim from the design file Home.dc.html.
  NOTE ON PRICE: Rachel confirmed (18 Aug 2026) all prices are GST INCLUSIVE —
  $197/month, $149/month annual billed at $1,788 (save $576). The Pricing page
  now matches. Never "+ GST" anywhere.
*/

export const hero = {
  eyebrow: 'For Kiwis building something on the side',
  h1: ['Stop planning', 'your side hustle.', 'Start running it.'], // last line is lime
  lead:
    'A community for New Zealanders who are serious about turning an idea, a trade or a weekend gig into real income, with the people, accountability and structure to actually finish what you start.',
  ctaLabel: 'Join the community',
  price: '$197/month',
  finePrint: 'Cancel anytime. No lock-in contract.',
  videoNote: 'Hero video: members at a meetup',
};

export const problem = {
  h2: ["You're not short", 'on information.'],
  lead:
    "You've saved the videos. You've bought the course. You've asked ChatGPT. And the business still isn't off the ground - because the thing missing was never more information.",
  closer:
    "Execution, clarity and support are the gap. That's exactly what a room full of people doing the same thing gives you.",
  cards: [
    {
      icon: 'psychology_alt',
      title: 'Too many ideas, no decision',
      body: "You've had four ideas this year and started none of them properly. Choosing is harder than working.",
    },
    {
      icon: 'hourglass_empty',
      title: 'The day job eats the week',
      body: 'You mean to work on it Sunday. Sunday turns into admin, family and being tired.',
    },
    {
      icon: 'sell',
      title: 'No idea what to charge',
      body: "So you undercharge, resent the work, and quietly decide the whole thing isn't worth it.",
    },
    {
      icon: 'person_off',
      title: "Nobody's waiting on you",
      body: "No boss, no team, no deadline. The one thing that keeps most people moving simply isn't there.",
    },
    {
      icon: 'sentiment_dissatisfied',
      title: "Advice that isn't for here",
      body: 'American funnels, US tax, US platforms. Nothing about GST, IRD or a five-million-person market.',
    },
    {
      icon: 'visibility_off',
      title: 'No honest feedback',
      body: "Friends and family are polite. You need someone who'll tell you the offer isn't landing, and why.",
    },
  ],
};

export const transformation = {
  h2: ['Six months from now,', 'this is normal.'],
  cards: [
    {
      title: 'You know exactly what you sell',
      body: 'One clear offer, priced with confidence, that you can explain in a sentence at a barbecue.',
    },
    {
      title: "Money arrives that isn't your salary",
      body: 'Invoices and orders coming in on a predictable rhythm, not the odd lucky month.',
    },
    {
      title: 'Your week has a shape',
      body: "You know what you're working on Tuesday night and why it matters, instead of drifting.",
    },
    {
      title: "You've got people in your corner",
      body: 'A group chat of Kiwis who know your business, celebrate the wins and ask about the numbers.',
    },
    {
      title: "Objections don't stop you",
      body: 'Pricing pushback, quiet months and awkward sales conversations become things you handle, not walls.',
    },
    {
      title: 'The day job becomes a choice',
      body: "Whether you leave it or not, you're there because you want to be, not because you have to be.",
    },
  ],
};

export const included = {
  h2: ['Everything included,', 'from day one'],
  lead: 'One membership. No tiers, no upsells, no $2,000 "mastermind" waiting behind the door.',
  cards: [
    {
      icon: 'forum',
      kicker: 'Community',
      title: 'The private community',
      body: 'The core of the membership - a space where you can ask anything and get a real answer the same day.',
      points: [
        'Ask-anything feed, no algorithm',
        'Searchable archive of every question already answered',
        'Member directory for collaborators and first customers',
      ],
    },
    {
      icon: 'check_circle',
      kicker: 'Accountability',
      title: 'Support that keeps you moving',
      body: 'The bit no course gives you: people who expect to see progress from you every week.',
      points: ['Weekly goal check-ins', 'Small accountability pods', '90-day focus sprints'],
    },
    {
      icon: 'menu_book',
      kicker: 'Training',
      title: 'Training and resources',
      body: 'Short, practical modules built around one outcome each, plus the paperwork already done for you.',
      points: [
        'Idea to first sale pathway',
        'NZ-ready contracts, invoices and pricing calculators',
        'Growing library of member-requested lessons',
      ],
    },
    {
      icon: 'groups',
      kicker: 'Events',
      title: 'Events, online and in person',
      body: 'Monthly meetups in the main centres and live online sessions you can join from the couch.',
      points: [
        'In-person meetups and socials',
        'Monthly workshops on one skill',
        'Guest sessions with NZ operators',
      ],
    },
    {
      icon: 'record_voice_over',
      kicker: 'Expert access',
      title: 'Coaching and expert access',
      body: "Get your offer, pricing or marketing pulled apart by people who've done it here, not overseas.",
      points: [
        'Live coaching calls with Q&A',
        'Offer clinics and teardowns',
        'Guest experts: accounting, legal, marketing',
      ],
    },
  ],
  navyCard: {
    icon: 'bolt',
    kicker: 'All of it, one price',
    title: 'No tiers. No upsells.',
    body: 'Everything on this page is included the moment you join, for $197 a month. Cancel anytime.',
    cta: 'Join the community →',
  },
};

export const how = {
  eyebrow: 'How the membership works',
  h2: ['Three steps to ', 'paid.'],
  lead:
    'Built for evenings and weekends - small pockets of time, structured so progress compounds instead of stalling.',
  steps: [
    {
      num: '01',
      title: 'Join in minutes.',
      body: "Set up your profile, tell us what you're building, and unlock the library, calls and community instantly.",
    },
    {
      num: '02',
      title: 'Build your offer.',
      body: 'Follow the membership framework to shape, price and pressure-test one offer, with feedback from coaches and members.',
    },
    {
      num: '03',
      title: 'Get paid, then repeat.',
      body: 'Launch to real people, make the sale, then systemise it so month two is easier than month one.',
    },
  ],
};

export const scale = {
  h2: ['55,000 Kiwis,', 'already here.'],
  lead:
    "Side Hustles NZ started as a free space for New Zealanders building something on the side, and it's grown to 55,000 of them: tradies, designers, bakers, bookkeepers and people still deciding. The membership is the paid room inside that community, where the work actually gets done.",
};

/* showAnnual toggles the annual card in the Home pricing section. */
export const showAnnual = true;

export const pricing = {
  h2: ['Join the ', 'community.'],
  lead: 'One membership. Full access from day one.',
  monthly: {
    label: 'Monthly',
    badge: 'Most popular',
    price: '$197',
    per: '/month',
    fine: 'NZD, GST inclusive. Cancel anytime.',
    cta: 'Join the community →',
  },
  annual: {
    label: 'Annual',
    save: 'Save $576',
    price: '$149',
    per: '/month',
    fine: 'Billed annually at $1,788.',
    cta: 'Join annual',
  },
  includedTitle: "What's included",
  included: [
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
  ],
};

export const coaches = {
  eyebrow: 'Who you learn from',
  h2: ["Kiwis who've already ", 'done it.'],
  // Names are still placeholders in Rachel's design.
  people: [
    { name: 'Coach name', biz: 'Ecommerce · Auckland' },
    { name: 'Coach name', biz: 'Freelance to agency · Wellington' },
    { name: 'Coach name', biz: 'Trades · Hamilton' },
    { name: 'Coach name', biz: 'Digital products · Christchurch' },
    { name: 'Coach name', biz: 'Tax and IRD · Tauranga' },
  ],
};

export const quotesSection = {
  eyebrow: 'What members say',
  h2: ['Real Kiwis. ', 'Real money.'],
  quotes: [
    {
      initials: 'TM',
      quote: 'Made my first $1,000 in 5 weeks selling something I already knew how to do.',
      who: 'Tia M · Hamilton',
    },
    {
      initials: 'JR',
      quote: 'The offer clinic alone was worth the year. I stopped guessing at pricing.',
      who: 'James R · Wellington',
    },
    {
      initials: 'AL',
      quote: "Went from 'someday' to invoicing real clients while keeping my 9-5.",
      who: 'Aroha L · Tauranga',
    },
    { initials: 'SK', quote: '$4.2k months on the side, built entirely in evenings.', who: 'Sam K · Christchurch' },
    {
      initials: 'PN',
      quote: 'Best money I spend each month. The accountability is the whole thing.',
      who: 'Priya N · Auckland',
    },
    {
      initials: 'DW',
      quote: 'Finally a NZ community that gets GST, IRD and small-market reality.',
      who: 'Dan W · Dunedin',
    },
  ],
};

export const triptych = ['Meetup photo', 'Member at work', 'Event night'];

export const story = {
  eyebrow: 'Our story',
  h2: ['A community for', 'the after-hours.'],
  paragraphs: [
    'Side Hustles NZ began with one question posted to a handful of people: how do you start something on the side without quitting your job first? The answers turned into a community of 55,000.',
    'What I kept seeing was Kiwis who had read everything and started nothing. Knowledge was never the missing piece. What was missing was a room where the next step is obvious and someone notices when you skip it.',
    "So I made the membership deliberately local. GST, IRD, five million customers and a culture that doesn't like talking about money - because advice only works if it fits the country you are actually selling in.",
  ],
  founders: [{ name: 'Rachel Mills', role: 'Founder' }],
};

export const faqSection = {
  eyebrow: 'Common questions',
  h2: 'FAQs.',
  faqs: [
    {
      q: "Is this for me if I haven't started yet?",
      a: "Yes. The membership isn't gated by revenue. Week one is about picking one idea and shaping it into something sellable, and most members are testing an offer inside their first month.",
    },
    {
      q: 'How much time do I need each week?',
      a: 'Three to five focused hours. Everything is structured around evenings and weekends, and every live session is recorded.',
    },
    {
      q: "What's the difference between the free group and the membership?",
      a: 'The free group is 55,000 Kiwis swapping ideas. The membership is the paid room: frameworks, weekly coaching, templates and direct feedback on your offer.',
    },
    {
      q: "What if I can't make the live sessions?",
      a: 'Every coaching call and clinic is recorded and added to the library within 24 hours, with the key takeaways written up.',
    },
    {
      q: 'Can I cancel?',
      a: "Anytime, in two clicks from your account. No lock-in contract, and you keep access until the end of the month you've paid for.",
    },
  ],
};

export const podcast = {
  h2: ['Learn from New Zealand', 'business owners'],
  lead:
    'Every fortnight we sit down with a Kiwi who has built real income on the side. How they started, what it earns, and what they would do differently. Free to listen, wherever you get your podcasts.',
  // Guest names are still placeholders in Rachel's design.
  guests: [
    { name: 'Guest name', biz: 'Ep 6 · Ecommerce' },
    { name: 'Guest name', biz: 'Ep 5 · Freelance to agency' },
    { name: 'Guest name', biz: 'Ep 4 · Trades side hustle' },
    { name: 'Guest name', biz: 'Ep 3 · Digital products' },
    { name: 'Guest name', biz: 'Ep 2 · Tax and IRD' },
    { name: 'Guest name', biz: 'Ep 1 · Etsy seller' },
  ],
  stats: [
    { big: 'Weekly', small: 'New episode every Thursday' },
    { big: 'Season one', small: 'Just launched, early episodes out now' },
    { big: 'Free', small: 'Apple, Spotify and YouTube' },
  ],
  listenCta: 'Listen to the latest episode',
  // TODO (Rachel): podcast URL. Left blank so the button is not a dead link.
  listenHref: '',
  // TODO (Rachel): confirm permission to display these mastheads before go-live.
  pressLogos: ['Making Cents', 'One News', 'NZ Herald', 'One Breakfast', 'Stuff'],
};

export const finalCta = {
  eyebrow: 'Last thing',
  h2: ["A year from now you'll", "wish you'd ", 'started today.'],
  lead:
    "The idea you keep thinking about doesn't need another year of research. It needs a room of Kiwis who expect you at the next call - and who'll tell you the truth about your offer.",
  pill: 'Join the community · $197/month',
  fine: 'Cancel anytime in two clicks. No lock-in contract.',
};
