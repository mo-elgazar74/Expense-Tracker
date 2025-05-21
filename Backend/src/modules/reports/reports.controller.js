import mongoose from "mongoose";
import { Expenses } from "../../../databases/models/expenses.model.js";
import { Income } from "../../../databases/models/income.model.js";
import { Report } from "../../../databases/models/report.model.js";

const getReport = async (req, res) => {
  try {
    const userId = req.user.userId;
    const month = req.params.month;

    if (!month) {
      return res
        .status(400)
        .json({ message: "Please provide a month in YYYY-MM format" });
    }

    const start = new Date(`${month}-01`);
    const end = new Date(start);
    end.setMonth(end.getMonth() + 1);

    let report = await Report.findOne({ userId, month });
    if (report) {
      return res
        .status(200)
        .json({ message: "Report already generated", report });
    }

    // Aggregate expenses
    const expenses = await Expenses.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(userId),
          date: { $gte: start, $lt: end },
        },
      },
      {
        $group: {
          _id: "$categoryId",
          amount: { $sum: "$amount" },
        },
      },
    ]);

    const totalExpenses = expenses.reduce((acc, e) => acc + e.amount, 0);

    // Aggregate income
    const totalIncomeResult = await Income.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(userId),
          date: { $gte: start, $lt: end },
        },
      },
      {
        $group: {
          _id: null,
          amount: { $sum: "$amount" },
        },
      },
    ]);

    const totalIncome = totalIncomeResult[0]?.amount || 0;

    const categoryBreakdown = expenses.map((item) => ({
      categoryId: item._id,
      amount: item.amount,
    }));

    const reportData = {
      userId,
      month,
      totalExpenses,
      totalIncome,
      categoryBreakdown,
    };

    // Create new report
    report = await Report.create(reportData);

    res.status(200).json({ message: "Report generated", report });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to generate report", error: error.message });
  }
};

export { getReport };
