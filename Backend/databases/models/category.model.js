import { model, Schema, Types } from "mongoose";

const categorySchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: "User",
    },
    name: String,
    icon: String,
    type: {
      type: String,
      enum: ["income", "expense"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Category = model("Category", categorySchema);
