import { SkillDocument } from "../../../data/schema/skill";
import { SkillDataSource } from "../dataSource";

export function get(
  skillDataSource: SkillDataSource
): Promise<SkillDocument[]> {
  return skillDataSource.get();
}
