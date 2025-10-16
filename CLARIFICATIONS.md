# Clarifications and Notes

This document addresses potential questions and clarifications about the migration.

## Questions & Answers

### Q: How do I install Tailwind CSS properly?

**A:** Tailwind CSS has been installed and configured. The setup includes:
- `tailwind.config.ts` - Configuration file with custom colors matching your brand
- `postcss.config.js` - PostCSS configuration
- `src/app/globals.css` - Global styles with Tailwind directives

Your custom colors from the old design are preserved:
- `soo-blue`: #3f73a7
- `soo-dark-blue`: #233e63
- `soo-light-blue`: #5a8fc2
- `soo-gradient`: Linear gradient from blue to dark blue

**Note**: The Tailwind documentation link you provided was for Astro, but this is a Next.js project. Next.js has built-in Tailwind support which is already configured.

### Q: What about Cloudinary?

**A:** Cloudinary integration is ready:
- Configuration added to `next.config.js` for remote image patterns
- Environment variables in `.env.sample` for Cloudinary credentials
- The `cloudinary` package is included in dependencies
- Image URLs from Cloudinary will work automatically once you set the env vars

Images are expected to be stored in Cloudinary and referenced by URL in the database.

### Q: How do I migrate my existing data?

**A:** See `MIGRATION_GUIDE.md` for detailed instructions. The quick version:
1. Set up Supabase database using `supabase-schema.sql`
2. Use the migration script in `scripts/migrate-strapi-to-supabase.js` (needs customization)
3. Or manually export from Strapi and import to Supabase

### Q: Will this work with Netlify?

**A:** Yes! The project is configured for Netlify:
- `@netlify/plugin-nextjs` is installed
- `netlify.toml` is configured
- Next.js will run using Netlify's Next.js runtime

### Q: What SQL commands do I need to run?

**A:** All SQL commands are in `supabase-schema.sql`. To use:
1. Open your Supabase project
2. Go to SQL Editor
3. Copy the entire contents of `supabase-schema.sql`
4. Paste and run it

This will create:
- All tables (projects, blog_articles, techstacks, about, etc.)
- Relationships between tables
- Views for easier querying
- Row Level Security policies
- Indexes for performance
- Triggers for automatic timestamp updates

### Q: What environment variables do I need?

**A:** See `.env.sample` for a complete list. Essential ones:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` - Your Cloudinary cloud name

Optional:
- `NEXT_PUBLIC_GA_TRACKING_ID` - Google Analytics
- `SUPABASE_SERVICE_ROLE_KEY` - For server-side operations
- `CLOUDINARY_API_KEY` and `CLOUDINARY_API_SECRET` - For uploading images

### Q: How is this different from the old Gatsby site?

**A:** Major changes:
1. **No build-time data fetching** - Data is fetched at request time from Supabase
2. **No GraphQL** - Direct SQL queries via Supabase client
3. **App Router** - Next.js 14 App Router instead of Gatsby pages
4. **Tailwind CSS** - Utility-first CSS instead of styled-components
5. **Server Components** - Most pages are React Server Components by default

### Q: Do I need to change anything in the code?

**A:** The code is ready to use! You just need to:
1. Set up Supabase database
2. Configure environment variables
3. Migrate your data
4. Deploy

If you want to customize:
- Update colors in `tailwind.config.ts`
- Modify components in `src/components/`
- Update pages in `src/app/`

### Q: How do I add new content?

**A:** You have several options:
1. **Supabase Dashboard** - Use the built-in table editor
2. **SQL inserts** - Write SQL INSERT statements
3. **Build an admin panel** - Create a `/admin` route with forms
4. **Use Supabase Studio** - The web interface for managing data

Example using Supabase Dashboard:
1. Go to Table Editor
2. Select the table (e.g., "projects")
3. Click "Insert row"
4. Fill in the fields
5. Save

### Q: What about the contact form?

**A:** The contact form UI is built, but you need to implement the backend:

Options:
1. **Formspree/EmailJS** - Add NEXT_PUBLIC_CONTACT_FORM_ENDPOINT to env vars
2. **Supabase Edge Function** - Create a function to send emails
3. **Netlify Forms** - Use Netlify's built-in form handling
4. **API Route** - Create an API route in Next.js with nodemailer

Example for Netlify Forms - update the form in `src/app/contact/page.tsx`:
```jsx
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  {/* rest of form fields */}
</form>
```

### Q: Is the German locale supported?

**A:** The database schema supports multiple locales (including 'de-DE'):
- Projects, blog articles, and about page have locale fields
- Default is 'en' but you can add content in any locale
- You'll need to add UI language switching if you want bilingual site

### Q: Can I still use my old Strapi instance?

**A:** This migration is designed to replace Strapi with Supabase. Running both simultaneously would be complex and not recommended. The migration is one-way: Strapi → Supabase.

## Additional Notes

### Performance
- Next.js App Router uses React Server Components by default
- Data fetching happens on the server
- Images are optimized by Next.js (when not using static export)
- Supabase queries are fast with proper indexes (already in schema)

### Security
- Row Level Security (RLS) is enabled on all tables
- Public read access is configured (appropriate for a portfolio)
- Service role key should never be exposed to the client
- Environment variables are properly prefixed (NEXT_PUBLIC_ for client-side)

### Development Workflow
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Format code
npm run format

# Lint code
npm run lint
```

### Deployment Checklist
- [ ] Set up Supabase database
- [ ] Run SQL schema
- [ ] Migrate data
- [ ] Configure environment variables in Netlify
- [ ] Push code to GitHub
- [ ] Connect repository to Netlify
- [ ] Deploy!

## Need Help?

If you encounter issues:
1. Check build errors in the console
2. Verify environment variables are set correctly
3. Ensure Supabase schema is applied
4. Check that data exists in Supabase tables
5. Review Next.js and Supabase documentation

Common issues:
- **"Missing Supabase environment variables"** - Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
- **"No data showing"** - Check that data is in Supabase and locale is 'en'
- **Build fails** - Run `npm run build` locally to see full error messages
- **Images not loading** - Verify Cloudinary URLs and next.config.js configuration
