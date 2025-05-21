import { model, Schema, Types } from "mongoose";

const reportSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: "User",
    },
    month: String, 
    totalExpenses: Number,
    totalIncome: Number,
    categoryBreakdown: [
      {
        categoryId: {
          type: Types.ObjectId,
          ref: "Category",
        },
        amount: Number,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Report = model("Report", reportSchema);
