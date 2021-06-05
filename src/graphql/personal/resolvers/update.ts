import { PersonalDocument } from "../../../data/schema/personal";
import { PersonalDataSource } from "../dataSource";

export function update(
  personalDataSource: PersonalDataSource,
  id: string,
  data: PersonalDocument
): Promise<PersonalDocument | null> {
  return personalDataSource.update(id, data);
}
