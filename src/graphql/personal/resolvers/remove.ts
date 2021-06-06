import { IFieldResolver } from "apollo-server-fastify";
import { Context } from "../..";
import { PersonalDocument } from "../../../data/schema/personal";

export const remove: IFieldResolver<unknown, Context, { id: string }> = (
  _,
  { id },
  { dataSources }
): Promise<PersonalDocument | null> => {
  return dataSources.personal.remove(id);
};
