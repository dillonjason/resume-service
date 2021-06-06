import { IFieldResolver } from "apollo-server-fastify";
import { Context } from "../..";
import { SkillDocument } from "../../../data/schema/skill";
import { SkillInput } from "../dataSource";

export const update: IFieldResolver<
  unknown,
  Context,
  { id: string; data: Partial<SkillInput> }
> = (_, { id, data }, { dataSources }): Promise<SkillDocument | null> => {
  return dataSources.skill.update(id, data);
};
