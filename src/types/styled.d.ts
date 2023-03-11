import "styled-components";

declare module "styled-components" {
     // eslint-disable-next-line prettier/prettier
     export interface DefaultTheme {
        name: string;
        colors: {
          primary: string,
          secondary: string,
          tertiary: string,
      
          textColor: string,
          linkColor: string,

          background: string,
        },
        sizes: {
            regular: string,
            small: string,
            big: string,
            veryBig: string,
          };
    }
}