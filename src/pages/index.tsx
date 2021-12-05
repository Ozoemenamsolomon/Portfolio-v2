import React from "react"
import Layout from "../components/layout"
import { Link, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Seo from "../components/seo"
import Container from "../components/MainWrapper"
// import ScrollAnimation from "react-animate-on-scroll"
// import "animate.css/animate.min.css"

interface IndexProps {}

const Index: React.FC<PageProps<IndexProps>> = ({ location }) => {
  // console.log(search)
  return (
    <Layout location={location}>
      <Container
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
              <SooBtn tabIndex={-1}>View my portfolio</SooBtn>
            </Link>
          </div>
          <HomeImg>
            <StaticImage
              src="../images/me.png"
              height={350}
              placeholder="tracedSVG"
              objectFit="contain"
              layout="constrained"
              alt="Solomon Ozoemenam in a professional outfit 😉"
            />
          </HomeImg>
        </section>
      </Container>
    </Layout>
  )
}

export default Index

const HomeImg = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding-left: 10rem;
  /* @media (max-width: 400px) {
    display: none;
  }
  @media (max-width: 900px) and (orientation: landscape) {
    display: none;
  } */
`
export const SooBtn = styled.button`
  border: solid var(--btn-colour) 3px;
  background: var(--soo-gradient);
  box-shadow: 1.5px 1.5px 7px rgb(0 0 0 / 25%);
  color: var(--btn-colour);
  padding: 0.4rem 1rem;
  margin-top: 0.5rem;
  border-radius: 1em;
  cursor: inherit;
`
