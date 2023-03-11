interface ThemeProps {
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

export const useSaveThemeLocalStorage = (theme: ThemeProps): void => {
  localStorage.setItem("theme", JSON.stringify(theme));
};

export const useGetThemeLocalStorage = () => {
  const theme = localStorage.getItem("theme");

  if (theme !== null) {
    return JSON.parse(theme);
  }
};
