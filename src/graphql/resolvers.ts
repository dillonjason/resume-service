import { IResolvers } from "graphql-tools";
import * as personalResolvers from "./personal/resolvers";
import * as skillResolvers from "./skill/resolvers";
import * as experienceResolvers from "./experience/resolvers";

export const resolvers: IResolvers = {
  Query: {
    personal: personalResolvers.get,
    skills: skillResolvers.get,
    experiences: experienceResolvers.get,
  },
};
