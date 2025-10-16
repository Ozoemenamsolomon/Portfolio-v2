# Migration Guide: Gatsby to Next.js

This guide will help you complete the migration from Gatsby + Strapi to Next.js + Supabase.

## Overview

The portfolio website has been successfully migrated with the following changes:

- **Framework**: Gatsby → Next.js 14 with App Router
- **Styling**: styled-components → Tailwind CSS
- **Backend**: Strapi → Supabase (PostgreSQL)
- **Image Hosting**: Cloudinary (unchanged)
- **Deployment**: Netlify with @netlify/plugin-nextjs

## Setup Instructions

### 1. Set Up Supabase

1. Create a new project at [Supabase](https://supabase.com)
2. Go to the SQL Editor in your Supabase dashboard
3. Copy and paste the entire contents of `supabase-schema.sql`
4. Run the SQL script to create all tables, views, and policies

### 2. Configure Environment Variables

1. Copy `.env.sample` to `.env.local`:
   ```bash
   cp .env.sample .env.local
   ```

2. Fill in your credentials:
   ```env
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

   # Cloudinary
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret

   # Analytics (optional)
   NEXT_PUBLIC_GA_TRACKING_ID=your_google_analytics_tracking_id
   ```

### 3. Migrate Your Data

You need to migrate your existing data from Strapi to Supabase. Here's how:

#### Option A: Manual Migration

1. Export data from Strapi
2. Transform the data to match the new schema
3. Import into Supabase using the dashboard or SQL inserts

#### Option B: Create a Migration Script

Create a script that:
1. Fetches all data from your Strapi API
2. Transforms it to match the new schema
3. Inserts it into Supabase using the client library

Example structure for a migration script:

```javascript
// migrate-data.js
const { createClient } = require('@supabase/supabase-js')
const fetch = require('node-fetch')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

async function migrateProjects() {
  // Fetch from Strapi
  const response = await fetch('YOUR_STRAPI_URL/api/projects?populate=*')
  const data = await response.json()
  
  // Transform and insert into Supabase
  for (const project of data.data) {
    const { data, error } = await supabase
      .from('projects')
      .insert({
        title: project.attributes.title,
        slug: project.attributes.slug,
        excerpt: project.attributes.excerpt,
        description: project.attributes.description,
        code_url: project.attributes.codeUrl,
        project_url: project.attributes.projectUrl,
        img_url: project.attributes.img?.data?.attributes?.url,
        locale: project.attributes.locale,
        published_at: project.attributes.publishedAt,
      })
    
    if (error) console.error('Error inserting project:', error)
  }
}

// Run migrations
migrateProjects()
  .then(() => console.log('Migration complete'))
  .catch(console.error)
```

### 4. Upload Images to Cloudinary

If your images were stored in Strapi's media library:

1. Download all images from Strapi
2. Upload them to Cloudinary
3. Update the image URLs in your Supabase database

### 5. Test Locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000 to test the site.

### 6. Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure environment variables in Netlify dashboard
4. Deploy!

Netlify will automatically detect Next.js and use the configuration in `netlify.toml`.

## Database Schema Overview

### Tables

- **techstacks**: Technologies and tools you use
- **projects**: Portfolio projects
- **project_techstacks**: Many-to-many relationship between projects and techstacks
- **blog_articles**: Blog posts with markdown content
- **about**: About page content (one per locale)
- **about_techstacks**: Many-to-many relationship between about and techstacks
- **about_skills**: Soft skills and languages for the about page

### Views

- **projects_with_techstacks**: Projects with their related techstacks (JSON aggregated)
- **about_with_techstacks**: About content with techstacks and skills

## Key Differences from Gatsby

### 1. Data Fetching

**Before (Gatsby + GraphQL):**
```javascript
export const query = graphql`
  query {
    allStrapiProject {
      nodes {
        title
        slug
      }
    }
  }
`
```

**After (Next.js + Supabase):**
```javascript
import { getProjects } from '@/lib/api'

export default async function WorksPage() {
  const projects = await getProjects('en')
  // ...
}
```

### 2. Styling

**Before (styled-components):**
```javascript
const Button = styled.button`
  background: var(--soo-gradient);
  color: white;
  padding: 1rem 2rem;
`
```

**After (Tailwind CSS):**
```jsx
<button className="soo-btn">
  Click me
</button>
```

### 3. Routing

- Gatsby: `src/pages/blog/posts/{strapiBlogArticle.slug}.tsx`
- Next.js: `src/app/blog/[slug]/page.tsx`

## Customization

### Adding New Pages

Create a new directory in `src/app/` with a `page.tsx` file:

```
src/app/
  my-new-page/
    page.tsx
```

### Updating Tailwind Colors

Edit `tailwind.config.ts` to customize colors:

```typescript
theme: {
  extend: {
    colors: {
      'your-color': '#hexcode',
    },
  },
}
```

### Modifying the Database Schema

1. Add SQL migrations to `supabase-schema.sql`
2. Run them in the Supabase SQL editor
3. Update TypeScript types in `src/types/database.ts`
4. Update API functions in `src/lib/api.ts`

## Troubleshooting

### Build Errors

If you see "Missing Supabase environment variables" during build:
- Make sure `.env.local` exists with valid credentials
- For Netlify, add environment variables in the dashboard

### Images Not Loading

- Check that Cloudinary URLs are correct in the database
- Verify `next.config.js` has the correct domains in `remotePatterns`

### TypeScript Errors

Run `npm run build` to see all type errors. Fix them by updating type definitions in `src/types/`.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Netlify Next.js Plugin](https://github.com/netlify/next-runtime)

## Questions?

If you have questions about the migration, check:
1. This migration guide
2. The code comments in key files
3. The README.md for quick reference

Happy coding! 🚀
