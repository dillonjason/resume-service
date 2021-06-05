import { PersonalDocument } from "../../../data/schema/personal";
import { PersonalDataSource } from "../dataSource";

export function create(
  personalDataSource: PersonalDataSource,
  data: PersonalDocument
): Promise<PersonalDocument> {
  return personalDataSource.create(data);
}
