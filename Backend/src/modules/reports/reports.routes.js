import express from "express";
import verifyToken from "../../middleware/verifyToken.js";
import { getReport } from "./reports.controller.js";

const reportRouter = express.Router();

reportRouter.use(verifyToken);

reportRouter.get("/:month", getReport);

export default reportRouter;
