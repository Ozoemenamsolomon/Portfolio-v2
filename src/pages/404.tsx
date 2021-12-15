import { PageProps } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"

const NotFoundPage: React.FC<PageProps> = ({ location }) => (
  <Layout container location={location} pageTitle="404: Not found" lang="en">
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
