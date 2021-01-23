// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const expressPlayground = require("graphql-playground-middleware-express")
  .default;
const typeDefs = require("./src/typeDefs");
const resolvers = require("./src/resolvers");
const { dbConnect, models } = require("./src/database");

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
