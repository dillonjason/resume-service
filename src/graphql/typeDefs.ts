import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  printSchema,
} from "graphql";

import { ExperienceType } from "./experience/typeDef";
import { CreatePersonalInputType, PersonalType } from "./personal/typeDef";
import { SkillType } from "./skill/typeDef";

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
    createPersonal: {
      type: GraphQLNonNull(PersonalType),
      args: {
        data: { type: CreatePersonalInputType },
      },
    },
  },
});

const schema = new GraphQLSchema({
  types: [QueryType, MutationType, PersonalType, ExperienceType, SkillType],
});

export const typeDefs = printSchema(schema);
