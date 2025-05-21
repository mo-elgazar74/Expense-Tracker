import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./src/modules/user/user.routes.js";
import reportRouter from "./src/modules/reports/reports.routes.js";
import recurringRouter from "./src/modules/recurringTransaction/recurringTransaction.routes.js";
import incomeRouter from "./src/modules/income/income.routes.js";
import expensesRouter from "./src/modules/expenses/expenses.routes.js";
import categoriesRouter from "./src/modules/categories/category.routes.js";
import budgetRouter from "./src/modules/budget/budget.routes.js";
import dbConnect from "./databases/dbConnection.js"
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

dbConnect;

app.use("/user",userRouter)
app.use("/reports",reportRouter)
app.use("/recurring",recurringRouter)
app.use("/income",incomeRouter)
app.use("/expenses",expensesRouter)
app.use("/category",categoriesRouter)
app.use("/budget",budgetRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
