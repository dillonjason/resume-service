import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { SkillType } from "./skill";

export const ExperienceType = new GraphQLObjectType({
  name: "Experience",
  fields: {
    company: { type: GraphQLNonNull(GraphQLString) },
    position: { type: GraphQLNonNull(GraphQLString) },
    start: { type: GraphQLNonNull(GraphQLString) },
    end: { type: GraphQLString },
    skills: { type: GraphQLNonNull(GraphQLList(SkillType)) },
    responsibilities: { type: GraphQLNonNull(GraphQLList(GraphQLString)) },
  },
});
