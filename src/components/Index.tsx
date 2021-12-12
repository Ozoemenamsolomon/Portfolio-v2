import React from "react"
import styled from "styled-components"

const Components = () => {
  return <div>Componenten</div>
}

export const SooBtn = styled.button`
  border: solid var(--btn-colour) 3px;
  background: var(--soo-gradient);
  box-shadow: 1.5px 1.5px 7px rgb(0 0 0 / 25%);
  color: var(--btn-colour);
  padding: 0.4rem 1rem;
  margin-top: 0.5rem;
  border-radius: 1em;
  cursor: inherit;
  transition: var(--soo-transition);

  &:hover,
  &:focus {
    box-shadow: 0px 15px 25px -5px rgb(0 0 0 / 40%);
    transform: scale(1.05);
  }
  &:active {
    box-shadow: 0px 4px 8px rgb(0 0 0 / 30%);
    transform: scale(0.95);
  }
`

export const SooHintBtn = styled(SooBtn)`
  display: flex;
  @media (max-width: 600px) {
    &:hover + p,
    &:focus + p,
    & + p:focus-within {
      height: unset;
      overflow: unset;
      padding: 0.5rem;
    }
  }
`

export default Components
