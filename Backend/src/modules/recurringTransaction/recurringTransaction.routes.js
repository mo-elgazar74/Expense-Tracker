import express from "express";
import verifyToken from "../../middleware/verifyToken.js";
import {
  createRecurring,
  getAllRecurring,
  getRecurringById,
  updateRecurring,
  deleteRecurring,
} from "./recurringTransaction.controller.js";

const recurringRouter = express.Router();

recurringRouter.use(verifyToken);

recurringRouter.route("/").post(createRecurring).get(getAllRecurring);

recurringRouter
  .route("/:id")
  .get(getRecurringById)
  .put(updateRecurring)
  .delete(deleteRecurring);

export default recurringRouter;
