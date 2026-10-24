/*
  Terms of Service text (design: Terms of Service.dc.html).
  The design notes these are a plain-language draft, not legal advice:
  have a New Zealand lawyer review them before launch.

  Same shape as privacy.ts: `paras`, optional `items` bullets, optional `after`.
*/
import type { LegalSection } from './legal';

export const hero = {
  eyebrow: 'Legal',
  h1: ['Terms of ', 'service.'],
  lead: 'We want every member, client and attendee to know exactly where they stand, so we’ve set out our terms plainly.',
  updated: 'Last updated 21 October 2026',
};

export const toc = {
  title: 'On this page',
  note: 'These terms are a plain-language draft, not legal advice. Have a New Zealand lawyer review them before you rely on them.',
};

export const shortVersion = {
  title: 'The short version',
  points: [
    'Be good to each other. What members share in our community stays in our community.',
    'Use our stuff to build your business — just don’t copy, share or resell it.',
    'Memberships can be cancelled any time. Digital products, events and advisory aren’t refundable for change of mind, but your rights under NZ consumer law always stand.',
  ],
};

export const intro = [
  { label: '', body: 'Welcome to Side Hustles NZ. These terms apply to everything you buy or use from Side Hustles NZ, including through sidehustles.nz, our Circle community and our Facebook group. By joining, purchasing or booking with us, you agree to these terms.' },
  { label: 'Your rights under New Zealand law. ', body: 'Nothing in these terms excludes, restricts or modifies any right or remedy you have under the Consumer Guarantees Act 1993, the Fair Trading Act 1986, or any other New Zealand law that can’t lawfully be excluded. If anything below conflicts with those rights, your statutory rights win.' },
];

export const contactBox = {
  title: 'Questions about these terms?',
  before: 'Questions about these terms, a purchase, or your membership? Email ',
  email: 'hello@sidehustles.nz',
  middle: ' — we’re a real team and we’ll get back to you. How we handle your information is covered in our ',
  linkLabel: 'privacy policy',
  after: '.',
};

