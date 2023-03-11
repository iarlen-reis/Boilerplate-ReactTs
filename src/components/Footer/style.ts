import styled from "styled-components";
import { weight } from "../../styles/weight";

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: ${weight.BoldWeight};

  padding: 2rem 1rem;

  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.primary};

  p {
    display: flex;
    column-gap: 0.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.textColor};
    transition: 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;
