import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"

import Header from "./Header"
import Footer from "./Footer"
import "./layout.css"

export interface LayoutProps {
  pageTitle?: string
}

const Layout: React.FC<LayoutProps> = ({ children, pageTitle }) => {
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
    <>
      <Header />

      <Main>
        {pageTitle ? (
          <MainWrapper>
            <h1>{pageTitle}</h1>
          </MainWrapper>
        ) : null}
        {children}
      </Main>
      <Footer />
    </>
  )
}

export default Layout

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

export const MainWrapper = styled.div`
  width: clamp(200px, 1200px, 1200px);
  padding: 0px 1.5em;
  background-color: aliceblue;
`
