/*
  Success Stories page text. Copied verbatim from "Success Stories.dc.html".
  Each member's `videoId` is a YouTube ID. While it is empty the block shows a
  placeholder instead of an embed, exactly as the design does. Paste the IDs in
  when Rachel sends them and the videos appear.
*/

export const hero = {
  badge: 'In their own words',
  h1: ['Success ', 'stories.'],
  lead:
    'Members on camera, talking about what they were stuck on, what changed, and what the side hustle earns them now. No scripts, no actors - just Kiwis who started.',
};

export const videoPlaceholder = 'Add YouTube video ID';

export const members = [
  {
    videoId: '',
    initials: 'TM',
    name: 'Tia Moana',
    biz: 'Cake studio · Hamilton',
    result: 'First $1k in 5 weeks',
    length: '6:12',
    quote: "I'd sat on the same idea for two years. Five weeks in I was taking orders.",
  },
  {
    videoId: '',
    initials: 'JR',
    name: 'James Reid',
    biz: 'Weekend agency · Wellington',
    result: 'Doubled his rate',
    length: '8:40',
    quote: 'The offer clinic changed my pricing, and not one client pushed back.',
  },
  {
    videoId: '',
    initials: 'PN',
    name: 'Priya Nair',
    biz: 'Digital products · Auckland',
    result: '$4.2k months',
    length: '7:05',
    quote: 'Built entirely in evenings, around a full-time job and two kids.',
  },
  {
    videoId: '',
    initials: 'DW',
    name: 'Dan Whitiora',
    biz: 'Building services · Dunedin',
    result: 'Left the day job',
    length: '11:20',
    quote: 'I stopped quoting on gut feel and my margin went up overnight.',
  },
  {
    videoId: '',
    initials: 'AL',
    name: 'Aroha Lee',
    biz: 'Bookkeeping · Tauranga',
    result: '12 retained clients',
    length: '5:48',
    quote: "Going from 'someday' to invoicing real people took one honest conversation.",
  },
  {
    videoId: '',
    initials: 'SK',
    name: 'Sam Kirk',
    biz: 'Ecommerce · Christchurch',
    result: '$60k first year',
    length: '9:32',
    quote: "The accountability pod is the reason I didn't quit in month three.",
  },
];

export const banner = {
  title: 'The next story is yours.',
  sub: '$197/month · cancel anytime, no lock-in.',
  cta: 'Join the community',
};

export const receipts = {
  h2: 'The receipts',
  lead: 'Screenshots straight from member chats, calls and inside the community.',
  // The design shows a line here reading "Drop screenshots onto any tile".
  // That is an instruction to whoever is filling the design tool in, not copy
  // for a live public page, so it is left out. Set a string here to show one.
  note: '',
  // Tile heights from the design, in order.
  heights: [220, 300, 150, 260, 180, 340, 200, 240, 290, 160, 210, 320, 170, 250, 190, 280, 230, 300, 150, 260],
};
