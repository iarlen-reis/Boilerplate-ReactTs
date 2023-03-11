import styled from "styled-components";

export const AboutStyled = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 1rem;

  h1 {
    font-size: ${({ theme }) => theme.sizes.veryBig};
  }
`;
