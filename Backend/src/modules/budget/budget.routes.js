import express from "express";
import verifyToken from "../../middleware/verifyToken.js";
import {
  createBudget,
  getAllBudgets,
  getBudgetById,
  updateBudget,
  deleteBudget,
} from "./budget.controller.js";

const budgetRouter = express.Router();

budgetRouter.use(verifyToken);

budgetRouter.route("/").post(createBudget).get(getAllBudgets);

budgetRouter
  .route("/:id")
  .get(getBudgetById)
  .put(updateBudget)
  .delete(deleteBudget);

export default budgetRouter;
