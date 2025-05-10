import express from "express";
import verifyToken from "../../middleware/verifyToken.js";
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "./category.controller.js";

const categoriesRouter = express.Router();

categoriesRouter.use(verifyToken);

categoriesRouter.route("/").post(createCategory).get(getAllCategories);

categoriesRouter
  .route("/:id")
  .get(getCategoryById)
  .put(updateCategory)
  .delete(deleteCategory);

export default categoriesRouter;
