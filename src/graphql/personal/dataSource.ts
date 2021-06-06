import { MongoDataSource } from "apollo-datasource-mongodb";
import { PersonalDocument } from "../../data/schema/personal";

export class PersonalDataSource extends MongoDataSource<PersonalDocument> {
  /**
   * Get the latest personal document
   */
  async getLatest(): Promise<PersonalDocument | null | undefined> {
    return this.model.findOne({}, {}, { sort: { createdAt: -1 } });
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
    data: Partial<PersonalDocument>
  ): Promise<PersonalDocument | null> {
    this.deleteFromCacheById(id);
    const updatedPersonal = await this.model.findByIdAndUpdate(id, data, {
      new: true,
    });
    return updatedPersonal;
  }

  /**
   * Remove a personal document
   */
  async remove(id: string): Promise<PersonalDocument | null> {
    this.deleteFromCacheById(id);
    return this.model.findByIdAndDelete(id);
  }
}
