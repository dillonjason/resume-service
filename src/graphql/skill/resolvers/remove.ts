import { IFieldResolver } from "apollo-server-fastify";
import { Context } from "../..";
import { SkillDocument } from "../../../data/schema/skill";

export const remove: IFieldResolver<unknown, Context, { id: string }> = (
  _,
  { id },
  { dataSources }
): Promise<SkillDocument | null> => {
  return dataSources.skill.remove(id);
};
