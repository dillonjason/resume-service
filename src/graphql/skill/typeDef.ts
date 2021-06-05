import {
  GraphQLEnumType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { Type } from "../../data/schema/skill";

const SkillTypeEnum = new GraphQLEnumType({
  name: "SkillType",
  values: Object.entries(Type).reduce((values, [key, value]) => {
    return { ...values, [key]: { value } };
  }, {}),
});

export const SkillType = new GraphQLObjectType({
  name: "Skill",
  fields: {
    type: { type: GraphQLNonNull(SkillTypeEnum) },
    description: { type: GraphQLNonNull(GraphQLString) },
    icon: { type: GraphQLString },
  },
});
