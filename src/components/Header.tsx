import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import SooLink from "./SooLink"
import { Link } from "gatsby"

const NavLinks = (prop: { userLang: string }) => (
  <LinkGroup>
    {prop.userLang === "de" ? (
      <ul className="no-settings de">
        <li>
          <SooLink goingTo="Über mich" href="#about_de" />
        </li>
        <li>
          <SooLink goingTo="Projekte" href="#work_de" />
        </li>
        <li>
          <SooLink href="#process_de">Prozess</SooLink>
        </li>
        <li>
          <SooLink href="#contact_de">Kontakt</SooLink>
        </li>{" "}
        <li className="material-icons settings">
          settings
          <span className="material-icons">arrow_drop_down</span>
          <ul className="dropdown">
            <li className="settings-list-items">
              EN
              <input type="checkbox" value="" className="checkbox" />
              DE
            </li>
            <li className="material-icons moodtoggle settings-list-items">
              dark_mode
            </li>
            <li className="material-icons darkmoodtoggle settings-list-items">
              light_mode
            </li>
          </ul>
        </li>
      </ul>
    ) : (
      <ul className="no-settings en">
        <li>
          <SooLink href="#about">About</SooLink>
        </li>
        <li>
          <SooLink href="#work">Work</SooLink>
        </li>
        <li>
          <SooLink href="#process">Process</SooLink>
        </li>
        <li>
          <SooLink href="#contact">Contact</SooLink>
        </li>
        <li className="material-icons settings">
          settings
          <span className="material-icons">arrow_drop_down</span>
          <ul className="dropdown">
            <li className="settings-list-items">
              EN
              <input type="checkbox" value="" className="checkbox" />
              DE
            </li>
            <li className="material-icons moodtoggle settings-list-items">
              dark_mode
            </li>
            <li className="material-icons darkmoodtoggle settings-list-items">
              light_mode
            </li>
          </ul>
        </li>
      </ul>
    )}
  </LinkGroup>
)

export const LinkGroup = styled.span``

const Header = ({}) => (
  <MyHeader>
    <Wrapper>
      <nav>
        <div className="logo logo-en">
          <Link href="#home">
            <h1>Solozo</h1>
          </Link>
        </div>
        <div className="logo logo-de">
          <Link href="#home_de">
            <h1>Solozo</h1>
          </Link>
        </div>
        <div className="navigation">
          <NavLinks userLang="de" />
        </div>
      </nav>{" "}
    </Wrapper>
  </MyHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const MyHeader = styled.header`
  background-color: red;
`
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`
