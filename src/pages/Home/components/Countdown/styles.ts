import styled from "styled-components"

export const CountDownContainer = styled.div`
  font-family: 'Roboto Mono' monospace;
  font-size: 1.8rem;
  line-height: 8rem;
  color: ${props => props.theme["gray-100"]};

  display: flex;
  gap: 0.5rem;

  span {
    background: ${props => props.theme["gray-900"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media(min-width: 400px) {
    font-size: 3rem;
    gap: 0.5rem;
  }

  @media(min-width: 668px) {
    font-size: 10rem;
    gap: 1rem;
  }

`

export const Separator = styled.div`
 padding: 2rem;
 color: ${props => props.theme["green-500"]};

 width: 4rem;
 overflow: hidden;
 display: flex;
 justify-content: center;
`