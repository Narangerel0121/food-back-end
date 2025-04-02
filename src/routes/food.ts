import express from "express";
import { createFood } from "../controller/food";

const foodRouter = express();
foodRouter.post('/', createFood);

export { foodRouter };