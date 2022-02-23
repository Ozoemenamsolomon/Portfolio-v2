import { Link } from "gatsby"
import React, { FC } from "react"
import styled from "styled-components"
import { SOOHint } from "./Navigation"

export type BlogPostCard = {
  title: string
  readDuration: number
  img: {
    url: string
  }
  slug: string
  excerpt: string
}

const BlogCard: FC<{
  blogPost: BlogPostCard
}> = ({
  blogPost: {
    title,
    readDuration,
    slug,
    img: { url: imgURL },
    excerpt,
  },
}) => {
  return (
    <BlogContainer className="blog-container">
      <Link
        style={{ display: "flex", alignSelf: "stretch" }}
        to={`/blog/posts/${slug}`}
      >
        <BlogCardImage src={imgURL} alt="Post thumbnail" />
      </Link>
      <div style={{ margin: ".5rem" }}>
        <Link to={`/blog/posts/${slug}`}>
          <h2>{title}</h2>
        </Link>
        <SOOHint>
          Read time: {readDuration}min{readDuration > 1 && "s"}
        </SOOHint>
        <Excerpt>{excerpt}</Excerpt>
      </div>
    </BlogContainer>
  )
}

export default BlogCard

const BlogContainer = styled.div`
  border-bottom: 2px solid var(--text-colour);
  margin-bottom: 1rem;
  p {
    margin-bottom: 0;
  }
  &:last-child {
    border-bottom: none;
  }
  @media (min-width: 600px) {
    display: flex;
    align-items: center;
    & img,
    & a {
      min-height: 100%;
    }
  }
`
const BlogCardImage = styled.img`
  max-width: 100%;
  padding-block: 12px;
  height: 100%;
  @media (min-width: 600px) {
    max-width: 250px;
    object-fit: cover;
  }
`
const Excerpt = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`
