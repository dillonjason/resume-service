import {
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { SkillType } from "../skill/typeDef";

export const ExperienceType = new GraphQLObjectType({
  name: "Experience",
  fields: {
    id: { type: GraphQLNonNull(GraphQLString) },
    company: { type: GraphQLNonNull(GraphQLString) },
    position: { type: GraphQLNonNull(GraphQLString) },
    start: { type: GraphQLNonNull(GraphQLString) },
    end: { type: GraphQLString },
    skills: { type: GraphQLNonNull(GraphQLList(SkillType)) },
    responsibilities: { type: GraphQLNonNull(GraphQLList(GraphQLString)) },
  },
});

export const CreateExperienceInputType = new GraphQLInputObjectType({
  name: "CreateExperience",
  fields: {
    company: { type: GraphQLNonNull(GraphQLString) },
    position: { type: GraphQLNonNull(GraphQLString) },
    start: { type: GraphQLNonNull(GraphQLString) },
    end: { type: GraphQLString },
    skills: { type: GraphQLNonNull(GraphQLList(GraphQLString)) },
    responsibilities: { type: GraphQLNonNull(GraphQLList(GraphQLString)) },
  },
});

export const UpdateExperienceInputType = new GraphQLInputObjectType({
  name: "UpdateExperience",
  fields: {
    company: { type: GraphQLString },
    position: { type: GraphQLString },
    start: { type: GraphQLString },
    end: { type: GraphQLString },
    skills: { type: GraphQLList(GraphQLString) },
    responsibilities: { type: GraphQLList(GraphQLString) },
  },
});
