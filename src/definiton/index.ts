import { IGatsbyImageData } from "gatsby-plugin-image"

export interface myTechStack {
  id: string
  img: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
    publicURL: string
  }
  name: string
  imgUrl: string
  isSoftware: boolean
}
