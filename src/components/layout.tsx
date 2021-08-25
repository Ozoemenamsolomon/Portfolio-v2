import * as React from "react"
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
    <div
      // className="lightmode"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
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
    </div>
  )
}

export default Layout

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--secondbg);
  color: var(--text-colour);
  flex: 1;
  /* min-height: 100vh; */
`

export const MainWrapper = styled.div`
  padding: 0px 1.5em;
  width: 90%;
  height: 100%;
  @media (max-width: 600px) {
    & {
      width: 100%;
      padding: 0px 1em;
    }
  }
  /* width: clamp(150px, 80%, 1200px); */
  /* max-width: 1200px;
  min-width: 74%;*/
  /* background-color: aliceblue; */
`
