import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
const SUBSCRIPTIONS_URL = process.env.NEXT_PUBLIC_SUBSCRIPTIONS_URL;

const wsLink =
  process.browser &&
  new GraphQLWsLink(
    createClient({
      url: SUBSCRIPTIONS_URL,
      retryAttempts: 5,
    })
  );

const httpLink = new HttpLink({
  uri: SERVER_URL,
});

const getOnlySubscriptions = ({ query }: any) => {
  const definition = getMainDefinition(query);
  return (
    definition.kind === "OperationDefinition" &&
    definition.operation === "subscription"
  );
};

const splitLink = process.browser
  ? split(getOnlySubscriptions, wsLink, httpLink)
  : httpLink;

export default new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
