import { MongoDataSource } from "apollo-datasource-mongodb";
import { SkillDocument } from "../../data/schema/skill";

export class SkillDataSource extends MongoDataSource<SkillDocument> {
  async get(): Promise<SkillDocument[]> {
    return this.model.find({});
  }
}
