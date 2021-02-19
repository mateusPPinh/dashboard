import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      texts: string;
      button: string;
      icons: string;
      userName: string;
      line: string;
      card: string;
    };
  }
}
