import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    currency: String,
  },
  {
    timestamps: { updatedAt: false },
    versionKey: false,
  }
);

export const User = model("User", schema);
