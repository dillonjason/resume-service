import { IFieldResolver } from "apollo-server-fastify";
import { Context } from "../..";

export const remove: IFieldResolver<unknown, Context, { id: string }> = (
  _,
  { id },
  { dataSources }
): Promise<void> => {
  return dataSources.personal.remove(id);
};
