import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html, body, #__next {
    height: 100%;
  }
`;

type Props = {
  Component: any;
  pageProps: any;
};

function MyApp({ Component, pageProps }: Props): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
