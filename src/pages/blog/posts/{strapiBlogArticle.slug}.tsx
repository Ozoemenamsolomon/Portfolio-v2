import { graphql, PageProps } from "gatsby"
import React from "react"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"
import Layout from "../../../components/layout"
import Container from "../../../components/MainWrapper"
import { SOOHint } from "../../../components/Navigation"

interface BlogPostProps {
  strapiBlogArticle: {
    title: string
    readDuration: number
    content: string
    img: {
      url: string
    }
    published_at: string
  }
}

const BlogPost: React.FC<PageProps<BlogPostProps>> = ({
  pageContext,
  location,
  data: {
    strapiBlogArticle: {
      title,
      img: { url: imgURL },
      published_at,
      readDuration,
      content,
    },
  },
}) => {
  return (
    <Layout
      container={false}
      location={location}
      pageTitle={title}
      titleVisible={false}
      lang="en"
    >
      <BlogPostHero bg={imgURL}>
        <h1>{title}</h1>
      </BlogPostHero>
      <Container style={{ maxWidth: "1200px" }}>
        <section style={{ margin: "2rem 0" }} className="process" id="process">
          <SOOHint>
            Published: {new Date(published_at).toLocaleDateString()} &nbsp;
            &#8226; &nbsp; Read time: {readDuration}min{readDuration > 1 && "s"}
          </SOOHint>
          <MarkdownContainer className="process-text">
            <ReactMarkdown>{content}</ReactMarkdown>
          </MarkdownContainer>
        </section>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($id: String, $slug: String) {
    strapiBlogArticle(id: { eq: $id }, slug: { eq: $slug }) {
      title
      readDuration
      content
      img {
        url
      }
      published_at
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
const MarkdownContainer = styled.div`
  margin-top: 1rem;
  & * {
    all: revert;
  }
`
