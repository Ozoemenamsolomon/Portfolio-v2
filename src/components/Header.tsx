import * as React from "react"
import PropTypes, { string } from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export interface NavLinkProps {
  userLang?: string
}

const NavLinks: React.FC<NavLinkProps> = ({ userLang }) => (
  <LinkGroup>
    {userLang === "de" ? (
      <ul className="no-settings de">
        <li>
          <Link to="#about_de">Über mich</Link>{" "}
        </li>
        <li>
          <Link to="#work_de">Projekte</Link>
        </li>
        <li>
          <Link to="#process_de">Prozess</Link>
        </li>
        <li>
          <Link to="#contact_de">Kontakt</Link>
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
    ) : (
      <ul className="no-settings en">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/process">Process</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
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

const Header: React.FC = () => {
  return (
    <MyHeader>
      <Wrapper>
        <nav>
          <div className="logo logo-en">
            <Link to="/">
              <StaticImage
                width={100}
                loading="eager"
                alt="Solozo´s Logo"
                placeholder="tracedSVG"
                src="../images/soo-logo/soo_logo-blue.svg"
              />
            </Link>
          </div>
          <div className="logo logo-de">
            <Link to="#home_de">
              <h1>Solozo</h1>
            </Link>
          </div>
          <div className="navigation">
            <NavLinks userLang="en" />
          </div>
        </nav>{" "}
      </Wrapper>
    </MyHeader>
  )
}

export default Header

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const MyHeader = styled.header`
  background-color: red;
`
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`
