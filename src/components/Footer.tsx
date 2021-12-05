import { Link } from "gatsby"
import React, { useEffect } from "react"
import styled from "styled-components"
import Container from "./MainWrapper"

let location: string
type FooterProp = {
  locationPath: string
}

const Footer: React.FC<FooterProp> = ({ locationPath }) => {
  return (
    <MyFooter>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          flexWrap: "wrap",
        }}
      >
        <FooterP>
          Coyright&copy; {new Date().getFullYear()}
          <Link to="/">solozo.page</Link>
        </FooterP>
        <p
          style={{
            font: "small-caption",
            textAlign: "right",
            marginBottom: "0",
          }}
        >
          ps: you can tab your way through this page as it's designed and
          created with ❤ by Solozo. <br /> Found any bug or improvement
          suggestion?{" "}
          <Link
            style={{ font: "inherit" }}
            to="/contact"
            state={{ subject: `Problem with your "${locationPath}" page` }}
          >
            Contact me
          </Link>
          .
        </p>
      </Container>
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
