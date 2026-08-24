/*
  Contact page text. Copied verbatim from the design file Contact.dc.html.

  The contact form is a real form. Static sites cannot process submissions
  themselves, so it needs a destination: either Rachel's email tool / form
  service endpoint, or a mailto fallback. Until she tells us which tool she
  uses, `formAction` stays empty and the form falls back to opening the
  visitor's email app addressed to her, so nobody's message is lost.
*/

export const hero = {
  h1: ['Get in ', 'touch.'],
  lead:
    'Questions about membership, events or your account. A real person replies within one working day.',
};

export const form = {
  title: 'Send us a message',
  // TODO (Rachel): paste the form endpoint from her email tool here.
  formAction: '',
  fields: {
    firstName: 'First name*',
    lastName: 'Last name*',
    email: 'Email*',
    mobile: 'Mobile',
    message: 'Your message*',
  },
  subjectLabel: "What's this about?*",
  subjects: [
    'Joining the community',
    'Billing or my subscription',
    'Refunds',
    'Events and meetups',
    'Partnerships or speaking',
    'Something else',
  ],
  submit: 'Send message',
  sent: 'Message sent ✓',
  orEmail: 'Or email',
};

export const channelsTitle = 'Other ways to reach us';

export const channels = [
  {
    icon: 'mail',
    title: 'Email us',
    href: 'mailto:hello@sidehustles.nz',
    body: 'hello@sidehustles.nz for anything at all, including refunds and billing.',
  },
  {
    icon: 'credit_card',
    title: 'Billing and account',
    href: 'https://www.skool.com/sidehustlesnz',
    body: 'Manage or cancel your plan yourself from your account, or ask us to do it.',
  },
  {
    icon: 'groups',
    title: 'Members',
    href: 'https://www.skool.com/sidehustlesnz',
    body: 'Already inside? Post in the community and a coach will pick it up on the next call.',
  },
  {
    icon: 'campaign',
    title: 'Partnerships and press',
    href: 'mailto:hello@sidehustles.nz',
    body: 'Speaking, sponsorship or media enquiries are welcome - use the form and pick Partnerships.',
  },
];

export const supportHours = {
  title: 'Support hours',
  body: 'Mon–Fri, 9am–5pm NZST. Messages sent over the weekend get answered Monday morning.',
};

export const faqSection = {
  eyebrow: 'FAQs',
  h2: ['Good ', 'questions.'],
  faqs: [
    {
      q: 'How fast will I hear back?',
      a: 'Within one working day, usually much sooner. Billing and account questions get picked up first.',
    },
    {
      q: 'Can I talk to someone before I join?',
      a: "Yes. Pick 'Joining the community' in the form and tell us where you are up to, and we will reply with a straight answer about whether the membership is the right fit for you right now.",
    },
    {
      q: 'How do I cancel my membership?',
      a: 'From your account, anytime, with no phone call and no exit interview. Monthly access runs to the end of the period you have paid for. If you cannot get into your account, message us and we will handle it.',
    },
    {
      q: 'Can I switch from monthly to annual?',
      a: "Yes, and we will credit your most recent monthly payment against the annual price. Send us a message with the subject 'Billing or my subscription' and we will set it up.",
    },
    {
      q: 'I paid but cannot log in. What now?',
      a: 'Check the inbox you paid with, including spam, for your welcome email. If it is not there, message us with the email address you used and we will resend your access straight away.',
    },
    {
      q: 'Do you refund event tickets?',
      a: 'Event tickets are non-refundable, but you can transfer your ticket to someone else up to 24 hours before the event. Just let us know their name and email.',
    },
  ],
};

export const refunds = {
  h2: 'Refund Policy',
  bodyBefore:
    'Due to the nature of the services provided, memberships, events and digital content are non-refundable. Annual memberships can be refunded in full within 14 days of purchase - just email ',
  email: 'hello@sidehustles.nz',
  bodyAfter: '.',
};
