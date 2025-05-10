import { model, Schema, Types } from "mongoose";

const recurringTransactionSchema = new Schema(
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
    frequency: String, 
    nextPaymentDate: Date,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const RecurringTransaction = model(
  "RecurringTransaction",
  recurringTransactionSchema
);
