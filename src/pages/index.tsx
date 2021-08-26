import React from "react"
import Layout, { MainWrapper } from "../components/layout"
import { Link, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Seo from "../components/seo"
// import ScrollAnimation from "react-animate-on-scroll"
// import "animate.css/animate.min.css"

// import Layout from "../components/layout"
// import Seo from "../components/seo"
interface IndexProps {}

const Index: React.FC<PageProps<IndexProps>> = () => {
  return (
    <Layout>
      <Seo title="Home of" lang="en" />

      <MainWrapper
        style={{
          flex: ".4",
          alignItems: "center",
          display: "flex",
        }}
      >
        <section>
          <div className="hello">
            <h1>
              Hello,
              <br />
              I´m Solomon.
            </h1>
            <h2>Frontend Developer</h2>
            <Link state={{ from: "home_hero" }} to="/works">
              View my portfolio
            </Link>
          </div>
          <HomeImg>
            <StaticImage
              src="../images/me.png"
              placeholder="tracedSVG"
              objectFit="contain"
              layout="constrained"
              alt="A picture of solomon in a professional outfit 😉"
              style={{
                position: `absolute`,
                bottom: 0,
                right: 0,
                width: "18rem",
                pointerEvents: "none",
                // aspectRatio: "9/2",
              }}
            />
          </HomeImg>
        </section>
      </MainWrapper>
    </Layout>
  )
}

export default Index

const HomeImg = styled.div`
  @media (max-width: 400px) {
    display: none;
  }
`
