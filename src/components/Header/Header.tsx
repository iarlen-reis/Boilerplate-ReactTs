import React, { useContext } from "react";
import { HeaderStyled, NavStyled, UlStyled } from "./Style";
import { NavLink } from "react-router-dom";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

interface HeaderProps {
  onChangeTheme: () => void;
}

const Header = ({ onChangeTheme }: HeaderProps) => {
  const { name } = useContext(ThemeContext);

  return (
    <HeaderStyled>
      <NavStyled>
        <NavLink to="/">Home</NavLink>
        <UlStyled>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">Sobre</NavLink>
          </li>
          <li>
            <Switch
              onChange={onChangeTheme}
              height={20}
              width={40}
              checkedIcon={false}
              uncheckedIcon={false}
              handleDiameter={20}
              offColor="#AAA"
              onColor="#323232"
              checked={name === "dark"}
            />
          </li>
        </UlStyled>
      </NavStyled>
    </HeaderStyled>
  );
};

export default Header;
