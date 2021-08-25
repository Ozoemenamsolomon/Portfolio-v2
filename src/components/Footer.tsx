import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { MainWrapper } from "./layout"

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
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  background-color: var(--firstbg);
  color: var(--text-colour);
`
const FooterP = styled.p`
  text-align: center;
`
