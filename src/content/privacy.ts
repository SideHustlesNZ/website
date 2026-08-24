/*
  Privacy Policy page text. Copied verbatim from "Privacy Policy.dc.html".
  This is Rachel's own wording. The design itself notes it is a plain-language
  summary and not legal advice, so it should be lawyer-checked before go-live.
*/

export const hero = {
  eyebrow: 'Legal',
  h1: ['Privacy ', 'policy.'],
  lead:
    'In plain English: what we collect, why we collect it, who else sees it, and how to get it back or deleted. Written to meet the New Zealand Privacy Act 2020.',
  updated: 'Last updated 17 August 2026',
};

export const intro =
  'Side Hustles NZ (“we”, “us”) runs this website, the members’ community and our events. We are an unregistered New Zealand business operating from Orakei Rd, Auckland. This policy explains how we handle personal information, and it applies to everyone who visits the site, joins the community or emails us.';

export const tocTitle = 'On this page';

export const tocNote =
  'This policy is a plain-language summary, not legal advice. Have a lawyer review it before you rely on it.';

export const contactBox = {
  title: 'Contact our privacy person',
  before: 'Email ',
  email: 'hello@sidehustles.nz',
  after:
    ' with “Privacy” in the subject line, or write to Side Hustles NZ, Orakei Rd, Auckland, New Zealand. We reply within one working day and answer requests for access or correction within 20 working days, as the Privacy Act requires.',
};

export const sections = [
  {
    id: 'collect',
    title: 'What we collect',
    paras: ['We only ask for what we need to run a membership. That is:'],
    items: [
      {
        label: 'Your details — ',
        body: 'name, email address and mobile number, given when you join, buy a ticket or message us.',
      },
      {
        label: 'Payment information — ',
        body: 'handled by Stripe. We never see or store your full card number; we keep a record of what you paid and when.',
      },
      {
        label: 'Community activity — ',
        body: 'your profile, posts and event attendance inside our Skool community and on Zoom calls.',
      },
      {
        label: 'Site usage — ',
        body: 'pages visited, device and browser type, and approximate location, collected through Google Analytics and the Meta pixel.',
      },
      {
        label: 'Marketing preferences — ',
        body: 'whether you opted in to emails, and whether you open them.',
      },
    ],
  },
  {
    id: 'why',
    title: 'Why we collect it',
    paras: [
      'To give you access to the community and events, to take payment and keep tax records, to answer your questions, to send you the emails you asked for, and to understand which parts of the site are useful. We do not sell your personal information to anyone, ever.',
    ],
  },
  {
    id: 'optional',
    title: 'Giving it is voluntary',
    paras: [
      'You do not have to give us anything. But without a name, email and payment we cannot set up a membership, and without an email we cannot reply to you.',
    ],
  },
  {
    id: 'who',
    title: 'Who else sees it',
    paras: [
      'We use trusted providers to run the business, and they only get what they need to do their job: Skool (community platform), Stripe (payments), Xero (accounting), Kit (email), Zoom (live calls), Google Analytics and Meta (website measurement and advertising).',
      'Most of these companies are based overseas, mainly in the United States, so your information is stored on servers outside New Zealand. Before using them we satisfied ourselves that they are subject to privacy safeguards comparable to those in the Privacy Act 2020. We may also disclose information where the law requires it.',
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies and tracking',
    paras: [
      'The site uses cookies to keep you logged in and to measure traffic, including cookies set by Google Analytics and the Meta pixel. You can block or delete cookies in your browser settings; some parts of the site may then not work properly.',
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing emails',
    paras: [
      'We only email marketing to people who opted in. Every email has an unsubscribe link, and one click is enough — you will still get essential emails about your account, payments and events.',
    ],
  },
  {
    id: 'security',
    title: 'How we keep it safe',
    paras: [
      'Accounts are protected by passwords and access is limited to the people who need it. No system is perfectly secure, but if a privacy breach happens that is likely to cause you serious harm we will tell you and notify the Office of the Privacy Commissioner, as the law requires.',
    ],
  },
  {
    id: 'retention',
    title: 'How long we keep it',
    paras: [
      'We keep financial records for seven years, as New Zealand tax law requires. Other personal information is deleted or anonymised once we no longer need it — usually within seven years of your membership ending, or sooner if you ask.',
    ],
  },
  {
    id: 'rights',
    title: 'Your right to see and correct it',
    paras: [
      'Under the Privacy Act 2020 you can ask us for a copy of the personal information we hold about you, and ask us to correct anything that is wrong. Email hello@sidehustles.nz and we will respond within 20 working days. There is no charge for a normal request.',
    ],
  },
  {
    id: 'age',
    title: 'Age',
    paras: [
      'Our community is intended for people aged 16 and over. If you are under 16, please do not sign up or send us your details. If we learn that we hold information about someone under 16 we will delete it.',
    ],
  },
  {
    id: 'complaints',
    title: 'If you are not happy',
    paras: [
      'Tell us first — email hello@sidehustles.nz and we will try to sort it out. If you are still not satisfied you can complain to the Office of the Privacy Commissioner at privacy.org.nz, or call 0800 803 909.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    paras: [
      'We may update this policy as the business changes. The current version always lives on this page with the date it took effect at the top. If a change materially affects how we use your information, we will let members know by email.',
    ],
  },
];
