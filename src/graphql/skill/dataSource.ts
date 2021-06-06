import { MongoDataSource } from "apollo-datasource-mongodb";
import { SkillDocument } from "../../data/schema/skill";

export class SkillDataSource extends MongoDataSource<SkillDocument> {
  /**
   * Get all skill documents
   */
  async get(): Promise<SkillDocument[]> {
    return this.model.find({});
  }

  /**
   * Create a new skill document
   */
  async create(data: SkillDocument): Promise<SkillDocument> {
    const newSkill = await this.model.create(data);
    return newSkill;
  }

  /**
   * Update a skill document
   */
  async update(
    id: string,
    data: Partial<SkillDocument>
  ): Promise<SkillDocument | null> {
    this.deleteFromCacheById(id);
    const updatedSkill = await this.model.findByIdAndUpdate(id, data, {
      new: true,
    });
    return updatedSkill;
  }

  /**
   * Remove a skill document
   */
  async remove(id: string): Promise<SkillDocument | null> {
    this.deleteFromCacheById(id);
    return this.model.findByIdAndDelete(id);
  }
}
