# edwardsville.com

Community portal for Edwardsville, Illinois. Discover local restaurants, events, deals, and businesses.

## Tech Stack

- **Next.js 15** (App Router)
- **Tailwind CSS v4**
- **TypeScript**
- Deployed on **Vercel**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, events, restaurants, and deals |
| `/eat` | Restaurant directory with cuisine filters |
| `/events` | Events calendar with category filters |
| `/deals` | Local business deals |
| `/directory` | Searchable business directory |

## Deployment

```bash
npm run build   # Verify production build
vercel           # Deploy to Vercel
```

## Phase 1 (Current)

Static/mock data, no database. Proof of concept for client demo.

## Roadmap

- Database integration (Supabase or Postgres)
- Business claim & self-service listing management
- Event submission form
- User accounts and favorites
- Search functionality
- SEO optimization with dynamic metadata
