import { Schema, Document, Model, model } from "mongoose";
import phoneValidator from "../validators/phone";
import emailValidator from "../validators/email";

interface Personal {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  github?: string;
  linkedin?: string;
  resume?: string;
  bio?: string;
}

export interface PersonalDocument extends Personal, Document {}
export type PersonalModel = Model<PersonalDocument>;

const PersonalSchema = new Schema<PersonalDocument, PersonalModel>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate: {
      validator: emailValidator,
    },
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: phoneValidator,
    },
  },
  github: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  resume: {
    type: String,
  },
  bio: {
    type: String,
  },
});

export const PersonalModel = model<PersonalDocument, PersonalModel>(
  "Personal",
  PersonalSchema
);
