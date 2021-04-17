import { Schema, Document, Model, model } from "mongoose";
import phoneValidator from "../validators/phone";
import emailValidator from "../validators/email";

interface Personal {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
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
  active: { type: Boolean, default: false },
});

export default model<PersonalDocument, PersonalModel>(
  "Personal",
  PersonalSchema
);
