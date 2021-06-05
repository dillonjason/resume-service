import { MongoDataSource } from "apollo-datasource-mongodb";
import { ExperienceDocument } from "../../data/schema/experience";

export class ExperienceDataSource extends MongoDataSource<ExperienceDocument> {
  async get(): Promise<ExperienceDocument[]> {
    return this.model.find({});
  }
}
