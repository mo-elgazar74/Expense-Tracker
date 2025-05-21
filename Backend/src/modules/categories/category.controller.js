import { Category } from "../../../databases/models/category.model.js";

// Create a category
const createCategory = async (req, res) => {
  try {
    const category = await Category.create({
      ...req.body,
      userId: req.user.userId,
    });
    res.status(201).json({ message: "Category created", category });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating category", error: error.message });
  }
};

// Get all categories for user
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({ userId: req.user.userId });
    res.json({ message: "Success", categories });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching categories", error: error.message });
  }
};

// Get category by ID
const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findOne({
      _id: req.params.id,
      userId: req.user.userId,
    });
    if (!category)
      return res.status(404).json({ message: "Category not found" });
    res.json({ message: "Success", category });
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
};

// Update category
const updateCategory = async (req, res) => {
  try {
    const category = await Category.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      req.body,
      { new: true }
    );
    if (!category)
      return res
        .status(404)
        .json({ message: "Category not found or unauthorized" });
    res.json({ message: "Category updated", category });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating category", error: error.message });
  }
};

// Delete category
const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId,
    });
    if (!category)
      return res
        .status(404)
        .json({ message: "Category not found or unauthorized" });
    res.json({ message: "Category deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting category", error: error.message });
  }
};

export {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
