import { IResolvers } from "graphql-tools";

export const resolvers: IResolvers = {
  Query: {
    personal: async (_, __, { dataSources }) => {
      return dataSources.personal.getPersonal();
    },
  },
};
