import Head from "next/head";
import { createGlobalStyle } from "styled-components";

type Props = {
  Component: any;
  pageProps: any;
};

const MyApp = ({ Component, pageProps }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>Explore / Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif
  }

  html, body, #__next {
    height: 100%;
  }
`;
