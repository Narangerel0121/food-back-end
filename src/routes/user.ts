import express from "express";
import { getUser } from "../controller/user";

const userRouter = express();
userRouter.get('/', getUser);

export { userRouter }