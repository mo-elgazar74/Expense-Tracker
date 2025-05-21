import express from "express";
import verifyToken from "../../middleware/verifyToken.js";
import {
  createIncome,
  getAllIncome,
  getIncomeById,
  updateIncome,
  deleteIncome,
} from "./income.controller.js";

const incomeRouter = express.Router();

incomeRouter.use(verifyToken);

incomeRouter.route("/").post(createIncome).get(getAllIncome);

incomeRouter
  .route("/:id")
  .get(getIncomeById)
  .put(updateIncome)
  .delete(deleteIncome);

export default incomeRouter;
