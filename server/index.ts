import { ApolloServer } from "apollo-server";
import typeDefs from "./src/typeDefs";
import resolvers from "./src/resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`);
});
