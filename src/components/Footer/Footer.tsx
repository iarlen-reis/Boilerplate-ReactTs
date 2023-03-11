import React from "react";
import { FooterStyled } from "./style";

const Footer = () => {
  return (
    <FooterStyled>
      <p>
        Desenvolvido por
        <a
          href="https://github.com/iarlen-reis"
          target="_blank"
          rel="noreferrer"
        >
          Iarlen Reis
        </a>
      </p>
    </FooterStyled>
  );
};

export default Footer;
