// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
import express from "express";
import { ApolloServer } from "apollo-server-express";
// eslint-disable-next-line @typescript-eslint/no-var-requires
import expressPlayground from "graphql-playground-middleware-express";
import typeDefs from "./src/typeDefs";
import resolvers from "./src/resolvers";
import { dbConnect, models } from "./src/database";

const port = process.env.PORT || 4000;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: (): any => models,
  introspection: true,
  playground: true,
});

server.applyMiddleware({ app });

app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

app.get("/starter", (req, res) => {
  res.send("Hello World!");
});

app.listen({ port }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});

dbConnect
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("Error to connect DB: ", err);
  });
