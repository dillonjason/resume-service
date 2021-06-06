import { ApolloServer } from "apollo-server-fastify";
import { FastifyPluginCallback } from "fastify";

import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
import { DataSources, dataSources } from "./dataSources";
import { authenticateRequest } from "../utils/auth";

export interface Context {
  dataSources: DataSources;
  authenticated: boolean;
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  uploads: false,
  context: async ({ request }) => {
    let authenticated = false;

    try {
      await authenticateRequest(request);
      authenticated = true;
    } catch (e) {
      // Do nothing
    }

    return { authenticated };
  },
});

export const apolloServer = async (): Promise<FastifyPluginCallback> => {
  await server.start();
  return server.createHandler();
};
