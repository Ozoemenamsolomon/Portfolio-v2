import React from "react"
import styled from "styled-components"

const HamburgerBtn = () => {
  return (
    <>
      <ButtonDiv>
        <Line className="line"></Line>
      </ButtonDiv>
    </>
  )
}

export default HamburgerBtn

const ButtonDiv = styled.button`
  --menu-size: 500px;
  --displacement: -180%;
  --animation-duration: 0.5s;
  --bg-color: radial-gradient(
    circle,
    rgba(0, 119, 161, 1) 0%,
    rgba(0, 36, 84, 1) 100%
  );
  --fg-color: #fff;
  background: var(--bg-color);
  /*display:inline;*/
  width: var(--menu-size);
  height: var(--menu-size);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 35%;
  overflow: hidden;
`
// &:focus.line {
//   background-color: transparent;
//   transform: translatex(100%);
// }

const Line = styled.div`
  background-color: var(--fg-color);
  width: 75%;
  height: 10%;
  border-radius: 100vh;
  position: relative;
  display: flex;
  transition: all var(--animation-duration) ease-in;

  &:before {
    position: absolute;
    top: var(--displacement);
    content: "";
    background-color: var(--fg-color);
    width: 100%;
    height: 100%;
    /*transform:rotate(45deg);*/
    border-radius: 100vh;
    transition: all var(--animation-duration) ease-in;
  }
  &:after {
    position:absolute;
    bottom: var(--displacement);
    content:'';
    background-color:var(--fg-color);
    width:100%;
    height: 100%;
    border-radius:100vh;
    transition: all var(--animation-
  }
`
