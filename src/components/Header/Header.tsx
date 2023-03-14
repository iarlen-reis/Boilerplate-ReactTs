import React, { useState } from "react";
import {
  HeaderStyled,
  HeaderContainer,
  MenuContainer,
  UlStyled,
  ContactContainer,
  UlSocial,
  NavStyled,
  WhatsappStyled,
} from "./Style";

import LogoHeader from "/logo-header.png";
import IfoodHeader from "/ifood-header.png";
import InstagramHeader from "/instagram-header.png";
import WhatsappHeader from "/whatsapp-header.png";

import { GrMenu, GrClose } from "react-icons/gr";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <HeaderStyled>
      <HeaderContainer>
        <a href="#">
          <img src={LogoHeader} alt="" />
        </a>
        <MenuContainer>
          <NavStyled>
            <UlStyled>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">promoção</a>
              </li>
              <li>
                <a href="#">cardápio</a>
              </li>
              <li>
                <a href="#">comentário</a>
              </li>
              <li>
                <a href="#">contato</a>
              </li>
            </UlStyled>
          </NavStyled>
          <ContactContainer>
            <UlSocial>
              <li>
                <a href="#">
                  <img src={IfoodHeader} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={InstagramHeader} alt="" srcSet="" />
                </a>
              </li>
            </UlSocial>
            <WhatsappStyled>
              <button>
                <img src={WhatsappHeader} alt="" />
                Contato
              </button>
            </WhatsappStyled>
          </ContactContainer>
        </MenuContainer>
      </HeaderContainer>
    </HeaderStyled>
  );
};

export default Header;
