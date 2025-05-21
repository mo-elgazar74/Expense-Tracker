import mongoose from "mongoose";

export const dbConnect = mongoose
  .connect("mongodb://127.0.0.1:27017/expenses-tracker")
  .then(() => {
    console.log("DB connected successefully");
  })
  .catch((err) => {
    console.log("DB error", err);
  });
