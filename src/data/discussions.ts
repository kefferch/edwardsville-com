export type Discussion = {
  id: string
  title: string
  category: string
  author: string
  replies: number
  views: number
  lastActivity: string
  pinned?: boolean
  verified?: string
}

export const CATEGORIES = [
  'All',
  'Community',
  'Technology',
  'Real Estate',
  'Announcements',
  'Business',
  'Funny',
  'Events',
]

export const discussions: Discussion[] = [
  {
    id: '237',
    title: 'Scale of Data Centers',
    category: 'Technology',
    author: 'Local Resident',
    replies: 0,
    views: 567,
    lastActivity: '2026-03-28T13:47:00',
  },
  {
    id: '228',
    title: "Please Welcome e'ville fitness",
    category: 'Announcements',
    author: 'Local Resident',
    replies: 0,
    views: 1387,
    lastActivity: '2026-03-19T15:56:00',
    verified: "e'ville fitness",
  },
  {
    id: '227',
    title: 'Are Rising Foreclosure Numbers a Warning Sign for the Housing Market?',
    category: 'Real Estate',
    author: 'Local Resident',
    replies: 0,
    views: 1567,
    lastActivity: '2026-03-16T12:39:00',
    verified: 'George Sykes, Managing Broker, Worth Clark Realty',
  },
  {
    id: '226',
    title: 'Please Welcome Busey Bank',
    category: 'Announcements',
    author: 'Local Resident',
    replies: 0,
    views: 1694,
    lastActivity: '2026-03-13T13:22:00',
    verified: 'Busey Bank',
  },
  {
    id: '211',
    title: 'Please Welcome Liberation Contracting and Roofing',
    category: 'Announcements',
    author: 'Local Resident',
    replies: 0,
    views: 2080,
    lastActivity: '2026-03-06T13:29:00',
    verified: 'Liberation Contracting and Roofing',
  },
  {
    id: '208',
    title: 'The Real Estate Elephant in the Room.',
    category: 'Real Estate',
    author: 'Local Resident',
    replies: 0,
    views: 2418,
    lastActivity: '2026-03-01T17:07:00',
    verified: 'George Sykes, Managing Broker, Worth Clark Realty',
  },
  {
    id: '206',
    title: 'Satirical Minutes from the Emergency Meeting of the Six Mile Prairie Horseshoe Guild',
    category: 'Funny',
    author: 'Local Resident',
    replies: 0,
    views: 2792,
    lastActivity: '2026-02-25T10:57:00',
  },
  {
    id: '200',
    title: 'Refuge Announces Former NCAA & NFL Athlete Gaelin Elmore as Guest Speaker for 2026 "Build a Refuge" Fundraising Dinner',
    category: 'Announcements',
    author: 'Local Resident',
    replies: 0,
    views: 2580,
    lastActivity: '2026-02-24T11:08:00',
    verified: 'Refuge',
  },
  {
    id: '196',
    title: 'Do interest rates really matter when buying a home?',
    category: 'Real Estate',
    author: 'Local Resident',
    replies: 0,
    views: 3099,
    lastActivity: '2026-02-18T10:14:00',
    verified: 'George Sykes, Managing Broker, Worth Clark Realty',
  },
  {
    id: '187',
    title: 'Grime Stoppers',
    category: 'Announcements',
    author: 'Local Resident',
    replies: 2,
    views: 3590,
    lastActivity: '2026-02-17T14:05:00',
  },
  {
    id: '180',
    title: 'Best spots to watch the sunset in Edwardsville?',
    category: 'Community',
    author: 'Local Resident',
    replies: 7,
    views: 1842,
    lastActivity: '2026-02-10T09:33:00',
  },
  {
    id: '175',
    title: 'SIUE Tigers Basketball — Season Recap',
    category: 'Community',
    author: 'Local Resident',
    replies: 4,
    views: 2211,
    lastActivity: '2026-02-08T16:45:00',
  },
  {
    id: '168',
    title: 'New restaurant opening on N Main Street — anyone have details?',
    category: 'Community',
    author: 'Local Resident',
    replies: 12,
    views: 4103,
    lastActivity: '2026-02-05T11:22:00',
  },
  {
    id: '160',
    title: 'Edwardsville School District — Spring Calendar Update',
    category: 'Announcements',
    author: 'Local Resident',
    replies: 1,
    views: 3877,
    lastActivity: '2026-01-28T08:15:00',
  },
]
