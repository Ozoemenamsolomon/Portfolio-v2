import { graphql, PageProps, navigate } from "gatsby"
import React, { FC, useEffect } from "react"
import Layout from "../../components/layout"

const ProjectPage: FC<
  PageProps<{
    strapiProject: { description: string; excerpt: string; title: string }
  }>
> = ({
  data: {
    strapiProject: { description, excerpt, title },
  },
  location,
}) => {
  useEffect(() => {
    if (!description || description === excerpt) navigate("/")
  }, [])

  return (
    <Layout
      location={location}
      container={true}
      pageTitle={`${title} - Project`}
      titleVisible={false}
      description={excerpt}
    >
      <pre>{JSON.stringify(description)}</pre>
    </Layout>
  )
}

export default ProjectPage

export const pageQuery = graphql`
  query($slug: String, $id: String) {
    strapiProject(id: { eq: $id }, slug: { eq: $slug }) {
      description
      excerpt
      title
    }
  }
`
