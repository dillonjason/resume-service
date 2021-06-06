import { IFieldResolver } from "apollo-server-fastify";
import { Context } from "../..";
import { SkillDocument } from "../../../data/schema/skill";
import { SkillInput } from "../dataSource";

export const create: IFieldResolver<unknown, Context, { data: SkillInput }> = (
  _,
  { data },
  { dataSources }
): Promise<SkillDocument> => {
  return dataSources.skill.create(data);
};
