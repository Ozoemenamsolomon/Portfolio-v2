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
import Seo from "./seo"
import Container from "./MainWrapper"
import { PageTitle } from "./Index"

export interface LayoutProps {
  location: WindowLocation
  pageTitle: string
  lang?: "en" | "de"
  container: boolean
  titleVisible?: string | false
  description?: string
}

const Layout: React.FC<LayoutProps> = ({
  children,
  location,
  lang = "en",
  pageTitle,
  container = true,
  titleVisible = true,
  description,
}) => {
  return (
    <ContextProvider>
      <LayoutDiv>
        <Seo description={description} title={pageTitle} lang={lang} />
        <SkipNavLink>Skip to content</SkipNavLink>
        <Header />
        <SkipNavContent />
        <Main>
          {container ? (
            <Container>
              {titleVisible && (
                <PageTitle>
                  {typeof titleVisible === "string" ? titleVisible : pageTitle}
                </PageTitle>
              )}{" "}
              {children}
            </Container>
          ) : (
            <>
              {titleVisible && (
                <PageTitle>
                  {typeof titleVisible === "string" ? titleVisible : pageTitle}
                </PageTitle>
              )}
              {children}
            </>
          )}
        </Main>
        <Footer locationPath={location?.pathname} />
      </LayoutDiv>
    </ContextProvider>
  )
}

export default Layout

const LayoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  & a {
    color: var(--text-colour);
  }
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
`
