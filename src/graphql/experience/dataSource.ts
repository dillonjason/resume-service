import { MongoDataSource } from "apollo-datasource-mongodb";
import { ExperienceDocument } from "../../data/schema/experience";

export class ExperienceDataSource extends MongoDataSource<ExperienceDocument> {
  /**
   * Get all experience documents
   */
  async get(): Promise<ExperienceDocument[]> {
    return this.model.find().populate("skills");
  }

  /**
   * Create a new experience document
   */
  async create(data: ExperienceDocument): Promise<ExperienceDocument> {
    const newExperience = await this.model.create(data);
    return newExperience.populate("skills").execPopulate();
  }

  /**
   * Update a experience document
   */
  async update(
    id: string,
    data: Partial<ExperienceDocument>
  ): Promise<ExperienceDocument | null> {
    this.deleteFromCacheById(id);
    const updatedExperience = await this.model.findByIdAndUpdate(id, data, {
      new: true,
      populate: "skills",
    });
    return updatedExperience;
  }

  /**
   * Remove a experience document
   */
  async remove(id: string): Promise<ExperienceDocument | null> {
    this.deleteFromCacheById(id);
    return this.model.findByIdAndDelete(id, { populate: "skills" });
  }
}
