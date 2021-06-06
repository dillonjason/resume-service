import { IFieldResolver } from "apollo-server-fastify";
import { Context } from "../../";
import { PersonalDocument } from "../../../data/schema/personal";

export const getLatest: IFieldResolver<unknown, Context> = (
  _,
  __,
  { dataSources }
): Promise<PersonalDocument | null | undefined> => {
  return dataSources.personal.getLatest();
};
