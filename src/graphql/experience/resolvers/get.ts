import { IFieldResolver } from "apollo-server-fastify";
import { Context } from "../../";
import { ExperienceDocument } from "../../../data/schema/experience";

export const get: IFieldResolver<unknown, Context> = (
  _,
  __,
  { dataSources }
): Promise<ExperienceDocument[] | null | undefined> => {
  return dataSources.experience.get();
};
