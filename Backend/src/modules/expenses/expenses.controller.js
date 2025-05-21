import { Expenses } from "../../../databases/models/expenses.model.js";

const createExpense = async (req, res) => {
  try {
    const expense = await Expenses.create({
      ...req.body,
      userId: req.user.userId,
    });
    res.status(201).json({ message: "Expense created", expense });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating expense", error: error.message });
  }
};

const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expenses.find({ userId: req.user.userId });
    res.json({ message: "Success", expenses });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching expenses", error: error.message });
  }
};

const getExpenseById = async (req, res) => {
  try {
    const expense = await Expenses.findOne({
      _id: req.params.id,
      userId: req.user.userId,
    });
    if (!expense) return res.status(404).json({ message: "Expense not found" });
    res.json({ message: "Success", expense });
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
};

const updateExpense = async (req, res) => {
  try {
    const expense = await Expenses.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      req.body,
      { new: true }
    );
    if (!expense)
      return res
        .status(404)
        .json({ message: "Expense not found or unauthorized" });
    res.json({ message: "Expense updated", expense });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating expense", error: error.message });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const expense = await Expenses.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId,
    });
    if (!expense)
      return res
        .status(404)
        .json({ message: "Expense not found or unauthorized" });
    res.json({ message: "Expense deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting expense", error: error.message });
  }
};

export {
  createExpense,
  getAllExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
};
