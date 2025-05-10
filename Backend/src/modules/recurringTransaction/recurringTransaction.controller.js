import { RecurringTransaction } from "../../../databases/models/recurringTransaction.model.js";


// Create Recurring Transaction
const createRecurring = async (req, res) => {
  try {
    const transaction = await RecurringTransaction.create({
      ...req.body,
      userId: req.user.userId,
    });
    res
      .status(201)
      .json({ message: "Recurring transaction created", transaction });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating transaction", error: error.message });
  }
};

// Get All Recurring Transactions
const getAllRecurring = async (req, res) => {
  try {
    const transactions = await RecurringTransaction.find({
      userId: req.user.userId,
    });
    res.json({ message: "Success", transactions });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching transactions", error: error.message });
  }
};

// Get Recurring Transaction by ID
const getRecurringById = async (req, res) => {
  try {
    const transaction = await RecurringTransaction.findOne({
      _id: req.params.id,
      userId: req.user.userId,
    });
    if (!transaction)
      return res.status(404).json({ message: "Transaction not found" });
    res.json({ message: "Success", transaction });
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
};

// Update Recurring Transaction
const updateRecurring = async (req, res) => {
  try {
    const transaction = await RecurringTransaction.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      req.body,
      { new: true }
    );
    if (!transaction)
      return res
        .status(404)
        .json({ message: "Transaction not found or unauthorized" });
    res.json({ message: "Transaction updated", transaction });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating transaction", error: error.message });
  }
};

// Delete Recurring Transaction
const deleteRecurring = async (req, res) => {
  try {
    const transaction = await RecurringTransaction.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId,
    });
    if (!transaction)
      return res
        .status(404)
        .json({ message: "Transaction not found or unauthorized" });
    res.json({ message: "Transaction deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting transaction", error: error.message });
  }
};

export {
  createRecurring,
  getAllRecurring,
  getRecurringById,
  updateRecurring,
  deleteRecurring,
};
