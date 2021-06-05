import { IFieldResolver } from "apollo-server-fastify";
import { Context } from "../..";
import { PersonalDocument } from "../../../data/schema/personal";

export const update: IFieldResolver<
  unknown,
  Context,
  { id: string; data: Partial<PersonalDocument> }
> = (_, { id, data }, { dataSources }): Promise<PersonalDocument | null> => {
  return dataSources.personal.update(id, data);
};
