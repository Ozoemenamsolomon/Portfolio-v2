# [Solozo.page](https://www.solozo.page)

My Personal website version 2 built with [Next.js](https://nextjs.org/) for the frontend, [Supabase](https://supabase.com/) for the backend, and styled with [Tailwind CSS](https://tailwindcss.com/).

Project is hosted at [solozo.page](https://www.solozo.page) and deployed on [Netlify](https://www.netlify.com/).

## Tech Stack

- **Frontend**: Next.js 14+ with TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Media**: Cloudinary
- **Deployment**: Netlify

## File Structure

This project follows the [Next.js App Router](https://nextjs.org/docs/app) structure:

```
src/
├── app/              # App router pages
├── components/       # React components
├── lib/             # Utility functions and API clients
└── types/           # TypeScript type definitions
```

## Getting Started Locally

1. Clone the repository
2. Copy `.env.sample` to `.env.local` and fill in your environment variables
3. Install dependencies:

```bash
npm install
```

4. Set up your Supabase database using the SQL schema:

```bash
# Run the SQL commands in supabase-schema.sql in your Supabase SQL editor
```

5. Run the development server:

```bash
npm run dev
```

The server should be running at [http://localhost:3000](http://localhost:3000).

## Build and Deploy

To build for production:

```bash
npm run build
```

The build output will be in the `out/` directory, ready for deployment to Netlify.

## Environment Variables

See `.env.sample` for required environment variables. You'll need:
- Supabase credentials (URL and anon key)
- Cloudinary credentials (for media management)
- Google Analytics tracking ID (optional)

## Database Setup

Run the SQL commands in `supabase-schema.sql` in your Supabase SQL editor to create all necessary tables, views, and policies.
