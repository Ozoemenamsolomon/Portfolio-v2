import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Container from "./MainWrapper"
import { SOOHint } from "./Navigation"
import { InformationCircleIcon } from "@heroicons/react/outline"
import { SooHintBtn } from "./Index"

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
        <FooterHintContainer>
          <SooHintBtn>
            <InformationCircleIcon height="1rem" />
          </SooHintBtn>
          <FooterNote>
            {" "}
            Found any bug or improvement suggestion?{" "}
            <Link
              style={{ font: "inherit" }}
              to={`/contact?subject=Problem with your "${locationPath}" page`}
            >
              Contact me
            </Link>
            . <br />
            &#42;you can <StyledKBD>tab</StyledKBD> your way through this page,
            as it's designed and created with ❤ by Solozo&#42;
          </FooterNote>
        </FooterHintContainer>
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
  position: relative;
`
const FooterHintContainer = styled.div`
  position: absolute;
  max-width: 15rem;
  right: 3%;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  bottom: 20%;
  & > button {
    display: none;
    margin: 0;
    padding: 0.4rem;
  }
  @media (max-width: 600px) {
    & > button {
      display: flex;
    }
  }
`
const FooterP = styled.p`
  text-align: center;
  margin-bottom: 0;
`

const FooterNote = styled(SOOHint)`
  transition: var(--soo-transition);
  @media (max-width: 600px) {
    padding: 0.5rem;
    background-color: var(--firstbg);
    opacity: unset;
    text-align: right;
    height: 0px;
    overflow: hidden;
    padding: 0;
  }
`
export const StyledKBD = styled.kbd`
  font: inherit;
  font-family: monospace;
  background: var(--secondbg);
  border-radius: 3px;
  padding: 0px 2px;
  padding: 0.1rem 0.2rem;
  box-shadow: rgb(0 0 0 / 17%) 0px -1px 1px 0px inset,
    rgb(0 0 0 / 15%) 0px -2px 2px 0px inset,
    rgb(0 0 0 / 10%) 0px -3px 3px 0px inset, rgb(0 0 0 / 6%) 0px 1px 1px,
    rgb(0 0 0 / 9%) 0px 2px 2px, rgb(0 0 0 / 9%) 0px 3px 3px,
    rgb(0 0 0 / 9%) 0px 4px 4px, rgb(0 0 0 / 9%) 0px 5px 5px;
`
