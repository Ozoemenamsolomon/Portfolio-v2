import React from "react"
import Layout from "../components/layout"
import { Link, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Seo from "../components/seo"
import MainWrapper from "../components/MainWrapper"
// import ScrollAnimation from "react-animate-on-scroll"
// import "animate.css/animate.min.css"

interface IndexProps {}

const Index: React.FC<PageProps<IndexProps>> = ({ location: { search } }) => {
  console.log(search)
  return (
    <Layout>
      <MainWrapper
        style={{
          flex: ".4",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Seo title="Home of" lang="en" />
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
  @media (max-width: 900px) and (orientation: landscape) {
    display: none;
  }
`
