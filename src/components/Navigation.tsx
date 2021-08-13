import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import MyNavLink from "./MyNavLink"

interface NavigationProps {
  userLang: string
}

interface NavLinkProps {}
const NavLink: React.FC = () => {
  return <div>Solozo</div>
}

const Navigation: React.FC<NavigationProps> = ({ userLang }) => {
  const handleLanguageChoice = () => {
    if (typeof window !== "undefined") {
      // console.log(window.localStorage.getItem("langChoice"))
      if (window.localStorage.getItem("langChoice") === "de") {
        window.localStorage.setItem("langChoice", "en")
      } else {
        window.localStorage.setItem("langChoice", "de")
      }
    }
  }
  const handleThemeChoice = () => {
    if (typeof window !== "undefined") {
      // console.log(window.localStorage.getItem("langChoice"))
      if (window.localStorage.getItem("themeChoice") === "light") {
        window.localStorage.setItem("themeChoice", "dark")
      } else {
        window.localStorage.setItem("themeChoice", "light")
      }
    }
  }
  return userLang === "de" ? (
    <NavList className="no-settings de">
      <NavItem>
        <Link to="#about_de">Über mich</Link>{" "}
      </NavItem>
      <NavItem>
        <Link to="#work_de">Projekte</Link>
      </NavItem>
      <NavItem>
        <Link to="#process_de">Prozess</Link>
      </NavItem>
      <NavItem>
        <Link to="#contact_de">Kontakt</Link>
      </NavItem>
      <NavItem className="material-icons settings">
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
      </NavItem>
    </NavList>
  ) : (
    <NavList className="no-settings en">
      <NavItem>
        <MyNavLink to="/about">About</MyNavLink>
      </NavItem>
      <NavItem>
        <MyNavLink to="/works">Work</MyNavLink>
      </NavItem>
      <NavItem>
        <MyNavLink to="/blog/posts/process">Process</MyNavLink>
      </NavItem>
      <NavItem>
        <MyNavLink to="/contact">Contact</MyNavLink>
      </NavItem>
      <NavItem className="material-icons settings">
        <span>settings</span>
        {/* <span className="material-icons">arrow_drop_down</span> */}
        <SubNavList className="dropdown">
          <li className="settings-list-items">
            EN
            <input
              type="checkbox"
              value=""
              onChange={handleLanguageChoice}
              className="checkbox"
            />
            DE
          </li>
          <li className="material-icons moodtoggle settings-list-items">
            <button onClick={handleThemeChoice}>Toogle theme</button>
          </li>
        </SubNavList>
      </NavItem>
    </NavList>
  )
}

export default Navigation

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  height: 100%;
  @media (max-width: 900px) {
    & {
      display: none;
    }
  }
`

export const NavItem = styled.li`
  margin-right: 1em;
  height: 100%;
  & > * {
    text-decoration: none;
    color: var(--text-colour);
    height: 100%;
    display: flex;
    align-items: center;
  }
`

export const SubNavList = styled.ul`
  display: none;
`
