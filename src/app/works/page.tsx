import Link from 'next/link'
import { getProjects } from '@/lib/api'
import ProjectCard from '@/components/ProjectCard'

export const metadata = {
  title: 'Portfolio - Solomon Ozoemenam',
  description: 'Explore my finest projects and work',
}

export default async function WorksPage() {
  const projects = await getProjects('en')

  return (
    <div className="container-custom py-12">
      <section>
        <div className="mb-8">
          <p className="text-lg mb-6">
            Here are a few of my finest Projects.
            <br />
            To learn more about my design process using my website as a case
            study please click on the button below.
          </p>
          <Link href="/blog/typical-design-process" className="soo-btn">
            Design Process
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found. Check back soon!</p>
          </div>
        )}
      </section>
    </div>
  )
}
