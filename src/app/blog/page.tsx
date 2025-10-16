import { getBlogArticles } from '@/lib/api'
import BlogCard from '@/components/BlogCard'

export const metadata = {
  title: 'Blog - Solomon Ozoemenam',
  description: 'Read my thoughts on software development, design, and technology',
}

export default async function BlogPage() {
  const articles = await getBlogArticles('en')

  return (
    <div className="container-custom py-12">
      <p className="text-lg mb-8">Welcome to my blog, feel free to browse through! 😊</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>

      {articles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No blog posts yet. Check back soon!</p>
        </div>
      )}
    </div>
  )
}
