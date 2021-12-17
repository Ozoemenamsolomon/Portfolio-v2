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
  const title: string = `Logo of ${techStack.name} ${
    techStack.imgUrl ? "from - " + techStack.imgUrl : ""
  }`
  const alt =`Logo of ${techStack.name}`
  return (
    <TechStackDiv>
      <img
        style={imgStyles}
        src={techStack.img.url}
        alt={alt}
        title={title}
      />
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
