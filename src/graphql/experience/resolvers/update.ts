import { IFieldResolver } from "apollo-server-fastify";
import { Context } from "../..";
import { ExperienceDocument } from "../../../data/schema/experience";

export const update: IFieldResolver<
  unknown,
  Context,
  { id: string; data: Partial<ExperienceDocument> }
> = (_, { id, data }, { dataSources }): Promise<ExperienceDocument | null> => {
  return dataSources.experience.update(id, data);
};
