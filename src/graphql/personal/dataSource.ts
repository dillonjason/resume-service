import { MongoDataSource } from "apollo-datasource-mongodb";
import { PersonalDocument } from "../../data/schema/personal";

export class PersonalDataSource extends MongoDataSource<PersonalDocument> {
  /**
   * Get the latest personal document
   */
  async get(): Promise<PersonalDocument | null | undefined> {
    return this.model.findOne({}, {}, { sort: { created_at: 1 } });
  }

  /**
   * Create a new personal document
   */
  async create(data: PersonalDocument): Promise<PersonalDocument> {
    const newPersonal = await this.model.create(data);
    return newPersonal;
  }

  /**
   * Update a personal document
   */
  async update(
    id: string,
    data: PersonalDocument
  ): Promise<PersonalDocument | null> {
    this.deleteFromCacheById(id);
    const newPersonal = await this.model.findByIdAndUpdate(id, data, {
      new: true,
    });
    return newPersonal;
  }

  /**
   * Remove a personal document
   */
  async remove(id: string): Promise<void> {
    this.deleteFromCacheById(id);
    await this.model.findByIdAndDelete(id);
  }
}
