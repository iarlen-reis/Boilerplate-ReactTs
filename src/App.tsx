import React, { useEffect, useState } from "react";
import GlobalStyle, { ContainerStyled } from "./styles/global";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import { lightTheme } from "./styles/themes/light";
import { darkTheme } from "./styles/themes/dark";

import {
  useGetThemeLocalStorage,
  useSaveThemeLocalStorage,
} from "./utils/themeLocalStorage";

function App() {
  const themeLocalStorage = useGetThemeLocalStorage();
  const localTheme = themeLocalStorage || lightTheme;
  const [theme, setTheme] = useState(localTheme);

  const onChangeTheme = () => {
    setTheme(theme.name === "light" ? darkTheme : lightTheme);
  };

  useEffect(() => {
    useSaveThemeLocalStorage(theme);
  }, [theme]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header onChangeTheme={onChangeTheme} />
          <ContainerStyled>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </ContainerStyled>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
