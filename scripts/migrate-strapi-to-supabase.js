/**
 * Data Migration Script: Strapi to Supabase (Template)
 * 
 * This is a TEMPLATE script showing how to migrate data from Strapi to Supabase.
 * You need to customize this based on your actual Strapi data structure.
 * 
 * SETUP:
 * 1. Make sure you have Node.js 18+ (which includes fetch) or install node-fetch
 * 2. Set environment variables in .env.local
 * 3. Update STRAPI_API_URL below with your Strapi instance URL
 * 4. Customize the data transformation logic based on your Strapi schema
 * 5. Run: node scripts/migrate-strapi-to-supabase.js
 * 
 * NOTE: This is a template. Review and customize before running!
 */

require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@supabase/supabase-js')

// Configuration - REPLACE WITH YOUR VALUES
const STRAPI_API_URL = 'https://your-strapi-instance.com/api'
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN // Optional: if auth is required

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Error: Missing Supabase environment variables')
  console.error('Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local')
  process.exit(1)
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

/**
 * Helper function to fetch from Strapi
 * Note: Requires Node.js 18+ or node-fetch package
 */
async function fetchFromStrapi(endpoint) {
  const headers = {}
  if (STRAPI_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`
  }

  try {
    const response = await fetch(`${STRAPI_API_URL}/${endpoint}`, { headers })
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }
    return response.json()
  } catch (error) {
    console.error(`Failed to fetch from Strapi (${endpoint}):`, error.message)
    throw error
  }
}

/**
 * Example migration function for projects
 * Customize based on your actual Strapi data structure
 */
async function migrateProjects() {
  console.log('\n📦 Migrating Projects...')
  
  try {
    // Fetch projects from Strapi
    const data = await fetchFromStrapi('projects?populate=*')
    console.log(`Found ${data.data?.length || 0} projects`)
    
    if (!data.data || data.data.length === 0) {
      console.log('No projects to migrate')
      return
    }

    for (const item of data.data) {
      const project = {
        title: item.attributes.title,
        slug: item.attributes.slug,
        excerpt: item.attributes.excerpt,
        description: item.attributes.description,
        code_url: item.attributes.codeUrl,
        project_url: item.attributes.projectUrl,
        img_url: item.attributes.img?.data?.attributes?.url,
        locale: item.attributes.locale || 'en',
        published_at: item.attributes.publishedAt || new Date().toISOString(),
      }

      const { error } = await supabase
        .from('projects')
        .insert(project)

      if (error) {
        console.error(`  ❌ Error inserting project "${item.attributes.title}":`, error.message)
      } else {
        console.log(`  ✓ Migrated: ${item.attributes.title}`)
      }
    }

    console.log('✅ Projects migration complete')
  } catch (error) {
    console.error('❌ Failed to migrate projects:', error.message)
  }
}

/**
 * Main migration function
 * Customize to include all your data types
 */
async function migrate() {
  console.log('╔════════════════════════════════════════╗')
  console.log('║  Strapi → Supabase Migration (TEMPLATE) ║')
  console.log('╚════════════════════════════════════════╝')
  console.log()
  console.log('⚠️  WARNING: This is a TEMPLATE script')
  console.log('Please review and customize before running!')
  console.log()
  console.log('Current configuration:')
  console.log('  Strapi URL:', STRAPI_API_URL)
  console.log('  Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
  console.log()

  if (STRAPI_API_URL === 'https://your-strapi-instance.com/api') {
    console.error('❌ Error: Please update STRAPI_API_URL in the script')
    process.exit(1)
  }

  // Add more migration functions here as needed
  await migrateProjects()
  // await migrateBlogArticles()
  // await migrateTechStacks()
  // await migrateAbout()

  console.log()
  console.log('✅ Migration process completed')
  console.log('Please verify the data in your Supabase dashboard')
}

// Run migration
migrate().catch(error => {
  console.error('❌ Migration failed:', error)
  process.exit(1)
})
