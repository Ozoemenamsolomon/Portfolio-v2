import React from "react"
import styled from "styled-components"
import { SooBtn } from "./Index"

interface CardType {
  title: string
  excerpt: string
  date: string
}

const ProjectCard: React.FC<CardType> = props => {
  return (
    <>
      <CardDiv>
        <CardTop>
          <CardTitle>
            <CardTitleH3>{props.title}</CardTitleH3>
          </CardTitle>
        </CardTop>
        <CardBottom>
          <CardBottomContent>
            <p>{props.excerpt}</p>
            <DateButton
              style={{
                justifyContent: "space-between",
              }}
            >
              {/* <Date>{props.date}</Date> */}
              <SooBtn
                style={{
                  padding: "0.4rem",
                  display: "flex",
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
              <SooBtn
                style={{
                  padding: "0.4rem",
                  display: "flex",
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
            </DateButton>
          </CardBottomContent>
        </CardBottom>
      </CardDiv>
    </>
  )
}

export default ProjectCard

const CardDiv = styled.div`
  width: 17em;
  background-color: #fff;
  box-shadow: -9px -7px 15px rgba(0, 0, 0, 0.11);
  height: 22em;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`
const CardTop = styled.div`
  border-radius: 10px;
  flex: 1;
  background: url(https://images.unsplash.com/photo-1621275155732-2bff82c64fd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`
const CardTitle = styled.div`
  height: 100%;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: rgba(0, 0, 0, 0.192);
  padding: 0.8em;
`

const CardTitleH3 = styled.h3`
  text-transform: uppercase;
  max-width: 100%;
`

const CardBottom = styled.div`
  flex: 1;
  padding: 0.8em;
`

const CardBottomContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5em 0em;
`

const DateButton = styled.div`
  display: flex;
`
/* const Date = styled.small`
  text-transform: capitalize;
` */
