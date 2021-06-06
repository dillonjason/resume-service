import { IFieldResolver } from "apollo-server-fastify";
import { Context } from "../..";
import { ExperienceDocument } from "../../../data/schema/experience";

export const create: IFieldResolver<
  unknown,
  Context,
  { data: ExperienceDocument }
> = (_, { data }, { dataSources }): Promise<ExperienceDocument> => {
  return dataSources.experience.create(data);
};
