import { MongoDataSource } from "apollo-datasource-mongodb";
import { PersonalDocument } from "../../data/schema/personal";

export class PersonalDataSource extends MongoDataSource<PersonalDocument> {
  async getPersonal(): Promise<PersonalDocument | null | undefined> {
    const result = await this.findByFields({ active: true });
    return result[0];
  }
}
