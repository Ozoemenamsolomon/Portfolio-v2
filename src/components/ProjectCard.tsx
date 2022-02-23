import React from "react"
import styled from "styled-components"
import { StyledKBD } from "./Footer"
import { SooBtn } from "./Index"
import { CodeSVG, ViewSVG } from "./SVGs"

export interface ProjectProp {
  codeUrl: string
  projectUrl: string
  title: string
  img: { url: string }
  techstacks: {
    name: string
    backgroundColour: string
  }[]
  excerpt: string
}
interface CardType {
  project: ProjectProp
}

const ProjectCard: React.FC<CardType> = ({
  project: {
    codeUrl,
    projectUrl,
    title,
    img: { url: imgURL },
    techstacks,
    excerpt,
  },
}) => {
  return (
    <CardDiv>
      <CardTop>
        <a
          href={imgURL}
          style={{ cursor: "zoom-in" }}
          title="view image in new tab"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <Thumbnail
            src={imgURL}
            alt={`Photo of ${title.toLowerCase()} project`}
          />
        </a>
        <TechTags className="tech-tag">
          {techstacks.map(({ name, backgroundColour }, id) => (
            <StyledKBD
              key={id}
              style={{
                background: backgroundColour,
                fontSize: "small",
                color: "var(--btn-colour)",
              }}
            >
              {"#" + name}
            </StyledKBD>
          ))}
        </TechTags>
      </CardTop>
      <CardBottom>
        <CardBottomContent>
          <CardTitleH3>{title}</CardTitleH3>
          <CardExcerpt>{excerpt}</CardExcerpt>

          <CTAs>
            <a
              href={codeUrl}
              title="View source code"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <SooBtn
                tabIndex={-1}
                title="View source code"
                style={{
                  padding: "0.4rem",
                  display: "flex",
                  marginTop: "0",
                }}
              >
                <CodeSVG />
              </SooBtn>
            </a>
            <a
              target="_blank"
              title="View live demo"
              rel="nofollow noopener noreferrer"
              href={projectUrl}
            >
              <SooBtn
                tabIndex={-1}
                title="View live demo"
                style={{
                  padding: "0.4rem",
                  display: "flex",
                  marginTop: "0",
                }}
              >
                <ViewSVG />
              </SooBtn>
            </a>
          </CTAs>
        </CardBottomContent>
      </CardBottom>
    </CardDiv>
  )
}

export default ProjectCard

const CardDiv = styled.div`
  background-color: var(--firstbg);
  color: var(--text-colour);

  box-shadow: 3px 6px 7px rgb(0 0 0 / 20%);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`
const CardTop = styled.div`
  border-radius: 0.6rem;
  aspect-ratio: 16/9;
  position: relative;
  max-width: 100%;
  overflow: hidden;
`

const Thumbnail = styled.img`
  width: 100%;
  transition: transform 0.5s ease-out;
  &:hover {
    transform: scale(1.1);
    transition-duration: 3s;
  }
`
// const CardTitle = styled.div`
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   background: rgba(0, 0, 0, 0.192);
//   padding: 0.8em;
// `

const CardTitleH3 = styled.h3`
  text-transform: uppercase;
  max-width: 100%;
`

const CardExcerpt = styled.p`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 5;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  max-height: 13ch;
`

const CardBottom = styled.div`
  padding: 0.8em;
  flex-grow: 1;
`

const CardBottomContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5em 0em;
`
const TechTags = styled.div`
  display: flex;
  gap: 0.41rem;
  flex-wrap: wrap;
  padding: 0.8rem;
  position: absolute;
  isolation: isolate;

  &,
  &::before {
    top: 0;
    right: 0;
  }
  &::before {
    height: 100%;
    z-index: -1;
    width: 100%;
    content: " ";
    position: absolute;
    filter: blur(20px);
    border-radius: 1rem;
    background-color: #0000005c;
  }
`

const CTAs = styled.div`
  display: flex;
  justify-content: space-between;
`
