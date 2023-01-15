import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 100vw;
  height: calc(100vh - 1rem);
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-900']};

  display: flex;
  flex-direction: column;
`;
