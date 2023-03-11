import React from "react";
import { MainStyled, TechContainer } from "./Style";
import { SiStyledcomponents, SiReact, SiTypescript } from "react-icons/si";

const Home = () => {
  return (
    <MainStyled>
      <h1>React + TypeScript + Styled-Components</h1>

      <TechContainer>
        <SiReact />
        <SiTypescript />
        <SiStyledcomponents />
      </TechContainer>
    </MainStyled>
  );
};

export default Home;
