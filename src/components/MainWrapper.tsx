import styled from "styled-components"

const Container = styled.div`
  padding: 0px 1.5em;
  width: 90%;
  min-height: 100%;
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

export default Container
