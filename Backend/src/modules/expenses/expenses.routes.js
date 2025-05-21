import express from "express";
import {
  createExpense,
  getAllExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
} from "./expenses.controller.js";
import verifyToken from "../../middleware/verifyToken.js";

const expensesRouter = express.Router();

expensesRouter.use(verifyToken)

expensesRouter.route("/")
  .post(createExpense)
  .get(getAllExpenses);

expensesRouter.route("/:id")
  .get(getExpenseById)
  .put(updateExpense)
  .delete(deleteExpense);

export default expensesRouter;
