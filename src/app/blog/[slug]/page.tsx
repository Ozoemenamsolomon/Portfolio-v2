import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { getBlogArticleBySlug, getBlogArticles } from '@/lib/api'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = await getBlogArticleBySlug(params.slug)
  
  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} - Solomon Ozoemenam`,
    description: article.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const article = await getBlogArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const formattedDate = new Date(article.published_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div>
      {article.img_url && (
        <div 
          className="w-full py-24 bg-cover bg-center bg-blend-multiply bg-soo-blue"
          style={{ backgroundImage: `url(${article.img_url})` }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white px-4">
            {article.title}
          </h1>
        </div>
      )}

      <div className="container-custom py-12 max-w-4xl">
        <div className="text-gray-500 dark:text-gray-400 mb-8 text-center">
          Published: {formattedDate} • {article.read_duration} min read
        </div>

        {article.content && (
          <div className="prose prose-lg max-w-none mb-12">
            <ReactMarkdown
              components={{
                code({ className, children, ...props }: any) {
                  const match = /language-(\w+)/.exec(className || '')
                  const isInline = !match
                  return !isInline && match ? (
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                },
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>
        )}

        <div className="border-t pt-8">
          <Link 
            href="/blog" 
            className="inline-block px-6 py-3 bg-gradient-to-br from-soo-blue to-soo-dark-blue text-white rounded-md hover:opacity-90 transition-opacity"
          >
            ← Back to blogs
          </Link>
        </div>
      </div>
    </div>
  )
}
