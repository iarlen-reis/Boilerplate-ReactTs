interface LigthThemeProps {
  name: string;
  colors: {
    primary: string,
    secondary: string,
    tertiary: string,

    textColor: string,
    linkColor: string,

    background: string,
  };
  sizes: {
    regular: string,
    small: string,
    big: string,
    veryBig: string,
  };
}

export const lightTheme: LigthThemeProps = {
  name: "light",
  colors: {
    primary: "#0a516d",
    secondary: "#018790",
    tertiary: "#314c53",
    textColor: "#000",
    linkColor: "#AAA",

    background: "#FFF",
  },
  sizes: {
    regular: "1.2rem",
    small: "1rem",
    big: "1.7rem",
    veryBig: "2rem",
  },
};
