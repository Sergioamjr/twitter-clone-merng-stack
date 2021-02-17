import Head from "next/head";
import { Provider } from "react-redux";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import store from "~store";
import { GlobalStyle } from "~theme";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA;
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
const isProduction = process.env.NODE_ENV === "production";

const client = new ApolloClient({
  uri: SERVER_URL,
  cache: new InMemoryCache(),
});

type Props = {
  Component: JSX.Element;
  pageProps: any;
};

export default function MyApp({ Component, pageProps }: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>Explore / Twitter</title>
        <link rel="icon" href="/favicon.ico" />
        {isProduction && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
          `,
              }}
            />
          </>
        )}
      </Head>
      <GlobalStyle />
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Provider>
    </>
  );
}
