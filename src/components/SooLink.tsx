import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"

export interface SooLinkProps {
  goingTo?: string
  href: string
}

const SooLink: React.FC<SooLinkProps> = (props, { goingTo, href }) => (
  <MyLink to={href}>{goingTo}</MyLink>
)

export const MyLink = styled(GatsbyLink)`
  color: green;
`
export default SooLink
