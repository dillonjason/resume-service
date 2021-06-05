import { PersonalDocument } from "../../../data/schema/personal";
import { PersonalDataSource } from "../dataSource";

export function get(
  personalDataSource: PersonalDataSource
): Promise<PersonalDocument | null | undefined> {
  return personalDataSource.get();
}
