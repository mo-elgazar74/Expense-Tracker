import { model, Schema, Types } from "mongoose";

const incomeSchema = new Schema(
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
    description: String,
    date: Date,
    paymentMethod: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Income = model("Income", incomeSchema);
