import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export interface MyNavLinkProps {
  to: string
  activeStyle?: object
}

const MyNavLink: React.FC<MyNavLinkProps> = props => {
  const { children } = props
  return (
    <MyLink
      activeClassName="active"
      activeStyle={{ borderBottom: `inset`, color: `var(--light-blue)` }}
      {...props}
    >
      {children}
    </MyLink>
  )
}

export default MyNavLink

const MyLink = styled(Link)`
  position: relative;
  &:after {
    transition: var(--soo-transition);
    content: "";
    width: 100%;
    position: absolute;
    height: 100%;
    bottom: 0;
    background-image: var(--soo-gradient);
    z-index: 1;
    transform: scaleY(0);
    transform-origin: top;
    color: var(--light-blue);
  }
  &:hover {
  }
  &:not(.active):hover:after {
    animation: emphasis 1s;
  }
  @keyframes emphasis {
    50% {
      color: var(--btn-colour);
      transform: scaleY(1);
      transform-origin: bottom;
      z-index: -1;
    }
    100% {
      z-index: 1;
      transform-origin: bottom;
    }
  }
`
