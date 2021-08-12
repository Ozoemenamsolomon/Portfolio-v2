import * as React from "react"

import Layout, { MainWrapper } from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout pageTitle="404: Not Found">
    <MainWrapper>
      <Seo title="404: Not found" />
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </MainWrapper>
  </Layout>
)

export default NotFoundPage
