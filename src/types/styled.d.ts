import "styled-components";

declare module "styled-components" {
     // eslint-disable-next-line prettier/prettier
     export interface DefaultTheme {
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
}