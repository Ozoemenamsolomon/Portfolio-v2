import { supabase } from './supabase'
import { Project, BlogArticle, TechStack, AboutWithTechstacks } from '@/types/database'

export async function getProjects(locale: string = 'en'): Promise<Project[]> {
  const { data, error } = await supabase
    .from('projects')
    .select(`
      *,
      techstacks:project_techstacks(
        techstack:techstacks(*)
      )
    `)
    .eq('locale', locale)
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error fetching projects:', error)
    return []
  }

  return data || []
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const { data, error } = await supabase
    .from('projects')
    .select(`
      *,
      techstacks:project_techstacks(
        techstack:techstacks(*)
      )
    `)
    .eq('slug', slug)
    .single()

  if (error) {
    console.error('Error fetching project:', error)
    return null
  }

  return data
}

export async function getBlogArticles(locale: string = 'en'): Promise<BlogArticle[]> {
  const { data, error } = await supabase
    .from('blog_articles')
    .select('*')
    .eq('locale', locale)
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error fetching blog articles:', error)
    return []
  }

  return data || []
}

export async function getBlogArticleBySlug(slug: string): Promise<BlogArticle | null> {
  const { data, error } = await supabase
    .from('blog_articles')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) {
    console.error('Error fetching blog article:', error)
    return null
  }

  return data
}

export async function getAbout(locale: string = 'en') {
  const { data, error } = await supabase
    .from('about')
    .select(`
      *,
      skills:about_skills(*),
      techstacks:about_techstacks(
        techstack:techstacks(*)
      )
    `)
    .eq('locale', locale)
    .single()

  if (error) {
    console.error('Error fetching about:', error)
    return null
  }

  return data
}

export async function getTechStacks(): Promise<TechStack[]> {
  const { data, error } = await supabase
    .from('techstacks')
    .select('*')
    .order('name')

  if (error) {
    console.error('Error fetching techstacks:', error)
    return []
  }

  return data || []
}
