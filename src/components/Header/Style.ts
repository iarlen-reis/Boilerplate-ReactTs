import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  padding: 1rem 0;
  position: fixed;

  background: ${(props) => props.theme.colors.headerBackground};
  backdrop-filter: blur(5px);
`;

export const HeaderContainer = styled.div`
  max-width: 117rem;
  display: flex;
  align-items: center;

  column-gap: 6.1rem;

  margin: 0 auto;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavStyled = styled.nav`
  width: 100%;
`;

export const UlStyled = styled.ul`
  display: flex;
  column-gap: 1.6rem;

  margin-right: 10rem;

  li a {
    font-size: ${({ theme }) => theme.sizes.regular};
    color: ${({ theme }) => theme.colors.textTitle};
    text-transform: capitalize;
  }

  li:nth-child(1) a {
    color: ${({ theme }) => theme.colors.textTitleButton};
    font-weight: 700;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;

  column-gap: 1.3rem;
`;

export const UlSocial = styled.ul`
  display: flex;
  align-items: center;

  column-gap: 1.75rem;

  padding-right: 2rem;

  border-right: 1px solid #000;
`;

export const WhatsappStyled = styled.div`
  button {
    width: 123px;
    height: 34px;
    display: flex;

    align-items: center;
    justify-content: center;
    column-gap: 0.9rem;

    font-weight: 700;

    border: none;
    border-radius: 4px;

    cursor: pointer;

    color: ${({ theme }) => theme.colors.textTitleButton};
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
