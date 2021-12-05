import { Link, PageProps } from "gatsby"
import React from "react"
import { SooBtn } from "."
import { StyledKBD } from "../components/Footer"
import Layout from "../components/layout"
import Container from "../components/MainWrapper"

interface ThankYouPageProp {}

const ThankYouPage: React.FC<PageProps<ThankYouPageProp>> = ({ location }) => {
  return (
    <Layout location={location}>
      <Container>
        <h2>Thank you</h2>
        <p>
          Your Message has been received, you may choose to{" "}
          <Link to="/blog/">
            <SooBtn tabIndex={-1}>visit my blog</SooBtn>
          </Link>{" "}
          or{" "}
          <Link to="/works/">
            <SooBtn tabIndex={-1}>Checkout my previous works</SooBtn>
          </Link>
        </p>
      </Container>
    </Layout>
  )
}

export default ThankYouPage
