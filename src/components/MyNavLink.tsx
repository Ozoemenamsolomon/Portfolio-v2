import { Link } from "gatsby"
import React, { Children } from "react"
import styled from "styled-components"

export interface MyNavLinkProps {
  to: string
  activeStyle?: object
}

const MyNavLink: React.FC<MyNavLinkProps> = props => {
  const { children, to, activeStyle } = props
  return (
    <MyLink
      activeStyle={{ borderBottom: `inset`, color: `var(--light-blue)` }}
      partiallyActive={true}
      {...props}
    >
      {children}
    </MyLink>
  )
}

export default MyNavLink

const MyLink = styled(Link)``
