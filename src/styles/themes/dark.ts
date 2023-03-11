interface DarkThemeProps {
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

export const darkTheme: DarkThemeProps = {
  name: "dark",
  colors: {
    primary: "#0d0f36",
    secondary: "#010300",
    tertiary: "#0d0f36",
    textColor: "#FFF",
    linkColor: "#0a516d",

    background: "#010300",
  },
  sizes: {
    regular: "1.2rem",
    small: "1rem",
    big: "1.7rem",
    veryBig: "2rem",
  },
};
