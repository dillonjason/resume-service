import { ApolloServer } from "apollo-server-fastify";
import { FastifyPluginCallback } from "fastify";

import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
import { dataSources } from "./dataSources";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

export const apolloServer = async (): Promise<FastifyPluginCallback> => {
  await server.start();
  return server.createHandler();
};
