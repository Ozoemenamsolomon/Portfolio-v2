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
      title="kjxcvkfdgkjbgd fvgnhgdndjf
     dbjngbdfsbkhbkkjxjgn bgo kxhndbl"
      readtime="4"
      excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Accusamus officia aut quaerat veniam sunt corporis corrupti sequi
      ex quam non"
      date="april 16, 2020"
      imageurl=""
    ></Card>

    <Card
      title="how to be a man"
      readtime="6"
      excerpt="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sit eaque quis odio rerum nobis similique praesentium numquam reiciendis ab! Accusantium, illum. Nulla in exercitationem omnis eligendi labore veritatis provident, ipsa aspernatur fugit? Enim distinctio ab hic, nobis dolorum eligendi!"
      date="april 16, 2020"
      imageurl=""
    ></Card>
  </Layout>
)

export default IndexPage
