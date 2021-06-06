import {
  GraphQLEnumType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { GraphQLUpload } from "graphql-upload";
import { Type } from "../../data/schema/skill";

const SkillTypeEnum = new GraphQLEnumType({
  name: "SkillType",
  values: Object.values(Type).reduce((values, value) => {
    return { ...values, [value]: {} };
  }, {}),
});

export const SkillType = new GraphQLObjectType({
  name: "Skill",
  fields: {
    id: { type: GraphQLNonNull(GraphQLString) },
    type: { type: GraphQLNonNull(SkillTypeEnum) },
    description: { type: GraphQLNonNull(GraphQLString) },
  },
});

export const CreateSkillInputType = new GraphQLInputObjectType({
  name: "CreateSkill",
  fields: {
    type: { type: GraphQLNonNull(SkillTypeEnum) },
    description: { type: GraphQLNonNull(GraphQLString) },
    icon: { type: GraphQLUpload },
  },
});

export const UpdateSkillInputType = new GraphQLInputObjectType({
  name: "UpdateSkill",
  fields: {
    type: { type: SkillTypeEnum },
    description: { type: GraphQLString },
    icon: { type: GraphQLUpload },
  },
});
