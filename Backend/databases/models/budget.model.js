import { model, Schema, Types } from "mongoose";

const budgetSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: "User",
    },
    categoryId: {
      type: Types.ObjectId,
      ref: "Category",
    },
    amount: Number,
    startDate: Date,
    endDate: Date,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Budget = model("Budget", budgetSchema);
