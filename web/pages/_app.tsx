import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import store from "~store";
import { colors, GlobalStyle } from "~theme";
import Head from "~components/Head";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA;
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
const isProduction = process.env.NODE_ENV === "production";

const client = new ApolloClient({
  uri: SERVER_URL,
  cache: new InMemoryCache(),
});

type Props = {
  Component: any;
  pageProps: any;
};

export default function MyApp({ Component, pageProps }: Props): JSX.Element {
  return (
    <>
      <Head isProduction={isProduction} GA_TRACKING_ID={GA_TRACKING_ID} />
      <GlobalStyle />
      <Provider store={store}>
        <ApolloProvider client={client}>
          <ThemeProvider theme={{ colors }}>
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
      </Provider>
    </>
  );
}
