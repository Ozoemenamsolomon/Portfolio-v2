import { PageProps } from "gatsby"
import React from "react"
import Layout from "../../components/layout"

interface BlogProp {}

const index: React.FC<PageProps<BlogProp>> = ({ location }) => {
  return (
    <Layout container location={location} pageTitle="Blog" lang="en">
      Hello from my blog
    </Layout>
  )
}

export default index
