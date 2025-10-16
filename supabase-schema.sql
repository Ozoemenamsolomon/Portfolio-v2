-- Supabase SQL Schema for Portfolio Website
-- This schema replicates the Strapi data structure

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- TechStack table (equivalent to Strapi techstack collection)
CREATE TABLE techstacks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  img_url TEXT, -- Cloudinary image URL
  background_colour VARCHAR(50),
  is_software BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Projects table (equivalent to Strapi project collection)
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT,
  description TEXT,
  code_url TEXT,
  project_url TEXT,
  img_url TEXT, -- Cloudinary image URL
  locale VARCHAR(10) DEFAULT 'en',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Project-TechStack relationship (many-to-many)
CREATE TABLE project_techstacks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  techstack_id UUID REFERENCES techstacks(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(project_id, techstack_id)
);

-- Blog Articles table (equivalent to Strapi blog-article collection)
CREATE TABLE blog_articles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT, -- Markdown content
  img_url TEXT, -- Cloudinary image URL
  read_duration INTEGER DEFAULT 5, -- in minutes
  locale VARCHAR(10) DEFAULT 'en',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- About page content (equivalent to Strapi about single type)
CREATE TABLE about (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content TEXT, -- Markdown content
  locale VARCHAR(10) UNIQUE NOT NULL DEFAULT 'en',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- About-TechStack relationship (many-to-many)
CREATE TABLE about_techstacks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  about_id UUID REFERENCES about(id) ON DELETE CASCADE,
  techstack_id UUID REFERENCES techstacks(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(about_id, techstack_id)
);

-- Soft skills and languages for about page
CREATE TABLE about_skills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  about_id UUID REFERENCES about(id) ON DELETE CASCADE,
  softskills TEXT[], -- Array of soft skills
  languages TEXT[], -- Array of languages (English)
  sprachen TEXT[], -- Array of languages (German)
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_projects_locale ON projects(locale);
CREATE INDEX idx_projects_slug ON projects(slug);
CREATE INDEX idx_projects_published_at ON projects(published_at DESC);
CREATE INDEX idx_blog_articles_locale ON blog_articles(locale);
CREATE INDEX idx_blog_articles_slug ON blog_articles(slug);
CREATE INDEX idx_blog_articles_published_at ON blog_articles(published_at DESC);
CREATE INDEX idx_about_locale ON about(locale);

-- Enable Row Level Security (RLS)
ALTER TABLE techstacks ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_techstacks ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE about ENABLE ROW LEVEL SECURITY;
ALTER TABLE about_techstacks ENABLE ROW LEVEL SECURITY;
ALTER TABLE about_skills ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (anonymous users can read)
-- Note: Adjust these policies based on your security requirements

-- TechStacks - Public read access
CREATE POLICY "Public techstacks read access" ON techstacks
  FOR SELECT USING (true);

-- Projects - Public read access
CREATE POLICY "Public projects read access" ON projects
  FOR SELECT USING (true);

-- Project TechStacks - Public read access
CREATE POLICY "Public project_techstacks read access" ON project_techstacks
  FOR SELECT USING (true);

-- Blog Articles - Public read access
CREATE POLICY "Public blog_articles read access" ON blog_articles
  FOR SELECT USING (true);

-- About - Public read access
CREATE POLICY "Public about read access" ON about
  FOR SELECT USING (true);

-- About TechStacks - Public read access
CREATE POLICY "Public about_techstacks read access" ON about_techstacks
  FOR SELECT USING (true);

-- About Skills - Public read access
CREATE POLICY "Public about_skills read access" ON about_skills
  FOR SELECT USING (true);

-- Create functions for updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_techstacks_updated_at BEFORE UPDATE ON techstacks
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_articles_updated_at BEFORE UPDATE ON blog_articles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_about_updated_at BEFORE UPDATE ON about
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_about_skills_updated_at BEFORE UPDATE ON about_skills
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert default about entry for English locale
INSERT INTO about (locale, content) VALUES ('en', '');
INSERT INTO about (locale, content) VALUES ('de-DE', '');

-- Optional: Create a view for projects with their techstacks
CREATE VIEW projects_with_techstacks AS
SELECT 
  p.*,
  COALESCE(
    json_agg(
      json_build_object(
        'id', t.id,
        'name', t.name,
        'img_url', t.img_url,
        'background_colour', t.background_colour,
        'is_software', t.is_software
      )
    ) FILTER (WHERE t.id IS NOT NULL),
    '[]'
  ) as techstacks
FROM projects p
LEFT JOIN project_techstacks pt ON p.id = pt.project_id
LEFT JOIN techstacks t ON pt.techstack_id = t.id
GROUP BY p.id;

-- Optional: Create a view for about with techstacks
CREATE VIEW about_with_techstacks AS
SELECT 
  a.*,
  sk.softskills,
  sk.languages,
  sk.sprachen,
  COALESCE(
    json_agg(
      json_build_object(
        'id', t.id,
        'name', t.name,
        'img_url', t.img_url,
        'background_colour', t.background_colour,
        'is_software', t.is_software
      )
    ) FILTER (WHERE t.id IS NOT NULL),
    '[]'
  ) as techstacks
FROM about a
LEFT JOIN about_skills sk ON a.id = sk.about_id
LEFT JOIN about_techstacks at ON a.id = at.about_id
LEFT JOIN techstacks t ON at.techstack_id = t.id
GROUP BY a.id, sk.id;
