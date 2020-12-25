import Head from "next/head";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import store from "~store";

const SERVER_URL = "http://localhost:4000/";
const client = new ApolloClient({
  uri: SERVER_URL,
  cache: new InMemoryCache(),
});

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
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Provider>
    </>
  );
};

export default MyApp;

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif
  }

  html, body, #__next {
    height: 100%;
  }
`;
