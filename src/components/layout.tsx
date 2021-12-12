import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./Header"
import Footer from "./Footer"
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav"
import "@reach/skip-nav/styles.css"
import { WindowLocation } from "@reach/router"

import "./layout.css"
import ContextProvider from "../context/ContextProvider"

export interface LayoutProps {
  location: WindowLocation
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  // TODO set classname here based on context className={"darkmode"}
  return (
    <ContextProvider>
      <React.Fragment>
        <LayoutDiv>
          <SkipNavLink>Skip to content</SkipNavLink>
          <Header />

          <SkipNavContent />
          <Main>{children}</Main>
          <Footer locationPath={location?.pathname} />
        </LayoutDiv>
      </React.Fragment>
    </ContextProvider>
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
