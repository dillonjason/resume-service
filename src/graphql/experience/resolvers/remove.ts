import { IFieldResolver } from "apollo-server-fastify";
import { Context } from "../..";
import { ExperienceDocument } from "../../../data/schema/experience";

export const remove: IFieldResolver<unknown, Context, { id: string }> = (
  _,
  { id },
  { dataSources }
): Promise<ExperienceDocument | null> => {
  return dataSources.experience.remove(id);
};