export const sections: LegalSection[] = [
  {
    "id": "eligibility",
    "title": "Who can use our services",
    "paras": [
      {
        "label": "",
        "body": "You must be 18 or older to purchase from us or join a paid program. You’re responsible for keeping your login details secure and for any activity under your account. Memberships and program access are for one person only and can’t be shared."
      }
    ],
    "items": [],
    "after": []
  },
  {
    "id": "ip",
    "title": "Intellectual property",
    "paras": [
      {
        "label": "",
        "body": "All content we provide — including course videos, templates, worksheets, frameworks (such as The Revenue Roadmap™ and The $5K Roadmap™), reports, tools, recordings and community resources — is owned by Side Hustles NZ or its licensors and protected by copyright and other intellectual property laws."
      },
      {
        "label": "",
        "body": "You may use our materials to build and run your own business. You may not copy, resell, redistribute, publicly share, or create courses, programs or products based on our materials without our written permission."
      },
      {
        "label": "Your content. ",
        "body": "You keep ownership of anything you post in our communities. By posting, you give us a non-exclusive licence to display it within the community and, with your permission, to share it (for example as a case study or testimonial)."
      }
    ],
    "items": [],
    "after": []
  },
  {
    "id": "community",
    "title": "Community guidelines",
    "paras": [
      {
        "label": "",
        "body": "Our communities (the free Facebook group and our paid membership community) only work because members look after each other. You agree not to:"
      }
    ],
    "items": [
      {
        "label": "",
        "body": "harass, bully, abuse or discriminate against other members"
      },
      {
        "label": "",
        "body": "spam, or post unsolicited promotions, affiliate links or DMs pitching your offer, outside any spaces we’ve set aside for promotion"
      },
      {
        "label": "",
        "body": "share other members’ personal information, posts or screenshots outside the community without their consent"
      },
      {
        "label": "",
        "body": "post anything unlawful, misleading, or that infringes someone else’s rights"
      },
      {
        "label": "",
        "body": "use the community to recruit for multi-level marketing or get-rich-quick schemes"
      },
      {
        "label": "",
        "body": "scrape, copy or harvest member details or content"
      }
    ],
    "after": [
      {
        "label": "Keep it in the community. ",
        "body": "Members often share revenue figures, pricing, client details and other private information about their businesses. By joining, you agree to keep anything another member shares in our communities confidential. Don’t screenshot it, repeat it, or use it outside the community without their permission."
      },
      {
        "label": "",
        "body": "We can remove content, suspend or remove anyone who breaches these guidelines, at our discretion. If you’re removed from a paid community for a serious or repeated breach, you won’t be entitled to a refund for the remaining period, except where required by law."
      }
    ]
  },
  {
    "id": "membership",
    "title": "Membership",
    "paras": [
      {
        "label": "Billing. ",
        "body": "The SHNZ Membership is a recurring subscription billed monthly or annually in advance through our payment provider (Stripe) until you cancel. Prices are in NZD and include GST where applicable."
      },
      {
        "label": "Cancelling. ",
        "body": "You can cancel any time in the membership portal or by emailing hello@sidehustles.nz. Cancellation stops future payments; you’ll keep access until the end of the period you’ve already paid for. We don’t provide partial refunds for unused time in a billing period."
      },
      {
        "label": "Failed payments. ",
        "body": "If a payment fails, your access is paused immediately until the payment goes through. We’ll let you know by email, and our payment provider will retry the charge. If the payment is still outstanding after 14 days, we may cancel your membership. The same applies to missed instalments on any payment plan."
      },
      {
        "label": "Annual memberships. ",
        "body": "Annual memberships can be refunded in full within 14 days of purchase. After that, they aren’t refundable for change of mind, but you won’t be charged again once cancelled."
      },
      {
        "label": "Price changes. ",
        "body": "We’ll give you at least 30 days’ notice of any price change to your membership. If you don’t want to continue at the new price, you can cancel before it takes effect."
      },
      {
        "label": "Content changes. ",
        "body": "We regularly update, add to and retire content to keep it current. Brief, reasonable interruptions during updates aren’t grounds for a refund."
      },
      {
        "label": "If we end your membership. ",
        "body": "We may end your membership for any reason at any time by letting you know by email. If we do this for a reason other than a breach of these terms, we’ll refund the unused portion of any period you’ve already paid for, calculated pro-rata."
      }
    ],
    "items": [],
    "after": []
  },
  {
    "id": "digital",
    "title": "Digital products and courses",
    "paras": [
      {
        "label": "Immediate access. ",
        "body": "Digital products, courses, templates and tools are delivered immediately after purchase."
      },
      {
        "label": "No change-of-mind refunds. ",
        "body": "Because digital content can’t practically be returned once accessed, we don’t offer refunds if you change your mind, buy the wrong product, or decide not to use it. Please check the product description before buying."
      },
      {
        "label": "Payment plans. ",
        "body": "If you’ve chosen a payment plan, you’re committing to the full price. Because full access is provided upfront, you can’t cancel remaining instalments for change-of-mind reasons."
      },
      {
        "label": "Technical issues. ",
        "body": "If something stops you accessing what you’ve paid for, email us at hello@sidehustles.nz and we’ll fix it promptly. If we can’t, we’ll offer a refund."
      }
    ],
    "items": [],
    "after": []
  },
  {
    "id": "advisory",
    "title": "1:1 Advisory",
    "paras": [
      {
        "label": "Booking and commitment. ",
        "body": "Advisory engagements are scoped and priced individually. Your proposal or booking confirmation sets out what’s included, the fee and the term, and forms part of these terms."
      },
      {
        "label": "Rescheduling. ",
        "body": "You can reschedule a session with at least 48 hours’ notice. Sessions missed or cancelled with less notice may be forfeited."
      },
      {
        "label": "Refunds. ",
        "body": "Advisory engagements aren’t refundable once booked, because we set aside dedicated time for you that we can’t offer to anyone else."
      }
    ],
    "items": [],
    "after": []
  },
  {
    "id": "events",
    "title": "Events and workshops",
    "paras": [
      {
        "label": "",
        "body": "Event tickets are non-refundable because we commit to venues, catering and other costs in advance. If you can’t attend, you’re welcome to transfer your ticket to someone else — just email us their name before the event."
      },
      {
        "label": "",
        "body": "If we cancel an event, we’ll give you a full refund or the option to move to a rescheduled date. If we need to change the date, venue or speakers, we’ll let you know as soon as possible."
      },
      {
        "label": "Recordings. ",
        "body": "Live calls, workshops, webinars and events may be recorded and shared with members, including in our community and course library. By taking part, you consent to being recorded and to the recording being shared in this way. If you’d rather not appear, keep your camera off, or let us know before the session and we’ll do our best to accommodate you."
      }
    ],
    "items": [],
    "after": []
  },
  {
    "id": "advice",
    "title": "General information, not professional advice",
    "paras": [
      {
        "label": "",
        "body": "Our content, community discussions, programs and advisory sessions provide general business education and guidance. They are not legal, tax, accounting or regulated financial advice, and don’t take into account your full personal circumstances. Before making significant financial, legal or tax decisions, please get advice from an appropriately qualified professional."
      },
      {
        "label": "",
        "body": "Advice and posts from other community members are their own views, not ours, and we don’t verify them."
      }
    ],
    "items": [],
    "after": []
  },
  {
    "id": "results",
    "title": "No guaranteed results",
    "paras": [
      {
        "label": "",
        "body": "We share what works, but we can’t guarantee any particular outcome, income or level of success. Results depend on many things outside our control — including your effort, your market, your skills and your circumstances. Any examples of member results are illustrative, not typical or promised."
      },
      {
        "label": "",
        "body": "This doesn’t limit our obligation under the Consumer Guarantees Act 1993 to provide our services with reasonable care and skill."
      }
    ],
    "items": [],
    "after": []
  },
  {
    "id": "liability",
    "title": "Limitation of liability",
    "paras": [
      {
        "label": "",
        "body": "To the extent permitted by law, we’re not liable for any indirect or consequential loss, or any loss of profit, revenue or business opportunity, arising from your use of our services. Where we are liable, our total liability is limited to the amount you paid us in the 12 months before the claim arose. Nothing in this clause limits any liability that can’t be limited under New Zealand law."
      }
    ],
    "items": [],
    "after": []
  },
  {
    "id": "platforms",
    "title": "Third-party platforms",
    "paras": [
      {
        "label": "",
        "body": "We deliver our services using third-party platforms such as Circle, Facebook, Stripe, Kit and Zoom. Your use of those platforms is also subject to their own terms. We’re not responsible for outages or changes on platforms we don’t control, though we’ll do our best to minimise any disruption."
      }
    ],
    "items": [],
    "after": []
  },
  {
    "id": "emails",
    "title": "Emails and communications",
    "paras": [
      {
        "label": "",
        "body": "When you join or buy from us, we’ll send you emails related to your purchase or membership. If you opt in to marketing emails, we’ll also send you news, content and offers. You can unsubscribe from marketing emails at any time using the link in any email. We comply with the Unsolicited Electronic Messages Act 2007."
      }
    ],
    "items": [],
    "after": []
  },
  {
    "id": "privacy",
    "title": "Privacy",
    "paras": [
      {
        "label": "",
        "body": "We collect and handle your personal information in line with the Privacy Act 2020 and our Privacy Policy. We don’t sell your personal information."
      }
    ],
    "items": [],
    "after": []
  },
  {
    "id": "changes",
    "title": "Changes to these terms",
    "paras": [
      {
        "label": "",
        "body": "We may update these terms from time to time. We’ll post the updated version on this page with a new “last updated” date, and for material changes affecting paid members, we’ll let you know by email. Continuing to use our services after changes take effect means you accept the updated terms."
      }
    ],
    "items": [],
    "after": []
  },
  {
    "id": "disputes",
    "title": "Resolving disputes",
    "paras": [
      {
        "label": "",
        "body": "If something goes wrong, please talk to us first. Email us at hello@sidehustles.nz with the details, and we’ll work with you to try to resolve it within 14 days. Neither of us will start formal proceedings until that 14-day period has passed, unless urgent relief is needed."
      },
      {
        "label": "",
        "body": "This doesn’t affect your right to go to the Disputes Tribunal or to make a complaint under New Zealand consumer law."
      }
    ],
    "items": [],
    "after": []
  },
  {
    "id": "law",
    "title": "Governing law",
    "paras": [
      {
        "label": "",
        "body": "These terms are governed by New Zealand law, and the New Zealand courts have exclusive jurisdiction."
      }
    ],
    "items": [],
    "after": []
  }
];
