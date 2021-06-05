import { Schema, Document, Model, model } from "mongoose";

export enum Type {
  Language = "language",
  Framework = "framework",
  Orm = "orm",
  Tool = "tool",
  Self = "self",
}

interface Skill {
  type: Type;
  icon?: Buffer;
  description: string;
}

export interface SkillDocument extends Skill, Document {}
export type SkillModel = Model<SkillDocument>;

const SkillSchema = new Schema<SkillDocument, SkillModel>({
  type: { type: String, required: true, enum: Object.values(Type) },
  icon: { type: Buffer },
  description: { type: String, required: true },
});

export const SkillModel = model<SkillDocument, SkillModel>(
  "Skill",
  SkillSchema
);
