import { Schema, Document, Model, model } from "mongoose";
import { SkillDocument, SkillModel } from "./skills";

interface Experience {
  company: string;
  position: string;
  start: Date;
  end?: Date;
  skills: SkillDocument[];
  responsibilities: string[];
}

export interface ExperienceDocument extends Experience, Document {}
export type ExperienceModel = Model<ExperienceDocument>;

const ExperienceSchema = new Schema<ExperienceDocument, ExperienceModel>({
  company: { type: String, required: true },
  position: { type: String, required: true },
  start: { type: Date, required: true },
  end: { type: Date },
  skills: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: SkillModel.modelName,
    },
  ],
  responsibilities: [{ type: String, required: true }],
});

export const ExperienceModel = model<ExperienceDocument, ExperienceModel>(
  "Experience",
  ExperienceSchema
);
