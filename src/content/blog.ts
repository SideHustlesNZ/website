/*
  Blog text and posts (designs: Blog.dc.html and Blog Post.dc.html).

  Each post gets its own page at /blog/<slug>/. The newest post is shown as the
  featured post on the "All" view. The article body is still a placeholder in
  the design: write each post's body in `body` (one string per paragraph) and it
  replaces the placeholder box.
*/

export const blogPage = {
  title: 'Blog — Side Hustles NZ',
  description: 'Practical notes on starting, pricing and growing a side hustle in New Zealand.',
  h1: ['The ', 'blog.'],
  lead: 'Practical notes on starting, pricing and growing a side hustle in New Zealand.',
  categories: ['All', 'Getting started', 'Pricing', 'Marketing', 'Money & tax'],
  featuredLabel: 'Featured',
  readMore: 'Read the post →',
  allPosts: '← All posts',
  banner: {
    title: 'Reading is step one.',
    sub: '$197/month · cancel anytime, no lock-in.',
    cta: 'Join the community',
  },
};

export type Post = {
  slug: string;
  cat: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: 'pick-a-side-hustle-you-will-stick-with',
    cat: 'Getting started',
    title: 'How to pick a side hustle you will actually stick with',
    excerpt: 'A simple filter for choosing between ideas, based on your time, skills and what people already pay for.',
    date: '14 Oct 2026',
    read: '6 min read',
    body: [],
  },
  {
    slug: 'stop-charging-by-the-hour',
    cat: 'Pricing',
    title: 'Stop charging by the hour',
    excerpt: 'Why hourly rates cap your income, and how to package your work into offers clients say yes to.',
    date: '7 Oct 2026',
    read: '5 min read',
    body: [],
  },
  {
    slug: 'gst-ird-and-your-side-hustle',
    cat: 'Money & tax',
    title: 'GST, IRD and your side hustle: the basics',
    excerpt: 'When you need to register, what to keep receipts for, and how to set aside tax without stress.',
    date: '30 Sep 2026',
    read: '8 min read',
    body: [],
  },
  {
    slug: 'first-10-customers-without-ads',
    cat: 'Marketing',
    title: 'Your first 10 customers without ads',
    excerpt: 'The low-cost outreach playbook members use to land their first sales from their own network.',
    date: '23 Sep 2026',
    read: '7 min read',
    body: [],
  },
  {
    slug: 'fitting-a-business-around-a-full-time-job',
    cat: 'Getting started',
    title: 'Fitting a business around a full-time job',
    excerpt: 'Realistic weekly routines from members building in evenings and weekends.',
    date: '16 Sep 2026',
    read: '5 min read',
    body: [],
  },
  {
    slug: 'raising-your-prices-without-losing-clients',
    cat: 'Pricing',
    title: 'Raising your prices without losing clients',
    excerpt: 'A script and a timeline for telling existing customers about a price change.',
    date: '9 Sep 2026',
    read: '4 min read',
    body: [],
  },
  {
    slug: 'writing-an-offer-page-that-sells',
    cat: 'Marketing',
    title: 'Writing an offer page that sells',
    excerpt: 'The five sections every offer page needs, with examples from Kiwi side hustles.',
    date: '2 Sep 2026',
    read: '6 min read',
    body: [],
  },
];
