import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"

import Header from "./Header"
import Footer from "./Footer"
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav"
import "@reach/skip-nav/styles.css"

import "./layout.css"

export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <LayoutDiv>
        <SkipNavLink />
        <Header />

        <SkipNavContent />
        <Main>{children}</Main>
        <Footer />
      </LayoutDiv>
    </React.Fragment>
  )
}

export default Layout

const LayoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  position: relative;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--secondbg);
  color: var(--text-colour);
  flex: 1;
  /* min-height: 100vh; */
`
