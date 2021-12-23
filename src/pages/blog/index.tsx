import { graphql, Link, PageProps } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import { SOOHint } from "../../components/Navigation"

interface BlogProp {
  allStrapiBlogArticle: {
    nodes: {
      title: string
      readDuration: number
      img: {
        url: string
      }
      slug: string
      excerpt: string
    }[]
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
      {blogPosts.map(
        ({ title, readDuration, slug, img: { url: imgURL }, excerpt }) => {
          return (
            <BlogContainer>
              <Link to={`/blog/posts/${slug}`}>
                <img
                  style={{ maxWidth: "250px", objectFit: "cover" }}
                  src={imgURL}
                  alt="Post thumbnail"
                />
              </Link>
              <div style={{ margin: ".5rem" }}>
                <Link to={`/blog/posts/${slug}`}>
                  <h2>{title}</h2>
                </Link>
                <SOOHint>
                  Read time: {readDuration}min{readDuration > 1 && "s"}
                </SOOHint>
                <p>{excerpt}</p>
              </div>
            </BlogContainer>
          )
        }
      )}
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
const BlogContainer = styled.div`
  border-bottom: 2px solid var(--text-colour);
  margin-bottom: 1rem;
  @media (min-width: 600px) {
    display: flex;
    align-items: center;
    & img,
    & a {
      min-height: 100%;
    }
  }
`
