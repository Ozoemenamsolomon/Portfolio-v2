import React from "react"
import styled from "styled-components"

export interface MainWrapperProps {
  style?: object
}

const MainWrapper: React.FC<MainWrapperProps> = ({ children, style }) => {
  return <MainWrapperDiv style={style}>{children}</MainWrapperDiv>
}

export default MainWrapper

const MainWrapperDiv = styled.div`
  padding: 0px 1.5em;
  width: 90%;
  height: 100%;
  @media (max-width: 600px) {
    & {
      width: 100%;
      padding: 0px 1em;
    }
  }
  /* width: clamp(150px, 80%, 1200px); */
  /* max-width: 1200px;
  min-width: 74%;*/
  /* background-color: aliceblue; */
`
