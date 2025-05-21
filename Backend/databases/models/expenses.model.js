import { model, Schema, Types } from "mongoose";

const expenseSchema = new Schema(
  {
    name: String,
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
    timestamps: { updatedAt: false },
    versionKey: false,
  }
);

export const Expenses = model("Expenses", expenseSchema);
