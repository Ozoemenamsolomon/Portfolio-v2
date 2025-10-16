import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { getProjectBySlug, getProjects } from '@/lib/api'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - Solomon Ozoemenam`,
    description: project.excerpt || project.description,
  }
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug) as any

  if (!project) {
    notFound()
  }

  const techStackList = project.techstacks?.map((ts: any) => ts.techstack || ts) || []

  return (
    <div className="container-custom py-12">
      <article>
        {project.img_url && (
          <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={project.img_url}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

        {techStackList.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {techStackList.map((tech: any) => (
              <span
                key={tech.id}
                className="px-3 py-1 text-sm rounded-full"
                style={{
                  backgroundColor: tech.background_colour || '#3f73a7',
                  color: '#ffffff',
                }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-4 mb-8">
          {project.project_url && (
            <a
              href={project.project_url}
              target="_blank"
              rel="noopener noreferrer"
              className="soo-btn"
            >
              View Live Site
            </a>
          )}
          {project.code_url && (
            <a
              href={project.code_url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-soo-blue text-soo-blue rounded-md hover:bg-soo-blue hover:text-white transition-colors"
            >
              View Code
            </a>
          )}
        </div>

        {project.description && (
          <div className="prose prose-lg max-w-none mb-8">
            <ReactMarkdown>{project.description}</ReactMarkdown>
          </div>
        )}

        <Link href="/works" className="text-soo-blue hover:underline">
          ← Back to Portfolio
        </Link>
      </article>
    </div>
  )
}
