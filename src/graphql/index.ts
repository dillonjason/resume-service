import { ApolloServer } from "apollo-server-fastify";
import { FastifyPluginCallback } from "fastify";
import { PersonalModel } from "../data/schema/personal";
import { PersonalDataSource } from "./dataSources/personal";

import { typeDefs } from "./typesDefs";
import { resolvers } from "./resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    personal: new PersonalDataSource(PersonalModel),
  }),
  playground: true,
  introspection: true,
});

export const apolloServer = async (): Promise<FastifyPluginCallback> => {
  await server.start();
  return server.createHandler();
};
