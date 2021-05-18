import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import Card from "../components/Card"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Card
      title="How to be a man"
      readtime="4"
      excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Accusamus officia aut quaerat veniam sunt corporis corrupti sequi
      ex quam non"
      date="april 16, 2020"
      imageurl=""
    ></Card>
  </Layout>
)

export default IndexPage
