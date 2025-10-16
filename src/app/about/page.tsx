import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { getAbout } from '@/lib/api'

export const metadata = {
  title: 'About - Solomon Ozoemenam',
  description: 'Learn more about Solomon Ozoemenam, software developer',
}

export default async function AboutPage() {
  const about = await getAbout('en') as any

  if (!about) {
    return (
      <div className="container-custom py-12">
        <h1>About Me</h1>
        <p>Content coming soon...</p>
      </div>
    )
  }

  const techStackList = about.techstacks?.map((ts: any) => ts.techstack || ts) || []
  const devTools = techStackList.filter((tech: any) => !tech.is_software)
  const softwares = techStackList.filter((tech: any) => tech.is_software)
  const skills = about.skills?.[0] || about.skills

  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>

      {about.content && (
        <div className="prose prose-lg max-w-none mb-12">
          <ReactMarkdown>{about.content}</ReactMarkdown>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Devtools</h2>
          <div className="grid grid-cols-3 gap-4">
            {devTools.map((tech: any) => (
              <div key={tech.id} className="flex flex-col items-center text-center">
                {tech.img_url && (
                  <div className="relative w-16 h-16 mb-2">
                    <Image
                      src={tech.img_url}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Softwares</h2>
          <div className="grid grid-cols-3 gap-4">
            {softwares.map((tech: any) => (
              <div key={tech.id} className="flex flex-col items-center text-center">
                {tech.img_url && (
                  <div className="relative w-16 h-16 mb-2">
                    <Image
                      src={tech.img_url}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Languages</h2>
          <ul className="list-disc list-inside space-y-2">
            {skills?.languages?.map((lang: string, index: number) => (
              <li key={index} className="capitalize">{lang}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Softskills</h2>
          <ul className="list-disc list-inside space-y-2">
            {skills?.softskills?.map((skill: string, index: number) => (
              <li key={index} className="capitalize">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
