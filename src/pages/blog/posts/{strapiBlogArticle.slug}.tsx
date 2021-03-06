import { graphql, Link, PageProps } from "gatsby"
import React from "react"
import styled from "styled-components"
import BlogCard, { BlogPostCard } from "../../../components/BlogCard"
import { StyledKBD } from "../../../components/Footer"
import Layout from "../../../components/layout"
import Container from "../../../components/MainWrapper"
import { SOOHint } from "../../../components/Navigation"
import { markdownStyle } from "../../../components/styled"

interface BlogPostProps {
  strapiBlogArticle: {
    title: string
    readDuration: number
    img: {
      url: string
    }
    published_at: string
    excerpt: string
  }
  article: {
    childMarkdownRemark: {
      html: string
    }
  }
  allStrapiBlogArticle: {
    nodes: BlogPostCard[]
  }
}

const BlogPost: React.FC<PageProps<BlogPostProps>> = ({
  location,
  data: {
    strapiBlogArticle: {
      title,
      img: { url: imgURL },
      published_at,
      readDuration,
      excerpt,
    },
    article: {
      childMarkdownRemark: { html: content },
    },
    allStrapiBlogArticle: { nodes: otherBlogPosts },
  },
}) => {
  return (
    <Layout
      container={false}
      location={location}
      pageTitle={title}
      titleVisible={false}
      description={excerpt}
    >
      <BlogPostHero bg={imgURL}>
        <h1>{title}</h1>
      </BlogPostHero>
      <Container style={{ maxWidth: "1200px" }}>
        <section aria-label={`post content`} style={{ margin: "2rem 0" }}>
          <SOOHint>
            Published: {new Date(published_at).toLocaleDateString()} &nbsp;
            &#8226; &nbsp; Read time: {readDuration}min{readDuration > 1 && "s"}
          </SOOHint>
          <MarkdownContainer
            dangerouslySetInnerHTML={{ __html: content }}
            className="process-text"
          />
          <ReturnLinkContainer>
            <Link to="/blog/">&larr; Back to blogs</Link>
          </ReturnLinkContainer>
        </section>
        <OtherBlogPostsSection aria-label="other blog posts">
          <h2>Check out my other articles</h2>
          {otherBlogPosts.map(otherBlogPost => (
            <BlogCard blogPost={otherBlogPost} />
          ))}
        </OtherBlogPostsSection>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($id: String, $slug: String) {
    strapiBlogArticle(id: { eq: $id }, slug: { eq: $slug }) {
      title
      readDuration
      excerpt
      img {
        url
      }
      published_at
    }
    article(slug: { eq: $slug }) {
      childMarkdownRemark {
        html
      }
    }
    allStrapiBlogArticle(
      filter: { id: { ne: $id }, slug: { ne: $slug }, locale: { eq: "en" } }
      limit: 3
    ) {
      nodes {
        slug
        title
        img {
          url
        }
        readDuration
        excerpt
      }
    }
  }
`

export default BlogPost
const BlogPostHero = styled.div<{ bg: string }>`
  padding: 3rem 1rem;
  width: 100%;
  margin-top: -1rem;
  background-image: url(${({ bg }) => bg});
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  text-align: center;
  background-color: var(--light-blue);
  color: var(--btn-colour);
  background-blend-mode: multiply;
`

const ReturnLinkContainer = styled(StyledKBD)`
  background: var(--soo-gradient);
  a {
    padding: 0.2rem 0.5rem;
    color: var(--btn-colour);
    text-decoration: none;
  }
`

const MarkdownContainer = styled.div`
  margin: 1rem 0;
  & * {
    margin: revert;
    padding: revert;
  }
  ${markdownStyle}
`
const OtherBlogPostsSection = styled.section`
  margin: 1rem 0;
`
