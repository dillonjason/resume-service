import { IResolvers } from "graphql-tools";
import * as personalResolvers from "./personal/resolvers";
import * as skillResolvers from "./skill/resolvers";
import * as experienceResolvers from "./experience/resolvers";
import { DataSources } from "./dataSources";

interface Context {
  dataSources: DataSources;
  authenticated: boolean;
}

export const resolvers: IResolvers<unknown, Context> = {
  Query: {
    personal: (_, __, { dataSources }) =>
      personalResolvers.get(dataSources.personal),
    skills: (_, __, { dataSources }) => skillResolvers.get(dataSources.skill),
    experiences: (_, __, { dataSources }) =>
      experienceResolvers.get(dataSources.experience),
  },
  Mutation: {
    createPersonal: async (_, { data }, { dataSources, authenticated }) => {
      if (!authenticated) return null;
      return personalResolvers.create(dataSources.personal, data);
    },
  },
};
