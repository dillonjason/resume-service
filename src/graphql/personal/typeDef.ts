import {
  GraphQLBoolean,
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
    active: { type: GraphQLNonNull(GraphQLBoolean) },
  },
});
