import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import MainWrapper from "./MainWrapper"

const Footer = () => {
  return (
    <MyFooter>
      <MainWrapper>
        <FooterP>
          Coyright&copy; {new Date().getFullYear()}
          <Link to="/">solozo.page</Link>
        </FooterP>
      </MainWrapper>
    </MyFooter>
  )
}

export default Footer
const MyFooter = styled.footer`
  padding: 1rem 0px 1.5rem;
  display: flex;
  justify-content: center;
  background-color: var(--firstbg);
  color: var(--text-colour);
`
const FooterP = styled.p`
  text-align: center;
  margin-bottom: 0;
`
