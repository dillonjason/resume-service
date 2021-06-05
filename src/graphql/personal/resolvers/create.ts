import { IFieldResolver } from "apollo-server-fastify";
import { Context } from "../..";
import { PersonalDocument } from "../../../data/schema/personal";

export const create: IFieldResolver<
  unknown,
  Context,
  { data: PersonalDocument }
> = (_, { data }, { dataSources }): Promise<PersonalDocument> => {
  return dataSources.personal.create(data);
};
