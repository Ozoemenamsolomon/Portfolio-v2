import React, { useContext, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import MyNavLink from "./MyNavLink"
import { AdjustmentsIcon } from "@heroicons/react/outline"
import { changeClassBasedOnThemeChoice } from "../utils"
import { LanguageContext } from "../context"

interface NavigationProps {
  userLang: string
}

const Navigation: React.FC<NavigationProps> = ({ userLang }) => {
  // const [langChoice, setLangChoice] = useState("en")
  const { setLanguageChoice } = useContext(LanguageContext)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const themeChoice: string | null = window.localStorage.getItem(
        "themeChoice"
      )
      changeClassBasedOnThemeChoice(themeChoice)
    }
  }, [])

  const handleLanguageChoice = () => {
    if (typeof window !== "undefined") {
      const langChoice: string | null = window.localStorage.getItem(
        "langChoice"
      )

      if (langChoice === "de") {
        window.localStorage.setItem("langChoice", "en")
        setLanguageChoice?.("en")
      } else {
        window.localStorage.setItem("langChoice", "de")
        setLanguageChoice?.("de")
      }
    }
  }
  const handleThemeChoice = (e: React.FormEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value
    if (typeof window !== "undefined") {
      window.localStorage.setItem("themeChoice", inputValue)
      changeClassBasedOnThemeChoice(inputValue)
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
          <li style={{ display: "none" }} className="settings-list-items">
            <label>
              EN
              <input type="checkbox" value="" className="checkbox" />
              DE
            </label>
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
        <MyNavLink to="/about/">About</MyNavLink>
      </NavItem>
      <NavItem>
        <MyNavLink to="/works/">Work</MyNavLink>
      </NavItem>
      <NavItem>
        <MyNavLink to="/blog/posts/typical-design-process/">Process</MyNavLink>
      </NavItem>
      <NavItem>
        <MyNavLink to="/contact/">Contact</MyNavLink>
      </NavItem>
      <NavItem className="material-icons settings">
        <span>
          <NavSettings>
            <AdjustmentsIcon />
          </NavSettings>
        </span>
        <SubNavList className="dropdown">
          <li style={{ display: "none" }} className="settings-list-items">
            {/* <div style={{ display: "flex" }}> */}
            <label>
              EN
              <input
                type="checkbox"
                value=""
                onChange={handleLanguageChoice}
                className="checkbox"
              />
              DE
            </label>
            {/* </div> */}
          </li>
          <li className="moodtoggle settings-list-items">
            {/* <button onClick={handleThemeChoice}>Toogle theme</button> */}
            <ThemeChoiceContainer>
              <ThemeInputContainer>
                <input
                  type="radio"
                  id="light"
                  onClick={handleThemeChoice}
                  name="theme"
                  value="light"
                />
                <label htmlFor="light">Light</label>
              </ThemeInputContainer>
              <ThemeInputContainer>
                <input
                  type="radio"
                  id="auto"
                  onClick={handleThemeChoice}
                  name="theme"
                  value="auto"
                />
                <label htmlFor="auto">Auto</label>{" "}
              </ThemeInputContainer>
              <ThemeInputContainer>
                <input
                  type="radio"
                  id="dark"
                  onClick={handleThemeChoice}
                  name="theme"
                  value="dark"
                />
                <label htmlFor="dark">Dark</label>{" "}
              </ThemeInputContainer>
            </ThemeChoiceContainer>
            <SOOHint>&#42; Your choice is saved for your next visit</SOOHint>
          </li>
          <li>
            <SOOHint>coming soon: i18n</SOOHint>
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

  @media (max-width: 600px) {
    & > li:nth-child(n + 3):not(:last-child, :nth-last-child(2)) {
      display: none;
    }
  }
`

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 1em;
  }
  height: 100%;
  /* display: flex; */
  flex-direction: column;
  position: relative;
  & > * {
    text-decoration: none;
    color: var(--text-colour);
    min-height: 100%;
    display: flex;
    align-items: center;
  }
  &:hover > ul,
  &:focus-within > ul {
    /* display: block; */
    opacity: 1;
    pointer-events: auto;
  }
`
const NavSettings = styled.span`
  background: var(--soo-gradient);
  color: var(--btn-colour);
  border: solid #ffffff 3px;
  height: 1.6rem;
  width: 1.6rem;
  box-shadow: 2px 2px 7px #00000034;
  border-radius: 0.8rem;
  display: grid;
  place-content: center;
  justify-self: center;
  animation: pulse 2s infinite;

  & > svg {
    width: 1rem;
    stroke: var(--btn-colour);
  }
`
const ThemeChoiceContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

const ThemeInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SubNavList = styled.ul`
  /* display: none; */
  opacity: 0;
  transform: translateX(10%);
  pointer-events: none;
  position: absolute;
  right: 0;
  list-style: none;
  background-color: var(--firstbg);
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  padding: 0.5rem 1rem;
  transition: var(--soo-transition);
`
export const SOOHint = styled.p`
  opacity: 0.5;
  font-size: small;
  margin-bottom: 0;
`
