import * as React from "react"
import Layout, { MainWrapper } from "../components/layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

// import Layout from "../components/layout"
// import Seo from "../components/seo"

const Index: React.FC = () => (
  <Layout>
    {" "}
    <MainWrapper
      style={{
        flex: ".4",
        alignItems: "center",
        display: "flex",
      }}
    >
      <section className="home" id="home">
        <div className="hello">
          <h1>
            Hello,
            <br />
            I´m Solomon.
          </h1>
          <h3>Frontend Developer</h3>
          <Link state={{ from: "home_hero" }} to="/works">
            View my portfolio
          </Link>
          {/* <!-- <input type="button" value="Check my works"> --> */}
        </div>
        <HomeImg>
          <StaticImage
            src="../images/me.png"
            placeholder="tracedSVG"
            alt="A picture of solomon in a professional outfit 😉"
            style={{
              position: `absolute`,
              bottom: 0,
              right: 0,
              width: "18rem",
            }}
          />
        </HomeImg>
      </section>
    </MainWrapper>
  </Layout>
)

export default Index

const HomeImg = styled.div`
  @media (max-width: 400px) {
    display: none;
  }
`
