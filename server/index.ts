// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
import express from "express";
import http from "http";
import { startStandaloneServer } from "@apollo/server/standalone";

import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from "@apollo/server";
import expressPlayground from "graphql-playground-middleware-express";
import typeDefs from "./src/typeDefs";
import resolvers from "./src/resolvers";
import { dbConnect, models } from "./src/database";
import cors from "cors";
import { json } from "body-parser";

const port = process.env.PORT || 4000;
const app = express();
const httpServer = http.createServer(app);

(async () => {
  try {
    const server = new ApolloServer({
      // subscriptions: {
      //   path: "/subscriptions",
      // },
      typeDefs,
      resolvers,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
      introspection: true,
    });

    await server.start();

    app.get("/starter", (req, res) => {
      res.send("Hello World!");
    });

    app.use(
      "/graphql",
      cors(),
      json(),
      expressMiddleware(server, {
        context: async ({ req }) => ({ token: req.headers.token }),
      })
    );

    app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

    httpServer.listen({ port }, () => {
      console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
      // console.log(
      //   `🚀 Subscriptions ready at ws://localhost:${port}${server.subscriptionsPath}`
      // );
    });

    dbConnect
      .then(() => {
        console.log("DB Connected");
      })
      .catch((err) => {
        console.log("Error to connect DB: ", err);
      });
  } catch (err) {
    console.log("erro!", err);
  }
})();

// dbConnect
//   .then(() => {
//     console.log("DB Connected");
//   })
//   .catch((err) => {
//     console.log("Error to connect DB: ", err);
//   });

// const server = new ApolloServer({
//   // subscriptions: {
//   //   path: "/subscriptions",
//   // },
//   typeDefs,
//   resolvers,
//   // dataSources: (): any => models,
//   // introspection: true,
//   // playground: true,
// });

// server.applyMiddleware({ app });

// server.installSubscriptionHandlers(httpServer);

// app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

// app.get("/starter", (req, res) => {
//   res.send("Hello World!");
// });
