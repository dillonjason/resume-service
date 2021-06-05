import { IFieldResolver } from "apollo-server-fastify";
import { Context } from "../../";
import { SkillDocument } from "../../../data/schema/skill";

export const get: IFieldResolver<unknown, Context> = (
  _,
  __,
  { dataSources }
): Promise<SkillDocument[] | null | undefined> => {
  return dataSources.skill.get();
};
