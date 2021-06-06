import { IFieldResolver } from "apollo-server-fastify";
import { Context } from "../..";
import { SkillDocument } from "../../../data/schema/skill";

export const update: IFieldResolver<
  unknown,
  Context,
  { id: string; data: Partial<SkillDocument> }
> = (_, { id, data }, { dataSources }): Promise<SkillDocument | null> => {
  return dataSources.skill.update(id, data);
};
