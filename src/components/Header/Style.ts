import styled from "styled-components";

import { weight } from "../../styles/weight";

export const HeaderStyled = styled.header`
  width: 100%;

  background: ${(props) => props.theme.colors.primary};
`;

export const NavStyled = styled.nav`
  max-width: 1200px;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.7rem 1rem;
  margin: 0 auto;

  a {
    color: ${({ theme }) => theme.colors.textColor};
    font-size: ${({ theme }) => theme.sizes.regular};
    font-weight: ${weight.semiBoldWeight};
  }
`;

export const UlStyled = styled.ul`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  column-gap: 0.6rem;
`;
