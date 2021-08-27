import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { myTechStack } from "../definiton"

export interface TechStackProps {
  techStack: myTechStack
}
const imgStyles = {
  height: "3rem",
}

const TechStack: React.FC<TechStackProps> = ({ techStack }) => {
  const titleAndAlt: string = `Logo of ${techStack.name} ${
    techStack.imgUrl ? "from - " + techStack.imgUrl : ""
  }`
  return (
    <TechStackDiv>
      {!techStack.img.childImageSharp ? (
        <img
          style={imgStyles}
          src={techStack.img.publicURL}
          alt={titleAndAlt}
          title={titleAndAlt}
        />
      ) : (
        <div
          style={{
            height: "3rem",
            aspectRatio: "1/1",
          }}
        >
          <GatsbyImage
            style={imgStyles}
            image={techStack.img.childImageSharp.gatsbyImageData}
            alt={titleAndAlt}
            title={titleAndAlt}
          />
        </div>
      )}

      <p>{techStack.name}</p>
    </TechStackDiv>
  )
}

export default TechStack

const TechStackDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
