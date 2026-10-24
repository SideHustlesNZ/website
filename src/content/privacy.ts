/*
  Privacy Policy text (design: Privacy Policy.dc.html).
  The design notes this is a plain-language summary, not legal advice:
  have a lawyer review it before launch.

  Each section has `paras` (paragraphs), then optional `items` (bullets), then
  optional `after` (more paragraphs). A `label` is shown in bold before `body`.

  OPEN ITEM: sections 7 and 8 mention the Meta Pixel, but the site only runs
  Google Analytics. Either add the pixel or remove those lines.
*/
import type { LegalSection } from './legal';

export const hero = {
  eyebrow: 'Legal',
  h1: ['Privacy ', 'policy.'],
  lead: 'In plain English: what we collect, why we collect it, who else sees it, and how to get it back or deleted. Written to meet the New Zealand Privacy Act 2020.',
  updated: 'Last updated 21 October 2026',
};

export const toc = {
  title: 'On this page',
  note: 'This policy is a plain-language summary, not legal advice. Have a lawyer review it before you rely on it.',
};

export const contactBox = {
  title: 'Contact our Privacy Officer',
  before: 'Rachel Mills, Privacy Officer, Side Hustles NZ, Auckland, New Zealand. Email ',
  email: 'hello@sidehustles.nz',
  middle: '. We respond to requests within 20 working days, free of charge. Read this policy alongside our ',
  linkLabel: 'terms of service',
  after: '.',
};

