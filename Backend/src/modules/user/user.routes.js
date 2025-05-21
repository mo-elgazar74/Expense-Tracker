import express from "express";
import { signUp, login, updateProfile } from "./user.controller.js";
import verifyToken from "../../middleware/verifyToken.js";

const userRouter = express.Router();

userRouter.post("/signup", signUp);
userRouter.post("/login", login);
userRouter.put("/update", verifyToken, updateProfile);

export default userRouter;
