import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    // borderRadius: string;
    width: {
      bigIcon: string;
      smallIcon: string;
    };
    height: {
      bigIcon: string;
      smallIcon: string;
    };
    // colors: {
    //   main: string;
    //   secondary: string;
    // };
  }
}