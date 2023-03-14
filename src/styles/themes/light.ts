interface LigthThemeProps {
  name: string;
  colors: {
    primary: string,
    secondary: string,
    tertiary: string,

    headerBackground: string,

    textTitle: string,
    textTitleButton: string,

    textWhiteBanner: string,
    textBrownBanner: string,
    text: string,
    link: string,

    background: string,
  };
  sizes: {
    regular: string,
    regularPlus: string,
    small: string,
    big: string,
    bigPlus: string,
    super: string,
    superPlus: string,
  };
  font: {
    lato: string,
    lile: string,
  };
}

export const lightTheme: LigthThemeProps = {
  name: "light",
  colors: {
    primary: "#3B200B",
    secondary: "#F59A1B",
    tertiary: "#F43127",

    headerBackground: "rgba(59, 32, 11, 0.05)",

    textTitle: "#635352",
    textTitleButton: "#34201F",

    textWhiteBanner: "rgba(255, 255, 255, 0.9)",
    textBrownBanner: "rgba(29, 6, 5, 0.9)",
    text: "#FFF",
    link: "#AAA",

    background: "#FFF",
  },
  sizes: {
    small: "1.6rem",
    regular: "1.8rem",
    regularPlus: "2.28rem",
    big: "2.5rem",
    bigPlus: "2.938rem",
    super: "3.2rem",
    superPlus: "7.76rem",
  },
  font: {
    lato: "Lato, sans-serif",
    lile: "Lilita One, cursive",
  },
};
