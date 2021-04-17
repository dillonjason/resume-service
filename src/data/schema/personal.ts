import { Schema, Document, Model, model } from "mongoose";

interface Personal {
  firstName: string;
  lastName: string;
  email: `${string}@${string}`;
  phone: `${number}${number}${number}-${number}${number}${number}-${number}${number}${number}${number}`;
}

export interface PersonalDocument extends Personal, Document {}
export type PersonalModel = Model<PersonalDocument>;

const PersonalSchema = new Schema<PersonalDocument, PersonalModel>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

export default model<PersonalDocument, PersonalModel>(
  "Personal",
  PersonalSchema
);
