import { Income } from "../../../databases/models/income.model.js";


const createIncome = async (req, res) => {
  try {
    const income = await Income.create({
      ...req.body,
      userId: req.user.userId,
    });
    res.status(201).json({ message: "Income created", income });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating income", error: error.message });
  }
};

const getAllIncome = async (req, res) => {
  try {
    const income = await Income.find({ userId: req.user.userId });
    res.json({ message: "Success", income });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching income", error: error.message });
  }
};

const getIncomeById = async (req, res) => {
  try {
    const income = await Income.findOne({
      _id: req.params.id,
      userId: req.user.userId,
    });
    if (!income) return res.status(404).json({ message: "Income not found" });
    res.json({ message: "Success", income });
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
};

const updateIncome = async (req, res) => {
  try {
    const income = await Income.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      req.body,
      { new: true }
    );
    if (!income)
      return res
        .status(404)
        .json({ message: "Income not found or unauthorized" });
    res.json({ message: "Income updated", income });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating income", error: error.message });
  }
};

const deleteIncome = async (req, res) => {
  try {
    const income = await Income.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId,
    });
    if (!income)
      return res
        .status(404)
        .json({ message: "Income not found or unauthorized" });
    res.json({ message: "Income deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting income", error: error.message });
  }
};

export {
  createIncome,
  getAllIncome,
  getIncomeById,
  updateIncome,
  deleteIncome,
};
