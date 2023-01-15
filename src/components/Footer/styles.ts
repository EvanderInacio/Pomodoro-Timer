import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme["gray-500"] };
  margin-top: 8rem;
  margin-bottom: 2rem;

  span {
    font-size: 1rem;
    color: ${(props) => props.theme["gray-300"]};
    margin-top: 1rem;

    a {
      color: ${(props) => props.theme["gray-300"]};
      text-decoration: none;
      font-weight: bold;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme["gray-300"]};
        transition: all 0.4s ease-in-out;
      }
    }
  }
`