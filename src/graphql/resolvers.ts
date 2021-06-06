import { IResolvers } from "graphql-tools";
import * as personalResolvers from "./personal/resolvers";
import * as skillResolvers from "./skill/resolvers";
import * as experienceResolvers from "./experience/resolvers";
import { GraphQLUpload } from "graphql-upload";

export const resolvers: IResolvers = {
  Query: {
    personal: personalResolvers.getLatest,
    skills: skillResolvers.get,
    experiences: experienceResolvers.get,
  },
  Mutation: {
    // Personal Mutations
    createPersonal: personalResolvers.create,
    updatePersonal: personalResolvers.update,
    deletePersonal: personalResolvers.remove,

    // Skill Mutations
    createSkill: skillResolvers.create,
    updateSkill: skillResolvers.update,
    deleteSkill: skillResolvers.remove,

    // Experience Mutations
    createExperience: experienceResolvers.create,
    updateExperience: experienceResolvers.update,
    deleteExperience: experienceResolvers.remove,
  },
  Upload: GraphQLUpload,
};
