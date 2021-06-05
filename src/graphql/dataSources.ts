import { ExperienceModel } from "../data/schema/experience";
import { PersonalModel } from "../data/schema/personal";
import { SkillModel } from "../data/schema/skill";
import { ExperienceDataSource } from "./experience/dataSource";
import { PersonalDataSource } from "./personal/dataSource";
import { SkillDataSource } from "./skill/dataSource";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const dataSources = () => ({
  personal: new PersonalDataSource(PersonalModel),
  experience: new ExperienceDataSource(ExperienceModel),
  skill: new SkillDataSource(SkillModel),
});
