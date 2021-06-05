import { PersonalDataSource } from "../dataSource";

export function remove(
  personalDataSource: PersonalDataSource,
  id: string
): Promise<void> {
  return personalDataSource.remove(id);
}
