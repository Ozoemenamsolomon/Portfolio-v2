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
      activeStyle={{ borderBottom: `inset`, color: `var(--light-blue)` }}
      {...props}
    >
      {children}
    </MyLink>
  )
}

export default MyNavLink

const MyLink = styled(Link)``
