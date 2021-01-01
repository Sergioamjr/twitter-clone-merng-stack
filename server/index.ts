// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
import { ApolloServer } from "apollo-server";
import typeDefs from "./src/typeDefs";
import resolvers from "./src/resolvers";
import { dbConnect, models } from "./src/database";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: (): any => models,
});

dbConnect
  .then(() => {
    console.log("DB Connected");
    server.listen().then(({ url }: { url: string }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  })
  .catch((err) => {
    console.log("Error to connect DB: ", err);
  });
