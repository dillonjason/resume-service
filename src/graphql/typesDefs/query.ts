import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { PersonalType } from "./personal";

export const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    personal: { type: GraphQLNonNull(PersonalType) },
  },
});
