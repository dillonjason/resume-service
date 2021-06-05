import { ExperienceDocument } from "../../../data/schema/experience";
import { ExperienceDataSource } from "../dataSource";

export function get(
  experienceDataSource: ExperienceDataSource
): Promise<ExperienceDocument[]> {
  return experienceDataSource.get();
}
