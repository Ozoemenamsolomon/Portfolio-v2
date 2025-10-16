import Link from 'next/link'
import Image from 'next/image'

interface TechStack {
  id: string
  name: string
  background_colour?: string | null
}

interface ProjectCardProps {
  project: {
    title: string
    slug: string
    excerpt: string | null
    img_url: string | null
    code_url?: string | null
    project_url?: string | null
    techstacks?: any
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, slug, excerpt, img_url, code_url, project_url, techstacks } = project

  // Extract techstacks array from the nested structure
  const techStackList = techstacks?.map((ts: any) => ts.techstack || ts) || []

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {img_url && (
        <div className="relative h-48 w-full">
          <Image
            src={img_url}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        {excerpt && <p className="text-gray-600 dark:text-gray-300 mb-4">{excerpt}</p>}
        
        {techStackList.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {techStackList.map((tech: TechStack) => (
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

        <div className="flex gap-4">
          <Link href={`/works/${slug}`} className="soo-btn flex-1 text-center">
            View Details
          </Link>
          {code_url && (
            <a
              href={code_url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border-2 border-soo-blue text-soo-blue rounded-md hover:bg-soo-blue hover:text-white transition-colors text-center"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
