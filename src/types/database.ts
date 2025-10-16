export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      techstacks: {
        Row: {
          id: string
          name: string
          img_url: string | null
          background_colour: string | null
          is_software: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          img_url?: string | null
          background_colour?: string | null
          is_software?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          img_url?: string | null
          background_colour?: string | null
          is_software?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          title: string
          slug: string
          excerpt: string | null
          description: string | null
          code_url: string | null
          project_url: string | null
          img_url: string | null
          locale: string
          created_at: string
          updated_at: string
          published_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          excerpt?: string | null
          description?: string | null
          code_url?: string | null
          project_url?: string | null
          img_url?: string | null
          locale?: string
          created_at?: string
          updated_at?: string
          published_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          excerpt?: string | null
          description?: string | null
          code_url?: string | null
          project_url?: string | null
          img_url?: string | null
          locale?: string
          created_at?: string
          updated_at?: string
          published_at?: string
        }
      }
      blog_articles: {
        Row: {
          id: string
          title: string
          slug: string
          excerpt: string | null
          content: string | null
          img_url: string | null
          read_duration: number
          locale: string
          created_at: string
          updated_at: string
          published_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          excerpt?: string | null
          content?: string | null
          img_url?: string | null
          read_duration?: number
          locale?: string
          created_at?: string
          updated_at?: string
          published_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          excerpt?: string | null
          content?: string | null
          img_url?: string | null
          read_duration?: number
          locale?: string
          created_at?: string
          updated_at?: string
          published_at?: string
        }
      }
      about: {
        Row: {
          id: string
          content: string | null
          locale: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          content?: string | null
          locale: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          content?: string | null
          locale?: string
          created_at?: string
          updated_at?: string
        }
      }
      about_skills: {
        Row: {
          id: string
          about_id: string
          softskills: string[] | null
          languages: string[] | null
          sprachen: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          about_id: string
          softskills?: string[] | null
          languages?: string[] | null
          sprachen?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          about_id?: string
          softskills?: string[] | null
          languages?: string[] | null
          sprachen?: string[] | null
          created_at?: string
          updated_at?: string
        }
      }
      project_techstacks: {
        Row: {
          id: string
          project_id: string
          techstack_id: string
          created_at: string
        }
        Insert: {
          id?: string
          project_id: string
          techstack_id: string
          created_at?: string
        }
        Update: {
          id?: string
          project_id?: string
          techstack_id?: string
          created_at?: string
        }
      }
      about_techstacks: {
        Row: {
          id: string
          about_id: string
          techstack_id: string
          created_at: string
        }
        Insert: {
          id?: string
          about_id: string
          techstack_id: string
          created_at?: string
        }
        Update: {
          id?: string
          about_id?: string
          techstack_id?: string
          created_at?: string
        }
      }
    }
    Views: {
      projects_with_techstacks: {
        Row: {
          id: string
          title: string
          slug: string
          excerpt: string | null
          description: string | null
          code_url: string | null
          project_url: string | null
          img_url: string | null
          locale: string
          created_at: string
          updated_at: string
          published_at: string
          techstacks: Json
        }
      }
      about_with_techstacks: {
        Row: {
          id: string
          content: string | null
          locale: string
          created_at: string
          updated_at: string
          softskills: string[] | null
          languages: string[] | null
          sprachen: string[] | null
          techstacks: Json
        }
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

// Helper types
export type TechStack = Database['public']['Tables']['techstacks']['Row']
export type Project = Database['public']['Tables']['projects']['Row']
export type BlogArticle = Database['public']['Tables']['blog_articles']['Row']
export type About = Database['public']['Tables']['about']['Row']
export type AboutSkills = Database['public']['Tables']['about_skills']['Row']

export type ProjectWithTechstacks = Database['public']['Views']['projects_with_techstacks']['Row']
export type AboutWithTechstacks = Database['public']['Views']['about_with_techstacks']['Row']
