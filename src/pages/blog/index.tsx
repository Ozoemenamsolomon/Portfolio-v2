import { PageProps } from "gatsby"
import React from "react"
import Layout from "../../components/layout"

interface BlogProp {}

const index: React.FC<PageProps<BlogProp>> = ({ location }) => {
  //TODO make blog image not locale dependent
  return <Layout location={location}>Hello from my blog</Layout>
}

export default index
