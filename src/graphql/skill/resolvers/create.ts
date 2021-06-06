import { IFieldResolver } from "apollo-server-fastify";
import { Context } from "../..";
import { SkillDocument } from "../../../data/schema/skill";

export const create: IFieldResolver<
  unknown,
  Context,
  { data: SkillDocument }
> = (_, { data }, { dataSources }): Promise<SkillDocument> => {
  return dataSources.skill.create(data);
};
