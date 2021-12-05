import * as React from "react"
import PropTypes, { string } from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Navigation from "./Navigation"
import Container from "./MainWrapper"

const Header: React.FC = () => {
  return (
    <MyHeader>
      <Container style={{ display: `flex`, justifyContent: `space-between` }}>
        <Logo>
          <Link to="/">
            <StaticImage
              width={1800}
              loading="eager"
              alt="Solozo´s Logo"
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

/* <div className="logo logo-de">
<Link to="#home_de">
  <h1>Solozo</h1>
</Link>
</div>{" "} */
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
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`
const Nav = styled.nav`
  display: flex;
  align-items: center;
`
