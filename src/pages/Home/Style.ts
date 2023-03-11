import styled from "styled-components";

export const MainStyled = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;

  text-align: center;

  h1 {
    font-size: ${({ theme }) => theme.sizes.veryBig};
  }
`;

export const TechContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 2rem;

  margin-top: 2rem;

  svg {
    font-size: ${({ theme }) => theme.sizes.veryBig};
  }
`;
