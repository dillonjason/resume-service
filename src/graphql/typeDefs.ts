import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  printSchema,
} from "graphql";

import { ExperienceType } from "./experience/typeDef";
import {
  CreatePersonalInputType,
  PersonalType,
  UpdatePersonalInputType,
} from "./personal/typeDef";
import {
  CreateSkillInputType,
  SkillType,
  UpdateSkillInputType,
} from "./skill/typeDef";

export const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    personal: { type: GraphQLNonNull(PersonalType) },
    skills: { type: GraphQLNonNull(GraphQLList(SkillType)) },
    experiences: { type: GraphQLNonNull(GraphQLList(ExperienceType)) },
  },
});

export const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Personal Mutations
    createPersonal: {
      type: GraphQLNonNull(PersonalType),
      args: {
        data: { type: CreatePersonalInputType },
      },
    },
    updatePersonal: {
      type: GraphQLNonNull(PersonalType),
      args: {
        id: { type: GraphQLString },
        data: { type: UpdatePersonalInputType },
      },
    },
    deletePersonal: {
      type: GraphQLNonNull(PersonalType),
      args: {
        id: { type: GraphQLString },
      },
    },

    // Skill Mutations
    createSkill: {
      type: GraphQLNonNull(SkillType),
      args: {
        data: { type: CreateSkillInputType },
      },
    },
    updateSkill: {
      type: GraphQLNonNull(SkillType),
      args: {
        id: { type: GraphQLString },
        data: { type: UpdateSkillInputType },
      },
    },
    deleteSkill: {
      type: GraphQLNonNull(SkillType),
      args: {
        id: { type: GraphQLString },
      },
    },
  },
});

const schema = new GraphQLSchema({
  types: [QueryType, MutationType, PersonalType, ExperienceType, SkillType],
});

export const typeDefs = printSchema(schema);
