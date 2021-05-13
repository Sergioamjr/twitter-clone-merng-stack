import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import store from "~store";
import { colors, GlobalStyle } from "~theme";
import Head from "~components/Head";
import client from "./../client.config";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA;
const isProduction = process.env.NODE_ENV === "production";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
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
