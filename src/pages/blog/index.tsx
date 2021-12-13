import { PageProps } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

interface BlogProp {}

const index: React.FC<PageProps<BlogProp>> = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title="Blog" lang="en" />
      Hello from my blog
    </Layout>
  )
}

export default index
