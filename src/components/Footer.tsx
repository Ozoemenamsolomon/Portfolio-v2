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
        <FooterNote>
          {" "}
          Found any bug or improvement suggestion?{" "}
          <Link
            style={{ font: "inherit" }}
            to="/contact"
            state={{ subject: `Problem with your "${locationPath}" page` }}
          >
            Contact me
          </Link>
          . <br />
          &#42;you can{" "}
          <kbd
            style={{
              font: "inherit",
              fontFamily: "monospace",
              background: "var(--secondbg)",
              borderRadius: "3px",
              padding: "0px 2px",
              boxShadow:
                "rgb(0 0 0 / 17%) 0px -1px 1px 0px inset, rgb(0 0 0 / 15%) 0px -2px 2px 0px inset, rgb(0 0 0 / 10%) 0px -3px 3px 0px inset, rgb(0 0 0 / 6%) 0px 1px 1px, rgb(0 0 0 / 9%) 0px 2px 2px, rgb(0 0 0 / 9%) 0px 3px 3px, rgb(0 0 0 / 9%) 0px 4px 4px, rgb(0 0 0 / 9%) 0px 5px 5px",
            }}
          >
            tab
          </kbd>{" "}
          your way through this page as it's designed and created with ❤ by
          Solozo&#42;
        </FooterNote>
      </Container>
    </MyFooter>
  )
}

export default Footer
const MyFooter = styled.footer`
  padding: 1rem 0px;
  display: flex;
  justify-content: center;
  background-color: var(--firstbg);
  color: var(--text-colour);
`
const FooterP = styled.p`
  text-align: center;
  margin-bottom: 0;
`
const FooterNote = styled.p`
  font: small-caption;
  margin-bottom: 0;
  @media (min-width: 600px) {
    text-align: right;
  }
`
