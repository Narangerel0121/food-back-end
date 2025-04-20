import { Router } from "express";
import { login, register } from "../controller/auth";
import { resetRequest, updatePassword } from "../controller/reset-password";
import { updateFood } from "../controller/food";
import { verifyToken } from "../middleware/verify-token";

const authRouter = Router();
authRouter.post("/register", register).post("/login", login).post("/reset-password", resetRequest).post("/update-password", verifyToken, updatePassword);

export { authRouter }