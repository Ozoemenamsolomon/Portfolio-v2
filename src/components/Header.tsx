import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Navigation from "./Navigation"
import Container from "./MainWrapper"
// import { useContext } from "react"
// import { LanguageContext, ThemeContext } from "../context"

const Header: React.FC = () => {
  // const languageChoice = useContext(LanguageContext)
  // // console.log(languageChoice)

  // const themeChoice = useContext(ThemeContext)
  // console.log("theme", themeChoice)
  return (
    <MyHeader>
      <Container style={{ display: `flex`, justifyContent: `space-between` }}>
        <Logo>
          <Link to="/">
            <StaticImage
              width={1800}
              loading="eager"
              alt="Solozo's Logo"
              placeholder="tracedSVG"
              src="../images/soo-logo/soo_logo-blue.svg"
              layout="constrained"
            />
          </Link>
        </Logo>
        <Nav>
          <Navigation userLang="en" />
        </Nav>{" "}
      </Container>
    </MyHeader>
  )
}

export default Header

Header.defaultProps = {
  siteTitle: ``,
}

const MyHeader = styled.header`
  background-color: var(--firstbg);
  display: flex;
  justify-content: center;
  z-index: 5;
`

const Logo = styled.div`
  min-width: 4rem;
  width: 5rem;
  padding: 0.5rem 0;
`

const Nav = styled.nav``
