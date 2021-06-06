import { MongoDataSource } from "apollo-datasource-mongodb";
import { FileUpload } from "graphql-upload";
import { SkillDocument } from "../../data/schema/skill";
import { streamToBuffer } from "../../utils/stream/streamToBuffer";

export interface SkillInput extends Omit<SkillDocument, "icon"> {
  icon?: Promise<FileUpload>;
}

export class SkillDataSource extends MongoDataSource<SkillDocument> {
  private async iconToBuffer(icon?: Promise<FileUpload>) {
    let iconAsBuffer;

    if (icon) {
      console.log(icon);
      const { createReadStream } = await icon;
      const stream = createReadStream();
      iconAsBuffer = await streamToBuffer(stream);
    }

    return iconAsBuffer;
  }

  /**
   * Get all skill documents
   */
  async get(): Promise<SkillDocument[]> {
    return this.model.find({});
  }

  /**
   * Create a new skill document
   */
  async create(data: SkillInput): Promise<SkillDocument> {
    const icon = await this.iconToBuffer(data.icon);
    const newSkill = await this.model.create({ ...data, icon });
    return newSkill;
  }

  /**
   * Update a skill document
   */
  async update(
    id: string,
    data: Partial<SkillInput>
  ): Promise<SkillDocument | null> {
    this.deleteFromCacheById(id);

    const icon = await this.iconToBuffer(data.icon);

    const updatedSkill = await this.model.findByIdAndUpdate(
      id,
      { ...data, icon },
      {
        new: true,
      }
    );
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
