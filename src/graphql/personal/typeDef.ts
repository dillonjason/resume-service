import {
  GraphQLBoolean,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export const PersonalType = new GraphQLObjectType({
  name: "Personal",
  fields: {
    firstName: { type: GraphQLNonNull(GraphQLString) },
    lastName: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    phone: { type: GraphQLNonNull(GraphQLString) },
    github: { type: GraphQLString },
    linkedin: { type: GraphQLString },
    resume: { type: GraphQLString },
    bio: { type: GraphQLString },
  },
});

export const CreatePersonalInputType = new GraphQLInputObjectType({
  name: "CreatePersonal",
  fields: {
    firstName: { type: GraphQLNonNull(GraphQLString) },
    lastName: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    phone: { type: GraphQLNonNull(GraphQLString) },
    github: { type: GraphQLString },
    linkedin: { type: GraphQLString },
    resume: { type: GraphQLString },
    bio: { type: GraphQLString },
  },
});

export const UpdatePersonalInputType = new GraphQLInputObjectType({
  name: "UpdatePersonal",
  fields: {
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    github: { type: GraphQLString },
    linkedin: { type: GraphQLString },
    resume: { type: GraphQLString },
    bio: { type: GraphQLString },
  },
});
