import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin  : 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font.lato};
  }

  a {
    text-decoration: none;
  }

  ul, li {
    list-style: none;
  }

  body {
    background: ${(props) => props.theme.colors.background};
  }

  html {
    font-size: 62.5%;
  }
`;

export const ContainerStyled = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
