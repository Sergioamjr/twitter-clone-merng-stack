// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
import express from "express";
import http from "http";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from "@apollo/server";
import expressPlayground from "graphql-playground-middleware-express";
import typeDefs from "./src/typeDefs";
import resolvers from "./src/resolvers";
import cors from "cors";
import { json } from "body-parser";

import { makeExecutableSchema } from "@graphql-tools/schema";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";

const port = process.env.PORT || 4000;
const app = express();
const httpServer = http.createServer(app);

(async () => {
  try {
    const schema = makeExecutableSchema({ typeDefs, resolvers });

    const server = new ApolloServer({
      schema,
      plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer }),
        {
          async serverWillStart() {
            return {
              async drainServer() {
                await serverCleanup.dispose();
              },
            };
          },
        },
      ],
      introspection: true,
    });

    const wsServer = new WebSocketServer({
      server: httpServer,
      path: "/subscriptions",
    });

    const serverCleanup = useServer({ schema }, wsServer);

    wsServer.on("connection", (ws, req) => {
      console.log(req.url);
    });

    app.get("/starter", (req, res) => {
      res.send("Hello World!");
    });

    await server.start();

    app.use(
      "/graphql",
      cors(),
      json(),
      expressMiddleware(server, {
        context: async ({ req }) => ({
          token: req.headers.token,
        }),
      })
    );

    app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

    httpServer.listen({ port }, () => {
      console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
    });

  } catch (err) {
    console.log("erro!", err);
  }
})();
