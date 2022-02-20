import React from "react"
import styled from "styled-components"
import { myTechStack } from "../definiton"

export interface TechStackProps {
  techStack: myTechStack
}

const TechStack: React.FC<TechStackProps> = ({ techStack }) => {
  const title: string = `Logo of ${techStack.name} ${
    techStack.imgUrl ? "from - " + techStack.imgUrl : ""
  }`
  const alt = `Logo of ${techStack.name}`
  return (
    <TechStackDiv>
      <StyledImg src={techStack.img.url} alt={alt} title={title} />
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
const StyledImg = styled.img`
  height: 3rem;
  filter: drop-shadow(1px 2px 3px #00000050);
`
