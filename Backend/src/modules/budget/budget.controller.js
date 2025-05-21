import { Budget } from "../../../databases/models/budget.model.js";


// Create Budget
const createBudget = async (req, res) => {
  try {
    const budget = await Budget.create({
      ...req.body,
      userId: req.user.userId,
    });
    res.status(201).json({ message: "Budget created", budget });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating budget", error: error.message });
  }
};

// Get All Budgets
const getAllBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find({ userId: req.user.userId });
    res.json({ message: "Success", budgets });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching budgets", error: error.message });
  }
};

// Get Budget by ID
const getBudgetById = async (req, res) => {
  try {
    const budget = await Budget.findOne({
      _id: req.params.id,
      userId: req.user.userId,
    });
    if (!budget) return res.status(404).json({ message: "Budget not found" });
    res.json({ message: "Success", budget });
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
};

// Update Budget
const updateBudget = async (req, res) => {
  try {
    const budget = await Budget.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      req.body,
      { new: true }
    );
    if (!budget)
      return res
        .status(404)
        .json({ message: "Budget not found or unauthorized" });
    res.json({ message: "Budget updated", budget });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating budget", error: error.message });
  }
};

// Delete Budget
const deleteBudget = async (req, res) => {
  try {
    const budget = await Budget.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId,
    });
    if (!budget)
      return res
        .status(404)
        .json({ message: "Budget not found or unauthorized" });
    res.json({ message: "Budget deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting budget", error: error.message });
  }
};

export {
  createBudget,
  getAllBudgets,
  getBudgetById,
  updateBudget,
  deleteBudget,
};
