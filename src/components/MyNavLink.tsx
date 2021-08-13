import { Link } from "gatsby"
import React, { Children } from "react"
import styled from "styled-components"

export interface MyNavLinkProps {
  to: string
  activeStyle?: object
}

const MyNavLink: React.FC<MyNavLinkProps> = ({ children, to, activeStyle }) => {
  return (
    <MyLink
      activeStyle={{ borderBottom: `inset`, color: `var(--firstbg)` }}
      to={to}
    >
      {children}
    </MyLink>
  )
}

export default MyNavLink

const MyLink = styled(Link)``