export const sections: LegalSection[] = [
  {
    "id": "who",
    "title": "Who we are and what this policy covers",
    "paras": [
      {
        "label": "",
        "body": "Side Hustles NZ (“SHNZ”, “we”, “us”) is run by Rachel Mills in Auckland, New Zealand. We take your privacy seriously and handle personal information in line with the Privacy Act 2020."
      },
      {
        "label": "",
        "body": "This policy covers personal information we collect through:"
      }
    ],
    "items": [
      {
        "label": "",
        "body": "our website, sidehustles.nz, and its subdomains;"
      },
      {
        "label": "",
        "body": "our online community and the SHNZ Membership, hosted on Circle at community.sidehustles.nz;"
      },
      {
        "label": "",
        "body": "payments for memberships and services, processed by Stripe;"
      },
      {
        "label": "",
        "body": "our email newsletters, events, and 1:1 advisory services; and"
      },
      {
        "label": "",
        "body": "our free Side Hustles NZ Facebook group, to the extent we as admins see or collect your information."
      }
    ],
    "after": [
      {
        "label": "",
        "body": "By using our website or joining our community, you acknowledge this policy. If you don’t agree with it, please don’t provide us with your personal information."
      },
      {
        "label": "",
        "body": "This policy should be read with our Terms of Service. Our paid services are for people aged 18 and over, and we don’t knowingly collect personal information from children."
      }
    ]
  },
  {
    "id": "collect",
    "title": "What personal information we collect",
    "paras": [
      {
        "label": "",
        "body": "We only collect what we need to run our community, deliver our services, and communicate with you."
      }
    ],
    "items": [
      {
        "label": "Contact details — ",
        "body": "name, email address, phone number (if given), region."
      },
      {
        "label": "Account and profile — ",
        "body": "Circle username, profile photo, bio, business name, industry, links you add."
      },
      {
        "label": "Membership and billing — ",
        "body": "plan, start and renewal dates, payment status, invoices, billing address. We do not see or store your full card details."
      },
      {
        "label": "Community content — ",
        "body": "posts, comments, messages, event RSVPs, and course progress inside Circle."
      },
      {
        "label": "Business information — ",
        "body": "details you share about your business, stage, revenue goals, or challenges, including in advisory sessions and surveys."
      },
      {
        "label": "Technical data — ",
        "body": "IP address, browser and device type, pages visited, referring site, and cookie data."
      },
      {
        "label": "Communications — ",
        "body": "emails, support requests, and feedback you send us, and whether you open or click our emails."
      }
    ],
    "after": [
      {
        "label": "",
        "body": "Please don’t share sensitive information (such as health details) in community spaces. If you choose to share it with us privately, we’ll only use it for the reason you shared it."
      }
    ]
  },
  {
    "id": "how",
    "title": "How we collect it",
    "paras": [
      {
        "label": "Directly from you — ",
        "body": "when you sign up for our newsletter, join or pay for a membership, fill in a form or survey, book an advisory session, post in the community, or contact us."
      },
      {
        "label": "Automatically — ",
        "body": "through cookies and similar technology when you use our website or Circle community (see section 8)."
      },
      {
        "label": "From third parties (indirect collection) — ",
        "body": "we also receive some information about you from others. Under information privacy principle 3A, here is what that includes and why:"
      }
    ],
    "items": [
      {
        "label": "Stripe ",
        "body": "tells us whether a payment succeeded, failed, or was refunded, and your billing details, so we can manage your membership."
      },
      {
        "label": "Circle ",
        "body": "gives us information about your account and activity in the community, so we can run and improve it."
      },
      {
        "label": "Facebook (Meta) ",
        "body": "shows us the answers you give to our group membership questions, so we can approve members. One question optionally asks for your email address; if you give it, we add you to our email list."
      },
      {
        "label": "Event or partner organisations ",
        "body": "may pass on your details when you register for something we run together. They’ll tell you this at the time."
      },
      {
        "label": "Other members ",
        "body": "may mention you or refer you to us."
      }
    ],
    "after": [
      {
        "label": "",
        "body": "We use this information only for the purposes in section 4 and share it only as described in section 7. Collecting it isn’t required by any law."
      }
    ]
  },
  {
    "id": "use",
    "title": "How we use it",
    "paras": [
      {
        "label": "",
        "body": "We use your personal information to:"
      }
    ],
    "items": [
      {
        "label": "",
        "body": "create and manage your community account and membership;"
      },
      {
        "label": "",
        "body": "process payments, renewals, and refunds, and keep financial records;"
      },
      {
        "label": "",
        "body": "deliver our courses, events, resources, and advisory services;"
      },
      {
        "label": "",
        "body": "send you service messages, such as receipts, renewal reminders, and changes to your account;"
      },
      {
        "label": "",
        "body": "send newsletters and offers, if you’ve agreed to receive them (see section 9);"
      },
      {
        "label": "",
        "body": "answer your questions and provide support;"
      },
      {
        "label": "",
        "body": "keep the community safe, including moderating content and enforcing our Terms of Service;"
      },
      {
        "label": "",
        "body": "understand how people use our website and community, so we can improve them; and"
      },
      {
        "label": "",
        "body": "meet our legal and tax obligations."
      }
    ],
    "after": [
      {
        "label": "",
        "body": "We may use aggregated, de-identified data (for example, the share of members in their first year of business) in reports and content. This won’t identify you."
      },
      {
        "label": "",
        "body": "We will never sell your personal information."
      }
    ]
  },
  {
    "id": "payments",
    "title": "Payments via Stripe",
    "paras": [
      {
        "label": "",
        "body": "All payments for memberships and services are processed by Stripe, a PCI-DSS Level 1 certified payment provider. When you pay, you enter your card details directly into Stripe’s secure checkout. We never see or store your full card number or security code."
      },
      {
        "label": "",
        "body": "We receive from Stripe your name, email, billing address, the last four digits and expiry of your card, card type, and payment history. We use this to manage your membership, issue receipts, handle failed payments and refunds, and keep tax records."
      },
      {
        "label": "",
        "body": "Stripe also uses your information for its own purposes, such as fraud prevention and meeting financial regulations. That use is covered by Stripe’s Privacy Policy."
      },
      {
        "label": "",
        "body": "You can update your payment method or cancel your membership at any time in the membership portal or by emailing hello@sidehustles.nz."
      }
    ],
    "items": [],
    "after": []
  },
  {
    "id": "community",
    "title": "The Circle community and what you post",
    "paras": [
      {
        "label": "",
        "body": "Our community is hosted on Circle, a US-based platform. Circle stores your account, profile, and community content on our behalf, and also processes some data under Circle’s Privacy Policy."
      },
      {
        "label": "What other members can see. ",
        "body": "Your profile (name, photo, bio, and anything else you add) and anything you post in shared spaces are visible to other members. Direct messages are visible to the people in the conversation. SHNZ admins and moderators can access community content, including messages, when needed to keep the community safe or to respond to a complaint."
      },
      {
        "label": "Please be thoughtful. ",
        "body": "Don’t post anything you wouldn’t want other members to see, and don’t share other people’s personal information without their permission. Members must not copy or share other members’ information outside the community."
      },
      {
        "label": "Facebook group. ",
        "body": "Our free Facebook group is run on Meta’s platform and governed by Meta’s Privacy Policy. We can see your public profile, posts, and answers to membership questions, but we don’t control how Meta handles your data."
      },
      {
        "label": "Recordings. ",
        "body": "Some live events and calls are recorded and shared with members. We’ll tell you at the start of any recorded session. You can keep your camera off or ask a question privately if you’d prefer not to appear."
      }
    ],
    "items": [],
    "after": []
  },
  {
    "id": "sharing",
    "title": "Who we share it with, and overseas storage",
    "paras": [
      {
        "label": "",
        "body": "We share personal information only with people and services that help us run SHNZ, and only as much as they need:"
      }
    ],
    "items": [
      {
        "label": "Stripe — ",
        "body": "payment processing and billing. USA and other countries."
      },
      {
        "label": "Circle — ",
        "body": "community and SHNZ Membership platform. USA."
      },
      {
        "label": "Kit — ",
        "body": "email newsletters and sign-up forms. USA."
      },
      {
        "label": "Google Workspace — ",
        "body": "email, documents, and file storage. USA and other countries."
      },
      {
        "label": "Google Analytics — ",
        "body": "website usage statistics. USA."
      },
      {
        "label": "Meta (Facebook) — ",
        "body": "our Facebook group, and the Meta Pixel for measuring ads. USA and other countries."
      },
      {
        "label": "Cloudflare — ",
        "body": "website hosting, security, and analytics. Global network."
      },
      {
        "label": "Zoom — ",
        "body": "live calls, workshops, and advisory sessions. USA and other countries."
      }
    ],
    "after": [
      {
        "label": "",
        "body": "We may also share information with our professional advisers (such as our accountant or lawyer), with contractors who support our team under confidentiality obligations, or where required by law."
      },
      {
        "label": "",
        "body": "If SHNZ or its business is sold or restructured, personal information may transfer to the new owner, who must handle it in line with this policy."
      },
      {
        "label": "Overseas disclosure. ",
        "body": "Most of these providers store data outside New Zealand. Under information privacy principle 12, we only use providers that are subject to comparable privacy safeguards, such as the EU’s GDPR, or that are bound by contract to protect your information. Where a provider simply stores or processes information on our behalf, we remain responsible for it."
      }
    ]
  },
  {
    "id": "cookies",
    "title": "Cookies and analytics",
    "paras": [
      {
        "label": "",
        "body": "Our website and Circle community use cookies (small files stored in your browser) to:"
      }
    ],
    "items": [
      {
        "label": "",
        "body": "keep you logged in and remember your settings (essential cookies);"
      },
      {
        "label": "",
        "body": "understand how people use our site, using Google Analytics (analytics cookies) and Cloudflare Web Analytics, which doesn’t use cookies; and"
      },
      {
        "label": "",
        "body": "measure and improve our ads on Facebook and Instagram using the Meta Pixel, which shares details of your visit, such as pages viewed and sign-ups, with Meta (marketing cookies)."
      }
    ],
    "after": [
      {
        "label": "",
        "body": "You can block or delete cookies in your browser settings, opt out of Google Analytics with Google’s opt-out add-on, and control ad tracking in your Facebook ad preferences. If you block essential cookies, parts of the community may not work properly."
      }
    ]
  },
  {
    "id": "marketing",
    "title": "Marketing emails",
    "paras": [
      {
        "label": "",
        "body": "We only send newsletters and promotional emails if you’ve signed up or otherwise agreed to receive them, in line with the Unsolicited Electronic Messages Act 2007. Every marketing email includes an unsubscribe link, and we’ll action your request within 5 working days."
      },
      {
        "label": "",
        "body": "If you’re a paying member, we’ll still send essential service messages (such as receipts and renewal notices) even if you unsubscribe from marketing."
      }
    ],
    "items": [],
    "after": []
  },
  {
    "id": "security",
    "title": "Storage, security and retention",
    "paras": [
      {
        "label": "",
        "body": "We take reasonable steps to protect your information from loss, misuse, and unauthorised access. These include using reputable providers with strong security, two-factor authentication on our accounts, and limiting team access to what each person needs."
      },
      {
        "label": "",
        "body": "No online system is completely secure. If a privacy breach happens that is likely to cause serious harm, we will notify you and the Office of the Privacy Commissioner as the Privacy Act requires."
      },
      {
        "label": "",
        "body": "We keep personal information only as long as we need it:"
      }
    ],
    "items": [
      {
        "label": "Payment and tax records — ",
        "body": "7 years, as required by New Zealand tax law."
      },
      {
        "label": "Advisory notes — ",
        "body": "7 years after your last session."
      },
      {
        "label": "Community account and content — ",
        "body": "while you’re a member, and up to 7 years after your account closes, unless you ask us to delete it sooner."
      },
      {
        "label": "Email list — ",
        "body": "until you unsubscribe. We keep a record of your unsubscribe so we don’t email you again."
      }
    ],
    "after": [
      {
        "label": "",
        "body": "Posts you made in shared spaces may stay visible after you leave unless you delete them or ask us to remove them."
      }
    ]
  },
  {
    "id": "rights",
    "title": "Your rights",
    "paras": [
      {
        "label": "",
        "body": "Under the Privacy Act 2020, you can:"
      }
    ],
    "items": [
      {
        "label": "Ask for a copy ",
        "body": "of the personal information we hold about you;"
      },
      {
        "label": "Ask us to correct ",
        "body": "information you think is wrong; and"
      },
      {
        "label": "Ask us to delete ",
        "body": "your account and information, subject to records we must keep by law."
      }
    ],
    "after": [
      {
        "label": "",
        "body": "To make a request, email our Privacy Officer at hello@sidehustles.nz. We’ll respond within 20 working days and won’t charge you for it. We may need to confirm your identity first."
      },
      {
        "label": "",
        "body": "If you’re unhappy with how we’ve handled your information, please contact us first so we can try to fix it. If you’re still not satisfied, you can complain to the Office of the Privacy Commissioner on 0800 803 909."
      }
    ]
  },
  {
    "id": "changes",
    "title": "Changes and contact",
    "paras": [
      {
        "label": "",
        "body": "We may update this policy from time to time. We’ll post the new version here with an updated date, and tell members by email or in the community if the changes are significant."
      }
    ],
    "items": [],
    "after": []
  }
];
