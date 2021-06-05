import { MongoDataSource } from "apollo-datasource-mongodb";
import { PersonalDocument } from "../../data/schema/personal";

export class PersonalDataSource extends MongoDataSource<PersonalDocument> {
  /**
   * Get the latest personal document
   */
  async get(): Promise<PersonalDocument | null | undefined> {
    return this.model.findOne({}, {}, { sort: { created_at: 1 } });
  }
}
