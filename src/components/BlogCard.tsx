import Link from 'next/link'
import Image from 'next/image'

interface BlogCardProps {
  article: {
    title: string
    slug: string
    excerpt: string | null
    img_url: string | null
    read_duration: number
    published_at: string
  }
}

export default function BlogCard({ article }: BlogCardProps) {
  const { title, slug, excerpt, img_url, read_duration, published_at } = article

  const formattedDate = new Date(published_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Link href={`/blog/${slug}`}>
      <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
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
          <h3 className="text-xl font-bold mb-2 hover:text-soo-blue transition-colors">
            {title}
          </h3>
          {excerpt && (
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {excerpt}
            </p>
          )}
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>{formattedDate}</span>
            <span>•</span>
            <span>{read_duration} min read</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
