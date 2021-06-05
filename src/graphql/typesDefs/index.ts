import { PersonalType } from "./personal";
import { ExperienceType } from "./experience";
import { SkillType } from "./skill";
import { GraphQLSchema, printSchema } from "graphql";
import { QueryType } from "./query";

const schema = new GraphQLSchema({
  types: [QueryType, PersonalType, ExperienceType, SkillType],
});

export const typeDefs = printSchema(schema);
