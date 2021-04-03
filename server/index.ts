// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
import express from "express";
import http from "http";
import { ApolloServer } from "apollo-server-express";
import expressPlayground from "graphql-playground-middleware-express";
import typeDefs from "./src/typeDefs";
import resolvers from "./src/resolvers";
import { dbConnect, models } from "./src/database";

const port = process.env.PORT || 4000;
const app = express();

const server = new ApolloServer({
  subscriptions: {
    path: "/subscriptions",
    onConnect: () => {
      console.log("ws connected!");
    },
    onDisconnect: () => {
      console.log("ws disconnected!");
    },
  },
  typeDefs,
  resolvers,
  dataSources: (): any => models,
  introspection: true,
  playground: true,
});

server.applyMiddleware({ app });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

app.get("/starter", (req, res) => {
  res.send("Hello World!");
});

httpServer.listen({ port }, () => {
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  );
  console.log(
    `🚀 Subscriptions ready at ws://localhost:${port}${server.subscriptionsPath}`
  );
});

dbConnect
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("Error to connect DB: ", err);
  });
