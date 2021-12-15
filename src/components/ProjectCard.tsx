import React from "react"
import styled from "styled-components"
import { SooBtn } from "./Index"

export interface ProjectProp {
  id: string
  codeUrl: string
  projectUrl: string
  title: string
  img: { url: string }
}
interface CardType {
  // title: string
  // excerpt: string
  // date: string
  project: ProjectProp
}

const ProjectCard: React.FC<CardType> = ({
  project: {
    title,
    img: { url: imgURL },
    codeUrl,
    projectUrl,
  },
}) => {
  return (
    <CardDiv>
      <CardTop>
        <img src={imgURL} alt={`Photo of ${title.toLowerCase()} project`} />
      </CardTop>
      <CardBottom>
        <CardBottomContent>
          <CardTitleH3>{title}</CardTitleH3>
          <CardExcerpt>{title + title + title}</CardExcerpt>
          <CTAs>
            <a href={codeUrl} target="_blank">
              <SooBtn
                tabIndex={-1}
                style={{
                  padding: "0.4rem",
                  display: "flex",
                  marginTop: "0",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  height={24}
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </SooBtn>
            </a>
            <a target="_blank" href={projectUrl}>
              <SooBtn
                tabIndex={-1}
                style={{
                  padding: "0.4rem",
                  display: "flex",
                  marginTop: "0",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  height={24}
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
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
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`
const CardTop = styled.div`
  border-radius: 10px;
  aspect-ratio: 16/9;
  max-width: 100%;
  overflow: hidden;
  & > img {
    width: 100%;
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

const CTAs = styled.div`
  display: flex;
  justify-content: space-between;
`
