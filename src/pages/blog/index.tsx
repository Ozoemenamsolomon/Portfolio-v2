import { graphql, PageProps } from "gatsby"
import React from "react"
import BlogCard, { BlogPostCard } from "../../components/BlogCard"
import Layout from "../../components/layout"

interface BlogProp {
  allStrapiBlogArticle: {
    nodes: BlogPostCard[]
  }
}

const index: React.FC<PageProps<BlogProp>> = ({
  location,
  data: {
    allStrapiBlogArticle: { nodes: blogPosts },
  },
}) => {
  return (
    <Layout container location={location} pageTitle="Blog Posts" lang="en">
      <p>Welcome to my blog, feel free to browse through! 😊</p>
      {blogPosts.map(blogPost => {
        return <BlogCard blogPost={blogPost} />
      })}
    </Layout>
  )
}

export default index

export const query = graphql`
  {
    allStrapiBlogArticle(filter: { locale: { eq: "en" } }) {
      nodes {
        title
        readDuration
        img {
          url
        }
        slug
        excerpt
      }
    }
  }
`
